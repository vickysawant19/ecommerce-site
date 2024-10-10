import { createContext, useContext, useState } from 'react'
import React from 'react'

// Context should use PascalCase
let IsFilterOpen = createContext()

const FilterContext = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [priceRange, setPriceRange] = useState([0, 0])
  const [color, setColor] = useState('')

  const filter = {
    isOpen,
    setIsOpen,
    search,
    setSearch,
    category,
    setCategory,
    priceRange,
    setPriceRange,
    color,
    setColor
  }
  return (
    <IsFilterOpen.Provider value={filter}>{children}</IsFilterOpen.Provider>
  )
}

export const useFilter = () => {
  return useContext(IsFilterOpen)
}

export default FilterContext
