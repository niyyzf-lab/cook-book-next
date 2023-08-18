"use client";
import React, { useRef, useState } from "react";
import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";
import { Color } from "../_help/help";
import ClassName from "classnames";
import { Content } from "next/font/google";
import { Icon } from "@iconify/react/dist/iconify.js";

/**定义css变体 */
const checkbox = tv({
  slots: {
    base: "rounded border shadow-md hover:shadow-lg transition-all duration-700",
    content: "",
  },

  variants: {
    isSelected: {
      true: "", //使用选择器，无默认值
    },

    color: {
      green: {
        base: [
          " border-green-200 dark:border-green-800",
          "bg-green-300 bg-opacity-20",
          "shadow-green-500/50 hover:shadow-green-300/50",
        ],
        content: "text-green-800 dark:text-green-200",
      },
      red: {
        base: [
          " border-red-200 dark:border-red-800",
          "bg-red-300 bg-opacity-20",
          "shadow-red-500/50 hover:shadow-red-300/50",
        ],
        content: "text-red-800 dark:text-red-200",
      },
      yellow: {
        base: [
          " border-yellow-200 dark:border-yellow-800",
          "bg-yellow-300 bg-opacity-20",
          "shadow-yellow-500/50 hover:shadow-yellow-300/50",
        ],
        content: "text-yellow-800 dark:text-yellow-200",
      },
      stone: {
        base: [
          " border-stone-200 dark:border-stone-800",
          "bg-stone-300 bg-opacity-20",
          "shadow-stone-500/50 hover:shadow-stone-300/50",
        ],
        content: "text-stone-800 dark:text-stone-200",
      },
      orange: {
        base: [
          " border-orange-200 dark:border-orange-800",
          "bg-orange-300 bg-opacity-20",
          "shadow-orange-500/50 hover:shadow-orange-300/50",
        ],
        Content: "text-orange-800 dark:text-orange-200",
      },
    },
  },
  compoundVariants: [
    {
      color: "green",
      isSelected: true,
      class: {
        base: [
          " border-green-400 dark:border-green-800",
          "bg-green-600  bg-opacity-90",
        ],
        content: "text-green-100 dark:text-green-200",
      },
    },
    {
      color: "red",
      isSelected: true,
      class: {
        base: [
          " border-red-400 dark:border-red-800",
          "bg-red-500 bg-opacity-90",
        ],
        content: "text-red-100 dark:text-red-200",
      },
    },
    {
      color: "yellow",
      isSelected: true,
      class: {
        base: [
          " border-yellow-400 dark:border-yellow-800",
          "bg-yellow-500 bg-opacity-90",
        ],
        content: "text-yellow-100 dark:text-yellow-200",
      },
    },
    {
      color: "stone",
      isSelected: true,
      class: {
        base: [
          " border-stone-400 dark:border-stone-800",
          "bg-stone-600 bg-opacity-90",
        ],
        content: "text-stone-100 dark:text-stone-200",
      },
    },
    {
      color: "orange",
      isSelected: true,
      class: {
        base: [
          " border-orange-400 dark:border-orange-800",
          "bg-orange-500 bg-opacity-90",
        ],
        content: "text-orange-100 dark:text-orange-200",
      },
    },
  ],
});

export default function TagChickBox(props: {
  children?: React.ReactNode;
  color: Color;
}) {
  const {
    isSelected,
    isFocusVisible,
    getBaseProps,
    getLabelProps,
    getInputProps,
  } = useCheckbox({
    defaultSelected: false,
  });
  const styles = checkbox({ isSelected, color: props.color });
  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        startContent={
          isSelected ? (
            <Icon icon="fluent:food-24-filled" color={props.color} />
          ) : null
        }
        variant="faded"
        {...getLabelProps()}
      >
        {props.children ? props.children : isSelected ? "Enabled" : "Disabled"}
      </Chip>
    </label>
  );
}
