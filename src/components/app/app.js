import appStyles from './app.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import data from "../utils/data";


function App() {
  return <div className={appStyles.app}>
    <AppHeader />
    <main className={`${appStyles.main} pl-5`}>
      <section className={appStyles.ingredients}>
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <BurgerIngredients ingredient={data}/>
      </section>
      <section className={appStyles.burger__constructor}>
       <BurgerConstructor ingridient={data}/> 
      </section>
    </main>
  </div>
}

export default App;