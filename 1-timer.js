var f=Object.defineProperty;var d=s=>{throw TypeError(s)};var y=(s,t,e)=>t in s?f(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var o=(s,t,e)=>y(s,typeof t!="symbol"?t+"":t,e),p=(s,t,e)=>t.has(s)||d("Cannot "+e);var l=(s,t,e)=>t.has(s)?d("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e);var n=(s,t,e)=>(p(s,t,"access private method"),e);import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as k,i as T}from"./assets/vendor-Dov3POoy.js";var i,u,c,h,m,a;class E{constructor({startButtonSelector:t,datePickerSelector:e,timeElementsSelectors:r}){l(this,i);o(this,"selectedDate",null);o(this,"timerInterval",null);o(this,"flatpickrOptions",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:t=>this.onCloseHandler(t)});o(this,"iziToastErrorOptions",{title:"Error",message:"Please choose a date in the future!",position:"topRight"});this.startButton=document.querySelector(t),this.datePickerElement=document.querySelector(e),this.timeElements={days:document.querySelector(r.days),hours:document.querySelector(r.hours),minutes:document.querySelector(r.minutes),seconds:document.querySelector(r.seconds)},k(this.datePickerElement,this.flatpickrOptions),this.startButton.disabled=!0,n(this,i,u).call(this)}onCloseHandler(t){t[0].getTime()>Date.now()?(this.startButton.disabled=!1,this.selectedDate=t[0].getTime()):(this.startButton.disabled=!0,T.error(this.iziToastErrorOptions))}}i=new WeakSet,u=function(){this.startButton.addEventListener("click",()=>n(this,i,c).call(this,this.selectedDate))},c=function(t){this.startButton.disabled=!0,this.datePickerElement.disabled=!0,n(this,i,a).call(this,t-Date.now()),this.timerInterval=setInterval(()=>{const e=t-Date.now();e>0?n(this,i,a).call(this,e):n(this,i,h).call(this)},1e3)},h=function(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null);for(const t in this.timeElements)this.timeElements[t].innerHTML="00";this.datePickerElement.disabled=!1},m=function(t){return{days:Math.floor(t/864e5),hours:Math.floor(t%864e5/36e5),minutes:Math.floor(t%864e5%36e5/6e4),seconds:Math.floor(t%864e5%36e5%6e4/1e3)}},a=function(t){const e=n(this,i,m).call(this,t);for(const r in e)this.timeElements[r].innerHTML=e[r].toString().padStart(2,"0")};new E({startButtonSelector:"[data-start]",datePickerSelector:"#datetime-picker",timeElementsSelectors:{days:"[data-days]",hours:"[data-hours]",minutes:"[data-minutes]",seconds:"[data-seconds]"}});
//# sourceMappingURL=1-timer.js.map
