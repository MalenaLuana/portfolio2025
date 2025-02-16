import { color } from "@/utils/constants";
import { Drawer, styled } from "@mui/material";

export const SideBar = styled(Drawer)({
  "& .MuiDrawer-paper": {
    background: color.blue700,
    padding: "30px",
    color: "white",
    lineHeight: 0,
  },
});
export const Box = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});
export const ImagesBox = styled("div")({
  display: "grid",
  gridTemplateColumns: "auto auto",
  gap: "10px",
});

export const Image = styled("div")<{ src: string }>(({ src }) => ({
  width: "100%",
  height: "60px",
  background: "white",
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  "&:hover": {
    transform: "translate(-1px, -1px)",
    boxShadow: `8px 8px 4px ${color.primary800} `,
    cursor: "pointer",
  },
}));
