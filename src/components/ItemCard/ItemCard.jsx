import "./ItemCard.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import likedbtn from "../../assets/liked-btn.svg";
import unlikedbtn from "../../assets/unliked-btn.svg";

function ItemCard({ item, handleCardClick, handleCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);
  const isLiked = currentUser
    ? item.likes.some((id) => id === currentUser._id)
    : false;

  const onCardClick = () => {
    handleCardClick(item);
  };

  const handleLike = () => {
    handleCardLike({ id: item._id, isLiked });
  };

  return (
    <li className="card">
      <div className="card__info-wrapper">
        <h2 className="card__name">{item.name}</h2>
        {currentUser && (
          <button onClick={handleLike} className="card__like-btn">
            <img src={isLiked ? likedbtn : unlikedbtn} alt="like" />
          </button>
        )}
      </div>
      <img
        onClick={onCardClick}
        src={item.imageUrl}
        alt={item.name}
        className="card__img"
      />
    </li>
  );
}

export default ItemCard;
