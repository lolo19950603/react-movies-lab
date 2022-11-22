import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';

// components
import NavBar from '../../components/NavBar/NavBar';

// data
import {movies} from "../../data"

export default function App() {

  const [user, setUser] = useState(null)

  return (
    <main className="App">
      { user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<MoviesListPage />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
        :
        <LoginPage setUser={setUser} />
      }
    </main>
  );
}