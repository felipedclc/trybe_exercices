function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let daysUl = document.querySelector('#days');
daysUl.sty

for (let i in dezDaysList) {
  let day = dezDaysList[i];

  let li = document.createElement('li');
  li.className = 'day';
  li.innerText = day;

  if (day === 4 || day === 11 || day === 18) {
    li.className = 'day friday';
  }
  if (day === 24 || day === 31) {
    li.className = 'day holiday';
  }
  if (day === 25) {
    li.className = 'day friday holiday';
  }

  daysUl.appendChild(li);
};

function createBtnHolliday(buttonName) {
  let btnHoliday = document.createElement('button');
  btnHoliday.innerHTML = buttonName;
  btnHoliday.id = 'btn-holiday';

  let paiBtn = document.querySelector('.buttons-container');
  paiBtn.appendChild(btnHoliday);
};
createBtnHolliday('Feriados');

function displayBtnHoliday() {
  let btnHoliday = document.querySelector('#btn-holiday');
  let holidays = document.querySelectorAll('.holiday');

  btnHoliday.addEventListener('click', function () {
    for (let i in holidays) {
      let holiday = holidays[i];
      if (holiday.style.background !== 'yellow') {
        holiday.style.background = 'yellow';
      } else {
        holiday.style.background = 'rgb(238,238,238)';
        holiday.style.border = '0px solid black';
      }
    }
  })

};
displayBtnHoliday();

function createBtnFriday(sextou) {
  let newBtn = document.createElement('button');
  newBtn.innerText = sextou;
  newBtn.id = 'btn-friday';

  let paiBtn = document.querySelector('.buttons-container');
  paiBtn.appendChild(newBtn);
};
createBtnFriday('Sextou');

function displayBtnFriday(fridaysArray) {
  let btnFriday = document.querySelector('#btn-friday');
  let fridays = document.querySelectorAll('.friday');

  btnFriday.addEventListener('click', function () {
    for (let i in fridays) {
      let friday = fridays[i];
      if (friday.style.color === 'rgb(119, 119, 119)') {
        friday.style.color = 'green';
        friday.innerHTML = 'SEXTOU!';
      } else {
        friday.style.color = 'rgb(119, 119, 119)';
        friday.innerHTML = fridaysArray[i];
      }
    }
  })
};
let fridayDays = [4, 11, 18, 25];
displayBtnFriday(fridayDays);

function mouseIn() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = 'bolder';
    event.target.style.cursor = 'pointer';
  })
};
mouseIn();

function mouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = 'normal';
    event.target.style.cursor = 'pointer';
  })
};
mouseOut();

function addMyTasks(task) {
  let span = document.createElement('span');
  let myTasks = document.querySelector('.my-tasks');

  span.innerText = task;
  myTasks.appendChild(span);
};
addMyTasks('Projeto');

function addTaskColor(color) {
  let myTasks = document.querySelector('.my-tasks');
  let div = document.createElement('div');

  div.style.backgroundColor = color;
  div.className = 'task';

  myTasks.appendChild(div);
}
addTaskColor('blue');

function taskSelected() {
  let divTask = document.querySelector('.task');

  divTask.addEventListener('click', function (e) {
    if (e.target.className === 'task') {
      e.target.className = 'task selected';
    } else {
      e.target.className = 'task';
    }
  })
};
taskSelected();

function changeDayColor() {
  let daysUl = document.querySelector('#days');
  let dayLi = document.querySelectorAll('li.day');
  let taskSelected = document.querySelector('.task');
  divTaskColor = taskSelected.style.backgroundColor;

  daysUl.addEventListener('click', function (e) {
    for (let i in dayLi) {
      day = dayLi[i];

      if (day.style.color !== 'rgb(119,119,119)') {
        day.style.color = divTaskColor;
      }
      else {
        day.style.color = 'rgb(119,119,119)';
      }
    }
  })
};
changeDayColor();