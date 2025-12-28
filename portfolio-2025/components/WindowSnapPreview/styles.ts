import { styled } from "@mui/material";

export const PreviewContainer = styled("div")<{ side: 'left' | 'right' }>(({ side }) => ({
  position: "fixed",
  top: 0,
  [side]: 0,
  width: "50%",
  height: "100vh",
  background: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(10px)",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "20px",
  padding: "40px",
  zIndex: 9998,
  overflowY: "auto",
  alignContent: "start",
}));

export const PreviewCard = styled("div")({
  background: "rgba(255, 255, 255, 0.05)",
  border: "2px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "12px",
  padding: "12px",
  cursor: "pointer",
  transition: "all 0.2s ease",
  backdropFilter: "blur(5px)",
  aspectRatio: "16/10",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  overflow: "hidden",

  "&:hover": {
    background: "rgba(255, 255, 255, 0.15)",
    borderColor: "rgba(255, 255, 255, 0.5)",
    transform: "scale(1.05)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  },
});

export const PreviewTitle = styled("h3")({
  color: "white",
  fontSize: "14px",
  margin: 0,
  textAlign: "center",
  fontWeight: 500,
});

export const PreviewThumbnail = styled("div")({
  flex: 1,
  background: "rgba(255, 255, 255, 0.05)",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  position: "relative",
  border: "1px solid rgba(255, 255, 255, 0.1)",
});

export const ThumbnailContent = styled("div")({
  width: "100%",
  height: "100%",
  transform: "scale(0.3)",
  transformOrigin: "top left",
  pointerEvents: "none",
});
