const drawTimer = (countDownDate, element) => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24)) < 0
	  ? 0
	  : Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) < 0
	  ? 0
	  : Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) < 0
	  ? 0
	  : Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000) < 0
	  ? 0
	  : Math.floor((distance % (1000 * 60)) / 1000);

    let text = '';

    if (days > 0) {
        if (days > 1) {
            text = days + ' days, ';
        }
        else {
            text = days + ' day, ';
	}
    }

    if (hours > 0) {
        if (days > 0) {
            text += hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
	}
	else {
            text += hours + ':' + minutes.toString().padStart(2, '0');
	}
    }
    else {
        text += minutes;
    }

    document.getElementById(element).innerHTML = text + ':' + seconds.toString().padStart(2, '0');

};
