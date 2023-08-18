import TagChickBox from "./tag";
import React from "react";
import { Color } from "../_help/help";

function Tagline(props: { Data: string[]; color: Color }) {
  return (
    <div className="flex flex-wrap  justify-center px-5 gap-x-2 gap-y-2">
      {props.Data.map((item) => (
        <TagChickBox key={item} color={props.color}>
          <span>{item}</span>
        </TagChickBox>
      ))}
    </div>
  );
}

export default Tagline;
