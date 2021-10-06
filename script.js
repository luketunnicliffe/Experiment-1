const helloDiv = document.getElementById('hello-box');
const pressButton = document.getElementById('howdy-button');
const byeButton = document.getElementById('bye-button');

//Functions


function howdyAdder(){
    helloDiv.innerHTML = "Howdy";
}

function pressFunction(){
    console.log('Hello')
    document.body.style.backgroundColor = "blue";
}

function byeFunction(){
    console.log('Hello')
    document.body.style.backgroundColor = "#f1f1f1";
}

const byeFunction2 = () => {
    document.body.style.backgroundColor = "pink";
}

//Initalizer
howdyAdder();


pressButton.onclick = pressFunction;

//pressButton.addEventListener('click', pressFunction);

byeButton.addEventListener('click', byeFunction2);

