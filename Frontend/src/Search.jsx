import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Search() {
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
  };

  return (
    <div className="search relative w-full" ref={dropdownRef}>
      {/* Search Input & Button */}


      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border rounded-md w-full"
      />

     

      <button type="submit" onClick={handleSearch}>
    <i className="bx bx-search absolute top-0 right-2" id="search-icon"></i>
  </button>


  {suggestions.length > 0 && (
    <ul className="suggestions bg-black border border-gray-200 rounded-lg shadow-lg w-full  absolute left-0 top-12 z-50 max-h-96 overflow-y-auto">
      {suggestions.map((item) => (
        <li
          key={item.id}
          className="px-4 py-2 hover:bg-gray-200 transition-colors duration-200 "
        >
          <Link
            to={`/searchproduct/${item.name}`}
            className="block text-gray-700 hover:text-gray-900 no-underline flex justify-start space-x-2"
          >
            <img src={item.img} width="50px" className="rounded-md" alt={item.name} />
            <span>{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  )}
</div>
  );
}

export default Search;


