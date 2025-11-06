import React, { useEffect, useState } from "react";
import { Content, Loader, LoaderBox, MainContainer } from "./styles";
import { texts } from "@/dictionary";
import { Dashboard } from "./Dashboard";

export const UserProfile = () => {
  const { loadingMessages } = texts.es.userProfile;

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showRealData, setShowRealData] = useState(false);


  useEffect(() => {
    if (currentMessageIndex < loadingMessages.length) {
      const timeout = setTimeout(() => {
        setCurrentMessageIndex((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [currentMessageIndex]);

  useEffect(() => {
    setTimeout(() => {
      setShowRealData(true);
    }, 7000);
  }, [showRealData,]);

  return (
    <MainContainer>
      {showRealData ? (
        <Dashboard />
      ) : (
        <LoaderBox>
          <Loader />
          <p>{loadingMessages[currentMessageIndex]}</p>
        </LoaderBox>
      )}
    </MainContainer>
  );
};
