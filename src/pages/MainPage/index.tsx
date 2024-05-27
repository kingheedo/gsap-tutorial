import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <>
    <Link to={'/move-box-right'}>MoveBoxRight</Link>
    <Link to={'/start-and-end'}>StartAndEnd</Link>
    <Link to={'/toggle-actions'}>ToggleActions</Link>
    <Link to={'/scrub'}>Scrub</Link>
    <Link to={'/pin'}>Pin</Link>
    <Link to={'/timeline'}>Timeline</Link>
    </>
  )
}

export default MainPage