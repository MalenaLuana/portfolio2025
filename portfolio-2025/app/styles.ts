import { color } from "@/utils/constants";
import { styled } from "@mui/material";
import Image from "next/image";

export const MainContainer = styled("div")<{ backgroundImage: string }>(
  ({ backgroundImage }) => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: color.primary700,
    height: "100vh",
    position: "relative",
    overflow: "hidden",
    color: color.primary800,

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",

    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      zIndex: 999,

      /* Unifica los colores */
      background: `
        radial-gradient(circle at center, transparent 40%, rgba(0,0,0,.18)),
        rgba(61, 27, 52, 0.08)
      `,
    },

    "&::after": {
      content: '""',
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      zIndex: 1000,
      opacity: 0.28,

      backgroundImage: `
        radial-gradient(rgba(175, 174, 219, 0.23) 1px, transparent 1px),
        radial-gradient(rgba(156, 155, 167, 0.26) 1px, transparent 1px)
      `,

      backgroundSize: "5px 5px, 7px 7px",
      backgroundPosition: "0 0, 2px 3px",
    },
  }),
);

export const LayoutBox = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));
export const FloatingBox = styled("div")(() => ({
  position: "absolute",
  left: "40px",
  top: "30px",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
}));

export const SettingsButton = styled("div")(() => ({
  position: "relative",
}));

export const GearImage = styled(Image)<{ open: boolean }>(({ open }) => ({
  display: "block",
  transformOrigin: "center",
  transform: open ? "rotate(90deg)" : "rotate(0deg)",
  transition: "transform 250ms cubic-bezier(.2,.8,.2,1)",

  "&:hover": {
    cursor: "pointer",
    transform: open ? "rotate(100deg)" : "rotate(10deg)",
  },
}));

interface SettingBoxProps {
  open: boolean;
}

export const SettingBox = styled("div", {
  shouldForwardProp: (prop) => prop !== "open",
})<SettingBoxProps>(({ open }) => ({
  width: "20rem",
  height: "40vh",

  position: "absolute",
  left: "40%",
  top: "10px",

  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1rem",
  backgroundColor: color.primary800,
  border: `1px solid ${color.primary300}`,
  boxShadow: `4px 4px 0px ${color.primary800}`,

  transformOrigin: "top center",

  transform: open ? "translateY(0) scaleY(1)" : "translateY(-10px) scaleY(0.1)",

  opacity: open ? 1 : 0,
  pointerEvents: open ? "auto" : "none",
  transition:
    "transform 280ms cubic-bezier(.175,.885,.32,1.275), opacity 180ms ease",
}));
