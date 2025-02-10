import { IconStyled } from "./styles";
import { IIconProps } from "./types";

export function Icon({
  width = "1.5rem",
  height = "1.5rem",
  name,
  color = "currentColor",
  className = "",
}: IIconProps) {
  return (
    <IconStyled
      name={name}
      width={width}
      height={height}
      color={color}
      className={className}
    />
  );
}
