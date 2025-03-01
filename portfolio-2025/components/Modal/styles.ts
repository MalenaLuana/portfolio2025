import { color } from "@/utils/constants";
import { Modal, styled } from "@mui/material";

export const ModalMain = styled(Modal)<{}>(() => ({
  background: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ".MuiModal-backdrop": {
    backgroundColor: "transparent",
  },
}));

export const Box = styled("div")<{}>(() => ({
  background: color.primary100,
  border: "solid 4px",
  borderColor: color.primary500,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
}));
