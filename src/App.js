import { ItemDetailContainer } from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="productos destacados" />
      <ItemDetailContainer id={1} />
    </div>
  );
};

export default App;
