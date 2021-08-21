const BMI = () =>{
  let inputValueName = document.getElementById("n").value; 
  document.getElementById("name").innerHTML = "Name: " + inputValueName; 

  let inputValueHeight = document.getElementById("h").value; 
  let inputValueWeight = document.getElementById("w").value; 
  let answerBMI = (inputValueWeight) / (inputValueHeight ** 2); 
  let answerBMITwo = answerBMI.toFixed(2);
  document.getElementById("BMI").innerHTML = "BMI: " + answerBMITwo;

  if (answerBMITwo > 24.9){
    document.getElementById("statement").innerHTML = inputValueName + " " + "is overweight.";
  }

  else if (answerBMITwo < 18.5){
    document.getElementById("statement").innerHTML = inputValueName + " " + "is underweight.";
  }
  
  else {
    document.getElementById("statement").innerHTML = inputValueName + " " + "is in a healthy weight.";
  }
}