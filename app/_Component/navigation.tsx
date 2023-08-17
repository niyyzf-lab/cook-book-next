"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

function Navigation() {
  return (
    <div className="sm:px-20 px-9 w-screen flex justify-between fixed bottom-0">
      <Link href="/">
        <div className="flex flex-col items-center">
          <Icon icon="ri:home-line" className=" text-3xl md:text-3xl" />
          <span className="md:text-lg text-sm">首页</span>
        </div>
      </Link>
      <Link href="/whatToEat">
        <div className="flex flex-col items-center">
          <Icon icon="ri:compass-2-line" className=" text-3xl md:text-3xl" />
          <span className="md:text-lg text-sm">吃什么</span>
        </div>
      </Link>
      <Link href="/help">
        <div className="flex flex-col items-center">
          <Icon icon="ri:question-line" className="text-3xl md:text-3xl" />
          <span className="md:text-lg text-sm">帮助</span>
        </div>
      </Link>
      <Link href="/mine">
        <div className="flex flex-col items-center">
          <Icon icon="ri:user-line" className="text-3xl md:text-3xl" />
          <span className="md:text-lg text-sm">我的</span>
        </div>
      </Link>
    </div>
  );
}

export default Navigation;
