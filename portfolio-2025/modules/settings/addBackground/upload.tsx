import { useState } from "react";
import { IUploadImage } from "../types";
import {
  Button,
  CloseIcon,
  DropArea,
  ImagePreview,
  ImagePreviewBox,
  UploadBox,
} from "./styles";
import { texts } from "@/dictionary";
import Image from "next/image";
import { iconName } from "@/components/Icon/types";
import { color } from "@/utils/constants";

export const Upload = ({ setNewImage, onClose }: IUploadImage) => {
  const { title, subtitle, label, btnLabel } =
    texts.es.settings.addBackgroundModal;
  const [imageToUpload, setImageToUpload] = useState<{
    name: string;
    url: string;
  } | null>();

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);

    const imageFiles = files
      .filter((file) => file.type.startsWith("image/"))
      .map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file),
      }));

    setImageToUpload(imageFiles[0]);
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
      <Button disabled={!imageToUpload?.url.length} onClick={handleUpload}>
        <p>{btnLabel}</p>
      </Button>
    </UploadBox>
  );
};
