import { color } from "@/utils/constants";
import { Button } from "../Button";
import { iconName } from "../Icon/types";
import { Container } from "./styles";
import { windows } from "@/app/types";
import { useWindows } from "@/context/windowsContext";
import { Clock } from "../Clock";
import { Settings } from "@/modules/settings";
import { useState } from "react";
export const NavBar = () => {
  const { toggleWindow, openWindows } = useWindows();
  const [openSettings, setOpenSettings] = useState(false);

  const content = [
    { icon: iconName.image, onClick: () => {} },
    {
      icon: iconName.userSquare,
      onClick: () => toggleWindow(windows.user, !openWindows.user?.isOpen),
    },
    { icon: iconName.mail, onClick: () => {} },
    { icon: iconName.cog, onClick: () => setOpenSettings(true) },
  ];
  const handleSettingOnClose = () => {
    setOpenSettings(false);
  };
  return (
    <Container>
      {content.map((item) => (
        <Button
          key={item.icon}
          icon={item.icon}
          color={color.primary700}
          onClick={item.onClick}
        />
      ))}
      <Clock />
      <Settings open={openSettings} onClose={handleSettingOnClose} />
    </Container>
  );
};
