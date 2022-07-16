import React from "react";

const ItemSkill = (props) => {
  const { src, nameSkill } = props;
  return (
    <div className="col-span-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
      <img className="w-20 mx-auto" src={src} alt={nameSkill} />
      <p className="my-4">{nameSkill}</p>
    </div>
  );
};

export default ItemSkill;
