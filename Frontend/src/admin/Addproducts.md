import React, { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [alias, setAlias] = useState("");
  const [year, setYear] = useState("");
  const [desc, setDesc] = useState("");
  const [language, setLanguage] = useState("");
  const [episode, setEpisode] = useState("");
  const [image, setImage] = useState(null);
  const [rating, setRating] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [status, setStatus] = useState("Pending");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const addProductHandler = async (e) => {
    e.preventDefault();
    // Get the token from localStorage
    let token = localStorage.getItem("token");
    let user = localStorage.getItem("user");
    user = await JSON.parse(user);
    token = await JSON.parse(token);

    // If no token is found, show an error message
    if (!token) {
      setError("You are not logged in.");
      return;
    }

    // Prepare the form data for the API request
    const formData = new FormData();
    formData.append("name", name);
    formData.append("alias", alias);
    formData.append("year", year);
    formData.append("desc", desc);
    formData.append("language", language);
    formData.append("episode", episode);
    formData.append("rating", rating);
    formData.append("schedule_time", scheduleTime);
    formData.append("status", status);
    formData.append("anime_image", image);
    formData.append("role",user.role);

    try {
      // Make the API call to add the product
      const response = await fetch("http://127.0.0.1:8000/api/add_product", {
        method: "POST",
        body: formData,
        headers: { authentication: token }
      });

      const result = await response.json();

      // Check if the product was successfully added
      if (result.status === "ok") {
        setSuccess(true);
        setError(""); // Reset error message on success

        // Clear the form fields after successful submission
        setName("");
        setAlias("");
        setYear("");
        setDesc("");
        setLanguage("");
        setEpisode("");
        setImage(null);
        setRating("");
        setScheduleTime("");
        setStatus("Pending");
      } else {
        setError(result.msg || "Failed to add product.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      setError("An error occurred while adding the product.");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add Product Form
        </h2>

        {/* Success or Error Message */}
        {success && (
          <p style={{ color: "green" }}>Product added successfully</p>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={addProductHandler}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="alias"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Alias
              </label>
              <input
                type="text"
                name="alias"
                id="alias"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type alias"
                required
                onChange={(e) => setAlias(e.target.value)}
                value={alias}
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="episode"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Episode
              </label>
              <input
                type="number"
                name="episode"
                id="episode"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter episode count"
                required
                onChange={(e) => setEpisode(e.target.value)}
                value={episode}
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="year"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Year
              </label>
              <input
                type="text"
                name="year"
                id="year"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Year"
                required
                onChange={(e) => setYear(e.target.value)}
                value={year}
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="language"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Language
              </label>
              <select
                id="language"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                onChange={(e) => setLanguage(e.target.value)}
                value={language}
                required
              >
                <option value="" disabled>
                  Select language
                </option>
                <option value="Japanese">Japanese</option>
                <option value="English">English</option>
              </select>
            </div>

            <div className="w-full">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="desc"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="desc"
                name="desc"
                rows="4"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Description"
                required
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="rating"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Rating
              </label>
              <input
                type="text"
                name="rating"
                id="rating"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Rating"
                required
                onChange={(e) => setRating(e.target.value)}
                value={rating}
              />
            </div>

            <input
              type="datetime-local"
              name="schedule_time"
              id="schedule_time"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
              onChange={(e) => setScheduleTime(e.target.value)}
              value={scheduleTime}
            />

            <div className="w-full">
              <label
                htmlFor="status"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Status
              </label>
              <select
                id="status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                onChange={(e) => setStatus(e.target.value)}
                value={status}
                required
              >
                <option value="Pending">Pending</option>
                <option value="Uploaded">Uploaded</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Add Product
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddProduct;
