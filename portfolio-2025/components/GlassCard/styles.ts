import { color } from "@/utils/constants";
import { styled } from "@mui/material";

export const GlassCardStyled = styled("div")(() => ({
  background: `linear-gradient(135deg, ${color.primary700}40, ${color.dark500}80)`,
  backdropFilter: "blur(10px)",
  border: `1px solid ${color.primary500}60`,
  borderRadius: "12px",
  padding: "1.5rem",
  boxShadow: `0 4px 16px ${color.dark500}80, inset 0 0 20px ${color.primary700}20`,
  position: "relative",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: `linear-gradient(90deg, transparent, ${color.primary500}80, transparent)`,
  },
}));
