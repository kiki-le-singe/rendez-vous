export type TStyles = {
  [key: string]: object;
};

export type themeValues = "green" | "red" | "darkBlue" | "light";

export type ButtonProps = {
  label: string;
  theme?: themeValues;
  onPress?: () => void;
  animatedStyle?: {};
};
