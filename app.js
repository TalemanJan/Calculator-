function add() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
  
    if (!isNaN(num1) && !isNaN(num2)) {
      let sum = num1 + num2;
      document.getElementById("result").innerHTML = "Sum is: " + sum;
    } else {
      document.getElementById("result").innerHTML ="Please enter valid numbers" ;
    }
  }
  

  function sub(){

let num1=parseInt(document.getElementById('num1').value)
let num2=parseInt(document.getElementById('num2').value)

if(!isNaN(num1) && !isNaN(num2)){
    let sub=num1-num2
    document.getElementById("result").innerHTML=`The Sum is : ${sub} `
}
else{
document.getElementById("result").innerHTML="Please enter valid numbers."
}
  }


 function multiply(){
  let num1=parseInt(document.getElementById('num1').value)
  let num2=parseInt(document.getElementById('num2').value)

if(!isNaN(num1) && !isNaN(num2))
{
  let multiply=num1*num2
    document.getElementById("result").innerHTML=`The Sum is : ${multiply} `

}

else{
document.getElementById("result").innerHTML="Please enter valid numbers."

}




 }



 function divide(){
if(!isNaN(num1) && !isNaN(num2))
{
let divide=num1/num2;
document.getElementById("result").innerHTML=`The Sum is : ${divide} `
}

 }