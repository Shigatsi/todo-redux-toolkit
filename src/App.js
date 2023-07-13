import "./styles.css";
import Header from "./components/Header/Header";
import AddItem from "./components/AddItem/AddItem";
import ItemList from "./components/ItemList/ItemList";

export default function App() {
  return (
    <div className="App">
      <Header />
      <AddItem />
      <ItemList />
    </div>
  );
}
