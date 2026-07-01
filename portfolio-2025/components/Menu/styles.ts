import { color } from "@/utils/constants";
import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({}) => ({
  position: "absolute",
  bottom: "120%",
  left: "20px",
  minHeight: "20rem",
  minWidth: "15rem",
  backgroundColor: color.primary100,
  border: "solid 6px",
  borderColor: color.primary500,
  borderTopColor: color.primary50,
  borderLeftColor: color.primary50,
  boxShadow: `6px 6px 0px ${color.primary800}`,
  display: "flex",
  flexDirection: "column",
}));

export const Header = styled(Box)(({}) => ({
  background: color.primary500,
  boxShadow: `3px 3px 0px ${color.primary700}50`,
  marginRight: "3px",
  color: color.primary100,
  padding: "10px",
}));

export const ButtonBox = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  padding: "10px",
}));

export const MenuItem = styled(Box)(({}) => ({
  padding: "10px",
  color: color.primary700,
  ":hover": {
    cursor: "pointer",
    backgroundColor: `${color.primary300}50`,
  },
}));
