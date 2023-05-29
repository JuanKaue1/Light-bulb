const body = document.querySelector('body');
const img = document.querySelector('img');
const audio = document.querySelector('audio');
const favicon_off = document.querySelector('.favicon');
const text_xt = document.querySelector('.text_xt');
img.addEventListener('click', () => {
    audio.currentTime = 0;
    if (body.style.backgroundColor !== 'white') {
        body.style.backgroundColor = 'white';
        img.src = 'assets/images/on.png';
        img.title = 'Ligado';
        img.alt = 'Ligado';
        audio.play()
        favicon_off.href = 'assets/favicon/favicon_on.png';
        text_xt.text = 'Ligado';
    } else {
        body.style.backgroundColor = 'black'
        img.src = 'assets/images/off.png';
        img.title = 'Desligado';
        img.alt = 'Desligado';
        audio.play();
        favicon_off.href = 'assets/favicon/favicon_off.png';
        text_xt.text = 'Desligado';
    }
})