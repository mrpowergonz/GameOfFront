import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CronologyCard from './CronologyCard'
import SimpleBar from 'simplebar-react'

export default function CronologyPage() {

    const [characters, setCharacters] = useState([])
    useEffect(() => {
        const getOrdenedCharacters = async () => {
            const response = await axios.get("http://localhost:3000/characters");
            const charactersData = response.data;
            
            charactersData.sort((a, b) => a.age - b.age);
            setCharacters(charactersData);
            
        }
        getOrdenedCharacters()
    }, [])

    return (
        <SimpleBar style={{ maxHeight: 678, top: 80 }}>
            <div className='barra'></div>
            <div className='encabezadoDiv'><h1 className='encabezado'>0</h1></div>
            <div>
                <CronologyCard characters={characters} />
            </div>
        </SimpleBar>
    )
}
