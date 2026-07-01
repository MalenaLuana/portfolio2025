import { color } from "@/utils/constants";
import { styled, keyframes } from "@mui/material";
import { GlassCard } from "@/components/GlassCard";

const slideUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const DashboardContainer = styled("div")(() => ({
  display: "flex",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  userSelect: "none",
  background: color.primary100,
}));

export const MainContent = styled("div")(() => ({
  flex: 1,
  padding: "2rema",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  overflowY: "auto",
}));

export const Header = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1rem",
}));

export const Title = styled("h1")(() => ({
  margin: 0,
  fontSize: "18px",
  color: color.primary300,
  textTransform: "uppercase",
  textShadow: "2px 2px 0 #000",
}));

export const Subtitle = styled("p")(() => ({
  marginTop: "8px",
  fontSize: "10px",
  color: color.primary500,
}));

export const CardsGrid = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "1.5rem",
  width: "100%",
}));

export const StatsCard = styled("div")<{ delay?: number }>(({ delay = 0 }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "16px",
  background: color.dark500,
  border: `2px solid ${color.primary700}`,
  boxShadow: `
    inset 2px 2px 0 ${color.primary300},
    inset -2px -2px 0 ${color.dark500}
  `,
  animation: `${slideUp} .25s steps(5) ${delay * 0.05}s both`,
}));

export const CardTitle = styled("h3")(() => ({
  margin: 0,
  fontSize: "10px",
  textTransform: "uppercase",
  color: color.primary500,
}));

export const CardValue = styled("div")(() => ({
  fontSize: "20px",
  color: color.primary300,
}));

export const CardLabel = styled("span")(() => ({
  fontSize: "0.85rem",
  color: color.primary500,
}));

export const InfoRow = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "8px 0",
  borderBottom: `2px solid ${color.primary700}`,
}));

export const InfoLabel = styled("span")(() => ({
  fontSize: "0.9rem",
  color: color.primary500,
}));

export const InfoValue = styled("span")(() => ({
  fontSize: "0.9rem",
  fontWeight: 600,
  color: "#b794f6",
}));
