import React from "react";

function Footer() {
  return (
    <div
      className="flex flex-col md:flex-row w-full justify-between items-center border-t-[1px] border-t-gray-500 py-10 px-5 gap-5 bg-[#0b0b0b]"
      id="Contact"
    >
      <div className="flex flex-col items-start justify-center sm:justify-start">
        <p className="text-white font-bold text-3xl">GitFolio</p>
        <p className="text-gray-300 font-regular text-md">
          Built by{" "}
          <a
            href="https://twitter.com/_SirSimon_"
            target="__blank"
            className="font-bold text-blue-500"
          >
            Anmol
          </a>
        </p>
      </div>
      <div className="flex flex-col items-center md:items-start font-light text-gray-300">
        <a
          href="https://github.com/SirSimon162/GitHub-Finder"
          target="__blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/_SirSimon_"
          target="__blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/anmol-pattnayak-8134b0197/"
          target="__blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a href="mailto:anmolpattnayak2016@gmail.com">Email</a>
      </div>
    </div>
  );
}

export default Footer;
