import React from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { useEscape } from "../../hooks/useEscape";

function AddItemModal({ isOpen, onAddItem, handleModalClose, onDeleteItem }) {
  // const [name, setName] = React.useState("");
  // const [imageUrl, setImageUrl] = React.useState("");
  // const [weather, setWeather] = React.useState("");
  const { values, handleChange, setValues } = useForm({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
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
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image {""}
        <input
          className="modal__input"
          type="url"
          placeholder="Image URL"
          id="imageUrl"
          name="imageUrl"
          value={values.imageUrl}
          onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
          <span>Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
