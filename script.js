//your code here


let string = document.getElementById("evaluatedText");
let count = document.getElementById("letterCount");

string.addEventListener('keyup',()=>{
    let cnt = string.value;
    count.innerText = cnt.length;
})
