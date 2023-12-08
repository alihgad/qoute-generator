var qoute = document.getElementById("quote"),
 author = document.getElementById("author"),
    qoutes = [  `“Be yourself; everyone else is already taken.”`,
                 `“So many books, so little time.”`,
                 `“A room without books is like a body without a soul.”`,
                `“You only live once, but if you do it right, once is enough.”` ,
                `“Be the change that you wish to see in the world.”`,
                `“In three words I can sum up everything I've learned about life: it goes on.”`
            ],
            authors = [
                `― Oscar Wilde` , `― Frank Zappa` , `― Marcus Tullius Cicero`,`― Mae West` ,`― Mahatma Gandhi`,`― Robert Frost`
            ]        
    


function displayQoute() {
    var randomNumber = Math.random()*qoutes.length
    console.log(Math.floor(randomNumber));

    if (qoutes[Math.floor(randomNumber)] ==  qoute.innerHTML ) {
        displayQoute()
    }else{
    qoute.innerHTML= qoutes[Math.floor(randomNumber)]
    author.innerHTML= authors[Math.floor(randomNumber)]

    }
}    



