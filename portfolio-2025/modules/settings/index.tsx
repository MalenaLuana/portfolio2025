import { ISettings } from "./types";
import { Box, Image, ImagesBox, SideBar } from "./styles";
import image1 from "@/public/images/arcane.jpg";
import image2 from "@/public/images/clouds.jpg";
import image3 from "@/public/images/windows.jpeg";
import defaultImg from "@/public/images/cuadricula_back.jpg";
import { useWallpaper } from "@/context/wallpaperContext";

export const Settings = ({ open, onClose }: ISettings) => {
  const { setWallpaperImage } = useWallpaper();
  const wallpapers = [defaultImg.src, image1.src, image2.src, image3.src];
  return (
    <SideBar open={open} onClose={onClose} anchor={"right"}>
      <p>Fondo de pantalla</p>
      <Box>
        <ImagesBox>
          {wallpapers.map((imageSrc) => (
            <Image
              key={imageSrc}
              src={imageSrc}
              onClick={() => setWallpaperImage(imageSrc)}
            />
          ))}
        </ImagesBox>
      </Box>
    </SideBar>
  );
};
