import React from 'react'

import { useFilter } from '../../utils/FilterContext'
import products from '../../utils/data'
import Card from './Card'

const Items = () => {
  const { isOpen } = useFilter()
  const { search, category, color, priceRange } = useFilter()
  console.log(search, category, color, priceRange)

  let filterProducts = products.filter(
    (item) =>
      item.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !==
        -1 &&
      item.color.toLocaleLowerCase().indexOf(color.toLocaleLowerCase()) !==
        -1 &&
      item.category
        .toLocaleLowerCase()
        .indexOf(category.toLocaleLowerCase()) !== -1 &&
      parseInt(item.newPrice) >= parseInt(priceRange[0]) &&
      parseInt(item.newPrice) <=
        parseInt(priceRange[1] === 0 ? item.newPrice : priceRange[1])
  )
  return (
    <div
      className={`${isOpen ? 'ml-52' : ''} mt-20 grid min-h-screen grid-cols-1 gap-6 p-4 transition-all sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
    >
      {filterProducts.map((item, idx) => (
        <Card
          key={idx}
          imgSrc={item.imgSrc}
          title={item.title}
          price={item.price}
          newPrice={item.newPrice}
          rating={item.rating}
        />
      ))}
    </div>
  )
}

export default Items
