import './App.css';
import { useState, useEffect } from 'react';
import Quote from 'inspirational-quotes';


const App = () => {

    const [quote, setQuote] = useState(null);

    const getNewQuote = () => {
        setQuote(Quote.getQuote());
    }

    // reload the current page
    const refreshPage = () => {

        window.location.reload();
    }

    // on mount get a new quote
    useEffect(() => {
        getNewQuote();
    }, [])

    return (
        <>
            <button class="btn-default" onClick={refreshPage}>nieuwe quote</button>
            <p class='quoteText'>{quote?.text}</p>  <p class='quoteAuthor'>{quote?.author}</p>
        </>
    );
}


export default App;