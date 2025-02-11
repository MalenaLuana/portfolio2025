import { color } from "@/utils/constants";
import { styled } from "@mui/material";
import { Button } from "../Button";

export const Container = styled("div")<{
  maximized: boolean;
  top: number;
  left: number;
}>(({ maximized, left, top }) => ({
  border: "solid 3px",
  borderColor: color.primary500,
  width: maximized ? "100%" : "300px",
  height: maximized ? "100%" : "400px",
  transition: `width 0.2s ease-in-out, height 0.2s ease-in-out, ${
    top == 0 && left == 0 ? "top 0.1s ease,left 0.1s ease" : ""
  }`,
  overflow: "hidden",
}));

export const TopHandler = styled("div")(() => ({
  borderBottom: "solid 3px",
  borderColor: color.primary500,
  background: color.primary300,
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  gap: "10px",
  padding: "5px 5px",
}));
export const Content = styled("div")(() => ({
  width: "100%",
  height: "100%",
  background: color.white500,
}));
export const ActionButton = styled(Button)(() => ({
  border: "solid 1px",
  background: color.primary100,
  boxShadow: `2px 2px 0px ${color.primary700} `,
  padding: 0,
  minWidth: 0,
  ":hover": {
    background: color.primary300,
    transform: "none",
    boxShadow: `2px 2px 0px ${color.primary700} `,
  },
}));
