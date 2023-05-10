export type PickerSelectStyles = {
  [key: string]: object;
};

export enum ThemePickerSelect {
  BLUE = "blue",
  GREEN = "green",
}

export type PickerSelectProps = {
  placeholder: string;
  selectLabel: string;
  values: string[];
  theme?: ThemePickerSelect;
  isReset?: boolean;
  handleResetPickerSelect: (isReset: boolean) => void;
};
