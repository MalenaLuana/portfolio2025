import { color } from "@/utils/constants";
import { styled } from "@mui/material";
import { Button } from "../Button";

export const Container = styled("div")<{
  maximized: boolean;
  index: number;
}>(({ maximized, index }) => ({
  width: maximized ? "100%" : "auto",
  height: maximized ? "90vh" : "auto",
  overflow: "hidden",
  boxShadow: "4px 4px 6px",
  zIndex: index,
  position: "relative",
}));

export const TopHandler = styled("div")(() => ({
  border: "solid 4px",
  borderColor: color.primary100,
  background: color.primary500,
  color: color.primary800,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "5px 10px",
  fontSize: 10,
  height: "5vh",
  fontWeight: "bold",
}));

export const Content = styled("div")(() => ({
  width: "100%",
  height: "100%",
  background: color.white500,
  border: "solid 3px",
  borderColor: color.primary100,
  paddingBottom: "50px",
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
  minWidth: "40px",
  ":hover": {
    background: color.primary300,
    transform: "none",
    boxShadow: `2px 2px 0px ${color.primary700} `,
  },
}));

export const BorderRight = styled("div")(() => ({
  height: "100%",
  position: "absolute",
  width: "4px",
  right: 0,
  top: 0,
  zIndex: 4,
  ":hover": {
    cursor: "ew-resize",
  },
}));

export const BorderBottom = styled("div")(() => ({
  width: "100%",
  position: "absolute",
  height: "4px",
  right: 0,
  bottom: 0,
  zIndex: 4,
  background: color.primary100,
  ":hover": {
    cursor: "s-resize",
  },
}));
