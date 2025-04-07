import { Link } from "react-router-dom";
import React from "react";
import "./Card.css"; // Import the CSS file

function Card({ id, name = "", img }) {
  // Ensure `name` is always a string
  const displayName = name?.length > 20 ? name.slice(0, 13) + "..." : name;

  return (
    <Link to={`/single_series/${id}`} className="card-link">
      <div className="card-container">
        <div className="card-image">
          <img src={img} alt={name} />
        </div>
        <div className="card-content">
          <h1 className="card-title">{name?.slice(0, 23) || "Untitled"}</h1>
          <div className="card-buttons">
            {["TV", "EP", "SUB"].map((btn) => (
              <button key={btn} className="card-button">
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;