import React, { useEffect, useState } from 'react'
import './random.css'

function Random({ left, wid }) {
  const [data, setData] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Fetch data on component mount
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/show_random_product`)
      .then((res) => res.json())
      .then((json) => {
        if (json && json.product) {
          setData(json.product);
        } else {
          console.error('Data is not valid', json);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Update window width on resize
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowWidth);
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  // Handle loading state
  if (!data) {
    return <p>Loading...</p>;
  }

  // Dynamic styles for width and left margin
  const dynamicStyles = windowWidth < 1250
    ?{ width: '100%', left: '0%' } 
    : { width: '80%', left: '18%' };

  return (
    <div className="random" key={data.id} style={dynamicStyles}>
      <div className="random_img">
        <img src={data.img} alt="" className="thumnail" />
        <img src={data.img} alt="" className="image" />
        <div className="random_img">
  <img src={data.img} alt="" className='thumnail' />
  <img src={data.img} alt="" className='image' />
  <div className="img_detail">
    <div className="name">
      <h1>{data.name}</h1>
    </div>
    <div className="gonra">
      {data.gonres && data.gonres.slice(0, 7).map((genre, index) => (
        <button key={index}>{genre}</button>
      ))}
    </div>
   
    <div className="watch">
      <button>Watch Now</button>
      <button>Add to My List</button>
    </div>
  </div>
</div>

      </div>
      <div className="random_desc">
        <h1>description</h1>
        <p>{data.desc}</p>
      </div>
      <div className="random_related">
        <h1>related</h1>
        <div className="relate">
          <div className="relate_cards">
            <h3>{data.name}</h3>
            <div className="btn">
              <button>TV</button>
              <button>{data.year}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Random;
