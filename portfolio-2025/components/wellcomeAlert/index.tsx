import { Typography } from "@mui/material";
import { Content, IconStyled, WellcomeAlertStyled } from "./styles";
import { IWellcomeAlertProps } from "./types";
import { texts } from "@/dictionary";

export const WellcomeAlert = ({ onClose }: IWellcomeAlertProps) => {
  const { wellcomeAlert } = texts.es;
  return (
    <WellcomeAlertStyled>
      <Content>
        <Typography variant="h6" fontWeight={"bold"}>
          {wellcomeAlert.title}
        </Typography>
        <Typography variant="body1">{wellcomeAlert.description}</Typography>
        <IconStyled name="close" onClick={onClose} />
      </Content>
    </WellcomeAlertStyled>
  );
};
