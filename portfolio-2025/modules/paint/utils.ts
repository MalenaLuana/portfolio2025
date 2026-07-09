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
  "#d6d6d6",

  "#3f5d1f",
  "#6f8a46",
  "#9bbd69",
  "#bdd48a",

  // Cremas
  "#c5b86e",
  "#f1ebc8",

  // Arcoíris clásico
  "#ca4141", // rojo
  "#ca7f35", // naranja
  "#ebeb84", // amarillo
  "#aadddd", // cian
  "#4949ad", // azul
  "#9964c4", // violeta

  // Rosas
  "#c77ba1",
  "#dfb2ce",

  // Marrones
  "#5f453d",
  "#a8927b",
];
