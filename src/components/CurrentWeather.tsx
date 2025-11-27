import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapPin, Thermometer, Wind } from 'lucide-react-native';
import { getWeatherInfo } from '../utils/weatherConditions';
import { WeatherData } from '../services/weatherApi';

interface CurrentWeatherProps {
  data: WeatherData;
}

export default function CurrentWeather({ data }: CurrentWeatherProps) {
  const info = getWeatherInfo(data.weatherCode);

  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <MapPin color="#FFF" size={24} />
        <Text style={styles.cityText}>{data.cityName}</Text>
      </View>
      <Text style={styles.regionText}>
        {data.region ? `${data.region}, ` : ''}{data.country}
      </Text>

      <View style={styles.iconContainer}>
        {info.icon}
        <Text style={styles.weatherLabel}>{info.label}</Text>
      </View>

      <Text style={styles.tempText}>{Math.round(data.temperature)}°</Text>

      <View style={styles.detailsGrid}>
        <View style={styles.detailItem}>
          <Wind color="rgba(255,255,255,0.7)" size={20} />
          <Text style={styles.detailLabel}>Vento</Text>
          <Text style={styles.detailValue}>{data.windSpeed} km/h</Text>
        </View>
        <View style={styles.detailItem}>
          <Thermometer color="rgba(255,255,255,0.7)" size={20} />
          <Text style={styles.detailLabel}>Real</Text>
          <Text style={styles.detailValue}>{Math.round(data.temperature)}°C</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 20 },
  locationContainer: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  cityText: { fontSize: 32, fontWeight: 'bold', color: '#FFF' },
  regionText: { color: 'rgba(255,255,255,0.8)', fontSize: 16, marginTop: 4 },
  iconContainer: { alignItems: 'center', marginVertical: 30 },
  weatherLabel: { color: '#FFF', fontSize: 20, marginTop: 10, fontWeight: '500' },
  tempText: { fontSize: 80, fontWeight: 'bold', color: '#FFF' },
  detailsGrid: { flexDirection: 'row', gap: 20, marginTop: 30, width: '100%' },
  detailItem: { 
    flex: 1, 
    backgroundColor: 'rgba(255,255,255,0.2)', 
    padding: 15, 
    borderRadius: 20, 
    alignItems: 'center' 
  },
  detailLabel: { color: 'rgba(255,255,255,0.7)', fontSize: 14, marginTop: 4 },
  detailValue: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginTop: 4 },
});