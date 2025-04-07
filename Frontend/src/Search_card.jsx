import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Search_card({ id, name, desc, img }) {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`http://localhost/anime-api/trending_update.php?id=${id}`)
            .then((res) => res.json())
            .then((data) => setItem(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    return (
        <div className="flex">  {/* ✅ Ensure the card itself is inside a flex container */}
            <Link to={`/single_series/${id}`}>
                <div className="w-56 h-[450px] p-2.5 rounded-lg  shadow-md hover:shadow-lg transition-shadow duration-300">
                    {/* ✅ Image Container */}
                    <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                        <img
                            src={img}
                            alt={name}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* ✅ Text Content */}
                    <div className="mt-3 text-center">
                        <h1 className="text-lg font-semibold text-white truncate">
                            {name}
                        </h1>
                        <div className="flex justify-center gap-2 mt-2">
                            <button className="px-1 py-0 border border-yellow-400 text-yellow-400 bg-transparent rounded-sm text-[10px] hover:bg-gray-700 transition duration-200">
                                TV
                            </button>
                            <button className="px-1 py-0 border border-yellow-400 text-yellow-400 bg-transparent rounded-sm text-[10px] hover:bg-gray-700 transition duration-200">
                                EP
                            </button>
                            <button className="px-1 py-0 border border-yellow-400 text-yellow-400 bg-transparent rounded-sm text-[10px] hover:bg-gray-700 transition duration-200">
                                SUB
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Search_card;
