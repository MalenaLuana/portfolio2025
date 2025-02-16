import { color } from "@/utils/constants";
import { styled } from "@mui/material";

export const MainContainer = styled("div")<{ isMaximized: boolean }>(
  ({ isMaximized }) => ({
    width: isMaximized ? "100vw" : "50vw",
    height: isMaximized ? "100vh" : "50vh",
    display: "grid",
    gridTemplateColumns: "repeat(10, 30px)",
    gridTemplateRows: "repeat(10, 30px)",
    gap: "1px",
    backgroundColor: color.primary800,
    position: "relative",
  })
);
