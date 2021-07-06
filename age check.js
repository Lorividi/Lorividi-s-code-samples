'use strict'

let age;
    age = prompt ('How old are you?');

    if (age >= 14 && age <= 90) {
        alert ('good');
    } else {
        alert ('Too young or old')
    }

/* Напишите условие if для проверки, 
что переменная age находится в диапазоне между 14 и 90 включительно.
«Включительно» означает, что значение переменной age может быть равно 14 или 90. */

// part two

let age;
    age = prompt ('How old are you?');

    if (!(age >= 14 && age <= 90)) {
        alert ('Вне диапазона');
    } else {
        alert ('good')
    }

// part three

let age;
    age = prompt ('How old are you?');

    if (age < 14 || age > 90) {
        alert ('Вне диапазона');
    } else {
        alert ('good')
    }

/* Напишите условие if для проверки,
что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
Напишите два варианта: первый с использованием оператора НЕ !
второй – без этого оператора. */
