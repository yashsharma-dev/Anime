import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { RouterProvider, createBrowserRouter } from "react-router-dom";


import "./App.css";
import Header from "./website/Header";
import Aside from "./website/Aside";

// import RightAside from "./website/RightAside";
import Footer from "./website/Footer";
import Single_series from "/src/Single_series";


// import Anime from "./anime/Anime";
// import Popular from "./popular/Popular";
// import Random from "./random/Random";
import LeftBox from "./website/LeftBox";
import TrendingSlider from "./trending/TrendingSlider";
import AnimeSlider from "./anime/AnimeSlider";
import PopularSlider from "./popular/PopularSlider";
// import Login from "./login/Login";
// import Admin_header from "./admin_dashboard/Admin_header";
// import Admin_aside from "./admin_dashboard/Admin_aside";
// import All_products from "./admin_dashboard/All_products";
// import Insert_products from "./admin_dashboard/Insert_products";
// import View_count from "./admin_dashboard/View_count";
import SearchProduct from "./Searchproduct";
import AdminNavbar from "./admin/AdminNavbar";
import Statics from "./admin/Statics";
import Products_list from "./admin/Products_list";
import Update_product from "./admin/Update_product";
// import AddProduct from "./admin/Add_product";
import Add_Product from "./admin/Add_product";
import RandomSlider from "./random/RandomSlider";
import FrontPage from "./website/FrontPage";
import User from "./admin/User";
import Settings from "./admin/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <LeftBox />
        {/* <Header/> */}
        {/* <RightAside /> */}
        <Footer />
        {/* <FrontPage/> */}
      </>
    ),
  },
  {
    path: "/trending",
    element: (
      <>
        <TrendingSlider/>
        <Footer />
      </>
    ),
  },

  {
    path: "/anime",
    element: (
      <>
        <AnimeSlider/>
        <Footer />
      </>
    ),
  },
  {
    path: "/popular-show",
    element: (
      <>
        <PopularSlider/>
        <Footer />
      </>
    ),
  },
  {
    path: "/random",
    element: (
      <>
       <RandomSlider/>
        <Footer />
      </>
    ),
  },
  {
    path: "/admindashboard",
    element: (
      <>
       <AdminNavbar />
       <Statics/>
       
      </>
    ),
  },
  {
    path: "/products_list",
    element: (
      <>
       <AdminNavbar />
       <Products_list/>
       
      </>
    ),
  },
  {
    path: "/user",
    element: (
      <>
       <AdminNavbar />
       <User/>
       
      </>
    ),
  },
  {
    path: "/setting",
    element: (
      <>
       <AdminNavbar />
       <Settings/>
       
      </>
    ),
  },
  {
    path: "/update_products/:id",
    element: (
      <>
       {/* <AdminNavbar /> */}
       <Update_product/>
       
      </>
    ),
  },
  {
    path: "/add_product",
    element: (
      <>
       {/* <AdminNavbar /> */}
       <Add_Product/>


       
      </>
    ),
  },
  {
    path:"/searchproduct/:name",
    element:(<>
      <Header />
      <Aside />
      <SearchProduct/>
      <Footer />
    </>
    )
  },
  {
    path: "/single_series/:id",
    element: (
      <>
        <Header />
        <Aside />
        <Single_series />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return (
    <>
     
        <RouterProvider router={router} />
     
    </>
  );
}

export default App;
