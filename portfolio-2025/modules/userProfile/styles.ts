import { color } from "@/utils/constants";
import { styled } from "@mui/material";
import { glitch, loading, percentage, scanline, subtleGlow } from "./animations";

export const MainContainer = styled("div")(() => ({
  background: color.dark500,
  color: "rgba(226, 136, 253, 1)",
  minHeight: "100%",
  whiteSpace: "pre-line",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  fontFamily: "monospace",
  fontSize: 16,
  height: "100%",
}));

export const LoaderBox = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  width: "500px",
  color: color.primary500,
  textAlign: "center",
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
  display: "block",
  position: "relative",
  height: "38px",
  width: "260px",
  borderRadius: "4px",
  overflow: "hidden",
  background: `
    linear-gradient(180deg, ${color.dark500}ee, ${color.dark500}),
    repeating-linear-gradient(0deg, transparent 0 2px, ${color.primary700}22 2px 4px)
  `,
  backgroundSize: "100% 100%, 100% 8px",
  border: `2px solid ${color.primary700}`,
  boxShadow: `0 0 4px ${color.primary500}80, inset 0 0 8px ${color.dark500}`,
  animation: `${subtleGlow} 2.5s ease-in-out infinite, ${scanline} 3s linear infinite`,

  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    width: 0,
    height: "100%",
    background: `
      linear-gradient(90deg, rgba(129, 138, 211, 0.69), rgba(129, 138, 211, 0.69), rgba(129, 138, 211, 0.69)),
      repeating-linear-gradient(90deg, transparent 0 3px, rgba(129, 138, 211, 0.69) 3px 6px)
    `,
    backgroundSize: "100% 100%, 12px 100%",
    boxShadow: `inset 0 0 12px rgba(129, 138, 211, 0.69), 2px 0 8px rgba(129, 138, 211, 0.69)`,
    animation: `${loading} 7s linear infinite`,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "15px",
    fontWeight: 600,
    letterSpacing: "1px",
    fontFamily: "monospace",
    color: "rgba(255, 255, 255, 0.69)",
    textShadow: "0 0 4px rgba(129, 138, 211, 0.69), 0 0 8px rgba(129, 138, 211, 0.69)",
    animation: `${percentage} 7s linear infinite, ${glitch} 3.5s infinite`,
  },
}));
