function onChunk(){
    document.getElementById("txt1").placeholder = "Enter the array to be chuncked in the format : 1,2,3,4"
    document.getElementById("txt2").placeholder = "Enter the chunk value in the format : 2"
    document.getElementById("check").innerHTML = "Chunk"
    document.getElementById("check").onclick = function(){
        let ans = chunk(document.getElementById("txt1").value.split(","), +document.getElementById("txt2").value)
        console.clear()
        console.log(ans)
    }
    
}
function onReduce(){
    document.getElementById("txt1").placeholder = "Enter the number array in the format : 1,2,3,4"
    document.getElementById("txt2").placeholder = "Keep it Empty."
    document.getElementById("check").innerHTML = "Reduce"
    document.getElementById("check").onclick = function(){
        let ans = reduce(document.getElementById("txt1").value.split(",").map(Number), function(sum, n) {return sum + n}, 0)
        console.clear()
        console.log(ans)
    }
    
}
function onFilter(){
    document.getElementById("txt1").placeholder = "Enter the array to be filtered in the format : 1,2,3,4"
    document.getElementById("txt2").placeholder = "Enter the filter value to get the array values more than this value in the format : 2"
    document.getElementById("check").innerHTML = "Filter"
    document.getElementById("check").onclick = function(){
        let ans = filter(document.getElementById("txt1").value.split(",").map(Number), function (value) { return value > +document.getElementById("txt2").value; })
        console.clear()
        console.log(ans)
    }
    
}
function onFind(){
    document.getElementById("txt1").placeholder = "Enter the array in the format : 1,2,3,4"
    document.getElementById("txt2").placeholder = "Enter the value to find the index of the value in the array in the format : 2"
    document.getElementById("check").innerHTML = "Find"
    document.getElementById("check").onclick = function(){
        let ans = find(document.getElementById("txt1").value.split(",").map(Number), function (value) { return value == +document.getElementById("txt2").value; })
        console.clear()
        console.log(ans)
    }
    
}
function onSum(){
    document.getElementById("txt1").placeholder = "Enter the array to be chuncked in the format : 1,2,3,4"
    document.getElementById("txt2").placeholder = "Keep it Empty."
    document.getElementById("check").innerHTML = "Sum"
    document.getElementById("check").onclick = function(){
        let ans = sum(document.getElementById("txt1").value.split(",").map(Number))
        console.clear()
        console.log(ans)
    }
    
}


let mainCont = document.createElement("div")
mainCont.classList.add("container", "mt-5")

let row = document.createElement("div")
row.classList.add("row")
mainCont.appendChild(row)

let col = document.createElement("div")
col.classList.add("col-md-12", "text-center")
row.appendChild(col)

let head = document.createElement("h1")
head.classList.add("col-12", "mb-4")
head.innerHTML = "Lodash Functions"
col.appendChild(head)

let button1 = document.createElement("button")
button1.classList.add("btn", "btn-primary", "btn-lg", "mt-2", "ml-2", "mr-2", "col-md-2")
button1.innerHTML = "Chunk"
button1.onclick = function(){onChunk()}
col.appendChild(button1)

let button2 = document.createElement("button")
button2.classList.add("btn", "btn-primary", "btn-lg", "mt-2", "ml-2", "mr-2", "col-md-2")
button2.innerHTML = "Reduce"
button2.onclick = function(){onReduce()}
col.appendChild(button2)

let button3 = document.createElement("button")
button3.classList.add("btn", "btn-primary", "btn-lg", "mt-2", "ml-2", "mr-2", "col-md-2")
button3.innerHTML = "Filter"
button3.onclick = function(){onFilter()}
col.appendChild(button3)

let button4 = document.createElement("button")
button4.classList.add("btn", "btn-primary", "btn-lg", "mt-2", "ml-2", "mr-2", "col-md-2")
button4.innerHTML = "Find"
button4.onclick = function(){onFind()}
col.appendChild(button4)

let button5 = document.createElement("button")
button5.classList.add("btn", "btn-primary", "btn-lg", "mt-2", "ml-2", "mr-2", "col-md-2")
button5.innerHTML = "Sum"
button5.onclick = function(){onSum()}
col.appendChild(button5)


let bodyCont = document.createElement("div")
bodyCont.classList.add("col-md-12", "mt-5")
col.appendChild(bodyCont)

let txt1 = document.createElement("input")
txt1.classList.add("form-control")
txt1.type = "text"
txt1.placeholder = " "
txt1.id = "txt1"
txt1.style.borderWidth = "3px"
bodyCont.appendChild(txt1)

let txt2 = document.createElement("input")
txt2.classList.add("form-control", "mt-3")
txt2.type = "text"
txt2.placeholder = " "
txt2.id = "txt2"
txt2.style.borderWidth = "3px"
bodyCont.appendChild(txt2)

let check = document.createElement("button")
check.classList.add("btn", "btn-success", "btn-lg", "mt-3", "col-md-2")
check.innerHTML = "Check"
check.id = "check"
bodyCont.appendChild(check)

let ans = document.createElement("div")
ans.classList.add("alert", "alert-warning", "mt-3", "text-left")
ans.setAttribute("role", "alert")
ans.innerHTML = "Please check the solution in the console...<br>Click - F12 to get console..."
ans.id = "ans"
bodyCont.appendChild(ans)

document.body.appendChild(mainCont)
