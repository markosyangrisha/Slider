import React, { useState } from "react";
import { SlBasketLoaded } from "react-icons/sl";
import "./Header.css";
import NewDataArrey from "../NewDataArrey/NewDataArrye";

const showNewData = (newDataArrey, onDelete) => {
  let sum = 0;
  newDataArrey.forEach((el) => (sum += el.price));

  return (
    <div className="add_product">
      {newDataArrey.map((el) => (
        <NewDataArrey key={el.id} item={el} onDelete={onDelete} />
      ))}
      <p className="sum">
        <b>price:</b> {new Intl.NumberFormat().format(sum)}
      </p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>no products </h2>
    </div>
  );
};

const Header = ({ newDataArrey, onDelete }) => {
  let [cardOpen, setCardOpen] = useState(false);

  const cardClick = () => {
    setCardOpen((!cardOpen));
  };

  return (
    <header>
      <div className="header-nav">
        <span className="logo">house staff</span>
        <ul className="nav-list">
          {/* <SlBasketLoaded className={`shope-icon ${cardOpen && 'active'}`} onClick={() => setCardOpen(cardOpen = !cardOpen)} /> */}
          <SlBasketLoaded
            className={`shope-icon ${cardOpen && "active"}`}
            onClick={cardClick}
          />
          <li>about</li>
          <li>concat</li>
          <li>prices</li>
          {cardOpen && (
            <div className="shope-carde">
              {newDataArrey.length > 0
                ? showNewData(newDataArrey, onDelete)
                : showNothing()}
            </div>
          )}
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;
