let submit = document.getElementById('submit')

let input = document.getElementById('input')

let randomNumber = Math.trunc(Math.random() * 101)

let reset = document.createElement('button')
reset.type = "submit"
reset.innerHTML = "RESET"
reset.style.height = "30px"
reset.style.width = "100px"

let nb = document.getElementById('nb')
nb.style.listStyle = "none"
console.log(randomNumber)

submit.addEventListener('click', function (){
    if (input.value > randomNumber){
        let less = document.createElement('li')
        less.innerHTML += "It's less than " + input.value;
        less.style.listStyle = "none"
        less.style.color = "cornflowerblue"
        nb.appendChild(less)
    }
    else if(input.value < randomNumber){
        let more = document.createElement('li')
        more.innerHTML = "It's more than " + input.value;
        more.style.color = "red"
        nb.appendChild(more)
    }
    else if(input.value !== randomNumber){
        let found = document.createElement('li')
        found.innerHTML = "You won! The correct number was : " + randomNumber;
        found.style.color = "gold"
        nb.appendChild(found)
        nb.appendChild(reset)
    }
    if(document.getElementsByTagName('li').length > 11){
        alert('YOU LOST')
        nb.appendChild(reset)
    }
})

reset.addEventListener('click', function(){
    let start = document.getElementsByTagName('li')
    for (let i = start.length - 1; i > 0; i--){
        start[i].remove()
    }
    return reset;
})

