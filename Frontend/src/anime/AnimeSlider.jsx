import React, { useState } from 'react'
import Anime from './Anime';
import Aside from '../website/Aside';
import Header from '../website/Header';
import Account from '../login/Account';

function AnimeSlider() {
  const [asideWidth, setAsideWidth] = useState("16%");
  const [frontPageWidth, setFrontPageWidth] = useState("80%");
  const [leftMargin, setLeftMargin] = useState("calc(17% + 5px)");
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isNone, setIsNone] = useState("block");
  const [isAsideMargin, setIsAsideMargin] = useState("0px");
  

  const [isLeft,setIsLeft] = useState("-400px");

  const toggleMenu = () => {
      if (asideWidth === "16%") {
          setAsideWidth("4%");
          setFrontPageWidth("94%");
          setLeftMargin("calc(5% + 5px)");
          setIsNone("none");
          setIsAsideMargin("10px")
          setIsLeft("10px");
      } else {
          setAsideWidth("16%");
          setFrontPageWidth("80%");
          setLeftMargin("calc(17% + 5px)");
          setIsNone("block");
          setIsAsideMargin("0px")
          setIsLeft("-400px");
      }
  };

  return (
      <>
          <Header
              toggleMenu={toggleMenu}
              setIsOpenLogin={setIsOpenLogin}
             
          />

          <Aside
              width={asideWidth}
              non={isNone}
              mar={isAsideMargin}

              left={isLeft}
          />

          <Anime
              left={leftMargin}
              wid={frontPageWidth}
          />

          {isOpenLogin && <Account setIsOpenLogin={setIsOpenLogin} />}
   </>
  )
}

export default AnimeSlider