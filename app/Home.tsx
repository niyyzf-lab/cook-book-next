"use client";
import React from "react";
import Tagline from "./_Component/tag-line";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  vegetablesList,
  meatList,
  stapleFoodList,
  toolsList,
} from "./_help/IngredientList";
import { Ingredient } from "./_help/help";

export default function Home() {
  //创建多个列表，用于存储用户选择的食材
  const [vegetables, setVegetables] = React.useState<Ingredient[]>([]);
  const [meat, setMeat] = React.useState<Ingredient[]>([]);
  const [stapleFood, setStapleFood] = React.useState<Ingredient[]>([]);
  const [tools, setTools] = React.useState<Ingredient[]>([]);
  const [mode, setMode] = React.useState<Ingredient[]>([{ name: "模糊匹配" }]);
  const [result, setResult] = React.useState<Ingredient[]>([]);
  //方法输出所有列表
  React.useEffect(() => {
    //合并三个列表
    let all: Ingredient[] = vegetables.concat(meat).concat(stapleFood);
    console.log(all);
    console.log(tools);
    console.log(mode);
  }, [vegetables, meat, stapleFood, tools, mode]);
  return (
    <div className="flex flex-col items-center w-full gap-y-4 pt-2">
      <div className="flex flex-col items-center">
        <Icon
          icon="mdi:pot-steam-outline"
          className="hover:text-green-600 md:text-7xl text-5xl opacity-80 hover:opacity-100 transition-colors transition-duration: 150ms "
        />
        <p className=" text-sm "> 好的，今天我们来做菜！ </p>
      </div>
      <h2 className="text-xl font-bold opacity-90">🥘 先选一下食材</h2>
      <div className="flex flex-col items-center">
        <h2 className=" text-base font-bold pb-2 opacity-90"> 🥬 菜菜们 </h2>
        <Tagline
          Data={vegetablesList}
          color="green"
          onChange={(value: Ingredient[] | null) => {
            if (value !== null) {
              setVegetables(value);
            } else {
              setVegetables([]);
            }
          }}
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className=" text-base font-bold p-2 opacity-90"> 🥩 肉肉们 </h2>
        <Tagline
          Data={meatList}
          color="red"
          onChange={(value: Ingredient[] | null) => {
            if (value !== null) {
              setMeat(value);
            } else {
              setMeat([]);
            }
          }}
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className=" text-base font-bold p-2">
          🍚 主食也要一起下锅吗？（不选也行）
        </h2>
        <Tagline
          Data={stapleFoodList}
          color="yellow"
          onChange={(value: Ingredient[] | null) => {
            if (value !== null) {
              setStapleFood(value);
            } else {
              setStapleFood([]);
            }
          }}
        ></Tagline>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold p-2 opacity-90">🍳 再选一下厨具</h2>
        <Tagline
          Data={toolsList}
          color="stone"
          onChange={(value: Ingredient[] | null) => {
            if (value !== null) {
              setTools(value);
            } else {
              setTools([]);
            }
          }}
        ></Tagline>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold p-2 opacity-90">
          🍲 来看看组合出的菜谱吧！
        </h2>
        <Tagline
          Data={[
            { name: "模糊匹配" },
            { name: "严格匹配" },
            { name: "生存模式" },
          ]}
          color="orange"
          onChange={(value: Ingredient[] | null) => {
            if (value !== null) {
              setMode(value);
            } else {
              setMode([]);
            }
          }}
        ></Tagline>
      </div>
      <p>你要先选食材或工具哦～</p>
    </div>
  );
}
