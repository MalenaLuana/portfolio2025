import { color } from "@/utils/constants";
import { Button } from "../Button";
import { iconName } from "../Icon/types";
import { Container } from "./styles";
import { windows } from "@/app/types";
import { useWindows } from "@/context/windowsContext";
import { Clock } from "../Clock";

export const NavBar = () => {
  const { toggleWindow, openWindows } = useWindows();
  const content = [
    { icon: iconName.image, onClick: () => {} },
    {
      icon: iconName.userSquare,
      onClick: () => toggleWindow(windows.user, !openWindows.user?.isOpen),
    },
    { icon: iconName.mail, onClick: () => {} },
    { icon: iconName.cog, onClick: () => {} },
  ];

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
    </Container>
  );
};
