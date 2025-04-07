import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./Card.css";

function Card_tre({ id, name, desc, img }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost/anime-api/trending_update.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  return (
    <div className="flex ">

      <Link to={`/single_series/${id}`}>
        <div style={{ width: "230px", height: "380px",  padding: "10px", borderRadius: "15px"}}>
          <div style={{ width: "100%", height: "80%", backgroundColor: "pink", borderRadius: "10px" }}>
            <img style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: "10px" }} src={img} alt={img} />
          </div>
          <div className="text">
            <h1>{name}</h1>
            <div className="mt-2 space-x-2">
            {["TV", "EP", "SUB"].map((btn) => (
              <button
                key={btn}
                className="border border-yellow-400 text-yellow-400 px-2 py-1 text-xs rounded hover:bg-gray-600"
              >
                {btn}
              </button>
            ))}
          </div>
          </div>
        </div>

      </Link>
    </div>
  );
}

export default Card_tre;
