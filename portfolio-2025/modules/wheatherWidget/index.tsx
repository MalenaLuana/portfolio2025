import { apiRequests } from "@/api/service";
import { useEffect, useState } from "react";
import { County, MainContainer, Tempt, Wind } from "./styles";
import { WeatherResponse } from "@/api/service/types";
import { Icon } from "@/components/Icon";
import { iconName } from "@/components/Icon/types";
import { color } from "@/utils/constants";
import { CircularProgress } from "@mui/material";

export const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState<WeatherResponse>();
  const [isLoading, setIsLoading] = useState(true);

  const getWeatherData = async () => {
    const res = await apiRequests.getCurrentWeather();
    res && setWeatherData(res);
    setIsLoading(false);
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <MainContainer>
      {!isLoading ? (
        <>
          <Icon
            name={iconName.sun}
            width="50px"
            height="50px"
            color={color.yellow500}
          />
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
