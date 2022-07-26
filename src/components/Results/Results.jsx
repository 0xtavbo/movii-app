import React, {useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { ListContainer } from '../List/ListStyles';
import MovieCard from '../Card/MovieCard';

const Results = ({favorites}) => {
  const [searchParams, ] = useSearchParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const keyword = searchParams.get('keyword');

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=41b1193a31de706dbf8d3e652263a058&page=1&language=en-US&query=${keyword}`;
    axios.get(endPoint)
      .then(res => {
        const apiData = res.data;
        setResults(apiData.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.log('API call error, no query keyword for search');
      })
  }, [keyword])

  console.log(results);

  return (
    <>
    {isLoading && <p>Loading</p>}
    {!keyword
      ? <p>No results found</p>
      : 
      <div>
        <h2>Searching results for: {keyword}</h2>
        <h2>Results: {results.length}</h2>
        <ListContainer>
          { results.map((movie) => {
            return (<MovieCard
              isFav={false}
              fav={favorites}
              id={movie.id}
              key={movie.id}
              title={movie.title}
              img={movie.poster_path}
              rating={movie.vote_average}
              votes={movie.vote_count}
              overview={movie.overview}
              popularity={movie.popularity}
            />)})
          }
        </ListContainer>
      </div>
    }
    </>
  )
}

export default Results