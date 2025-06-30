import React from "react";
import { FaDev, FaGithub } from "react-icons/fa";
import { IoLogoLinkedin, IoMdDownload } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const typing = [
    "A Fronted Developer",
    "A Backend Developer",
    "A Mern Stack Developer",
  ];
  return (
    <div className="flex sm:flex-row flex-col-reverse items-center justify-center border-b-2 border-b-red-500">
      <div>
        <h6>Hello there! I'm</h6>
        <h1 className="text-5xl">Ihsan Uddin Khan</h1>
        <span>
          <Typewriter
            words={typing}
            loop={500}
            cursor
            // cursorColor="white"
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <p>
          A passionate frontend developer crafting elegant digital experiences,
          driven by curiosity, creativity, and a love for turning ideas into
          interactive reality.
        </p>
        <div className="flex items-center gap-2 text-2xl">
          <p>
            <Link to="https://www.linkedin.com/in/ihsan-uddin/" target="_blank">
              <IoLogoLinkedin />
            </Link>
          </p>
          <p>
            <Link to="https://github.com/ihsanuddin637" target="_blank">
              <FaGithub />
            </Link>
          </p>
          <p>
            <Link to="https://dev.to/ihsanuddin" target="_blank">
              <FaDev />
            </Link>
          </p>
          <div className="border-2 border-red-400 rounded-lg">
            <a href="/resume/Ihsan_Uddin_Khan_CV.pdf" target="_blank">
              <h5 className="flex items-center gap-1">
                <LuDownload />
                Download Resume
              </h5>
            </a>
          </div>
        </div>
      </div>
      <div>
        <img src="/assets/photo_694385-removebg-preview.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
