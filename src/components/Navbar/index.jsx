/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Navlink from "./components/Navlink";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import SocialTab from "./components/SocialTab";
import "./style.css";
import { Link } from "react-scroll";

const links = [
  { to: "home", display: "Home" },
  { to: "about", display: "About" },
  { to: "skills", display: "Skills" },
  { to: "work", display: "Works" },
];

const social = [
  {
    link: "https://github.com/NHQuang58",
    display: "Github",
    Icon: FaGithub,
    background: "bg-bgr-github",
  },
  {
    link: "https://www.linkedin.com/in/quang-nguyen-hong-7a83a31a5/",
    display: "Linkedin",
    Icon: FaLinkedin,
    background: "bg-bgr-linkedin",
  },
  {
    link: "https://www.instagram.com/n.h.quang58/",
    display: "Instagram",
    Icon: FaInstagram,
    background: "instagram-bg",
  },
  {
    link: "https://www.facebook.com/n.h.quang05/",
    display: "FaceBook",
    Icon: FaFacebook,
    background: "bg-bgr-facebook",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 bg-dark-background">
      <div className="hover:cursor-pointer">
        <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          <img src={Logo} alt="Logo" style={{ width: "140px" }} />
        </Link>
      </div>
      {/* List navlinks */}
      <ul className="hidden md:flex">
        {links.map((cur, index) => {
          const { to, display } = cur;
          return <Navlink key={index} to={to} display={display} />;
        })}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden cursor-pointer z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={`${
          !nav
            ? "hidden"
            : "md:hidden absolute top-0 left-0 w-full h-screen bg-dark-background flex flex-col justify-center items-center"
        }`}
      >
        {links.map((cur, index) => {
          const { to, display } = cur;
          return (
            <Navlink handleClick={handleClick} key={index} to={to} display={display} isMobile />
          );
        })}
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex flex-col fixed left-0 top-[35%]">
        <ul>
          {social.map((cur, index) => {
            const { display, link, Icon, background } = cur;
            return (
              <SocialTab
                key={index}
                display={display}
                link={link}
                Icon={Icon}
                background={background}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
