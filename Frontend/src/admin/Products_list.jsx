import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProductsList.css'; // Import the CSS file

function Products_list() {
    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    useEffect(() => {
        load_anime_list();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const load_anime_list = async () => {
        try {
            let resp = await fetch('http://127.0.0.1:8000/api/home_list');
            let res = await resp.json();
            setAnime(res);
            console.log(res);
        } catch (error) {
            console.error("Error fetching anime list:", error);
        } finally {
            setLoading(false);
        }
    };

    const delete_anime = async (id) => {
        let token = localStorage.getItem("token");
        token = JSON.parse(token);

        let resp = await fetch(`http://127.0.0.1:8000/api/remove/${id}`, {
            method: "DELETE",
            headers: { authentication: token },
        });

        let res = await resp.json();
        window.location.reload();
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="products-list-container">
            <h1 className="add-product-link">
                <Link to="/add_product">Add Products</Link>
            </h1>
            <table className="products-table">
                <thead className="table-header">
                    <tr>
                        <th scope="col" className="image-column">
                            <span className="sr-only">Image</span>
                        </th>
                        <th scope="col" className="name-column">
                            Anime Name
                        </th>
                        <th scope="col" className="year-column">
                            Year
                        </th>
                        <th scope="col" className="description-column">
                            Description
                        </th>
                        <th scope="col" className="language-column">
                            Language
                        </th>
                        <th scope="col" className="episode-column">
                            Episode
                        </th>
                        <th scope="col" className="edit-column">
                            Edits
                        </th>
                        <th scope="col" className="remove-column">
                            Remove
                        </th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {anime.map((product) => (
                        <tr key={product.id} className="table-row">
                            <td className="image-cell">
                                <img
                                    src={product.img}
                                    className="anime-image"
                                    alt={product.name}
                                />
                            </td>
                            <td className="name-cell">
                                {windowWidth < 1250
                                    ? product.name.slice(0, 10) + "..."
                                    : product.name}
                            </td>
                            <td className="year-cell">{product.year}</td>
                            <td className="description-cell">
                                {windowWidth < 1250
                                    ? product.desc.slice(0, 30) + "..."
                                    : product.desc.slice(0, 50) + "..."}
                            </td>
                            <td className="language-cell">{product.language}</td>
                            <td className="episode-cell">{product.episode}</td>
                            <td className="edit-cell">
                                <Link
                                    to={`/update_products/${product.id}`}
                                    className="edit-link"
                                >
                                    Edit
                                </Link>
                            </td>
                            <td className="remove-cell">
                                <button
                                    onClick={() => delete_anime(product.id)}
                                    className="remove-button"
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Products_list;