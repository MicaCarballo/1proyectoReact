import React from 'react'

const ButtonBox = ({randomQuote, randomColor, getRandomAll}) => {

    const colorObj ={
        color: randomColor
       };
       const bgObj={
        backgroundColor: randomColor
       }

       return (
        
        <button className='card_btn' style={bgObj} onClick={getRandomAll}>&#62;</button>
        
      )
}

export default ButtonBox