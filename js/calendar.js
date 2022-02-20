const date = body.querySelector('header nav ul .date') // * 다른 파일에서 변수 body를 선언했으면 다시 선언 안 해도 되는구나 
const widgetDay = body.querySelector('.widget #plan span:first-child');
const widgetDate = body.querySelector('.widget #plan span:nth-child(2)');
function whatDateIsToday() {
  const arr = ['일', '월', '화', '수', '목', '금', '토'];
  const today = new Date();
  const whatMonth = today.getMonth() + 1;
  const whatDate = today.getDate();
  const whatDay = arr[today.getDay()];
  date.innerText = `${whatMonth}월 ${whatDate}일 ${whatDay}요일`
  widgetDay.innerText = `${whatDay}요일`
  widgetDate.innerText = whatDate;
}

whatDateIsToday();
setInterval(whatDateIsToday, 1000);



