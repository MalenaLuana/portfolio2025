import { color } from "@/utils/constants";
import { styled } from "@mui/material";

export const Container = styled("div")<{ active: boolean }>(({ active }) => ({
  display: "flex",
  flexDirection: "column",
  fontSize: 10,
  transition: "transform 0.2s ease-in-out",
  position: "absolute",
  right: "50px",
  top: "40px",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
  border: "solid 2px",
  borderColor: active ? color.primary300 : "transparent",
  zIndex: 1,
  background: active ? `${color.primary100}80` : "transparent",
  ":hover": { cursor: "pointer", background: `${color.primary300}80` },
}));

export const Icon = styled("div")(() => ({
  height: "80px",
  width: "80px",
  position: "relative",
}));
