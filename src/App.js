import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/testfolder/Home";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Navigation from "./components/Navigation";
import ApiList from "./components/apifetchmoviefile/ApiList";
import ApiMovieDetails from "./components/apifetchmoviefile/ApiMovieDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/movielist" element={<MovieList />}></Route>
          <Route exact path="/apilist" element={<ApiList />}></Route>
          <Route
            exact
            path="/apimoviedetail/:id"
            element={<ApiMovieDetails />}
          ></Route>
          <Route
            exact
            path="/moviedetail/:id"
            element={<MovieDetail />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
