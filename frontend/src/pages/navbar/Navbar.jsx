import React from 'react'

import { useFilter } from '../../utils/FilterContext'

const Navbar = () => {
  const { search, setSearch } = useFilter()
  return (
    <div className="fixed top-0 z-10 flex h-10 w-full items-center justify-between bg-purple-300">
      <div className="border border-dashed border-purple-900">Logo</div>
      <div className="flex bg-purple-400">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="px-2"
          type="text"
        />
        <button className="px-2 font-semibold">Search</button>
      </div>
    </div>
  )
}

export default Navbar
