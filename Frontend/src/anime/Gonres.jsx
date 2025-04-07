import React from "react";

function Gonres({ setGonresOpen, gonres, selectedGenres, setSelectedGenres }) {
  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre)); // Remove genre
    } else {
      setSelectedGenres([...selectedGenres, genre]); // Add genre
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div style={{width:"700px"}} className="bg-[#1e1e1e] text-white p-6 rounded-lg w-full max-w-4xl h-auto shadow-xl relative">
        {/* Close Button */}
        
        <button
            className="  px-4 py-2 rounded-md text-white font-semibold absolute top-3 right-3 text-gray-400 hover:text-white text-lg"
            onClick={() => setSelectedGenres([])}
          >
            Reset
          </button>

        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-yellow-400">Genres</h2>
        </div>

        {/* Genres List */}
        <div className="w-full max-h-96 overflow-y-auto p-4 rounded-lg">
          {gonres && gonres.length > 0 ? (
            <ul className="flex flex-wrap gap-2">
              {gonres.map((genre, index) => (
                <li
                  key={index}
                  className={`cursor-pointer p-2 text-center  border border-gray-600 rounded-full transition duration-300 flex-grow ${
                    selectedGenres.includes(genre)
                      ? "bg-[#302d20] text-[#ecca33] font-semibold"
                      : " bg-transparent hover:bg-[#808080]"
                  }`}
                  onClick={() => toggleGenre(genre)}
                >
                  {genre}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-center">No genres available</p>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-6 w-full flex justify-between">
          
          <button
            className=" w-full hover:bg-[#808080] px-4 py-2 rounded-md text-white font-semibold"
            onClick={() => setGonresOpen(false)}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gonres;