var countDownDate=new Date("August 9, 2024 00:00:00").getTime(),x=setInterval((function(){var e=(new Date).getTime(),t=countDownDate-e,n=Math.floor(t/864e5),o=Math.floor(t%864e5/36e5),s=Math.floor(t%36e5/6e4),c=Math.floor(t%6e4/1e3);document.getElementById("days").innerHTML=n,document.getElementById("hours").innerHTML=o,document.getElementById("minutes").innerHTML=s,document.getElementById("seconds").innerHTML=c,t<0&&(clearInterval(x),document.getElementById("countdown").innerHTML="EXPIRED")}),1e3);document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".nav-item a"),t=document.getElementById("overlay"),n=document.querySelectorAll(".close-btn");function o(){document.querySelectorAll(".popup").forEach((e=>{e.classList.remove("show")})),t.classList.remove("show")}e.forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const n=this.getAttribute("data-target"),s=document.getElementById(n);s&&(s.classList.contains("show")?(s.classList.remove("show"),t.classList.remove("show")):(o(),s.classList.add("show"),t.classList.add("show")))}))})),n.forEach((e=>{e.addEventListener("click",(function(){const e=this.closest(".popup");e&&(e.classList.remove("show"),t.classList.remove("show"))}))})),t.addEventListener("click",(function(){o()}))}));
//# sourceMappingURL=script.js.map