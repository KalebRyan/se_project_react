import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtextedRoute";
import { coordinates, APIkey } from "../../utils/constants";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { addItem, getItems, deleteItem, updateUserInfo } from "../../utils/api";
import { useEscape } from "../../hooks/useEscape";
import { checkToken, getToken, signUp, signIn } from "../../utils/auth";
import EditProfileModal from "../Profile/EditProfileModal/EditProfileModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 0 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleSignUpClick = () => {
    setActiveModal("register");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleDeleteClick = () => {
    setActiveModal("confirm-delete");
  };

  const handleModalClose = () => {
    setActiveModal("");
  };

  const handleEditProfileClick = () => {
    setActiveModal("edit-profile");
  };

  const handleUpdateUser = ({ name, avatar }) => {
    updateUserInfo({ name, avatar })
      .then((userData) => {
        setCurrentUser(userData);
        handleModalClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
    setClothingItems([]);
  };

  const handleLogin = ({ email, password }) => {
    signIn({ email, password })
      .then(() => {
        return checkToken();
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        handleModalClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegistration = ({ email, password, name, avatar }) => {
    signUp({ email, password, name, avatar })
      .then(() => {
        return signIn({ email, password });
      })
      .then(() => {
        return checkToken();
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        handleModalClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEscape(activeModal, handleModalClose);

  const onAddItem = (values) => {
    setIsLoading(true);
    addItem(values)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        handleModalClose();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onDeleteItem = (id) => {
    deleteItem(id)
      .then(() => {
        const updatedItems = clothingItems.filter((item) => item._id !== id);
        setClothingItems(updatedItems);
        handleModalClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleToggleSwitchChange = () => {
    currentTempUnit === "F" ? setCurrentTempUnit("C") : setCurrentTempUnit("F");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      getItems()
        .then((items) => {
          setClothingItems(items);
        })
        .catch((error) => console.log(error));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const token = getToken();
    if (token) {
      checkToken()
        .then((userData) => {
          setIsLoggedIn(true);
          setCurrentUser(userData);
        })
        .catch(() => {
          setIsLoggedIn(false);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTempUnit, handleToggleSwitchChange }}
        >
          <div className="page__content">
            <Header
              handleSignUpClick={handleSignUpClick}
              handleLoginClick={handleLoginClick}
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              isLoggedIn={isLoggedIn}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      handleEditProfileClick={handleEditProfileClick}
                      handleSignOut={handleSignOut}
                      handleCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleAddClick={handleAddClick}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </div>
          {activeModal === "add-garment" && (
            <AddItemModal
              handleModalClose={handleModalClose}
              isOpen={activeModal === "add-garment"}
              onAddItem={onAddItem}
              isLoading={isLoading}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              activeModal={activeModal}
              card={selectedCard}
              handleModalClose={handleModalClose}
              onDeleteItem={handleDeleteClick}
            />
          )}
          {activeModal === "confirm-delete" && (
            <ConfirmDeleteModal
              activeModal={activeModal === "confirm-delete"}
              card={selectedCard}
              handleModalClose={handleModalClose}
              onDeleteItem={onDeleteItem}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              handleRegistration={handleRegistration}
              isOpen={activeModal === "register"}
              handleModalClose={handleModalClose}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              handleLogin={handleLogin}
              isOpen={activeModal === "login"}
              handleModalClose={handleModalClose}
            />
          )}
          {activeModal === "edit-profile" && (
            <EditProfileModal
              handleUpdateUser={handleUpdateUser}
              isOpen={activeModal === "edit-profile"}
              handleModalClose={handleModalClose}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
