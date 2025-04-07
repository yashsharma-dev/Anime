import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import Search from "../Search";
import { Link } from "react-router-dom";
import Search_responsive from "../Search_responsive";

function Header({

  toggleMenu,
  setIsOpenLogin

}) {
  const [menu, setMenu] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  let logout_handle = () => {
    localStorage.clear();
    setUser(null);
  };


  const jap = useRef();
  const eng = useRef();



  const [dm, setDm] = useState(false);
  const downmenu = useRef();

  const down = () => {
    if (dm == false) {
      setDm(true);
      downmenu.current.style.top = "0px";
    } else {
      setDm(false);
      downmenu.current.style.top = "-520px";
    }
  };

  const [search, setSearch] = useState();

  const [item, setItem] = useState([]);

  const [showMobileSearch, setShowMobileSearch] = useState(false);


  return (
    <>
      <header>
        <div className="logo">
          <i className="bx bx-menu" id="icon" onClick={toggleMenu}></i>
        </div>
        <h1><Link to={"/"}>
          <svg style={{ marginBottom: "8px" }} width="50" height="50" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" fill="#fdd835">
            <path d="M209.6 282.19q-.31 1.51.06 3.69 2.19 12.73 3.43 21.81c2.08 15.34.92 30.6-3.8 45.35-3.64 11.37-7.94 23.79-2.95 35.42q5.88 13.72 19.03 22.26.2.14.08.35l-.12.22q-.01.01-.02 0c-13.38-6.56-24.24-17.16-32.58-29.54q-12.99-19.27-13.92-41.5c-.89-21.32 9.38-43.96 20.59-61.76q7.33-11.65 7.36-11.69 8.76-15.24 14.21-27.3c.53-1.19.99-2.48.79-3.66-.78-4.62-2.89-7.65-5.63-12.45q-6.12-10.73 3.86-17.38c8.25-5.5 20.6-8.26 27.37-11.16q8.64-3.7 9.28-13.22c.49-7.14-1.11-17.13-6.33-22.65-3.92-4.15-7.69-.62-10.42 3.16q-10.97 15.21-22.11 31.69-.37.54-.5-.1-.01-.06.17-.53 4.01-10.39 5.31-21.88a2.26 2.25 27.6 0 0-.55-1.74c-4.45-4.99-9.45-9.48-10.94-16.29-2.5-11.37 5.37-21.78 17.29-22.24 11.48-.44 19.62 7.72 27.03 16.09q16.82 18.97 27.82 36.02c9.79 15.2 17.4 37.36 3.97 53.23q-7.18 8.48-18.67 15.32-22.18 13.18-23.35 13.89c-7.5 4.53-16.52 12-20.82 19.78-9.58 17.33-1.86 36.18 11.57 49.21 16.13 15.65 37.07 28.89 58.35 35.5 6.02 1.87 15.75 3.51 21.6.11 12.74-7.4 26.47-9.29 41.08-5.18a.18.18 0 0 1 .09.28l-.19.28q-.1.13-.26.1-10.84-1.91-19.42 2.16-10.59 5.01-17.16 16.17c-4.03 6.86-14.87 10.74-22.24 11.69-32.04 4.11-58.48-21.78-70.58-48.8q-1.06-2.37-1.13.23c-.49 19.32 11.27 39.02 25.98 50.93 16.11 13.04 40.32 10.88 58.48 3.37q.02 0 .03.01l.13.23q.11.18-.07.28-10.84 6.24-22.55 11.25-2.37 1.02-5.02.93-11.63-.4-21.44-1.83-10.66-1.55-20.46-8.37-16.52-11.51-18.47-31.99-1.43-14.94.72-30.52.3-2.18-.43-4.13c-6.57-17.5-10.33-35.89-12.94-55.08q-.25-1.77-.61-.02" />
            <path d="M246.28 319q.36.96 2.36 2.02c12.54 6.62 27.66 9.87 41.37 11.38q4.67.51 10.31.24 3.42-.17 7.69-1.68 20.11-7.11 42.01-9.16 17.05-1.59 32.29 4.87 2.14.91-.17.59-17.21-2.36-29.73 9.33c-2.74 2.55-5.53 6.59-8.07 9.25-17.18 17.96-39.58 15.14-60.58 5.92q-26.92-11.82-45.23-34.93c-8.38-10.57-9.03-25.04-1.46-35.76 7.05-9.99 20.9-15.08 33.63-16.72q2.13-.27 5.05.57c11.71 3.35 25.91-1.24 33.43-11.26q.12-.16.3-.13.17.03.24.1.09.08.05.19c-3.4 11.55-13.26 19.35-24.73 21.61-4.18.83-10.65 1.53-14.68 3-16.08 5.86-30.81 22.33-24.08 40.57" />
          </svg>

          <div>

            <span className="full-text">
              <span>Anime</span> <p>Nebula</p>
            </span>

            <span className="short-text">
              <span class="a">A</span> <span class="n">N</span>
            </span>

          </div>
        </Link></h1>
        <button onClick={() => setIsOpenLogin(true)}>Login</button>

        <Search />
        <Search_responsive showMobileSearch={showMobileSearch} setShowMobileSearch={setShowMobileSearch} />


        <div className="function">


          <div className="link">
            <i className="bx bxl-instagram-alt"></i>
            <i className="bx bxl-meta"></i>
          </div>

          {user ? (<>
            <button onClick={logout_handle}>Logout</button>
            <button ><Link to={"/admindashboard"}>Admin page</Link></button>
          </>
          ) : (
            <button onClick={() => setIsOpenLogin(true)}>Login</button>
          )}
          {user ? <p style={{ color: "white" }}>hi,{user.username}</p> : null}
        </div>

        <div className="hidden-icon">
          <i className="bx bxs-chevron-down" onClick={down}></i>
        </div>
      </header>

      <aside className="scroll" ref={downmenu}>
        <div className="n  a">
          <i className="bx bx-log-in i"></i>

          {user ? (<>
            <div className="block w-full">

              <button className="text-white" onClick={logout_handle}>Logout</button>
            </div>
            <button className="text-black admin w-44 h-10 bg-[var(--yellow)] rounded"  ><Link to={"/admindashboard"}>Admin page</Link></button>
          </>
          ) : (
            <button onClick={() => setIsOpenLogin(true)}>Sign</button>
          )}
          {user ? <p style={{ color: "white" }}>hi,{user.username}</p> : null}
        </div>

        <div className="b n">
          <img
            width={"27px"}
            src="src/assets/language.png"
            alt=""
            className="i"
          />
          <h1>title language</h1>
          <div className="btn">
            <button>EN</button>
            <button>JP</button>
          </div>
        </div>

        <div className="n">
          <i className="bx bxl-discord-alt i"></i>
          <h1>discord support server</h1>
        </div>

        <div className="n">
          <i className="bx bxl-telegram i"></i>
          <h1>telegram support</h1>
        </div>
      </aside>
    </>
  );
}

export default Header;
