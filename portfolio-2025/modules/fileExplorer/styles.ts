import { color } from "@/utils/constants";
import { Input, styled, TextField } from "@mui/material";

export const MainContainer = styled("div")(() => ({
  background: color.primary100,
  minHeight: "300px",
  display: "flex",
  gap: "10px",
  fontSize: 16,
  flexDirection: "column",
  height: "100%",
}));

export const Header = styled("div")(() => ({
  display: "flex",
  minHeight: "20px",
  gap: "10px",
  width: "100%",
  borderBottom: "solid 4px",
  borderColor: color.primary500,
  background: color.primary300,
  padding: "10px",
  justifyContent: "space-between",
}));

export const ActionButtons = styled("div")(() => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
}));

export const Content = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "100%",
  height: "100%",
  overflowY: "scroll",
  padding: "10px",
}));

export const FileBox = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "30px",
}));

export const SearchBar = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    background: color.primary100,
    borderRadius: "6px",
    padding: "10px",
    borderColor: color.primary700,
    "&:hover fieldset": {
      borderColor: color.primary500,
      borderWidth: "2px",
    },
    "&.Mui-focused fieldset": {
      borderColor: color.primary700,
      borderWidth: "2px",
    },

    input: {
      padding: 0,
    },
  },
}));
