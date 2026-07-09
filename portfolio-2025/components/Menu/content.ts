import { windows } from "@/app/types";
import { iconName } from "../Icon/types";
import { IContentMenu } from "./types";

export const menuContent = ({ openWindows, toggleWindow }: IContentMenu) => {
  return [
    {
      icon: iconName.userSquare,
      onClick: () => toggleWindow(windows.user, !openWindows.user?.isOpen),
      label: "- Perfil",
    },
    {
      icon: iconName.mail,
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/malena-luana-fresco/",
          "_blank",
          "noopener,noreferrer",
        ),
      label: "- Linkedin",
    },
    { icon: iconName.image, onClick: () => {}, label: "- Galería" },
  ];
};
