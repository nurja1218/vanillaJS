const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `image/${imgNumber + 1}.jpg`; //imgNumber: 0~2
  image.classList.add("bgImage"); //image의 클래스리스트에 클래스명
  body.appendChild(image);
  //appendChild는 다른 애들 뒤에 있기 때문에
  //top쪽에 몰려서 todolist가 가려져서 안보이게됨
  // => 라고 했는데 상관없음!!!
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
