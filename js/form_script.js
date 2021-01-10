const makeLog = (name, descr) => (
    new Map([
        ['name', name],
        ['descr', descr],
    ])
);

function send() {
  var name = document.getElementById('name').value;
  var tel = document.getElementById('tel').value;
  var email = document.getElementById('email').value;
  var hedg = document.getElementById('hedg').value;
  var color = document.getElementById('color').value;
  var address = document.getElementById('address').value;
  var info = document.getElementById('info').value;
  var purchase = new Map([['name', name], ['tel', tel], ['tel', tel], ['email', email], ['hedg', hedg], ['color', color], ['address', address], ['info', info]])
  console.log(purchase);

  document.getElementById('name').value = '';
  document.getElementById('tel').value = '';
  document.getElementById('email').value = '';
  document.getElementById('hedg').value = "YOZH";
  document.getElementById('color').value ="Nature";
  document.getElementById('address').value ='';
  document.getElementById('info').value ='';
}
