let a =prompt('5*5=?', '');
let b = prompt('5+5=?', '');
let c = prompt('5/5=?', '');
let d= 'great job';

if (a == 25 && b == 10 && c == 1) {
  alert(d);
  document.getElementById('hello').innerHTML= 'great job';
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
