function generate(){
    var quotes = {
        "- Oscar Wilde":'“Be yourself; everyone else is already taken.”',
        "- Mahatma Gandhi":'“Be the change that you wish to see in the world.”',
        "- Martin Luther King Jr.":'“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”'
    };

    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random()* authors.length)];

    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}   