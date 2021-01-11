
var input=document.querySelector("#input");
var addBtn=document.querySelector("#add");
var subbtn=document.querySelector("#sub");
var output=document.querySelector("#output");



function addClickHandler(){
    var inputtxt=parseFloat(input.value)
    var add=inputtxt+1

    output.innerText=add

}
function subClickHandler(){
    var inputtxt=input.value
    var inputtxt=parseInt(input.value)
    var sub=inputtxt-1

    output.innerText=sub
}

addBtn.addEventListener("click",addClickHandler);
subbtn.addEventListener("click",subClickHandler);

//how to convert a string in number when user writes three in input and take only number when 3 is given a sinput or three is given
//without parse it is treating it as string it is addin 3 +1=31
//why is it showing nan when 'is 3' give into input evem with parseint function when it should simply read the integer while ignoring other alphabets
//how to run this function againa nd again
// can use input type number to avoid strings but it comes with those two toggles and if i dontuse that and use something ls eto deal with string i wll have to convert number string into number and also hav eto ddeal with those strings which are not numbers and might hav eto show in output that put correct thing--it can be dealt with if else === int something like this
//to treat the result as initial value once a click has hapened