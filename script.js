let i=0;
let y=0;

let container = document.querySelector(".container");

let size = 16;
let color;

let button = document.querySelector(".button");

function makeDivs(number){

i=0;


    while(i<number){
        y=0;
        let div = document.createElement("div");
        div.classList.add("split");
        container.appendChild(div);
        i++;
        
        while(y<number){
            let divContainer = container.lastChild;
            let div2 = document.createElement("div");
            div2.classList.add("element");
            divContainer.appendChild(div2);
            y++;
        }
    }

    addRainbow()
}

function randomColor(){
    let randomNumber = Math.floor(Math.random()*8);
    if(randomNumber===1){color = "red";}
    else if(randomNumber===2){color = "blue";}
    else if(randomNumber===3){color = "green";}
    else if(randomNumber===4){color = "pink";}
    else if(randomNumber===5){color = "blueviolet";}
    else if(randomNumber===6){color = "black";}
    else if(randomNumber===7){color = "crimson";}
    else if(randomNumber===8){color = "cyan";}
}

function addRainbow(){

let elements = document.querySelectorAll(".element");

elements.forEach(element => {
    element.addEventListener('mouseover', (e)=>{ 
        let element1 = e.target; 
        randomColor();
        element1.style.backgroundColor = color;   
    });
});

}

function limiter(input) {
    if (input<0) {size = 0;}
    if (input>100) {size = 100;}
 }

makeDivs(size);

button.addEventListener('click', (b) => {
  
document.querySelectorAll('.element').forEach(c => c.remove());
document.querySelectorAll('.split').forEach(c => c.remove());

size = window.prompt("Choose 1 - 100");
limiter(size);
makeDivs(size);

});

