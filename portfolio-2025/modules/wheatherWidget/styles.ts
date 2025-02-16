import { color } from "@/utils/constants";
import { styled } from "@mui/material";

export const MainContainer = styled("div")({
  width: "220px",
  minHeight: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: `${color.blue500}80`,
  position: "absolute",
  left: "40px",
  top: "30px",
  padding: "20px",
  borderRadius: "10px",
  lineHeight: 0,
  color: "white",
  border: "2px solid",
  borderColor: color.blue500,
  zIndex: 0,
});

export const Tempt = styled("p")({
  fontSize: 40,
  fontWeight: "bold",
  color: "white",
});

export const County = styled("div")({
  display: "flex",
  gap: 0,
  alignItems: "center",
  flexDirection: "column",
  fontSize: 10,
});

export const Wind = styled("div")({
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  fontSize: 12,
});
