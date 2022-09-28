import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import p1 from "./punks/1.jpg";

function App() {
  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={"Bandana Punk"}
        traits={[{ value: 7 }]}
        image={p1}
      />
    </div>
  );
}

export default App;
