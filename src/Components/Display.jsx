import { Link } from "react-router-dom";
export default function Display({ data }) {
  const path = "https://image.tmdb.org/t/p/w500" + data.poster_path;

  return (
    <Link to={`/movies/${data.id}`} className="movies">
      <div className="car">
        <div className="card" style={{ backgroundImage: { path } }}>
          <img src={path} />
        </div>
        <div>
          <p className="titles">{data.original_title}</p>
          <p>{data.release_date.slice(0, 4)}</p>
        </div>
      </div>
    </Link>
  );
}
