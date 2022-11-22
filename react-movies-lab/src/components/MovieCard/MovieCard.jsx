import "./MovieCard.css";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="MovieCard" style={{backgroundImage: "url(" + movie.posterPath + ")"}}>
      <Link to={"movies/" + movie.title}>
        <h2>Title: {movie.title}</h2>
        <h3>Release Date: {movie.releaseDate}</h3>
      </Link>
    </div>
  );
}