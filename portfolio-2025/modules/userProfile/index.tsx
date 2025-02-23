import React, { useEffect, useState } from "react";
import { MainContainer } from "./styles";

const texts = [
  "Cargando datos personales...",
  "Nombre: Malena Luana Fresco",
  "Profesión: Front-end software developer, diseñadora, ilustradora y tatuadora. (Sí, todo eso).",
  "Habilidades: CSS sin Bootstrap, lógica sin Stack Overflow y paciencia sin café. (A veces).",
  "Logros: Hacer funcionar algo que 'te juro que no toqué'.",
  "Misión: Hacer código mejor que el promedio masculino. Spoiler: ya lo hago.",
  "Error 404: Miedo a los desafíos no encontrado.",
];

export const UserProfile = () => {
  const [displayedTexts, setDisplayedTexts] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState<string>("");
  const [textIndex, setTextIndex] = useState<number>(0);
  const typingSpeed = 50;
  const delayBetweenTexts = 1000;

  useEffect(() => {
    if (textIndex < texts.length) {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= texts[textIndex].length) {
          setCurrentText(texts[textIndex].slice(0, i));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setDisplayedTexts((prev) => [...prev, texts[textIndex]]);
            setCurrentText("");
            setTextIndex((prev) => prev + 1);
          }, delayBetweenTexts);
        }
      }, typingSpeed);
      return () => clearInterval(interval);
    }
  }, [textIndex]);

  return (
    <MainContainer>
      {displayedTexts.map((text, index) => (
        <div key={index}>{text}</div>
      ))}
      <div>{currentText}</div>
    </MainContainer>
  );
};
