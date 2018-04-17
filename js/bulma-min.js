"use strict";document.addEventListener("DOMContentLoaded",function(){function e(e){E.forEach(function(t){e!=t&&t.classList.remove("is-active")})}function t(){window.scrollTo(0,0)}function n(e,t){var n=document.createElement("li"),i=document.createElement("a"),o=document.createTextNode(e);return t&&i.setAttribute("href",t),i.appendChild(o),n.appendChild(i),n}function e(e){E.forEach(function(t){e!=t&&t.classList.remove("is-active")})}function i(){N.forEach(function(e){e.classList.remove("is-active")})}function o(e){var t=document.getElementById(e);H.classList.add("is-clipped"),t.classList.add("is-active")}function a(){H.classList.remove("is-clipped"),S.forEach(function(e){e.classList.remove("is-active")})}function c(){r(".highlight .bd-copy, .highlight .bd-expand").forEach(function(e){e.addEventListener("mouseenter",function(){e.parentNode.classList.add("bd-is-hovering")}),e.addEventListener("mouseleave",function(){e.parentNode.classList.remove("bd-is-hovering")})}),r(".highlight .bd-expand").forEach(function(e){e.addEventListener("click",function(){e.parentNode.firstElementChild.style.maxHeight="none"})}),r(".highlight .bd-show").forEach(function(e){e.addEventListener("click",function(){e.parentNode.parentNode.classList.remove("bd-is-more-clipped")})})}function r(e){return Array.prototype.slice.call(document.querySelectorAll(e),0)}function s(){if(b){var e=b.getBoundingClientRect(),t=L.clientHeight,n=Q.getBoundingClientRect(),i=Q.clientHeight;e.top<1&&n.top-t+i>0?L.classList.add("is-pinned"):L.classList.remove("is-pinned"),y.some(function(e){var t=e.getBoundingClientRect(),n=e.getAttribute("href"),i=n.substring(1);return t.top<1+K&&-1==G.indexOf(i)?(G.push(i),void d()):t.top>0+K&&-1!=G.indexOf(i)?(g(G,i),void d()):void 0})}}function d(){var e=k.diff(G),t=-1,n="";G.length>0&&(G.forEach(function(e,i){var o=w[e];o.nav_el.className="is-past",o.index>t&&(t=o.index,n=e)}),n in w&&(w[n].nav_el.className="is-current")),e.length>0&&e.forEach(function(e,t){w[e].nav_el.className=""})}function l(e,t){return t>=e?u(t):f(t)}function u(e){var t=D;P=e,e>J&&(J=e),h(e,!1)}function f(e){var t=0;e<P-D&&(J=e+D),h(e,!0)}function v(e){return Math.max(0,Math.min(e,D))}function h(e,t){var n=void 0;if(t&&0==z)n=0;else if(e<=D)n=-1*e;else{var i=v(Math.abs(e-J));n=i-D}if(n!=z){var o="\n        transform: translateY("+n+"px);\n      ";z=n,R.setAttribute("style",o)}V=e>2*F?1:e>F?(e-F)/F:0;var a=1+n/D;Y&&(Y.style.opacity=V,Y.style.transform="scaleY("+a+")")}function g(e,t){if(e.includes(t)){var n=e.indexOf(t);e.splice(n,1)}return e}var m="bulma_closed_book_modal",p=Cookies.getJSON(m)||!1,E=r("#categories .bd-category");E.length>0&&E.forEach(function(t){t.querySelector(".bd-category-toggle").addEventListener("click",function(n){e(t),t.classList.toggle("is-active")})});var b=document.getElementById("anchorsReference"),L=document.getElementById("anchors"),y=r(".bd-anchor-link"),w={},k=[],x=[];if(L&&y.length>0){L.classList.add("is-active");var C=L.querySelector(".bd-anchors-list");y.forEach(function(e,t){var i=e.getAttribute("href"),o=e.previousElementSibling.innerText;if(""!=o){var a=n(o,i);C.appendChild(a);var c=i.substring(1);w[c]={id:c,index:t,target:i,text:o,nav_el:a},k.push(c),x.push(a)}});var B=n("Back to top","");B.onclick=t,C.appendChild(B)}var A=r("#meta a");A.length>0&&A.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();var n=e.getAttribute("href");return document.getElementById(n.substring(1)).scrollIntoView(!0),!1})});var N=r(".dropdown:not(.is-hoverable)");N.length>0&&(N.forEach(function(e){e.addEventListener("click",function(t){t.stopPropagation(),e.classList.toggle("is-active")})}),document.addEventListener("click",function(e){i()}));var I=r(".burger");I.length>0&&I.forEach(function(e){e.addEventListener("click",function(){var t=e.dataset.target,n=document.getElementById(t);e.classList.toggle("is-active"),n.classList.toggle("is-active")})});var H=document.documentElement,S=r(".modal"),M=r(".modal-button"),T=r(".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button");M.length>0&&M.forEach(function(e){e.addEventListener("click",function(){o(e.dataset.target)})}),T.length>0&&T.forEach(function(e){e.addEventListener("click",function(){a()})}),document.addEventListener("keydown",function(e){27===(e||window.event).keyCode&&(a(),i())});var _=r(".highlight"),O=0;_.length>0&&_.forEach(function(e){var t='<button class="button is-small bd-expand">Expand</button>';e.insertAdjacentHTML("beforeend",'<button class="button is-small bd-copy">Copy</button>');var n=e.parentNode;if(n&&n.classList.contains("bd-is-more")){e.insertAdjacentHTML("beforeend",'<button class="bd-show"><div><span class="icon"><i class="fas fa-code"></i></span> <strong>Show code</strong></div></button>')}else e.firstElementChild.scrollHeight>480&&e.firstElementChild.clientHeight<=480&&e.insertAdjacentHTML("beforeend",t);++O===_.length&&c()}),setTimeout(function(){new Clipboard(".bd-copy",{target:function e(t){return t.previousElementSibling.firstElementChild}})},100);var q=document.documentElement,R=document.getElementById("navbar"),j=document.getElementById("navbarBurger"),Y=document.getElementById("specialShadow"),D=52,F=160,J=D,P=0,V=0,z=0,G=[];y.reverse();var K=24,Q=document.getElementById("typo"),U=!1,W=0;window.addEventListener("scroll",function(){var e=window.scrollY;U||window.requestAnimationFrame(function(){s(),U=!1,W=e}),U=!0}),Array.prototype.diff=function(e){return this.filter(function(t){return e.indexOf(t)<0})}});