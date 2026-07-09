import { Button } from "@/components/Button";
import { color } from "@/utils/constants";
import { Box, Slider } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)({
  display: "flex",
  height: "100%",
  gap: "1rem",
  userSelect: "none",
});

export const Sidebar = styled(Box)({
  width: "120px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  justifyContent: "space-between",
  background: color.primary700,
});

export const ColorPicker = styled("input")({
  width: "50px",
  height: "50px",
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
  padding: 3,
});

export const CanvasContainer = styled(Box)({
  flex: 1,
  backgroundColor: "#b3a4a4",
  backgroundImage: `
    linear-gradient(#e5e5e5 1px, transparent 1px),
    linear-gradient(90deg, #c2c2c2 1px, transparent 1px)
  `,

  backgroundSize: "8px 8px",

  border: "2px solid #81738b",

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
  gap: ".2rem",
  width: "84px",
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
  border: selected ? "4px solid #f1ebc8" : "3px solid #353030",
  boxShadow: `2px 2px 0px ${color.primary800}`,
  boxSizing: "border-box",
  "&:hover": {
    transform: "translateY(-1px)",
  },
}));

export const BrushSlider = styled(Slider)(({ theme }) => ({
  color: "#6ad4ff",
  width: "100%",
  padding: "14px 0",

  "& .MuiSlider-rail": {
    height: 8,
    borderRadius: 0,
    background: "#1f1f1f",
    border: "2px solid #000",
    boxSizing: "border-box",
    opacity: 1,
  },

  "& .MuiSlider-track": {
    height: 8,
    borderRadius: 0,
    border: "2px solid #000",
    background: "#66abbd",
  },

  "& .MuiSlider-thumb": {
    width: 18,
    height: 18,
    borderRadius: 0,
    border: "2px solid #000",
    background: "#f4f4f4",
    boxShadow: "2px 2px 0 #000",

    "&:hover": {
      boxShadow: "2px 2px 0 #000",
    },

    "&.Mui-focusVisible": {
      boxShadow: "2px 2px 0 #000",
    },

    "&::before": {
      display: "none",
    },
  },

  "& .MuiSlider-mark": {
    width: 4,
    height: 8,
    borderRadius: 0,
    background: "#000",
    marginTop: -1,
  },

  "& .MuiSlider-markActive": {
    background: "#fff",
  },

  "& .MuiSlider-valueLabel": {
    borderRadius: 0,
    background: "#202020",
    border: "2px solid #000",
    color: "#fff",
    fontFamily: '"Press Start 2P", monospace',
    fontSize: "0.55rem",
    padding: "4px 6px",
  },
}));
