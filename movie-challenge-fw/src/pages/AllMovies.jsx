import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import GenreDropdown from '../components/GenreDropdown/GenreDropdown';

const apiKey = 'db946c84f7b0a4d24fbc4e2ec032838e';

function AllMovies() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${currentPage}`;
        if (searchQuery) {
          url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&page=${currentPage}`;
        } else if (selectedGenre) { // If a genre is selected, fetch movies by genre
          url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${selectedGenre}&page=${currentPage}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          if (currentPage === 1) {
            setMovies(data.results);
          } else {
            setMovies(prevMovies => [...prevMovies, ...data.results]);
          }
          setCurrentPage(prevPage => prevPage + 1);
        } else {
          console.error('Error fetching movies');
        }
      } catch (error) {
        console.error('Error fetching movies', error);
      }
    };

    fetchMovies();
  }, [currentPage, searchQuery, selectedGenre]);

  const handleSearch = (query) => {
    // Clear existing movies when starting a new search
    setCurrentPage(1);
    // Update the searchQuery state when the search button is clicked
    setSearchQuery(query);
    // Clear selected genre when starting a new search
    setSelectedGenre('');
  };

  const handleSelectGenre = (genre) => {
    setCurrentPage(1);
    setSelectedGenre(genre.id); // Store the selected genre ID
    setSearchQuery(''); // Clear search query when selecting a genre
  };

  const extractYearFromReleaseDate = (releaseDate) => {
    const date = new Date(releaseDate);
    return date.getFullYear();
  };

  return (
    <div>
    <h1 className="main-title">All Movies</h1>
    <SearchBar onSearch={handleSearch} apiKey={apiKey}/>
    <GenreDropdown onSelectGenre={handleSelectGenre} /> 
    {movies.map((movie, index) => (
      <div key={`${movie.id}-${index}`} className="movie-container">
        <div className="movie-image-container">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="movie-image" />
          <div className="title-details-container">
            <p className="movie-title">{movie.title} ({extractYearFromReleaseDate(movie.release_date)})</p>
            <p className="movie-detail">See details</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
}

export default AllMovies;