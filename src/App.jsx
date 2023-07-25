import { useEffect, useState } from 'react';
import InputForm from './components/InputForm';
import WeatherCard from './components/WeatherCard';
import SearchOptions from './components/SearchOptions';
import MoreDetails from './components/MoreDetails';
import Container from './components/Container';
import './scss/App.scss';

function App() {
  const [text, setText] = useState('');
	const [locations, setLocations] = useState([]);
  const [locationOutputData, setLocationOutputData] = useState({});
	const [error, setError] = useState('');
  const [coordinates, setCoordinates] = useState({ latitude: '', longitude: '' });
  // const [currentTemperature, setCurrentWearher] = useState();
  const [showSearchOptions, setShowSearchOptions] = useState(true);
  const [showWeatherCard, setShowWeatherCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tempUnits, setTempUnits] = useState('celsius');
  const [hourly, setHourly] = useState();
  const [showDetails, setShowDetails] = useState(false);

	const inputHandler = (e) => {
		setText(e.target.value);
	}
  
	const searchHandler = (e) => {
    e.preventDefault();
    
    if (text.trim().length) {
      fetchLocation();
      setShowSearchOptions(true);
      setShowDetails(false);
    }
	}

	const fetchLocation = async () => {
		try {
      setIsLoading(true);
      setShowWeatherCard(false);
			const fetchDataByCityName = await fetch(`
				https://geocoding-api.open-meteo.com/v1/search?name=${text}&count=50&language=en&format=json
			`)
			const cityNameData = await fetchDataByCityName.json();
	
			setLocations(cityNameData.results);
      setIsLoading(false);
		} catch (error) {
			setError(error.message);
      setIsLoading(false);
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

  const fetchDetails = async () => {
    try {
      const fetchDetailsData = await fetch(`
        https://api.open-meteo.com/v1/forecast?latitude=${coordinates?.latitude}&longitude=${coordinates?.longitude}&hourly=temperature_2m,relativehumidity_2m,pressure_msl,cloudcover,windspeed_10m,rain,snowfall&timezone=GMT&temperature_unit=${tempUnits}
      `);
      const hourlyData = await fetchDetailsData.json();
      setHourly(hourlyData);
    } catch (error) {
      setError(error.message);
      error && console.log(error.message);
    }
  }

  const clickHandler = async (e) => {
    e.preventDefault();
    setShowSearchOptions(true);
    setLocations([]);
    fetchDetails();
    setShowWeatherCard(true);
  }

  const showDetailsHandler = () => {
    setShowDetails(true);
  }

  return (
    <div className="app">
      <Container>
        <InputForm
          text={text}
          inputHandler={inputHandler}
          searchHandler={searchHandler}
          clickHandler={clickHandler}
          showSearchOptions={showSearchOptions}
          isLoading={isLoading}
          tempUnits={tempUnits}
          setTempUnits={setTempUnits}
          setShowWeatherCard={setShowWeatherCard}
          setShowDetails={setShowDetails}
        />

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
        />
        }

        {showDetails && 
          <MoreDetails
            hourly={hourly}
            tempUnits={tempUnits}
          />
        }
      </Container>
    </div>
  );
}

export default App;