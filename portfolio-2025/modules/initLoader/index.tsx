import { useState, useEffect } from "react";
import { texts } from "@/dictionary";
import { languages } from "@/dictionary/types";
import {
    LoaderContainer,
    LoaderContent,
    LoadingText,
    NameDisplay,
    ProgressBarContainer,
    ProgressBarFill,
    SystemInfo,
} from "./styles";

export const InitLoader = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const { name, systemInfo, loadingSteps } = texts[languages.espanish].initLoader;

    useEffect(() => {
        const stepInterval = setInterval(() => {
            setCurrentStep((prev) => {
                if (prev < loadingSteps.length - 1) {
                    return prev + 1;
                }
                return prev;
            });
        }, 600);
        return () => clearInterval(stepInterval);
    }, [loadingSteps.length]);

    return (
        <LoaderContainer>
            <LoaderContent>

                <NameDisplay>{name}</NameDisplay>

                <ProgressBarContainer>
                    <ProgressBarFill />
                </ProgressBarContainer>

                <LoadingText>
                    {loadingSteps.slice(0, currentStep + 1).map((step, index) => (
                        <div key={index}>
                            <span className="prompt">&gt;</span>
                            {step}
                        </div>
                    ))}
                </LoadingText>

                <SystemInfo>{systemInfo}</SystemInfo>
            </LoaderContent>
        </LoaderContainer>
    );
}