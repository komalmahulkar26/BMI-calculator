console.log('working');
let massE1 = document.querySelectorAll('#mass');
let heightE1 = document.querySelectorAll('#height');
let bmiBtn = document.querySelectorAll('.bmiBtn');
let outputE1 = document.querySelectorAll('.output');

bmiBtn[0].addEventListener('click', () => {
  let mass = massE1[0].value;
  let height = heightE1[0].value;
  BMI = mass / height ** 2;
  outputE1[0].textContent = `your bmi is ${BMI}`;
});

bmiBtn[1].addEventListener('click', () => {
  let mass = massE1[1].value;
  let height = heightE1[1].value;
  BMI = mass / height ** 2;
  outputE1[1].textContent = `your bmi is ${BMI}`;
});
let markBMI = document.querySelector('#markBMI');
let johnBMI = document.querySelector('#johnBMI');
let markHigherBMI = false;
markHigherBMI = markBMI > johnBMI;
document.querySelector('.btn-compare').addEventListener('click', () => {
  console.log('HELLO');
  let p = document.querySelector('.comapare-output');
  if (markHigherBMI) {
    p.textContent = 'mark is Higher BMI than john';
  } else {
    p.textContent = 'john is Higher BMI than mark';
  }
});
console.log(markBMI, johnBMI);
