import React from 'react'
import Apartments from './components/Apartments'
import Filters from './components/Filters'
import Nav from './components/Nav'

export default function App() {
  return (
    <div>
      <Nav />
      <Filters />
      <Apartments />
    </div>
  )
}
