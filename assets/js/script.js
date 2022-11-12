let slider = document.querySelector('#slider');
let button = document.querySelector('#button');
let pswLength = document.querySelector('#valor');
let pass = document.querySelector('#password');
let containerPsw = document.querySelector('#container-password');
let charset = 'qazxswedcvfrtgbnhyujmikolpçQWERTYUIOPÇLKJHGFDSAZXCVBNM1234567890!@#$%¨&*()?{}[]><;:=-+_';
let newPsw = '';

pswLength.innerHTML = slider.value

slider.oninput = function () {
  pswLength.innerHTML = this.value
};

function genPsw() {
  // alert('Gerando Senha!')
  let psw = ''
  for (let i = 0, n = charset.length; i < slider.value; ++i) {
    psw += charset.charAt(Math.floor(Math.random() * n))
  }
  // console.log(psw)

  containerPsw.classList.remove('hide')
  pass.innerHTML = psw
  newPsw = psw
};

function copyPsw () {
  alert('Senha copiado com sucesso!')
  navigator.clipboard.writeText(newPsw)
};