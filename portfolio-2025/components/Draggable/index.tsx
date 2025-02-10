import React, { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { IDraggable } from "./types";
import { Container } from "./styles";
import { CSS } from "@dnd-kit/utilities";

export const Draggable = ({ children, windowKey, position }: IDraggable) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: windowKey,
  });
  const style = {
    transform: CSS.Translate.toString({
      x: position.x,
      y: position.y,
      scaleX: transform?.scaleX || 0,
      scaleY: transform?.scaleY || 0,
    }),
  };

  return (
    <Container ref={setNodeRef} style={style}>
      <button {...listeners} {...attributes}>
        {children}
      </button>
      <div>cosas</div>
    </Container>
  );
};
