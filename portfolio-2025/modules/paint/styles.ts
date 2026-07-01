import { Button } from "@/components/Button";
import { color } from "@/utils/constants";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)({
  display: "flex",
  height: "100%",
  gap: "1rem",
});

export const Sidebar = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0.5rem",
  gap: ".5rem",
  justifyContent: "space-between",
});

export const ColorPicker = styled("input")({
  width: "50px",
  height: "30px",
  cursor: "pointer",
  padding: 0,
  border: "2px solid black",
});

export const ActionBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});
export const ActionButton = styled(Button)({
  width: "100%",
});

export const CanvasContainer = styled(Box)({
  flex: 1,
  backgroundColor: "#fff",
  backgroundImage: `
    linear-gradient(#e5e5e5 1px, transparent 1px),
    linear-gradient(90deg, #e5e5e5 1px, transparent 1px)
  `,

  backgroundSize: "8px 8px",

  border: "2px solid #2f2636",

  position: "relative",

  overflow: "hidden",
});

export const Canvas = styled("canvas")({
  background: color.primary50,
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  imageRendering: "pixelated",
  cursor: "crosshair",
});
export const ColorPalette = styled(Box)({
  display: "grid",

  gridTemplateColumns: "repeat(3, 1fr)",

  gap: ".25rem",

  width: "100%",
});

interface ColorButtonProps {
  selected: boolean;
}

interface ColorButtonProps {
  selected: boolean;
}

export const ColorButton = styled(Box, {
  shouldForwardProp: (prop) => prop !== "selected",
})<ColorButtonProps>(({ selected }) => ({
  width: "1.5rem",
  height: "1.5rem",

  cursor: "pointer",

  border: selected ? "2px solid #f1ebc8" : "2px solid #484357",

  boxSizing: "border-box",

  "&:hover": {
    transform: "translateY(-1px)",
  },
}));
