import { color } from "@/utils/constants";
import { styled } from "@mui/material";
import { Button } from "../Button";

export const Container = styled("div")<{
  maximized: boolean;
}>(({ maximized }) => ({
  border: "solid 3px",
  borderColor: color.primary500,
  width: maximized ? "100%" : "300px",
  height: maximized ? "100%" : "400px",
  overflow: "hidden",
  boxShadow: "4px 4px 6px",
  zIndex: 3,
}));

export const TopHandler = styled("div")(() => ({
  borderBottom: "solid 3px",
  borderColor: color.primary500,
  background: color.primary300,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "5px 5px",
  fontSize: 10,
}));

export const Content = styled("div")(() => ({
  width: "100%",
  height: "100%",
  background: color.white500,
  overflowY: "scroll",
}));

export const ButtonContainer = styled("div")(() => ({
  display: "flex",
  gap: "10px",
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
