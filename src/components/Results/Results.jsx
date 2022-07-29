import React, {useState, useEffect} from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ListContainer } from '../List/ListStyles';
import MovieCard from '../Card/MovieCard';
import useAxiosSearch from '../../hooks/useAxiosSearch';

const Results = ({handleFavorite, favorites}) => {
  const [searchParams, ] = useSearchParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const keyword = searchParams.get('keyword');
  const { searchMovie } = useAxiosSearch();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if(!token) navigate('/login');
  }, [])

  useEffect(() => {
    const [error, pageNumber, searchResults, loading] = searchMovie(keyword);

    if (searchResults) {
      setResults(searchResults);
      setIsLoading(loading);
    } 
  }, [keyword])
  
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
              favorites={favorites}
              isFavorite={false}
              handleFavorite={handleFavorite}
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