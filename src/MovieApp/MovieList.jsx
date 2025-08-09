import React from 'react';
import './App.css';

export default function MovieList({ movies, onBack }) {
  return (
    <div className="list-container">
      <h2>📋 Список фильмов</h2>
      <button className="btn blue back-btn" onClick={onBack}>⬅️ Назад</button>
      <div className="movie-grid">
        {movies.length === 0 ? (
          <p className="empty">Нет добавленных фильмов.</p>
        ) : (
          movies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p><strong>Дата:</strong> {movie.releaseDate}</p>
              <p><strong>Жанр:</strong> {movie.genre}</p>
              <p><strong>Актеры:</strong> {movie.actors}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
