"use client";
import * as React from "react";
import Tagline from "./_Component/tag-line";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  vegetablesList,
  meatList,
  stapleFoodList,
  toolsList,
} from "./_help/IngredientList";
import RecipeCard from "./_Component/recipe-card";
import { Ingredient, getIngredientByName } from "./_help/help";
import { recipes } from "./../data/recipe";
import { RecipeItem, db, searchRecipesByIngredients } from "./_help/db";

export default function Home() {
  //创建多个列表，用于存储用户选择的食材
  const [vegetables, setVegetables] = React.useState<Ingredient[]>([]);
  const [meat, setMeat] = React.useState<Ingredient[]>([]);
  const [stapleFood, setStapleFood] = React.useState<Ingredient[]>([]);
  const [tools, setTools] = React.useState<Ingredient[]>([]);
  const [mode, setMode] = React.useState<Ingredient[]>([{ name: "模糊匹配" }]);
  const [result, setResult] = React.useState<RecipeItem[]>([]);
  /**
   * 数据库初始化
   */
  const dBInit = () => {
    if (localStorage.getItem("dBInit") === null) {
      const Data = recipes;
      recipes.forEach((recipe) => {
        //获取菜谱的食材列表
        const ingredients = recipe.stuff;
        //创建一个空列表
        let ingredientList = ingredients.map((ingredient) => {
          return getIngredientByName(ingredient)?.icon;
        });
        //判断长度，如果大于5，就只保留一个大锅炖图标
        if (ingredientList.length > 5) {
          ingredientList = ["twemoji:shallow-pan-of-food"];
        }
        //像recipe中添加一个新的属性
        recipe.emojis = ingredientList as string[];
        db.Recipes.add(recipe);
        //添加初始化完成标记
        localStorage.setItem("dBInit", "true");
      });
    }
  };
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    dBInit();
  }
  //方法输出所有列表
  React.useEffect(() => {
    //合并三个列表
    let all: string[] = vegetables
      .concat(meat)
      .concat(stapleFood)
      .map((item) => {
        return item.name;
      });
    console.log(all);
    searchRecipesByIngredients(all).then((recipes) => {
      setResult(recipes);
    });
  }, [vegetables, meat, stapleFood, tools, mode]);
  /**头部标签 */
  const Header = (
    <div className="flex flex-col items-center">
      <Icon
        icon="mdi:pot-steam-outline"
        className="hover:text-green-600 md:text-7xl text-5xl opacity-80 hover:opacity-100 transition-colors transition-duration: 150ms "
      />
      <p className=" text-sm "> 好的，今天我们来做菜！ </p>
    </div>
  );
  /**蔬菜列表 */
  const vegetablesTags = (
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
  );
  /**肉类列表 */
  const meatTags = (
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
  );
  /**主食列表 */
  const stapleFoodTags = (
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
  );

  const toolsTags = (
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
  );
  const modeTags = (
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
  );
  return (
    <div className="flex flex-col items-center w-full gap-y-4 pt-2">
      {Header}
      <h2 className="text-xl font-bold opacity-90">🥘 先选一下食材</h2>
      {vegetablesTags}
      {meatTags}
      {stapleFoodTags}
      {toolsTags}
      {modeTags}
      <p>你要先选食材或工具哦～</p>
      <RecipeCard recipe={result} />
    </div>
  );
}
