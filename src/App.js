import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/detail/ItemDetailContainer";
import { ItemListContainer } from "./components/categories/ItemListContainer";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  return (
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
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
