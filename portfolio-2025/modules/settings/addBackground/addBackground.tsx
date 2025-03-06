import { ReactElement, useState } from "react";
import { ModalBox } from "./styles";
import { AddBackgroundSteps, IAddBackground } from "../types";
import { Upload } from "./upload";

export const AddBackground = ({ setNewImage, onClose }: IAddBackground) => {
  const [step, setStep] = useState<AddBackgroundSteps>(
    AddBackgroundSteps.upload
  );

  const content: Record<AddBackgroundSteps, ReactElement> = {
    [AddBackgroundSteps.upload]: (
      <Upload setNewImage={setNewImage} onClose={onClose} />
    ),
    [AddBackgroundSteps.loading]: <></>,
    [AddBackgroundSteps.finish]: <></>,
  };

  return <ModalBox>{content[step]}</ModalBox>;
};
