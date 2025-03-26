import { baseUrl, verifyResponse } from "./api";

function signUp({ name, avatar, email, password }) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(verifyResponse);
}

function signIn({ email, password }) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(verifyResponse)
    .then((data) => {
      if (data.token) {
        setToken(data.token);
      }
      return data;
    });
}

function setToken(token) {
  localStorage.setItem("jwt", token);
}

function getToken() {
  const token = localStorage.getItem("jwt");

  if (!token) {
    return null;
  }
  return token;
}

function checkToken() {
  const token = getToken();

  if (!token) {
    return Promise.reject("No token");
  }

  return fetch(`${baseUrl}/users/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(verifyResponse);
}

export { signUp, signIn, setToken, getToken, checkToken };
