import { color } from "@/utils/constants";
import { styled } from "@mui/material";

export const TimerBox = styled("div")({
    position: 'absolute',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: color.primary700
});
