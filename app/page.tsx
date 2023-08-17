"use client";
import React from "react";
import Tagline from "./_Component/tagline";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full gap-y-4">
      <div className="flex flex-col items-center">
        <Icon
          icon="mdi:pot-mix-outline"
          className="hover:text-green-600 md:text-7xl text-5xl opacity-80 hover:opacity-100 transition-colors transition-duration: 150ms "
        />
        <p className=" text-sm "> 好的，今天我们来做菜！ </p>
      </div>
      <h2 className="text-xl font-bold opacity-90">🥘 先选一下食材</h2>
      {/**蔬菜 */}
      {Vegetables()}
      <div className="flex flex-col items-center">
        <h2 className=" text-base font-bold p-2 opacity-90"> 🥩 肉肉们 </h2>
        <Tagline
          Data={[
            "🥓午餐肉",
            "🌭香肠",
            "🌭腊肠",
            "🐤鸡肉",
            "🐷猪肉",
            "🥚鸡蛋",
            "🦐虾",
            "🐮牛肉",
            "🦴骨头",
            "🐟鱼(Todo)",
          ]}
          color="red-tag"
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className=" text-base font-bold p-2">
          🍚 主食也要一起下锅吗？（不选也行）
        </h2>
        <Tagline
          Data={["🍝面食", "🍞面包", "🍚米", "🍜方便面"]}
          color="yellow-tag"
        ></Tagline>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold p-2 opacity-90">🍳 再选一下厨具</h2>
        <Tagline
          Data={[
            "烤箱",
            "空气炸锅",
            "微波炉",
            "电饭煲",
            "一口能炒又能煮的大锅",
          ]}
          color="stone-tag"
        ></Tagline>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold p-2 opacity-90">
          🍲 来看看组合出的菜谱吧！
        </h2>
        <Tagline
          Data={["模糊匹配", "严格匹配", "生存模式"]}
          color="orange-tag"
        ></Tagline>
      </div>
      <p>你要先选食材或工具哦～</p>
    </div>
  );
}
function Vegetables() {
  return (
    <div className="flex flex-col items-center">
      <h2 className=" text-base font-bold pb-2 opacity-90"> 🥬 菜菜们 </h2>
      <Tagline
        Data={[
          "🥔土豆",
          "🥕胡萝卜",
          "🥦花菜",
          "🥣白萝卜",
          "🥒西葫芦",
          "🍅番茄",
          "🥬芹菜",
          "🥒黄瓜",
          "🧅洋葱",
          "🎍莴笋",
          "🍄菌菇",
          "🍆茄子",
          "🍲豆腐",
          "🥗包菜",
          "🥬白菜",
        ]}
        color="green-tag"
      />
    </div>
  );
}
