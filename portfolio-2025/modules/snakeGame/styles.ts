import { Button } from "@/components/Button";
import { color } from "@/utils/constants";
import { styled } from "@mui/material";

export const MainContainer = styled("div")<{
  isMaximized: boolean;
  gameWidth: number;
  gameHeight: number;
}>(({ isMaximized, gameWidth, gameHeight }) => ({
  width: isMaximized ? "100%" : "50vw",
  height: isMaximized ? "100%" : "50vh",
  display: "grid",
  gridTemplateColumns: `repeat(${gameWidth}, 30px)`,
  gridTemplateRows: `repeat(${gameHeight}, 30px)`,
  gap: "1px",
  backgroundColor: color.primary800,
  position: "relative",
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
  backgroundColor: color.blue500,
  borderRadius: "5px",
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
  backgroundColor: color.yellow500,
}));

export const GameOverBox = styled("div")(() => ({
  color: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const PlayAgain = styled(Button)(() => ({
  boxShadow: "none",
  transition: "none",
  backgroundColor: color.blue500,
  border: "none",
  borderRadius: "5px",
  color: "white",
}));
