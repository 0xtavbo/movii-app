import React, {useEffect, useState} from 'react';
import { InputStyled, SearchFormStyled, IconWrapperStyled } from './SearcherStyles'
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Searcher = () => {
  const [keyword, setKeyword] = useState('');

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  }

  useEffect(() => {
    if (keyword.length > 0) navigate(`/results?keyword=${keyword}`);
  }, [keyword])

  return (
    <SearchFormStyled>
      <InputStyled 
        type='text'
        name='keyword'
        placeholder='Search movie..'
        onChange={handleSearch}
        value={keyword}
        onClick={handleSearch}
      />
      <IconWrapperStyled>
        <AiOutlineSearch className='search-icon'/>
      </IconWrapperStyled>
    </SearchFormStyled>
  )
}

export default Searcher