import React from 'react'

const Menu = () => {
  return (
    <div className='bg-[#1E1E1E] h-screen w-[10%] p-5'>
        <div className="flex h-14 justify-center items-center mt-5 mb-20">
        <img className="h-full" src="https://cdn-user-icons.flaticon.com/15937/15937093/1735878165091.svg?token=exp=1735879065~hmac=f51da74ce97ff24cf5d43e11b9e49d82"/>
        </div>

        <div className="flex flex-col justify-center items-center h-auto">
            <img className="invert h-7 mb-10" src="https://cdn-icons-png.flaticon.com/512/1828/1828765.png"/>
            <img className="invert h-7 mb-10 mt-5" src="https://cdn-icons-png.flaticon.com/512/2961/2961948.png"/>
            <img className="invert h-7 mb-10 mt-5" src="https://cdn-icons-png.flaticon.com/512/3524/3524636.png"/>
            <img className="invert h-7 mt-5" src="https://cdn-icons-png.flaticon.com/512/126/126467.png" />
        </div>
        
    </div>
  )
}

export default Menu