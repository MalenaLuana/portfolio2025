import { Typography } from "@mui/material";
import { ButtonStyled } from "./styles";
import { IButton } from "./types";
import { Icon } from "../Icon";
import { playSound } from "@/utils/playSound";
import { sounds } from "@/utils/playSound/types";

export const Button = ({
  label,
  icon,
  color,
  onClick,
  className,
  onPointerDown,
}: IButton) => {
  return (
    <ButtonStyled
      onPointerDown={onPointerDown}
      className={className}
      onMouseDown={() => playSound(sounds.buttonClick)}
      onClick={onClick}
    >
      {label && <Typography color={color}>{label}</Typography>}
      {icon && <Icon name={icon} color={color} />}
    </ButtonStyled>
  );
};
