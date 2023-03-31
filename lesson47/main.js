
var namesarray=[]
var ul=document.getElementById("ullist")
document.getElementById("addbtn").addEventListener("click",function(){
    var txt=document.getElementById("textinput").value
    console.log(txt)
    namesarray.push(txt)
    localStorage.setItem("names",JSON.stringify(namesarray))
    var li=document.createElement("li")
    li.innerHTML=txt
    ul.appendChild(li)
})
var names=JSON.parse(localStorage.getItem("names"))
names.forEach(element => {
    var li=document.createElement("li")
    li.innerHTML=element;
    ul.appendChild(li)
});