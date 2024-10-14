import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./hero-highlight";
import UserSearch from "../users/UserSearch";
import UserResults from "../users/UserResults";

export default function Hero() {
  return (
    <div className="min-h-screen">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Elevate your developer portfolio in no time using{" "}
          <Highlight className="text-black">GitFolio</Highlight>
        </motion.h1>
        <p className="text-center mt-3 md:mt-6 text-black text-md md:text-lg lg:text-2xl font-medium">
          Search for your GitHub id and share it away in the community 🎉
        </p>
        <UserSearch />
        <UserResults />
      </HeroHighlight>
    </div>
  );
}
