import Container from '@mui/material/Container';
import './App.css';
import WeatherApp from './combonents/WeatherBox';
function App() {
  // api key 2b8b8d74ab249ce45658c3305aa4c380
  // https://api.openweathermap.org/data/2.5/weather?lat=30.033333&lon=31.700001&appid=2b8b8d74ab249ce45658c3305aa4c380
  return (
    <div className="App">
      <Container sx={{height:'100vh',display: 'flex', justifyContent: 'center' , alignItems: 'center'}}  maxWidth="sm">
        <WeatherApp/>
      </Container>
    </div>
  );
}
// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
export default App;
