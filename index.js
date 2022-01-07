const tag = document.getElementById('tag')
const content = document.getElementById('content')
const author = document.getElementById('author')

const randomQuote = () =>{
fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(data => {
        tag.textContent = `${data.tags[0]}`;
        content.textContent = `${data.content}`;
        author.textContent = `--${data.author}`;
    })
}

randomQuote();