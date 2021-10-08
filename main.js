const cross = document.querySelector(".cross"),
        ring = document.querySelector(".ring"),
        squares = document.querySelectorAll('.square'),
        lines = document.querySelectorAll('.line');

        let triger = 0,
            counter =0,
            xCounter =0,
            oCounter =0;

function showFigure(elem){

    if( elem.innerHTML == "" ){
        if (triger == 0){                                    // ring
                
            const figureInSquare = document.createElement('div');
            figureInSquare.classList.add('ring');
            figureInSquare.innerHTML = 'O';
            elem.append(figureInSquare);
            triger =1;
            counter ++;
            cross.classList.add('frame');
            ring.classList.remove('frame');
        }
        
    
    else if (triger == 1){                                    // cross
       
            const figureInSquare = document.createElement('div');
            figureInSquare.classList.add('cross');
            figureInSquare.innerHTML = 'X';
            elem.append(figureInSquare);
            triger --;
            counter ++;
            ring.classList.add('frame');
            cross.classList.remove('frame');
    }
    } else {
        console.log('figure already put');
    }
    
            
        

            console.log(triger);
            console.log(counter);
}

const row = [];

function checkWinner(fig){
        if(squares[0].innerText == `${fig}` && squares[1].innerText == `${fig}` && squares[2].innerText == `${fig}`){
            console.log(`${fig} Win!!!`);      
        }
        if(squares[3].innerText == `${fig}` && squares[4].innerText == `${fig}` && squares[5].innerText == `${fig}`){
            console.log(`${fig} Win!!!`);       
        }
        if(squares[6].innerText == `${fig}` && squares[7].innerText == `${fig}` && squares[8].innerText == `${fig}`){
            console.log(`${fig} Win!!!`);       
        }
        if(squares[0].innerText == `${fig}` && squares[4].innerText == `${fig}` && squares[8].innerText == `${fig}`){
            console.log(`${fig} Win!!!`);       
        }
        if(squares[2].innerText == `${fig}` && squares[4].innerText == `${fig}` && squares[6].innerText == `${fig}`){
            console.log(`${fig} Win!!!`);       
        }
}


console.log(squares);


ring.classList.add('frame');
squares.forEach((e)=>{
    e.addEventListener('click', () =>{
        if (counter < 9){
            showFigure(e);
        } else {
            console.log('end!');
        }
        checkWinner(e.innerText);
    })
})




    
