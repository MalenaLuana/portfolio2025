export interface IAppIcon {
  onClick: () => void;
  label: string;
  image: string;
  position?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}
