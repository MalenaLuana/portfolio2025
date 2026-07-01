import { useEffect, useRef, useState } from "react";
import {
  ActionBox,
  ActionButton,
  Canvas,
  CanvasContainer,
  ColorButton,
  ColorPalette,
  ColorPicker,
  Container,
  Sidebar,
} from "./styles";
import { Toolbar } from "@mui/material";
import { PAINT_COLORS, saveCanvas } from "./utils";
import { color as nativesColors } from "../../utils/constants";
const PIXEL_SIZE = 8;

export const Paint = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(3);

  const fixCanvasSize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    const newWidth = rect.width;
    const newHeight = rect.height;

    canvas.width = newWidth;
    canvas.height = newHeight;

    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = rect.width;
    tempCanvas.height = rect.height;

    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;

    tempCtx.putImageData(imageData, 0, 0);

    ctx.drawImage(tempCanvas, 0, 0, newWidth, newHeight);
  };

  useEffect(() => {
    fixCanvasSize();
  }, []);

  const paintPixel = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const rect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x =
      Math.floor(((e.clientX - rect.left) * scaleX) / PIXEL_SIZE) * PIXEL_SIZE;
    const y =
      Math.floor(((e.clientY - rect.top) * scaleY) / PIXEL_SIZE) * PIXEL_SIZE;

    ctx.fillStyle = color;

    const half = Math.floor(brushSize / 2);

    for (let dx = -half; dx <= half; dx++) {
      for (let dy = -half; dy <= half; dy++) {
        ctx.fillRect(
          x + dx * PIXEL_SIZE,
          y + dy * PIXEL_SIZE,
          PIXEL_SIZE,
          PIXEL_SIZE,
        );
      }
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <Container>
      <Sidebar>
        <ColorPalette>
          {PAINT_COLORS.map((paletteColor) => (
            <ColorButton
              key={paletteColor}
              selected={color === paletteColor}
              onClick={() => setColor(paletteColor)}
              sx={{
                backgroundColor: paletteColor,
              }}
            />
          ))}
        </ColorPalette>

        <ColorPicker
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <ActionBox>
          <ActionButton onClick={clearCanvas} label="Limpiar" />

          <ActionButton
            label="  Guardar"
            onClick={() =>
              saveCanvas({
                canvas: canvasRef.current,
                filename: "dibujito.png",
                backgroundColor: nativesColors.primary50,
              })
            }
          />
          <ActionButton onClick={fixCanvasSize} label="Fijar canvas" />
        </ActionBox>
      </Sidebar>

      <CanvasContainer>
        <Canvas
          ref={canvasRef}
          width={800}
          height={500}
          onMouseDown={() => setIsDrawing(true)}
          onMouseUp={() => setIsDrawing(false)}
          onMouseLeave={() => setIsDrawing(false)}
          onMouseMove={paintPixel}
        />
      </CanvasContainer>
    </Container>
  );
};
