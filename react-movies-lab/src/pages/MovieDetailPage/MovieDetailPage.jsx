import {useParams, Link} from "react-router-dom";

export default function MovieDetailPage({ movies }) {
  const { movieName } = useParams();
  const movie = movies.filter(function(el) {
    return el.title === movieName;
  })[0];
  return (
    <>
      <p><Link to="/">back to movies</Link></p>
      <h1>{movie.title}</h1>
      <h3>Release Date: {movie.releaseDate}</h3>
      <img src={movie.posterPath}></img>
      <h3>Cast:</h3>
      {movie.cast.map((actor, idx) => (
        <h4>{idx+1}. {actor}</h4>
      ))}
    </>
  );
}
