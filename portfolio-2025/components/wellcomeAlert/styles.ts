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
  position: "absolute",
  maxWidth: "40rem",
  background: color.primary100,
  color: color.primary700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: `5px 5px 0px ${color.primary800}`,
  border: "solid 5px",
  borderColor: color.primary500,
  borderTopColor: color.primary50,
  borderLeftColor: color.primary50,
  top: "1rem",
  right: "50%",
  transform: "translateX(50%)",
  opacity: 0,
  animation: `${popIn} 300ms ease-out 400ms forwards`,
  willChange: "transform, opacity",
}));

export const Content = styled("div")(() => ({
  border: "solid 2px",
  borderColor: color.primary500,
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1.5rem",
}));

export const IconStyled = styled(Icon)(() => ({
  position: "absolute",
  cursor: "pointer",
  color: color.primary500,
  top: "0.2rem",
  right: "0.2rem",
}));
