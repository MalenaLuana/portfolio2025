import { color } from "@/utils/constants";
import { styled } from "@mui/material";

export const Container = styled("nav")(() => ({
  backgroundColor: color.primary100,
  width: "100%",
  height: "10vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
  zIndex: 9999,
  position: "relative",
  boxShadow: `0px -4px 30px ${color.primary800}`,
}));

export const Content = styled("div")(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  position: "relative",
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
  width: '40px',
  height: '100%',
  borderLeft: 'solid 2px',
  borderColor: color.primary500,
  userSelect: 'none',
  marginLeft: '20px',
  ":hover": {
    cursor: "pointer",
    backgroundColor: `${color.primary500}30`,
  }
}));
