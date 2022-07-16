import React from "react";

const ItemWork = (props) => {
  const { src, title, link, time, description } = props;
  return (
    <div className="p-2 mr-2 mb-5 h-auto grid lg:grid-cols-8 md:grid-cols-5 grid-cols-3 gap-4 rounded border border-pink-600 ">
      <div className="col-span-1 flex items-center ">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={src} alt="link" style={{ width: "90%", borderRadius: "8px" }} />
        </a>
      </div>
      <div className="lg:col-span-7 md:col-span-4 col-span-2">
        <div className="flex flex-col justify-center">
          <p className="text-2xl font-semibold">{title}</p>
          <p className="text-base font-medium">{time}</p>
          <p className="text-[#8892b0]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemWork;
