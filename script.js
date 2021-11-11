let answer = prompt('What is your percentage', '');

if(answer == 100){
  alert("perfect");
  document.getElementById('grade').innerHTML= "Your score: " + answer;
}
else if (answer > 100){
  alert('Nothing above 100. try again');
  let a = prompt('What is your percentage', '');
  if(a == 100){
  alert("perfect");
  document.getElementById('grade').innerHTML= "Your score: " + a;
}
else if  (a > 90){
  alert('outstanding');
  document.getElementById('grade').innerHTML= "Your score: " + a;
}
else if  (a > 80){
  alert('average');
  document.getElementById('grade').innerHTML= "Your score: " + a;
}
else if  (a>70){
  alert('okay');
  document.getElementById('grade').innerHTML= "Your score: " + a;
}
else {
  alert("fail");
  document.getElementById('grade').innerHTML= "Your score: " + a;
}
}
else if  (answer > 90){
  alert('outstanding');
  document.getElementById('grade').innerHTML= "Your score: " + answer;
}
else if  (answer > 80){
  alert('average');
  document.getElementById('grade').innerHTML= "Your score: " + answer;
}
else if  (answer>70){
  alert('okay');
  document.getElementById('grade').innerHTML= "Your score: " + answer;
}
else {
  alert("fail");
  document.getElementById('grade').innerHTML= "Your score: " + answer;
}
/*let a =prompt('5*5=?', '');
let b = prompt('5+5=?', '');
let c = prompt('5/5=?', '');

if (a == 25 && b == 10 && c == 1) {
  alert('great job');
}
else if (a ==25 && b == 10 && c != 1) {
  alert('c is incorrect');
}
else if (a ==25 && b != 10 && c == 1) {
  alert('b is incorrect');
}
else if (a !=25 && b == 10 && c == 1) {
  alert('a is incorrect');
}
else if (a ==25 && b != 10 && c != 1) {
  alert('b & c are incorrect');
}
else if (a !=25 && b == 10 && c != 1) {
  alert('a & c are incorrect');
}
else if (a !=25 && b != 10 && c == 1) {
  alert('a & b are incorrect');
}
else { alert("stupid");}
*/
function hello () {
  document.body.style.backgroundColor= 'red';
}
function no () {
document.body.style.backgroundColor='white';}

function bye (name) {
  console.log("My name is " + name);
}
bye('mike');
bye('Ian');
function g () {
  return 5*5;
}
console.log("what is in the function: " + g());


