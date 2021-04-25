let count = []
let saveAction

const MAX_VISOR_CHAR = 10

function addNumber(num) {
    let total = document.getElementById("total")
    total.removeAttribute("hidden")

    if (total.innerHTML.length < MAX_VISOR_CHAR) {
        total.innerHTML += num
}}

function calculateAction(action) {
    let atualNumber = document.getElementById("total")
    let accumulator = document.getElementById("accumulator")
    
    if (atualNumber.length === 0) { return}

    count.push(Number(atualNumber.innerHTML))

    accumulator.removeAttribute("hidden")
    
    accumulator.innerHTML += ` ${atualNumber.innerHTML} ${action}`
    atualNumber.innerHTML = ""
    console.log(count)
    
    count.push(action)      
}

function addVirgula() {
    let atualNumber = document.getElementById("total").innerHTML
    console.log(atualNumber)
    if (!atualNumber.includes(".")) {
        document.getElementById("total").innerHTML += "."
    }
}


function result() {
    let currentAccum = document.getElementById("accumulator").innerHTML
    let currentNumber = document.getElementById("total").innerHTML
    
    
    if (currentAccum[currentAccum.length - 1] === "=" && currentNumber.length > 0) {
        currentNumber = ProcessAction(Number(currentNumber), Number(currentNumber), saveAction).toString().substring(0, MAX_VISOR_CHAR)
    }

    if (count.length === 0) {return}

    count.push(Number(currentNumber));
    

    document.getElementById("accumulator").innerHTML += ` ${document.getElementById("total").innerHTML} =`
    
    ProccessResult()
    

}

function ProccessResult() {
    let action = null
    let current = null

    let total = 0

    if(isNaN(count[count.length - 1])) {
        count.pop()
    }

   count.forEach(n => {
      if(!isNaN(n)) {
          if (current == null) {
              current = n
          } else {
              total +=ProcessAction(current, n, action)
              current = null
          } 

          } else {
              action = n
              saveAction = n
        }
   })

    if(current != null) {
        total == ProcessAction(total, current, action)
        
    }
    
    document.getElementById("total").innerHTML = total.toString().substring(0, MAX_VISOR_CHAR)
    count = []

}


function ProcessAction(num1, num2, action) {
    switch(action) {
        case '+': return num1 + num2
        case '-': return num1 - num2
        case 'x': return num1 * num2
        case '/': return num1 / num2
    }
}

function simpleClean() {
 
   document.getElementById("total").innerHTML = ""
    
}

function clearAll() {
    document.getElementById("total").innerHTML = ""
    
    document.getElementById("accumulator").innerHTML = ""
    
    count = []
}

function Porcentagem() {
    let atualNumber = document.getElementById("total").innerHTML
    if (atualNumber != "") {
        document.getElementById("total").innerHTML = Number(document.getElementById("total").innerHTML / 100) 

    }
}