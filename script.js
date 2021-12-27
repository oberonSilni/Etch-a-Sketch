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

makeDivs(16);