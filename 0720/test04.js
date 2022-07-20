//Set - 데이터 중복 불허 - 찾기

const s = new Set();

s.add('one');
s.add('two');
s.add('three');

console.log(s.has('one'));      //has는 찾아서 확인하는 것
s.delete('one');
console.log(s.has('one'));
console.log(s.has('two'));
