function(q,m){"function"===typeof define&&define.amd?define(m):"object"===typeof exports?module.exports=m():q.Blazy=m()})(this,function(){function q(b){var c=b._util;c.elements=E(b.options);c.count=c.elements.length;c.destroyed&&(c.destroyed=!1,b.options.container&&l(b.options.container,function(a){n(a,"scroll",c.validateT)}),n(window,"resize",c.saveViewportOffsetT),n(window,"resize",c.validateT),n(window,"scroll",c.validateT));m(b)}function m(b){for(var c=b._util,a=0;a<c.count;a++){var d=c.elements[a],e;a:{var g=d;e=b.options;var p=g.getBoundingClientRect();if(e.container&&y&&(g=g.closest(e.containerClass))){g=g.getBoundingClientRect();e=r(g,f)?r(p,{top:g.top-e.offset,right:g.right+e.offset,bottom:g.bottom+e.offset,left:g.left-e.offset}):!1;break a}e=r(p,f)}if(e||t(d,b.options.successClass))b.load(d),c.elements.splice(a,1),c.count--,a--}0===c.count&&b.destroy()}function r(b,c){return b.right>=c.left&&b.bottom>=c.top&&b.left<=c.right&&b.top<=c.bottom}function z(b,c,a){if(!t(b,a.successClass)&&(c||a.loadInvisible||0<b.offsetWidth&&0<b.offsetHeight))if(c=b.getAttribute(u)||b.getAttribute(a.src)){c=c.split(a.separator);var d=c[A&&1<c.length?1:0],e=b.getAttribute(a.srcset),g="img"===b.nodeName.toLowerCase(),p=(c=b.parentNode)&&"picture"===c.nodeName.toLowerCase();if(g||void 0===b.src){var h=new Image,w=function(){a.error&&a.error(b,"invalid");v(b,a.errorClass);k(h,"error",w);k(h,"load",f)},f=function(){g?p||B(b,d,e):b.style.backgroundImage='url("'+d+'")';x(b,a);k(h,"load",f);k(h,"error",w)};p&&(h=b,l(c.getElementsByTagName("source"),function(b){var c=a.srcset,e=b.getAttribute(c);e&&(b.setAttribute("srcset",e),b.removeAttribute(c))}));n(h,"error",w);n(h,"load",f);B(h,d,e)}else b.src=d,x(b,a)}else"video"===b.nodeName.toLowerCase()?(l(b.getElementsByTagName("source"),function(b){var c=a.src,e=b.getAttribute(c);e&&(b.setAttribute("src",e),b.removeAttribute(c))}),b.load(),x(b,a)):(a.error&&a.error(b,"missing"),v(b,a.errorClass))}function x(b,c){v(b,c.successClass);c.success&&c.success(b);b.removeAttribute(c.src);b.removeAttribute(c.srcset);l(c.breakpoints,function(a){b.removeAttribute(a.src)})}function B(b,c,a){a&&b.setAttribute("srcset",a);b.src=c}function t(b,c){return-1!==(" "+b.className+" ").indexOf(" "+c+" ")}function v(b,c){t(b,c)||(b.className+=" "+c)}function E(b){var c=[];b=b.root.querySelectorAll(b.selector);for(var a=b.length;a--;c.unshift(b[a]));return c}function C(b){f.bottom=(window.innerHeight||document.documentElement.clientHeight)+b;f.right=(window.innerWidth||document.documentElement.clientWidth)+b}function n(b,c,a){b.attachEvent?b.attachEvent&&b.attachEvent("on"+c,a):b.addEventListener(c,a,{capture:!1,passive:!0})}function k(b,c,a){b.detachEvent?b.detachEvent&&b.detachEvent("on"+c,a):b.removeEventListener(c,a,{capture:!1,passive:!0})}function l(b,c){if(b&&c)for(var a=b.length,d=0;d<a&&!1!==c(b[d],d);d++);}function D(b,c,a){var d=0;return function(){var e=+new Date;e-d<c||(d=e,b.apply(a,arguments))}}var u,f,A,y;return function(b){if(!document.querySelectorAll){var c=document.createStyleSheet();document.querySelectorAll=function(a,b,d,h,f){f=document.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(d=a.length;d--;){c.addRule(a[d],"k:v");for(h=f.length;h--;)f[h].currentStyle.k&&b.push(f[h]);c.removeRule(0)}return b}}var a=this,d=a._util={};d.elements=[];d.destroyed=!0;a.options=b||{};a.options.error=a.options.error||!1;a.options.offset=a.options.offset||100;a.options.root=a.options.root||document;a.options.success=a.options.success||!1;a.options.selector=a.options.selector||".b-lazy";a.options.separator=a.options.separator||"|";a.options.containerClass=a.options.container;a.options.container=a.options.containerClass?document.querySelectorAll(a.options.containerClass):!1;a.options.errorClass=a.options.errorClass||"b-error";a.options.breakpoints=a.options.breakpoints||!1;a.options.loadInvisible=a.options.loadInvisible||!1;a.options.successClass=a.options.successClass||"b-loaded";a.options.validateDelay=a.options.validateDelay||25;a.options.saveViewportOffsetDelay=a.options.saveViewportOffsetDelay||50;a.options.srcset=a.options.srcset||"data-srcset";a.options.src=u=a.options.src||"data-src";y=Element.prototype.closest;A=1<window.devicePixelRatio;f={};f.top=0-a.options.offset;f.left=0-a.options.offset;a.revalidate=function(){q(a)};a.load=function(a,b){var c=this.options;void 0===a.length?z(a,b,c):l(a,function(a){z(a,b,c)})};a.destroy=function(){var a=this._util;this.options.container&&l(this.options.container,function(b){k(b,"scroll",a.validateT)});k(window,"scroll",a.validateT);k(window,"resize",a.validateT);k(window,"resize",a.saveViewportOffsetT);a.count=0;a.elements.length=0;a.destroyed=!0};d.validateT=D(function(){m(a)},a.options.validateDelay,a);d.saveViewportOffsetT=D(function(){C(a.options.offset)},a.options.saveViewportOffsetDelay,a);C(a.options.offset);l(a.options.breakpoints,function(a){if(a.width>=window.screen.width)return u=a.src,!1});setTimeout(function(){q(a)})}});
var bLazy=new Blazy({breakpoints:[{width:375,src:"data-src-small"},{width:1024,src:"data-src-medium"}]});

function tocShowHide(){var e={tocHide:!0};for(var t in infonetMuSetting)"undefined"!=infonetMuSetting[t]&&(e[t]=infonetMuSetting[t]);var n=document.querySelector(".toc"),o=document.createElement("button"),i=document.querySelector("#toc ol");n.appendChild(o),1==e.tocHide?(o.innerHTML="<i class='fas fa-list-ul'></i>",i.style.display=""):(o.innerHTML="<i class='far fa-chevron-up'></i>",i.style.display=""),o.addEventListener("click",function(){"none"==i.style.display?(i.style.display="",o.innerHTML="<i class='fas fa-list-ul'></i>"):(i.style.display="none",o.innerHTML="<i class='far fa-chevron-up'></i>")})}function tocOption(){var e=document.querySelector(".toc"),t={judulTOC:"শিখন ফল",showHideTOC:!0};for(var n in infonetMuSetting)"undefined"!=infonetMuSetting[n]&&(t[n]=infonetMuSetting[n]);e.innerHTML=t.judulTOC,1==t.showHideTOC&&tocShowHide()}!function(e){"use strict";function t(e){if("string"!=typeof e)return 0;var t=e.match(/\d/g);return t?Math.min.apply(null,t):1}function n(e){var n,o,r,c,a,l,u=e.selector,d=e.scope,s=document.createElement("ol"),f=s,p=(n=e.overwrite,o=e.prefix,function(e,t,i){e.textContent;var r=o+"-"+i;t.textContent=e.textContent;var c=!n&&e.id||r;c=encodeURIComponent(c),e.id=c,t.href="#"+c});return r=u,c=d,a=[],l=document.querySelectorAll(c),Array.prototype.forEach.call(l,function(e){var t=e.querySelectorAll(r);a=a.concat(Array.prototype.slice.call(t))}),a.reduce(function(e,n,o){var r=t(n.tagName),c=i(f,r-e)||s,a=document.createElement("li"),l=document.createElement("a");return p(n,l,o),c.appendChild(a).appendChild(l),f=a,r},t(u)),s}function o(e){var t=(e=function(e,t){for(var n in t)t.hasOwnProperty(n)&&t[n]&&(e[n]=t[n]);return e}({selector:"h1",scope:"body",overwrite:!1,prefix:"toc"},e)).selector;if("string"!=typeof t)throw new TypeError("selector must be a string");if(!t.match(/^(?:h[1-6],?\s*)*$/g))throw new TypeError("selector must contains only h1-6");var o=location.hash;return o&&setTimeout(function(){location.hash="",location.hash=o},0),n(e)}var i=function(e,t){return 0>t?i(e.parentElement,t+1):t>0?function(e,t){for(;t--;){var n=document.createElement("ol");e.appendChild(n),e=n}return e}(e,t):e.parentElement};"function"==typeof define&&define.amd?define("toc",[],function(){return o}):e.initTOC=o}(window);var aside=document.getElementById("toc"),toc=initTOC({selector:"h1",scope:".post-body"});null!=aside&&(aside.appendChild(toc),tocOption());var infonetMuSetting;


function downloadJSAtOnload(){var d=document.createElement("script");d.src="https://glcdn.githack.com/maxwell13/blogger/-/raw/JS/related-post-2.js",document.body.appendChild(d)}window.addEventListener?window.addEventListener("load",downloadJSAtOnload,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload):window.onload=downloadJSAtOnload;var _0xf645=["\x64\x65\x73\x63","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x74\x6F\x70\x2D\x69\x6D\x67","\x6C\x65\x6E\x67\x74\x68","\x63\x68\x69\x6C\x64\x4E\x6F\x64\x65\x73","\x66\x69\x72\x73\x74\x43\x68\x69\x6C\x64","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x6F\x76\x65\x72\x66\x6C\x6F\x77\x62\x6F\x78","\x63\x6C\x61\x73\x73\x4C\x69\x73\x74","\x65\x78\x70\x61\x6E\x64\x2D\x6D\x6F\x72\x65","\x74\x6F\x67\x67\x6C\x65","\x20","\x73\x70\x6C\x69\x74","\x63\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x70\x6C\x69\x63\x65","\x70\x75\x73\x68","\x6A\x6F\x69\x6E"];var topImg;if(topImg= document[_0xf645[1]](_0xf645[0])){for(var newParent=document[_0xf645[1]](_0xf645[2]),oldParent=document[_0xf645[1]](_0xf645[0]);oldParent[_0xf645[4]][_0xf645[3]];){newParent[_0xf645[6]](oldParent[_0xf645[5]])}};function expandComment(){var _0x3d76x5=document[_0xf645[1]](_0xf645[7]);if(_0x3d76x5[_0xf645[8]]){_0x3d76x5[_0xf645[8]][_0xf645[10]](_0xf645[9])}else {var _0x3d76x6=_0x3d76x5[_0xf645[13]][_0xf645[12]](_0xf645[11]),_0x3d76x7=_0x3d76x6[_0xf645[14]](_0xf645[9]);_0x3d76x7>= 0?_0x3d76x6[_0xf645[15]](_0x3d76x7,1):_0x3d76x6[_0xf645[16]](_0xf645[9]),_0x3d76x5[_0xf645[13]]= _0x3d76x6[_0xf645[17]](_0xf645[11])}};!function(){"use strict";for(var t=document.querySelectorAll(".llyv"),e=0;e<t.length;e++){var i=document.createElement("div");i.className="llyv-play-btn",t[e].appendChild(i),t[e].addEventListener("click",function(){var t=document.createElement("iframe");for(t.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.id+"?rel=0&showinfo=0&autoplay=1"),t.setAttribute("frameborder","0"),t.setAttribute("allowfullscreen","");this.firstChild;)this.removeChild(this.firstChild);this.appendChild(t)})}}();


 var newParent = document.getElementById('new-top-ad');
var oldParent = document.getElementById('iklan-atas-post');
while (oldParent.childNodes.length > 0) {
newParent.appendChild(oldParent.childNodes[0]);
};
var newParent = document.getElementById('new-bottom-ad');
var oldParent = document.getElementById('iklan-bawah-post');
while (oldParent.childNodes.length > 0) {
newParent.appendChild(oldParent.childNodes[0]);
};

 function insertAfter(tbh,tgt) {
       var prt = tgt.parentNode;
       if (prt.lastChild == tgt) {prt.appendChild(tbh);} 
       else {prt.insertBefore(tbh,tgt.nextSibling);}}
       var tgt = document.getElementById(&quot;konten&quot;); 
       var ad1 = document.getElementById(&quot;iklan-tengah-1&quot;);
       var ad2 = document.getElementById(&quot;iklan-tengah-2&quot;);
       var tg1 = tgt.getElementsByTagName(&quot;p&quot;); 
       var tg2 = tgt.getElementsByTagName(&quot;br&quot;);   
       var pt1 = tg1.length; var pt2 = tg2.length; 
       var ps1 = pt1*34/100; var ps2 = pt1*67/100;
       var br1 = pt2*34/100; var br2 = pt2*67/100;
       var bl1 = Math.round(ps1); var bl2 = Math.round(ps2);
       var bk1 = Math.round(br1); var bk2 = Math.round(br2);
       if (pt1 &gt; 2) {
           insertAfter(ad1,tg1[bl1-1]); insertAfter(ad2,tg1[bl2-1]);
       } else if (br2 &gt; 1) {
           insertAfter(ad1,tg2[bk1-1]); insertAfter(ad2,tg2[bk2-1]);
       } else {};

"use strict";
! function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ResizeSensor = t()
}("undefined" != typeof window ? window : this, function () {
    if ("undefined" == typeof window) return null;
    var e = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(),
        t = e.requestAnimationFrame || e.mozRequestAnimationFrame || e.webkitRequestAnimationFrame || function (t) {
            return e.setTimeout(t, 20)
        },
        n = e.cancelAnimationFrame || e.mozCancelAnimationFrame || e.webkitCancelAnimationFrame || function (t) {
            e.clearTimeout(t)
        };

    function i(e, t) {
        var n = Object.prototype.toString.call(e),
            i = "[object Array]" === n || "[object NodeList]" === n || "[object HTMLCollection]" === n || "[object Object]" === n || "undefined" != typeof jQuery && e instanceof jQuery || "undefined" != typeof Elements && e instanceof Elements,
            o = 0,
            r = e.length;
        if (i)
            for (; o < r; o++) t(e[o]);
        else t(e)
    }

    function o(e) {
        if (!e.getBoundingClientRect) return {
            width: e.offsetWidth,
            height: e.offsetHeight
        };
        var t = e.getBoundingClientRect();
        return {
            width: Math.round(t.width),
            height: Math.round(t.height)
        }
    }

    function r(e, t) {
        Object.keys(t).forEach(function (n) {
            e.style[n] = t[n]
        })
    }
    var s = function (e, d) {
        var a = 0;

        function c() {
            var e, t, n = [];
            this.add = function (e) {
                n.push(e)
            }, this.call = function (i) {
                for (e = 0, t = n.length; e < t; e++) n[e].call(this, i)
            }, this.remove = function (i) {
                var o = [];
                for (e = 0, t = n.length; e < t; e++) n[e] !== i && o.push(n[e]);
                n = o
            }, this.length = function () {
                return n.length
            }
        }

        function f(e, n) {
            if (e)
                if (e.resizedAttached) e.resizedAttached.add(n);
                else {
                    e.resizedAttached = new c, e.resizedAttached.add(n), e.resizeSensor = document.createElement("div"), e.resizeSensor.dir = "ltr", e.resizeSensor.className = "resize-sensor";
                    var i = {
                            pointerEvents: "none",
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            right: "0px",
                            bottom: "0px",
                            overflow: "hidden",
                            zIndex: "-1",
                            visibility: "hidden",
                            maxWidth: "100%"
                        },
                        s = {
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            transition: "0s"
                        };
                    r(e.resizeSensor, i);
                    var d = document.createElement("div");
                    d.className = "resize-sensor-expand", r(d, i);
                    var f = document.createElement("div");
                    r(f, s), d.appendChild(f);
                    var h = document.createElement("div");
                    h.className = "resize-sensor-shrink", r(h, i);
                    var l = document.createElement("div");
                    r(l, s), r(l, {
                        width: "200%",
                        height: "200%"
                    }), h.appendChild(l), e.resizeSensor.appendChild(d), e.resizeSensor.appendChild(h), e.appendChild(e.resizeSensor);
                    var u = window.getComputedStyle(e),
                        p = u ? u.getPropertyValue("position") : null;
                    "absolute" !== p && "relative" !== p && "fixed" !== p && "sticky" !== p && (e.style.position = "relative");
                    var m = !1,
                        v = 0,
                        z = o(e),
                        w = 0,
                        g = 0,
                        y = !0;
                    a = 0;
                    var S = function () {
                        if (y) {
                            if (0 === e.offsetWidth && 0 === e.offsetHeight) return void(a || (a = t(function () {
                                a = 0, S()
                            })));
                            y = !1
                        }
                        var n, i;
                        n = e.offsetWidth, i = e.offsetHeight, f.style.width = n + 10 + "px", f.style.height = i + 10 + "px", d.scrollLeft = n + 10, d.scrollTop = i + 10, h.scrollLeft = n + 10, h.scrollTop = i + 10
                    };
                    e.resizeSensor.resetSensor = S;
                    var b = function () {
                            v = 0, m && (w = z.width, g = z.height, e.resizedAttached && e.resizedAttached.call(z))
                        },
                        A = function () {
                            z = o(e), (m = z.width !== w || z.height !== g) && !v && (v = t(b)), S()
                        },
                        x = function (e, t, n) {
                            e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n)
                        };
                    x(d, "scroll", A), x(h, "scroll", A), a = t(function () {
                        a = 0, S()
                    })
                }
        }
        i(e, function (e) {
            f(e, d)
        }), this.detach = function (t) {
            a && (n(a), a = 0), s.detach(e, t)
        }, this.reset = function () {
            e.resizeSensor.resetSensor && e.resizeSensor.resetSensor()
        }
    };
    if (s.reset = function (e) {
            i(e, function (t) {
                e.resizeSensor.resetSensor && t.resizeSensor.resetSensor()
            })
        }, s.detach = function (e, t) {
            i(e, function (e) {
                e && (e.resizedAttached && "function" == typeof t && (e.resizedAttached.remove(t), e.resizedAttached.length()) || e.resizeSensor && (e.contains(e.resizeSensor) && e.removeChild(e.resizeSensor), delete e.resizeSensor, delete e.resizedAttached))
            })
        }, "undefined" != typeof MutationObserver) {
        var d = new MutationObserver(function (e) {
            for (var t in e)
                if (e.hasOwnProperty(t))
                    for (var n = e[t].addedNodes, i = 0; i < n.length; i++) n[i].resizeSensor && s.reset(n[i])
        });
        document.addEventListener("DOMContentLoaded", function (e) {
            d.observe(document.body, {
                childList: !0,
                subtree: !0
            })
        })
    }
    return s
});

function scrollFunction() {
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 500 ? document.getElementById("buttombutton").style.bottom = "0px" : document.getElementById("buttombutton").style.bottom = "-45px"
}

function topFunction() {
    document.body.scrollTop = 0, document.documentElement.scrollTop = 0
}
window.onscroll = function () {
    scrollFunction()
};
document.getElementById("otoyear").innerHTML = new Date().getFullYear();
var _0xb776 = ["show-list", "getElementById", "classList", "menu-active", "toggle", " ", "split", "className", "indexOf", "splice", "push", "join", "body", "no-overflow"];

function menuButton() {
    var _0x276ex2 = document[_0xb776[1]](_0xb776[0]);
    if (_0x276ex2[_0xb776[2]]) {
        _0x276ex2[_0xb776[2]][_0xb776[4]](_0xb776[3])
    } else {
        var _0x276ex3 = _0x276ex2[_0xb776[7]][_0xb776[6]](_0xb776[5]),
            _0x276ex4 = _0x276ex3[_0xb776[8]](_0xb776[3]);
        _0x276ex4 >= 0 ? _0x276ex3[_0xb776[9]](_0x276ex4, 1) : _0x276ex3[_0xb776[10]](_0xb776[3]), _0x276ex2[_0xb776[7]] = _0x276ex3[_0xb776[11]](_0xb776[5])
    };
    var _0x276ex2 = document[_0xb776[12]];
    if (_0x276ex2[_0xb776[2]]) {
        _0x276ex2[_0xb776[2]][_0xb776[4]](_0xb776[13])
    } else {
        var _0x276ex3 = _0x276ex2[_0xb776[7]][_0xb776[6]](_0xb776[5]),
            _0x276ex4 = _0x276ex3[_0xb776[8]](_0xb776[13]);
        _0x276ex4 >= 0 ? _0x276ex3[_0xb776[9]](_0x276ex4, 1) : _0x276ex3[_0xb776[10]](_0xb776[13]), _0x276ex2[_0xb776[7]] = _0x276ex3[_0xb776[11]](_0xb776[5])
    }
};
var _0xd2f9 = ["a[href=\"https://www.mollickblog.com/\"]", "querySelector", ".thumbox", "querySelectorAll", "length", "b-lazy", "add", "classList", "thumb-area", "getElementsByClassName", "innerHTML", "<span class=\'spanlabel\'>Not Activate License</span>", "style", "background-image:url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3_yTvajqAw7_5EQt-EqGg2YWtdiCpFqGLUcZB6vhivlqHK2Ka2oGLoC2ScrySycN4xtiGHonKeu0QgjFwSoiToV54P-5hfkUcip7swWR8BSImBEpX9cp_Cki-Ky63KZVcWqE3Fdv58k3RMkwLORfUHr7vB1zvcRaHR4tD6TTTnNRJ7Wet2MQdzkPH/s1600/1665941277958-removebg-preview.png)", "setAttribute"];
var crY;
if (crY = document[_0xd2f9[1]](_0xd2f9[0])) {
    const e = document[_0xd2f9[3]](_0xd2f9[2]);
    for (let a = 0; a < e[_0xd2f9[4]]; a++) {
        e[a][_0xd2f9[7]][_0xd2f9[6]](_0xd2f9[5])
    }
} else {
    for (var images = document[_0xd2f9[9]](_0xd2f9[8]), i = 0; i < images[_0xd2f9[4]]; i++) {
        images[i][_0xd2f9[10]] = _0xd2f9[11], images[i][_0xd2f9[14]](_0xd2f9[12], _0xd2f9[13])
    }
};
! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.StickySidebar = {})
}(this, function (t) {
    "use strict";
    "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var e, i, n = (function (t, e) {
            (function (t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var l, n, e = function () {
                        function n(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function (t, e, i) {
                            return e && n(t.prototype, e), i && n(t, i), t
                        }
                    }(),
                    i = (l = ".stickySidebar", n = {
                        topSpacing: 0,
                        bottomSpacing: 0,
                        containerSelector: !1,
                        innerWrapperSelector: ".inner-wrapper-sticky",
                        stickyClass: "is-affixed",
                        resizeSensor: !0,
                        minWidth: !1
                    }, function () {
                        function c(t) {
                            var e = this,
                                i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                            if (function (t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, c), this.options = c.extend(n, i), this.sidebar = "string" == typeof t ? document.querySelector(t) : t, void 0 === this.sidebar) throw new Error("There is no specific sidebar element.");
                            this.sidebarInner = !1, this.container = this.sidebar.parentElement, this.affixedType = "STATIC", this.direction = "down", this.support = {
                                transform: !1,
                                transform3d: !1
                            }, this._initialized = !1, this._reStyle = !1, this._breakpoint = !1, this.dimensions = {
                                translateY: 0,
                                maxTranslateY: 0,
                                topSpacing: 0,
                                lastTopSpacing: 0,
                                bottomSpacing: 0,
                                lastBottomSpacing: 0,
                                sidebarHeight: 0,
                                sidebarWidth: 0,
                                containerTop: 0,
                                containerHeight: 0,
                                viewportHeight: 0,
                                viewportTop: 0,
                                lastViewportTop: 0
                            }, ["handleEvent"].forEach(function (t) {
                                e[t] = e[t].bind(e)
                            }), this.initialize()
                        }
                        return e(c, [{
                            key: "initialize",
                            value: function () {
                                var i = this;
                                if (this._setSupportFeatures(), this.options.innerWrapperSelector && (this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector), null === this.sidebarInner && (this.sidebarInner = !1)), !this.sidebarInner) {
                                    var t = document.createElement("div");
                                    for (t.setAttribute("class", "inner-wrapper-sticky"), this.sidebar.appendChild(t); this.sidebar.firstChild != t;) t.appendChild(this.sidebar.firstChild);
                                    this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky")
                                }
                                if (this.options.containerSelector) {
                                    var e = document.querySelectorAll(this.options.containerSelector);
                                    if ((e = Array.prototype.slice.call(e)).forEach(function (t, e) {
                                            t.contains(i.sidebar) && (i.container = t)
                                        }), !e.length) throw new Error("The container does not contains on the sidebar.")
                                }
                                "function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0), "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0), this._widthBreakpoint(), this.calcDimensions(), this.stickyPosition(), this.bindEvents(), this._initialized = !0
                            }
                        }, {
                            key: "bindEvents",
                            value: function () {
                                window.addEventListener("resize", this, {
                                    passive: !0,
                                    capture: !1
                                }), window.addEventListener("scroll", this, {
                                    passive: !0,
                                    capture: !1
                                }), this.sidebar.addEventListener("update" + l, this), this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner, this.handleEvent), new ResizeSensor(this.container, this.handleEvent))
                            }
                        }, {
                            key: "handleEvent",
                            value: function (t) {
                                this.updateSticky(t)
                            }
                        }, {
                            key: "calcDimensions",
                            value: function () {
                                if (!this._breakpoint) {
                                    var t = this.dimensions;
                                    t.containerTop = c.offsetRelative(this.container).top, t.containerHeight = this.container.clientHeight, t.containerBottom = t.containerTop + t.containerHeight, t.sidebarHeight = this.sidebarInner.offsetHeight, t.sidebarWidth = this.sidebarInner.offsetWidth, t.viewportHeight = window.innerHeight, t.maxTranslateY = t.containerHeight - t.sidebarHeight, this._calcDimensionsWithScroll()
                                }
                            }
                        }, {
                            key: "_calcDimensionsWithScroll",
                            value: function () {
                                var t = this.dimensions;
                                t.sidebarLeft = c.offsetRelative(this.sidebar).left, t.viewportTop = document.documentElement.scrollTop || document.body.scrollTop, t.viewportBottom = t.viewportTop + t.viewportHeight, t.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft, t.topSpacing = this.options.topSpacing, t.bottomSpacing = this.options.bottomSpacing, "function" == typeof t.topSpacing && (t.topSpacing = parseInt(t.topSpacing(this.sidebar)) || 0), "function" == typeof t.bottomSpacing && (t.bottomSpacing = parseInt(t.bottomSpacing(this.sidebar)) || 0), "VIEWPORT-TOP" === this.affixedType ? t.topSpacing < t.lastTopSpacing && (t.translateY += t.lastTopSpacing - t.topSpacing, this._reStyle = !0) : "VIEWPORT-BOTTOM" === this.affixedType && t.bottomSpacing < t.lastBottomSpacing && (t.translateY += t.lastBottomSpacing - t.bottomSpacing, this._reStyle = !0), t.lastTopSpacing = t.topSpacing, t.lastBottomSpacing = t.bottomSpacing
                            }
                        }, {
                            key: "isSidebarFitsViewport",
                            value: function () {
                                var t = this.dimensions,
                                    e = "down" === this.scrollDirection ? t.lastBottomSpacing : t.lastTopSpacing;
                                return this.dimensions.sidebarHeight + e < this.dimensions.viewportHeight
                            }
                        }, {
                            key: "observeScrollDir",
                            value: function () {
                                var t = this.dimensions;
                                if (t.lastViewportTop !== t.viewportTop) {
                                    var e = "down" === this.direction ? Math.min : Math.max;
                                    t.viewportTop === e(t.viewportTop, t.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down")
                                }
                            }
                        }, {
                            key: "getAffixType",
                            value: function () {
                                this._calcDimensionsWithScroll();
                                var t = this.dimensions,
                                    e = t.viewportTop + t.topSpacing,
                                    i = this.affixedType;
                                return e <= t.containerTop || t.containerHeight <= t.sidebarHeight ? (t.translateY = 0, i = "STATIC") : i = "up" === this.direction ? this._getAffixTypeScrollingUp() : this._getAffixTypeScrollingDown(), t.translateY = Math.max(0, t.translateY), t.translateY = Math.min(t.containerHeight, t.translateY), t.translateY = Math.round(t.translateY), t.lastViewportTop = t.viewportTop, i
                            }
                        }, {
                            key: "_getAffixTypeScrollingDown",
                            value: function () {
                                var t = this.dimensions,
                                    e = t.sidebarHeight + t.containerTop,
                                    i = t.viewportTop + t.topSpacing,
                                    n = t.viewportBottom - t.bottomSpacing,
                                    o = this.affixedType;
                                return this.isSidebarFitsViewport() ? t.sidebarHeight + i >= t.containerBottom ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : i >= t.containerTop && (t.translateY = i - t.containerTop, o = "VIEWPORT-TOP") : t.containerBottom <= n ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : e + t.translateY <= n ? (t.translateY = n - e, o = "VIEWPORT-BOTTOM") : t.containerTop + t.translateY <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (o = "VIEWPORT-UNBOTTOM"), o
                            }
                        }, {
                            key: "_getAffixTypeScrollingUp",
                            value: function () {
                                var t = this.dimensions,
                                    e = t.sidebarHeight + t.containerTop,
                                    i = t.viewportTop + t.topSpacing,
                                    n = t.viewportBottom - t.bottomSpacing,
                                    o = this.affixedType;
                                return i <= t.translateY + t.containerTop ? (t.translateY = i - t.containerTop, o = "VIEWPORT-TOP") : t.containerBottom <= n ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : this.isSidebarFitsViewport() || t.containerTop <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (o = "VIEWPORT-UNBOTTOM"), o
                            }
                        }, {
                            key: "_getStyle",
                            value: function (t) {
                                if (void 0 !== t) {
                                    var e = {
                                            inner: {},
                                            outer: {}
                                        },
                                        i = this.dimensions;
                                    switch (t) {
                                    case "VIEWPORT-TOP":
                                        e.inner = {
                                            position: "fixed",
                                            top: i.topSpacing,
                                            left: i.sidebarLeft - i.viewportLeft,
                                            width: i.sidebarWidth
                                        };
                                        break;
                                    case "VIEWPORT-BOTTOM":
                                        e.inner = {
                                            position: "fixed",
                                            top: "auto",
                                            left: i.sidebarLeft,
                                            bottom: i.bottomSpacing,
                                            width: i.sidebarWidth
                                        };
                                        break;
                                    case "CONTAINER-BOTTOM":
                                    case "VIEWPORT-UNBOTTOM":
                                        var n = this._getTranslate(0, i.translateY + "px");
                                        e.inner = n ? {
                                            transform: n
                                        } : {
                                            position: "absolute",
                                            top: i.translateY,
                                            width: i.sidebarWidth
                                        }
                                    }
                                    switch (t) {
                                    case "VIEWPORT-TOP":
                                    case "VIEWPORT-BOTTOM":
                                    case "VIEWPORT-UNBOTTOM":
                                    case "CONTAINER-BOTTOM":
                                        e.outer = {
                                            height: i.sidebarHeight,
                                            position: "relative"
                                        }
                                    }
                                    return e.outer = c.extend({
                                        height: "",
                                        position: ""
                                    }, e.outer), e.inner = c.extend({
                                        position: "relative",
                                        top: "",
                                        left: "",
                                        bottom: "",
                                        width: "",
                                        transform: ""
                                    }, e.inner), e
                                }
                            }
                        }, {
                            key: "stickyPosition",
                            value: function (t) {
                                if (!this._breakpoint) {
                                    t = this._reStyle || t || !1, this.options.topSpacing, this.options.bottomSpacing;
                                    var e = this.getAffixType(),
                                        i = this._getStyle(e);
                                    if ((this.affixedType != e || t) && e) {
                                        var n = "affix." + e.toLowerCase().replace("viewport-", "") + l;
                                        for (var o in c.eventTrigger(this.sidebar, n), "STATIC" === e ? c.removeClass(this.sidebar, this.options.stickyClass) : c.addClass(this.sidebar, this.options.stickyClass), i.outer) {
                                            var s = "number" == typeof i.outer[o] ? "px" : "";
                                            this.sidebar.style[o] = i.outer[o] + s
                                        }
                                        for (var r in i.inner) {
                                            var a = "number" == typeof i.inner[r] ? "px" : "";
                                            this.sidebarInner.style[r] = i.inner[r] + a
                                        }
                                        var p = "affixed." + e.toLowerCase().replace("viewport-", "") + l;
                                        c.eventTrigger(this.sidebar, p)
                                    } else this._initialized && (this.sidebarInner.style.left = i.inner.left);
                                    this.affixedType = e
                                }
                            }
                        }, {
                            key: "_widthBreakpoint",
                            value: function () {
                                window.innerWidth <= this.options.minWidth ? (this._breakpoint = !0, this.affixedType = "STATIC", this.sidebar.removeAttribute("style"), c.removeClass(this.sidebar, this.options.stickyClass), this.sidebarInner.removeAttribute("style")) : this._breakpoint = !1
                            }
                        }, {
                            key: "updateSticky",
                            value: function () {
                                var t, e = this,
                                    i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                this._running || (this._running = !0, t = i.type, requestAnimationFrame(function () {
                                    switch (t) {
                                    case "scroll":
                                        e._calcDimensionsWithScroll(), e.observeScrollDir(), e.stickyPosition();
                                        break;
                                    case "resize":
                                    default:
                                        e._widthBreakpoint(), e.calcDimensions(), e.stickyPosition(!0)
                                    }
                                    e._running = !1
                                }))
                            }
                        }, {
                            key: "_setSupportFeatures",
                            value: function () {
                                var t = this.support;
                                t.transform = c.supportTransform(), t.transform3d = c.supportTransform(!0)
                            }
                        }, {
                            key: "_getTranslate",
                            value: function () {
                                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                                    e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                                return this.support.transform3d ? "translate3d(" + t + ", " + e + ", " + i + ")" : !!this.support.translate && "translate(" + t + ", " + e + ")"
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                window.removeEventListener("resize", this, {
                                    capture: !1
                                }), window.removeEventListener("scroll", this, {
                                    capture: !1
                                }), this.sidebar.classList.remove(this.options.stickyClass), this.sidebar.style.minHeight = "", this.sidebar.removeEventListener("update" + l, this);
                                var t = {
                                    inner: {},
                                    outer: {}
                                };
                                for (var e in t.inner = {
                                        position: "",
                                        top: "",
                                        left: "",
                                        bottom: "",
                                        width: "",
                                        transform: ""
                                    }, t.outer = {
                                        height: "",
                                        position: ""
                                    }, t.outer) this.sidebar.style[e] = t.outer[e];
                                for (var i in t.inner) this.sidebarInner.style[i] = t.inner[i];
                                this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent), ResizeSensor.detach(this.container, this.handleEvent))
                            }
                        }], [{
                            key: "supportTransform",
                            value: function (t) {
                                var i = !1,
                                    e = t ? "perspective" : "transform",
                                    n = e.charAt(0).toUpperCase() + e.slice(1),
                                    o = document.createElement("support").style;
                                return (e + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ").forEach(function (t, e) {
                                    if (void 0 !== o[t]) return i = t, !1
                                }), i
                            }
                        }, {
                            key: "eventTrigger",
                            value: function (t, e, i) {
                                try {
                                    var n = new CustomEvent(e, {
                                        detail: i
                                    })
                                } catch (t) {
                                    (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i)
                                }
                                t.dispatchEvent(n)
                            }
                        }, {
                            key: "extend",
                            value: function (t, e) {
                                var i = {};
                                for (var n in t) void 0 !== e[n] ? i[n] = e[n] : i[n] = t[n];
                                return i
                            }
                        }, {
                            key: "offsetRelative",
                            value: function (t) {
                                var e = {
                                    left: 0,
                                    top: 0
                                };
                                do {
                                    var i = t.offsetTop,
                                        n = t.offsetLeft;
                                    isNaN(i) || (e.top += i), isNaN(n) || (e.left += n), t = "BODY" === t.tagName ? t.parentElement : t.offsetParent
                                } while (t);
                                return e
                            }
                        }, {
                            key: "addClass",
                            value: function (t, e) {
                                c.hasClass(t, e) || (t.classList ? t.classList.add(e) : t.className += " " + e)
                            }
                        }, {
                            key: "removeClass",
                            value: function (t, e) {
                                c.hasClass(t, e) && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
                            }
                        }, {
                            key: "hasClass",
                            value: function (t, e) {
                                return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className)
                            }
                        }, {
                            key: "defaults",
                            get: function () {
                                return n
                            }
                        }]), c
                    }());
                t.default = i, window.StickySidebar = i
            })(e)
        }(e = {
            exports: {}
        }, e.exports), e.exports),
        o = (i = n) && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
    t.default = o, t.__moduleExports = n, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
var sidebar = new StickySidebar("#sidebar-wrapper", {
    topSpacing: 20,
    bottomSpacing: 20,
    containerSelector: "#outer-wrapper",
    innerWrapperSelector: ".sidebar__inner",
    minWidth: 1024
});
