var fullbody=document.getElementById('body');
fullbody.style.margin='0';
fullbody.style.padding='0';

var Box=document.getElementById('box');
Box.style.backgroundColor='rgb(19, 38, 59)'
Box.style.width='100%'
Box.style.height='100vh'
Box.style.margin='0'
Box.style.padding='0'
Box.style.display='flex'
Box.style.justifyContent='center'
Box.style.alignItems='center'

var clock=document.getElementById('clock');
clock.style.width='400px'
clock.style.height='200px'
clock.style.backgroundColor='black'
clock.style.color='white'
clock.style.border='10px solid grey'
clock.style.display='flex'
clock.style.alignItems='center'
clock.style.justifyContent='center'

function digitalclock(){
    let date=new Date();
    let housr=date.getHours();
    let minute=date.getMinutes();
    let seconds=date.getSeconds();
    let timeplet='AM';


    if(housr===0){
        housr=12;
    }
    if (housr>12){
        housr=housr-12;
        timeplet='PM';
    }

    housr=housr<10? '0' + housr : housr;
    minute=minute<10? '0' + minute : minute;
    seconds=seconds<10? '0' + seconds : seconds;

    let finellTime=`${housr}:${minute}:${seconds}`;

    let time=document.getElementById('time');
    time.innerText=finellTime;
    let pormat=document.getElementById('timepormat');
    pormat.style.marginLeft='5px'
    pormat.innerText=timeplet;

    setInterval(digitalclock,1000);
}
digitalclock();






