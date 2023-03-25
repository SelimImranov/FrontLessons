
document.getElementById("month").addEventListener("change",function(){
  getislamictime(this.value)
})

function getislamictime(monthdata){
  fetch(`http://api.aladhan.com/v1/calendarByCity/2023/${monthdata}?city=Baku&country=Azerbaijan&method=2`)
      .then(response => response.json())
      .then(json => {
        var date=new Date()
        console.log(json)
       var nowday= date.getDate()-1;
        document.getElementById("Subh").innerHTML=json.data[nowday].timings.Fajr
        document.getElementById("Zohr").innerHTML=json.data[nowday].timings.Dhuhr
        document.getElementById("Esr").innerHTML=json.data[nowday].timings.Asr
        document.getElementById("Megrib").innerHTML=json.data[nowday].timings.Maghrib
        document.getElementById("Isa").innerHTML=json.data[nowday].timings.Isha
      })
}


















// document.getElementById("btn").addEventListener("click", function(){
//   var input=document.getElementById("inp").value
//   getdata(input)
  
// })
//  function getdata(username){
//     fetch(`https://api.github.com/users/${username}`)
//       .then(response => response.json())
//       .then(json =>{
//         document.write(json.id)
//       })

// }
