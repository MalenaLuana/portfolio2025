import { languages } from "@/dictionary/types";
import {
  CardLabel,
  CardsGrid,
  CardTitle,
  CardValue,
  InfoLabel,
  InfoRow,
  InfoValue,
  StatsCard,
} from "../Dashboard/styles";
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
} from "./styles";
import { texts } from "@/dictionary";
import ProfileImg from "@/public/images/profile.jpg";
import HeartImg from "@/public/images/heart.png";

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
          <ProfileRole variant="body1">- {profile.role}</ProfileRole>
        </Column>
      </MainData>
    </HomeContainer>
  );
};
