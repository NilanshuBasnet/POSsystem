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
  <div className="text-sm">
    <input className="align-middle" type="radio" name={`${props.name}size`} value="Regular"/>&nbsp;
    <label>Regular</label><br/>
    
    <input className="align-middle" type="radio" name={`${props.name}size`} value="Large"/>&nbsp;
    <label>Large</label>
  <button className="text-white bg-blue-700 hover:bg-blue-600 mt-5 px-10 py-2 rounded-lg">Add</button>
  </div>
  
</div>
  )
}

Cards.propTypes ={
    name: PropTypes.string,
    img: PropTypes.string,
}

export default Cards