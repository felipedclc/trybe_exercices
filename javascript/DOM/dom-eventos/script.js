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

for(let i in dezDaysList) {
  let day = dezDaysList[i];

  let li = document.createElement('li');
  li.className = 'day';
  li.innerText = day;
  
  if(day === 4 || day === 11 || day === 18) {
    li.className = 'day friday';
  }
  if(day === 24 || day === 31) {
    li.className = 'day holiday';
  }
  if(day === 25) {
    li.className = 'day friday holiday';
  }
  
  daysUl.appendChild(li);
}

function createBtnHolliday() {
  let btnHoliday = document.createElement('button');
  btnHoliday.innerHTML = 'feriados';
  btnHoliday.id = 'btn-holiday';

  let paiBtn = document.querySelector('.buttons-container');
  paiBtn.appendChild(btnHoliday);
}
createBtnHolliday();