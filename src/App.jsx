import { useState } from 'react'

import 'simplebar-react/dist/simplebar.min.css';
import './App.css'
import '/node_modules/bootstrap/dist/css/bootstrap-grid.css'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import HomePage from '../public/pages/homePage/HomePage'
import CharactersPage from '../public/pages/charactersPages/CharactersPage'
import CharactersDetailsPage from '../public/pages/charactersPages/CharactersDetailsPage'
import HousesPage from '../public/pages/housesPage/HousesPage'
import CronologyPage from '../public/pages/cronology/CronologyPage'
import NavBar from '../public/components/NavBar'
import HousedetailPage from '../public/pages/housesPage/HousedetailPage'
import SearchPage from '../public/pages/SearchPage/SearchPage';


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/characters' element={<CharactersPage />} />
          <Route path='/characters/:id' element={<CharactersDetailsPage />} />
          <Route path='/houses' element={<HousesPage />} />
          <Route path='/houses/:id' element={<HousedetailPage />} />
          <Route path='/cronology' element={<CronologyPage />} />
          <Route path='/search-results/:search' element={<SearchPage />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  )
}

export default App
