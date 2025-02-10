"use client";
import { Typography } from "@mui/material";
import { MainContainer } from "./styles";
import { windows } from "./types";
import { useWindows } from "@/context/windowsContext";
import { ReactElement, useState } from "react";
import {
  DndContext,
  useDraggable,
  useSensor,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  PointerActivationConstraint,
  Modifiers,
  useSensors,
  type DragPendingEvent,
  useDndMonitor,
} from "@dnd-kit/core";
import { Draggable } from "@/components/Draggable";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { Coordinates } from "@dnd-kit/core/dist/types";

export default function Home() {
  const { openWindows } = useWindows();
  const [{ x, y }, setCoordinates] = useState<Coordinates>({ x: 300, y: 29 });

  const windowsComponents: Record<windows, ReactElement> = {
    [windows.user]: (
      <div className="window-content">
        <Typography key={"key"}>VENTANAAAAAAAAAA</Typography>
      </div>
    ),
  };

  return (
    <MainContainer>
      <DndContext
        modifiers={[restrictToWindowEdges]}
        onDragEnd={({ delta }) => {
          setCoordinates(({ x, y }) => {
            return {
              x: x + delta.x,
              y: y + delta.y,
            };
          });
        }}
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
                  top={y}
                  left={x}
                  axis={"horizontal"}
                  key={windowKey}
                  windowKey={windowKey}
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
