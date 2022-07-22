import React, {useEffect, useState} from 'react';
import { InputStyled, SearchFormStyled, IconWrapperStyled } from './SearcherStyles'
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


const Searcher = () => {
  const [keyword, setKeyword] = useState('');

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.trim());
  }

  useEffect(() => {
    navigate(`/results?keyword=${keyword}`)
  }, [keyword])

  return (
    <SearchFormStyled>
      <InputStyled 
        type='text'
        name='searcher'
        placeholder='Search movie..'
        onChange={handleSearch}
        value={keyword || ""}
      />
      <IconWrapperStyled>
        <AiOutlineSearch className='search-icon'/>
      </IconWrapperStyled>
    </SearchFormStyled>
  )
}

export default Searcher