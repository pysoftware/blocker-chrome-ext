const validateTime = (time) => `${time}`.length === 1
    ? `0${time}`
    : time;

document.addEventListener('DOMContentLoaded', (e) => {
  const date = new Date();
  const currentHour = date.getHours();
  const maxHour = 20;
  const minHour = 8;

  let leftSeconds = 60 - date.getSeconds();
  let leftMinutes = 60 - date.getMinutes();
  let leftHours = maxHour - date.getHours() - 1;

  if (
      window.location.href.match(/vk|instagram/)
  ) {
    if (currentHour - maxHour > 0 && currentHour >= minHour) {
      window.document.documentElement.innerHTML = `
      <div class="center">
        <h1>
            Ха, бан!
        </h1>
        <img 
          class="img"
          src="https://foodandhealth.ru/wp-content/uploads/2016/07/cyplenok.jpg"
          alt="soska"
         >
        <h2>Времени до разблокировки:</h2>
        <h2 id="timer">
            ${validateTime(leftHours)}:${validateTime(
          leftMinutes)}:${validateTime(leftSeconds)}
        </h2>
      </div>
    `;

      const timer = document.getElementById('timer');
      setInterval(() => {
        leftSeconds -= 1;

        if (leftSeconds <= 0) {
          if (leftHours === 0 && leftMinutes === 0) {
            leftSeconds = 0;
          } else {
            leftSeconds = 59;
            leftMinutes -= 1;
          }
        }
        if (leftMinutes <= 0) {
          if (leftHours === 0) {
            leftMinutes = 0;
          } else {
            leftMinutes = 59;
            leftHours -= 1;
          }
        }

        timer.textContent = `
          ${validateTime(leftHours)}:${validateTime(leftMinutes)}:${leftSeconds}
        `;
        if (+leftHours === 0 && +leftMinutes === 0 && +leftSeconds === 0) {
          window.location.reload();
        }
      }, 1000);
    }
  }
});
