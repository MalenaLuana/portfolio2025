import { Button } from "@/components/Button";
import { color } from "@/utils/constants";
import { styled } from "@mui/material";

export const MainContainer = styled("div")<{
  isMaximized: boolean;
  gameWidth: number;
  gameHeight: number;
}>(({ isMaximized, gameWidth, gameHeight }) => ({
  width: isMaximized ? "100%" : "auto",
  height: isMaximized ? "100%" : "100%",
  display: "grid",
  gridTemplateColumns: `repeat(${gameWidth}, 30px)`,
  gridTemplateRows: `repeat(${gameHeight}, 30px)`,
  gap: "1px",
  backgroundColor: "#99B69A",
  position: "relative",
  fontFamily: "monospace",
  backgroundImage: `
    linear-gradient(to right, rgba(32, 133, 46, 0.2) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(51, 99, 67, 0.2) 1px, transparent 1px)
  `,
  backgroundSize: "30px 30px",
}));

export const SnakeSegment = styled("div")<{
  positionX: number;
  positionY: number;
}>(({ positionX, positionY }) => ({
  position: "absolute",
  top: `${positionY * 30}px`,
  left: `${positionX * 30}px`,
  width: "30px",
  height: "30px",
  backgroundColor: color.dark500,
  border: "solid 4px",
  borderColor: "#99B69A",
  boxShadow:
    "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;",
}));

export const SnakeFood = styled("div")<{
  positionX: number;
  positionY: number;
}>(({ positionX, positionY }) => ({
  position: "absolute",
  top: `${positionY * 30}px`,
  left: `${positionX * 30}px`,
  width: "30px",
  height: "30px",
  borderRadius: "32px",
  backgroundColor: color.dark500,
}));

export const GameOverBox = styled("div")(() => ({
  color: color.dark500,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const PlayAgain = styled("button")(() => ({
  transition: "none",
  backgroundColor: color.dark500,
  color: "#99B69A",
  fontFamily: "monospace",
  padding: "5px 10px",
  border: "solid 4px",
  borderColor: "#99B69A",
  boxShadow:
    "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;",
  ":hover": { cursor: "pointer" },
}));
