import { color } from "@/utils/constants";
import { styled } from "@mui/material";

export const Container = styled("nav")({
  backgroundColor: color.primary100,
  width: "100%",
  height: "10vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
  zIndex: 3,
  position: "relative",
});
