import React from 'react'
import ButtonBox from './ButtonBox';

const QuoteBox = ({randomQuote, randomColor, getRandomAll}) => {

   const colorObj ={
    color: randomColor
   };
   const bgObj={
    backgroundColor: randomColor
   }
  return (
    <article style={colorObj}  className='card'>
    <p className='card_quote'> {randomQuote.quote}</p>
    <h1 className='card_author'>{randomQuote.author}</h1>
    <ButtonBox 
     getRandomAll={getRandomAll}
    />
    </article>
  )
}

export default QuoteBox