let i=0;
let y=0;
let container = document.querySelector(".container");


function makeDivs(number){

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


}

makeDivs(20);


let elements = document.querySelectorAll(".element");

elements.forEach(element => {
    element.addEventListener('mouseover', (e)=>{ 
        let element1 = e.target; 
        randomColor();
        element1.style.backgroundColor = color;   
    });
});

let color;

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