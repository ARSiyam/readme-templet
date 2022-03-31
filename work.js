function secondToMinute(second){
    document.write("<h1>SecondToMinute</h1> ")
    let minute=second/60;
    return minute;
}
document.write(secondToMinute(120)+" Minute");


//work 2

function startack(leptop,kebord,mouse){
    document.write("<br><h1>Startack</h1> ")
     document.write("<br>Leptop = "+leptop*70000+" TK");
     document.write("<br>Kebord = "+kebord*1000+" TK");
     document.write("<br>Mouse = "+mouse*150+" TK<br>");
   let Leptop=leptop*70000;
  let Kebord= kebord*1000;
  let Mouse=mouse*150;
    let total="Total Cost = "+(Leptop+Kebord+Mouse)+" TK";
    return total;
}

document.write(startack(0,10,2));

// work 3

function picnicBudget(people){
    document.write(" <br><h1>PicnicBudget</h1>")
    if(people<=10){

        let   tk="<br> PicnicBudget ="+(people*500)+" TK";
        return tk;
     
    }else if(people>=10 && people<=20){
        let ob=people-10;
        let tk="<br> PicnicBudget ="+(10*500 + ob*400)+" TK";
        return tk;
    }else if(people>=20){
        let ob=people-20;
        let tk="<br> PicnicBudget ="+(10*500 + 10*400 + ob*300)+" TK";
       
           return tk;
    }
 
}
document.write(picnicBudget(5));