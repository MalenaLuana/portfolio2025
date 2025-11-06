import { Sidebar } from "@/components/Sidebar";
import {
  DashboardContainer,
  MainContent,
  Header,
  Title,
  Subtitle,
  CardsGrid,
  StatsCard,
  CardTitle,
  CardValue,
  CardLabel,
  InfoRow,
  InfoLabel,
  InfoValue,
} from "./styles";
import { useState } from "react";

export const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sidebarItems = [
    {
      icon: "home",
      label: "Home",
      active: activeSection === "home",
      onClick: () => setActiveSection("home"),
    },
    {
      icon: "person",
      label: "Profile",
      active: activeSection === "profile",
      onClick: () => setActiveSection("profile"),
    },
    {
      icon: "work",
      label: "Projects",
      active: activeSection === "projects",
      onClick: () => setActiveSection("projects"),
    },
    {
      icon: "mail",
      label: "Contact",
      active: activeSection === "contact",
      onClick: () => setActiveSection("contact"),
    },
  ];

  return (
    <DashboardContainer>
      <Sidebar items={sidebarItems} logo={<span>ML</span>} />
      <MainContent>
        <Header>
          <div>
            <Title>Portfolio Dashboard</Title>
            <Subtitle>Malena Luana - Full Stack Developer</Subtitle>
          </div>
        </Header>

        <CardsGrid>
          <StatsCard>
            <CardTitle>Experience</CardTitle>
            <CardValue>3+</CardValue>
            <CardLabel>Years of Development</CardLabel>
          </StatsCard>

          <StatsCard>
            <CardTitle>Projects</CardTitle>
            <CardValue>15+</CardValue>
            <CardLabel>Completed Projects</CardLabel>
          </StatsCard>

          <StatsCard>
            <CardTitle>Technologies</CardTitle>
            <CardValue>20+</CardValue>
            <CardLabel>Tech Stack Mastered</CardLabel>
          </StatsCard>
        </CardsGrid>

        <StatsCard>
          <CardTitle>Skills Overview</CardTitle>
          <InfoRow>
            <InfoLabel>Frontend Development</InfoLabel>
            <InfoValue>React, Next.js, TypeScript</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Backend Development</InfoLabel>
            <InfoValue>Node.js, Express, APIs</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Database</InfoLabel>
            <InfoValue>MongoDB, PostgreSQL</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Tools & Others</InfoLabel>
            <InfoValue>Git, Docker, CI/CD</InfoValue>
          </InfoRow>
        </StatsCard>

        <StatsCard>
          <CardTitle>About Me</CardTitle>
          <InfoRow>
            <InfoLabel>Location</InfoLabel>
            <InfoValue>Argentina</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Email</InfoLabel>
            <InfoValue>malenaluana98@gmail.com</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Status</InfoLabel>
            <InfoValue>Available for work</InfoValue>
          </InfoRow>
        </StatsCard>
      </MainContent>
    </DashboardContainer>
  );
};