import "./WeatherCard.css";
import sunny from "../../assets/wthr-sunny-day.png";

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">75 &deg; F</p>
      <img className="weather-card__img" src={sunny} alt="sunny day" />
    </section>
  );
}

export default WeatherCard;
