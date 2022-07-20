
import './App.css';
//import { Button } from 'react-native'
const a = 'New Quote';
const Quote = require('inspirational-quotes');
const quotes = Quote.getQuote();

// console.log({ quotes });
function App() {

  function newQuote(e) {
    e.preventDefault();
    const quoteText = quotes.text;
    const quoteAuthor = quotes.author;
    //console.log({ quoteText });
    const textEnAuthor = (<p> A new quote: {quoteText} from {quoteAuthor}</p>);
    // alert('hee')

  }

  return (<div className="App">

    <header  >
      <p> A new quote: {quotes.text} from {quotes.author}</p>
      <button onClick={newQuote}> {a} < /button>


        < /header> < /div>
        );
}


        export default App;