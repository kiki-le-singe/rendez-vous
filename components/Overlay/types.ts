export type OverlayProps = {
  onClose: () => void;
  onSelectItem: (item: string, selectName: string) => void;
  isOpen: boolean;
  values?: string[];
  selectName?: string;
};
