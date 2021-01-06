import "./App.css";
import logo from "./logo.png";
import CharacterList from "./components/CharacterList";
import { Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} />
      </div>
      <div>
        <Link to="/character">
          <a>Characters</a>
        </Link>
      </div>
      <Route path="/character" component={CharacterList} />
    </div>
  );
}

export default App;
