const deg = 6;
const hr = document.querySelector('.hour');
const mn = document.querySelector('.minute');
const sc = document.querySelector('.second');
const toggleBtn = document.querySelector('.toggle');

setInterval(() => {
    let date = new Date();
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * deg;
    let ss = date.getSeconds() * deg;

    hr.style.transform = `rotate(${(hh + (mm/12))}deg)`;
    mn.style.transform = `rotate(${mm}deg)`;
    sc.style.transform = `rotate(${ss}deg)`;
});

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
})