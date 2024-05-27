import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MoveBoxRight from '../../pages/MoveBoxRight'
import MainPage from '../../pages/MainPage'
import StartAndEnd from '../../pages/StartAndEnd'
import ToggleActions from '../../pages/ToggleActions'
import Scrub from '../../pages/Scrub'
import Pin from '../../pages/Pin'
import Timeline from '../../pages/Timeline'

const RootRoutes = () => {
  return (
    <Routes>
        <Route path="/" index element={<MainPage />} />
        <Route path="/move-box-right" element={<MoveBoxRight />} />
        <Route path="/start-and-end" element={<StartAndEnd />} />
        <Route path="/toggle-actions" element={<ToggleActions />} />
        <Route path="/scrub" element={<Scrub />} />
        <Route path="/pin" element={<Pin />} />
        <Route path="/timeline" element={<Timeline />} />
    </Routes>
  )
}

export default RootRoutes