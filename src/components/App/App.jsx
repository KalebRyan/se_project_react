import { useEffect, useState } from "react";

import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 0 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleModalClose = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>
      <ModalWithForm
        title="New Garment"
        buttonText="Add garment"
        activeModal={activeModal}
        handleModalClose={handleModalClose}
      >
        <label htmlFor="name" className="modal__label">
          Name
          <input
            className="modal__input"
            type="text"
            placeholder="Name"
            id="name"
          />
        </label>
        <label htmlFor="imgUrl" className="modal__label">
          Image {""}
          <input
            className="modal__input"
            type="url"
            placeholder="Image URL"
            id="imeUrl"
          />
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__label">Select the weather type:</legend>
          <label htmlFor="hot">
            <input
              className="modal__radio"
              type="radio"
              name="type"
              value="hot"
              id="hot"
            />
            Hot
          </label>
          <label htmlFor="warm">
            <input
              className="modal__radio"
              type="radio"
              name="type"
              value="warm"
              id="warm"
            />
            Warm
          </label>
          <label htmlFor="cold">
            <input
              className="modal__radio"
              type="radio"
              name="type"
              value="cold"
              id="cold"
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        handleModalClose={handleModalClose}
      />
    </div>
  );
}

export default App;
