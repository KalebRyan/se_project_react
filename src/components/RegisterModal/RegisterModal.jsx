import React from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

function RegisterModal({ isOpen, onRegister, handleModalClose }) {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values);
  }

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
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
      <label htmlFor="email" className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="avatar" className="modal__label">
        Avatar
        <input
          className="modal__input"
          type="url"
          placeholder="Avatar URL"
          id="avatar"
          name="avatar"
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
