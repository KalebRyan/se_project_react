import React from "react";
import ItemCard from "../../ItemCard/ItemCard";
import { defaultClothingItems } from "../../../utils/constants";
import "./ClothesSection.css";

function ClothesSection({ handleCardClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header-wrapper">
        <p className="clothes-section__header">Your Items</p>
        <button className="clothes-section__add-btn">+ Add New</button>
      </div>
      <ul className="clothes-section__items">
        {defaultClothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              handleCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
