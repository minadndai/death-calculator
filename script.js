// Creating a function to allow user to input their age, and then calculate a result based on random number

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

// Find #display and then create text as below

document.getElementById("display").innerHTML = "You have " + death + " years to live! Good luck!";

}

// Creating a function to clear #display

function restart(){
  document.getElementById("display").innerHTML = "";
}
