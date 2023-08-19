import * as React from "react";
import HomePage from "./_Component/home";
import { getVideoData } from "./_help/post";
import { Video } from "./_help/post";

export default function Home() {
  //获取视频数据
  const handleData = async (data: string[]) => {
    "use server";
    console.log(data);
    return getVideoData(data).then((data) => {
      return data;
    });
  };
  return (
    <>
      <HomePage handleData={handleData} />
    </>
  );
}
