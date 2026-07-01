import { windows } from "@/app/types";
import { iconName } from "../Icon/types";
import { IContentMenu } from "./types";

export const menuContent = ({
  openWindows,
  toggleWindow,
  setOpenSettings,
}: IContentMenu) => {
  return [
    {
      icon: iconName.userSquare,
      onClick: () => toggleWindow(windows.user, !openWindows.user?.isOpen),
      label: "- Perfil",
    },
    { icon: iconName.mail, onClick: () => {}, label: "- Casilla de e-mail" },
    { icon: iconName.image, onClick: () => {}, label: "- Galería" },
    {
      icon: iconName.cog,
      onClick: () => setOpenSettings(true),
      label: "- Ajustes",
    },
  ];
};
