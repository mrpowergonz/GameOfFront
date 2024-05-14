import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./HouseDetailPage.css"
import SimpleBar from 'simplebar-react'

export default function HousedetailPage() {
    const { id } = useParams()
    const [house, setHouse] = useState([])

    useEffect(() => {
        const getHouse = async () => {
            const { data } = await axios("http://localhost:3000/houses/" + id)
            // console.log(data);
            setHouse(data)
        }
        getHouse()
    }, [])
    return (
        <SimpleBar style={{
            maxHeight: 448, top: 80

        }}>
            <div className='containerHouse'>
                <div className='row mb-5 mt-5'>
                    <div className='col-3 houseImgDetails'>
                        <img src={house.image} />
                        <p>House {house.name}</p>
                    </div>
                </div>
                <div>
                    <div className='row containerDetails'>
                        <div className='col-lg-2 col-md-4 col-sm-10 houseDetails'>
                            <h2>LEMA</h2>
                            <p>{house.motto}</p>
                        </div>
                        <div className='col-lg-2 col-md-4 col-sm-10 houseDetails'>
                            <h2>SEDE</h2>
                            <p>{house.settlement}</p>
                        </div>
                        <div className='col-lg-2 col-md-4 col-sm-10 houseDetails'>
                            <h2>REGION</h2>
                            <p>{house.region}</p>
                        </div>
                        <div className='col-lg-2 col-md-4 col-sm-10 houseDetails'>
                            <h2>ALIANZAS</h2>
                            <p>{house.alliances}</p>
                        </div>
                        <div className='col-lg-2 col-md-4 col-sm-10 houseDetails'>
                            <h2>RELIGIONES</h2>
                            <p>{house.religions}</p>
                        </div>
                        <div className='col-lg-2 col-md-4 col-sm-10 houseDetails'>
                            <h2>FUNDACION</h2>
                            <p>{house.foundation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </SimpleBar>
    )
}
