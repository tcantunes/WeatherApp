import React from 'react'; 
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Wind } from 'lucide-react-native';

const ICON_SIZE = 64;
const ICON_COLOR = '#FFFFFF';

export interface WeatherInfo {
  label: string;
  icon: React.ReactElement; 
  colors: string[];
}

export const getWeatherInfo = (code: number): WeatherInfo => {
  if (code === 0) return { 
    label: "Céu Limpo", 
    icon: <Sun size={ICON_SIZE} color="#FDB813" />, 
    colors: ['#4FACFE', '#00F2FE'] 
  };
  
  if ([1, 2, 3].includes(code)) return { 
    label: "Parcialmente Nublado", 
    icon: <Cloud size={ICON_SIZE} color={ICON_COLOR} />, 
    colors: ['#636FA4', '#E8CBC0'] 
  };
  
  if ([45, 48].includes(code)) return { 
    label: "Nevoeiro", 
    icon: <Wind size={ICON_SIZE} color={ICON_COLOR} />, 
    colors: ['#3E5151', '#DECBA4'] 
  };
  
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return { 
    label: "Chuva", 
    icon: <CloudRain size={ICON_SIZE} color={ICON_COLOR} />, 
    colors: ['#000046', '#1CB5E0'] 
  };
  
  if ([71, 73, 75, 85, 86].includes(code)) return { 
    label: "Neve", 
    icon: <CloudSnow size={ICON_SIZE} color={ICON_COLOR} />, 
    colors: ['#83a4d4', '#b6fbff'] 
  };
  
  if ([95, 96, 99].includes(code)) return { 
    label: "Tempestade", 
    icon: <CloudLightning size={ICON_SIZE} color={ICON_COLOR} />, 
    colors: ['#200122', '#6f0000'] 
  };
  
  return { 
    label: "Indisponível", 
    icon: <Cloud size={ICON_SIZE} color={ICON_COLOR} />, 
    colors: ['#4FACFE', '#00F2FE'] 
  };
};