import { Button } from "@/components/Button";
import { color } from "@/utils/constants";
import { styled } from "@mui/material";

export const MainContainer = styled("div")<{
  isMaximized: boolean;
  gameWidth: number;
  gameHeight: number;
}>(({ isMaximized, gameWidth, gameHeight }) => ({
  userSelect: "none",
  width: isMaximized ? "100%" : "auto",
  height: isMaximized ? "100%" : "100%",
  display: "grid",
  gridTemplateColumns: `repeat(${gameWidth}, 30px)`,
  gridTemplateRows: `repeat(${gameHeight}, 30px)`,
  gap: "1px",
  backgroundColor: color.primary700,
  position: "relative",
  backgroundImage: `
    linear-gradient(to right, rgba(32, 36, 32, 0.2) 2px, transparent 1px),
    linear-gradient(to bottom, rgba(39, 43, 40, 0.2) 2px, transparent 1px)
  `,
  backgroundSize: "30px 30px",
  border: "solid 10px",
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
  borderColor: color.primary500,
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
  backgroundColor: "#9c84a1",
}));

export const GameOverBox = styled("div")(() => ({
  border: "solid 4px",
  color: color.primary800,
  padding: "10px 20px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: color.primary500,
  boxShadow: `3px 3px 0px ${color.primary800}`,
}));

export const PlayAgain = styled(Button)(() => ({}));
