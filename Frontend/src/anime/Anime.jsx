import React, { useEffect, useState, useRef } from "react";
import "./Anime.css";
// import Card_tre from "../Card_tre";
import { ListMusic, Calendar, Flag, Sliders, RefreshCcw } from "lucide-react";
import Gonres from "./Gonres";
import Year from "./Year";
import Card from "../Card";

function Anime({ wid, left }) {
  const [gonresOpen, setGonresOpen] = useState(false);
  const [yearFilterOpen, setYearFilterOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [allGenres, setAllGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [allYears, setAllYears] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("ALL");
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [cardsPerRow, setCardsPerRow] = useState(6); 

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const statusOptions = [
    { id: "ALL", name: "All" },
    { id: "Finished Airing", name: "Finished Airing" },
    { id: "Ongoing Airing", name: "Ongoing Airing" },
  ];

  useEffect(() => {
    loadCard();
  }, []);

  
    useEffect(() => {
      const updateCardsPerRow = () => {
          setWindowWidth(window.innerWidth);
          setCardsPerRow(window.innerWidth > 1250 ? 6 : 5);
      };
  
      window.addEventListener("resize", updateCardsPerRow);
      return () => window.removeEventListener("resize", updateCardsPerRow);
  }, []);

  const loadCard = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/home_list");
      const data = await response.json();
      setItems(data);
      setFilteredItems(data);
      setAllGenres([...new Set(data.flatMap((item) => item.gonres_name))]);
      setAllYears([...new Set(data.map((item) => item.year))]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setFilteredItems(
      items.filter((item) => {
        const matchesGenres =
          selectedGenres.length === 0 ||
          selectedGenres.every((genre) => item.gonres_name.includes(genre));
        const matchesYears =
          selectedYears.length === 0 || selectedYears.includes(item.year);
        const matchesStatus =
          selectedStatus === "ALL" || item.status === selectedStatus;

        return matchesGenres && matchesYears && matchesStatus;
      })
    );
    setCurrentPage(1);
  }, [selectedGenres, selectedYears, selectedStatus, items]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setStatusDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      {gonresOpen && (
        <Gonres
          gonres={allGenres}
          setGonresOpen={setGonresOpen}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
        />
      )}

      {yearFilterOpen && (
        <Year
          years={allYears}
          setYearFilterOpen={setYearFilterOpen}
          selectedYears={selectedYears}
          setSelectedYears={setSelectedYears}
        />
      )}

      <div className="anime"  style={windowWidth<1250 ? {} :{width: wid, left }}>
        <div className="anime-inner">
        <div className="gonra">
  <div className="genre opt" onClick={() => setGonresOpen(true)}>
    <ListMusic className="text-white w-5 h-5" />
    <h1>Genre</h1>
  </div>
  <div className="year opt hover:bg-[#242424]" onClick={() => setYearFilterOpen(true)}>
    <Calendar className="text-white w-5 h-5" />
    <h1>Year</h1>
  </div>
  <div className="country opt">
    <Flag className="text-white w-5 h-5" />
    <h1>Country</h1>
  </div>

  {/* Status Dropdown */}
  <div className="relative" ref={dropdownRef}>
  {/* Button */}
  <button
  onClick={() => {
    setStatusDropdownOpen(!statusDropdownOpen);
    console.log("Dropdown Status:", !statusDropdownOpen);
  }}
  className="flex opt items-center justify-between w-30 px-4 py-2 bg-transparent text-white font-semibold rounded-md shadow-md border border-none"
>
  <Sliders className="text-white w-5 h-5 mr-2" />
  STATUS
</button>

  {/* Dropdown Menu */}
  {statusDropdownOpen && (
    <ul className="absolute left-0 mt-2 w-40 bg-[var(--grey)] text-white border border-gray-600 rounded-md shadow-lg z-50">
      {statusOptions.length > 0 ? (
        statusOptions.map((option) => (
          <li
            key={option.id}
            onClick={() => {
              setSelectedStatus(option.id);
              setStatusDropdownOpen(false);
            }}
            className={`px-4 py-2 cursor-pointer transition ${
              selectedStatus === option.id ? "bg-gray-700" : "hover:bg-gray-600"
            }`}
          >
            {option.name}
          </li>
        ))
      ) : (
        <li className="px-4 py-2 text-gray-400">No options available</li>
      )}
    </ul>
  )}
</div>



  <div
    className="reset opt"
    onClick={() => {
      setSelectedGenres([]);
      setSelectedYears([]);
      setSelectedStatus("ALL");
    }}
  >
    <RefreshCcw className="text-white w-5 h-5" />
    <h1>Reset All</h1>
  </div>
</div>


          {/* Anime Cards Grid */}
          <div className="card-grid" style={{ gridTemplateColumns: `repeat(${cardsPerRow}, 1fr)` }}>
        {currentItems.map((anime) => (
          <div className="card-wrapper-trending" key={anime.id}>
            <Card id={anime.id} name={anime.name} img={anime.img} />
          </div>
        ))}
      </div>
          {/* Pagination Controls */}
          {filteredItems.length > itemsPerPage && (
            <div className="flex justify-center items-center mt-6 space-x-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 text-white bg-gray-700 rounded-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
                  }`}
              >
                Previous
              </button>
              <span className="text-white">
                Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={currentPage >= Math.ceil(filteredItems.length / itemsPerPage)}
                className={`px-4 py-2 text-white bg-gray-700 rounded-md ${currentPage >= Math.ceil(filteredItems.length / itemsPerPage)
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-600"
                  }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Anime;
