import { color } from "@/utils/constants";
import { styled } from "@mui/material";
import { GlassCard } from "@/components/GlassCard";

export const DashboardContainer = styled("div")(() => ({
    display: "flex",
    width: "100%",
    height: "100%",
    background: `linear-gradient(135deg, ${color.dark500}, #1a1a2e)`,
    overflow: "hidden",
}));

export const MainContent = styled("div")(() => ({
    flex: 1,
    padding: "2rem",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
}));

export const Header = styled("div")(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
}));

export const Title = styled("h1")(() => ({
    fontSize: "2rem",
    fontWeight: 600,
    color: "#b794f6",
    margin: 0,
    textShadow: "0 0 8px #b794f680",
    fontFamily: "monospace",
}));

export const Subtitle = styled("p")(() => ({
    fontSize: "0.9rem",
    color: color.primary500,
    margin: "0.5rem 0 0 0",
    fontFamily: "monospace",
}));

export const CardsGrid = styled("div")(() => ({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
    width: "100%",
}));

export const StatsCard = styled(GlassCard)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
}));

export const CardTitle = styled("h3")(() => ({
    fontSize: "1rem",
    fontWeight: 600,
    color: color.primary300,
    margin: 0,
    fontFamily: "monospace",
    textTransform: "uppercase",
    letterSpacing: "1px",
}));

export const CardValue = styled("div")(() => ({
    fontSize: "2rem",
    fontWeight: 700,
    color: "#b794f6",
    textShadow: "0 0 8px #b794f680",
    fontFamily: "monospace",
}));

export const CardLabel = styled("span")(() => ({
    fontSize: "0.85rem",
    color: color.primary500,
    fontFamily: "monospace",
}));

export const InfoRow = styled("div")(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.75rem 0",
    borderBottom: `1px solid ${color.primary700}40`,

    "&:last-child": {
        borderBottom: "none",
    },
}));

export const InfoLabel = styled("span")(() => ({
    fontSize: "0.9rem",
    color: color.primary500,
    fontFamily: "monospace",
}));

export const InfoValue = styled("span")(() => ({
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "#b794f6",
    fontFamily: "monospace",
}));