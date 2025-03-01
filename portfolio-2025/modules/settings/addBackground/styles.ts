import { color } from "@/utils/constants";
import { ButtonBase, styled } from "@mui/material";

export const ModalBox = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

export const UploadBox = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: color.primary700,
  lineHeight: 0,
  padding: "20px",
  gap: "20px",
});

export const DropArea = styled("div")({
  minWidth: "300px",
  minHeight: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "dashed 2px",
  borderColor: color.primary500,
  backgroundColor: `${color.primary500}70`,
  padding: "50px",
});

export const Button = styled(ButtonBase)({
  padding: "10px 15px",
  background: color.primary700,
  color: color.primary100,
  textTransform: "none",
  fontFamily: "Lexend Exa",
  lineHeight: 0,
  minWidth: "200px",
  "&.Mui-disabled": {
    background: color.primary300,
  },
});

export const ImagePreview = styled("div")({
  position: "relative",
  width: "150px",
  height: "100px",
});
