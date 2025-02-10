import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { IDroppable } from "./types";
import { Container } from "./styles";

export const Droppable = ({ children }: IDroppable) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  return <Container ref={setNodeRef}>{children}</Container>;
};
