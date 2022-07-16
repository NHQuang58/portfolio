import React from "react";
import Devzone from "src/assets/devzone.png";
import Ginno from "src/assets/ginno.png";
import Fsoft from "src/assets/fsoft.png";
import ItemWork from "./components/ItemWork";
const works = [
  {
    src: Devzone,
    link: "https://www.facebook.com/devzone.vn",
    title: "Devzone - Intern",
    time: "February 2020 - June 2021",
    description:
      "The first team I was exposed to embedded programming. I have met a lot of seniors and friends who love electronics and embedded programming. I learned and worked on MCUs like Stm32, Nuvoton, PIC, etc.",
  },
  {
    src: Ginno,
    title: "Ginnovation - Intern",
    link: "https://www.facebook.com/C%C3%B4ng-Ty-C%E1%BB%95-Ph%E1%BA%A7n-G-Innovations-Vi%E1%BB%87t-Nam-366405150869755/?ref=page_internal",
    time: "July 2021 - December 2021",
    description:
      "Ginno was the first company I was involved in researching and developing an actual product. I have been programming IoT devices, writing drivers for modules, debugging circuits, testing products.",
  },
  {
    src: Fsoft,
    title: "FPT Software - Software Development Engineer",
    link: "https://www.facebook.com/fptsoftware.official",
    time: "January 2020 - Now",
    description:
      "FPT Software is my current company. I joined the company as a backend developer, and I had the opportunity to learn and work with the frontend. At the moment, I am trying my best to develop the software projects here, and at the same time accumulate more knowledge for myself.",
  },
];
const Work = () => {
  return (
    <div name="work" className="w-full h-screen bg-dark-background text-gray-300">
      <div className="max-w-[1000px] mx-auto pl-10 flex flex-col justify-center items-start w-full h-full">
        {/* Intro of page */}
        <div>
          <p className="title">Work</p>
          <p className="py-4">Some of my recent work</p>
        </div>
        {/* Main content */}
        <div className="w-full">
          {works.map((cur, index) => {
            const { src, link, title, time, description } = cur;
            return (
              <ItemWork
                key={index}
                src={src}
                link={link}
                title={title}
                time={time}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
