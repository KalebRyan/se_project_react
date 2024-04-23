import "./WeatherCard.css";
import sunny from "../../assets/wthr-sunny-day.png";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
      <img className="weather-card__img" src={sunny} alt="sunny day" />
    </section>
  );
}

export default WeatherCard;
