document.addEventListener("DOMContentLoaded", function(){
    const scoreDisplay = document.getElementById("score");
    console.log(scoreDisplay)
    const width = 28;
    let score = 0;
    const grid = document.querySelector(".grid")

    //0 - pètal
    //1 - mur
    //2 - cova
    //3 - rosa
    //4 - built

    const layout = 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 4, 4, 1, 0, 1, 4, 4, 4, 1, 0, 1, 1, 0, 1, 4, 4, 4, 1, 0, 1, 4, 4, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 4, 4, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4, 4, 1,
        1, 4, 4, 4, 4, 1, 0, 1, 1, 0, 1, 1, 1, 2, 2, 1, 1, 1, 0, 1, 1, 0, 1, 4, 4, 4, 4, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 4, 4, 4, 4, 1, 0, 1, 1, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 1, 1, 0, 1, 4, 4, 4, 4, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 4, 4, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 4, 4, 1, 0, 1,
        1, 0, 1, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4, 1, 0, 1,
        1, 3, 1, 4, 4, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 4, 4, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]

    let squares = [];

    //CREATED BOARD
    function createBoard(){
        for(let i=0; i < layout.length; i++){
            const square = document.createElement('div')
            square.id = i
    

            if(layout[i] == 0)  {
            square.classList.add("pink")
            }else if(layout[i] == 1){
            square.classList.add("green")
            }else if(layout[i] == 2){
            square.classList.add("blue")
            }else if(layout[i] == 3){
            square.classList.add("red")
            }else if(layout[i] == 4){
            square.classList.add("white")
            }
            grid.appendChild(square);
            squares.push(square)
        } 
        }
        createBoard();
        console.log(squares)

        let posicioPrincep = 30 ;
        squares[posicioPrincep].classList.add("princep");

        function movePrincep(e){
            squares[posicioPrincep].classList.remove("princep");
            switch(e.key){
                case 'ArrowLeft': 
                if(
                    !squares[posicioPrincep-1].classList.contains('green') &&
                    !squares[posicioPrincep-1].classList.contains('blue')){
                        posicioPrincep -= 1
                    }
                
                if(squares[posicioPrincep - 1 ] === squares[363]){
                    posicioPrincep = 391
                }
                break;

                case 'ArrowRight': 
                if(
                    !squares[posicioPrincep+1].classList.contains('green') &&
                    !squares[posicioPrincep+1].classList.contains('blue')){
                        posicioPrincep += 1
                    }
                if(squares[posicioPrincep + 1 ] === squares[392]){
                        posicioPrincep = 364
                }
                break;

                case 'ArrowUp':
                if(
                    !squares[posicioPrincep-28].classList.contains('green') &&
                    !squares[posicioPrincep-28].classList.contains('blue')
                ){
                    posicioPrincep -= 28
                }
                break;
                case 'ArrowDown':
                if(
                    !squares[posicioPrincep+28].classList.contains('green') &&
                    !squares[posicioPrincep+28].classList.contains('blue')
                ){
                    posicioPrincep += 28
                }
                break;
            }
            squares[posicioPrincep].classList.add("princep");

            petalAgafar()
            rosaAgafada()
            //checkForWin()
            //checkForGameOver()

        }

        document.addEventListener('keyup', movePrincep)

        function petalAgafar(){

            if(squares[posicioPrincep].classList.contains('pink')){
                score ++ 
                scoreDisplay.innerHTML = score
                squares[posicioPrincep].classList.remove('pink')
            }


        }

        function rosaAgafada(){

            if(squares[posicioPrincep].classList.contains('rosa')){
                score +=10 
                scoreDisplay.innerHTML = score
                squares[posicioPrincep].classList.remove('rosa')
            }

        }


        class Drac {
            constructor(className, startIndex, speed){
                this.className = className
                this.startIndex = startIndex
                this.speed = speed
                this.currentIndex = startIndex
                this.isScared = false
                this.timerId = NaN
            }


        }

        const dracs = [
            new Drac('drac1', 348, 250),
            new Drac('drac2', 403, 400),
            new Drac('drac3', 378, 300),
            new Drac('drac4', 406, 500)
        ]

        dracs.forEach(drac=>squares[drac.currentIndex].classList.add(drac.className, 'drac'))

        drac.forEach(drac=>moveDrac(drac))

        function moveDrac (drac){
            const directions = [-1,1, width, -width]
            let direction = directions[Math.floor(Math.random()*directions.length)]
            
            if(
                !squares[drac.currentIndex+direction].classListcontains('green') &&
            ){

            }

        }
        

    
    })
    

