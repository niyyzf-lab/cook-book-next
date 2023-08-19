import { type } from "os";
import {
  vegetablesList,
  meatList,
  stapleFoodList,
  toolsList,
} from "./IngredientList";
import { Video } from "./post";
/**定义颜色接口 */
export type Color = "green" | "red" | "yellow" | "stone" | "orange";

/**定义一个食材 */
export interface Ingredient {
  /**食材名称 */
  name: string;
  /**食材icon */
  icon?: string;
}

/**
 * 根据食材名称获取食材
 */
export const getIngredientByName = (name: string): Ingredient | undefined => {
  const list = [
    ...vegetablesList,
    ...meatList,
    ...stapleFoodList,
    ...toolsList,
  ];
  return list.find((item) => item.name === name);
};
export function matchBvid(bv: string, videos:Video[]) {
  const matchedVideo = videos.find((video) => video.data.bvid === bv);
  if (matchedVideo) {
    return matchedVideo.data.pic;
  }
  return ""; // 如果没有匹配到，默认返回空字符串
}
