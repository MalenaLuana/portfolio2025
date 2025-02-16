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
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  const { toggleWindow, setWindowPosition, openWindows, toggleMaximized } =
    useWindows();

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
      maximized={Boolean(openWindows[windowKey]?.maximized)}
      ref={setNodeRef}
      style={
        {
          ...style,
          position: "absolute",
          top: openWindows[windowKey]?.maximized ? 0 : top,
          left: openWindows[windowKey]?.maximized ? 0 : left,
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
            onClick={() =>
              toggleMaximized(
                windowKey,
                !Boolean(openWindows[windowKey]?.maximized)
              )
            }
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
