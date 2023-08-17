"use client";
import React, { useRef, useState } from "react";
import * as Toggle from "@radix-ui/react-toggle";
import ClassName from "classnames";
/**
 * @name Tag
 * @description 一个Tag组件
 */
function Tag(props: { className?: string; children?: React.ReactNode }) {
  const [value, setValue] = useState(false);
  const classes = ClassName(props.className);
  const onPressedChange = (e: boolean) => {
    setValue(e);
    console.log(value);
  };
  return (
    <Toggle.Root
      aria-label="Toggle italic"
      className={classes}
      onPressedChange={onPressedChange}
    >
      {props.children}
    </Toggle.Root>
  );
}

export default Tag;
