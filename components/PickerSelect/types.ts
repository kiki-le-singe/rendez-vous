export type PickerSelectProps = {
  onPress: (values: string[], selectName: string) => void;
  placeholder: string;
  selectTitle: string;
  values: string[];
  selectName: string;
  value: string | null;
};
