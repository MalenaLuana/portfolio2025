import { languages } from "@/dictionary/types";
import {
  HomeContainer,
  ProfilePhotoBox,
  ProfilePhotoContainer,
  ProfileName,
  ProfileRole,
  ProfilePhoto,
  MainData,
  HeartIcon,
  Column,
  Row,
  ContentBox,
} from "./styles";
import { texts } from "@/dictionary";
import ProfileImg from "@/public/images/profile.jpg";
import HeartImg from "@/public/images/heart.png";
import Image from "next/image";
import mateImg from "@/public/images/mate.png";
import compuImg from "@/public/images/compu.png";
import { Typography } from "@mui/material";

export const Home = () => {
  const { profile, experienceCard, skillsCard, aboutCard } =
    texts[languages.espanish].home;

  return (
    <HomeContainer>
      <MainData>
        <ProfilePhotoContainer>
          <ProfilePhotoBox>
            <ProfilePhoto src={ProfileImg.src} alt="Profile" />
          </ProfilePhotoBox>
          <HeartIcon src={HeartImg.src} />
        </ProfilePhotoContainer>
        <Column>
          <ProfileName variant="h4" fontWeight={"bold"}>
            {profile.name}
          </ProfileName>

          <Row>
            <Image src={compuImg} alt="Matecito" width={40} />
            <ProfileRole variant="subtitle1" fontSize={18}>
              {profile.role}
            </ProfileRole>
          </Row>
          <Row>
            <Image src={mateImg} alt="Matecito" width={40} />
            <ProfileRole variant="subtitle1">{profile.place}</ProfileRole>
          </Row>
        </Column>
      </MainData>
      <ContentBox>
        <Typography variant="h5" fontWeight={"bold"}>
          {aboutCard.title}
        </Typography>
        <Typography variant="subtitle1" fontSize={20}>
          {aboutCard.description}
        </Typography>
      </ContentBox>
    </HomeContainer>
  );
};
