import React from 'react'
import PropTypes from 'prop-types'

const Cards = (props) => {
  return (
    <div className="rounded-lg w-40 m-3 p-3 text-center shadow-lg bg-white">
  <div className="w-full h-32">
    <img
      className="w-full h-full object-cover rounded-md"
      src={props.img}
      alt={props.name}
    />
  </div>
  <h1 className="text-lg font-bold mt-3">{props.name}</h1>
</div>
  )
}

Cards.propTypes ={
    name: PropTypes.string,
    img: PropTypes.string,
}

export default Cards