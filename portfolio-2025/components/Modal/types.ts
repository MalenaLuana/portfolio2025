import { ReactElement } from "react";

export interface IModal {
  open: boolean;
  onClose: () => void;
  children: ReactElement;
}
