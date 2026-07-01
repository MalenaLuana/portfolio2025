import { color } from "@/utils/constants";
import { styled } from "@mui/material";
export const SidebarContainer = styled("div")(() => ({
  height: "100%",
  width: "100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
  padding: "12px 0 0 12px",
  background: color.primary700,
}));

export const SidebarLogo = styled("div")(() => ({
  width: "70px",
  height: "70px",
  marginBottom: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: color.primary300,
}));

export const SidebarItem = styled("div")<{ active?: boolean }>(
  ({ active }) => ({
    width: "100%",
    height: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    cursor: "pointer",
    userSelect: "none",
    color: active ? color.primary700 : color.primary700,
    background: active ? color.primary100 : color.primary500,
    transition: "background-color .1s",
    border: "solid",
    borderRight: "none",
    borderColor: color.white500,
    "&:hover": {
      background: active ? color.primary100 : `${color.primary800}50`,
    },

    "&::before": active
      ? {
          content: '""',
          position: "absolute",
          left: "-2px",
          top: 0,
          bottom: 0,
          width: "4px",
          background: color.primary100,
        }
      : {},
  }),
);
