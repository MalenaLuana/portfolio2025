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
  backgroundColor: "#93978e",
  position: "relative",
  fontFamily: "monospace",
  backgroundImage: `
    linear-gradient(to right, rgba(32, 36, 32, 0.2) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(39, 43, 40, 0.2) 1px, transparent 1px)
  `,
  backgroundSize: "30px 30px",
  border: "solid 4px",
  borderColor: color.dark500,
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
  backgroundColor: color.primary800,
  border: "solid 4px",
  borderColor: color.primary50,
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
  backgroundColor: "#dfa8c2",
}));

export const GameOverBox = styled("div")(() => ({
  color: color.primary100,
  padding: "10px 20px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: color.primary700,
  boxShadow: `3px 3px 0px ${color.primary800}`,
}));

export const PlayAgain = styled(Button)(() => ({
  transition: "none",
  backgroundColor: color.primary800,
  color: "#99B69A",
  padding: "5px 10px",
  border: "solid 4px",
  borderColor: "rgb(166, 168, 166)",
  boxShadow: `4px 4px ${color.primary800}50`,
  ":hover": { cursor: "pointer" },
}));
