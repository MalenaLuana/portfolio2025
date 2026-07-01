import { color } from "@/utils/constants";

interface SaveCanvasParams {
  canvas: HTMLCanvasElement | null;
  filename?: string;
  backgroundColor?: string;
}

export const saveCanvas = ({
  canvas,
  filename = "image.png",
  backgroundColor = color.primary50,
}: SaveCanvasParams) => {
  const ctx = canvas?.getContext("2d");
  if (!canvas) return;
  if (!ctx) return;

  // Guardamos el contenido actual
  const imageData = ctx.getImageData(0, 0, canvas?.width, canvas?.height);

  // Pintamos el fondo por detrás
  ctx.globalCompositeOperation = "destination-over";
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas?.width, canvas?.height);

  // Exportamos
  const link = document.createElement("a");

  link.download = filename;
  link.href = canvas?.toDataURL("image/png");

  link.click();

  // Restauramos el canvas
  ctx.clearRect(0, 0, canvas?.width, canvas?.height);
  ctx.putImageData(imageData, 0, 0);
  ctx.globalCompositeOperation = "source-over";
};

export const PAINT_COLORS = [
  // Oscuros y neutros
  "#2f2636",
  "#484357",
  "#635d79",
  "#8b8297",
  "#a99cb7",

  "#3f5d1f",
  "#6f8a46",
  "#9bbd69",
  "#bdd48a",

  // Cremas
  "#d7cfb3",
  "#f1ebc8",

  // Arcoíris clásico
  "#ff0000", // rojo
  "#ff7f00", // naranja
  "#ffff00", // amarillo
  "#00ff00", // verde
  "#00ffff", // cian
  "#0000ff", // azul
  "#8b00ff", // violeta

  // Rosas
  "#ff69b4",
  "#c992b5",

  // Marrones
  "#73534a",
  "#a67c52",

  // Blanco y negro
  "#ffffff",
  "#000000",
];
