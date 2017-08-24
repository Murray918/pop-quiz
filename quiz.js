console.log("quiz 1");


function begin() {
  console.log('begin');
}
begin()

function echo(str) {
  return str
}
echo()

function math(x, y, z) {
  return x + y * z
}
math(1, 2, 3)

function toString(arr) {
  for (var i = 0; i < arr.length; i++) {
    let newStr = ''
    newStr += arr[i]
    return newStr
  }
}
toString(['the', 'talking', 'heads'])


function sleep(){
  console.log('before set loop' + Date.now());
  setTimeout(console.log('after the loop ', Date.now()),1000)
}
sleep()
