import MovieCard from '../../components/MovieCard/MovieCard'

export default function MoviesListPage({ movies }) {
  return (
    <>
      <h1>Movies</h1>
      {movies.map((movie, i) => <MovieCard movie={movie} key={i} />)}
    </>
  );
}
