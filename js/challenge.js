const counter  = document.getElementById('counter')
let pauseButton = document.getElementById("pause")
let minusButton = document.getElementById("minus")
let plusButton = document.getElementById("plus")
let likeButton = document.getElementById("heart")
let submitButton = document.getElementById("submit")
const myTextbox = document.getElementById('comment-input')
const form = document.getElementById("comment-form")



document.addEventListener("DOMContentLoaded", function() {
   IntervalID = window.setInterval(myCallback, 1000)
   form.addEventListener("submit", function(event) {
    function makeACommentElement (){
        let userInput = myTextbox.value
        elementLike = document.getElementById("list")
        let li = document.createElement('li')
        li.innerHTML = userInput
        elementLike.appendChild(li)
    }
    event.preventDefault()

    makeACommentElement()
    myTextbox.value = ""
     })

     likeButton.addEventListener("click", function() {
        element = document.getElementsByClassName("likes")[0]
        let li = document.createElement('li')
        li.innerHTML = ` ${counter.innerText} has been liked 1 time`
        element.appendChild(li)


        })
  });

  function myCallback(){
    counter.innerText = parseInt(counter.innerText) + 1
  } 

  plusButton.addEventListener("click", function() {
    counter.innerText = parseInt(counter.innerText) + 1
  })
  
  minusButton.addEventListener("click", function() {
    counter.innerText = parseInt(counter.innerText) - 1
  })

  pauseButton.addEventListener("click", function() {
    if (pauseButton.innerText == "pause"){
    pauseButton.innerText = "resume"
    window.clearInterval(IntervalID)
    plusButton.disabled = true
    minusButton.disabled = true
    likeButton.disabled = true
    submitButton.disabled = true
    }
    else if (pauseButton.innerText == "resume"){
        IntervalID = window.setInterval(myCallback, 1000)
        pauseButton.innerText = "pause"
        plusButton.disabled = false
        minusButton.disabled = false
        likeButton.disabled = false
        submitButton.disabled = false

    }
    
   

   

   

  })

 



