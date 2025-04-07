import React from "react";

function Year({ setYearFilterOpen, years, selectedYears, setSelectedYears }) {
  const toggleYear = (year) => {
    if (selectedYears.includes(year)) {
      setSelectedYears(selectedYears.filter((y) => y !== year)); // Remove year
    } else {
      setSelectedYears([...selectedYears, year]); // Add year
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div style={{ width: "700px" }} className="bg-[#1e1e1e] text-white p-6 rounded-lg w-full max-w-4xl h-auto shadow-xl relative">
        {/* Reset Button */}
        <button
          className="px-4 py-2 rounded-md text-white font-semibold absolute top-3 right-3 text-gray-400 hover:text-white text-lg"
          onClick={() => setSelectedYears([])}
        >
          Reset
        </button>

        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-yellow-400">Year</h2>
        </div>

        {/* Years List */}
        <div className="w-full max-h-96 overflow-y-auto p-4 rounded-lg">
          {years && years.length > 0 ? (
            <ul className="flex flex-wrap gap-2">
              {years.map((year, index) => (
                <li
                  key={index}
                  className={`cursor-pointer p-2 text-center border border-gray-600 rounded-full transition duration-300 flex-grow ${
                    selectedYears.includes(year)
                      ? "bg-[#302d20] text-[#ecca33] font-semibold"
                      : "bg-transparent hover:bg-[#808080]"
                  }`}
                  onClick={() => toggleYear(year)}
                >
                  {year}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-center">No years available</p>
          )}
        </div>

        {/* Close Button */}
        <div className="mt-6 w-full flex justify-between">
          <button
            className="w-full hover:bg-[#808080] px-4 py-2 rounded-md text-white font-semibold"
            onClick={() => setYearFilterOpen(false)}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Year;
