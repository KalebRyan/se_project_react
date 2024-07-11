import "./ConfirmDeleteModal.css";

function ConfirmDeleteModal({ handleModalClose, onDeleteItem, activeModal }) {
  return (
    <div className={`modal ${activeModal && "modal_opened"}`}>
      <div className="modal-delete__content">
        <div className="modal-delete__content-wrapper">
          <button
            onClick={handleModalClose}
            className="modal__close"
            type="button"
          />
          <h2 className="modal-delete__header">
            Are you sure you want to delete this item?
            <br />
            This action is irreversible.
          </h2>
          <button className="modal__delete-confirm" onClick={onDeleteItem}>
            Yes, delete item
          </button>
          <button className="modal__delete-cancel" onClick={handleModalClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
