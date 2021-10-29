const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');
const circleSec = document.querySelector('.circle-sec circle');
const circleMin = document.querySelector('.circle-min circle');
const circleHours = document.querySelector('.circle-hours circle');
const circleDays = document.querySelector('.circle-days circle');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
const perimeter = circleSec.getAttribute('r') * 2 * Math.PI;
circleSec.setAttribute('stroke-dasharray', perimeter);
circleMin.setAttribute('stroke-dasharray', perimeter);
circleHours.setAttribute('stroke-dasharray', perimeter);
circleDays.setAttribute('stroke-dasharray', perimeter);

// set upcoming year
year.innerText = currentYear + 1;

// update countdown
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // display time
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;

  // display circle animation
  circleSec.setAttribute('stroke-dashoffset',
    perimeter * s / 60 - perimeter
  );
  circleMin.setAttribute('stroke-dashoffset',
    perimeter * m / 60 - perimeter
  );
  circleHours.setAttribute('stroke-dashoffset',
    perimeter * h / 24 - perimeter
  );
  circleDays.setAttribute('stroke-dashoffset',
    perimeter * d / 365 - perimeter
  );
}

// show spinner
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

// update countdown every second
setInterval(updateCountdown, 1000);
