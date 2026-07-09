import { color } from "@/utils/constants";
import { styled } from "@mui/material";
import { loading } from "./animations";

export const MainContainer = styled("div")(() => ({
  background: color.primary100,
  color: "rgba(226, 136, 253, 1)",
  minHeight: "100%",
  whiteSpace: "pre-line",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  fontSize: 16,
  height: "100%",
  imageRendering: "pixelated",
}));

export const LoaderBox = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  width: "500px",
  color: color.primary700,
  textAlign: "center",
  background: color.primary100,
  padding: "24px",
  border: `2px solid ${color.primary700}`,
  boxShadow: `
  inset 2px 2px 0 ${color.primary300},
  inset -2px -2px 0 ${color.dark500}
`,
}));

export const Content = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "100%",
  height: "100%",
  overflowY: "scroll",
  padding: "20px",
}));

export const Loader = styled("div")(() => ({
  position: "relative",
  width: "260px",
  height: "24px",
  background: color.dark500,
  border: `2px solid ${color.primary700}`,
  boxShadow: `
    inset -2px -2px 0 ${color.primary500},
    inset 2px 2px 0 ${color.primary300}
  `,
  overflow: "hidden",
  imageRendering: "pixelated",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "2px",
    width: 0,
    background: `
      repeating-linear-gradient(
        90deg,
        ${color.primary500} 0 8px,
        ${color.primary300} 8px 16px
      )
    `,
    animation: `${loading} 7s steps(16) infinite`,
  },
  "&::after": {
    content: '"LOADING"',
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    color: color.primary100,
    textShadow: "1px 1px 0 #000",
  },
}));
