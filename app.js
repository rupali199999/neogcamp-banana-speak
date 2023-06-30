var btnTranslate=document.querySelector("#btn-click");
var txtInput=document.querySelector("#txtarea");

var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var txtOutput=document.querySelector("#output");

function getTranslationURL(text)
{
    return serverURL+"?"+"text="+text;
}

function clickHandler(){
    fetch(getTranslationURL(txtInput.value)).then(response=>response.json).then(json=>console.log(json));
}

// fetch(url2).then(response=>response.json()).then(json=>console.log(json))
// https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json

//btnTranslate.addEventListener("click",clickHandler);

