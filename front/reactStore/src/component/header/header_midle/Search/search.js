import React from 'react';
import style from './search.module.css'

function Search() {
  return (
    <>
        
        <div className={style.search}> 
          <input  className={style.searchInput} type='text' name='search' placeholder="Search.."></input>
          <button className={style.searchBtn}>Search</button>
        </div>
    </>
  );
}

export default Search;