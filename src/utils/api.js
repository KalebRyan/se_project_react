import { getToken } from "./auth";

const baseUrl = "http://localhost:3001";

function verifyResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(verifyResponse);
}

function addItem({ name, imageUrl, weather }) {
  const token = getToken();

  if (!token) {
    return Promise.reject({
      error: "You must be logged in to add items",
    });
  }

  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(verifyResponse);
}

function deleteItem(id) {
  const token = getToken();

  if (!token) {
    return Promise.reject({
      error: "You must be logged in to delete items",
    });
  }

  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(verifyResponse);
}

function updateUserInfo({ name, avatar }) {
  const token = getToken();

  if (!token) {
    return Promise.reject({
      error: "You must be logged in to update your profile",
    });
  }

  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar }),
  }).then(verifyResponse);
}

export {
  getItems,
  addItem,
  deleteItem,
  verifyResponse,
  updateUserInfo,
  baseUrl,
};
