import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-dark-background">
      {/* Container */}
      <div className="max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center">
        <p className="text-xl text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl mb-2 sm:text-6xl font-bold text-[#ccd6f6] ">Nguyen Hong Quang</h1>
        <h2 className="text-4xl text-[#8892b0]">I'm a software development engineer</h2>
        <p className="text-[#8892b0] py-2 max-w-[700px]">
          I have experience in developing embedded devices, and have almost 1 year of experience
          programming firmware. I have been focusing on developing a complete software system
          (backend and frontend) since January 2022.
        </p>
        <p className="text-[#8892b0] py-2 max-w-[700px]">
          I am very eager to learn knowledge, both in terms of soft skills and technical skills. In
          the near future, I want to become a fullstack software developer.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
