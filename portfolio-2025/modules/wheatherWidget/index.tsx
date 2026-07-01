import { useEffect, useState } from "react";
import { County, MainContainer, Tempt, Wind } from "./styles";
import { WeatherResponse } from "@/api/service/types";
import { Icon } from "@/components/Icon";
import { iconName } from "@/components/Icon/types";
import { color } from "@/utils/constants";
import { CircularProgress } from "@mui/material";
import { useWeather } from "./hooks";
import SunIllustration from "../../public/images/sun.png";
import Background from "../../public/images/wood-frame.png";

export const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState<WeatherResponse>();
  const [isLoading, setIsLoading] = useState(true);
  const { getWeather } = useWeather({ setData: setWeatherData });

  useEffect(() => {
    getWeather();
    setIsLoading(false);
  }, []);

  return (
    <MainContainer imgSrc={Background.src}>
      {!isLoading ? (
        <>
          <img src={SunIllustration.src} width={80} height={80} />
          <Tempt>{weatherData?.current.temp_c}°</Tempt>
          <Wind>
            <p>Sensación térmica {weatherData?.current.feelslike_c}°</p>
          </Wind>
          <Wind>
            <Icon name={iconName.wind} />
            <p>{weatherData?.current.wind_kph} km/h</p>
          </Wind>
          <County>
            <p>{weatherData?.location.name}</p>
            <p>{weatherData?.location.country}</p>
          </County>
        </>
      ) : (
        <CircularProgress style={{ color: color.blue500 }} />
      )}
    </MainContainer>
  );
};
