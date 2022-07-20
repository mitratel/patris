import React, { useState } from "react";
import './App.css';

const a = 'New Quote';
const Quote = require('inspirational-quotes');
const quotes = Quote.getQuote();

// console.log({ quotes });
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAppon: true,
      quoteText: quotes.text,
      quoteAuthor: quotes.author
    };
    this.newQuote = this.newQuote.bind(this);
  }
  newQuote() {
    //   alert('hee')
    // this.setState({ quoteText: this.state.quoteText, quoteAuthor: this.state.quoteAuthor });
    this.setState(prevState => ({ isAppon: !prevState.isAppon }));
  }
  render() {
    return (<div className="App" >

      <header  >
        {/* <p> A new quote: {this.state.quoteText} from {this.state.quoteAuthor}</p> */}
        <button onClick={this.newQuote}> {a} < /button>
          <div> A new quote: {this.state.quoteText} from {this.state.quoteAuthor}</div>
          < /header> < /div>
          );
}

}
          export default App;


          {/* newQuote() {
   e.preventDefault();
   const quoteText = quotes.text;
   const quoteAuthor = quotes.author;
  console.log({ quoteText });
   const textEnAuthor = (<p> A new quote: {quoteText} from {quoteAuthor}</p>);
   alert('hee')

   } */}