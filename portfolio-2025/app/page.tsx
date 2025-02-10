"use client";
import { Typography } from "@mui/material";
import { MainContainer } from "./styles";
import { windows } from "./types";
import { useWindows } from "@/context/windowsContext";
import { ReactElement, useState } from "react";
import { DndContext, DragEndEvent, DragMoveEvent } from "@dnd-kit/core";
import { Droppable } from "@/components/Droppable";
import { Draggable } from "@/components/Draggable";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";

export default function Home() {
  const { openWindows } = useWindows();
  const [windowPositions, setWindowPositions] = useState<
    Record<windows, { x: number; y: number }>
  >({
    [windows.user]: { x: 100, y: 100 }, // Posición inicial
  });
  const windowsComponents: Record<windows, ReactElement> = {
    [windows.user]: (
      <div className="window-content">
        <Typography key={"key"}>VENTANAAAAAAAAAA</Typography>
      </div>
    ),
  };
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;
    setWindowPositions((prev) => {
      const prevX = prev[active.id]?.x || 0;
      const prevY = prev[active.id]?.y || 0;
      return {
        ...prev,
        [active.id]: {
          x: delta.x ?? prevX,
          y: delta.y ?? prevY,
        },
      };
    });
  };

  return (
    <MainContainer>
      <DndContext
        modifiers={[restrictToWindowEdges]}
        onDragMove={(event) => handleDragEnd(event)}
      >
        {Object.keys(openWindows)
          .filter(
            (windowName): windowName is windows =>
              windowName in windowsComponents
          )
          .map((windowName) => {
            const windowKey = windowName as windows;
            return (
              openWindows[windowKey] && (
                <Draggable
                  key={windowKey}
                  windowKey={windowKey}
                  position={windowPositions[windowKey]}
                >
                  <div className="window">{windowsComponents[windowKey]}</div>
                </Draggable>
              )
            );
          })}
      </DndContext>
    </MainContainer>
  );
}
