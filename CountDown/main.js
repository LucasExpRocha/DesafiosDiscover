function playCountdown() { 
    let seconds = +document.querySelector('.seconds').innerText;
    let minutes = +document.querySelector('.minutes').innerText;
    let hours = +document.querySelector('.hours').innerText;
    let days = +document.querySelector('.days').innerText;

    timerTimeout = setTimeout(() => {

        if(!seconds && !minutes && !hours && !days){
            alert('done')
            return
        }
        if(!hours && days){
            hours = 24;
            document.querySelector('.hours').innerText = (String(hours).padStart(2, '0'));            
            document.querySelector('.days').innerText = (String(days - 1).padStart(2, '0'));
        }

        if(!minutes && hours){
            minutes = 60;
            document.querySelector('.minutes').innerText = (String(minutes).padStart(2, '0'));            
            document.querySelector('.hours').innerText = (String(hours - 1).padStart(2, '0'));
        }

        if (!seconds && minutes){
            seconds = 60;
            document.querySelector('.minutes').innerText = (String(minutes - 1).padStart(2, '0'));
        }

        document.querySelector('.seconds').innerText = (String(seconds - 1).padStart(2, '0'));

        playCountdown();
    }, 1000)
}


playCountdown()