document.addEventListener("DOMContentLoaded", function(event) {
    const cross = document.querySelector(".cross"),
        ring = document.querySelector(".ring"),
        squares = document.querySelectorAll('.square'),
        lines = document.querySelectorAll('.line');

    let triger = 0,
        counter =0;

    function showFigure(elem){

        if( elem.innerHTML == "" ){
            if (triger == 0){                                    // ring

                const figureInSquare = document.createElement('div');
                figureInSquare.classList.add('ring');
                figureInSquare.innerHTML = 'O';
                elem.append(figureInSquare);
                triger =1;
                counter ++;
                cross.classList.add('g-item-check');
                ring.classList.remove('g-item-check');
                /*elem.style = 'background-color : red';*/
            }


            else if (triger == 1){                                    // cross

                const figureInSquare = document.createElement('div');
                figureInSquare.classList.add('cross');
                figureInSquare.innerHTML = 'X';
                elem.append(figureInSquare);
                triger --;
                counter ++;
                ring.classList.add('g-item-check');
                cross.classList.remove('g-item-check');
                /*elem.style = 'background-color : blue';*/
            }
        } else {
            console.log('figure already put');
        }



        console.log(counter);
        // console.log(triger);
        // console.log(counter);
    }

//const row = [];

    function checkWinner(fig){
        let win = false;
        if(squares[0].innerText == `${fig}` && squares[1].innerText == `${fig}` && squares[2].innerText == `${fig}`){
            win = true;
        }
        if(squares[3].innerText == `${fig}` && squares[4].innerText == `${fig}` && squares[5].innerText == `${fig}`){
            win = true;
        }
        if(squares[6].innerText == `${fig}` && squares[7].innerText == `${fig}` && squares[8].innerText == `${fig}`){
            win = true;
        }
        if(squares[0].innerText == `${fig}` && squares[3].innerText == `${fig}` && squares[6].innerText == `${fig}`){
            win = true;
        }
        if(squares[1].innerText == `${fig}` && squares[4].innerText == `${fig}` && squares[7].innerText == `${fig}`){
            win = true;
        }
        if(squares[2].innerText == `${fig}` && squares[5].innerText == `${fig}` && squares[8].innerText == `${fig}`){
            win = true;
        }
        if(squares[0].innerText == `${fig}` && squares[4].innerText == `${fig}` && squares[8].innerText == `${fig}`){
            win = true;
        }
        if(squares[2].innerText == `${fig}` && squares[4].innerText == `${fig}` && squares[6].innerText == `${fig}`){
            win = true;
        }
        if(win == true) 
        return true;
    }

    function restart (){
        for(var i = 0; i < squares.length; i++) {
            squares[i].innerHTML = '';
            squares[i].style = '';
            counter =0;
        }
    }




    ring.classList.add('frame');

    let winWindow = document.querySelector('.win-window'),
        winText = winWindow.querySelector('.text');
    squares.forEach((e)=>{
        e.addEventListener('click', () =>{
            if (counter < 9){
                showFigure(e);
                computer(squares);
                if(checkWinner(e.innerText) == true){
                    winText.innerText = `${e.innerText} WIN :)`;
                    winWindow.classList.add('visible');
                    setTimeout(restart, 2000);
                    setTimeout(function (){
                        winWindow.classList.remove('visible');
                    }, 2000);

                }
                if(counter == 9 && !checkWinner(e.innerText) ){
                    winText.innerText = `No WIN :)`;
                    winWindow.classList.add('visible');
                    setTimeout(restart, 2000);
                    setTimeout(function (){
                        winWindow.classList.remove('visible');
                    }, 2000);
                }
            }
        })
    })


    function computer(elem){

        let cell = Math.floor(Math.random() * 10);
        if (elem[cell].innerText !=''){
            computer(elem);
        } else {
            showFigure(elem[cell]);
            if(checkWinner(elem[cell].innerText) == true){
                showFigure(elem[cell]);




                if(checkWinner(elem[cell].innerText) == true){
                    console.log('if')
                    winText.innerText = `${elem[cell].innerText} WIN :)`;
                    winWindow.classList.add('visible');
                    setTimeout(restart, 2000);
                    setTimeout(function (){
                        winWindow.classList.remove('visible');
                    }, 2000);

                }
                if(counter == 9 && !checkWinner(elem[cell].innerText) ){
                    winText.innerText = `No WIN :)`;
                    winWindow.classList.add('visible');
                    setTimeout(restart, 2000);
                    setTimeout(function (){
                        winWindow.classList.remove('visible');
                    }, 2000);
                }
            }
         }
        console.log('computer square');
    }


//убрать скрол
    document.querySelector('body').style.overflow = 'hidden';

});



    
