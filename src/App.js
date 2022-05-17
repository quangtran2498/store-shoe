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

function App() {
  return (
    <div className="App">
      {/* <Layout></Layout> */}
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/male-all-page" element={<MaleAllPage />} />
        <Route path="/female-all-page" element={<FemaleAllPage />} />
        <Route path="/children-all-page" element={<ChildrenAllPage />} />

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
