import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=db946c84f7b0a4d24fbc4e2ec032838e';
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
    console.log(data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1 className="main-title">Now Streaming</h1>
      {movies.map(movie => (
        <div key={movie.id} className="movie-container">
          <div className="movie-image-container">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="movie-image"/>
          <div className="title-details-container">
          <p className="movie-title">{movie.title}</p>
          <p className="movie-detail">See details</p>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
