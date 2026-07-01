import { useState, useEffect, useRef, useCallback } from "react";
import {
  GameOverBox,
  MainContainer,
  PlayAgain,
  SnakeFood,
  SnakeSegment,
} from "./styles";
import { directions, keyboard } from "@/utils/constants";
import { useWindows } from "@/context/windowsContext";
import { playSound } from "@/utils/playSound";

export const SnakeGame = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [snake, setSnake] = useState([{ x: 2, y: 2 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState<directions>(directions.right);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameWidth, setGameWidth] = useState(10);
  const [gameHeight, setGameHeight] = useState(10);
  const { openWindows } = useWindows();

  const resetGame = () => {
    setSnake([{ x: 2, y: 2 }]);
    setFood({
      x: Math.floor(Math.random() * gameWidth),
      y: Math.floor(Math.random() * gameHeight),
    });
    setDirection(directions.right);
    setGameOver(false);
    setScore(0);
  };

  const updateGameSize = useCallback(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;
      const newWidth = Math.floor(containerWidth / 30);
      const newHeight = Math.floor(containerHeight / 30);

      setGameWidth(newWidth);
      setGameHeight(newHeight);

      setFood({
        x: Math.floor(Math.random() * newWidth),
        y: Math.floor(Math.random() * newHeight),
      });

      setSnake((prevSnake) =>
        prevSnake.map((segment) => ({
          x: Math.min(segment.x, newWidth - 1),
          y: Math.min(segment.y, newHeight - 1),
        })),
      );
    }
  }, []);

  useEffect(() => {
    updateGameSize();
    window.addEventListener("resize", updateGameSize);

    return () => window.removeEventListener("resize", updateGameSize);
  }, [openWindows.snakeGame?.maximized]);

  useEffect(() => {
    if (gameOver) return;

    const speed = Math.max(80, 200 - score * 5);

    const interval = setInterval(() => {
      moveSnake();
    }, speed);

    return () => clearInterval(interval);
  }, [snake, gameOver, score]);

  const moveSnake = () => {
    let newSnake = [...snake];
    let head = { ...newSnake[0] };

    if (direction === directions.right) head.x += 1;
    if (direction === directions.left) head.x -= 1;
    if (direction === directions.up) head.y -= 1;
    if (direction === directions.down) head.y += 1;

    newSnake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      playSound("snake-bite", 0.6, true);

      setFood({
        x: Math.floor(Math.random() * gameWidth),
        y: Math.floor(Math.random() * gameHeight),
      });

      setScore((prevScore) => prevScore + 1);
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
      playSound("game-over", 0.5, true);

      setGameOver(true);
    }

    setSnake(newSnake);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === keyboard.ArrowRight && direction !== directions.left)
      setDirection(directions.right);

    if (e.key === keyboard.ArrowLeft && direction !== directions.right)
      setDirection(directions.left);

    if (e.key === keyboard.ArrowUp && direction !== directions.down)
      setDirection(directions.up);

    if (e.key === keyboard.ArrowDown && direction !== directions.up)
      setDirection(directions.down);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction]);

  useEffect(() => {
    playSound("8bit", 0.4);
  }, []);

  return (
    <MainContainer
      ref={containerRef}
      gameWidth={gameWidth}
      gameHeight={gameHeight}
      isMaximized={Boolean(openWindows.snakeGame?.maximized)}
    >
      {!gameOver &&
        snake.map((segment, index) => (
          <SnakeSegment
            key={index}
            positionX={segment.x}
            positionY={segment.y}
          />
        ))}

      {!gameOver && <SnakeFood positionX={food.x} positionY={food.y} />}

      {gameOver && (
        <GameOverBox>
          <p>Game Over Score: {score}</p>
          <PlayAgain onClick={resetGame} label="Jugar de nuevo" />
        </GameOverBox>
      )}
    </MainContainer>
  );
};
