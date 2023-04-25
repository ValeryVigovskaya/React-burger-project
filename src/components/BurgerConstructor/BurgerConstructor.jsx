import {
  DragIcon, CurrencyIcon, ConstructorElement, Button, DeleteIcon
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import burgerStyles from './BurgerConstructor.module.css'; 
  
  const BurgerIngredient = ({data}) => {
      return (
        <div>
          {data.type !== "bun"}
          <DragIcon type="primary"/> 
          <ConstructorElement
          text={data.name}
          price={data.price}
          thumbnail={data.image_mobile}
          className={burgerStyles.ingridient__container}
        />
       </div>
      )
    }

  function BurgerConstructor({data}) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {data.map((ingridient) => (
              <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={ingridient.image_mobile}
          key={ingridient._id}
        />
          ))}
        <ul className={`${burgerStyles.ingridient__list} pt-5`}>
        {data.map((ingridient) => (
            <li key={ingridient._id}>
              <BurgerIngredient ingridient={ingridient} />
            </li>
          ))}
        </ul>
        {data.map((ingridient) => (
              <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (низ)"
              price={200}
              thumbnail={ingridient.image_mobile}
            />
          ))}

        <Button htmlType="button" type="primary" size="large">
  Оформить заказ
</Button>
      </div>
    )
  }
  
  export default BurgerConstructor;