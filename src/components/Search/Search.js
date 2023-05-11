import React from 'react';
import './Search.css'
const Search = () => { 
    return (
        <div className='search-bar'>
            <form>
                <input type="text" name="search" value="" placeholder='search'/>
            </form>
        </div>
    )
}

export default Search;