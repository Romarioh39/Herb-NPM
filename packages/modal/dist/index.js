!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports.UIModal=t(require("react"),require("prop-types")):e.UIModal=t(e.react,e["prop-types"])}(window,function(e,t){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"flush",function(){return a}),r.d(t,"hydrate",function(){return c}),r.d(t,"cx",function(){return s}),r.d(t,"merge",function(){return u}),r.d(t,"getRegisteredStyles",function(){return l}),r.d(t,"injectGlobal",function(){return f}),r.d(t,"keyframes",function(){return d}),r.d(t,"css",function(){return p}),r.d(t,"sheet",function(){return h}),r.d(t,"caches",function(){return b});var n=r(5),i=void 0!==e?e:{},o=Object(n.a)(i),a=o.flush,c=o.hydrate,s=o.cx,u=o.merge,l=o.getRegisteredStyles,f=o.injectGlobal,d=o.keyframes,p=o.css,h=o.sheet,b=o.caches}.call(this,r(8))},function(e,t,r){"use strict";t.a=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){e.exports=function(){"use strict";return function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(r,n,i,o,a,c,s,u,l,f){switch(r){case 1:if(0===l&&64===n.charCodeAt(0))return e(n+";"),"";break;case 2:if(0===u)return n+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(i[0]+n),"";default:return n+(0===f?"/*|*/":"")}case-2:n.split("/*|*/}").forEach(t)}}}}()},function(e,t,r){"use strict";var n=r(1),i={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var o=function(e){for(var t,r=e.length,n=r^r,i=0;r>=4;)t=1540483477*(65535&(t=255&e.charCodeAt(i)|(255&e.charCodeAt(++i))<<8|(255&e.charCodeAt(++i))<<16|(255&e.charCodeAt(++i))<<24))+((1540483477*(t>>>16)&65535)<<16),n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16)^(t=1540483477*(65535&(t^=t>>>24))+((1540483477*(t>>>16)&65535)<<16)),r-=4,++i;switch(r){case 3:n^=(255&e.charCodeAt(i+2))<<16;case 2:n^=(255&e.charCodeAt(i+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(i)))+((1540483477*(n>>>16)&65535)<<16)}return n=1540483477*(65535&(n^=n>>>13))+((1540483477*(n>>>16)&65535)<<16),((n^=n>>>15)>>>0).toString(36)},a=function e(t){function r(e,t,r){var i=t.trim().split(b);t=i;var o=i.length,a=e.length;switch(a){case 0:case 1:var c=0;for(e=0===a?"":e[0]+" ";c<o;++c)t[c]=n(e,t[c],r).trim();break;default:var s=c=0;for(t=[];c<o;++c)for(var u=0;u<a;++u)t[s++]=n(e[u]+" ",i[c],r).trim()}return t}function n(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function i(e,t,r,n){var a=e+";",c=2*t+3*r+4*n;if(944===c){e=a.indexOf(":",9)+1;var s=a.substring(e,a.length-1).trim();return s=a.substring(0,e).trim()+s+";",1===E||2===E&&o(s,1)?"-webkit-"+s+s:s}if(0===E||2===E&&!o(a,1))return a;switch(c){case 1015:return 97===a.charCodeAt(10)?"-webkit-"+a+a:a;case 951:return 116===a.charCodeAt(3)?"-webkit-"+a+a:a;case 963:return 110===a.charCodeAt(5)?"-webkit-"+a+a:a;case 1009:if(100!==a.charCodeAt(4))break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(45===a.charCodeAt(8))return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(_,"$1-webkit-$2")+a;break;case 932:if(45===a.charCodeAt(4))switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(99!==a.charCodeAt(8))break;return"-webkit-box-pack"+(s=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+a+"-ms-flex-pack"+s+a;case 1005:return p.test(a)?a.replace(d,":-webkit-")+a.replace(d,":-moz-")+a:a;case 1e3:switch(t=(s=a.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(t)){case 226:s=a.replace(k,"tb");break;case 232:s=a.replace(k,"tb-rl");break;case 220:s=a.replace(k,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+s+a;case 1017:if(-1===a.indexOf("sticky",9))break;case 975:switch(t=(a=e).length-10,c=(s=(33===a.charCodeAt(t)?a.substring(0,t):a).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(111>s.charCodeAt(8))break;case 115:a=a.replace(s,"-webkit-"+s)+";"+a;break;case 207:case 102:a=a.replace(s,"-webkit-"+(102<c?"inline-":"")+"box")+";"+a.replace(s,"-webkit-"+s)+";"+a.replace(s,"-ms-"+s+"box")+";"+a}return a+";";case 938:if(45===a.charCodeAt(5))switch(a.charCodeAt(6)){case 105:return"-webkit-"+a+"-webkit-box-"+(s=a.replace("-items",""))+"-ms-flex-"+s+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(x,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(x,"")+a}break;case 973:case 989:if(45!==a.charCodeAt(3)||122===a.charCodeAt(4))break;case 931:case 953:if(!0===O.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?i(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):a.replace(s,"-webkit-"+s)+a.replace(s,"-moz-"+s.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(102===a.charCodeAt(5)?"-ms-"+a:"")+a,211===r+n&&105===a.charCodeAt(13)&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+a}return a}function o(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),z(2!==t?n:n.replace(A,"$1"),r,t)}function a(e,t){var r=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(C," or ($1)").substring(4):"("+t+")"}function c(e,t,r,n,i,o,a,c,s,l){for(var f,d=0,p=t;d<R;++d)switch(f=T[d].call(u,e,p,r,n,i,o,a,c,s,l)){case void 0:case!1:case!0:case null:break;default:p=f}if(p!==t)return p}function s(e){return void 0!==(e=e.prefix)&&(z=null,e?"function"!=typeof e?E=1:(E=2,z=e):E=0),s}function u(t,n){if(void 0!==this&&this.constructor===u)return e(t);var s=t;if(33>s.charCodeAt(0)&&(s=s.trim()),s=[s],0<R){var d=c(-1,n,s,s,j,S,0,0,0,0);void 0!==d&&"string"==typeof d&&(n=d)}var p=function e(t,n,s,u,d){for(var p,h,b,g,k,C=0,x=0,A=0,O=0,_=0,T=0,z=b=p=0,I=0,F=0,L=0,H=0,$=s.length,D=$-1,B="",U="",q="",W="";I<$;){if(h=s.charCodeAt(I),I===D&&0!==x+O+A+C&&(0!==x&&(h=47===x?10:47),O=A=C=0,$++,D++),0===x+O+A+C){if(I===D&&(0<F&&(B=B.replace(f,"")),0<B.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:B+=s.charAt(I)}h=59}switch(h){case 123:for(p=(B=B.trim()).charCodeAt(0),b=1,H=++I;I<$;){switch(h=s.charCodeAt(I)){case 123:b++;break;case 125:b--;break;case 47:switch(h=s.charCodeAt(I+1)){case 42:case 47:e:{for(z=I+1;z<D;++z)switch(s.charCodeAt(z)){case 47:if(42===h&&42===s.charCodeAt(z-1)&&I+2!==z){I=z+1;break e}break;case 10:if(47===h){I=z+1;break e}}I=z}}break;case 91:h++;case 40:h++;case 34:case 39:for(;I++<D&&s.charCodeAt(I)!==h;);}if(0===b)break;I++}switch(b=s.substring(H,I),0===p&&(p=(B=B.replace(l,"").trim()).charCodeAt(0)),p){case 64:switch(0<F&&(B=B.replace(f,"")),h=B.charCodeAt(1)){case 100:case 109:case 115:case 45:F=n;break;default:F=M}if(H=(b=e(n,F,b,h,d+1)).length,0<R&&(k=c(3,b,F=r(M,B,L),n,j,S,H,h,d,u),B=F.join(""),void 0!==k&&0===(H=(b=k.trim()).length)&&(h=0,b="")),0<H)switch(h){case 115:B=B.replace(w,a);case 100:case 109:case 45:b=B+"{"+b+"}";break;case 107:b=(B=B.replace(m,"$1 $2"))+"{"+b+"}",b=1===E||2===E&&o("@"+b,3)?"@-webkit-"+b+"@"+b:"@"+b;break;default:b=B+b,112===u&&(U+=b,b="")}else b="";break;default:b=e(n,r(n,B,L),b,u,d+1)}q+=b,b=L=F=z=p=0,B="",h=s.charCodeAt(++I);break;case 125:case 59:if(1<(H=(B=(0<F?B.replace(f,""):B).trim()).length))switch(0===z&&(p=B.charCodeAt(0),45===p||96<p&&123>p)&&(H=(B=B.replace(" ",":")).length),0<R&&void 0!==(k=c(1,B,n,t,j,S,U.length,u,d,u))&&0===(H=(B=k.trim()).length)&&(B="\0\0"),p=B.charCodeAt(0),h=B.charCodeAt(1),p){case 0:break;case 64:if(105===h||99===h){W+=B+s.charAt(I);break}default:58!==B.charCodeAt(H-1)&&(U+=i(B,p,h,B.charCodeAt(2)))}L=F=z=p=0,B="",h=s.charCodeAt(++I)}}switch(h){case 13:case 10:47===x?x=0:0===1+p&&107!==u&&0<B.length&&(F=1,B+="\0"),0<R*N&&c(0,B,n,t,j,S,U.length,u,d,u),S=1,j++;break;case 59:case 125:if(0===x+O+A+C){S++;break}default:switch(S++,g=s.charAt(I),h){case 9:case 32:if(0===O+C+x)switch(_){case 44:case 58:case 9:case 32:g="";break;default:32!==h&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===O+x+C&&(F=L=1,g="\f"+g);break;case 108:if(0===O+x+C+P&&0<z)switch(I-z){case 2:112===_&&58===s.charCodeAt(I-3)&&(P=_);case 8:111===T&&(P=T)}break;case 58:0===O+x+C&&(z=I);break;case 44:0===x+A+O+C&&(F=1,g+="\r");break;case 34:case 39:0===x&&(O=O===h?0:0===O?h:O);break;case 91:0===O+x+A&&C++;break;case 93:0===O+x+A&&C--;break;case 41:0===O+x+C&&A--;break;case 40:if(0===O+x+C){if(0===p)switch(2*_+3*T){case 533:break;default:p=1}A++}break;case 64:0===x+A+O+C+z+b&&(b=1);break;case 42:case 47:if(!(0<O+C+A))switch(x){case 0:switch(2*h+3*s.charCodeAt(I+1)){case 235:x=47;break;case 220:H=I,x=42}break;case 42:47===h&&42===_&&H+2!==I&&(33===s.charCodeAt(H+2)&&(U+=s.substring(H,I+1)),g="",x=0)}}0===x&&(B+=g)}T=_,_=h,I++}if(0<(H=U.length)){if(F=n,0<R&&void 0!==(k=c(2,U,F,t,j,S,H,u,d,u))&&0===(U=k).length)return W+U+q;if(U=F.join(",")+"{"+U+"}",0!=E*P){switch(2!==E||o(U,2)||(P=0),P){case 111:U=U.replace(v,":-moz-$1")+U;break;case 112:U=U.replace(y,"::-webkit-input-$1")+U.replace(y,"::-moz-$1")+U.replace(y,":-ms-input-$1")+U}P=0}}return W+U+q}(M,s,n,0,0);return 0<R&&void 0!==(d=c(-2,p,s,s,j,S,p.length,0,0,0))&&(p=d),P=0,S=j=1,p}var l=/^\0+/g,f=/[\0\r\f]/g,d=/: */g,p=/zoo|gra/,h=/([,: ])(transform)/g,b=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,v=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,x=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,O=/stretch|:\s*\w+\-(?:conte|avail)/,_=/([^-])(image-set\()/,S=1,j=1,P=0,E=1,M=[],T=[],R=0,z=null,N=0;return u.use=function e(t){switch(t){case void 0:case null:R=T.length=0;break;default:switch(t.constructor){case Array:for(var r=0,n=t.length;r<n;++r)e(t[r]);break;case Function:T[R++]=t;break;case Boolean:N=0|!!t}}return e},u.set=s,void 0!==t&&s(t),u},c=r(4),s=r.n(c),u=/[A-Z]|^ms/g,l=Object(n.a)(function(e){return e.replace(u,"-$&").toLowerCase()}),f=function(e,t){return null==t||"boolean"==typeof t?"":1===i[e]||45===e.charCodeAt(1)||isNaN(t)||0===t?t:t+"px"},d=function e(t){for(var r=t.length,n=0,i="";n<r;n++){var o=t[n];if(null!=o){var a=void 0;switch(typeof o){case"boolean":break;case"function":0,a=e([o()]);break;case"object":if(Array.isArray(o))a=e(o);else for(var c in a="",o)o[c]&&c&&(a&&(a+=" "),a+=c);break;default:a=o}a&&(i&&(i+=" "),i+=a)}}return i},p="undefined"!=typeof document;function h(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key||""),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),(void 0!==e.container?e.container:document.head).appendChild(t),t}var b=function(){function e(e){this.isSpeedy=!0,this.tags=[],this.ctr=0,this.opts=e}var t=e.prototype;return t.inject=function(){if(this.injected)throw new Error("already injected!");this.tags[0]=h(this.opts),this.injected=!0},t.speedy=function(e){if(0!==this.ctr)throw new Error("cannot change speedy now");this.isSpeedy=!!e},t.insert=function(e,t){if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(this.tags[this.tags.length-1]);try{r.insertRule(e,r.cssRules.length)}catch(e){0}}else{var n=h(this.opts);this.tags.push(n),n.appendChild(document.createTextNode(e+(t||"")))}this.ctr++,this.ctr%65e3==0&&this.tags.push(h(this.opts))},t.flush=function(){this.tags.forEach(function(e){return e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0,this.injected=!1},e}();t.a=function(e,t){if(void 0!==e.__SECRET_EMOTION__)return e.__SECRET_EMOTION__;void 0===t&&(t={});var r,n,i=t.key||"css",c=s()(function(e){r+=e,p&&h.insert(e,m)});void 0!==t.prefix&&(n={prefix:t.prefix});var u={registered:{},inserted:{},nonce:t.nonce,key:i},h=new b(t);p&&h.inject();var g=new a(n);g.use(t.stylisPlugins)(c);var m="";function y(e,t){if(null==e)return"";switch(typeof e){case"boolean":return"";case"function":if(void 0!==e.__emotion_styles){var r=e.toString();return r}return y.call(this,void 0===this?e():e(this.mergedProps,this.context),t);case"object":return function(e){if(w.has(e))return w.get(e);var t="";return Array.isArray(e)?e.forEach(function(e){t+=y.call(this,e,!1)},this):Object.keys(e).forEach(function(r){"object"!=typeof e[r]?void 0!==u.registered[e[r]]?t+=r+"{"+u.registered[e[r]]+"}":t+=l(r)+":"+f(r,e[r])+";":Array.isArray(e[r])&&"string"==typeof e[r][0]&&void 0===u.registered[e[r][0]]?e[r].forEach(function(e){t+=l(r)+":"+f(r,e)+";"}):t+=r+"{"+y.call(this,e[r],!1)+"}"},this),w.set(e,t),t}.call(this,e);default:var n=u.registered[e];return!1===t&&void 0!==n?n:e}}var v,k,w=new WeakMap,C=/label:\s*([^\s;\n{]+)\s*;/g,x=function(e){var t=!0,r="",n="";null==e||void 0===e.raw?(t=!1,r+=y.call(this,e,!1)):r+=e[0];for(var i=arguments.length,a=new Array(i>1?i-1:0),c=1;c<i;c++)a[c-1]=arguments[c];return a.forEach(function(n,i){r+=y.call(this,n,46===r.charCodeAt(r.length-1)),!0===t&&void 0!==e[i+1]&&(r+=e[i+1])},this),k=r,r=r.replace(C,function(e,t){return n+="-"+t,""}),v=function(e,t){return o(e+t)+t}(r,n),r};function A(e,t){void 0===u.inserted[v]&&(r="",g(e,t),u.inserted[v]=r)}var O=function(){var e=x.apply(this,arguments),t=i+"-"+v;return void 0===u.registered[t]&&(u.registered[t]=k),A("."+t,e),t};function _(e,t){var r="";return t.split(" ").forEach(function(t){void 0!==u.registered[t]?e.push(t):r+=t+" "}),r}function S(e,t){var r=[],n=_(r,e);return r.length<2?e:n+O(r,t)}function j(e){u.inserted[e]=!0}if(p){var P=document.querySelectorAll("[data-emotion-"+i+"]");Array.prototype.forEach.call(P,function(e){h.tags[0].parentNode.insertBefore(e,h.tags[0]),e.getAttribute("data-emotion-"+i).split(" ").forEach(j)})}var E={flush:function(){p&&(h.flush(),h.inject()),u.inserted={},u.registered={}},hydrate:function(e){e.forEach(j)},cx:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return S(d(t))},merge:S,getRegisteredStyles:_,injectGlobal:function(){A("",x.apply(this,arguments))},keyframes:function(){var e=x.apply(this,arguments),t="animation-"+v;return A("","@keyframes "+t+"{"+e+"}"),t},css:O,sheet:h,caches:u};return e.__SECRET_EMOTION__=E,E}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Close=t.Footer=t.Body=t.Header=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(2)),i=function(e){return e&&e.__esModule?e:{default:e}}(r(3)),o=r(7);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?h(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=i.default.bool,m=i.default.func,y=function(e){function t(e){var r;return c(this,t),b(h(h(r=l(this,f(t).call(this,e)))),"toggleMouse",function(){r.setState({respectMouse:!r.state.respectMouse})}),b(h(h(r)),"toggleModal",function(){r.state.respectMouse&&r.setState({showAnimation:!0})}),r.state={respectMouse:!0,showAnimation:!1},r}return d(t,n.Component),u(t,[{key:"componentDidUpdate",value:function(){var e=this,t=this.props.toggleModal;this.state.showAnimation&&setTimeout(function(){e.setState({showAnimation:!1},function(){return t()})},5e3)}},{key:"render",value:function(){var e=this.props.isOpen,t=this.state.showAnimation;return e?n.default.createElement(o.Container,{showAnimation:t,onClick:this.toggleModal},n.default.createElement(o.Content,{onMouseEnter:this.toggleMouse,onMouseLeave:this.toggleMouse},this.props.children)):null}}]),t}();b(y,"propTypes",{isOpen:g.isRequired,toggleModal:m.isRequired});var v=function(e){function t(){return c(this,t),l(this,f(t).apply(this,arguments))}return d(t,n.Component),u(t,[{key:"render",value:function(){return n.default.createElement(o.HeaderContainer,null,this.props.children)}}]),t}();t.Header=v;var k=function(e){function t(){return c(this,t),l(this,f(t).apply(this,arguments))}return d(t,n.Component),u(t,[{key:"render",value:function(){return n.default.createElement(o.BodyContainer,null,this.props.children)}}]),t}();t.Body=k;var w=function(e){function t(){return c(this,t),l(this,f(t).apply(this,arguments))}return d(t,n.Component),u(t,[{key:"render",value:function(){return n.default.createElement(o.FooterContainer,null,this.props.children)}}]),t}();t.Footer=w;var C=function(e){function t(){return c(this,t),l(this,f(t).apply(this,arguments))}return d(t,n.Component),u(t,[{key:"render",value:function(){return n.default.createElement(o.CloseContainer,{onClick:this.props.toggleModal},this.props.children)}}]),t}();t.Close=C;var x=y;t.default=x},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CloseContainer=t.FooterContainer=t.BodyContainer=t.HeaderContainer=t.Content=t.Container=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(9));function i(){var e=f(["\n  border: 1px solid black;\n  border-radius: 4px;\n  > * {\n    width: 20px;\n  }\n  width: 20px;\n"]);return i=function(){return e},e}function o(){var e=f(["\n  background-color: #f4f4f4;\n  width: 100%;\n  height: 20%;\n"]);return o=function(){return e},e}function a(){var e=f(["\n  background-color: white;\n  width: 100%;\n  height: 60%;\n"]);return a=function(){return e},e}function c(){var e=f(["\n  background-color: #f4f4f4;\n  width: 100%;\n  height: 20%;\n"]);return c=function(){return e},e}function s(){var e=f(["\n  z-index: 10;\n  width: 400px;\n  height: 400px;\n  border-radius: 10px;\n  overflow: hidden;\n"]);return s=function(){return e},e}function u(){var e=f(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  ",";\n"]);return u=function(){return e},e}function l(){var e=f(["\n  background-color: ",";\n"]);return l=function(){return e},e}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d=(0,n.default)("div")(u(),function(e){return(0,n.css)(l(),e.showAnimation?"blue":"rgba(1, 1, 1, 0.5);")});t.Container=d;var p=(0,n.default)("div")(s());t.Content=p;var h=(0,n.default)("div")(c());t.HeaderContainer=h;var b=(0,n.default)("div")(a());t.BodyContainer=b;var g=(0,n.default)("div")(o());t.FooterContainer=g;var m=(0,n.default)("div")(i());t.CloseContainer=m},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";r.r(t);var n=r(2),i=r.n(n),o=r(0),a=r(3),c=r.n(a),s=r(1),u=Object(s.a)(RegExp.prototype.test.bind(/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|accept|acceptCharset|accessKey|action|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria)-.*))$/i));var l,f="__EMOTION_THEMING__",d=((l={})[f]=c.a.object,l);var p=u,h=function(e){return"theme"!==e&&"innerRef"!==e},b=function(){return!0},g=function(e,t){for(var r=2,n=arguments.length;r<n;r++){var i=arguments[r],o=void 0;for(o in i)e(o)&&(t[o]=i[o])}return t};var m=function(e,t){var r=function(n,i){var o,a,c,s;void 0!==i&&(o=i.e,a=i.label,c=i.target,s=n.__emotion_forwardProp&&i.shouldForwardProp?function(e){return n.__emotion_forwardProp(e)&&i.shouldForwardProp(e)}:i.shouldForwardProp);var u=n.__emotion_real===n,l=void 0===o&&u&&n.__emotion_base||n;return"function"!=typeof s&&(s="string"==typeof l&&l.charAt(0)===l.charAt(0).toLowerCase()?p:h),function(){var p=arguments,h=u&&void 0!==n.__emotion_styles?n.__emotion_styles.slice(0):[];if(void 0!==a&&h.push("label:"+a+";"),void 0===o)if(null==p[0]||void 0===p[0].raw)h.push.apply(h,p);else{h.push(p[0][0]);for(var m=p.length,y=1;y<m;y++)h.push(p[y],p[0][y])}var v=function(r){function n(){return r.apply(this,arguments)||this}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(n,r);var i=n.prototype;return i.componentWillMount=function(){void 0!==this.context[f]&&(this.unsubscribe=this.context[f].subscribe(function(e){this.setState({theme:e})}.bind(this)))},i.componentWillUnmount=function(){void 0!==this.unsubscribe&&this.context[f].unsubscribe(this.unsubscribe)},i.render=function(){var r=this.props,n=this.state;this.mergedProps=g(b,{},r,{theme:null!==n&&n.theme||r.theme||{}});var i="",a=[];return r.className&&(i+=void 0===o?e.getRegisteredStyles(a,r.className):r.className+" "),i+=void 0===o?e.css.apply(this,h.concat(a)):o,void 0!==c&&(i+=" "+c),t.createElement(l,g(s,{},r,{className:i,ref:r.innerRef}))},n}(t.Component);return v.displayName=void 0!==a?a:"Styled("+("string"==typeof l?l:l.displayName||l.name||"Component")+")",void 0!==n.defaultProps&&(v.defaultProps=n.defaultProps),v.contextTypes=d,v.__emotion_styles=h,v.__emotion_base=l,v.__emotion_real=v,v.__emotion_forwardProp=s,Object.defineProperty(v,"toString",{enumerable:!1,value:function(){return"."+c}}),v.withComponent=function(e,t){return r(e,void 0!==t?g(b,{},i,t):i).apply(void 0,h)},v}};return r};r.d(t,"flush",function(){return o.flush}),r.d(t,"hydrate",function(){return o.hydrate}),r.d(t,"cx",function(){return o.cx}),r.d(t,"merge",function(){return o.merge}),r.d(t,"getRegisteredStyles",function(){return o.getRegisteredStyles}),r.d(t,"injectGlobal",function(){return o.injectGlobal}),r.d(t,"keyframes",function(){return o.keyframes}),r.d(t,"css",function(){return o.css}),r.d(t,"sheet",function(){return o.sheet}),r.d(t,"caches",function(){return o.caches});var y=m(o,i.a);t.default=y}])});