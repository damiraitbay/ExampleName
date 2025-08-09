import React, { useState } from 'react';
import './App.css';

export default function MovieForm({ onAddMovie, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    releaseDate: '',
    actors: '',
    genre: '',
    poster: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Добавить фильм</h2>
      <label>Название фильма</label>
      <input type="text" name="title" value={formData.title} onChange={handleChange} required />

      <label>Дата выхода</label>
      <input type="text" name="releaseDate" value={formData.releaseDate} onChange={handleChange} required />

      <label>Актеры</label>
      <input type="text" name="actors" value={formData.actors} onChange={handleChange} required />

      <label>Жанр</label>
      <input type="text" name="genre" value={formData.genre} onChange={handleChange} required />

      <label>Ссылка на постер</label>
      <input type="text" name="poster" value={formData.poster} onChange={handleChange} required />

      <div className="form-buttons">
        <button type="submit" className="btn green">Добавить</button>
        <button type="button" className="btn gray" onClick={onCancel}>Назад</button>
      </div>
    </form>
  );
}
