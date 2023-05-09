import { TabMode } from "../../types";

export type ItemProps = {
  label: string | number;
  stylesContainer: {};
  index: number;
  isSelected: boolean;
  onPress?: (selectedIndex: number) => void;
  mode?: TabMode;
};
