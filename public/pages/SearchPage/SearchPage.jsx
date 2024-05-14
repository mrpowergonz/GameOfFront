import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../../components/SearchBar';



export default function SearchPage() {


    const location = useLocation()
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [character, setCharacter] = useState([]);
    const [filteredHouses, setFilteredHouses] = useState([]);
    const [house, setHouse] = useState([]);
    const [searchTerm, setSearchTerm] = useState(location.pathname.split('search-results/').pop());
    console.log(searchTerm);
    const [searchStarted, setSearchStarted] = useState(false);



    useEffect(() => {
        const getCharacter = async () => {
            const { data } = await axios("http://localhost:3000/characters/");
            setCharacter(data);
        }
        getCharacter();
    }, []);

    useEffect(() => {
        const getHouse = async () => {
            const { data } = await axios("http://localhost:3000/houses/");
            setHouse(data);
        }
        getHouse();

    }, []);

    useEffect(() => {
        const getFilteredSearch = async () => {
            const filtered = character.filter(char => {
                const charName = char.name.toLowerCase();
                const searchTermLowerCase = searchTerm.toLowerCase();
                if (charName.includes(searchTermLowerCase)) {
                    return true;
                }
                return false;
            });
            setFilteredCharacters(filtered)

        }
        getFilteredSearch()
    }, [searchTerm, character]);



    useEffect(() => {
        const getFilteredSearchHouse = async () => {

            const filteredCasas = house.filter(hou => {
                const housName = hou.name.toLowerCase();
                const searchTermLowerCase = searchTerm.toLowerCase();
                if (housName.includes(searchTermLowerCase)) {

                    return true;
                }
                return false;
            });
            setFilteredHouses(filteredCasas)

        }
        getFilteredSearchHouse()
    }, [character, searchTerm]);


    return (
        <div>
            <SearchBar setSearch={setSearchTerm} />
            <div className='container text-center'>
                <div className='row'>
                    <h3>Characters</h3>
                    {filteredCharacters.map((elemento, i) => <div className='col-lg-2 col-md-4 col-sm-10'>
                        <div className="image-container-character p-2">
                            <img src={elemento.image} />
                            <p className='characterName'>{elemento.name}</p>
                        </div>
                    </div>,
                    )}
                </div>
                <div className='row'>
                    <h3>Houses</h3>
                    {filteredHouses.map((elemento, i) => <div className='col-lg-2 col-md-4 col-sm-10'>
                        <div className="image-container-character p-2">
                            <img src={elemento.image} />
                            <p className='characterName'>{elemento.name}</p>
                        </div>
                    </div>,
                    )}
                </div>
            </div>
        </div>
    )

}
