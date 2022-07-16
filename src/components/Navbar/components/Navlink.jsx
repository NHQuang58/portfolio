import React from "react";
import { Link } from "react-scroll";

const Navlink = (props) => {
  const { to, display, isMobile, handleClick } = props;
  return (
    <li className={`font-semibold ${isMobile && "py-6 text-4xl"}`}>
      <Link onClick={handleClick} to={to} smooth={true} duration={500}>
        {display}
      </Link>
    </li>
  );
};

export default React.memo(Navlink);
