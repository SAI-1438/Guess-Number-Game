let bdy = document.getElementById('body');
let randomNumber = Math.floor(Math.random()*100);
let b = document.getElementsByTagName('b');
let qsn = document.getElementById('qn');
let input = document.getElementById('input');
let chck = document.getElementById('check');
let para = document.getElementById('guess');
let count = 100;
chck.addEventListener('click', () => {
    
    if(randomNumber < parseInt(input.value)){
        para.innerText = "Guess is High";
        count --;
        b[1].innerHTML = count;
    }else if(randomNumber > parseInt(input.value)){
        para.innerText = "Guess is Low";
        count --;
        b[1].innerHTML = count;
    }else{
        para.innerText = "Correct Guess You Won..!";
        count --;
        qsn.innerText = randomNumber;
        b[2].innerText = count;
        bdy.setAttribute('style', 'background-color:green');
    }
})