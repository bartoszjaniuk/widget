'use strict';

const circleDistance = document.querySelector('.circle__content__distance');
const currentStreak = document.querySelector('.streak__current__number');
const bestStreak = document.querySelector('.streak__best__number');
const moreInfoNumber = document.querySelector('.right__info__number');
const selectOption = document.querySelector('.select-list');
const userNames = document.querySelectorAll('.rectangle__name');
const circleGoal = document.querySelector('.circle__content__goal');

const weekUsersList = [
  { id: 1, name: 'Walter Wynne' },
  { id: 2, name: 'Annabel Ferdinand' },
  { id: 3, name: 'Marty McFly' },
  { id: 4, name: 'You!' },
];

const monthUsersList = [
  { id: 1, name: 'Obi-Wan Kenobi' },
  { id: 2, name: 'Jon Snow' },
  { id: 3, name: 'Mr Foo' },
  { id: 4, name: 'You!' },
];

const setData = (circle, current, best, moreInfo) => {
  circleDistance.textContent = `${circle}m`;
  currentStreak.textContent = current;
  bestStreak.textContent = best;
  moreInfoNumber.textContent = moreInfo;
};

const handleChange = () => {
  if (selectOption.value == 'Week') {
    setData(38, 4, 12, 12);
    userNames.forEach((name, index) => {
      name.textContent = weekUsersList[index].name;
    });
  }

  if (selectOption.value == 'Month') {
    setData(12, 7, 44, 186);
    userNames.forEach((name, index) => {
      name.textContent = monthUsersList[index].name;
    });
  }
};

selectOption.addEventListener('change', handleChange);

const test = document.getElementById('circle');

(() => {
  circleDistance.textContent = '38 m';
  userNames.forEach((name, index) => {
    name.textContent = weekUsersList[index].name;
  });
  circleGoal.textContent = '50m Goal';
  console.log('Initial loading data 🚀');
})();
