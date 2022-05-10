var input1 = document.querySelector('#input1');
var button1 = document.querySelector('#button1');
var form = document.querySelector('#form');
var load = document.querySelector('#load');
var h1 = document.querySelector('#h1');
///
function psc(){
  var googleURL = document.createElement('a');
  googleURL.href = `http:www.google.com/search?q=${input1.value}`;
  load.classList.add('animarLoad');
  load.style.display = 'block';
  ///
  if(input1.value == ''){
    remove.open(googleURL);
    button1.classList.remove('animarBtn');
    }
    //
    var cont = setTimeout(function(){
      h1.innerHTML = '50%';
    },2000);
    //
    var met = setTimeout(function(){
      h1.innerHTML = '100%';
    },3000);
  ///
  var time = setTimeout(function(){
  ///
    button1.classList.remove('animarBtn');
    googleURL.click();
    load.style.display = 'none';
    h1.innerHTML = '0%';
  },4000);
  
}
