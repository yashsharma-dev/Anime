import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Update_product() {
    const [name, setName] = useState('');
    const [alias, setAlias] = useState('');
    const [year, setYear] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [existingImage, setExistingImage] = useState('');
    const [existingVideo, setExistingVideo] = useState('');
    const [language, setLanguage] = useState('');
    const [episode, setEpisode] = useState('');
    const [rating, setRating] = useState('');
    const [genres, setGenres] = useState([]);
    const [status, setStatus] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const navigator = useNavigate();
    const params = useParams();
    const pid = params.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/single_product/${pid}`);
                const data = await response.json();
                console.log("Fetched Data:", data);

                if (data) {
                    setName(data.name || '');
                    setAlias(data.alias || '');
                    setYear(data.year || '');
                    setDesc(data.desc || '');
                    setExistingImage(data.img || ''); // Set existing image URL
                    setExistingVideo(data.video || ''); // Set existing video URL
                    setRating(data.status || '');
                    setLanguage(data.language || '');
                    setEpisode(data.episode || '');
                    setRating(data.rating || '');
                    setSelectedOptions(data.genres || []);

                    if (data.gonres_name) {
                        const selectedGenreIds = genres
                            .filter((genre) => data.gonres_name.includes(genre.name))
                            .map((genre) => genre.id);
                        setSelectedOptions(selectedGenreIds);
                    }
                }
            } catch (error) {
                console.error("Error fetching product:", error);
                setError("Failed to fetch product details.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [pid, genres]);

    useEffect(() => {
        load_genres();
    }, []);

    const load_genres = async () => {
        try {
            let resp = await fetch("http://127.0.0.1:8000/api/genres");
            if (!resp.ok) {
                throw new Error("Failed to fetch genres");
            }
            let res = await resp.json();
            setGenres(res);
        } catch (error) {
            console.error("Error loading genres:", error);
            setError("Failed to load genres. Please try again later.");
        }
    };



    const handleGenreChange = (genreId) => {
        setSelectedOptions((prevSelected) =>
            prevSelected.includes(genreId)
                ? prevSelected.filter((id) => id !== genreId)
                : [...prevSelected, genreId]
        );
    };


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const update_produc_handle = async (e) => {
        e.preventDefault();

        if (!name || !alias || !desc || !year || !language || !episode || !rating || !status) {
            alert("Please fill all the fields");
            return;
        }

        let token = localStorage.getItem("token");
        let user = localStorage.getItem("user");
        user = JSON.parse(user);
        token = JSON.parse(token);

        const formData = new FormData();
        formData.append("name", name);
        formData.append("alias", alias);
        formData.append("desc", desc); 
        formData.append("year", year);
        formData.append("language", language);
        formData.append("status", status);
        formData.append("episode", episode);
        formData.append("rating", rating);
        formData.append("role", user.role);

        // Append new image if uploaded, otherwise keep existing image
        if (image) {
            formData.append("anime_image", image);
        } else if (existingImage) {
            formData.append("existing_image", existingImage);
        }

        // Append new video if uploaded, otherwise keep existing video
        if (video) {
            formData.append("video", video);
        } else if (existingVideo) {
            formData.append("existing_video", existingVideo);
        }

        selectedOptions.forEach((genreId) => {
            formData.append("genres[]", genreId);
        });

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/update_products/${pid}`, {
                method: "POST",
                body: formData,
                headers: { authentication: token },
            });

            const result = await response.json();
            if (result.status === "ok") {
                setSuccess(true);
                navigator("/products_list");
            } else {
                setError(result.msg || "Failed to update product.");
            }
        } catch (error) {
            console.error("Error updating product:", error);
            setError("An error occurred while updating the product.");
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                    Update Product Form
                </h2>

                {success && <p style={{ color: "green" }}>Product updated successfully</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}

                <form onSubmit={update_produc_handle}>
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
                                htmlFor="language"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                status
                            </label>
                            <select
                                id="language"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                onChange={(e) => setStatus(e.target.value)}
                                value={status}
                                required
                            >
                                <option value="" disabled>
                                    Select language
                                </option>
                                <option value="Ongoing Airing">OnGoing</option>
                                <option value="Finished Airing">Finished</option>
                            </select>
                        </div>

                        <div className="w-full">
                            <label
                                htmlFor="image"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Image
                            </label>
                            {existingImage && (
                                <img
                                    src={`${existingImage}`}
                                    alt="Current Image"
                                    className="mb-2 w-32 h-32 object-cover"
                                />
                            )}
                            <input
                                type="file"
                                name="image"
                                id="image"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </div>

                        <div className="w-full">
                            <label
                                htmlFor="video"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Video
                            </label>
                            {existingVideo && (
                                <video
                                    src={`${existingVideo}`}
                                    controls
                                    className="mb-2 w-full"
                                />
                            )}
                            <input
                                type="file"
                                name="video"
                                id="video"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                onChange={(e) => setVideo(e.target.files[0])}
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

                        <div className="w-full relative">
                            <label
                                htmlFor="genres"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Genres
                            </label>
                            <div
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 cursor-pointer"
                                onClick={toggleDropdown}
                            >
                                {selectedOptions.length > 0
                                    ? selectedOptions
                                        .map((id) => genres.find((genre) => genre.id === id)?.name)
                                        .join(", ")
                                    : "Select genres"}
                            </div>

                            {isDropdownOpen && (
                                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-48 overflow-y-auto">
                                    {genres.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => handleGenreChange(item.id)}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedOptions.includes(item.id)}
                                                readOnly
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <span className="ml-2 text-sm text-gray-700">
                                                {item.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                    >
                        Update
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Update_product;