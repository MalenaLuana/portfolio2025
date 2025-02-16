import { WeatherResponse } from "@/api/service/types";
import { Dispatch, SetStateAction } from "react";

export interface IUseWeather {
  setData: Dispatch<SetStateAction<WeatherResponse | undefined>>;
}
