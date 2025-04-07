import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./FrontPage.css"; // Import the CSS file

function FrontPage({ wid, left }) {
  const [item, setItem] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cardsPerRow, setCardsPerRow] = useState(6); 

  useEffect(() => {
    fetchAnimeData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const updateCardsPerRow = () => {
        setWindowWidth(window.innerWidth);
        setCardsPerRow(window.innerWidth > 1250 ? 6 : 5);
    };

    window.addEventListener("resize", updateCardsPerRow);
    return () => window.removeEventListener("resize", updateCardsPerRow);
}, []);

  const fetchAnimeData = async (page) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/home?page=${page}`);
      const data = await response.json();
      setItem(data);

      const totalCount = data.total || 100;
      setTotalPages(Math.ceil(totalCount / 20));
    } catch (error) {
      console.error("Error fetching anime data:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="frontpage-container " style={windowWidth<1250 ? {} :{width: wid, left }}>
      {/* Header */}
      <div className="header">
        <div className="header-title">
          <h1>Latest Update</h1>
        </div>
        <div className="header-buttons">
          {["ALL", "SUB", "DUB", "CHINESE"].map((text) => (
            <button key={text} className="filter-button">{text}</button>
          ))}
          <div className="next">

          <button
            className="nav-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            >
            <span className="nav-icon">&#8249;</span>
            <span>PREV</span>
          </button>
          <button
            className="nav-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            >
            <span>NEXT</span>
            <span className="nav-icon">&#8250;</span>
          </button>
            </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="card-grid" style={{ gridTemplateColumns: `repeat(${cardsPerRow}, 1fr)` }}>
        {item.map((anime) => (
          <div className="card-wrapper-trending" key={anime.id}>
            <Card id={anime.id} name={anime.name} img={anime.img} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          className="nav-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span className="nav-icon">&#8249;</span>
          <span>PREV</span>
        </button>
        <button
          className="nav-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <span>NEXT</span>
          <span className="nav-icon">&#8250;</span>
        </button>
      </div>
    </div>
  );
}

export default FrontPage;
