import { color } from "@/utils/constants";
import { styled } from "@mui/material";

export const MainContainer = styled("div")<{ backgroundImage: string }>(
  ({ backgroundImage }) => ({
    backgroundImage: `url(${backgroundImage})`,
    height: "90vh",
    position: "relative",
    overflow: "hidden",
    color: color.primary800,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  })
);

export const AppIcon = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  fontSize: 10,
  transition: "transform 0.2s ease-in-out",
  position: "absolute",
  right: "50px",
  top: "40px",
  color: "white",
  gap: "10px",
  ":hover": { cursor: "pointer" },
}));

export const Icon = styled("div")(() => ({
  height: " 80px",
  width: "80px",
}));
