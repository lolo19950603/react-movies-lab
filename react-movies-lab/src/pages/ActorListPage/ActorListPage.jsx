import ActorCard from '../../components/ActorCard/ActorCard'

export default function ActorsListPage({ movies }) {
  const actors = [];
  movies.forEach(function (movie, index) {
    movie.cast.forEach(function (actor, index) {
      if (!actors.includes(actor)) {
        actors.push(actor);
      }
    });
  });
  return (
    <div>
      <h1>Actors</h1>
      {actors.map((actor, idx) => <ActorCard actor={actor} idx={idx}/>)}
    </div>
  );
}
