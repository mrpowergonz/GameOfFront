import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CharacterCard from '../../components/CharacterCard'
import SimpleBar from 'simplebar-react'
import SearchBar from '../../components/SearchBar'

export default function CharactersPage() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const getCharacters = async () => {
            const { data } = await axios("http://localhost:3000/characters")
            // console.log(data);
            setCharacters(data)
        }
        getCharacters()
    }, [])
    // console.log(characters);


    return (
        <>
            <SimpleBar style={{ maxHeight: 448, top: 80 }}>
                <div style={{ overflowX: 'hidden' }}>
                    {/* <Buscador /> */}
                    <SearchBar />
                    <CharacterCard characters={characters} />
                </div>
            </SimpleBar>
        </>
    )

}
