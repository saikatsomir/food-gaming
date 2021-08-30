const kanyeQutoes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => getQuotes(data))
}

const getQuotes = quotes => {
    console.log(quotes.quote);
    const quotees = document.getElementById('kanyeRest')
    quotees.innerText = quotes.quote
}