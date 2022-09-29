import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShortenUrlForm from "./components/ShortenUrlForm";
import UrlsList from "./components/UrlsList";
import svgImage from "./assets/images/undraw_link_shortener.svg";
import ContactUs from "./components/ContactUs";

function App() {
  const [urls, setUrls] = useState([]);
  const [page, setPage] = useState("Home");

  const addUrl = (url) => {
    setUrls([url, ...urls]);
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div>
      <Header changePage={changePage} />
      {page === "Home" && (
        <div className="py-16">
          <h1 className="mt-4 mb-6 text-2xl font-medium text-center text-gray-900 underline sm:text-3xl title-font">
            URL Shortener
          </h1>
          <img src={svgImage} alt="" className="mx-auto mt-5" width={300} />
          <ShortenUrlForm addUrl={addUrl} />
          <UrlsList urls={urls} />
        </div>
      )}
      {page === "Contact" && <ContactUs />}
      <Footer />
    </div>
  );
}

export default App;
