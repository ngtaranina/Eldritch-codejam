// Импортируем сонстанты 
import {ancients} from './const.js';
import {blueCards} from './const.js';
import {brounCards} from './const.js';
import {greenCards} from './const.js';
import {difficulties} from './const.js';

ancients.cthulhu.plaseCard = document.getElementById('cthulhu');
ancients.shubNiggurath.plaseCard = document.getElementById('shubNiggurath');
ancients.iogSothoth.plaseCard = document.getElementById('iogSothoth');
ancients.azathoth.plaseCard = document.getElementById('azathoth');


console.log ("ancients");
console.log (ancients);


  console.log ("ancients.shubNiggurath.firstStage");
  console.log (ancients.shubNiggurath.firstStage);
  console.log (ancients.shubNiggurath.firstStage.greenCards);


  console.log ("ancients.iogSothoth.firstStage");
  console.log (ancients.iogSothoth.firstStage);
  console.log (ancients.iogSothoth.firstStage.greenCards);

  console.log ("ancients.azathoth.firstStage");
  console.log (ancients.azathoth.firstStage);
  console.log (ancients.azathoth.firstStage.greenCards);

let activetedCard = () => {
  console.log (this);
}

// Определяем ВРАГА (древнего) - enemy
let enemy;
let isCardActiv = false; // в начале карта не выбрана
// Убираем "неактивных" Древних
function hiddenAncients () {
  if (!isCardActiv){      
      for (let key in ancients){
          if (key !== enemy) {
            console.log(key);
            console.log(ancients[key].plaseCard);
            ancients[key].plaseCard.classList.add ('passive');
          }
        }
  } else{
      for (let key in ancients){
        if (key !== enemy) {
        console.log(key);
        console.log(ancients[key].plaseCard);
        ancients[key].plaseCard.classList.remove('passive');
        }
     }
    }
  }
// Функция выбирающая и отмечающая врага
function selectedEnemy () {
  for (let key in ancients) {
      console.log(ancients[key].plaseCard);
      (ancients[key].plaseCard).addEventListener('click',  {
        handleEvent(event) {
          if (!isCardActiv) {
          event.currentTarget.classList.add('activ');
          enemy = key;
          console.log (enemy);
          hiddenAncients ()
          isCardActiv= true;
          }else {
            event.currentTarget.classList.remove('activ'); 
            hiddenAncients (); 
            isCardActiv = false;
          }
        }
      });
  };
  return enemy;
}

selectedEnemy ();

//Определяем уровень сложности

let level;
let isLevelselected = false




