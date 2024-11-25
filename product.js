//selecting side nab bar

var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menu-icon");
var closenav = document.getElementById("close-nav");
menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
}
)


closenav.addEventListener("click", function () {

    sidenav.style.right = "-50%"
}
)


//search functionality for product

var productcontainer = document.getElementById("product-container");
var search = document.getElementById("search");
var productList = productcontainer.querySelectorAll("div");
console.log(productList); //it shows all div elements

search.addEventListener("keyup", function () //onentering key
{

    // var enteredvalue=event.target.value.toUpperCase();
    //or
    var enteredvalue = this.value.toUpperCase(); //change it to uppper case to avoid case sensitive

    for (count = 0; count < productList.length; count = count + 1) //loop through each dive element
    {
        var productname = productList[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0) //if search text eg: li not found which returns -1
        {
            productList[count].style.display="none";
        }

        else{
            productList[count].style.display="block"; //if search result found display the result
        }
    }
})