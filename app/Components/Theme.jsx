"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { ImSpinner2 } from "react-icons/im";

const Theme = () => {
  const { theme, setTheme } = useTheme();

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div
        className="mr-4 rounded px-2 py-1 h-6 w-6 bg-slate-700 ease-linear duration-200 animate-pulse hidden sm:block"
        style={{ animationDuration: "800ms" }}
      />
    );
  }

  return (
    <button
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      className={"mr-4 rounded px-2 py-1  ease-linear duration-200"}
    >
      {theme === "dark" ? <BsFillMoonStarsFill /> : <FiSun />}
    </button>
  );
};

export default Theme;
