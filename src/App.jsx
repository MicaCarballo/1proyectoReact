
import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from "./json/quotes.json"
import color from '../utils/color'
import ButtonBox from './components/ButtonBox'
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
function App() {

 

  const getIndexRandom = arr => 
     Math.floor(Math.random() * arr.length)

     const firstQuote = quotes[getIndexRandom(quotes)]
      const firstColor = color[getIndexRandom(color)]
     const [randomQuote,setRandomQuote]= useState(firstQuote);
    
        const [randomColor, setrandomColor] = useState(firstColor);
const getRandomAll = ()=>{
 setRandomQuote (quotes[getIndexRandom(quotes)]);
 setrandomColor(color[getIndexRandom(color)])
}

  return (
    <div style={{backgroundColor:randomColor}} className="App">
      <QuoteBox randomQuote={randomQuote} 
      randomColor={randomColor}
      getRandomAll={getRandomAll}
      />
      
    </div>
  )
}

export default App
