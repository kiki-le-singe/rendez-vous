export enum TabMode {
  TAB = "TAB",
  BUTTON = "BUTTON",
}
export type TabsProps = {
  labels: (string | number)[];
  icon?: JSX.Element | null;
  mode?: TabMode;
  labelStyles?: {};
};
