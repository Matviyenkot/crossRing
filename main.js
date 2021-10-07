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

function checkWinner(elem){

    for ( let i=0; i<3; i++){
        for (let j=0; j<3; j++){
            if (lines[0].squares[0].textContent == 'X'){
                    xCounter ++;
                    console.log(xCounter);
                }  
        }
    }

    // if (lines[0].elem.innerHTML == 'X'){
    //     xCounter ++;
    // }  
    // if (lines[0].elem.innerHTML == 'O'){
    //     oCounter ++;
    // }  

    if (xCounter == 3){
        console.log('cross win');
    } 
    if (oCounter == 3){
        console.log('ring win');
    }
}





ring.classList.add('frame');
squares.forEach((e)=>{
    e.addEventListener('click', () =>{
        if (counter < 9){
            showFigure(e);
        } else {
            console.log('end!');
        }
        checkWinner(e);
    })
})