import Image from "next/image";
import { Container, Icon, Label } from "./styles";
import { IAppIcon } from "./types";
import { ClickAwayListener } from "@mui/material";
import { useState } from "react";

export const AppIcon = ({ label, onClick, image, position }: IAppIcon) => {
  const [active, setActive] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setActive(false)}>
      <Container
        active={active}
        onClick={() => setActive(true)}
        onDoubleClick={onClick}
        top={position?.top}
        right={position?.right}
        bottom={position?.bottom}
        left={position?.left}
        absolute={!!position}
        onContextMenu={(e) => e.preventDefault()}
      >
        <Icon>
          <Image
            style={{ objectFit: "contain" }}
            src={image}
            fill
            alt={label}
          />
        </Icon>
        <Label>{label}</Label>
      </Container>
    </ClickAwayListener>
  );
};
