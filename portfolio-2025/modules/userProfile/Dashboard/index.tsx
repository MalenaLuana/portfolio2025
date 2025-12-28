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
import { DashboardSection } from "./types";
import { Home } from "../Home";

export const Dashboard = () => {
  const [activeSection, setActiveSection] = useState(DashboardSection.Inicio);

  const sidebarItems = [
    {
      label: "Inicio",
      active: activeSection === DashboardSection.Inicio,
      onClick: () => setActiveSection(DashboardSection.Inicio),
    },
    {
      label: "Perfil",
      active: activeSection === DashboardSection.Perfil,
      onClick: () => setActiveSection(DashboardSection.Perfil),
    },
    {
      label: "Proyectos",
      active: activeSection === DashboardSection.Proyectos,
      onClick: () => setActiveSection(DashboardSection.Proyectos),
    }
  ];

  const content: Record<DashboardSection, React.ReactNode> = {
    [DashboardSection.Inicio]: <Home />,
    [DashboardSection.Perfil]: <Home />,
    [DashboardSection.Proyectos]: <Home />,
  }

  return (
    <DashboardContainer>
      <Sidebar items={sidebarItems} logo={<span>ML</span>} />
      <MainContent>
        {content[activeSection ?? DashboardSection.Inicio]}
      </MainContent>
    </DashboardContainer>
  );
};