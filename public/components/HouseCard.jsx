import React from 'react'
import "./HouseCard.css"
import { Link } from 'react-router-dom'


export default function HouseCard({ houses }) {
    return (
        <div className="container text-center">
            <div className="row">
                {houses.map((elemento, i) =>
                    <Link to={"/houses/" + elemento.id} key={i} className='col-lg-2 col-md-4 col-sm-10'>
                        <div className="image-container-house p-2">
                            <img src={elemento.image} />
                        </div>
                        <p className='houseName'>{elemento.name}</p>
                    </Link>
                )}
            </div>
        </div>
    )
}
