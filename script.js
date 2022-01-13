var titleEl, authorEl
quoteEl = document.getElementById('content')
authorEl = document.getElementById('author')

function loadQuote(){
 fetch('https://api.quotable.io/random')
      .then(jsonData => jsonData.json())
      .then(data => response(data))

  let response = (data) => {
    console.log(data)
    var author, quote;
    author = data.author
    quote = data.content
    
    quoteEl.innerText = '"'+quote+'"'
    authorEl.innerText = "-" + author
}}