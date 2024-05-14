import axios from 'axios';
import "./SearchBar.css"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function SearchBar({ setSearch }) {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (ev) => {
        setSearchTerm(ev.target.value)
        // console.log(ev.target.value);
    }

    const handleSearchButtonClick = () => {
        setSearch(searchTerm)
    };

    return (
        <div className='searchBarParent'>
            <div>
                <input className='searchInput' type='text' placeholder='Buscar personajes y casas' value={searchTerm} onChange={handleSearchChange} />
                <Link to={`/search-results/${searchTerm}`} className="searchButton" onClick={handleSearchButtonClick} >
                    <button>Buscar</button>
                </Link>
            </div>

        </div>
    )
}
