import { languages } from "@/dictionary/types";
import { CardLabel, CardsGrid, CardTitle, CardValue, InfoLabel, InfoRow, InfoValue, StatsCard } from "../Dashboard/styles";
import { HomeContainer, ProfilePhotoBox, ProfilePhotoContainer, ProfileName, ProfileRole, ProfilePhoto } from "./styles";
import { texts } from "@/dictionary";
import ProfileImg from '@/public/images/profile.jpeg'

export const Home = () => {
    const { profile, experienceCard, skillsCard, aboutCard } = texts[languages.espanish].home

    const cardsContent = [
        {
            type: 'profile',
            content: (
                <>
                    <ProfilePhotoContainer>
                        <ProfilePhotoBox>
                            <ProfilePhoto src={ProfileImg.src} alt="Profile" />
                        </ProfilePhotoBox>
                    </ProfilePhotoContainer>
                    <ProfileName>{profile.name}</ProfileName>
                    <ProfileRole>{profile.role}</ProfileRole>
                </>
            )
        },
        {
            type: 'experience',
            content: (
                <>
                    <CardTitle>{experienceCard.title}</CardTitle>
                    <CardValue>{experienceCard.value}</CardValue>
                    {experienceCard.labels.map((label, index) => (
                        <CardLabel key={index}>{label}</CardLabel>
                    ))}
                </>
            )
        },
        {
            type: 'skills',
            content: (
                <>
                    <CardTitle>{skillsCard.title}</CardTitle>
                    {skillsCard.items.map((item, index) => (
                        <InfoRow key={index}>
                            <InfoLabel>{item.label}</InfoLabel>
                            <InfoValue>{item.value}</InfoValue>
                        </InfoRow>
                    ))}
                </>
            )
        },
        {
            type: 'about',
            content: (
                <>
                    <CardTitle>{aboutCard.title}</CardTitle>
                    {aboutCard.items.map((item, index) => (
                        <InfoRow key={index}>
                            <InfoLabel>{item.label}</InfoLabel>
                            <InfoValue>{item.value}</InfoValue>
                        </InfoRow>
                    ))}
                </>
            )
        }
    ];

    return (
        <HomeContainer>
            <CardsGrid>
                {cardsContent.slice(0, 2).map((card, index) => (
                    <StatsCard key={card.type} delay={index}>
                        {card.content}
                    </StatsCard>
                ))}
            </CardsGrid>

            {cardsContent.slice(2).map((card, index) => (
                <StatsCard key={card.type} delay={index + 2}>
                    {card.content}
                </StatsCard>
            ))}
        </HomeContainer>
    );
};