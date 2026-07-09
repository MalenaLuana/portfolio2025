import { Button } from "../Button";
import { Container, Content, WindowsButtons } from "./styles";

import { useWindows } from "@/context/windowsContext";
import { Clock } from "../Clock";
import { Settings } from "@/modules/settings";
import { useState } from "react";
import { Menu } from "../Menu";

export const NavBar = () => {
  const { getOpenWindows, toggleMinimized } = useWindows();
  const [openSettings, setOpenSettings] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleSettingOnClose = () => {
    setOpenSettings(false);
  };

  return (
    <Container>
      <Menu
        open={openMenu}
        setOpenSettings={setOpenSettings}
        setOpenMenu={setOpenMenu}
      />

      <WindowsButtons>
        <Button
          onClick={() => setOpenMenu(!openMenu)}
          label="Inicio"
          active={openMenu}
        />
        {getOpenWindows().map((window) => (
          <Button
            key={window.name}
            label={window.title}
            onClick={() => toggleMinimized(window.name, !window.isMinimized)}
          />
        ))}
      </WindowsButtons>
      <Content>
        <Clock />
      </Content>
    </Container>
  );
};
