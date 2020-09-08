// Created Post will not be show as its set time ran out
/*
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPost(){
    setTimeout(()=> {
        let output = document.createElement('ul');
        posts.forEach((post)=>{
            output.innerHTML += `<li>${post.title}</li>`;
        });
        var h1 = document.querySelector('h1');
        h1.insertAdjacentElement("afterend", output);

    }, 3000);
};

function createPost(post){
    setTimeout(()=>{
        posts.push(post);
    }, 2000);
}

getPost();

createPost({title:'Post Three', body:'This is post three'}); */

// CallBacks
/*
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPost(){
    setTimeout(()=> {
        let output = document.createElement('ul');
        posts.forEach((post)=>{
            output.innerHTML += `<li>${post.title}</li>`;
        });
        var h1 = document.querySelector('h1');
        h1.insertAdjacentElement("afterend", output);

    }, 3000);
};

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title:'Post Three', body:'This is post three'}, getPost);*/

// Promises
// Created Post will not be show as its set time ran out
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPost(){
    setTimeout(()=> {
        let output = document.createElement('ul');
        posts.forEach((post)=>{
            output.innerHTML += `<li>${post.title}</li>`;
        });
        var h1 = document.querySelector('h1');
        h1.insertAdjacentElement("afterend", output);

    }, 3000);
};

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post);

            const error = false;
            (!error) ? resolve() : reject('Error: Something went wrong'); 
        }, 2000);
    });
}

// createPost({title:'Post Three', body:'This is post three'}).then(getPost).catch(err => console.log(err));
// Promise.all
/*
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then(((values) => console.log(values)));
*/

// Async Await
/*
async function init(){
    await createPost({title:'Post Three', body:'This is post three'});

    getPost();
}
init();
*/

// Async/ Await/ Fetch
async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}
fetchUsers();
