// Dummy Data
const studentsData = [
  {
    name: "A",
    scores: { Physics: 89, Chem: 90, Math: 95 },
  },
  {
    name: "B",
    scores: { English: 67, French: 70, Hindi: 60 },
  },
  {
    name: "C",
    scores: { Physics: 56, Chem: 53, Math: 92 },
  },
];
let body = document.querySelector("body");
let studentDropDown = document.getElementById("drop"); // Selecting the dropdown which will contain the student names
let score = document.createElement("p");
score.setAttribute("class", "score");

let element;
//Appending each student Name in the dropdown
studentsData.forEach((student) => {
  element = document.createElement("option");
  element.textContent = student.name;
  studentDropDown.appendChild(element);
});

// Function to get the student's subject and scores Data

function getStudentScores(arr, name) {
  let [studentData] = [...arr.filter((item) => item.name === name)];
  return studentData.scores;
}
let subjectsDropDown;

studentDropDown.addEventListener("change", function (e) {
  // checking and deleting the previous dropdown so if we select a new student a new dropdown is shown and the older one is deleted
  let subjectTemp = document.querySelector(".subjects");
  if (subjectTemp) {
    subjectTemp.remove();
  }
  // same as above
  let scoreTemp = document.querySelector(".score");
  if (scoreTemp) {
    scoreTemp.remove();
  }
  subjectsDropDown = document.createElement("select");
  subjectsDropDown.setAttribute("class", "subjects");
  let studentScores = getStudentScores(studentsData, e.target.value);

  // Getting the subjects of the student selected and adding to the dropdown
  for (const key in studentScores) {
    let subjectOption = document.createElement("option");
    subjectOption.textContent = key;
    subjectsDropDown.appendChild(subjectOption);
  }

  // To get the final score of the subject selected
  subjectsDropDown.addEventListener("change", function (e) {
    score.textContent = `Score : ${studentScores[e.target.value]}`;
    body.appendChild(score);
  });
  body.appendChild(subjectsDropDown);
});
