import { Button } from "../Button";
import { CloseAllButton, Container, Content } from "./styles";
import { windows } from "@/app/types";
import { useWindows } from "@/context/windowsContext";
import { Clock } from "../Clock";
import { Settings } from "@/modules/settings";
import { useState } from "react";
import { Menu } from "../Menu";

export const NavBar = () => {
  const { toggleWindow, openWindows } = useWindows();
  const [openSettings, setOpenSettings] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleSettingOnClose = () => {
    setOpenSettings(false);
  };

  const hasOpenWindows = Object.values(openWindows).some(
    (window) => window?.isOpen,
  );

  return (
    <Container>
      <Menu
        open={openMenu}
        setOpenSettings={setOpenSettings}
        setOpenMenu={setOpenMenu}
      />

      <Button
        onClick={() => setOpenMenu(!openMenu)}
        label="Inicio"
        active={openMenu}
      />
      <Content>
        <Clock />
        <CloseAllButton
          onClick={() =>
            toggleWindow(windows.user, hasOpenWindows ? false : true, true)
          }
        />
        <Settings open={openSettings} onClose={handleSettingOnClose} />
      </Content>
    </Container>
  );
};
