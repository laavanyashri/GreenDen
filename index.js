//selecting side nab bar

var sidenav=document.getElementById("sidenav");
var menuicon= document.getElementById("menu-icon");
var closenav= document.getElementById("close-nav");
menuicon.addEventListener("click",function()
    {
        sidenav.style.right=0
    }
)


closenav.addEventListener("click",function()
    {
     
        sidenav.style.right="-50%"
    }
)