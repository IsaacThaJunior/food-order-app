import React from 'react';

import mealImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Isaac's Meal</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealImage} alt="A table of delicious meals" />
      </div>
    </>
  );
};

export default Header;
