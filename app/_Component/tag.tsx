"use client";
import React, { useRef, useState } from "react";
import { useCheckbox, Chip, VisuallyHidden } from "@nextui-org/react";
import { Color } from "../_help/help";
import ClassName from "classnames";
import { Content } from "next/font/google";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CheckboxStyle } from "../_style/tag-style";

export default function TagChickBox(props: any) {
  const { isSelected, getBaseProps, getLabelProps, getInputProps } =
    useCheckbox({
      ...props,
    });
  const styles = CheckboxStyle({ isSelected, color: props.color });
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
          !isSelected ? (
            <Icon icon={props.icon} color={props.color} />
          ) : (
            <Icon icon="twemoji:fork-and-knife-with-plate" />
          )
        }
        variant="faded"
        {...getLabelProps()}
      >
        {props.children ? props.children : isSelected ? "Enabled" : "Disabled"}
      </Chip>
    </label>
  );
}
