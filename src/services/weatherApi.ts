export interface WeatherData {
  cityName: string;
  region: string | null; 
  country: string;
  temperature: number;
  windSpeed: number;
  weatherCode: number;
}

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  try {
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=pt&format=json`
    );
    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("Cidade não encontrada.");
    }

    const { latitude, longitude, name, admin1, country_code } = geoData.results[0];

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherResult = await weatherResponse.json();

    return {
      cityName: name,
      region: admin1,
      country: country_code,
      temperature: weatherResult.current_weather.temperature,
      windSpeed: weatherResult.current_weather.windspeed,
      weatherCode: weatherResult.current_weather.weathercode,
    };
  } catch (error) {
    throw error;
  }
};