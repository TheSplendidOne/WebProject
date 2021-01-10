const makeLog = (Name, descr) => (
    new Map([
        ['Name', Name],
        ['descr', descr],
    ])
);

function send() {
var Name = document.getElementById('Name').value;
var tel = document.getElementById('tel').value;
var email = document.getElementById('email').value;
var hedg = document.getElementById('hedg').value;
var color = document.getElementById('color').value;
var address = document.getElementById('address').value;
var dop_info = document.getElementById('dop_info').value;
var descr = tel + "\n" + email + "\n" + hedg + "\n" + color + "\n" + address + "\n" + dop_info
console.log(makeLog(Name, descr));


document.getElementById('Name').value = '';
document.getElementById('tel').value = '';
document.getElementById('email').value = '';
document.getElementById('hedg').value = "YOZH";
document.getElementById('color').value ="Nature";
document.getElementById('address').value ='';
document.getElementById('dop_info').value ='';
}
