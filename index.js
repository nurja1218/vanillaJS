const title = document.querySelector("#title");

// const BASE_COLOR = "#34495e"; //고정변수 보통 대문자로 씀
const BASE_COLOR = "rgb(52, 73, 94)"; //콘솔에 출력된 color형태 맞춤
const OTHER_COLOR = "#00BCD4";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() { // init은 보통 어플리케이션을 초기화해줌
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

init();
