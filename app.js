var btnTranslate=document.querySelector("#btn-click");
console.log(btnTranslate);

function myfunction(){
    alert("Button clicked");
    console.log("clicked");
}

btnTranslate.addEventListener("click",myfunction);