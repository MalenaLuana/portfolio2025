import { SidebarContainer, SidebarItem, SidebarLogo } from "./styles";
import { ISidebar } from "./types";
import { Icon } from "../Icon";

export const Sidebar = ({ items, logo }: ISidebar) => {
    return (
        <SidebarContainer>
            {logo && <SidebarLogo>{logo}</SidebarLogo>}
            {items.map((item, index) => (
                <SidebarItem key={index} onClick={item.onClick} active={item.active}>
                    {item.icon && <Icon name={item.icon} />}
                    {item.label && <span>{item.label}</span>}
                </SidebarItem>
            ))}
        </SidebarContainer>
    );
};
