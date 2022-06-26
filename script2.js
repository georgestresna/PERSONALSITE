let canvas=document.getElementsByClassName('background')[0];
let alerta=document.querySelector('.alert');
if(window.innerHeight > window.innerWidth){
    alerta.style.display='block';
    alerta.style.zIndex=100;
}
if(window.innerHeight >650){
    alert('You can navigate(scroll) by clicking & dragging!');
}

window.onmousedown = function(event) {
    event.preventDefault();
    console.log(20); // prevent selection start (browser action)
    let shiftX = event.clientX; //distanta clickului fata de stanga
    let shiftY = event.clientY; //distanta click fata de top
    console.log(shiftX+'px on X ax');
    console.log(shiftY+'px on Y ax');
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        let newShiftX=event.clientX;
        let newShiftY=event.clientY;
        window.scrollBy(shiftX-newShiftX, shiftY-newShiftY);
        shiftX = newShiftX;
        shiftY = newShiftY;
    }



    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }
}  
let mooving=document.getElementsByTagName('li');
//4th, 5th, 6th li
function changing(){
    let i=4;
    mooving[5].style.opacity=0;
    mooving[6].style.opacity=0;
    setInterval(function(){
        if (i==4){
            mooving[4].style.opacity=1;
            mooving[5].style.opacity=0;
            mooving[6].style.opacity=0;
        }
        if(i==5){
            mooving[4].style.opacity=0;
            mooving[5].style.opacity=1;
            mooving[6].style.opacity=0;
        }
        if(i==6){
            mooving[4].style.opacity=0;
            mooving[5].style.opacity=0;
            mooving[6].style.opacity=1;
        }
        console.log(i);
        i++;
        if(i==7){
            i=4;
        }
    }, 2500);
}
changing();
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

let leftarrow=document.querySelector('.leftarrow');
let rightarrow=document.querySelector('.rightarrow');
let carousel=document.querySelector('.carousel').getElementsByTagName('ul')[0];
let position=0; //pozitie originala carusel

leftarrow.style.color='grey';

rightarrow.addEventListener('click', function(){
    if(position!= -180){
        carousel.style.left= position -45 + 'vw';
        position-=45;
        console.log('pos='+ position);
        rightarrow.style.color='white';
        leftarrow.style.color='white';
    }
    if(position == -180){
        rightarrow.style.color='grey';
    }

});
leftarrow.addEventListener('click', function(){
    if(position!=0){
        carousel.style.left= position +45 + 'vw';
        position+=45;
        console.log('pos=' +position);
        leftarrow.style.color='white';
        rightarrow.style.color='white';
    }
    if(position == 0){
        leftarrow.style.color='grey';
    };
});
