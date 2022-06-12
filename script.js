var titleEl, authorEl
var quoteEl = document.getElementById('content')
var authorEl = document.getElementById('author')

const loadQuote = () => {
 fetch('https://api.quotable.io/random')
      .then(jsonData => jsonData.json())
      .then(data => response(data))

  let response = (data) => {
    var author = data.author
    var quote = data.content
    
    quoteEl.innerText = `"${quote}"`
    authorEl.innerText = `- ${author}`
}}
