export const labelTimer = document.querySelector(".timer");
import { langSelect } from "./lang.js";
export const timer = () => {
  let timer;
  const startTestTimer = function () {
    let time = 0;
    const tick = function () {
      labelTimer.style.color = "#333";
      if (langSelect.value === "ru") {
        labelTimer.textContent = `${time} сек`;
      } else if (langSelect.value === "uz") {
        labelTimer.textContent = `${time} sek`;
      } else {
        labelTimer.textContent = `${time} s`;
      }
      if (time >= 90) {
        labelTimer.style.color = "red";
      }
      time++;
    };
    // check if an interval has already been set up
    if (!timer) {
      timer = setInterval(tick, 1000);
      return timer;
    }
  };
  const stopTestTimer = function () {
    clearInterval(timer);
    timer = null;
  };

  return { startTestTimer, stopTestTimer };
};
