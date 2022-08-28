const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => dispalyQuote(data))
}

dispalyQuote = quote => {
    const blockquote = document.getElementById('quote');
    // console.log(quote.quote);
    blockquote.innerText = quote.quote;
}


