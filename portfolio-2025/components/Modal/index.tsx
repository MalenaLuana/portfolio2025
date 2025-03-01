import { Box, ModalMain } from "./styles";
import { IModal } from "./types";

export const Modal = ({ open, onClose, children }: IModal) => {
  return (
    <ModalMain open={open} onClose={onClose}>
      <Box>{children}</Box>
    </ModalMain>
  );
};
