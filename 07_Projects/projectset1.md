# Projects related to DOM
## Project Link given below..
[click here]( //sir has given the link..)

# solution code
## project 1

```javascript
console.log("Aman")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```

##Project 2 solution

```javascript
const form = document.querySelector("form")
// this usecase will give you empty..
// const height = parseInt(document.querySelector("#height").value)
form.addEventListener("submit", function(e){
  e.preventDefault()
 const height = parseInt(document.querySelector("#height").value)
 const weight = parseInt(document.querySelector("#weight").value)
 const results = document.querySelector("#results")
 if(height === ""||height<0||isNaN(height)){
   results.innerHTML = `Please give a valid height ${height}`
 }
 else if(weight === ""||weight<0||isNaN(weight)){
  results.innerHTML = `Please give a valid weight ${weight}`
}

else{
  const bmi = (weight/((height*height)/10000)).toFixed(2)
  //show the result..
  results.innerHTML = `<span>${bmi}</span>`
}
 
})

```

##Project 3 solution..

```javascript
const clock = document.getElementById("clock") //or
//const clock =  document.querySelector("#clock")

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```

##Project 4 solution..

```javascript
let random_number = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const loworhi = document.querySelector('.loworhi');
const startover = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevguess = [];
let numguess = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateguess(guess);
  });
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number.');
  } else if (guess < 1) {
    alert('Please enter a number more than 1.');
  } else if (guess > 100) {
    alert('Please enter a number less than 100.');
  } else {
    prevguess.push(guess);
    if (numguess === 11) {
      displayguess(guess);
      displaymessage(`Game Over. Random Number was ${random_number}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === random_number) {
    displaymessage(`You Guessed it right..`);
    endgame();
  } else if (guess < random_number) {
    displaymessage(`Number is too low`);
  } else if (guess > random_number) {
    displaymessage(`Number is too high`);
  }
}

function displayguess(guess) {
  //cleanup guess
  userinput.value = '';
  guessslot.innerHTML += `${guess}, `;
  numguess++;
  remaining.innerHTML = `${11 - numguess}`;
}

function displaymessage(message) {
  loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startover.appendChild(p);
  playgame = false;
  newgame();
}

function newgame() {
  const newGmeButton = document.querySelector('#newGame');
  newGmeButton.addEventListener('click', function (e) {
    random_number = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguess = 1;
    guessslot.innerHTML = '';
    remaining.innerHTML = `${11 - numguess}`;
    userinput.removeAttribute('disabled');
    startover.removeChild(p);

    playgame = true;
  });
}

```
##Project 5 solution..

```javascript
const insert = document.getElementById('insert')
window.addEventListener('keydown', (e)=>{
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " "?"Space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
  </div>
  `
})

```

##Project 6 solution..
```javascript
//generate a random color..

const randomcolor = function(){
  const hex = '0123456789ABCDEF'
  let color = '#'
  for(let i=0; i<6; i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color
}

let intervalid
const startchangingcolor = function(){
  if(!intervalid){
    intervalid = setInterval(changebgcolor, 1000);
  }

  function changebgcolor(){
    document.body.style.backgroundColor = randomcolor()
  }
}
const stopchangingcolor = function(){
  clearInterval(intervalid)
  intervalid = null; //professionalism
}

document.querySelector("#start").addEventListener(
  "click", startchangingcolor
)
document.querySelector("#stop").addEventListener(
  "click", stopchangingcolor
)
```
