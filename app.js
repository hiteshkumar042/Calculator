const result = document.getElementById('result')
const inputExp = document.getElementById('inputExp')



function handleClick(el){

const exp = `${inputExp.value}${el.innerText}`
inputExp.value = exp;
console.log(exp);
if(["+","-","*","/"].includes(el.innerText)){
return    
}
result.value = eval(exp)
}


function Clear (){
    inputExp.value=""
    result.value= "";
}
