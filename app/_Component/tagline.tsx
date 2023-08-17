import Tag from "./tag";
import React from "react";

function Tagline(props: { Data: string[]; color?: string }) {
  return (
    <div className="flex flex-wrap  justify-center px-5 gap-x-2 gap-y-2">
      {props.Data.map((item) => (
        <Tag className={props.color} key={item}>
          <span>{item}</span>
        </Tag>
      ))}
    </div>
  );
}

export default Tagline;
