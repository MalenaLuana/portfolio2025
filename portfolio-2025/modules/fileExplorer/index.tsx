import { texts } from "@/dictionary";
import {
  ActionButtons,
  Content,
  FileBox,
  Header,
  MainContainer,
  SearchBar,
} from "./styles";
import folderImg from "@/public/images/folder_pink.png";
import virusImg from "@/public/images/virus.png";
import { AppIcon } from "@/components/AppIcon";
import { Icon } from "@/components/Icon";
import { iconName } from "@/components/Icon/types";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { color } from "@/utils/constants";

export const FileExplorer = () => {
  const { title, title2 } = texts.es.fileExplorer;
  const [step, setStep] = useState(0);
  const content = [
    { image: folderImg, label: "Currículum", goTo: "" },
    { image: folderImg, label: "Nudes", goTo: "" },
  ];
  return (
    <MainContainer>
      <Header>
        <ActionButtons>
          <IconButton onClick={() => {}}>
            <Icon
              color={!step ? color.primary500 : color.primary700}
              name={iconName.arrowLeft}
              width="40px"
              height="40px"
            />
          </IconButton>
        </ActionButtons>
        <SearchBar endAdornment={<Icon name={iconName.search} color="red" />} />
      </Header>
      <Content>
        <p>- {title}</p>
        <FileBox>
          {content.map((item) => (
            <AppIcon
              key={item.label}
              image={item.image.src}
              label={item.label}
              onClick={() => {}}
            />
          ))}
        </FileBox>
        <p>- {title2}</p>
        <AppIcon image={virusImg.src} label={"virus.exe"} onClick={() => {}} />
      </Content>
    </MainContainer>
  );
};
