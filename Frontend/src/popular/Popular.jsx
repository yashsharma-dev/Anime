import React, { useEffect, useState } from 'react';
import './Popular.css';
import Card_tre from '../Card_tre';
import Card from '../Card';

function Popular({ wid, left }) {
  const [item, setItem] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [cardsPerRow, setCardsPerRow] = useState(6); 


  useEffect(() => {
    polpular(currentPage); // Only call once
  }, [currentPage]);


    useEffect(() => {
      const updateCardsPerRow = () => {
          setWindowWidth(window.innerWidth);
          setCardsPerRow(window.innerWidth > 1250 ? 6 : 5);
      };
  
      window.addEventListener("resize", updateCardsPerRow);
      return () => window.removeEventListener("resize", updateCardsPerRow);
  }, []);


  const polpular = async (page = 1) => {
    try {
      let resp = await fetch(`http://127.0.0.1:8000/api/trending?page=${page}`);
      let res = await resp.json();
  
      console.log("API Response:", res); // Debugging: check API response
  
      if (res && Array.isArray(res.data)) {
        setItem(res.data);
        setTotalPages(res.totalPages || 1);
      } else {
        console.error("Invalid API response format", res);
        setItem([]);
        setTotalPages(1);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  



  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };


  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <span
          key={i}
          className={currentPage === i ? 'active' : ''}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </span>
      );
    }
    return pages; // Ensure JSX is returned
  };


  return (
    <>
      <div className="popular"  style={windowWidth<1250 ? {} :{width: wid, left }}>
        <div className="popular-inner">
          <div className="headers">
            <div className="pages_container">
              <i className="bx bx-chevron-left" onClick={handlePrevPage}></i>
              {renderPageNumbers()}
              <i className="bx bx-chevron-right" onClick={handleNextPage}></i>
            </div>

            <div className="view-btn">
              <i className="bx bxs-plus-square"></i>
              <span>View</span>
            </div>
          </div>

          <div className="mains">
            <div className="card-grid" style={{ gridTemplateColumns: `repeat(${cardsPerRow}, 1fr)` }}>
              {Array.isArray(item) && item.map((view) => (
                <div className="card-wrapper-trending" key={view?.id}>
                  <Card
                    id={view?.id}
                    name={view.name}
                    year={view.year}
                    desc={view.desc }
                    img={view.img }
                  />

                </div>
              ))}

            </div>
          </div>

          <div className="bottom">
            <div className="pages_container">
              <i className="bx bx-chevron-left" onClick={handlePrevPage}></i>
              {renderPageNumbers()}
              <i className="bx bx-chevron-right" onClick={handleNextPage}></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popular; 