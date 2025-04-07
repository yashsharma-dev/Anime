import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Search_card from "./Search_card";

function SearchProduct() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/search?search=${name}`);
        if (!res.ok) throw new Error("Network error!");
        const data = await res.json();
        setProducts(data.search_results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [name]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{width:"100%" , padding:"75px 10px 0px 250px"}} className="container ">
      {/* ✅ Flexbox layout for card items */}
      <div style={{marginLeft:"20px"}} className="flex flex-wrap justify-start  gap-4">
        {products.length > 0 ? (
          products.map((item) => (
            <Search_card
              key={item.id}
              id={item.id}
              name={item.name}
              desc={item.desc}
              img={item.img}
            />
          ))
        ) : (
          <p>No results found for "{name}".</p>
        )}
      </div>
    </div>
  );
}

export default SearchProduct;
