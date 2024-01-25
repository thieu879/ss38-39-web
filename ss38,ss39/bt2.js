let start = document.getElementById("container")
let count=2
function change(){
    count++
    if(count%2!=0){
        start.innerHTML=`<div id="container">
        <div id="btn" onclick="change()" class="change" ><button class="material-symbols-outlined change">search</button></div>
        <input type="search" class="b" placeholder="search...">
    </div>`
        start.classList.add("a");
    }else{
        start.innerHTML=`<div id="container">
        <div id="btn" onclick="change()" class="change" ><button class="material-symbols-outlined change">search</button></div>
    </div>`
        start.classList.remove("a");
        start.classList.remove("material-symbols-outlined");
    }
}