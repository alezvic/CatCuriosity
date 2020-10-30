const facts_endpoint = 'https://cat-fact.herokuapp.com/facts/random';
const imgs_endpoint = 'https://api.thecatapi.com/v1/images/search';

const title = document.getElementById('card_title');
const card_img = document.getElementById('cat_img');
const card_text = document.getElementById('card_text');
const card_btn = document.getElementById('give_me_btn');

getData();

card_btn.addEventListener('click', getData);

function getData() {
    
    title.innerText = 'Fact number ' + Math.floor(Math.random() * 99);

    fetch(facts_endpoint)
        .then(response => response.json())
        .then(data => card_text.textContent = data['text']);

    fetch(imgs_endpoint)
        .then(response => response.json())
        .then(data => card_img.setAttribute('src', data[0]['url']));
}