import "./ItemModal.css";

function ItemModal({ activeModal, handleModalClose, card }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={handleModalClose}
          className="modal__close-button"
          type="button"
        ></button>
        <img src={card.link} alt="" className="modal__img" />
        <div className="modal__footer">
          <h2 className="modal__title">{card.name}</h2>
          <p className="modal__subtitle">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
