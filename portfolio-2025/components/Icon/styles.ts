import { styled } from "@mui/material";
import { IIconProps } from "./types";

export const IconStyled = styled("div")(
  ({
    width = "1.5rem",
    height = "1.5rem",
    name,
    color = "currentColor",
  }: IIconProps) => {
    const iconUrl = `/icons/${name}.svg`;

    return {
      maskImage: `url(${iconUrl})`,
      maskSize: "contain",
      maskRepeat: "no-repeat",
      maskPosition: "center",
      width,
      height,
      backgroundColor: color,
    };
  }
);
