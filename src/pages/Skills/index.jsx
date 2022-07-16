import React from "react";
import HTML from "src/assets/html.png";
import CSS from "src/assets/css.png";
import GIT from "src/assets/git.png";
import MONGO from "src/assets/mongo.png";
import NODE from "src/assets/node.png";
import POSTGRE from "src/assets/postgre.jpg";
import REACT from "src/assets/react.png";
import TAILWIND from "src/assets/tailwind.png";
import ItemSkill from "./components/ItemSkill";

const skills = [
  { src: HTML, nameSkill: "HTML" },
  { src: CSS, nameSkill: "CSS" },
  { src: GIT, nameSkill: "GIT" },
  { src: MONGO, nameSkill: "MongoDB" },
  { src: POSTGRE, nameSkill: "PostgreSQL" },
  { src: NODE, nameSkill: "NodeJs" },
  { src: REACT, nameSkill: "ReactJs" },
  { src: TAILWIND, nameSkill: "TailwindCSS" },
];
const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-dark-background text-gray-300">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center items-center w-full h-full">
        {/* Intro of page */}
        <div className="flex justify-start w-full pl-10">
          <div>
            <p className="title">Skills</p>
            <p className="py-4">These are some technologies I've worked with</p>
          </div>
          <div></div>
        </div>

        {/* Main content of page */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center p-10">
          {skills.map((cur, index) => {
            const { src, nameSkill } = cur;
            return <ItemSkill key={index} src={src} nameSkill={nameSkill} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
