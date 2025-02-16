import React, { useEffect, useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { IDraggable } from "./types";
import {
  ActionButton,
  ButtonContainer,
  Container,
  Content,
  TopHandler,
} from "./styles";
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
  const { attributes, listeners, setNodeRef, transform, isDragging, node } =
    useDraggable({
      id: windowKey,
    });
  const [maximize, setMaximized] = useState(false);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  const { toggleWindow, setWindowPosition, openWindows } = useWindows();

  useEffect(() => {
    const updateSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight - window.innerHeight * 0.01,
      });
    };
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (screenSize.width) {
      const x = (screenSize.width - (node.current?.offsetWidth || 0)) / 2;
      const y = (screenSize.height - (node.current?.offsetHeight || 0)) / 2;
      setWindowPosition(windowKey, x, y);
    }
  }, [screenSize.width]);

  return (
    <Container
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
        <p>{openWindows[windowKey]?.title}</p>
        <ButtonContainer>
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
        </ButtonContainer>
      </TopHandler>
      <Content>{children}</Content>
    </Container>
  );
};
