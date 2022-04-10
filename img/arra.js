var na=["siyam","jishan","shakib","fahad","appo","salman","hasan"]
na.pop();
document.write("<br>"+na)

var na=["siyam","jishan","shakib","fahad","appo","salman","hasan"]
na.push("arif");
document.write("<br>"+na)
var na=["siyam","jishan","shakib","fahad","appo","salman","hasan"]
na.shift();
document.write("<br>"+na)

var na=["siyam","jishan","shakib","fahad","appo","salman","hasan"]
na.unshift("arif");
document.write("<br>"+na)


// ২ নং স্থানে string add করাই এবং ২নং indexe থেকে ৩টি indexe delete করে
var number=[1,2,5,8,6,7,6]
document.write("<br>"+number);
number.splice(2,3,"siyam")
document.write("<br>"+number);
//  indexe নং উনুজাই delete করতে হলে splice বেবহার হই 
var name1=["siyam","shakib","jishan","fahade","appo"]
document.write("<br>"+name1)
name1.splice(2,2)
document.write("<br>"+name1)
// সিরিয়াল অনুজি সাজানও
var number2=[2,34,5,778,89,999,55,4,3,2,9]
document.write("<br>"+number2)
number2.sort();
document.write("<br>"+number2)
// উলটো বাবে print করে 
var number3=[2,34,5,778,89,999,55,4,3,2,9]
document.write("<br>"+number3)
number3.reverse();
document.write("<br>"+number3)
// বড থেকে চোটো সংখা 
var number4=[2,5,4,7,9,1,6]
document.write("<br>"+number4)
number4.sort(function(a,b){
    return b-a;
})
document.write("<br>"+number4)
// দুটি array কে জুক্ত করে
var number5=[1,2,3,4,5]
var number6=[6,7,8,9]
result=number5.concat(number6)
document.write("<br>"+result)

var name5=["siyam","jishan","shakib","fahad"]
document.write("<br>"+name5)
var ne=name5.slice(3)
document.write("<br>"+ne)
 
var name6=["siyam","jishan","shakib","fahad","appo"]
document.write("<br>"+name6)
var n6=name6.slice(1,4)
document.write("<br>"+n6)

