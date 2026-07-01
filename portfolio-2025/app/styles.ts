import { color } from "@/utils/constants";
import { styled } from "@mui/material";

export const MainContainer = styled("div")<{ backgroundImage: string }>(
  ({ backgroundImage }) => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: color.primary700,
    height: "100vh",
    position: "relative",
    overflow: "hidden",
    color: color.primary800,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  }),
);

export const LayoutBox = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));
