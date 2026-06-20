import { useWindows } from "@/context/windowsContext";
import { ButtonBox, Container, Header, MenuItem } from "./styles";
import { MenuProps } from "./types";
import { menuContent } from "./content";
import { Icon } from "../Icon";
import { iconName } from "../Icon/types";
import { ClickAwayListener, Typography } from "@mui/material";

export const Menu = ({ open, setOpenSettings, setOpenMenu }: MenuProps) => {
  const { toggleWindow, openWindows } = useWindows();
  return open ? (
    <ClickAwayListener onClickAway={() => setOpenMenu(false)}>
      <Container>
        <Header>
          <Typography>Inicio</Typography>
        </Header>
        <ButtonBox>
          {menuContent({ openWindows, toggleWindow, setOpenSettings }).map(
            (item, index) => (
              <MenuItem key={item.icon + index} onClick={item.onClick}>
                <Typography>{item.label}</Typography>
              </MenuItem>
            ),
          )}
        </ButtonBox>
      </Container>
    </ClickAwayListener>
  ) : null;
};
