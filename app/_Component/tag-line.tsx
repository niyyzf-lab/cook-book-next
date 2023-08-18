import TagChickBox from "./tag";
import React from "react";
import { Color } from "../_help/help";
import { CheckboxGroup } from "@nextui-org/react";
import { Ingredient } from "../_help/help";
import { getIngredientByName } from "../_help/help";

function Tagline(props: {
  Data: Ingredient[];
  color: Color;
  onChange: (value: Ingredient[] | null) => void;
}) {
  const [groupSelected, setGroupSelected] = React.useState<string[]>([]);
  const handleGroupChange = (selected: string[]) => {
    setGroupSelected(selected);
    //比较四个列表，把string[]转换成Ingredient[]
    const IngredientList = selected.map((item) => {
      const ingredient = getIngredientByName(item);
      return ingredient !== undefined ? ingredient : null;
    });
    //判断是否为null[]
    if (IngredientList.includes(null)) {
      props.onChange(null);
    } else {
      props.onChange(IngredientList as Ingredient[]);
    }
  };
  return (
    <CheckboxGroup
      orientation="horizontal"
      value={groupSelected}
      onChange={handleGroupChange as any}
      classNames={{
        base: "w-full px-2",
        wrapper: " justify-center ",
      }}
    >
      {props.Data.map((item) => (
        <TagChickBox
          key={item.name}
          value={item.name}
          color={props.color}
          icon={item.icon}
        >
          <span>{item.name}</span>
        </TagChickBox>
      ))}
    </CheckboxGroup>
  );
}

export default Tagline;
