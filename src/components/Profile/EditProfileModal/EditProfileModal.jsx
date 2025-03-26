import React from "react";
import ModalWithForm from "../../ModalWithForm/ModalWithForm";
import { useForm } from "../../../hooks/useForm";
import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

function EditProfileModal({ isOpen, handleModalClose, handleUpdateUser }) {
  const { currentUser } = useContext(CurrentUserContext);
  const { values, handleChange, setValues } = useForm({
    name: currentUser.name,
    avatar: currentUser.avatar,
  });

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser({
      name: values.name,
      avatar: values.avatar,
    });
  }

  return (
    <ModalWithForm
      title="Change Profile Data"
      buttonText="Save Changes"
      isOpen={isOpen}
      handleModalClose={handleModalClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name*
        <input
          className="modal__input"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
          minLength="2"
          maxLength="40"
        />
      </label>
      <label htmlFor="avatar" className="modal__label">
        Avatar
        <input
          className="modal__input"
          type="url"
          name="avatar"
          value={values.avatar}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
