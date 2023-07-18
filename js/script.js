const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Imposto ciclo per cambiare la posizione della data con l'indice della stringa created 

for (let i = 0; i < posts.length; i++) {

    // Uso split per dividere created e creare dei sottostringhe di array
    const date = posts[i].created.split("-");

    
    posts[i].created = `${date[2]}-${date[1]}-${date[0]}`;
}


// Imposto una funzione con ciclo per stampare i post

printPost()
function printPost() {
    for (let i = 0; i < posts.length; i++) {

        const listPost = document.querySelector(".posts-list");

        const printPost = `<div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${posts[i].author.image}" alt="${posts[i].author.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${posts[i].author.name}</div>
                    <div class="post-meta__time">${posts[i].created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${posts[i].content}</div>
        <div class="post__image">
            <img src="${posts[i].media}" alt="">
        </div>
        <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <div class="like-button  js-like-button" data-postid="${posts[i].id}">
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-solid fa-heart hidden"></i>                                
                            <span class="like-button__label">Like!</span>
                        </div>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${posts[i].id}" class="js-likes-counter">${posts[i].likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;
    listPost.innerHTML += printPost;
    }
};

// Creo delle variabili con le classi dell' html per creare una funzione al click 
// per incrementare il counterLike

const likeBtn = document.querySelectorAll(".like-button");
const likeCounter = document.querySelectorAll(".js-likes-counter");


for (let i = 0; i < likeBtn.length; i++) {
    // riporto le variabili scritte sopra con i
    const btn = likeBtn[i];
    const counter = likeCounter[i];

    const likePostId = [];

    btn.addEventListener("click", function () {

        // Creo una condizione per cambiare il colore gia scritto in css
        // Ed incremento/decremento il counter

        if (btn.classList.contains("like-button--liked")) {

            btn.classList.remove('like-button--liked');

            counter.innerHTML = posts[i].likes - 1;

            posts[i].likes = posts[i].likes - 1;

        } else {

            btn.classList.add('like-button--liked');

            counter.innerHTML = posts[i].likes + 1;

            posts[i].likes = posts[i].likes + 1;

            likePostId.push(posts[i].id);
        }
        console.log(likePostId);
    });

}




