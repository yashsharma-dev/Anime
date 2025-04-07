import React, { useEffect, useRef, useState } from "react";
import "./header_search.css";
import { useNavigate, Link } from "react-router-dom";

function Search_responsive({ showMobileSearch, setShowMobileSearch }) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Fetch search suggestions with debounce
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (input.length > 0) {
        fetch(`http://127.0.0.1:8000/api/search?search=${input}`)
          .then((res) => res.json())
          .then((json) => {
            setSuggestions(json.search_results);
          })
          .catch((error) => console.error("Error fetching search results:", error));
      } else {
        setSuggestions([]);
      }
    }, 300); // 300ms delay

    return () => clearTimeout(delayDebounceFn);
  }, [input]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    if (input.trim() === "") return;
    navigate(`/searchproduct/${input}`);
    setInput(""); // Clear input after navigation
    setSuggestions([]); // Clear suggestions
    setShowMobileSearch(false); // Close mobile search overlay
  };

  return (
    <>
      {/* Search Icon to Open Mobile Search */}
      <i onClick={() => setShowMobileSearch(true)} className="bx bx-search absolute top-0 right-2" id="hidden_search-icon"></i>

      {showMobileSearch && (
        <div className="mobile-search-overlay">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
              
              
            />
            <button type="submit" onClick={handleSearch}>
            <i className="bx bx-search w-10" id="search-icon"></i></button>
            <i className="bx bx-x close-icon text-white" onClick={() => setShowMobileSearch(false)}></i>
          </div>

          {/* Display Suggestions */}
          {suggestions.length > 0 && (
            <ul className="suggestions bg-black border border-gray-200 rounded-lg shadow-lg w-full absolute left-0 top-12 z-50 max-h-96 overflow-y-auto">
              {suggestions.map((item) => (
                <li key={item.id} className="px-4 py-2 hover:bg-gray-200 transition-colors duration-200">
                  <Link to={`/searchproduct/${item.name}`} className="block text-gray-700 hover:text-gray-900 no-underline flex justify-start space-x-2">
                    <img src={item.img} width="50px" className="rounded-md" alt={item.name} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}

export default Search_responsive;
