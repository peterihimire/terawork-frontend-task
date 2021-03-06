import "./App.css";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MovieDetails from "./pages/MovieDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// redux things
// import { createStore } from "redux";
// react-redux - Provider - wraps app , connect - used in  components
// import { Provider } from "react-redux";
// import reducer from "./redux/reducers/movieReducer";
// import store from './redux/store'

// // intial store which is the state
// const initialStore = {
//   movies: ["Anaconda", "Barbie"],
// };

// // store
// const store = createStore(reducer, initialStore);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" component={SearchPage} />
          <Route path="/movie-details/:movieId" component={MovieDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
