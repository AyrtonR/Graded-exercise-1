document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
  const Leftlogs = document.querySelectorAll('.left-log')
  const Rightlogs = document.querySelectorAll('.right-log')
  const carsLeft = document.querySelectorAll('.car-left')
  const carsRight = document.querySelectorAll('.car-right')
  const timeLeft = document.querySelector('#time')
  const result = document.querySelector('#result')
  const startBtn = document.querySelector('#start')
  const width = 9
  let currentIndex = 76
  let currentTime = 20
  let timerId

//move the Frog
function moveFrog(e) {
    squares[currentIndex].classList.remove('frog')
    switch(e.keyCode) {
            case 37:
                if(currentIndex % width !== 0) currentIndex -= 1
                break
            case 38:
                if(currentIndex - width >= 0) currentIndex -= width
                break
            case 39:
                if(currentIndex % width < width - 1) currentIndex += 1
                break
            case 40:
                if (currentIndex + width < width * width) currentIndex += width
                break
    }
      squares[currentIndex].classList.add('frog')
      lose()
      win()
  }
  //cars moving
  function autoMoveCars() {
      carsLeft.forEach(carLeft => moveCarLeft (carLeft))
      carsRight.forEach(carRight => moveCarRight(carRight))
  }
  //car moving left in a time loop
  function moveCarLeft(carLeft) {
      switch(true) {
            case carLeft.classList.contains('c1'):
                 carLeft.classList.remove('c1')
                 carLeft.classList.add ('c2')
                 break
            case carLeft.classList.contains('c2'):
                 carLeft.classList.remove('c2')
                 carLeft.classList.add('c3')
                 break
            case carLeft.classList.contains('c3'):
                 carLeft.classList.remove('c3')
                 carLeft.classList.add('c1')
                 break
      }
    }

    //car moving right in a time loop
    function moveCarRight(carRight) {
        switch (true){
            case carRight.classList.contains('c1'):
                 carRight.classList.remove('c1')
                 carRight.classList.add('c3')
                 break
            case carRight.classList.contains('c2'):
                 carRight.classList.remove('c2')
                 carRight.classList.add('c1')
                 break
            case carRight.classList.contains('c3'):
                 carRight.classList.remove('c3')
                 carRight.classList.add('c2')
                 break
        }
    }
    //move the logs
    function autoMoveLogs() {
        Leftlogs.forEach(Leftlog => moveLogLeft(Leftlog))
        Rightlogs.forEach(Rightlog => moveLogRight(Rightlog))
    }
    //logs going left
    function moveLogLeft(Leftlog) {
        switch (true) {
            case Leftlog.classList.contains('l1'):
                 Leftlog.classList.remove('l1')
                 Leftlog.classList.add('l2')
                 break
            case Leftlog.classList.contains('l2'):
                 Leftlog.classList.remove('l2')
                 Leftlog.classList.add('l3')
                 break
            case Leftlog.classList.contains('l3'):
                 Leftlog.classList.remove('l3')
                 Leftlog.classList.add('l4')
                 break
            case Leftlog.classList.contains('l4'):
                 Leftlog.classList.remove('l4')
                 Leftlog.classList.add('l5')
                 break
            case Leftlog.classList.contains('l5'):
                 Leftlog.classList.remove('l5')
                 Leftlog.classList.add('l1')
                 break
        }
    }
    //logs going right     
    function moveLogRight(Rightlog) {
        switch (true) {
            case Rightlog.classList.contains('l1'):
                 Rightlog.classList.remove('l1')
                 Rightlog.classList.add('l5')
                 break
            case Rightlog.classList.contains('l2'):
                 Rightlog.classList.remove('l2')
                 Rightlog.classList.add('l1')
                 break
            case Rightlog.classList.contains('l3'):
                 Rightlog.classList.remove('l3')
                 Rightlog.classList.add('l2')
                 break
            case Rightlog.classList.contains('l4'):
                 Rightlog.classList.remove('l4')
                 Rightlog.classList.add('l3')
                 break
            case Rightlog.classList.contains('l5'):
                 Rightlog.classList.remove('l5')
                 Rightlog.classList.add('l4')
                 break
        }
      }
       //move the frog when the frog is on the log that is moving left
        function moveWithLogLeft() {
            if (currentIndex >= 27 && currentIndex < 35) {
            squares[currentIndex].classList.remove('frog')
            currentIndex += 1
            squares[currentIndex].classList.add('frog')
    }
  }
      //move the frog when the frog is on the log that is moving right
      function moveWithLogRight() {
            if (currentIndex > 18 && currentIndex <= 26) {
            squares[currentIndex].classList.remove('frog')
            currentIndex -= 1
            squares[currentIndex].classList.add('frog')
        }
      }
      //rules for the frog to win
      function win() {
        if (squares[4].classList.contains('frog')) {
            result.innerHTML = 'You won'
            squares[currentIndex].classList.remove('frog')
            clearInterval(timerId)
            document.removeEventListener('keyup', moveFrog)
        }
      }
      //rules for the frog to lose
      function lose() {
        if ((currentTime === 0 ) || (squares[currentIndex].classList.contains('c1')) 
        || (squares[currentIndex].classList.contains('l5'))
        || (squares[currentIndex].classList.contains('l4'))
        ) {
          result.innerHTML = 'You lose'
          squares[currentIndex].classList.remove('frog')
          clearInterval(timerId)
          document.removeEventListener('keyup', moveFrog)
        }
      }
      //all the functions that move the objects
      function moveObjects() {
        currentTime--
        timeLeft.textContent = currentTime
        autoMoveCars()
        autoMoveLogs()
        moveWithLogLeft()
        moveWithLogRight()
        lose()
      }
      //to pause/resume the game
      startBtn.addEventListener('click', () => {
        if(timerId) {
          clearInterval(timerId)
        } else {
          timerId = setInterval(moveObjects, 1000)
          document.addEventListener('keyup', moveFrog)
        }
      })
})