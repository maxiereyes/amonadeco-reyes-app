import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/detail/ItemDetailContainer";
import { ItemListContainer } from "./components/categories/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import { CartListContainer } from "./components/cart/CartListContainer";
import CartContextProvider from "./context/cartContext";
import { Footer } from "./components/footer/Footer";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer greeting="productos destacados" />
            </Route>

            <Route exact path="/categoria/:id" component={ItemListContainer} />

            <Route exact path="/detail/:idItem">
              <ItemDetailContainer />
            </Route>

            <Route exact path="/cart" component={CartListContainer} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
