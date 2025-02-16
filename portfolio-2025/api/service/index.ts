"use client";
import axios from "axios";
import { WeatherResponse } from "./types";

const getCurrentWeather = async (): Promise<WeatherResponse> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_WEATHER_URL}/current.json`,
      {
        params: {
          key: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
          q: "buenos aires",
          lang: "es",
          day: 1,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export const apiRequests = {
  getCurrentWeather,
};
