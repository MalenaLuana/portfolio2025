import { color } from "@/utils/constants";
import { keyframes, styled } from "@mui/material";

export const MainContainer = styled("div")(() => ({
  background: color.dark500,
  color: "#0f0",
  minHeight: "300px",
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

// Animaciones
const loading = keyframes({
  "0%": { width: "0" },
  "100%": { width: "100%" },
});

const percentage = keyframes({
  "0%": { content: '"0%"' },
  "5%": { content: '"5%"' },
  "10%": { content: '"10%"' },
  "20%": { content: '"20%"' },
  "30%": { content: '"30%"' },
  "40%": { content: '"40%"' },
  "50%": { content: '"50%"' },
  "60%": { content: '"60%"' },
  "70%": { content: '"70%"' },
  "80%": { content: '"80%"' },
  "90%": { content: '"90%"' },
  "95%": { content: '"95%"' },
  "96%": { content: '"96%"' },
  "97%": { content: '"97%"' },
  "98%": { content: '"98%"' },
  "99%": { content: '"99%"' },
  "100%": { content: '"100%"' },
});

// Loader
export const Loader = styled("div")(() => ({
  display: "block",
  position: "relative",
  height: "32px",
  width: "200px",
  background: "#fff",
  border: "2px solid #fff",
  overflow: "hidden",

  "&::before": {
    content: '""',
    background: "#0f0",
    position: "absolute",
    left: 0,
    top: 0,
    width: 0,
    height: "100%",
    animation: `${loading} 7s linear infinite`,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    textAlign: "center",
    fontSize: "20px",
    lineHeight: "32px",
    color: color.dark500,
    animation: `${percentage} 7s linear infinite`,
  },
}));
