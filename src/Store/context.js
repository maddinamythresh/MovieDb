import { createContext } from "react";

const movieContext=createContext({
    movies:[],
    trendingMovies:[],
    popularMovies:[],
    topRated:[]
});

return movieContext;
