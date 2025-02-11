import React, { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { IDraggable } from "./types";
import { ActionButton, Container, Content, TopHandler } from "./styles";
import { CSS } from "@dnd-kit/utilities";
import { useWindows } from "@/context/windowsContext";
import { iconName } from "../Icon/types";

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
  const [maximize, setMaximized] = useState(false);
  const { toggleWindow } = useWindows();
  return (
    <Container
      left={left}
      top={top}
      maximized={maximize}
      ref={setNodeRef}
      style={
        {
          ...style,
          position: "absolute",
          top: maximize ? 0 : top,
          left: maximize ? 0 : left,
          "--translate-x": `${transform?.x ?? 0}px`,
          "--translate-y": `${transform?.y ?? 0}px`,
          transform: isDragging ? CSS.Translate.toString(transform) : "none",
        } as React.CSSProperties
      }
    >
      <TopHandler {...listeners} {...attributes}>
        <ActionButton
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => setMaximized(!maximize)}
          icon={iconName.maximize}
        />
        <ActionButton
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => toggleWindow(windowKey, false)}
          icon={iconName.close}
        />
      </TopHandler>
      <Content>{children}</Content>
    </Container>
  );
};
