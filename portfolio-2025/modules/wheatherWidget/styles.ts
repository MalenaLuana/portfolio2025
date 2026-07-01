import { color } from "@/utils/constants";
import { styled } from "@mui/material";

export const MainContainer = styled("div")<{ imgSrc: string }>(
  ({ imgSrc }) => ({
    width: "220px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: `${color.primary800}50`,
    position: "absolute",
    left: "40px",
    top: "30px",
    padding: "20px",
    lineHeight: 0,
    color: color.primary50,
    zIndex: 0,
    boxShadow: `5px 5px 0px ${color.primary800}`,
  }),
);

export const Tempt = styled("p")({
  fontSize: 40,
  fontWeight: "bold",
  color: color.primary50,
});

export const County = styled("div")({
  display: "flex",
  gap: 0,
  alignItems: "center",
  flexDirection: "column",
  fontSize: 10,
});

export const Wind = styled("div")({
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  fontSize: 12,
});
