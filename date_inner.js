var date =new Date();
date.getDate();
document.write(date)

var H1=document.querySelectorAll('h1')
for (const h of H1) {
    h.innerText='This is siyam home'
}
var poem=`<pre>কথা ছিলো একটি পতাকা পেলে
আমি আর লিখবো না বেদনার অঙ্কুরিত কষ্টের কবিতা
কথা ছিলো একটি পতাকা পেলে
ভজন গায়িকা সেই সন্ন্যাসিনী সবিতা মিস্ট্রেস
ব্যর্থ চল্লিশে বসে বলবেন,–'পেয়েছি, পেয়েছি'।
কথা ছিলো একটি পতাকা পেলে
পাতা কুড়োনির মেয়ে শীতের সকালে
ওম নেবে জাতীয় সংগীত শুনে পাতার মর্মরে।
কথা ছিলো একটি পতাকা পেলে
ভূমিহীন মনুমিয়া গাইবে তৃপ্তির গান জ্যৈষ্ঠে-বোশেখে,</pre>`
var poemdiv=document.getElementById('poem')
poemdiv.innerHTML=poem