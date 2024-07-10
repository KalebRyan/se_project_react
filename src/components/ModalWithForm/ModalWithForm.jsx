import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  handleModalClose,
  onSubmit,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <div className="modal__content-wrapper">
          <h2 className="modal__title">{title}</h2>
          <button
            onClick={handleModalClose}
            className="modal__close"
            type="button"
          />
          <form className="modal__form" onSubmit={onSubmit}>
            {children}
            <button className="modal__submit" type="submit">
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalWithForm;
