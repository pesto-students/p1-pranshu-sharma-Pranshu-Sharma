import React, { useState } from "react";

const ShortenUrlForm = ({ addUrl }) => {
  const [url, setUrl] = useState({
    id: "",
    originalUrl: "",
    shortUrl: "",
  });
  const [showLoader, setShowLoader] = useState(false);

  const handleUrlInputChange = (e) => {
    setUrl({
      id: "",
      originalUrl: e.target.value,
      shortUrl: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.originalUrl.trim()) {
      setShowLoader(true);
      fetch(`https://api.shrtco.de/v2/shorten?url=${url.originalUrl}`)
        .then((response) => response.json())
        .then((data) => {
          setShowLoader(false);
          addUrl({
            ...url,
            id: Math.random(),
            originalUrl: data.result.original_link,
            shortUrl: data.result.short_link,
          });
        });

      setUrl({
        id: "",
        originalUrl: "",
        shortUrl: "",
      });
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-11/12 p-6 my-6 bg-teal-500 border border-indigo-600 rounded shadow-lg shadow-indigo-500/50 sm:w-5/12"
      >
        <input
          name="url"
          type="text"
          value={url.originalUrl}
          onChange={handleUrlInputChange}
          placeholder="Enter URL"
          className="w-full px-3 py-1 mr-2 leading-8 text-gray-700 bg-white border border-gray-300 rounded outline-none"
        ></input>
        <button
          className="flex items-center justify-center px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded w-60 focus:outline-none hover:bg-indigo-600"
          type="submit"
        >
          {showLoader ? "Shortening" : "Shorten It!"}
          {showLoader && (
            <svg
              className="w-5 h-5 ml-2 -ml-1 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
        </button>
      </form>
    </div>
  );
};

export default ShortenUrlForm;
