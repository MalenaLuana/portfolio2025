export interface ISettings {
  open: boolean;
  onClose: () => void;
}

export enum AddBackgroundSteps {
  upload = 1,
  loading,
  finish,
}

export interface IAddBackground {
  setNewImage: (value: string) => void;
  onClose: () => void;
}
export interface IUploadImage {
  setNewImage: (value: string) => void;
  onClose: () => void;
}
