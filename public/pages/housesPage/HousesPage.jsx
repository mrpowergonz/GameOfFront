import React, { useEffect, useState } from 'react'
import HouseCard from '../../components/HouseCard'
import axios from 'axios'
import SimpleBar from 'simplebar-react'
import SearchBar from '../../components/SearchBar'

export default function HousesPage() {

    const [houses, setHouses] = useState([])

    useEffect(() => {
        const getHouses = async () => {
            const { data } = await axios("http://localhost:3000/houses")
            // console.log(data);
            setHouses(data)
        }
        getHouses()
    }, [])

    console.log(houses);

    return (
        <SimpleBar style={{ maxHeight: 448, top: 80 }}>
            <div style={{ overflowX: 'hidden' }}>
                <SearchBar />
                <HouseCard houses={houses} />
            </div>
        </SimpleBar>
    )
}
