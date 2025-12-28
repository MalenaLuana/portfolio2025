import { styled } from "@mui/material";
import { color } from "@/utils/constants";

export const HomeContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
}));

export const ProfilePhotoContainer = styled("div")(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
}));

export const ProfilePhotoBox = styled("div")(() => ({
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #b794f6, #7c3aed)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 0 20px #b794f680",
    border: "3px solid rgba(183, 148, 246, 0.3)",
    overflow: "hidden",
    position: "relative",
}));

export const ProfilePhoto = styled("img")(() => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
}));


export const ProfileName = styled("div")(() => ({
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#b794f6",
    textAlign: "center",
    fontFamily: "monospace",
    textShadow: "0 0 8px #b794f680",
}));

export const ProfileRole = styled("div")(() => ({
    fontSize: "0.9rem",
    color: color.primary500,
    textAlign: "center",
    fontFamily: "monospace",
    marginTop: "0.5rem",
}));