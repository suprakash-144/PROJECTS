const body = document.getElementById("clicker");
var initial = document.getElementById("count");
let count=0;
// initial.innerHTML = count;
body.addEventListener('click', () => {   
    initial.innerHTML = ++count;
});