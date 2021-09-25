import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/detail/ItemDetailContainer";
import { ItemListContainer } from "./components/categories/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import { CartListContainer } from "./components/cart/CartListContainer";
import CartContextProvider from "./context/cartContext";

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

            <Route exact path="/category/:id" component={ItemListContainer} />

            <Route exact path="/category/:category/detail/:idItem">
              <ItemDetailContainer />
            </Route>

            <Route exact path="/cart" component={CartListContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
