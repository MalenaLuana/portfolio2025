import React, { useEffect, useState } from "react";
import { Content, Loader, LoaderBox, MainContainer } from "./styles";
import { texts } from "@/dictionary";

export const UserProfile = () => {
  const { loadingMessages, descriptionMessages } = texts.es.userProfile;

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showRealData, setShowRealData] = useState(false);
  const [displayedTexts, setDisplayedTexts] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState<string>("");
  const [textIndex, setTextIndex] = useState<number>(0);

  const typingSpeed = 40;
  const delayBetweenTexts = 200;

  useEffect(() => {
    if (currentMessageIndex < loadingMessages.length) {
      const timeout = setTimeout(() => {
        setCurrentMessageIndex((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [currentMessageIndex]);

  useEffect(() => {
    if (showRealData && textIndex < descriptionMessages.length) {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= descriptionMessages[textIndex].length) {
          setCurrentText(descriptionMessages[textIndex].slice(0, i));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setDisplayedTexts((prev) => [
              ...prev,
              descriptionMessages[textIndex],
            ]);
            setCurrentText("");
            setTextIndex((prev) => prev + 1);
          }, delayBetweenTexts);
        }
      }, typingSpeed);
      return () => clearInterval(interval);
    }
    setTimeout(() => {
      // toggleMaximized(windows.user, true);
      setShowRealData(true);
    }, 7000);
  }, [showRealData, textIndex]);

  return (
    <MainContainer>
      {showRealData ? (
        <Content>
          {displayedTexts.map((text, index) => (
            <div key={index}>{text}</div>
          ))}
          <div>{currentText}</div>
        </Content>
      ) : (
        <LoaderBox>
          <Loader />
          <p>{loadingMessages[currentMessageIndex]}</p>
        </LoaderBox>
      )}
    </MainContainer>
  );
};
