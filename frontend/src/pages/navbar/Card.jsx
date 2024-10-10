import React from 'react'

const Card = ({ imgSrc, title, price, newPrice, rating }) => {
  return (
    <div className="m-2 flex max-h-80 flex-col rounded-xl border bg-white p-4 shadow-md transition-all hover:shadow-xl">
      <img
        src={imgSrc}
        alt={title}
        className="h-40 w-full rounded-xl object-cover"
      />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="mt-2 flex items-end gap-2">
          <span className="text-gray-500 line-through">${price}</span>
          <span className="text-xl font-bold text-red-500">${newPrice}</span>
        </div>
        <div className="mt-2 flex items-center">
          <div className="text-yellow-500">
            {'★'.repeat(rating)}
            {'☆'.repeat(5 - rating)}
          </div>
          <span className="ml-2 text-gray-600">({rating})</span>
        </div>
      </div>
    </div>
  )
}

export default Card
