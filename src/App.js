/* import ItemCount from "./components/ItemCount"; */
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="productos destacados" />
      {/* <ItemCount stock={10} initial={1} title="Camisa Rayada" /> */}
    </div>
  );
};

export default App;
