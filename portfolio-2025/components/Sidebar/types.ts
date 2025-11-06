import { ReactNode } from "react";

export interface ISidebarItem {
  icon?: string;
  label?: string;
  onClick?: () => void;
  active?: boolean;
}

export interface ISidebar {
  items: ISidebarItem[];
  logo?: ReactNode;
}
