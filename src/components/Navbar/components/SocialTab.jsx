import React from "react";

const SocialTab = (props) => {
  const { display, link, Icon, background } = props;
  return (
    <li
      className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${background} `}
    >
      <a
        className="flex justify-between items-center w-full font-semibold text-gray-300"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {display} <Icon size={30} />
      </a>
    </li>
  );
};

export default SocialTab;
