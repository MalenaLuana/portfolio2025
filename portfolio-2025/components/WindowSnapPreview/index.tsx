import React, { useEffect } from "react";
import { windows } from "@/app/types";
import { useWindows } from "@/context/windowsContext";
import { PreviewContainer, PreviewCard, PreviewTitle, PreviewThumbnail } from "./styles";

interface WindowSnapPreviewProps {
    currentWindow: windows;
    snapSide: 'left' | 'right';
    onSelectWindow: (windowKey: windows) => void;
    onClose: () => void;
}

const getWindowIcon = (windowKey: string) => {
    switch (windowKey) {
        case windows.user:
            return "👤";
        case windows.snakeGame:
            return "🐍";
        case windows.fileExplorer:
            return "📁";
        default:
            return "📄";
    }
};

export const WindowSnapPreview = ({
    currentWindow,
    snapSide,
    onSelectWindow,
    onClose,
}: WindowSnapPreviewProps) => {
    const { openWindows } = useWindows();

    const otherWindows = Object.entries(openWindows).filter(
        ([key, data]) => key !== currentWindow && data?.isOpen
    );

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    if (otherWindows.length === 0) return null;

    const oppositeSide = snapSide === 'left' ? 'right' : 'left';

    return (
        <PreviewContainer
            side={oppositeSide}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            {otherWindows.map(([key, data]) => (
                <PreviewCard
                    key={key}
                    onClick={() => onSelectWindow(key as windows)}
                >
                    <PreviewTitle>{data?.title}</PreviewTitle>
                    <PreviewThumbnail>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '64px',
                        }}>
                            {getWindowIcon(key)}
                        </div>
                    </PreviewThumbnail>
                </PreviewCard>
            ))}
        </PreviewContainer>
    );
};