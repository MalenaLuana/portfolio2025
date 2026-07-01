import { color } from "@/utils/constants";
import { styled } from "@mui/material";

export const Container = styled("nav")(() => ({
  backgroundColor: color.primary500,
  width: "100%",
  height: "70px",
  padding: "10px 40px",
  display: "flex",
  alignItems: "center",
  gap: "50px",
  zIndex: 9999,
  position: "absolute",
  bottom: "0",
  borderTop: "solid 4px",
  borderColor: color.primary100,
  justifyContent: "space-between",
}));

export const Content = styled("div")(() => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  position: "relative",
  justifyContent: "space-between",
}));

export const WindowsButtons = styled("div")(() => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  position: "relative",
  gap: "10px",
}));

export const ButtonContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  gap: "50px",
}));

export const CloseAllButton = styled("div")(() => ({
  width: "40px",
  height: "100%",
  borderLeft: "solid 2px",
  borderColor: color.primary500,
  userSelect: "none",
  marginLeft: "20px",
  ":hover": {
    cursor: "pointer",
    backgroundColor: `${color.primary500}30`,
  },
}));
