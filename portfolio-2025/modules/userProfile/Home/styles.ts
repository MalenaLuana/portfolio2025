import { styled, Typography } from "@mui/material";
import { color } from "@/utils/constants";

export const HomeContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

export const MainData = styled("div")(() => ({
  display: "flex",
  width: "100%",
  gap: "16px",
}));

export const Column = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "20px",
}));

export const Row = styled("div")(() => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
}));

export const ProfilePhotoContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "16px",
  border: "solid 10px",
  borderColor: color.white500,
  boxShadow: `6px 6px 0px ${color.primary700}70`,
  position: "relative",
}));

export const HeartIcon = styled("img")(() => ({
  width: "3rem",
  height: "3rem",
  objectFit: "cover",
  imageRendering: "pixelated",
  position: "absolute",
  top: "-25px",
  left: "-25px",
}));

export const ProfilePhotoBox = styled("div")(() => ({
  width: "12rem",
  height: "12rem",
  background: color.dark500,
  overflow: "hidden",
  imageRendering: "pixelated",
}));

export const ProfilePhoto = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  imageRendering: "pixelated",
}));

export const ProfileName = styled(Typography)(() => ({
  color: color.primary800,
  textTransform: "uppercase",
}));

export const ProfileRole = styled(Typography)(() => ({
  color: color.primary800,
  lineHeight: 1.8,
}));

export const ContentBox = styled("div")(() => ({
  width: "100%",
  padding: "1rem",
  color: color.primary800,
  background: `${color.primary500}50`,
  border: "solid 1px",
  borderColor: color.primary500,
}));
