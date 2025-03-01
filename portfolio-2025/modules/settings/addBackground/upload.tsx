import { useState } from "react";
import { IUploadImage } from "../types";
import { Button, DropArea, ImagePreview, UploadBox } from "./styles";
import { texts } from "@/dictionary";
import Image from "next/image";

export const Upload = ({ setNewImage }: IUploadImage) => {
  const { title, subtitle, label, btnLabel } =
    texts.es.settings.addBackgroundModal;
  const [imageToUpload, setImageToUpload] = useState<{
    name: string;
    url: string;
  }>();

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

  return (
    <UploadBox>
      <div>
        <h3>{title}</h3>
        <p style={{ fontSize: 12 }}>{subtitle}</p>
      </div>
      {!imageToUpload ? (
        <DropArea onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
          <p>{label}</p>
        </DropArea>
      ) : (
        <div>
          <ImagePreview>
            <Image
              src={imageToUpload.url}
              alt="image to upload"
              fill
              style={{ objectFit: "contain" }}
            />
          </ImagePreview>
          <p>{imageToUpload.name}</p>
        </div>
      )}
      <Button disabled={true}>
        <p>{btnLabel}</p>
      </Button>
    </UploadBox>
  );
};
