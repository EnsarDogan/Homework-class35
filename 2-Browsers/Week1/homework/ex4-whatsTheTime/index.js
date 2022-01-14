'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  // TODO complete this function

  window.addEventListener('DOMContentLoaded', getCurrentTime);

  const div = document.createElement('div');
  document.body.appendChild(div);

  function getCurrentTime() {
    
      setInterval(() => {
        const date = new Date();
        const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        div.textContent = time
      }, 1000);
  }}

addCurrentTime()

// TODO execute `addCurrentTime` when the browser has completed loading the page
