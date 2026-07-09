import { useRef, useState } from "react";
import { IUploadImage } from "../types";
import {
  CloseIcon,
  DropArea,
  ImagePreview,
  ImagePreviewBox,
  OpenFilesText,
  UploadBox,
} from "./styles";
import { texts } from "@/dictionary";
import Image from "next/image";
import { iconName } from "@/components/Icon/types";
import { color } from "@/utils/constants";
import { Button } from "@/components/Button";

export const Upload = ({ setNewImage, onClose }: IUploadImage) => {
  const { title, subtitle, label, label2, btnLabel } =
    texts.es.settings.addBackgroundModal;
  const [imageToUpload, setImageToUpload] = useState<{
    name: string;
    url: string;
  } | null>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | File[]) => {
    const imageFiles = Array.from(files)
      .filter((file) => file.type.startsWith("image/"))
      .map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file),
      }));

    setImageToUpload(imageFiles[0]);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleFiles(event.dataTransfer.files);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };
  const handleUpload = () => {
    imageToUpload?.url && setNewImage(imageToUpload?.url);
    onClose();
  };
  return (
    <UploadBox>
      <CloseIcon
        name={iconName.close}
        color={color.blue700}
        onClick={onClose}
      />
      <div>
        <h3>{title}</h3>
        <p style={{ fontSize: 12 }}>{subtitle}</p>
      </div>
      {!imageToUpload ? (
        <DropArea onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
          <p>{label}</p>
          <OpenFilesText onClick={() => inputRef.current?.click()}>
            CLICK AQUÍ
          </OpenFilesText>
          <p>{label2}</p>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleInputChange}
          />
        </DropArea>
      ) : (
        <ImagePreviewBox>
          <CloseIcon
            name={iconName.close}
            color={color.primary500}
            onClick={() => setImageToUpload(null)}
          />
          <ImagePreview>
            <Image
              src={imageToUpload.url}
              alt="image to upload"
              fill
              style={{ objectFit: "cover" }}
            />
          </ImagePreview>
          <p>{imageToUpload.name}</p>
        </ImagePreviewBox>
      )}
      <Button
        disabled={!imageToUpload?.url.length}
        onClick={handleUpload}
        label={btnLabel}
      />
    </UploadBox>
  );
};
