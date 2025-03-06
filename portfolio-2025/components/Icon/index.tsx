import { IconStyled } from "./styles";
import { IIconProps } from "./types";

export function Icon({
  width = "1.5rem",
  height = "1.5rem",
  name,
  color = "currentColor",
  className = "",
  onClick,
}: IIconProps) {
  return (
    <IconStyled
      onClick={onClick}
      name={name}
      width={width}
      height={height}
      color={color}
      className={className}
    />
  );
}
