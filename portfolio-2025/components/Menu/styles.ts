import { color } from "@/utils/constants";
import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({}) => ({
  position: "absolute",
  bottom: "110%",
  left: "5px",
  minHeight: "20rem",
  minWidth: "8rem",
  backgroundColor: color.primary100,
  borderTop: "solid 3px",
  borderLeft: "solid 3px",
  boxShadow: `3px 3px 0px ${color.primary700}80`,
  borderColor: color.primary50,
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
