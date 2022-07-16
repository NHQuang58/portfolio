import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-dark-background text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="title">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Quang, nice to meet you. Please take a look around!</p>
          </div>
          <div>
            <p className="mb-4">
              I was a student at Hanoi University of Science and Technology. My major is Electronic
              and Telecommunication.
            </p>
            <p className="mb-4">
              My expertise is mostly electronics, hardware, and firmware programming. I used to have
              experience programming firmware for embedded devices. But after being exposed to the
              software, I realized I really fit this.
            </p>
            <p>
              Currently, my near future goal is to become a fullstack software developer. I'm trying
              every day and seizing new opportunities to get there!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
