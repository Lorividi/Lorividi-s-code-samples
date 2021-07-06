'use strict'

let login;
    login = prompt ('Your login?')

    if (login == 'admin') {
        
        let pass;
            pass = prompt ('Your passworld')

            if (pass == 'admin') {
                alert ('Hello!')
            } else if (pass == null || pass == ' ' ) {
                alert ('cancel by user')
            } else {
                alert ('wrong pass')
            }
    } else if (login == null || login == ' ') {
        alert ('cancel by user');
    } else {
        alert ('wrong username')
    }
    
/* Напишите код, который будет спрашивать логин с помощью prompt.
Если посетитель вводит «Админ», то prompt запрашивает пароль, 
если ничего не введено или нажата клавиша Esc – показать «Отменено»,
 в противном случае отобразить «Я вас не знаю».
Пароль проверять так:

    Если введён пароль «Я главный», то выводить «Здравствуйте!»,
    Иначе – «Неверный пароль»,
    При отмене – «Отменено». */