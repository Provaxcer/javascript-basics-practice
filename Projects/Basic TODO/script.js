const input = document.querySelector("#taskInput")
const submit = document.querySelector("#btn")
const list = document.querySelector(".list")
const deletebtn = document.querySelector("#delete")

submit.addEventListener("click", function(){
    const typedvalue = input.value;

    const newli = document.createElement("li")
    newli.textContent = typedvalue;

    list.append(newli)

    input.value = ""

    
})

deletebtn.addEventListener("click", function(){
    const lastli = list.lastElementChild

    lastli.remove()
})