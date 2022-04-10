// document.write("siyam");
// alert(1196);
// console.log("AR siyam");

// var num1=prompt("Enter 1st number :");
// // var num2=prompt("Enter 2nd number :");

// num1 =parseInt(num1,10);
// num2 =parseInt(num2,10);

// var result=num1+num2;
// document.write(num1+"+"+num2+"="+result+"<br/>" );
// var result=num1-num2;
// document.write(num1+"-"+num2+"="+result +"<br/>");
// var result=num1*num2;
// document.write(num1+"*"+num2+"="+result +"<br/>");
// var result=num1/num2;
// document.write(num1+"/"+num2+"="+result +"<br/>");
// var result=num1%num2;
// document.write(num1+"%"+num2+"="+result +"<br/>");


// if(num1%=0){
//     document.write("this is even number");
// }else{
//     document.write("this is odd number")
// }


// for(num3=0; num3<=10;num3++){
// document.write(num3+"namta");

// }


// var number=prompt("enter 1st number :");
// var target=prompt("enter your targete :");

// var result= number >0? document.write("positiv"):number <0? document.write("negetiv"):document.write("zero");


// var number =5;
// var re=number>0?"positib":number<0?"negatib":"zero";
// document.write(re);



// function add(a,b){
//     var sum=a+b;
//     document.write("Result ="+sum+"<br/>")
// }

// add(10,20);
// add(23,20);
// add(100,20);
// add(10000,20);
// add(100000,20);


// (function add(a,b){
//     var res=a+b;
//     document.write(res)
// }

// )(100,500);

// const name=function display(mes){
//     document.write(mes);
// };
// name("ar siyam");

// var name1=["siyam","jishan","shakib","appo","fahad"];


// document.write(name1+"<br/>");

// name1.push("salman");
// document.write(name1+"<br/>");
// name1.pop();
// document.write(name1);

// var name1=["siyam","jishan","shakib","appo","fahad"];
// var name2=["siyam","jishan","shakib","appo","fahad"];

// var name3=name1.concat(name2);
//document.write(name3);
// var name1=["siyam","jishan","shakib","appo","fahad"];
// // document.write(name1+"<br/>");
// // name1.splice(2,0,"jesmin")
// // document.write(name1+"<br/>");
// // name1.splice(1,3);
// name1.sort();
// document.write(name1);

// var number =[3,6,5,2,9,7,29];
// number.sort(function(a,b){
//     return b-a;
// });
// document.write(number);

// var number =[3,6,5,2,9,7,29];
// number.sort(function(a,b){
//     return a-b;
// });
// document.write(number);
// var date =new Date();
// document.write(date+"<br/>");

// var year=date.getFullYear();
// document.write(year+"<br/>");

// var month=date.getMonth();
// document.write(month+"<br/>");

// var day=date.getDate();
// document.write(day+"<br/>")



// var hour=date.getHours();
// document.write(hour+"<br/>");


// var minite=date.getMinutes();
// document.write(minite+"<br/>");

// var second=date.getSeconds();
// document.write(second+"<br/>");

// var id=document.getElementById("h1");

// id.innerHTML="hello siyam";

//  var myvar=document.querySelector("#my_img");
// function f1(){
//     myvar.src="img/siyam.JPG";

// }

// function f2(){
//     myvar.src="img/asraful.JPG";
    
// }

// function f3(){
//     myvar.src="img/emon.JPG";
    
// }

// var heding=document.createElement("h1");
// var text=document.createTextNode("hello siyam");
// heding.appendChild(text);
// var mydiv=document.getElementById("div");
//  mydiv.appendChild(heding);

// function remove(){
//     var myvar=document.querySelector("#pera");
//     myvar.classList.remove("pera-style");
// }

// function add(){
//     var myvar=document.querySelector("#pera");
//     myvar.classList.add("pera-style");
// }

// var myvar=document.querySelector("#pera");
// myvar.addEventListener("mouseover",function(){
//     myvar.classList.add("pera-style");
// });
// myvar.addEventListener("mouseout",function(){
//     myvar.classList.remove("pera-style");
// });

for(var i=0 ;i<3; i++){
    document.querySelectorAll(".a")[i].addEventListener("click", function(){
        var text= this.innerHTML;
      console.log(text);
      var audioA=new Audio("a.mp3");
      var audioB=new Audio("b.mp3");
      var audioC=new Audio("c.mp3");
      switch(text){
        case "a":  
        audioA.pause() 
        audioA.play() 
           break;
       case "b":
        console.log(audioB);
        //    audio.play();
        //    audio.pause();
           break;
       case "c":
        console.log(audioC);
            //    audio.play();
            //    audio.pause();
               break;
}
    })


}