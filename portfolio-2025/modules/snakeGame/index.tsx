import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { MainContainer } from "./styles";
import { color } from "@/utils/constants";
import { useWindows } from "@/context/windowsContext";

export const SnakeGame = () => {
  const containerRef = useRef<HTMLDivElement>(null); // Usamos el ref para obtener el tamaño del contenedor
  const [snake, setSnake] = useState([{ x: 2, y: 2 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState("RIGHT");
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameWidth, setGameWidth] = useState(10); // Tamaño dinámico del juego
  const [gameHeight, setGameHeight] = useState(10);

  const { openWindows } = useWindows();

  useEffect(() => {
    // Ajustar el tamaño del juego según el tamaño del contenedor
    const updateGameSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;
        setGameWidth(Math.floor(containerWidth / 30)); // Cada bloque tiene 30px
        setGameHeight(Math.floor(containerHeight / 30)); // Ajusta según el tamaño del contenedor
      }
    };

    updateGameSize();
    window.addEventListener("resize", updateGameSize);

    return () => window.removeEventListener("resize", updateGameSize);
  }, []);

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      moveSnake();
    }, 200);

    return () => clearInterval(interval);
  }, [snake, gameOver]);

  const moveSnake = () => {
    let newSnake = [...snake];
    let head = { ...newSnake[0] };

    if (direction === "RIGHT") head.x += 1;
    if (direction === "LEFT") head.x -= 1;
    if (direction === "UP") head.y -= 1;
    if (direction === "DOWN") head.y += 1;

    newSnake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      setFood({
        x: Math.floor(Math.random() * gameWidth),
        y: Math.floor(Math.random() * gameHeight),
      });
      setScore(score + 1);
    } else {
      newSnake.pop();
    }

    if (
      head.x < 0 ||
      head.x >= gameWidth ||
      head.y < 0 ||
      head.y >= gameHeight ||
      newSnake
        .slice(1)
        .some((segment) => segment.x === head.x && segment.y === head.y)
    ) {
      setGameOver(true);
    }

    setSnake(newSnake);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight" && direction !== "LEFT") setDirection("RIGHT");
    if (e.key === "ArrowLeft" && direction !== "RIGHT") setDirection("LEFT");
    if (e.key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
    if (e.key === "ArrowDown" && direction !== "UP") setDirection("DOWN");
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction]);

  return (
    <MainContainer
      ref={containerRef}
      isMaximized={Boolean(openWindows.snakeGame?.maximized)}
    >
      {!gameOver &&
        snake.map((segment, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              top: `${segment.y * 30}px`,
              left: `${segment.x * 30}px`,
              width: "30px",
              height: "30px",
              backgroundColor: color.blue500,
              borderRadius: "5px",
            }}
          />
        ))}
      {!gameOver && (
        <Box
          sx={{
            position: "absolute",
            top: `${food.y * 30}px`,
            left: `${food.x * 30}px`,
            width: "30px",
            height: "30px",
            borderRadius: "32px",
            backgroundColor: color.yellow500,
          }}
        />
      )}
      {gameOver && (
        <Box
          sx={{
            color: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Game Over - Score: {score}
        </Box>
      )}
    </MainContainer>
  );
};
