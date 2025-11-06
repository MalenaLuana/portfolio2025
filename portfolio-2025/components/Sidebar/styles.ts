import { color } from "@/utils/constants";
import { styled } from "@mui/material";

export const SidebarContainer = styled("div")(() => ({
  width: "80px",
  height: "100%",
  background: `linear-gradient(180deg, ${color.dark500}ee, ${color.dark500})`,
  borderRight: `1px solid ${color.primary700}80`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  padding: "1.5rem 0",
  boxShadow: `4px 0 16px ${color.dark500}80`,
}));

export const SidebarLogo = styled("div")(() => ({
  width: "48px",
  height: "48px",
  marginBottom: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#b794f6",
  fontSize: "24px",
  fontWeight: "bold",
}));

export const SidebarItem = styled("div")<{ active?: boolean }>(({ active }) => ({
  width: "48px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "12px",
  cursor: "pointer",
  position: "relative",
  color: active ? "#b794f6" : color.primary500,
  background: active ? `${color.primary700}40` : "transparent",
  border: active ? `1px solid #b794f680` : `1px solid transparent`,
  transition: "all 0.2s ease",
  
  "&:hover": {
    background: `${color.primary700}60`,
    color: "#b794f6",
    transform: "translateX(4px)",
    boxShadow: `0 0 12px #b794f640`,
  },

  "&::before": active ? {
    content: '""',
    position: "absolute",
    left: "-1px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "3px",
    height: "60%",
    background: "#b794f6",
    borderRadius: "0 2px 2px 0",
  } : {},
}));
