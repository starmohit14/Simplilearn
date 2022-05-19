let mobile=document.querySelector('input#mobile');

let tablet=document.querySelector('input#tablet');

let laptop=document.querySelector('input#laptop');

let totalcost=document.querySelector('h4#total');

let button=document.querySelector('button#button');

button.addEventListener('click',()=>{
let mobilecost=mobile.value*40000;
let tabletcost=tablet.value*60000;
let laptopcost=laptop.value*80000;  
let total=mobilecost+tabletcost+laptopcost;
totalcost.innerText=total;
})