function add() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
  
    if (!isNaN(num1) && !isNaN(num2)) {
      let sum = num1 + num2;
      document.getElementById("result").innerHTML = "Sum is: " + sum;
    } else {
      document.getElementById("result").innerHTML = "Please enter valid numbers.";
    }
  }
  

  function sub(){




  }