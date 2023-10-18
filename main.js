//console.log("Halo bro")
//alert("ada notifikasi")
//prompt("pinjem seratus")

//var Promnet = "Coding is easy"
//console.log(Promnet)
//var Promnet = "Coding is not easy"
//console.log(Promnet)
//var Promnet = "nothing is possible"
//console.log(Promnet)

// let Promnet="Coding is fun"
// console.log(Promnet)
// let Promnet="Coding is not fun"
// console.log(Promnet)

// const Promnet="coding is my life"
// console.log(Promnet);
// const Promnet="coding is not my life"
// console.log(Promnet);

// let totalPoint = prompt ("Masukkan point anda")
// if (totalPoint >= 100){
//     document.write("congratulation")
// }
// else{
//     document.write("keep trying")
// }

// let [x, y] = [6, 3]
// console.log(x<10 && y>1)
// console.log(x<10 && y<1)
// console.log(x==5||y==5)
// console.log(x==6||y==5)
// console.log(!(x==y))

// document.write(x<10 && y>1)
// document.write("<br>")
// document.write(x<10 && y<1)

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")
// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })
function addTask() {
    const taskText = document.getElementById("task").value;
    if (taskText === "") {
        alert("Harap masukkan tugas!");
        return;
    }

    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("li");
    const span = document.createElement("span");
    const id = "" + (new Date()).getTime();

    const check = document.createElement("input");
    check.type = "checkbox";
    check.id = id;
    check.addEventListener("change", function() {
        check.nextElementSibling.classList.toggle("checked");
    });

    const label = document.createElement("label");
    label.htmlFor = id;
    label.innerText = taskText;

    span.appendChild(check);
    span.appendChild(label);

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", function deleteTask(e) {
        const taskList = document.getElementById("taskList");
        const taskItem = e.target.parentElement;
        taskList.removeChild(taskItem);
    });
    deleteButton.innerText = "X";
    
    taskItem.appendChild(span);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    document.getElementById("task").value = "";
}
