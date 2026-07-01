import { Sidebar } from "@/components/Sidebar";
import { DashboardContainer, MainContent } from "./styles";
import { useState } from "react";
import { DashboardSection } from "./types";
import { Home } from "../Home";
import { Typography } from "@mui/material";

export const Dashboard = () => {
  const [activeSection, setActiveSection] = useState(DashboardSection.Inicio);

  const sidebarItems = [
    {
      label: "Perfil",
      active: activeSection === DashboardSection.Inicio,
      onClick: () => setActiveSection(DashboardSection.Inicio),
    },
  ];

  const content: Record<DashboardSection, React.ReactNode> = {
    [DashboardSection.Inicio]: <Home />,
    [DashboardSection.Perfil]: <Home />,
    [DashboardSection.Proyectos]: <Home />,
  };

  return (
    <DashboardContainer>
      <Sidebar
        items={sidebarItems}
        logo={<Typography variant="h2">ML</Typography>}
      />
      <MainContent>
        {content[activeSection ?? DashboardSection.Inicio]}
      </MainContent>
    </DashboardContainer>
  );
};
