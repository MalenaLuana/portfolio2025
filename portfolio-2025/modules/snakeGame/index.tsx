import { useState, useEffect } from "react";
import { Box } from "@mui/material";

export const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 2, y: 2 }]); // Posición inicial
  const [food, setFood] = useState({ x: 5, y: 5 }); // Comida inicial
  const [direction, setDirection] = useState("RIGHT");
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (gameOver) return; // Si el juego terminó, no hace nada

    const interval = setInterval(() => {
      moveSnake();
    }, 200); // Cada 200ms mueve la serpiente

    return () => clearInterval(interval); // Limpia el intervalo al terminar
  }, [snake, gameOver]);

  const moveSnake = () => {
    let newSnake = [...snake];
    let head = { ...newSnake[0] };

    // Mueve la cabeza según la dirección
    if (direction === "RIGHT") head.x += 1;
    if (direction === "LEFT") head.x -= 1;
    if (direction === "UP") head.y -= 1;
    if (direction === "DOWN") head.y += 1;

    newSnake.unshift(head); // Agrega nueva cabeza

    // Si la serpiente se comió la comida
    if (head.x === food.x && head.y === food.y) {
      setFood({
        x: Math.floor(Math.random() * 10),
        y: Math.floor(Math.random() * 10),
      });
      setScore(score + 1);
    } else {
      newSnake.pop(); // Elimina la cola si no comió
    }

    // Verifica si colisionó con las paredes o consigo misma
    if (
      head.x < 0 ||
      head.x >= 10 ||
      head.y < 0 ||
      head.y >= 10 ||
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
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 30px)",
        gridTemplateRows: "repeat(10, 30px)",
        gap: "1px",
        width: "320px",
        height: "320px",
        backgroundColor: "black",
        position: "relative",
      }}
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
              backgroundColor: "green",
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
            backgroundColor: "red",
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
    </Box>
  );
};
