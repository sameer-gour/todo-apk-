let input = document.querySelector("input")
let task =' '
input.addEventListener('input',function(elem){
task =   elem.target.value
console.log(task);
 
})


let ul = document.querySelector("#task")
let btn = document.querySelector("button")


btn.addEventListener("click", addTask);

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
        
    }
});

function addTask() {
    let li = document.createElement("li");

    li.innerText = task;
    li.classList.add("task");

    ul.appendChild(li);
    input.value = "";
    task = "";

}


ul.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
    }
});