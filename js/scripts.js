// Business Logic 

let neighbor1 = [];

const usernumbers = document.querySelector('#numberinput');


// while ( usernumer > 1)


function checkformatch(element) {
  for (let i = 0; i <= usernumbers; i++) {
    const element = i.toString();
    if (element.includes(1)) {
      neighbor1.push('Wont you be my neighbor?');
    }else if (element.includes(2)) {
      neighbor1.push('boop!'); 
    }else if (element.push(3)){
      neighbor1.push('Beep!');
     } else {
      neighbor1.push(element);

      }
    }
      return checkformatch;   
  }
  
   
    // userinterface logic.

  

  window.addEventListener('load', function (event) {
    event.preventDefault();
  const form = document.getElementById('rogersForm').value;
  form.addEventListener('submit', checkformatch);
  
}); 