import "./App.css";
import HomePage from "./pages/HomePage";
// import MovieSideBar from "./pages/MovieSideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
            <Route path="/movies" exact component={HomePage} />
            {/* <Route path="/movie-sidebar/:id" exact component={MovieSideBar} /> */}
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
