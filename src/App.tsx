import React from 'react';
import { useEffect, useState } from 'react';
import InputForm from './components/InputForm';
import WeatherCard from './components/WeatherCard';
import SearchOptions from './components/SearchOptions';
import MoreDetails from './components/MoreDetails';
import Container from './components/Container';
import { 
  ILocations, 
  ILocationOutputData,
  ICoordinates,
  IHourly,
} from './types';
import styles from './scss/App.module.scss';

function App() {
  const [text, setText] = useState('');
	const [locations, setLocations] = useState<ILocations[] | null>(null);
  const [locationOutputData, setLocationOutputData] = useState<ILocationOutputData | null>(null);
	const [error, setError] = useState('');
  const [coordinates, setCoordinates] = useState<ICoordinates>({ latitude: '', longitude: '' });
  const [weatherCode, setWeatherCode] = useState<number | null>(null);
  const [showSearchOptions, setShowSearchOptions] = useState(true);
  const [showWeatherCard, setShowWeatherCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tempUnits, setTempUnits] = useState('celsius');
  const [hourly, setHourly] = useState<IHourly | null>(null);
  const [showDetails, setShowDetails] = useState(false);

	const inputHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setText(e.target.value);
    setError('');
	}

  useEffect(() => {
    if (text) {
      setError('');
    }
  }, [text]);
  
	const searchHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    
    if (text.trim().length) {
      fetchLocation();
      setShowDetails(false);
      setShowSearchOptions(true);
    }
	}

  const fetchWeatherCode = async () => {
    try {
      setIsLoading(true);
      const fetchWeatherCode = await fetch(`
        https://api.open-meteo.com/v1/forecast?latitude=${coordinates?.latitude}&longitude=${coordinates?.longitude}&current_weather=true
      `)
      const weatherCode = await fetchWeatherCode.json();
      setWeatherCode(weatherCode.current_weather.weathercode);
      setText('');
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        setIsLoading(false);
      }
    }
  }

	const fetchLocation = async () => {
		try {
      setIsLoading(true);
      setShowWeatherCard(false);
			const fetchDataByCityName = await fetch(`
				https://geocoding-api.open-meteo.com/v1/search?name=${text}&count=30&language=en&format=json
			`)
			const cityNameData = await fetchDataByCityName.json();
	
			setLocations(cityNameData.results);
      setIsLoading(false);
		} catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        setIsLoading(false);
      }
		}
	}
  
  const searchOptionsHandler = (locationId: string) => {
    locations?.map(location => {
      if (locationId === location.id) {
        setCoordinates({
          latitude: location.latitude, 
          longitude: location.longitude
        })
        setText(location.name);
        setLocationOutputData({
          name: location.name,
          region: location.admin1,
          country: location.country,
          countryCode: location.country_code
        });
        setShowSearchOptions(false);
        fetchDetails();
      }
    })
  }

  const fetchDetails = async () => {
    try {
      if (!coordinates.latitude && !coordinates.longitude) {
        return;
      }

      const fetchDetailsData = await fetch(`
        https://api.open-meteo.com/v1/forecast?latitude=${coordinates?.latitude}&longitude=${coordinates?.longitude}&hourly=temperature_2m,relativehumidity_2m,pressure_msl,cloudcover,windspeed_10m,rain,snowfall,weathercode&timezone=GMT&temperature_unit=${tempUnits}
      `);
      const hourlyData = await fetchDetailsData.json();
      setHourly(hourlyData);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }

  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    if (text.trim().length && locations && locations.length > 0) {
      setShowSearchOptions(true);
      setLocations([]);
      fetchWeatherCode();
      fetchDetails();
      setShowWeatherCard(true);
    }
  }

  const showDetailsHandler = () => {
    setShowDetails(true);
  }

  return (
    <div className={styles.app}>
      <Container>
        <InputForm
          text={text}
          inputHandler={inputHandler}
          searchHandler={searchHandler}
          clickHandler={clickHandler}
          // showSearchOptions={showSearchOptions}
          isLoading={isLoading}
          tempUnits={tempUnits}
          setTempUnits={setTempUnits}
          setShowWeatherCard={setShowWeatherCard}
          setShowDetails={setShowDetails}
        />

        {!!error && <p className={styles.errorMessage}>Error: {error}</p>}

        {text && locations && showSearchOptions &&
          <SearchOptions 
            locations={locations} 
            searchOptionsHandler={searchOptionsHandler}
          />
        }
        
        {hourly && showWeatherCard &&
          <WeatherCard 
            hourly={hourly}
            locationOutputData={locationOutputData}
            showDetailsHandler={showDetailsHandler}
            weatherCode={weatherCode}
        />
        }

        {showDetails && 
          <MoreDetails
            hourly={hourly}
            // tempUnits={tempUnits}
          />
        }
      </Container>
    </div>
  );
}

export default App;