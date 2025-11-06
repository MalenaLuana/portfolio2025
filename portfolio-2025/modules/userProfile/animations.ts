import { color } from "@/utils/constants";
import { keyframes } from "@mui/material";

export const loading = keyframes({
    "0%": { width: "0" },
    "100%": { width: "100%" },
});

export const percentage = keyframes({
    "0%": { content: '"0%"' },
    "5%": { content: '"5%"' },
    "10%": { content: '"10%"' },
    "20%": { content: '"20%"' },
    "30%": { content: '"30%"' },
    "40%": { content: '"40%"' },
    "50%": { content: '"50%"' },
    "60%": { content: '"60%"' },
    "70%": { content: '"70%"' },
    "80%": { content: '"80%"' },
    "90%": { content: '"90%"' },
    "95%": { content: '"95%"' },
    "96%": { content: '"96%"' },
    "97%": { content: '"97%"' },
    "98%": { content: '"98%"' },
    "99%": { content: '"99%"' },
    "100%": { content: '"100%"' },
});

export const scanline = keyframes({
    "0%": { backgroundPosition: "0 0" },
    "100%": { backgroundPosition: "0 100%" },
});

export const glitch = keyframes({
    "0%, 100%": {
        transform: "translate(0)",
        textShadow: "0 0 4px rgba(129, 138, 211, 0.69), 0 0 8px rgba(129, 138, 211, 0.69)",
    },
    "10%": {
        transform: "translate(-2px, 1px)",
        textShadow: "-2px 0 4px #8da7b9, 2px 0 4px #d4a5f9",
    },
    "20%": {
        transform: "translate(2px, -1px)",
        textShadow: "2px 0 4px #8da7b9, -2px 0 4px #d4a5f9",
    },
    "30%, 70%": {
        transform: "translate(0)",
        textShadow: "0 0 4px rgba(129, 138, 211, 0.69), 0 0 8px rgba(129, 138, 211, 0.69)",
    },
    "80%": {
        transform: "translate(-1px, 0)",
        textShadow: "-1px 0 3px #8da7b9, 1px 0 3px #d4a5f9",
    },
});

export const subtleGlow = keyframes({
    "0%, 100%": {
        boxShadow: `0 0 4px ${color.primary500}80, inset 0 0 8px ${color.dark500}`,
    },
    "50%": {
        boxShadow: `0 0 8px ${color.primary500}cc, inset 0 0 8px ${color.dark500}`,
    },
});
