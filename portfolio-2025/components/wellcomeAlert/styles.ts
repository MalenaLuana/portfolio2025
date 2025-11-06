import { styled } from "@mui/material";
import { keyframes } from "@mui/system";
import { Icon } from "../Icon";
import { color } from "@/utils/constants";

const popIn = keyframes`
  0% { opacity: 0; transform: translateX(50%) scale(0.9); }
  60% { opacity: 1; transform: translateX(50%) scale(1.02); }
  100% { opacity: 1; transform: translateX(50%) scale(1); }
`;

export const WellcomeAlertStyled = styled("div")(({ theme }) => ({
    position: 'absolute',
    maxWidth: '40rem',
    background: 'white',
    color: color.blue500,
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    border: 'solid 1px',
    borderColor: color.blue500,
    top: '1rem',
    right: '50%',
    transform: 'translateX(50%)',
    opacity: 0,
    animation: `${popIn} 300ms ease-out 400ms forwards`,
    willChange: 'transform, opacity',
})
);

export const Content = styled("div")(() => ({
    position: 'relative',
    width: '100%',
    color: color.blue500,
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
})
);

export const IconStyled = styled(Icon)(() => ({
    position: 'absolute',
    cursor: 'pointer',
    color: color.blue500,
    top: '0.2rem',
    right: '0.2rem',
}))
