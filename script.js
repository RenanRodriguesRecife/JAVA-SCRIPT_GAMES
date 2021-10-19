document.addEventListener('DOMContentLoaded',()=>{
    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')

    const width = 10
    let currentIndex = 0 //a posição atual da cobra
    let appleIndex = 0 // a primeira div no grid
    let currentSnake = [2,1,0] //o corpo da cobra - (2 para a cabeça) e (0 para a calda) e o corpo com 1.
    let direction = 1 //1 para direita; -1 para a esquerda; +width para cima; - width para baixo
    let score = 0
    let speed = 0.9

    let intervalTime = 0
    let interval = 0

    //iniciando e resetando o jogo
    function startGame(){
        //RESETA O JOGO

        //remove a snake
        currentSnake.forEach(index => squares[index].classList.remove('snake'))
        //remove as maçãs
        squares[appleIndex].classList.remove('apple')
        // --!!!--
        clearInterval(interval)
        score = 0
        randomApple()
        direction = 1
        scoreDisplay.innerText = score
        intervalTime = 1000
        currentSnake = [2,1,0]
        currentIndex = 0
        currentSnake.forEach(index=>squares[index].classList.add('snake'))
        // --!!!--
        interval = setInterval(moveOutcomes, intervalTime)
    }


    //gameplay loop da cobra
    function moveOutcomes() {
        //colisão com as bordas e com si mesma
        if(
            (currentSnake[0] + width >= (width * width) && direction === width) || //colisão com o fundo
            (currentSnake[0] % width === width -1 && direction === 1) || //colisão com a parede direita
            (currentSnake[0] % width === 0 && direction === -1) || //colisão com a parede esquerda
            (currentSnake[0] - width < 0 && direction === -width) || //colisão com o topo
            squares[currentSnake[0] + direction].classList.contains('snake') //colisão com si mesma
        ){
            console.log ("que pena você morreu")
            return clearInterval(interval)
        }

        // cobra movendo
        const tail = currentSnake.pop() //remove o ultimo elemento o array e mostra
        squares[tail].classList.remove('snake') //remove class snake da posição da calda
        currentSnake.unshift(currentSnake[0] + direction) //adiciona uma direção para cabeça do array

        //cobra pegando maçã
        if(squares[currentSnake[0]].classList.contains('apple')){
            squares[currentSnake[0]].classList.remove('apple')
            squares[tail].classList.add('snake')
            currentSnake.push(tail)

            randomApple()

            score++
            scoreDisplay.textContent = score
            clearInterval(interval)
            intervalTime = intervalTime * speed
            interval = setInterval(moveOutcomes, intervalTime)
        }
        squares[currentSnake[0]].classList.add('snake')
    }


    //gerando uma nova maçã
    function randomApple(){
        do{
            appleIndex = Math.floor(Math.random() * squares.length)

        }while(squares[appleIndex].classList.contains('snake'))
        squares[appleIndex].classList.add('apple')
    }


    //controle - usando o teclado
    function control(e){
        console.log ("ok")
        //primeiro remove a class .snake de todos os quadrados
        squares[currentIndex].classList.remove('snake')
        
        if(e.keyCode === 39){
            direction = 1 //direita 
        }else if(e.keyCode === 38){
            direction = -width //cima - a compra irá mais 10 divs
        }else if(e.keyCode === 37){
            direction = -1 //esquerda 
        }else if(e.keyCode === 40){
            direction = +width //baixo - a combra irá menos 10 divs
        }
    }
    //evento toda vez que uma key é precionanda chama a funçaõ control
    document.addEventListener('keyup',control)
    startBtn.addEventListener('click',startGame)
})