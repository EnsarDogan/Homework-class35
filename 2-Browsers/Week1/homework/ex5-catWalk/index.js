'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
function catWalk() {
   const image = document.querySelector('body img');
   image.style.left = '0px';

   let position = 0;
   let stop = false;
   let oneTimeExecuter = false;
   const stepLength = 10; 
   const catWidth = 150; //To find the exact middle of the screen, taken into account of the width of the cat.

   setInterval(() => {
      if (stop) {
         return;
      } // it will last 5 seconds for stop variable being true. 

      if (isInTheMiddle()) {
         stop = true;
         oneTimeExecuter = true;
         image.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
         setTimeout(() => { 
            image.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif'; 
            stop = false; 
         }, 5000);
         return;
      }
      if (position > document.body.offsetWidth) {
         position = 0;
         oneTimeExecuter = false; // needed to reactivate isInTheMiddle controller
      }
      walk();
   }, 50);

   const isInTheMiddle = () => {
      if (oneTimeExecuter)
         return false;
      return (position + catWidth) > (document.body.offsetWidth / 2)
   }

   const walk = () => {
      position += stepLength;
      image.style.left = (position + 'px');
   }

}

window.addEventListener('load', catWalk)


