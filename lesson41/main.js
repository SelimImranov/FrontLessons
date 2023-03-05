var gift=document.querySelectorAll(".btngift")
gift.forEach(element => {
    element.addEventListener("click",function(){
      console.log(element.firstElementChild)
     var d=element.firstElementChild
     var qaqzanilan=element.firstElementChild
     qaqzanilan.classList.remove("d-none")


    })

});















// var gift=document.querySelectorAll(".btngift")
// gift.forEach(element => {
//     element.addEventListener("click",function(){
//     var count=0;
//     if(count<3){
//         console.log(element.parentElement.parentElement.firstElementChild)
//     console.log(element.nextElementSibling)
//     var img=element.parentElement.parentElement.firstElementChild
//     img.style.filter="blur(0px)"
//     var qaqzanilan=element.nextElementSibling
//     qaqzanilan.classList.remove("d-none")
//     }
// });
// });


  
// var ul = document.createElement("ul")
// document.getElementById("addbtn").addEventListener("click",todolist)
// function todolist() {
//     var input = document.getElementById("textinput").value
//     if(input==""){
//         alert("bu bosduqdur emelliyat taoilmadi")
//     }else{
//         var li = document.createElement("li")
//         li.innerHTML = input
//         li.classList.add("list-group-item")
//         ul.classList.add("list-group")
//         ul.classList.add("container")
//         ul.appendChild(li)
//         var input = document.getElementById("textinput").value=" "
//     }
    
// }
// document.body.appendChild(ul) 