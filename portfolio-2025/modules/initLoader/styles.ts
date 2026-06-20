import { styled, keyframes } from "@mui/material";
import { color } from "@/utils/constants";

const blink = keyframes`
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
`;

const progressBar = keyframes`
    0% { width: 0%; }
    100% { width: 100%; }
`;

const glitch = keyframes`
    0%, 100% { 
        text-shadow: 
            0 0 2px #b794f6,
            2px 2px 0 #00ffff,
            -2px -2px 0 #ff00ff;
    }
    25% { 
        text-shadow: 
            0 0 2px #b794f6,
            -2px 2px 0 #00ffff,
            2px -2px 0 #ff00ff;
    }
    50% { 
        text-shadow: 
            0 0 2px #b794f6,
            2px -2px 0 #00ffff,
            -2px 2px 0 #ff00ff;
    }
    75% { 
        text-shadow: 
            0 0 2px #b794f6,
            -2px -2px 0 #00ffff,
            2px 2px 0 #ff00ff;
    }
`;

const scanline = keyframes`
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
`;

export const LoaderContainer = styled("div")(() => ({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: `linear-gradient(135deg, ${color.dark500} 0%, #0a0a0f 100%)`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    overflow: "hidden",

    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "2px",
        background: "rgba(183, 148, 246, 0.3)",
        animation: `${scanline} 8s linear infinite`,
        zIndex: 1,
    },
}));

export const LoaderContent = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    maxWidth: "600px",
    width: "100%",
    position: "relative",
    zIndex: 2,
}));

export const LoadingText = styled("div")(() => ({
    color: "#00ff00",
    fontFamily: "monospace",
    fontSize: "16px",
    lineHeight: "1.8",
    width: "100%",
    textShadow: "0 0 10px #00ff0080",
    position: 'absolute',
    top: '100%',
    left: '10%',
    "& .prompt": {
        color: "#b794f6",
        marginRight: "8px",
        textShadow: "0 0 8px #b794f680",
    },
    "& .cursor": {
        display: "inline-block",
        width: "10px",
        height: "16px",
        background: "#00ff00",
        animation: `${blink} 1s infinite`,
        marginLeft: "2px",
        boxShadow: "0 0 10px #00ff00",
    },
}));

export const NameDisplay = styled("div")(() => ({
    fontSize: "48px",
    fontFamily: "monospace",
    fontWeight: "bold",
    textAlign: "center",
    color: "#b794f6",
    textTransform: "uppercase",
    letterSpacing: "6px",
    animation: `${glitch} 2s infinite`,
    margin: "20px 0",
    textShadow: `
        0 0 20px #b794f6,
        0 0 40px #b794f680,
        0 0 60px #b794f640
    `,
}));

export const ProgressBarContainer = styled("div")(() => ({
    width: "100%",
    height: "20px",
    background: "#1a1a1a",
    border: "1px solid #333",
    padding: "2px",
    position: "relative",
}));

export const ProgressBarFill = styled("div")(() => ({
    height: "100%",
    background: `linear-gradient(90deg, 
        #00ff00 0%, 
        #00ff00 25%, 
        #b794f6 50%, 
        #00ffff 75%, 
        #00ff00 100%
    )`,
    animation: `${progressBar} 3s ease-in-out`,
    backgroundSize: "200% 100%",
    position: "relative",

    "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        animation: "shimmer 1s infinite",
    },
}));

export const SystemInfo = styled("div")(() => ({
    position: "absolute",
    bottom: "10px",
    right: "10px",
    color: "#00ff00",
    fontFamily: "monospace",
    fontSize: "10px",
    opacity: 0.7,
}));