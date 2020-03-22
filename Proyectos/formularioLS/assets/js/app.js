const listaTweets = document.getElementById('lista-tweets');
let LS = localStorage;

// Event Listeners

let form;

(function eventListeners(){

    form = document.getElementById('formulario');
    form.onsubmit = agregarTweet;

    //Escuchar carga de contenido
    document.addEventListener('DOMContentLoaded', localStorageListo);

})();

function agregarTweet(e){
    e.preventDefault();
    const tweet = document.getElementById('tweet');
    crearTweet(tweet.value);
    tweet.value = '';
}

function crearTweet(tweet, create = true){    
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    botonBorrar.onclick = borrarTweet;

    const li = document.createElement('li');
    li.innerText = tweet;
    li.appendChild(botonBorrar);
    li.setAttribute('data-id', listaTweets.childElementCount);
    listaTweets.appendChild(li);
    
    create ? agregarTweetLS(tweet) : '';
    
}

function borrarTweet(e){
    e.preventDefault();

    borrarTweetLS(this);
    this.parentElement.remove();
}

function agregarTweetLS(tweet){
    let tweets = obtenerTweetsLS();
    tweets.push(tweet);
    LS.setItem('tweets', JSON.stringify(tweets));
}

function obtenerTweetsLS(){
    let tweets;

    if(LS.getItem('tweets') === null){
        tweets = [];
    }else{
        // tweets = LS.getItem('tweets');
        tweets = JSON.parse( LS.getItem('tweets') );
    }
    return tweets;
}

//Mostrar datos
function localStorageListo(){
    let tweets = obtenerTweetsLS();

    tweets.forEach(tweet => {
        crearTweet(tweet, false);
    });
}

function borrarTweetLS(tweet){
    let tweets = obtenerTweetsLS();
    let index = tweet.parentElement.getAttribute('data-id');
    
    tweets.splice(index, 1); 

    LS.setItem('tweets', JSON.stringify(tweets));
}