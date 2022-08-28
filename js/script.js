console.log(`Оценка = 85 баллов: \n + 4 карты древних(20) \n + 1 уровней сложности(5) \n + карты замешиваются согласно правилам(40) \n + трекер текущего состояния колоды (20)`)
// Импортируем сонстанты 
import {ancients} from './const.js';
import {blueCards} from './const.js';
import {brownCards} from './const.js';
import {greenCards} from './const.js';
import {difficulties} from './const.js';

ancients.cthulhu.plaseCard = document.getElementById('cthulhu');
ancients.shubNiggurath.plaseCard = document.getElementById('shubNiggurath');
ancients.iogSothoth.plaseCard = document.getElementById('iogSothoth');
ancients.azathoth.plaseCard = document.getElementById('azathoth');


// console.log ("ancients");
// console.log (ancients);

//   console.log ("ancients.shubNiggurath.firstStage");
//   console.log (ancients.shubNiggurath.firstStage);
//   console.log (ancients.shubNiggurath.firstStage.greenCards);

// Определяем ВРАГА (древнего) - enemy
let enemy;
let isCardActiv = false; // в начале карта не выбрана
// Убираем "неактивных" Древних
function hiddenAncients () {
  if (!isCardActiv){      
      for (let key in ancients){
          if (key !== enemy) {
            ancients[key].plaseCard.classList.add ('passive');
          }
        }
  } else{
      for (let key in ancients){
        if (key !== enemy) {
          ancients[key].plaseCard.classList.remove('passive');
        }
     }
    }
  }
// Функция выбирающая и отмечающая врага
 function selectedEnemy () {
  for (let key in ancients) {
        (ancients[key].plaseCard).addEventListener('click',  {
        handleEvent(event) {
          if (!isCardActiv) {
          event.currentTarget.classList.add('activ');
          enemy = key;
          console.log ('получили enemy = '+ enemy);
          hiddenAncients ()
          isCardActiv= true;
          }else {
            event.currentTarget.classList.remove('activ'); 
            hiddenAncients (); 
            isCardActiv = false;
            enemy = undefined;
            resetStages ();
          }
        }
      });
  };
  return enemy;
}

//Определяем уровень сложности

let level;
let isLevelselected = false;

const levelButtons = [];
levelButtons[0] = document.getElementById('very-easy');
levelButtons[1] = document.getElementById('easy');
levelButtons[2] = document.getElementById('normal');
levelButtons[3] = document.getElementById('hard');
levelButtons[4] = document.getElementById('very-hard');

function hiddenLevel () {
  if (!isLevelselected){      
      for (let lev=0; lev <=4; lev++){
          if (lev !== level) {
            levelButtons[lev].classList.add ('passive');
          }
        }
  } else{
      for (let lev=0; lev <=4; lev++){
        if (lev !== level) {
         levelButtons[lev].classList.remove('passive');
        }
     }
    }
  }

 function selectedLevel () {
    for (let lev=0; lev <=4; lev++) {
         levelButtons[lev].addEventListener('click',  {
          handleEvent(event) {
            if (!isLevelselected) {
            event.currentTarget.classList.add('activ-button');
            level = lev;
            console.log ('получили level = ' + level);
            hiddenLevel ()
            isLevelselected= true;
            }else {
              event.currentTarget.classList.remove('activ-button'); 
              hiddenLevel (); 
              isLevelselected = false;
              level = undefined;
              resetStages ();
            }
          }
        });
    };
    return level;
  }


// нажимаем на кнопку "Замешать" и получаем количество карт по этапам

let isShuffle = false; //переменная, которая показывает выполнено ли замешивание колоды

//Определяем  места, куда будем записывать количество карт
  

const stage1 = {
  greenCards: document.querySelector('.gr1'),
  brownCards: document.querySelector('.br1'),
  blueCards: document.querySelector('.bl1'),
 };
const stage2 = {
  greenCards: document.querySelector('.gr2'),
  brownCards: document.querySelector('.br2'),
  blueCards: document.querySelector('.bl2'),
}

const stage3 = {
  greenCards: document.querySelector('.gr3'),
  brownCards: document.querySelector('.br3'),
  blueCards: document.querySelector('.bl3'),
}

const stages = [ stage1, stage2, stage3]; // Это места, где записываются количества карт каждого вида

//Функция, проверяющая задан ли Древний
function isEnemy () {
  if (enemy) return true 
  else return false
}
//Функция, проверяющая задан ли уровень сложности
function isLevel () {
  if (level) return true 
  else return false
}

// создадим функцию показывающую в счетчике игры количество карт по этапам

 let numberCard = [[], [], []]; //количество карт каждого вида 
 let numberGreen = 0;  // количество карт зеленого цвета в игре
 let numberBrown = 0;  // количество карт коричневого цвета в игре
 let numberBlue = 0;  // количество карт синего цвета в игре
 let numberAllCards = 0; // количество всего карт в игре
 
 function showNumberShuffleCards () {
   // проверяем какой это клик первый или повторный
  if (!isShuffle) {
    if (enemy === undefined) {
      alert ('Выберите карту Древнего!');
      return;
    }
    if (level === undefined) {
      alert ('Выберите уровеньсложности игры!');
      return;
    }

    for (let key in stage1) {
      stage1[key].textContent = ancients[enemy].firstStage[key];
    }
    for (let key in stage2) {
      stage2[key].textContent = ancients[enemy].secondStage[key];
    }
    for (let key in stage3) {
      stage3[key].textContent = ancients[enemy].thirdStage[key];
    }
  
// Создадим матрицу по количеству карт каждого вида в  Stages numberCard[][].
 
        numberCard[0] = [ 
          ancients[enemy].firstStage.greenCards,
          ancients[enemy].firstStage.brownCards,
          ancients[enemy].firstStage.blueCards,
      ];
        numberCard[1] = [ 
          ancients[enemy].secondStage.greenCards,
          ancients[enemy].secondStage.brownCards,
          ancients[enemy].secondStage.blueCards,
      ];
        numberCard[2] = [ 
          ancients[enemy].thirdStage.greenCards,
          ancients[enemy].thirdStage.brownCards,
          ancients[enemy].thirdStage.blueCards,
      ];

      console.log ( 'создали :', numberCard);

      for (let i = 0; i < 3; i++) {
        numberGreen  += (numberCard[i][0]);
        numberBrown += (numberCard[i][1]);
        numberBlue += (numberCard[i][2]);
      }
      console.log (numberGreen, numberBrown, numberBlue);
      numberAllCards = numberGreen + numberBrown + numberBlue;
      console.log ('numberAllCards = ', numberAllCards);
      isShuffle = true;
   } 
   else {
    alert ('Колода уже замешана!');
   }
 }

// Функция сброса параметров

const restart = document.querySelector('.button-shuffle-restart');
console.log ('restart', restart);

function resetAll () {
  enemy = undefined;
  level = undefined;
  resetStages ();
}

function resetStages () {
  for (let key in stage1) {
    stage1[key].textContent = '';
  }
  for (let key in stage2) {
    stage2[key].textContent = '';
  }
  for (let key in stage3) {
    stage3[key].textContent = '';
  }
  isShuffle = false;
}

// функция получения одного рандомного элемента из массива
function getRandomElement (array) {
  let q = Math.floor(Math.random() * (array.length)); // рандомное число от 0 до длинны массива
  console.log('q = ', q);
  let index;
  let randomElement;
  for (let i = 0; i < array.length; i++) {
      if (i == q ) {
        index = i
        randomElement = array[i];
      }
    }
  array.splice(index, 1);  // удаляем найденный элемент массива, чтобы он не попался второй раз
  console.log('array.length: ', array.length)
  return randomElement ;
}

// Функция перемешивания карт в массиве случайным образом

function doShuffle (array) {
  let tempArray = [];
  array.forEach( element => {
    tempArray.push(element);
  })
  let resultArray = [];
  for (let j = 0; j < array.length; j++) {
      resultArray.push(getRandomElement (tempArray));
   }
   console.log('Перемешанный массив: ', resultArray);
   return resultArray;
  }


// Функции для получения набора рандомных карт N штук одного цвета

let randomSetCards = [[], [], []]; // В этот массив будем складываем элементы, получая их функцией getRandomElement(array), 
// он должен быть "виден" всем функциям. j - здесь номер карт согласно цвету: 0 - зеленые, 1- коричневые, 2 - синие.
function getRandomSetCards (numberTypeCard, j,  typeCards) {
  console.log('поиск рандомных элементов: количество:',  numberTypeCard, 'номер цвета:', j  );
  let tempArray =[]; // временный массив, равный typeCards, чтобы из него можно было удалять переменные, не меняя исходный
  typeCards.forEach( element => {
    tempArray.push(element);
  })
  for (let index = 0; index < numberTypeCard; index++) {
        if (index - numberCard[0][j] < 0){
          randomSetCards[0].push(getRandomElement (tempArray));
         } else {
            if (index - numberCard[0][j] - numberCard[1][j] < 0){ 
            randomSetCards[1].push(getRandomElement (tempArray));
            } else {
                if (index - numberCard[0][j] - numberCard[1][j] - numberCard[2][j] < 0){ 
                randomSetCards[2].push(getRandomElement (tempArray));
                }
              }
           }
     }
  }

// Функция сбора колоды
let randomSetCards_dubl = [[],[],[]]

let stage1Green = [];
let stage1Brown = [];
let stage1Blue = [];

let stage2Green = [];
let stage2Brown = [];
let stage2Blue = [];

let stage3Green = [];
let stage3Brown = [];
let stage3Blue = [];

//Функция выбора карт по сложности
function sortingTypeCard (array){
  let easyArr = [];
  let normalArr = [];
  let hardArr = [];
  let counter = 0;
  array.forEach( element => {
    element.difficulty === 'easy' ? easyArr.push(element):
    element.difficulty === 'normal' ? normalArr.push(element):
    hardArr.push(element);
   }
  )
return [easyArr, normalArr, hardArr];
}


let sortingGreen = sortingTypeCard (greenCards);
let sortingBrown = sortingTypeCard (brownCards);
let sortingBlue = sortingTypeCard (blueCards);

 function creatDeck (){
  switch(level) {
    case 0:  { // берутся все easy + normal


    
    
      break

 }
  
    case 1:{  // убираем все hard
     break

 }
  
    case 2:  { // полный набор
        getRandomSetCards ( numberGreen, 0,  greenCards);
        getRandomSetCards ( numberBrown, 1,  brownCards);
        getRandomSetCards ( numberBlue, 2,  blueCards);

        randomSetCards_dubl[0]= doShuffle (randomSetCards[0]);
        randomSetCards_dubl[1]= doShuffle (randomSetCards[1]);
        randomSetCards_dubl[2]= doShuffle (randomSetCards[2]);   
     
      break

 }
  
    case 3: { // убираются все easy
     break

 }
  
    case 4:{  // берутся все hard + normal
    break

 }
  }
 }
 
 //Функция, которая определяет количество кликов для открытия карт на каждом этапе
 let clickForEtaps = [0,0,0]
 function getClickForEtap () {
  console.log ('numberCard[0]', numberCard[0][0], numberCard[0][1], numberCard[0][2]);
  console.log ('numberCard[1]', numberCard[1][0], numberCard[1][1], numberCard[1][2],);
  console.log ('numberCard[2]', numberCard[2][0], numberCard[2][1], numberCard[2][2],);

  for (let index = 0; index < 3; index++) {
          clickForEtaps[index] = numberCard[index][0] + numberCard[index][1] + numberCard[index][2];
      }
   console.log('clickForEtaps:', clickForEtaps[0], clickForEtaps[1], clickForEtaps[2]);
 }

 // Функция открывания карт по клику
let oneOpenCard = document.querySelector ('.img-card');
let buttonCard = document.querySelector('.button-card');

let indClick; //его значение задается дальше при запуске основной функции
let stage;
function openCard () {
   if (indClick < clickForEtaps[0] ){
    stage = 0;
    console.log ('этап 1, click = ', indClick);
    oneOpenCard.src = `${randomSetCards_dubl[0][indClick].src}`;
    oneOpenCard.style.visibility = 'visible';
    progress(stage, randomSetCards_dubl[0][indClick] );
    } else {
        if (indClick < clickForEtaps[0] + clickForEtaps[1]){
        stage = 1;
        console.log ('этап 2, click = ', indClick)
        oneOpenCard.src = `${randomSetCards_dubl[1][indClick - clickForEtaps[0]].src}`;
        oneOpenCard.style.visibility = 'visible';
        progress(stage, randomSetCards_dubl[1][indClick - clickForEtaps[0]] );
        } else {
                if (indClick < clickForEtaps[0] + clickForEtaps[1] + clickForEtaps[2] - 1) {
                  stage = 2;
                  console.log ('этап 3, click = ', indClick)
                  oneOpenCard.src = `${randomSetCards_dubl[2][indClick - clickForEtaps[0] -clickForEtaps[1]].src}`;
                  oneOpenCard.style.visibility = 'visible';
                  progress(stage, randomSetCards_dubl[2][indClick - clickForEtaps[0] -clickForEtaps[1]] );
                 } else {
                  if (indClick = clickForEtaps[0] + clickForEtaps[1] + clickForEtaps[2] - 1) {
                  console.log ('этап 3, click = ', indClick)
                  oneOpenCard.src = `${randomSetCards_dubl[2][indClick - clickForEtaps[0] -clickForEtaps[1]].src}`;
                  oneOpenCard.style.visibility = 'visible';
                  console.log('indClick = ', indClick);
                  buttonCard.textContent = 'Конец ИГРЫ';
                  restart.style.visibility ='visible';
                  buttonCard.classList.add('button-card-end');
                  progress(stage, randomSetCards_dubl[2][indClick - clickForEtaps[0] -clickForEtaps[1]] );
                  }
                }
           }
         }
 }
 
 //Функция изменения счетчика карт (Прогресс игры)

function  progress (stage, element ) {
  let colorClickCard = element.color;
  colorClickCard === 'green' ? stages[stage].greenCards.textContent = `${(+stages[stage].greenCards.textContent - 1)}`:
  colorClickCard === 'brown' ? stages[stage].brownCards.textContent = `${(+stages[stage].brownCards.textContent - 1)}`:
  colorClickCard === 'blue' ? stages[stage].blueCards.textContent = `${(+stages[stage].blueCards.textContent - 1)}`:
  console.log (element);
}
 


// const stage1 = {
//   greenCards: document.querySelector('.gr1'),
//   brownCards: document.querySelector('.br1'),
//   blueCards: document.querySelector('.bl1'),
//  };
// const stage2 = {
//   greenCards: document.querySelector('.gr2'),
//   brownCards: document.querySelector('.br2'),
//   blueCards: document.querySelector('.bl2'),
// }

// const stage3 = {
//   greenCards: document.querySelector('.gr3'),
//   brownCards: document.querySelector('.br3'),
//   blueCards: document.querySelector('.bl3'),
// }

// const stages = [ stage1, stage2, stage3]; // Это места, где записываются количества карт каждого вида







 // Функция запуска игры
 function startGame () {
  if (enemy === undefined)  selectedEnemy ();
  if (level === undefined) {
       selectedLevel ();
     } else { 
      console.log('enemy and level not undefind');
     }
  const buttonShuffle = document.querySelector('.button-shuffle');
  buttonShuffle.addEventListener('click', () => {
    showNumberShuffleCards ();
    creatDeck ();
    getClickForEtap ();
  } );
 
  indClick = 0; // счетчик кликов
  buttonCard.addEventListener('click', () =>{
    if (indClick < numberAllCards){
    openCard ();
    console.log(indClick);
    } 
    indClick ++;
   
   });

   restart.addEventListener('click', () =>{
    location.reload();
   } );
} 
 
startGame ();