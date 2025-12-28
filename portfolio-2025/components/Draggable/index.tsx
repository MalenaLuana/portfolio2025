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
import { getWindowTop, getWindowLeft, getWindowWidth, getWindowHeight } from "./windowHelpers";
import { WindowSnapPreview } from "../WindowSnapPreview";

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
  const [renderMaximizedPreview, setRenderMaximizedPreview] = useState(false);
  const [wasDrawing, setWasDrawing] = useState(false);
  const [showSnapPreview, setShowSnapPreview] = useState(false);

  const {
    toggleWindow,
    setWindowPosition,
    openWindows,
    toggleMaximized,
    toggleSnapped,
    bringWindowToFront,
  } = useWindows();
  const [size, setSize] = useState(openWindows[windowKey]?.initialSize || { width: 500, height: 400 });

  const isMaximized = Boolean(openWindows[windowKey]?.maximized);
  const snappedState = openWindows[windowKey]?.snapped;
  const disabledResize = windowKey === windows.snakeGame;

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
    if (wasDrawing && !isDragging) {
      const finalY = (transform?.y ?? 0) + (top ?? 0);
      const finalX = (transform?.x ?? 0) + (left ?? 0);
      const windowWidth = node.current?.offsetWidth || size.width;
      const finalRight = screenSize.width - (finalX + windowWidth);

      if (finalY <= 10) {
        toggleMaximized(windowKey, true);
        toggleSnapped(windowKey, null);
        bringWindowToFront(windowKey);
      }
      else if (finalX <= 40) {
        toggleSnapped(windowKey, 'left');
        toggleMaximized(windowKey, false);
        setShowSnapPreview(true);
        bringWindowToFront(windowKey);
      }
      else if (finalRight <= 40) {
        toggleSnapped(windowKey, 'right');
        toggleMaximized(windowKey, false);
        setShowSnapPreview(true);
        bringWindowToFront(windowKey);
      }
    }
    setWasDrawing(isDragging);
  }, [isDragging, transform, top, left, screenSize, size]);

  useEffect(() => {
    if (isDragging && transform?.y !== undefined) {
      const offsetY = transform.y + (top ?? 0);
      if (offsetY <= 20) {
        setRenderMaximizedPreview(true);
      } else {
        setRenderMaximizedPreview(false);
      }
      if (isMaximized && transform.y > 20) {
        toggleMaximized(windowKey, false);
        const centerX = (screenSize.width - size.width) / 2;
        setWindowPosition(windowKey, centerX, offsetY);
      }
      if (snappedState && Math.abs(transform.x) > 20) {
        toggleSnapped(windowKey, null);
        const centerX = (screenSize.width - size.width) / 2;
        setWindowPosition(windowKey, centerX, top ?? 0);
      }
    } else {
      setRenderMaximizedPreview(false);
    }
  }, [transform?.y, transform?.x, isDragging, top, isMaximized, snappedState, screenSize, size]);

  const renderBorders = !isMaximized && !snappedState && !disabledResize;

  const styleParams = { isMaximized, snappedState, screenSize, top, left, size };

  const handleSelectWindow = (selectedWindow: windows) => {
    const oppositeSide = snappedState === 'left' ? 'right' : 'left';
    toggleSnapped(selectedWindow, oppositeSide);
    setWindowPosition(selectedWindow, oppositeSide === 'left' ? 0 : screenSize.width / 2, 0);
    setShowSnapPreview(false);
  };

  return (
    <>
      {showSnapPreview && snappedState && (
        <WindowSnapPreview
          currentWindow={windowKey}
          snapSide={snappedState}
          onSelectWindow={handleSelectWindow}
          onClose={() => setShowSnapPreview(false)}
        />
      )}
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
            top: getWindowTop(styleParams),
            left: getWindowLeft(styleParams),
            "--translate-x": `${transform?.x ?? 0}px`,
            "--translate-y": `${transform?.y ?? 0}px`,
            width: getWindowWidth(styleParams),
            height: getWindowHeight(styleParams),
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
