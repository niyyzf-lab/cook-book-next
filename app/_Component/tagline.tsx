import TagChickBox from "./tag";
import React from "react";
import { Color } from "../_help/help";
import { CheckboxGroup } from "@nextui-org/react";

function Tagline(props: { Data: string[]; color: Color }) {
  const [groupSelected, setGroupSelected] = React.useState<string[]>([]);
  return (
    <CheckboxGroup
      orientation="horizontal"
      value={groupSelected}
      onChange={setGroupSelected as any}
      classNames={{
        base: "w-full",
        wrapper: " justify-center ",
      }}
    >
      {props.Data.map((item) => (
        <TagChickBox key={item} value={item} color={props.color}>
          <span>{item}</span>
        </TagChickBox>
      ))}
    </CheckboxGroup>
  );
}

export default Tagline;
