import { Icon } from "@/components/Icon";
import { color } from "@/utils/constants";
import { styled } from "@mui/material";

export const ModalBox = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  userSelect: "none",
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
  position: "relative",
});

export const DropArea = styled("div")({
  minWidth: "300px",
  minHeight: "200px",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",
  border: "dashed 2px",
  borderColor: color.primary500,
  backgroundColor: `${color.primary500}70`,
  padding: "50px",
  userSelect: "none",
});

export const ImagePreviewBox = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "solid 2px",
  background: color.primary300,
  borderColor: color.primary500,
  padding: "10px",
});

export const ImagePreview = styled("div")({
  position: "relative",
  width: "150px",
  height: "100px",
  border: "solid 2px",
  borderColor: color.blue500,
});

export const CloseIcon = styled(Icon)({
  position: "absolute",
  top: 0,
  right: 0,
  ":hover": {
    cursor: "pointer",
  },
});

export const OpenFilesText = styled("span")({
  marginTop: "0.5rem",
  color: color.blue700,
  cursor: "pointer",
  textDecoration: "underline",

  "&:hover": {
    color: color.blue500,
  },
});
