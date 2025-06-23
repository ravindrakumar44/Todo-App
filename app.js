// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log("div was clicked");
// })

// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// })

// for(li of lis){
//     li.addEventListener("click",function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     })
// }

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    let delBtn = document.createElement("button");

    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";

    delBtn.innerText = "delete";
    item.appendChild(delBtn);
    delBtn.classList.add("delete");
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})


// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         par.remove();      
//     })
// }
