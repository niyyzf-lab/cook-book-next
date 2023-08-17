"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

function DarkThemeSwitch() {
  return (
    <Icon
      icon="solar:sun-line-duotone"
      className="hover:text-yellow-400 self-end mx-2 mt-2 text-2xl"
    />
  );
}

export default DarkThemeSwitch;
