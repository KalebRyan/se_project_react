function ItemCard({ item }) {
  return (
    <li className="cards__item">
      <h2 className="cards__name">{item.name}</h2>
      <img src={item.link} alt={item.name} className="cards__img" />
    </li>
  );
}

export default ItemCard;
