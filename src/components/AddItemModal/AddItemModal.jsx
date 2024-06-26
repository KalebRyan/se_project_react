import React from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ isOpen, onAddItem, handleModalClose }) {
  const [name, setName] = React.useState("");
  const [imgUrl, setImgUrl] = React.useState("");
  const [weather, setWeather] = React.useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImgUrlChange = (e) => {
    setImgUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ name, imgUrl, weather });
  }

  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add garment"
      handleModalClose={handleModalClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          className="modal__input"
          type="text"
          placeholder="Name"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="imgUrl" className="modal__label">
        Image {""}
        <input
          className="modal__input"
          type="url"
          placeholder="Image URL"
          id="imgUrl"
          value={imgUrl}
          onChange={handleImgUrlChange}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__label">Select the weather type:</legend>
        <label className="modal__radio" htmlFor="hot">
          <input
            className="modal__radio-input"
            type="radio"
            name="type"
            value="hot"
            id="hot"
            onChange={handleWeatherChange}
          />
          <span>Hot</span>
        </label>
        <label className="modal__radio" htmlFor="warm">
          <input
            className="modal__radio-input"
            type="radio"
            name="type"
            value="warm"
            id="warm"
            onChange={handleWeatherChange}
          />
          <span>Warm</span>
        </label>
        <label className="modal__radio" htmlFor="cold">
          <input
            className="modal__radio-input"
            type="radio"
            name="type"
            value="cold"
            id="cold"
            onChange={handleWeatherChange}
          />
          <span>Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
