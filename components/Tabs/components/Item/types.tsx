import { TabMode } from "../../types";

export type ItemProps = {
  label: string | number;
  stylesContainer?: {};
  labelStyles?: {};
  index: number;
  isSelected: boolean;
  onPress?: (selectedIndex: number) => void;
  mode?: TabMode;
};
