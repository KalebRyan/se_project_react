import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">New garment</h2>
        <form className="modal__form">
          <button className="modal__close" type="button">
            CLOSE
          </button>
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
          <button className="modal__submit" type="submit">
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
