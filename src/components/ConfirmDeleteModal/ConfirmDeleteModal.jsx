import "./ConfirmDeleteModal.css";

function ConfirmDeleteModal({ handleModalClose, onDeleteItem }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>
          Are you sure you want to delete this item? This action is
          irreversible.
        </h2>
        <button onClick={onDeleteItem}>Yes, delete item</button>
        <button onClick={handleModalClose}>Cancel</button>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
