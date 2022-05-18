import { Routes, Route } from "react-router-dom";
import React from "react";
import ScrollToTop from "./component/ScrollToTop";

import "./App.css";
import Home from "./layout/Home";
import NewsPage from "./pages/newsPage";
import Header from "./component/Header";
import Footer from "./component/Footer";
import FashionMalePage from "./pages/FashionMalePage";
import FootballMalePage from "./pages/FootballMalePage";
import MultipurposeMalePage from "./pages/MultipurposeMalePage";
import SandalMalePage from "./pages/SandalMalePage";
import FashionFemalePage from "./pages/FashionFemalepage";
import MultipurposeFemalePage from "./pages/MultipurposeFemalePage";
import SandalFemalePage from "./pages/SandalFemalePage";
import FashionChildrenPage from "./pages/FashionChildrenPage";
import MultipurposeChildrenPage from "./pages/MultipurposeChildrenPage";
import SandalChildrenPage from "./pages/SandalChildrenPage";
import MaleAllPage from "./pages/MaleAllPage";
import FemaleAllPage from "./pages/FemaleAllPage";
import ChildrenAllPage from "./pages/ChildrenAllPage";
import NewProduct from "./pages/NewProduct";
import SaleProductPage from "./pages/SaleProductPage";
import AboutUs from "./pages/AboutUs";
import Contact from "./component/Contact";
import Login from "./component/Login";
import ArticlePage from "./component/Article";
import SliderDemo from "./component/SliderHomeDemo";

function App() {
  return (
    <div className="App">
      {/* <Layout></Layout> */}
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/males/:id" element={<ArticlePage />} />
        <Route path="/slider-demo" element={<SliderDemo />} />

        {/* page api */}
        <Route path="/male-all-page" element={<MaleAllPage />} />
        <Route path="/female-all-page" element={<FemaleAllPage />} />
        <Route path="/children-all-page" element={<ChildrenAllPage />} />
        <Route path="/new-product" element={<NewProduct />} />
        <Route path="/sale-product" element={<SaleProductPage />} />

        <Route path="/news" element={<NewsPage />} />
        <Route path="/fashion-male-page" element={<FashionMalePage />} />
        <Route path="/football-male-page" element={<FootballMalePage />} />
        <Route
          path="/multipurpose-male-page"
          element={<MultipurposeMalePage />}
        />
        <Route path="/sandal-male-page" element={<SandalMalePage />} />
        <Route path="/fashion-female-page" element={<FashionFemalePage />} />
        <Route
          path="/multipurpose-female-page"
          element={<MultipurposeFemalePage />}
        />
        <Route path="/sandal-female-page" element={<SandalFemalePage />} />
        <Route
          path="/fashion-children-page"
          element={<FashionChildrenPage />}
        />
        <Route
          path="/multipurpose-children-page"
          element={<MultipurposeChildrenPage />}
        />
        <Route path="/sandal-children-page" element={<SandalChildrenPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
