// Business Logic 

let neighbor1 = [];
let neighbor2 = [];
let neighbor3 = [];

const usernumbers = parseInt(document.querySelector('#usernumbers'));


// while ( usernumer > 1)


function checkformatch(element) {
  for (let i = 0; i <= usernumbers; i++) {
    const element = i.toString();
    if (element.includes(3)) {
      neighbor1.push('Won t you be my neighbor?');
    }else if (element.includes(2)) {
      neighbor1.push('boop!'); 
    }else if (element.push(1)){
      neighbor1.push('Beep!');
     } else {
      neighbor1.push(element);

      }
    }
      return neighbor1;   
  }
console.log('checkformatch')

  window.addEventListener('load', function (event) {
  const form = document.getElementById('rogersForm');
  form.addEventListener('submit', checkformatch);
  event.preventDefault();
});
