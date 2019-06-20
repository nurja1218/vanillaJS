const studentInfo = {
  name: "junyoung",
  age: 30,
  gender: "Male",
  liveIn: "gyeongGi",
  favMovies: ["7 days", "Old boy", "Iron Man", "Braveheart"],
  favFood: [
    {
      name: "Kimchi",
      fatty: true
    },
    {
      name: "Big Mac",
      fatty: true
    }
  ]
};

console.log(studentInfo.favFood[0].fatty);