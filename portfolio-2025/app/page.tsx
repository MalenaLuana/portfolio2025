"use client";
import { AppIcon, Icon, MainContainer } from "./styles";
import { windows } from "./types";
import { useWindows } from "@/context/windowsContext";
import { ReactElement } from "react";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "@/components/Draggable";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { WeatherWidget } from "@/modules/wheatherWidget";
import { useWallpaper } from "@/context/wallpaperContext";
import { SnakeGame } from "@/modules/snakeGame";
import snakeImg from "@/public/images/snakeGame.png";
import Image from "next/image";
import { color } from "@/utils/constants";

export default function Home() {
  const { openWindows, setWindowPosition, toggleWindow } = useWindows();
  const { wallpaperImage } = useWallpaper();

  const windowsComponents: Record<windows, ReactElement> = {
    [windows.user]: <>Ventana 1</>,
    [windows.snakeGame]: <SnakeGame />,
  };

  return (
    <MainContainer backgroundImage={wallpaperImage}>
      <DndContext
        modifiers={[restrictToWindowEdges]}
        onDragEnd={({ delta, active }) => {
          const windowKey = active.id as windows;
          const windowData = openWindows[windowKey];

          if (windowData) {
            const { x, y } = windowData.position;
            setWindowPosition(windowKey, x + delta.x, y + delta.y);
          }
        }}
      >
        {Object.keys(openWindows)
          .filter(
            (windowName): windowName is windows =>
              windowName in windowsComponents
          )
          .map((windowName) => {
            const windowKey = windowName as windows;
            const windowData = openWindows[windowKey];
            return (
              openWindows[windowKey]?.isOpen && (
                <Draggable
                  top={windowData?.position.y ?? 300}
                  left={windowData?.position.x}
                  key={windowKey}
                  windowKey={windowKey}
                >
                  {windowsComponents[windowKey]}
                </Draggable>
              )
            );
          })}
      </DndContext>
      <AppIcon onClick={() => toggleWindow(windows.snakeGame, true)}>
        <Icon>
          <Image
            style={{ objectFit: "contain" }}
            src={snakeImg}
            fill
            alt="snake_game"
          />
        </Icon>
        <p style={{ background: `${color.primary500}`, padding: "2px" }}>
          Snake Game
        </p>
      </AppIcon>
      <WeatherWidget />
    </MainContainer>
  );
}
