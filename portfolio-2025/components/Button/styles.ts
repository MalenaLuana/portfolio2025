import { color } from "@/utils/constants";
import { Button, styled } from "@mui/material";

interface ButtonStyledProps {
  customcolor?: color;
}

export const ButtonStyled = styled(Button)<ButtonStyledProps>(
  ({ customcolor }) => ({
    background: color.primary100,
    border: "solid 3px",
    borderColor: customcolor || color.primary700,
    color: customcolor || color.primary700,
    transition: "all 0.2s ease-in-out",
    borderRadius: 0,
    boxShadow: `6px 6px 0px ${color.primary700} `,
    "&:hover": {
      transform: "translate(-1px, -1px)",
      boxShadow: `8px 8px 0px ${color.primary800} `,
    },
  })
);
