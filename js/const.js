//   Объект, содержащий Древних  и правила набора карт для Игры
const ancients = {
  azathoth:{
    src: '../assets/Ancients/Azathoth.png',
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },

  cthulhu:{
    src: '../assets/Ancients/Cthulhu.png',
    firstStage: {
      greenCards: 0,
      blueCards: 2,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 1,
      blueCards: 0,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },

  iogSothoth:{
    src: '../assets/Ancients/IogSothoth.png',
    firstStage: {
      greenCards: 0,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },

  shubNiggurath:{
    src: '../assets/Ancients/ShubNiggurath.png',
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 3,
      blueCards: 1,
      brownCards: 2,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
}


// Синие карты: ссылки, сложность, цвет
const blueCards = [
  {
    id: 'blue1',
    src: '../assets/MythicCards/blue/blue1.png',
    difficulty: 'hard',
    color:'blue',
  },
  {
    id:'blue2',
    src: '../assets/MythicCards/blue/blue2.png',
    difficulty: 'hard',
    color:'blue',
  },
  {
    id: 'blue3',
    src: '../assets/MythicCards/blue/blue3.png',
    difficulty: 'easy',
    color:'blue',
  },
  {
    id: 'blue4',
    src: '../assets/MythicCards/blue/blue4.png',
    difficulty: 'easy',
    color:'blue',
  },
  {
    id: 'blue5',
    src: '../assets/MythicCards/blue/blue5.png',
    difficulty: 'easy',
    color:'blue',
  },
  {
    id: 'blue6',
    src: '../assets/MythicCards/blue/blue6.png',
    difficulty: 'hard',
    color:'blue',
  },
  {
    id: 'blue7',
    src: '../assets/MythicCards/blue/blue7.png',
    difficulty: 'normal',
    color:'blue',
  },
  {
    id: 'blue8',
    src: '../assets/MythicCards/blue/blue8.png',
    difficulty: 'hard',
    color:'blue',
  },
  {
    id: 'blue9',
    src: '../assets/MythicCards/blue/blue9.png',
    difficulty: 'normal',
    color:'blue',
  },
  {
    id: 'blue10',
    src: '../assets/MythicCards/blue/blue10.png',
    difficulty: 'easy',
    color:'blue',
  },
  {
    id: 'blue11',
    src: '../assets/MythicCards/blue/blue11.png',
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue12',
    src: '../assets/MythicCards/blue/blue12.png',
    difficulty: 'normal',
    color:'blue'
  },
]

// Коричневые карты: ссылки, сложность, цвет
const brounCards = [
{
    id: 'brown1',
    src: '../assets/MythicCards/brown/brown1.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown2',
    src: '../assets/MythicCards/brown/brown2.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown3',
    src: '../assets/MythicCards/brown/brown3.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown4',
    src: '../assets/MythicCards/brown/brown4.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown5',
    src: '../assets/MythicCards/brown/brown5.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown6',
    src: '../assets/MythicCards/brown/brown6.png',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown7',
    src: '../assets/MythicCards/brown/brown7.png',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown8',
    src: '../assets/MythicCards/brown/brown8.png',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown9',
    src: '../assets/MythicCards/brown/brown9.png',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown10',
    src: '../assets/MythicCards/brown/brown10.png',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown11',
    src: '../assets/MythicCards/brown/brown11.png',
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown12',
    src: '../assets/MythicCards/brown/brown12png',
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown13',
    src: '../assets/MythicCards/brown/brown13.png',
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown14',
    src: '../assets/MythicCards/brown/brown14.png',
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown15',
    src: '../assets/MythicCards/brown/brown15.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown16',
    src: '../assets/MythicCards/brown/brown16.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown17',
    src: '../assets/MythicCards/brown/brown17.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown18',
    src: '../assets/MythicCards/brown/brown18.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown19',
    src: '../assets/MythicCards/brown/brown19.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown20',
    src: '../assets/MythicCards/brown/brown20.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown21',
    src: '../assets/MythicCards/brown/brown21.png',
    difficulty: 'easy',
    color:'brown'
  },
];

// Зеленые карты: ссылки, сложность, цвет
const greenCards = [
  {
    id: 'green1',
    src: '../assets/MythicCards/green/green1.png',
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green2',
    src: '../assets/MythicCards/green/green2.png',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green3',
    src: '../assets/MythicCards/green/green3.png',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green4',
    src: '../assets/MythicCards/green/green4.png',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green5',
    src: '../assets/MythicCards/green/green5.png',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green6',
    src: '../assets/MythicCards/green/green6.png',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green7',
    src: '../assets/MythicCards/green/green7.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green8',
    src: '../assets/MythicCards/green/green8.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green9',
    src: '../assets/MythicCards/green/green9.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green10',
    src: '../assets/MythicCards/green/green10.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green11',
    src: '../assets/MythicCards/green/green11.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green12',
    src: '../assets/MythicCards/green/green12.png',
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green13',
    src: '../assets/MythicCards/green/green13.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green14',
    src: '../assets/MythicCards/green/green14.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green15',
    src: '../assets/MythicCards/green/green15.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green16',
    src: '../assets/MythicCards/green/green16.png',
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green17',
    src: '../assets/MythicCards/green/green17.png',
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green18',
    src: '../assets/MythicCards/green/green18.png',
    difficulty: 'easy',
    color:'green'
  },
];
// Уровни сложности
const difficulties = [
    {
      id: 'very-hard',
      name: 'Очень высокая'
    },
    {
      id: 'hard',
      name: 'Высокая'
    },
    {
      id: 'normal',
      name: 'Средняя'
    },
    {
      id: 'easy',
      name: 'Низкая'
    },
    {
      id: 'very-easy',
      name: 'Очень низкая' 
    },
  ];
  
  export {blueCards, brounCards, greenCards, ancients, difficulties};