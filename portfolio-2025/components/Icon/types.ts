export interface IIconProps {
  width?: string;
  height?: string;
  name: string;
  color?: string;
  className?: string;
  alt?: string;
}

export enum iconName {
  cog = "cog",
  image = "image",
  mail = "mail",
  userSquare = "user-square",
  close = "close",
  maximize = "maximize",
}
