

setInterval(() => {
    let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let ampm = document.getElementById('ampm');

let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let hrDot = document.querySelector('.hr-dot')
let minDot = document.querySelector('.min-dot')
let secDot = document.querySelector('.sec-dot')




let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = h >= 12 ? "PM" : "AM";


if(h > 12){
    h = h - 12;
}


m = (m < 10) ? "0" + m : m;
h = (h < 10) ? "0" + h : h;
s = (s < 10) ? "0" + s : s;



hour.innerHTML = h + "<br><span>HOURS</span>";
minute.innerHTML = m + "<br><span>MINUTE</span>";
second.innerHTML = s + "<br><span>SECOND</span>";
ampm.innerHTML = am ;


hh.style.strokeDashoffset = 440 - (440 * h) / 12;
mm.style.strokeDashoffset = 440 - (440 * m) / 60;
ss.style.strokeDashoffset = 440 - (440 * s) / 60;


hrDot.style.transform = `rotate(${h * 30}deg)`;
minDot.style.transform = `rotate(${m * 6}deg)`;
secDot.style.transform = `rotate(${s * 6}deg)`;
    
}, 1000);






