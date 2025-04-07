import React, { useEffect, useState } from "react";
import "./Single_series.css";
import { useParams } from "react-router-dom";

function SingleSeries() {
  const params = useParams();
  const [item, setItem] = useState({});
  const pid = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/single_product/${pid}`

        );
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [pid]);

  return (
    <>
      <div className="single_series">
        <div className="video_contnet">
          <div className="video" >
            <video
              className="w-full h-full"
              autoPlay
              controls
              src={item.video}
              onError={() => console.error("Video failed to load!")}
              onLoadedData={() => console.log("Video loaded successfully!")}
            />


          </div>

          <div className="video_option">
            <button>
              <i className="bx bx-check" />
              <h4>AUTO PLAY</h4>
            </button>
            <button>

              <i className="bx bx-check" />
              <h4>AUTO NEXT</h4>
            </button>
            <button>
              <i className="bx bxs-bulb" />
              <h4>LIGHT</h4>
            </button>
            <button>
              <i className="bx bx-chevrons-left" />
              <h4>PREV</h4>
            </button>
            <button>
              <h4>NEXT</h4>
              <i className="bx bx-chevrons-right" />
            </button>
            <button>
              <i className="bx bxs-heart" />
              <h4>ADD TO MY LIST</h4>
            </button>
            <button>
              <i className="bx bxs-download" />
              <h4>DOWNLOAD</h4>
            </button>
            <button>
              <i className="bx bxs-info-circle" />
              <h4>REPORT</h4>
            </button>
          </div>

          <div className="server">
            <h4>SERVER: </h4>
            <button>
              <i className="bx bx-play" />
              <h2>VIDEOSTREAMING</h2>
            </button>
            <button>
              <h2>BIRDSTREAM</h2>
            </button>
          </div>

          {item && (
            <div className="series_info">
              <img src={item.img} alt="" />
              <div className="series_detail">
                <h4>{item.name}</h4>
                <h3>{item.year}</h3>
                <hr id="hr" />
                <h5>{item.desc}</h5>
              </div>
            </div>
          )}
        </div>
        <div className="episode_function">
          <div className="opt">
            <p>Sub/Dub</p>
            <select name="" id="">
              <option id="option" value="">
                Japanese(SUB)
              </option>
            </select>
          </div>

          <div className="page">
            <div className="page_number">
              <p>page</p>
              <select name="" className="select" id="">
                <option id="option" value="">
                  01-10
                </option>
                <option id="option" value="">
                  11-20
                </option>
                <option id="option" value="">
                  21-30
                </option>
                <option id="option" value="">
                  31-40
                </option>
              </select>
            </div>

            <div className="num">
              <input type="number" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleSeries;
