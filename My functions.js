'use strict'

function confirmRegistration () {

    let user_confirm;
    user_confirm = +confirm ('Вы согласны пройти регистрацию?') 
  
      if (user_confirm == 1) {
          alert ('Хорошо, теперь следуйте инструкциям далее')
          testHuman ();
      } else {
        alert ('Отменено пользователем')
      }
    
  }

function badUser () {
    alert ('Регистрация отменена');
}

function testHuman () {

    alert ('Запомните следующие цифры')

    for (let a = 0; a < 5; ++a) {
        alert (a);
    } 
    
      let user_answer;
      user_answer = +prompt ('Какая цифра будет выведенна следующей?');
    
      switch (user_answer) {
    
        case 5:
    
          alert ('Правильно');
            registration ();
            break;
          
        default :
    
          let user_retry;
          user_retry = +confirm (' Не верно... \n Хотите попробовать ещё раз?');
          
            if (user_retry == 1) {
                testHuman ();
          
            } else {
                badUser ()
          }
      }
    }

    function registration () {
    
        let username;
        username = prompt ('Введите имя пользователя');
    
        let pass;
        pass = prompt ('Введите пароль');
    
        let pass_conf;
        pass_conf = prompt ('Подтвердите пароль');
    
        if (pass == pass_conf) {
            alert (` Регистрация пройдена успешно! \n Ваш логин ${username} \n Ваш пароль ${pass}`)
        } else {
            let user_conf_for_retry;
            user_conf_for_retry = +confirm ('Пароли не соходятся, желаете попробовать ещё раз?');
    
                if (user_conf_for_retry == 1) {
                    registration();
                } else {
                    badUser ()
                }
        }
    }

    confirmRegistration ()