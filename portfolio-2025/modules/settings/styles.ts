import { color } from "@/utils/constants";
import { Drawer, styled } from "@mui/material";

export const SideBar = styled(Drawer)({
  "& .MuiDrawer-paper": {
    background: `${color.blue700}90`,
    padding: "30px",
    color: "white",
    lineHeight: 0,
    fontWeight: "lighter",
    fontSize: 15,
    minWidth: "300px",
  },
});
export const Box = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});
export const ImagesBox = styled("div")({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "auto auto",
  gap: "5px",
});

export const Image = styled("div")<{ src: string }>(({ src }) => ({
  width: "100%",
  height: "60px",
  background: "white",
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  transition: "all ease 0.2s",
  "&:hover": {
    transform: "translate(-1px, -1px)",
    boxShadow: `2px 2px 4px ${color.primary800} `,
    cursor: "pointer",
  },
}));

export const NewImage = styled("div")<{ src?: string }>(({ src }) => ({
  width: "100%",
  height: "60px",
  background: `${color.primary300}80`,
  backgroundImage: src ? `url(${src})` : "",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: color.primary100,
  fontSize: 20,
  "&:hover": {
    background: `${color.primary100}80`,
    cursor: "pointer",
  },
}));

export const Divider = styled("hr")({
  width: "100%",
  bordercolor: `${color.primary300}80`,
});
