import React, { useState} from "react";
import {
  Tab,
  CurrencyIcon,
  Counter
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientsStyles from "./BurgerIngredients.module.css";
import data from "../utils/data";

function BurgerIngredients() {
  const [current, setCurrent] = useState("one");
  //нашла все булки
  const buns = data.filter((m) => m.type === "bun");
  //нашла все соусы
  const sauces = data.filter((m) => m.type === "sauce");
  //нашла все начинки
  const fillings = data.filter((m) => m.type === "main");

  //функция отрисовки булок
  const Bun = ({ ingridient }) => {
    return (
      <div className={ingredientsStyles.ingridient__item}>
        <img src={ingridient.image} alt="фото." />
        <div className={`${ingredientsStyles.ingridient__price} pt-1 pb-1`}>
          <p className="text text_type_digits-default pr-2">{ingridient.price}</p>
          <CurrencyIcon />
        </div>
        <p className="text text_type_main-default">{ingridient.name}</p>
      </div>
    );
  };

  //функция отрисовки соусов

  const Sauce = ({ ingridient }) => {
    return (
      <div className={ingredientsStyles.ingridient__item}>
        <img src={ingridient.image} alt="фото." />
        <div className={`${ingredientsStyles.ingridient__price} pt-1 pb-1`}>
          <p className="text text_type_digits-default pr-2">{ingridient.price}</p>
          <CurrencyIcon />
        </div>
        <p className="text text_type_main-default">{ingridient.name}</p>
      </div>
    );
  };
 //функция отрисовки начинок
  const Main = ({ ingridient }) => {
    return (
      <div className={ingredientsStyles.ingridient__item}>
        <img src={ingridient.image} alt="фото." />
        <div className={`${ingredientsStyles.ingridient__price} pt-1 pb-1`}>
          <p className="text text_type_digits-default pr-2">{ingridient.price}</p>
          <CurrencyIcon />
        </div>
        <p className="text text_type_main-default">{ingridient.name}</p>
      </div>
    );
  };

  return (
    <>
      <div style={{ display: "flex" }} className="pt-5 pb-5">
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={`${ingredientsStyles.ingridient__container} pt-5`}>
        <h2 className="text text_type_main-medium pb-1">Булки</h2>
        <ul className={`${ingredientsStyles.ingridient__list} pt-5`}>
          {buns.map((ingridient) => (
            <li key={ingridient._id}>
              <Bun ingridient={ingridient} />
            </li>
          ))}
        </ul>
      <h2 className="text text_type_main-medium pb-1">Соусы</h2>
        <ul className={`${ingredientsStyles.ingridient__list} pt-5`}>
          {sauces.map((ingridient) => (
            <li key={ingridient._id}>
              <Sauce ingridient={ingridient} />
            </li>
          ))}
        </ul>
      <h2 className="text text_type_main-medium pb-1">Начинки</h2>
        <ul className={`${ingredientsStyles.ingridient__list} pt-5`}>
          {fillings.map((ingridient) => (
            <li key={ingridient._id}>
              <Main ingridient={ingridient} />
            </li>
          ))}
        </ul>
    </div>
    </>
  );
}

export default BurgerIngredients;
