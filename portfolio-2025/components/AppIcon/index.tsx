import Image from "next/image";
import { Container, Icon, Label } from "./styles";
import { IAppIcon } from "./types";
import { useWindows } from "@/context/windowsContext";
import { color } from "@/utils/constants";
import { ClickAwayListener } from "@mui/material";
import { useState } from "react";

export const AppIcon = ({ label, windowName, image, position }: IAppIcon) => {
  const { toggleWindow } = useWindows();
  const [active, setActive] = useState(false);
  const { top, left, right, bottom } = position;
  return (
    <ClickAwayListener onClickAway={() => setActive(false)}>
      <Container
        active={active}
        onClick={() => setActive(true)}
        onDoubleClick={() => toggleWindow(windowName, true)}
        top={top}
        right={right}
        bottom={bottom}
        left={left}
      >
        <Icon>
          <Image
            style={{ objectFit: "contain" }}
            src={image}
            fill
            alt={label}
          />
        </Icon>
        <Label style={{ background: `${color.primary500}`, padding: "2px" }}>
          {label}
        </Label>
      </Container>
    </ClickAwayListener>
  );
};
