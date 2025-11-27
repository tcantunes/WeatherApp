import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ActivityIndicator, 
  Keyboard, 
  TouchableWithoutFeedback,
  Alert 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Search } from 'lucide-react-native';

import { fetchWeather, WeatherData } from './src/services/weatherApi';
import { getWeatherInfo } from './src/utils/weatherConditions';
import CurrentWeather from './src/components/CurrentWeather';

export default function App() {
  const [city, setCity] = useState<string>('');
  
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const backgroundColors: string[] = weatherData 
    ? getWeatherInfo(weatherData.weatherCode).colors 
    : ['#4FACFE', '#00F2FE'];

  const handleSearch = async () => {
    if (!city.trim()) return;
    
    Keyboard.dismiss(); 
    setLoading(true);
    setWeatherData(null);

    try {
      const data: WeatherData = await fetchWeather(city);
      setWeatherData(data);
    } catch (error: any) {
      Alert.alert("Erro", error.message || "Não foi possível buscar o clima.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={backgroundColors} style={styles.container}>
        <StatusBar style="light" />
        
        <View style={styles.content}>
          <Text style={styles.title}>Previsão do Tempo</Text>

          <View style={styles.searchContainer}>
            <TextInput 
              style={styles.input}
              placeholder="Digite a cidade..."
              placeholderTextColor="rgba(255,255,255,0.6)"
              value={city}
              onChangeText={setCity}
              onSubmitEditing={handleSearch}
              returnKeyType="search"
            />
            <TouchableOpacity 
              style={styles.button} 
              onPress={handleSearch}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#FFF" size="small" />
              ) : (
                <Search color="#FFF" size={20} />
              )}
            </TouchableOpacity>
          </View>

          {weatherData ? (
            <CurrentWeather data={weatherData} />
          ) : (
            <View style={styles.emptyState}>
              {!loading && (
                <Text style={styles.emptyText}>
                  Busque por uma cidade para começar
                </Text>
              )}
            </View>
          )}
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 16,
    padding: 6,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#FFF',
  },
  button: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    padding: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyState: {
    marginTop: 100,
    alignItems: 'center',
  },
  emptyText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
  }
});