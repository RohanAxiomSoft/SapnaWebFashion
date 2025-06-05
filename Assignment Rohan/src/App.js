// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Component/Header";
import { Footer } from "./Component/Footer";

// Pages
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { ScrollBtn } from "./Component/ScrollBtn";


export default function App() {
  return (
  <Router>
  <div className="font-sans bg-white text-gray-800">
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
    <Footer />
    <ScrollBtn /> {/* Scroll-to-top arrow */}
  </div>
</Router>

  );
}
