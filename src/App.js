import "./App.css";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
// redux things
import { createStore } from "redux";
// react-redux - Provider - wraps app , connect - used in  components
import { Provider } from "react-redux";
import reducer from "./store/reducer/reducer";

// intial store which is the state
const initialStore = {
  movies: ["Anaconda", "Barbie"],
};

// store
const store = createStore(reducer, initialStore);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            {/* <HomePage /> */}
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
