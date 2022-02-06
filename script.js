   //Timer 

    let deadline = "2022-02-14"; // задаем переменную конечной даты

    function getTimeRemaining (endtime) {       // функция вычисляет разницу в настоящем времени и конечной датой
        let t = Date.parse(endtime) - Date.parse(new Date()),   //  метод parse превращает любую дату в кол-во милисекунд
          // Date.parse(endtime) - дата deadline
            //Date.parse(new Date()) - дата которая есть прямо сейчас
            seconds = Math.floor((t/1000) % 60),         // получаем переменную с секундами из кол-ва милисек., метод floor возвращает только целочисленные значения
            minutes = Math.floor((t/1000/60) % 60),     // получаем переменную с минутами
            hours =  Math.floor((t/(1000*60*60)));      // получаем переменную с часами
            //hours = Math.floor((t/1000/60/60) % 24),  если необходимо в таймер добавить еще и дни
            // days = hours =  Math.floor((t/(1000*60*60*24)));

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            }; // создаем обьект, для того чтоб вернуть все полученные переменные
    }

    function setClock (id, endtime) {      //функция устанавливает и запускает часы на сайте
        let timer = document.getElementById(id), //получаем timer с HTML структуры
            hours = timer.querySelector('.hours'), // получаем часы, минуты и секунды из HTML
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000); //запускаем функцию обновения времени каждую секунду

        function updateClock () {  // функция обновляет таймер каждую секунду
            let t = getTimeRemaining(endtime);

            function addZero(num){ // функция обнуляет таймер после наступления deadline
                if(num <= 9) {
                    return '0' + num;
                } else return num;
            };
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval); // обнуляем наш таймер
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock ('timer', deadline);

});
