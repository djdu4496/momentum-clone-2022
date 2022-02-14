const quotes = [
  {
    quote: "가는 말이 고우면 얕본다.",
    author: "박명수"
  },  {
    quote: "세 번 참으면 호구된다.",
    author: "박명수"
  },
  {
    quote: "어려운 길은 길이 아니다.",
    author: "박명수"
  },
  {
    quote: "잘 생긴 놈은 얼굴값하고 못 생긴 놈은 꼴값한다.",
    author: "박명수"
  },
  {
    quote: "늦었다고 생각할 때가 늦은 거다. 그러니 지금 당장 시작해라.",
    author: "박명수"
  },
  {
    quote: "지금 공부 안 하면 더울 때 더운 데서 일 하고 추울 때 추운 데서 일 한다.",
    author: "박명수"
  },
  {
    quote: "고생 끝에 골병난다.",
    author: "박명수"
  },
  {
    quote: "새벽에 먹는 맥주와 치킨은 0칼로리다.",
    author: "박명수"
  },
  {
    quote: "즐길 수 없으면 피해라",
    author: "박명수"
  },
  {
    quote: "시작은 반이다가 아니라 시작은 시작일 뿐이다.",
    author: "박명수"
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

