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
let isLevelselected = false;

const levelButtons = [];
levelButtons[0] = document.getElementById('very-easy');
levelButtons[1] = document.getElementById('easy');
levelButtons[2] = document.getElementById('normal');
levelButtons[3] = document.getElementById('hard');
levelButtons[4] = document.getElementById('very-hard');

console.log(levelButtons);

function hiddenLevel () {
  if (!isLevelselected){      
      for (let lev=0; lev <=4; lev++){
          if (lev !== level) {
            console.log(lev);
            console.log(levelButtons[lev]);
            levelButtons[lev].classList.add ('passive');
          }
        }
  } else{
      for (let lev=0; lev <=4; lev++){
        if (lev !== level) {
        console.log(lev);
        console.log(levelButtons[lev]);
        levelButtons[lev].classList.remove('passive');
        }
     }
    }
  }

function selectedLevel () {
    for (let lev=0; lev <=4; lev++) {
        console.log(levelButtons[lev]);
        levelButtons[lev].addEventListener('click',  {
          handleEvent(event) {
            if (!isLevelselected) {
            event.currentTarget.classList.add('activ-button');
            level = lev;
            console.log (level);
            hiddenLevel ()
            isLevelselected= true;
            }else {
              event.currentTarget.classList.remove('activ-button'); 
              hiddenLevel (); 
              isLevelselected = false;
            }
          }
        });
    };
    return level;
  }

  selectedLevel ();


