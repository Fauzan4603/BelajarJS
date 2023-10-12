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

let p = document.querySelector("p")
let button = document.querySelector("button")
let input = document.querySelector("input")
button.addEventListener('click', function(){
    let isi = input.value
    console.log(isi)
    p.innerHTML = isi
})