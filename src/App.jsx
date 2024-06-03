import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import Player from "./pages/Player.jsx";
import Movies from "./pages/Movies.jsx";
import TVShows from "./pages/TVShows.jsx";
import UserLiked from "./pages/UserLiked.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/player" element={<Player />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/tv" element={<TVShows />} />
          <Route exact path="/mylist" element={<UserLiked />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
