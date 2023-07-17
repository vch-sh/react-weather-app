import InputForm from './components/InputForm';
import WeatherCard from './components/WeatherCard';
import Container from './components/Container';
import './scss/App.scss';

function App() {
  return (
    <div className="app">
      <Container>
        <InputForm />
        <WeatherCard />
      </Container>
    </div>
  );
}

export default App;