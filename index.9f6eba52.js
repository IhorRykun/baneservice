window.addEventListener("load",(function(){function t(t){var n=t||document.querySelectorAll("[data-digits-counter]");n&&n.forEach((function(t){!function(t){var n=null,e=parseInt(t.dataset.digitsCounter)?parseInt(t.dataset.digitsCounter):1e3,r=parseInt(t.innerHTML),o=0,i=function(a){n||(n=a);var u=Math.min((a-n)/e,1);t.innerHTML=Math.floor(u*(o+r)),u<1&&window.requestAnimationFrame(i)};window.requestAnimationFrame(i)}(t)}))}t();var n=new IntersectionObserver((function(n,e){n.forEach((function(n){if(n.isIntersecting){var e=n.target.querySelectorAll("[data-digits-counter]");e.length&&t(e)}}))}),{threshold:.3}),e=document.querySelectorAll(".about");e.length&&e.forEach((function(t){n.observe(t)}))}));
//# sourceMappingURL=index.9f6eba52.js.map
