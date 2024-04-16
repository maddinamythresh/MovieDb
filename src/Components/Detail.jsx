import trending from "../util/trending";
import { movieDetail } from "../util/trending";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import image from "../assets/imdb.png";
export default function Detail() {
  const [val, setVal] = useState({
    original_title: "",
    overview: "",
    genres: [],
  });
  const { id } = useParams();
  
  useEffect(() => {
    movieDetail(String(id)).then((data) => {
      console.log(data);
      setVal(data);
    });
  }, []);

  console.log(val);

  return (
    <>
      <div className="details">
        <div className="details-image">
          <img src={`https://image.tmdb.org/t/p/w500${val.poster_path}`} />
        </div>
        <div className="description-container">
          <h1 className="title-container">{val.original_title}</h1>

          <p className="genre-container">
            Genre:
            {val.genres.map((data) => {
              return <li>{data.name}</li>;
            })}
          </p>

          <div className="overview-container">Overview: {val.overview}</div>
          <div className="rating-container">
            <h1>Rating</h1>
            <div className="rating">
              <img src={image} />
              <p>{val.vote_average} /10.0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
