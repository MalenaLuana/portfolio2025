import { ISettings } from "./types";
import { Box, Image, ImagesBox, NewImage, SideBar } from "./styles";
import image1 from "@/public/images/arcane.jpg";
import image2 from "@/public/images/clouds.jpg";
import image3 from "@/public/images/windows.jpeg";
import defaultImg from "@/public/images/cuadricula_back.jpg";
import { useWallpaper } from "@/context/wallpaperContext";
import { Divider } from "@mui/material";
import { color } from "@/utils/constants";
import { Modal } from "@/components/Modal";
import { useState } from "react";
import { AddBackground } from "./addBackground/addBackground";

export const Settings = ({ open, onClose }: ISettings) => {
  const { setWallpaperImage } = useWallpaper();
  const [openModal, setOpenModal] = useState(false);
  const [newImage, setNewImage] = useState<string>();
  const wallpapers = [defaultImg.src, image2.src, image3.src];
  return (
    <SideBar open={open} onClose={onClose} anchor={"right"}>
      <p>Fondo de pantalla</p>
      <Divider
        flexItem
        style={{ borderColor: `${color.primary300}`, margin: "10px 0" }}
      />
      <Box>
        <ImagesBox>
          {wallpapers.map((imageSrc) => (
            <Image
              key={imageSrc}
              src={imageSrc}
              onClick={() => setWallpaperImage(imageSrc)}
            />
          ))}
          {!newImage ? (
            <NewImage onClick={() => setOpenModal(true)}>+</NewImage>
          ) : (
            <Image
              key={newImage}
              src={newImage}
              onClick={() => setWallpaperImage(newImage)}
            />
          )}
        </ImagesBox>
      </Box>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <AddBackground
          setNewImage={setNewImage}
          onClose={() => setOpenModal(false)}
        />
      </Modal>
    </SideBar>
  );
};
