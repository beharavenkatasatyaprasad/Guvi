let main_container = document.createElement("div")
main_container.classList.add("container", "mt-2")

let row1 = document.createElement("div")
row1.classList.add("row")

let col1 = document.createElement("div")
col1.classList.add("col")

let head = document.createElement("div")
let heading = document.createElement("h1")
heading.classList.add("display-4", "text-center", "col-12")
heading.innerHTML = "<strong>Poppy's Pet Shop</strong>"
head.appendChild(heading)

function bActive(btn){
    button1.classList.remove("active")
    button2.classList.remove("active")
    btn.classList.add("active")
}

let body_cont = document.createElement("div")
body_cont.classList.add("col-12", "mt-3", "text-center")

let button1 = document.createElement("button")
button1.classList.add("btn", "btn-outline-primary", "btn-lg", "col-md-4", "m-2")
button1.innerHTML = "Available Pets"
button1.onclick = function(){
    bActive(button1);
    aPets();
}

let button2 = document.createElement("button")
button2.classList.add("btn", "btn-outline-primary", "btn-lg", "col-md-4", "m-2")
button2.innerHTML = "Pets Request"
button2.onclick = function(){ 
    bActive(button2);
    rPets();
}

body_cont.append(button1, button2)
col1.append(head, body_cont)
row1.append(col1)

let col2 = document.createElement("div")
col2.classList.add("col-12", "mt-3", "text-center")

let img = document.createElement("img")
img.src = "https://coronadotimes.com/wp-content/uploads/2019/06/secret.life_.pets_.movie_-e1541608557369.jpeg"
img.classList.add("img", "img-fluid", "mb-3")
col2.appendChild(img)

function addItem(){
    col2.innerHTML = ""
    let form = document.createElement("form")
    form.classList.add("text-left")

    let fr = document.createElement("div")
    fr.classList.add("form-row")

    let fcol1 = document.createElement("div")
    fcol1.classList.add("col-md", "mt-3")

    let lbl1 = document.createElement("label")
    lbl1.setAttribute("for", "name")
    lbl1.innerHTML = "Pet Name :"
    let inp1 = document.createElement("input")
    inp1.classList.add("form-control")
    inp1.id = "name"
    inp1.required = true;
    inp1.type = "text"

    let fcol2 = document.createElement("div")
    fcol2.classList.add("col-md", "mt-3")
    
    let lbl2 = document.createElement("label")
    lbl2.setAttribute("for", "type")
    lbl2.innerHTML = "Pet Type :"
    let inp2 = document.createElement("select")
    inp2.classList.add("form-control")
    inp2.required = true;
    inp2.id = "type"
    
    for (const [key, value] of Object.entries(JSON.parse(JSON.stringify(avObject.petData)))){
        let opt = document.createElement("option")
        opt.innerHTML = key
        inp2.append(opt)
    }

    fcol1.append(lbl1, inp1)
    fcol2.append(lbl2, inp2)
    fr.append(fcol1, fcol2)
    
    
    let fr2 = document.createElement("div")
    fr2.classList.add("form-row")

    let fcol3 = document.createElement("div")
    fcol3.classList.add("col-md", "mt-3")

    let lbl3 = document.createElement("label")
    lbl3.setAttribute("for", "color")
    lbl3.innerHTML = "Pet Color :"
    let inp3 = document.createElement("input")
    inp3.classList.add("form-control")
    inp3.id = "color"
    inp3.required = true;
    inp3.type = "text"
    
    let fcol4 = document.createElement("div")
    fcol4.classList.add("col-md", "mt-3")

    let lbl4 = document.createElement("label")
    lbl4.setAttribute("for", "age")
    lbl4.innerHTML = "Pet Age :"
    let inp4 = document.createElement("input")
    inp4.classList.add("form-control")
    inp4.id = "age"
    inp4.required = true;
    inp4.type = "number"

    fcol3.append(lbl3, inp3)
    fcol4.append(lbl4, inp4)
    fr2.append(fcol3, fcol4)
    
    let fr3 = document.createElement("div")
    fr3.classList.add("form-row")

    let fcol5 = document.createElement("div")
    fcol5.classList.add("col-md", "mt-3")

    let lbl5 = document.createElement("label")
    lbl5.setAttribute("for", "gender")
    lbl5.innerHTML = "Pet Gender :"
    let inp5 = document.createElement("select")
    inp5.classList.add("form-control")
    inp5.id = "gender"
    let opt1 = document.createElement("option")
    opt1.innerHTML = "Male"
    let opt2 = document.createElement("option")
    opt2.innerHTML = "Female"
    inp5.append(opt1, opt2)

    let fcol6 = document.createElement("div")
    fcol6.classList.add("col-md", "mt-3")

    let lbl6 = document.createElement("label")
    lbl6.setAttribute("for", "owners")
    lbl6.innerHTML = "No of owners had the pet :"
    let inp6 = document.createElement("input")
    inp6.classList.add("form-control")
    inp6.id = "owners"
    inp6.required = true;
    inp6.type = "number"

    fcol5.append(lbl5, inp5)
    fcol6.append(lbl6, inp6)
    fr3.append(fcol5, fcol6)

    let addbtn = document.createElement("button")
    addbtn.classList.add("btn", "btn-success", "m-3", "mt-5")
    addbtn.innerHTML = "Add Pet"
    addbtn.type = "submit"

    let backbtn = document.createElement("button")
    backbtn.classList.add("btn", "btn-danger", "m-3", "mt-5")
    backbtn.innerHTML = "back"
    backbtn.onclick = function() {
        aPets();
    }

    form.onsubmit = function(){
        avObject.insert({type: document.getElementById("type").value, name: document.getElementById("name").value, age: document.getElementById("age").value, gender: document.getElementById("gender").value, color: document.getElementById("color").value, owners: document.getElementById("owners").value});
        aPets();
    }
    form.append(fr, fr2, fr3, addbtn, backbtn)
    col2.append(form)
}

function details(){
    col2.innerHTML = ""
    let t = document.createElement("table")
    t.classList.add("table", "table-hover")

    let t_head = document.createElement("thead")
    let tr_head = document.createElement("tr")
    
    let th0 = document.createElement("td")
    th0.scope = "col"
    th0.innerHTML = "<strong>ID</strong>"
    
    let th1 = document.createElement("td")
    th1.scope = "col"
    th1.innerHTML = "<strong>TYPE</strong>"

    let th2 = document.createElement("td")
    th2.scope = "col"
    th2.innerHTML = "<strong>NAME</strong>"

    let th3 = document.createElement("td")
    th3.scope = "col"
    th3.innerHTML = "<strong>AGE</strong>"

    let th4 = document.createElement("td")
    th4.scope = "col"
    th4.innerHTML = "<strong>GENDER</strong>"

    let th5 = document.createElement("td")
    th5.scope = "col"
    th5.innerHTML = "<strong>COLOR</strong>"

    let th6 = document.createElement("td")
    th6.scope = "col"
    th6.innerHTML = "<strong>OWNERS BEFORE</strong>"

    tr_head.append(th0, th1, th2, th3, th4, th5, th6)
    t_head.append(tr_head)

    let t_body = document.createElement("tbody")
    for(let item of avObject.data){
        let data = JSON.parse(JSON.stringify(item))
        let tr = document.createElement("tr")
        let th = document.createElement("th")
        th.scope = "row"
        th.innerHTML = data.id;
        let td1 = document.createElement("td")
        td1.innerHTML = data.type;
        let td2 = document.createElement("td")
        td2.innerHTML = data.name;
        let td3 = document.createElement("td")
        td3.innerHTML = data.age;
        let td4 = document.createElement("td")
        td4.innerHTML = data.gender;
        let td5 = document.createElement("td")
        td5.innerHTML = data.color;
        let td6 = document.createElement("td")
        td6.innerHTML = data.owners;

        
        tr.append(th, td1, td2, td3, td4, td5, td6)
        t_body.append(tr)
    }
    t.append(t_head, t_body)

    let btns = document.createElement("div")
    btns.classList.add("col-12", "text-left", "mb-5")

    let backbtn = document.createElement("button")
    backbtn.classList.add("btn", "btn-danger", "m-3")
    backbtn.innerHTML = "back"
    backbtn.onclick = function() {
        aPets();
    }
    btns.append(backbtn)
    col2.append(t, btns)
}

function aPets(){
    col2.innerHTML = ""
    let t = document.createElement("table")
    t.classList.add("table", "table-hover")

    let t_head = document.createElement("thead")
    let tr_head = document.createElement("tr")
    
    let th0 = document.createElement("td")
    th0.scope = "col"
    th0.innerHTML = "<strong>#</strong>"
    
    let th1 = document.createElement("td")
    th1.scope = "col"
    th1.innerHTML = "<strong>PETS</strong>"

    let th2 = document.createElement("td")
    th2.scope = "col"
    th2.innerHTML = "<strong>COUNT</strong>"

    tr_head.append(th0, th1, th2)
    t_head.append(tr_head)

    let t_body = document.createElement("tbody")
    let data = JSON.parse(JSON.stringify(avObject.petData))
    let ct = 1
    for (const [key, value] of Object.entries(data)){
        let tr = document.createElement("tr")
        let th = document.createElement("th")
        th.scope = "row"
        th.innerHTML = ct++;
        let td1 = document.createElement("td")
        td1.innerHTML = key;
        let td2 = document.createElement("td")
        td2.innerHTML = value;

        tr.append(th, td1, td2)
        t_body.append(tr)
    }

    t.append(t_head, t_body)

    let btns = document.createElement("div")
    btns.classList.add("col-12", "text-left", "mb-5")
    
    let btn1 = document.createElement("button")
    btn1.classList.add("btn", "btn-outline-success", "m-3")
    btn1.innerHTML = "Add Pet"
    btn1.onclick = function(){
        addItem();
        
    }
    
    let btn2 = document.createElement("button")
    btn2.classList.add("btn", "btn-outline-warning", "m-3")
    btn2.innerHTML = "Pet Details"
    btn2.onclick = function(){
        details();
    }

    btns.append(btn1, btn2)
    col2.append(t, btns)
}

function addRequest(){
    col2.innerHTML = ""
    let form = document.createElement("form")
    form.classList.add("text-center")

    let fr = document.createElement("div")
    fr.classList.add("form-row")

    let fcol1 = document.createElement("div")
    fcol1.classList.add("col-md-8", "mt-3", "offset-md-2")

    let lbl1 = document.createElement("label")
    lbl1.setAttribute("for", "rq")
    lbl1.innerHTML = "<strong>Request Pet Types :</strong> (can add multiple pets with comma without space and starting with Capital letter.) <br>Eg : Dog,Cat,Parrot"
    let inp1 = document.createElement("input")
    inp1.classList.add("form-control")
    inp1.id = "rq"
    inp1.required = true;
    inp1.type = "text"

    fcol1.append(lbl1, inp1)
    fr.append(fcol1)

    let addbtn = document.createElement("button")
    addbtn.classList.add("btn", "btn-success", "m-3", "mt-5")
    addbtn.innerHTML = "Add Pet"
    addbtn.type = "submit"

    let backbtn = document.createElement("button")
    backbtn.classList.add("btn", "btn-danger", "m-3", "mt-5")
    backbtn.innerHTML = "back"
    backbtn.onclick = function() {
        rPets();
    }

    form.onsubmit = function(){
        let data = document.getElementById("rq").value.split(",")
        delObject.insert(...data);
        rPets();
    }

    form.append(fr, addbtn, backbtn)
    col2.append(form)
}

function removeRequest(){
    col2.innerHTML = ""
    let form = document.createElement("form")
    form.classList.add("text-center")

    let fr = document.createElement("div")
    fr.classList.add("form-row")

    let fcol1 = document.createElement("div")
    fcol1.classList.add("col-md-8", "mt-3", "offset-md-2")

    let lbl1 = document.createElement("label")
    lbl1.setAttribute("for", "rr")
    lbl1.innerHTML = "<strong>Enter Pet Request ID :</strong>"
    let inp1 = document.createElement("input")
    inp1.classList.add("form-control")
    inp1.id = "rr"
    inp1.required = true;
    inp1.type = "text"

    fcol1.append(lbl1, inp1)
    fr.append(fcol1)

    let addbtn = document.createElement("button")
    addbtn.classList.add("btn", "btn-success", "m-3", "mt-5")
    addbtn.innerHTML = "Remove Pet"
    addbtn.type = "submit"

    let backbtn = document.createElement("button")
    backbtn.classList.add("btn", "btn-danger", "m-3", "mt-5")
    backbtn.innerHTML = "back"
    backbtn.onclick = function() {
        rPets();
    }

    form.onsubmit = function(){
        let data = parseInt(document.getElementById("rr").value)
        delObject.removeRequest(data);
        rPets();
    }

    form.append(fr, addbtn, backbtn)
    col2.append(form)
}

function rPets(){
    col2.innerHTML = ""
    let t = document.createElement("table")
    t.classList.add("table", "table-hover")

    let t_head = document.createElement("thead")
    let tr_head = document.createElement("tr")
    
    let th0 = document.createElement("td")
    th0.scope = "col"
    th0.innerHTML = "<strong>REQUEST ID</strong>"
    
    let th1 = document.createElement("td")
    th1.scope = "col"
    th1.innerHTML = "<strong>REQUESTED PETS</strong>"

    let th2 = document.createElement("td")
    th2.scope = "col"
    th2.innerHTML = "<strong>STATUS</strong>"

    tr_head.append(th0, th1, th2)
    t_head.append(tr_head)

    let t_body = document.createElement("tbody")

    function avnot(data){
        if(data == undefined){
            return "-"
        }
        if(data){
            return "&#10004;&nbsp;&nbsp;Available"
        }else{
            return "&#10006;&nbsp;&nbsp;Not Available"
        }
    }

    let ct = 1
    for (let i in delObject.enquiryList){
        let tr = document.createElement("tr")
        let th = document.createElement("th")
        th.scope = "row"
        th.innerHTML = ct++;
        let td1 = document.createElement("td")
        td1.innerHTML = delObject.enquiryList[i];
        let td2 = document.createElement("td")
        td2.id = `td${i}`
        td2.innerHTML = "-"
        tr.append(th, td1, td2)
        t_body.append(tr)
    }

    t.append(t_head, t_body)

    let btns = document.createElement("div")
    btns.classList.add("col-12", "text-left", "mb-5")
    
    let btn1 = document.createElement("button")
    btn1.classList.add("btn", "btn-outline-success", "m-3")
    btn1.innerHTML = "Add Request"
    btn1.onclick = function(){
        addRequest();
        
    }
    
    let btn2 = document.createElement("button")
    btn2.classList.add("btn", "btn-outline-danger", "m-3")
    btn2.innerHTML = "Remove Request"
    btn2.onclick = function(){
        removeRequest();
    }

    let reqbtns = document.createElement("div")
    reqbtns.classList.add("col", "text-center", "alert", "alert-primary", "mb-5", "p-0")
    reqbtns.style.display = "inline-block"
    reqbtns.setAttribute("role", "alert")
    reqbtns.style.padding = "0"
    
    let para = document.createElement("p")
    para.style.display = "inline-block"
    para.innerHTML = "CHECK AVAILABILITY FOR : "
    para.style.marginRight = "20px"

    let reqbtn1 = document.createElement("button")
    reqbtn1.classList.add("btn", "btn-outline-dark", "m-3", "ml-3", "mr-3")
    reqbtn1.innerHTML = "Top 5 Requests"
    reqbtn1.onclick = function(){
        let data = delObject.fiveStatus()
        for(let i = 0; i < delObject.enquiryList.length; i++){
            document.getElementById(`td${i}`).innerHTML = "-"
        }
        console.log(data)
        for(let i = 0; i < data.length; i++){
            document.getElementById(`td${i}`).innerHTML = avnot(data[i])
        }
    }
    
    let reqbtn2 = document.createElement("button")
    reqbtn2.classList.add("btn", "btn-outline-dark", "m-3", "ml-3", "mr-3")
    reqbtn2.innerHTML = "All Requests"
    reqbtn2.onclick = function(){
        let data = delObject.allStatus()
        console.log(data)
        for(let i = 0; i < data.length; i++){
            document.getElementById(`td${i}`).innerHTML = avnot(data[i])
        }
    }

    reqbtns.append(para, reqbtn1, reqbtn2)
    btns.append(btn1, btn2, reqbtns)
    col2.append(t, btns)
}

row1.appendChild(col2)
main_container.append(row1)
document.body.appendChild(main_container)
document.body.style.boxSizing = "border-box"