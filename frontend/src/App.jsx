import React, { useState } from 'react'

import Items from './pages/navbar/Items'
import Navbar from './pages/navbar/Navbar'
import Sidebar from './pages/navbar/Sidebar'
import FilterContext from './utils/FilterContext'

const App = () => {
  return (
    <FilterContext>
      <div className="relative min-h-screen w-full">
        <Navbar />
        <div className="absolute w-full">
          <Sidebar />
        </div>
        <div className="mt-10">
          <Items />
        </div>
      </div>
    </FilterContext>
  )
}

export default App
