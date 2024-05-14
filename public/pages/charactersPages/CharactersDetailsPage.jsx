import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./CharactersDetailsPage.css"
import SimpleBar from 'simplebar-react'

export default function CharactersDetailsPage() {
    const { id } = useParams()

    const [house, setHouse] = useState([])
    const [character, setCharacter] = useState([])

    useEffect(() => {
        const getCharacter = async () => {
            const { data } = await axios("http://localhost:3000/characters/" + id)
            
            setCharacter(data)
        }
        getCharacter()
    }, [])

    useEffect(() => {
        const getHouse = async () => {
            const { data } = await axios("http://localhost:3000/houses/" + id)
            
            setHouse(data)
        }
        getHouse()
    }, [])



    return (

        <div className='containerCharacters'>
            <div className='row mb-5 mt-5'>
                <div className='col-3 characterImgDetails'>
                    <img src={character.image} />
                    <p>{character.name}</p>
                </div>
            </div>
            <div className='row detailsContainer'>
                <div className='col-xxl-2 col-md-4 col-sm-10 detailsCharacter'>
                    <h2>CASA</h2>
                    <img src={house.image} />
                </div>
                <div className='col-xxl-2 col-md-4 col-sm-10 detailsCharacter'>
                    <h2>ALIANZAS</h2>
                    <p>{character.alliances}</p>
                </div>
                <div className='col-xxl-2 col-md-4 col-sm-10 detailsCharacter'>
                    <h2>APARICIONES</h2>
                    <SimpleBar style={{ maxHeight: 80 }}>
                        <p>{character.episodes}</p>
                    </SimpleBar>
                </div>
                <div className='col-xxl-2 col-md-4 col-sm-10 detailsCharacter'>
                    <h2>PADRE</h2>
                    <p>{character.parents}</p>
                </div>
                <div className='col-xxl-2 col-md-4 col-sm-10 detailsCharacter'>
                    <h2>DESCENDIENTES</h2>
                    <p>{character.siblings}</p>
                </div>
                <div className='col-xxl-2 col-md-4 col-sm-10 detailsCharacter'>
                    <h2>TITULOS</h2>
                    <SimpleBar style={{ maxHeight: 80, top: 12 }}>
                        <p>{character.titles}</p>
                    </SimpleBar>
                </div>
            </div>
        </div>
    )
}
