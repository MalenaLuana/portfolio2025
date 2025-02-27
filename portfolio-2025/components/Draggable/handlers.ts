import { resizeDirection, windowSize } from "./types";

export const handleMouseDownResize = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  direction: resizeDirection,
  windowSize: windowSize,
  windowSizeSetter: React.Dispatch<
    React.SetStateAction<{
      width: number;
      height: number;
    }>
  >
) => {
  e.preventDefault();
  const startX = e.clientX;
  const startY = e.clientY;
  const startWidth = windowSize.width;
  const startHeight = windowSize.height;

  const handleMouseMove = (e: any) => {
    if (direction === resizeDirection.horizontal) {
      const newWidth = Math.max(startWidth + (e.clientX - startX), 500); // Mínimo 100px
      windowSizeSetter((prevSize) => ({ ...prevSize, width: newWidth }));
    } else if (direction === resizeDirection.vertical) {
      const newHeight = Math.max(startHeight + (e.clientY - startY), 400); // Mínimo 100px
      windowSizeSetter((prevSize) => ({ ...prevSize, height: newHeight }));
    }
  };

  const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
};
