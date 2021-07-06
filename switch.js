'use strict'

let browser;
 browser = prompt ('Name of you browser', 'Edge');

    if (browser == 'Edge') {
        alert (`Ok, ${browser} supported`)
    } else if (browser == 'Opera'
    || browser == 'Chrome'
    || browser =='Firefox'
    || browser =='Safari' ) {
        alert (`Ok, we supprt ${browser} too`)
    } else {
        alert( 'We hope that this page looks ok!' )
    }

/* Напишите if..else, соответствующий следующему switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
} */

const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
  case 0:
    alert('You number = 0');
    break;

  case 1:
    alert ('You number = 1');
    break;

  case 2:
  case 3:
    alert ('You number = 2, or maby = 3');
    break;
    
    default: 
           alert ('You namber < 0, or > 3');
}

/* Перепишите код с использованием одной конструкции switch:

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
} */