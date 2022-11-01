// Business Logic 

let neighbor1 = [];


// while ( usernumer > 1)


function checkformatch(event) {
  const usernumbers = document.getElementById('numberinput').value;
  event.preventDefault();
  for (let i = 0; i <= usernumbers; i++) {
    const element = i.toString();
    if (element.includes(1)) {
      neighbor1.push('Wont you be my neighbor?');
    }else if (element.includes(2)) {
      neighbor1.push('boop!'); 
    }else if (element.includes(3)){
      neighbor1.push('Beep!');
    } else {
      neighbor1.push(element);

      }
    } console.log(neighbor1);

      return checkformatch;   

  } 

    // userinterface logic.



  window.addEventListener('load', function () {
  const form = document.getElementById('rogersForm');
  form.addEventListener('submit', checkformatch);
}); /*global $*/


