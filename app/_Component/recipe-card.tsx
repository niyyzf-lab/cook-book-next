import React from "react";
import { Difficulty, RecipeItem } from "../_help/db";
import { Card, CardBody, CardFooter, Image, Tooltip } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getIngredientByName, matchBvid } from "../_help/help";
import { Video } from "./../_help/post";

function Recipe_card(props: { recipe: RecipeItem[]; VideoData: Video[] }) {
  const renderIcons = (difficulty: Difficulty | undefined | "") => {
    if (difficulty === "简单") {
      return (
        <>
          <Icon icon="ph:star-fill" color="yellow" />
        </>
      );
    } else if (difficulty === "普通") {
      return (
        <>
          <Icon icon="ph:star-fill" color="yellow" />
          <Icon icon="ph:star-fill" color="yellow" />
        </>
      );
    } else if (difficulty === "困难") {
      return (
        <>
          <Icon icon="ph:star-fill" color="yellow" />
          <Icon icon="ph:star-fill" color="yellow" />
          <Icon icon="ph:star-fill" color="yellow" />
        </>
      );
    }
    return null;
  };
  return (
    <div className="gap-2 flex flex-wrap justify-center p-4 ">
      {props.recipe.map((item, index) => (
        <Tooltip content={item.tags} key={index}>
          <Card
            shadow="sm"
            isPressable
            onPress={() => console.log("item pressed")}
            className="w-[300px]"
          >
            <CardBody className="overflow-visible p-0">
              <div className="  relative">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.name}
                  className="w-full object-cover h-[140px]"
                  src={matchBvid(item.bv as string, props.VideoData)}
                />
                <b className="absolute top-0 right-0  p-1 rounded-tl-lg  opacity-80 flex">
                  {renderIcons(item.difficulty)}
                </b>
              </div>
            </CardBody>
            <CardFooter className="text-small justify-between flex justify-items-center">
              <b className="truncate">{item.name}</b>
              <span className="flex flex-wrap items-center">
                {item.emojis?.map((emoji, index) => (
                  <Icon icon={emoji} key={index} />
                ))}
                <Icon icon="line-md:arrows-horizontal-alt" />
                {item.tools?.map((tool, index) => {
                  const icon = getIngredientByName(tool)?.icon;
                  if (icon !== undefined) {
                    return (
                      <Icon icon={icon} key={index} className="text-gray-500" />
                    );
                  }
                  return null;
                })}
              </span>
            </CardFooter>
          </Card>
        </Tooltip>
      ))}
    </div>
  );
}

export default Recipe_card;
