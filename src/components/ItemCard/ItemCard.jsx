import "./ItemCard.css";
// import { useEscape } from "../../hooks/useEscape";

function ItemCard({ item, handleCardClick }) {
  const onCardClick = () => {
    handleCardClick(item);
  };

  // useEscape(closeModal);

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
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
