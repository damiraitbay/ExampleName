import React, { useState } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    setPage('list');
  };

  return (
    <div className="app-container">
      <h1 className="app-title">🎬 Movie Manager</h1>
      {page === 'home' ? (
        <div className="button-group">
          <button className="btn blue" onClick={() => setPage('list')}>
            📋 Список фильмов
          </button>
          <button className="btn green" onClick={() => setPage('add')}>
            ➕ Добавить фильм
          </button>
        </div>
      ) : page === 'add' ? (
        <MovieForm onAddMovie={addMovie} onCancel={() => setPage('home')} />
      ) : (
        <MovieList movies={movies} onBack={() => setPage('home')} />
      )}
    </div>
  );
}
