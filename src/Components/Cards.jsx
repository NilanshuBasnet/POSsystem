import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { UserContext } from '../context/UserContext';

const Cards = ({ name, img, regular, large }) => {

  const { addToCart } = useContext(UserContext);
    const [size, setSize] = useState('Regular');

    const handleAdd = () => {
      const price = size === 'Regular' ? regular : large;
      addToCart({ name, size, price });
    };


  return (
    <div className="rounded-lg w-40 m-3 p-3 text-center shadow-lg bg-white">
  <div className="w-full h-32">
    <img
      className="w-full h-full object-cover rounded-md"
      src={img}
      alt={name}
    />
  </div>
  <h1 className="text-lg font-bold mt-3">{name}</h1>
  <div className="text-sm">
    <input className="align-middle" type="radio" name={`${name}size`} value="Regular" onChange={() => setSize('Regular')}/>&nbsp;
    <label>Regular</label><br/>
    
    <input className="align-middle" type="radio" name={`${name}size`} value="Large" onChange={() => setSize('Large')}/>&nbsp;
    <label>Large</label>
  <button className="text-white bg-blue-700 hover:bg-blue-600 mt-5 px-10 py-2 rounded-lg" onClick={handleAdd}>Add</button>
  </div>
  
</div>
  )
}

Cards.propTypes ={
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    regular: PropTypes.number.isRequired,
    large: PropTypes.number.isRequired,
}

export default Cards