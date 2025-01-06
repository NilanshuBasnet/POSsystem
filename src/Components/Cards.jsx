import React from 'react'
import PropTypes from 'prop-types'

const Cards = (props) => {
  return (
    <div className="rounded-lg w-[10%] m-5 p-3 text-center shadow-lg bg-white">
        <div>
            <img className="mb-3" src="https://img.freepik.com/premium-photo/takeaway-paper-coffee-cup-with-black-caps-coffee-beans-isolated-white-background_259229-422.jpg?ga=GA1.1.883519166.1735956155&semt=ais_hybrid" alt="Item Image"/>
        </div>
        <h1 className="text-lg"><b>{props.name}</b></h1>
    </div>
  )
}

Cards.propTypes ={
    name: PropTypes.string,
}

export default Cards