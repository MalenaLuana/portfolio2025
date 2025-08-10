import { color } from "@/utils/constants";
import { styled, keyframes } from "@mui/material";
import { Button } from "../Button";

const previewAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.2);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

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
  borderRadius: maximized ? 0 : "10px",
  background: color.primary100,
  padding: "2px",
}));

export const TopHandler = styled("div")(() => ({
  border: "solid 4px",
  borderColor: color.primary100,
  background: color.primary500,
  color: color.primary800,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "5px 5px",
  fontSize: 10,
  fontWeight: "bold",
  borderRadius: "10px",
}));

export const Content = styled("div")(() => ({
  width: "100%",
  height: "100%",
  background: color.white500,
  border: "solid 3px",
  borderColor: color.primary100,
  paddingBottom: "50px",
  borderRadius: "10px",
  overflow: "hidden",
}));

export const ButtonContainer = styled("div")(() => ({
  display: "flex",
  gap: "10px",
}));

export const ActionButton = styled(Button)(() => ({
  border: "none",
  background: color.primary300,
  boxShadow: "none",
  padding: 0,
  minWidth: "40px",
  minHeight: "30px",
  borderRadius: "6px",
  ":hover": {
    background: color.primary500,
    transform: "none",
    boxShadow: "none",
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

export const ResizePreview = styled("div")(() => ({
  width: "99%",
  height: "89vh",
  position: "absolute",
  border: "solid 2px",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "10px",
  zIndex: 2,
  background: `${color.primary300}95`,
  borderColor: color.primary500,
  pointerEvents: "none",
  animation: `${previewAnimation} 0.3s cubic-bezier(0.3, 1.4, 0.5, 1) forwards`,
}));
