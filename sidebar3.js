let x=document.getElementById("1")
let cross=document.getElementById("3")
cross.addEventListener("click" ,closeNav )

x.addEventListener("click",openNav)

 function openNav()
 {
    let y=document.getElementById("2")
   y.style.display= "block";
   
 }

 function closeNav()
 {
    let y=document.getElementById("2")
    y.style.display= "none";
 }

