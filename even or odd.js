var frist_number=2;


if(frist_number % 2==0){
   document.write(frist_number," Is Even Number")
}else{
    document.write(frist_number,"Is ODD Number")
}


for(var sceond_number=1;sceond_number!=100;sceond_number++){
    if(sceond_number % 2==0){
      document.write("</br>",sceond_number);
    }
}

for(var oddnumber=1;oddnumber!=100;oddnumber++){
    if(oddnumber % 2==1){
      document.write("</br>",oddnumber);
    }
}

//amostong
var n=153;
var p=n;
var y;
var x=0;
while(p!=0){
    y=p%10;
    y=y*y*y;
    p=p/10;
    x=x+y;
}

if(x = n){
    document.write("</br> This is Armostong Number")
}else{
    document.write("</br> This is Not Armostong Number")
}

//parpect


var n=6;
var sum =0;
for (var i=1;i<n;i++){
    if(n%i==0)
    sum=sum+i;
}
if(sum=n){
    document.write("</br> This is parfect Number ")
}else{
    document.write("</br> This is not parfect Number ")
}

//plandom Number

var n=202,x=0,p,y;
p=n;
while(p!=0){
    x=x*10;
    y=p%10;
    p=p/10;
    x=x+y;
    }
    if(x=n){
        document.write("<br>This is Plandom Number")
    }else{
        document.write("<br>This is not Plandom Number")
    }
