import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-dark-background pt-8 text-white w-full flex items-center justify-center">
      <span className="mr-2">&copy; {currentYear}</span>Nguyen Hong Quang
    </div>
  );
};

export default Footer;
