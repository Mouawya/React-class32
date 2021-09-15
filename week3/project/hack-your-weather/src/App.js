import "./App.css";
import Search from "./components/search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CityChart from "./components/CityChart";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/:cityName" component={CityChart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
