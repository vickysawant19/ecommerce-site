import React, { useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { useFilter } from '../../utils/FilterContext'

const Sidebar = () => {
  const {
    isOpen,
    setIsOpen,
    setCategory,
    category,
    setPriceRange,
    priceRange,
    setColor,
    color
  } = useFilter()

  const handleChange = () => {
    setIsOpen((prev) => !prev)
  }

  const price = [
    [0, 0], // Representing 'All'
    [0, 50],
    [51, 100],
    [100, 0] // Representing '$100+'
  ]

  const colors = ['all', 'Red', 'Blue', 'Green', 'Yellow']
  const categories = ['all', 'Shoes', 'Glasses', 'Tshirt', 'Jeans']

  return (
    <div className="fixed top-10 h-screen w-full">
      <div className="flex h-10 w-full items-center bg-purple-600 p-1">
        <button
          onClick={handleChange}
          className="ml-2 rounded-full bg-purple-600 p-1 font-bold text-white"
        >
          {isOpen ? 'Close' : 'Filter⌛'}
        </button>

        {/* Category Buttons */}
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item !== 'all' ? item : '')}
            className={`ml-2 rounded-xl border p-1 px-2 text-white ${category === item ? 'bg-purple-900' : ''}`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      <div
        className={`absolute left-0 top-0 mt-10 h-screen min-w-52 bg-purple-200 transition-transform duration-300 ease-in-out ${
          !isOpen ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="p-4">
          {/* Filter Options */}
          <h3 className="mb-4 font-bold">Price Range</h3>
          {price.map(([start, end]) => (
            <label key={`${start}-${end}`} className="flex items-center">
              <input
                onChange={() => setPriceRange([start, end])}
                type="radio"
                name="price"
                className="mr-2"
                value={start}
              />
              {start === end ? 'All' : `$${start} - $${end || '+'}`}
            </label>
          ))}

          <h3 className="mb-4 mt-8 font-bold">Color</h3>
          {colors.map((item) => (
            <label key={item} className="flex items-center">
              <input
                onChange={() => setColor(item !== 'all' ? item : '')}
                type="radio"
                name="color"
                className="mr-2"
                value={item.toLowerCase()}
              />
              {item === 'all' ? 'All' : item}
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
