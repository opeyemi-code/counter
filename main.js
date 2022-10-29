  let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

const increase = document.querySelector('increase');

btns.forEach(function (btn){
  btn.addEventListener('click', counter)
});

function counter (e){
  e.preventDefault();
  const styles = e.currentTarget.classList;
  if (styles.contains('decrease')){
    count--;
  }else if(styles.contains('increase')){
    count++
  }
  else{
    count = 0;
  }
  value.textContent = count;
  
  if (value.textContent > 0){
   value.style.color = 'green';
  }
  else if(value.textContent < 0){
    value.style.color ='red';
  }
  else{
    value.style.color = 'black';
  }
}
