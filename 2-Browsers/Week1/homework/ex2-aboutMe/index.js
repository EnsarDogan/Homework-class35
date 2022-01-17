'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/



document.body.style = "font-family: Arial, sans-serif"

const ul = document.querySelector('ul')
ul.children[0].textContent = 'Mansur'
ul.children[1].textContent = 'Sac Tava'
ul.children[2].textContent = 'Istanbul'

Array.from(ul.children).forEach(li => li.className = 'list-item')
