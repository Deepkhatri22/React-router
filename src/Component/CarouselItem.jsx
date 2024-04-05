import React from 'react'

const CarouselItem = ({ image }) => {
  return (
    <>
      <div className="transition-all slide-item "  >
        <img src={image} alt="Image" className='object-cover rounded-lg w-auto h-auto' />
      </div>
    </>
  )
}

export default CarouselItem
