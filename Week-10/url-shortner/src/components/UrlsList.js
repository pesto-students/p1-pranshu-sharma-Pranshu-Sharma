import React from "react";

const UrlsList = ({ urls }) => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center">
      {urls?.map((url) => (
        <div
          key={url.id}
          className="flex items-center w-11/12 px-6 py-2 my-2 bg-white border rounded sm:w-5/12 border-slate-600"
        >
          <div className="w-full p-1 text-left sm:w-1/2 text-slate">
            <span className="font-medium title-font">{url.originalUrl}</span>
          </div>
          <div className="flex items-center justify-center w-full p-1 text-right sm:w-1/2 text-slate">
            <span className="w-full font-medium text-right title-font">{url.shortUrl}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UrlsList;
