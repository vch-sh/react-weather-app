import { useState } from 'react';
import InputForm from './components/InputForm';
import WeatherCard from './components/WeatherCard';
import SearchOptions from './components/SearchOptions';
import Container from './components/Container';
import './scss/App.scss';

function App() {

  const [text, setText] = useState('');
	const [locations, setLocations] = useState([]);
	const [error, setError] = useState('');

	const inputHandler = (e) => {
		setText(e.target.value);
	}
  
	const searchHandler = (e) => {
    e.preventDefault();
    
    if (text.trim().length) fetchCurrentLocation();
		// setText('');
	}

	const fetchCurrentLocation = async () => {
		try {
			const fetchDataByCityName = await fetch(`
				https://geocoding-api.open-meteo.com/v1/search?name=${text}&count=20&language=en&format=json
			`)
			const cityNameData = await fetchDataByCityName.json();
	
			setLocations(cityNameData.results);
			console.log(cityNameData.results);
		} catch (error) {
			setError(error.message);
			error && console.log(error.message);
		}
	}

  const clickHandler = (e) => {
    e.preventDefault();
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

        {text && locations && 
          <SearchOptions locations={locations} />
        }
        

        <WeatherCard />
      </Container>
    </div>
  );
}

export default App;