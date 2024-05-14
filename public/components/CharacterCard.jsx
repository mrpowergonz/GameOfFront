import React from 'react'
import "./CharacterCard.css"
import { Link } from 'react-router-dom'

export default function CharacterCard({ characters }) {
    return (
        <div className="container text-center">
            <div className='row'>
                {characters.map((elemento, i) =>
                    <Link to={"/characters/" + elemento.id} key={i} className='col-lg-2 col-md-4 col-sm-10' >
                        <div className="image-container-character p-2">
                            <img src={elemento.image} />
                            <p className='characterName'>{elemento.name}</p>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}
