"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

function DarkThemeSwitch() {
  //编写一个深色模式开关
  const [darkMode, setDarkMode] = React.useState(false);
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="flex flex-col items-center">
      <Icon
        icon="solar:sun-line-duotone"
        className="hover:text-yellow-400 self-end mx-2 mt-2 text-2xl"
        onClick={() => setDarkMode(!darkMode)}
      />
    </div>
  );
}

export default DarkThemeSwitch;
