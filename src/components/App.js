import "../styles/App.css";
import LinksBar from "./LinksBar";
import NavBar from "./Header";
import MainBody from "./MainBody";

function App() {
  return (
    <div className="App">
        <NavBar />
        <MainBody/>
      <div className="linkBar">
        <LinksBar />
      </div>
    </div>
  );
}

export default App;
