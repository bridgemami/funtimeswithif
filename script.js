let answer = prompt('What is your percentage', '');

if(answer == 100){
  alert("perfect");
}
else if (answer > 100){
  alert('Nothing above 100. try again');
  let a = prompt('What is your percentage', '');
  if(a == 100){
  alert("perfect");
}
else if  (a > 90){
  alert('outstanding');
}
else if  (a > 80){
  alert('average');
}
else if  (a>70){
  alert('okay');
}
else {
  alert("fail");
}
}
else if  (answer > 90){
  alert('outstanding');
}
else if  (answer > 80){
  alert('average');
}
else if  (answer>70){
  alert('okay');
}
else {
  alert("fail");
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
