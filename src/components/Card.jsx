import React from "react";
import { Like } from "./Like";

const Card = (props) => {
  const [description, idx, heartCondition, handleHeart] = props.cardData,
    card = (
      <div key={idx} className="card__wrapper">
        <img
          className="card__image"
          src="./images/home.jpg"
          alt="Здесь будет картинка"
        />
        <div className="card__description-wrapper">
          <ul className="card__list">
            <li className="card__item">{description.name}</li>
            <li className="card__item">метро: {description.subway}</li>
            <li className="card__item">город: {description.city}</li>
            <li className="card__item">улица: {description.street}</li>
            <li className="card__item">кол-во комнат: {description.rooms}</li>
            <li className="card__item">цена: {description.price}</li>
          </ul>

          <Like
            handleHeart={handleHeart}
            name={description.name}
            condition={heartCondition}
          />
        </div>
      </div>
    );
  return card;
};

export { Card };
