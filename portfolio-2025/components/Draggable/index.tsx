import React, { useEffect, useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { IDraggable, resizeDirection } from "./types";
import {
  ActionButton,
  BorderBottom,
  BorderRight,
  ButtonContainer,
  Container,
  Content,
  ResizePreview,
  TopHandler,
} from "./styles";
import { CSS } from "@dnd-kit/utilities";
import { useWindows } from "@/context/windowsContext";
import { iconName } from "../Icon/types";
import { handleMouseDownResize } from "./handlers";
import { windows } from "@/app/types";

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
  const [size, setSize] = useState({ width: 500, height: 400 });
  const [isResizing, setIsResizing] = useState(false);
  const [renderMaximizedPreview, setRenderMaximizedPreview] = useState(false);
  const {
    toggleWindow,
    setWindowPosition,
    openWindows,
    toggleMaximized,
    bringWindowToFront,
  } = useWindows();

  const isMaximized = Boolean(openWindows[windowKey]?.maximized);
  const disabledResize = windowKey === windows.snakeGame;

  const handleMouseMove = (e: MouseEvent) => {
    console.log("move");
    if (isResizing) {
      const newWidth =
        e.clientX - (node.current?.getBoundingClientRect().left ?? 0);
      const newHeight =
        e.clientY - (node.current?.getBoundingClientRect().top ?? 0);
      setSize(() => ({
        width: Math.max(newWidth, 300),
        height: Math.max(newHeight, 300),
      }));
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

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

  useEffect(() => {
    if (top && top <= 50) {
      toggleMaximized(windowKey, true);
    }
  }, [top]);

  const renderBorders = !isMaximized && !disabledResize;

  return (
    <>
      <Container
        index={openWindows[windowKey]?.zIndex ?? 3}
        onClickCapture={() => bringWindowToFront(windowKey)}
        onDragEnter={() => bringWindowToFront(windowKey)}
        maximized={isMaximized}
        ref={setNodeRef}
        style={
          {
            ...style,
            position: "absolute",
            top: isMaximized ? 0 : top,
            left: isMaximized ? 0 : left,
            "--translate-x": `${transform?.x ?? 0}px`,
            "--translate-y": `${transform?.y ?? 0}px`,
            width: isMaximized ? screenSize.width : size.width,
            height: isMaximized ? "90vh" : size.height,
            transform: isDragging ? CSS.Translate.toString(transform) : "none",
          } as React.CSSProperties
        }
      >
        <TopHandler
          {...listeners}
          {...attributes}
          onDoubleClick={() =>
            toggleMaximized(
              windowKey,
              !Boolean(openWindows[windowKey]?.maximized)
            )
          }
        >
          <p>{openWindows[windowKey]?.title}</p>
          <ButtonContainer>
            <ActionButton
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => {
                bringWindowToFront(windowKey);
                toggleMaximized(
                  windowKey,
                  !Boolean(openWindows[windowKey]?.maximized)
                );
              }}
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
        {renderBorders ? (
          <BorderRight
            onMouseDown={(e) =>
              handleMouseDownResize(
                e,
                resizeDirection.horizontal,
                size,
                setSize
              )
            }
          />
        ) : null}
        {renderBorders ? (
          <BorderBottom
            onMouseDown={(e) =>
              handleMouseDownResize(e, resizeDirection.vertical, size, setSize)
            }
          />
        ) : null}
      </Container>
      {renderMaximizedPreview && <ResizePreview />}
    </>
  );
};
