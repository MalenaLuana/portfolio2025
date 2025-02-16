import Image from "next/image";
import { Container, Icon } from "./styles";
import { IAppIcon } from "./types";
import { useWindows } from "@/context/windowsContext";
import { color } from "@/utils/constants";
import { ClickAwayListener } from "@mui/material";
import { useState } from "react";

export const AppIcon = ({ label, windowName, image }: IAppIcon) => {
  const { toggleWindow } = useWindows();
  const [active, setActive] = useState(false);
  return (
    <ClickAwayListener onClickAway={() => setActive(false)}>
      <Container
        active={active}
        onClick={() => setActive(true)}
        onDoubleClick={() => toggleWindow(windowName, true)}
      >
        <Icon>
          <Image
            style={{ objectFit: "contain" }}
            src={image}
            fill
            alt={label}
          />
        </Icon>
        <p style={{ background: `${color.primary500}`, padding: "2px" }}>
          {label}
        </p>
        <input
          type="text"
          style={{
            position: "absolute",
            opacity: 0,
            width: 0,
            height: 0,
          }}
        />
      </Container>
    </ClickAwayListener>
  );
};
