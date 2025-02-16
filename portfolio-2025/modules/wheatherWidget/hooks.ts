import { apiRequests } from "@/api/service";
import { IUseWeather } from "./types";

export const useWeather = ({ setData }: IUseWeather) => {
  const getWeather = async () => {
    const res = await apiRequests.getCurrentWeather();
    if (res) {
      setData(res);
    } else {
      return { error: "Error al pedir la data" };
    }
  };
  return { getWeather };
};
