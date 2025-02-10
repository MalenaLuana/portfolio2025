import React, { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { IDraggable } from "./types";
import { Container } from "./styles";
import { CSS } from "@dnd-kit/utilities";

export const Draggable = ({
  children,
  windowKey,
  top,
  left,
  style,
}: IDraggable) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: windowKey,
    });

  return (
    <Container
      ref={setNodeRef}
      style={
        {
          ...style,
          position: "absolute",
          top,
          left,
          "--translate-x": `${transform?.x ?? 0}px`,
          "--translate-y": `${transform?.y ?? 0}px`,
          transform: isDragging ? CSS.Translate.toString(transform) : "none",
        } as React.CSSProperties
      }
    >
      <button {...listeners} {...attributes}>
        cosas
      </button>
      {children}
    </Container>
  );
};
