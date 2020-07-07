function deathCalculator(){
  let age = prompt("Enter your age:");
    let number = (Math.random()*10) + 1;

    if(age <10) {
      death = Math.round((age/number)+ 85);
    } else if(age >=10 && age <=50){
      death = Math.round((age/number) +60);
    } else {
      death = Math.round((age/number) + 30);
    }

document.getElementById("display").innerHTML = "You have " + death + " years to live! Good luck!";

}

function restart(){
  document.getElementById("display").innerHTML = "";
}
