import { Heading } from "@chakra-ui/layout";
import "./App.css";
import LinksBar from "./components/LinksBar";

function App() {
  return (
    <div className="App">
      <Heading as="h2" size="3xl">
        Work in progress :)
      </Heading>
      <div className="linkBar">
        <LinksBar />
      </div>
    </div>
  );
}

export default App;
