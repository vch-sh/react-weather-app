import { useEffect, useState } from 'react';
import InputForm from './components/InputForm';
import WeatherCard from './components/WeatherCard';
import SearchOptions from './components/SearchOptions';
import Container from './components/Container';
import './scss/App.scss';

function App() {

  const [text, setText] = useState('');
	const [locations, setLocations] = useState([]);
  const [locationOutputData, setLocationOutputData] = useState({});
	const [error, setError] = useState('');
  const [coordinates, setCoordinates] = useState({ latitude: '', longitude: '' });
  const [currentWeather, setCurrentWearher] = useState();
  const [showSearchOptions, setShowSearchOptions] = useState(true);

	const inputHandler = (e) => {
		setText(e.target.value);
	}
  
	const searchHandler = (e) => {
    e.preventDefault();
    
    if (text.trim().length) {
      fetchLocation();
      setShowSearchOptions(true);
    }
	}

	const fetchLocation = async () => {
		try {
			const fetchDataByCityName = await fetch(`
				https://geocoding-api.open-meteo.com/v1/search?name=${text}&count=50&language=en&format=json
			`)
			const cityNameData = await fetchDataByCityName.json();
	
			setLocations(cityNameData.results);
			console.log(cityNameData.results);
		} catch (error) {
			setError(error.message);
			error && console.log(error.message);
		}
	}
  
  const searchOptionsHandler = (locationId) => {
    locations.map(location => {
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
      }
    })
  }

  // Delete later.
  useEffect(() => {
    if (coordinates.latitude && coordinates.longitude) {
      console.log(coordinates);
    }
  },[coordinates]);

  useEffect(() => {
    if (currentWeather) {
      console.log(currentWeather);
    }
  },[currentWeather]);
  
  const fetchCurrentWeather = async () => {
    try {
      const fetchCurrentWeather = await fetch(`
        https://api.open-meteo.com/v1/forecast?latitude=${coordinates?.latitude}&longitude=${coordinates?.longitude}&current_weather=true
      `)
      const currentWeatherData = await fetchCurrentWeather.json();
      setCurrentWearher(currentWeatherData);
      setText('');
    } catch (error) {
      setError(error.message);
      error && console.log(error.message);
    }
  }

  const clickHandler = (e) => {
    e.preventDefault();
    fetchCurrentWeather();
    setShowSearchOptions(true);
    setLocations([]);
  }

  return (
    <div className="app">
      <Container>
        <InputForm
          text={text}
          inputHandler={inputHandler}
          searchHandler={searchHandler}
          clickHandler={clickHandler}
        />

        {text && locations && showSearchOptions &&
          <SearchOptions 
            locations={locations} 
            searchOptionsHandler={searchOptionsHandler}
            fetchCurrentWeather={fetchCurrentWeather}
          />
        }
        
        {currentWeather && 
          <WeatherCard 
          currentWeather={currentWeather} 
          locationOutputData={locationOutputData}
        />
        }
      </Container>
    </div>
  );
}

export default App;