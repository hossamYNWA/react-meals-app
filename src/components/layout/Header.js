import { Fragment } from "react";
import classes from "./Header.module.css";
import CartBtn from "./CartBtn";
export default function Header(props) {
  return (
    <Fragment>
      <div className={classes.header}>
        <h1>Laso Meals</h1>
        <CartBtn oncrtClick={props.onBtnClick} />
      </div>
      <div className={classes["main-image"]}>
        <img
          src="https://img5.goodfon.com/wallpaper/nbig/f/b6/servirovka-stol-eda-bliuda.jpg"
          alt="food table"
        />
      </div>
    </Fragment>
  );
}
