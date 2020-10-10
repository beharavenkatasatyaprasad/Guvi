let main_div = document.createElement("div")
main_div.classList.add("container", "mt-5", "text-center")
// main_div.style.height = "500px"
main_div.style.backgroundColor = "#e0ece4"


let row = document.createElement("div")
row.classList.add("row")

let counter = document.createElement("div")
counter.classList.add("col-md-4", "offset-md-4", "text-center", "rounded", "border", "align-middle")
counter.style.color = "white"
counter.style.backgroundColor = "#ff4b5c"

let message = document.createElement("h1")
message.classList.add("heading")
message.innerHTML = "10"
message.style.fontSize = "10rem"

setTimeout(() => {
    message.innerHTML = "10"
    setTimeout(() => {
        message.innerHTML = "9"
        setTimeout(() => {
            message.innerHTML = "8"
            setTimeout(() => {
                message.innerHTML = "7"
                setTimeout(() => {
                    message.innerHTML = "6"
                    setTimeout(() => {
                        message.innerHTML = "5"
                        setTimeout(() => {
                            message.innerHTML = "4"
                            setTimeout(() => {
                                message.innerHTML = "3"
                                setTimeout(() => {
                                    message.innerHTML = "2"
                                    setTimeout(() => {
                                        message.innerHTML = "1"
                                        setTimeout(() => {
                                            message.innerHTML = "0"
                                            setTimeout(() => {
                                                message.innerHTML = "Happy Independence Day"
                                                message.style.fontSize = "5rem"
                                                counter.classList.add("col-md-12")
                                                counter.classList.remove("offset-md-4")
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);    
                                }, 1000
                                );
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

counter.appendChild(message)
row.appendChild(counter)
main_div.appendChild(row)


document.body.append(main_div)