const QUOTEBANK = [
    {
        quote: "When the power of love overcomes the love of power the world will know peace.",
        author: "Jimi Hinrix"

    }, 
    {
        quote: "I do not think you can trust bankers to control themselves. They are like heroin addicts.",
        author: "Charlie Munger"
    }, 
    {
        quote: "[W]hen you think about what in fact distinguishes a bank as a lender, it's how much money it loses on the assets it chooses to take risk with.",
        author: "Joseph Ficalora"
    }
]

window.onload = init;
function init() {
    generateQuote()
}

function generateQuote() {

    let quoteSize = QUOTEBANK.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuoteData = QUOTEBANK[randomIndex];

    let twiterLink = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='
    // add the quote
    let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
    twiterLink += quoteInApiFormat;
    // add the author
    let authorInApiFormat =  randomQuoteData.author.replace(/ /g, "%20");
    twiterLink += " - " + authorInApiFormat
    
    
    document.getElementById("tweet-quote").href = twiterLink;
    document.getElementById("text").innerText = randomQuoteData.quote;
    document.getElementById("author").innerText = randomQuoteData.author;
}