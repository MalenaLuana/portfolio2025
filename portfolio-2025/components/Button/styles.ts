import { color } from "@/utils/constants";
import { Button, styled } from "@mui/material";

interface ButtonStyledProps {
  customcolor?: color;
  active?: string;
}
export const ButtonStyled = styled(Button)<ButtonStyledProps>(
  ({ customcolor, active }) => ({
    background: active == "true" ? `${color.primary700}40` : color.primary500,
    borderTop: "solid 3px",
    borderLeft: "solid 3px",
    borderColor:
      active == "true" ? color.primary700 : customcolor || color.primary100,
    color: customcolor || color.primary700,
    transition: "all 0.1s ease-in-out",
    borderRadius: 0,
    boxShadow:
      active == "true"
        ? `3px 3px 0px ${color.primary100}`
        : `3px 3px 0px ${color.primary700}`,
    padding: "5px 30px",
    "&:hover": {
      background: `${color.primary700}40`,
    },
  }),
);
