(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{n:()=>ht,q:()=>dt,F8:()=>mt});class e{constructor(t,e,n=[],r=[]){this.name=t,this.id=e,this.list=n,this.date=r}}const n=document.querySelector("#todoadd");function r(t,e,n){const r=document.createElement("div");document.querySelector(".ls-todos").prepend(r),r.setAttribute("class","list-styling"),r.innerHTML="",r.innerHTML=`<div class ="taskName">${t}</div> <span class="dueDate"> ${e} </span>\n  <span class="priorityLevel">${n}\n  </span>\n    <div id="icons">\n    <button class = "ex"><i class="fas fa-trash"></i></button> \n     <button class ="edit"><i class="fas fa-edit"></i></button>\n     </div>`,dt.forEach((r=>{if(r.name.includes(ht.textContent)){let a={task:`${t}`,date:`${e}`,priority:`${n}`};r.list.push(a),r.date.push(e),localStorage.setItem("projects",JSON.stringify(dt)),document.querySelector(".fas").addEventListener("click",(function(){c(this)}))}}))}const a=()=>{let t=document.querySelector(".edit"),e=document.getElementById("myModal");document.getElementsByClassName("close")[0],t.onclick=function(){let t,n,a,i,o=this.parentElement.parentElement.childNodes[0],s=this.parentElement.parentElement;e.style.display="block";let u=document.querySelector(".modal-content");t=document.createElement("input"),t.setAttribute("class","task-modal"),t.value=this.parentElement.parentElement.childNodes[0].textContent;let c=document.createElement("div");c.innerHTML='<div class="task-label">Task</div>';let l=document.createElement("div");l.innerHTML='<div class="date-label">Date</div>';let m=document.createElement("div");m.innerHTML='<div class="prio-label">Prio</div>',n=document.createElement("input"),n.value=this.parentElement.parentElement.childNodes[2].textContent,n.setAttribute("class","date-modal"),a=document.createElement("div"),a.setAttribute("class","prio-modal"),a.innerHTML='  <select name="cars" id="prio">\n    <option value="high-priority">High</option>\n    <option value="medium-priority">Medium</option>\n    <option value="low-priority">Low</option>\n  </select>',i=document.createElement("input"),i.setAttribute("class","notes-modal"),u.innerHTML="",u.appendChild(c),u.appendChild(l),u.appendChild(m),u.appendChild(t),u.appendChild(n),u.appendChild(a);let h=document.createElement("btn");h.setAttribute("class","modal-submit"),h.innerHTML="Submit",u.appendChild(h),h.addEventListener("click",(function(){d(o.textContent,s),console.log(s);let a=document.getElementById("prio");r(t.value,n.value,a.value),e.style.display="none"}))}},i=document.querySelector(".ls-todos"),o=t=>{var e=document.getElementsByClassName("active");e.length>0&&(e[0].className=e[0].className.replace(" active","")),ht.innerHTML=t.innerHTML,t.className+=" active"},s=t=>{for(let e=0;e<dt.length;e++)dt[e].name.includes(t.textContent)&&(i.innerHTML="",dt[e].list.forEach((t=>{const e=document.createElement("div");e.innerHTML=`<div class ="taskName">${t.task}</div> \n        <span class ="dueDate">${t.date}</span>\n        <span class="priorityLevel">${t.priority} </span>   \n        <div id="icons">\n        <button class = "ex"><i class="fas fa-trash"></i></button> \n         <button class ="edit"><i class="fas fa-edit"></i></button>\n         </div>`,e.setAttribute("class","list-styling"),i.prepend(e),document.querySelector(".fa-trash").addEventListener("click",(function(){c(this)})),a(),document.querySelector(".fa-edit").addEventListener("click",(function(){console.log("e")}))})))},u=()=>{const t=document.createElement("input"),n=document.createElement("br"),r=document.createElement("button"),a=document.querySelector(".main");a.appendChild(n),a.appendChild(t),t.setAttribute("type","text"),t.setAttribute("class","bookInput"),a.appendChild(r),r.innerHTML="Submit",r.setAttribute("id","projectsubmit"),r.addEventListener("click",(function(){const n=document.createElement("div");n.setAttribute("class","projecttitles"),n.innerHTML=t.value;const u=new e(`${t.value}`,`${dt.length}`);dt.push(u),localStorage.setItem("projects",JSON.stringify(dt)),t.style.display="none",r.style.display="none",a.appendChild(n),n.addEventListener("click",(function(){o(this),console.log("here now"),i.innerHTML="",s(this)}))}))},c=t=>{for(let n=0;n<dt.length;n++)if(dt[n].name.includes(ht.textContent)){let r=t.parentElement.parentElement.parentElement.firstChild.textContent;var e=dt[n].list.map((function(t){return t.task})).indexOf(r);dt[n].list.splice(e,1),localStorage.setItem("projects",JSON.stringify(dt)),t.parentElement.parentElement.parentElement.style.display="none"}},d=(t,e)=>{for(let r=0;r<dt.length;r++)if(dt[r].name.includes(ht.textContent)){var n=dt[r].list.map((function(t){return t.task})).indexOf(t);dt[r].list.splice(n,1),localStorage.setItem("projects",JSON.stringify(dt)),e.innerHTML="",e.style.display="none"}};let l=JSON.parse(localStorage.getItem("projects"));function m(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function h(t){m(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function f(t){m(1,arguments);var e=h(t);return!isNaN(e)}var g={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function w(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var v,p={date:w({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:w({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:w({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},b={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function y(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,u=a.width?String(a.width):t.defaultWidth;r=t.values[u]||t.values[s]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function T(t){return function(e,n){var r=String(e),a=n||{},i=a.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],s=r.match(o);if(!s)return null;var u,c=s[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(c))return n}(d):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(c))return n}(d),u=t.valueCallback?t.valueCallback(u):u,{value:u=a.valueCallback?a.valueCallback(u):u,rest:r.slice(c.length)}}}const C={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof g[t]?g[t]:1===e?g[t].one:g[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:p,formatRelative:function(t,e,n,r){return b[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:y({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:y({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:y({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:y({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:y({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(v={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(v.matchPattern);if(!a)return null;var i=a[0],o=n.match(v.parsePattern);if(!o)return null;var s=v.valueCallback?v.valueCallback(o[0]):o[0];return{value:s=r.valueCallback?r.valueCallback(s):s,rest:n.slice(i.length)}}),era:T({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:T({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:T({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:T({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:T({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function M(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function x(t,e){m(2,arguments);var n=h(t).getTime(),r=M(e);return new Date(n+r)}function E(t,e){m(2,arguments);var n=M(e);return x(t,-n)}function S(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const k=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return S("yy"===e?r%100:r,e.length)},D=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):S(n+1,2)},P=function(t,e){return S(t.getUTCDate(),e.length)},U=function(t,e){return S(t.getUTCHours()%12||12,e.length)},L=function(t,e){return S(t.getUTCHours(),e.length)},q=function(t,e){return S(t.getUTCMinutes(),e.length)},N=function(t,e){return S(t.getUTCSeconds(),e.length)},O=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return S(Math.floor(r*Math.pow(10,n-3)),e.length)};var W=864e5;function Y(t){m(1,arguments);var e=1,n=h(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function H(t){m(1,arguments);var e=h(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=Y(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=Y(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function j(t){m(1,arguments);var e=H(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=Y(n);return r}var A=6048e5;function F(t,e){m(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=null==a?0:M(a),o=null==n.weekStartsOn?i:M(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=h(t),u=s.getUTCDay(),c=(u<o?7:0)+u-o;return s.setUTCDate(s.getUTCDate()-c),s.setUTCHours(0,0,0,0),s}function z(t,e){m(1,arguments);var n=h(t,e),r=n.getUTCFullYear(),a=e||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,s=null==o?1:M(o),u=null==a.firstWeekContainsDate?s:M(a.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,u),c.setUTCHours(0,0,0,0);var d=F(c,e),l=new Date(0);l.setUTCFullYear(r,0,u),l.setUTCHours(0,0,0,0);var f=F(l,e);return n.getTime()>=d.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function X(t,e){m(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:M(a),o=null==n.firstWeekContainsDate?i:M(n.firstWeekContainsDate),s=z(t,e),u=new Date(0);u.setUTCFullYear(s,0,o),u.setUTCHours(0,0,0,0);var c=F(u,e);return c}var B=6048e5;function Q(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+S(i,2)}function G(t,e){return t%60==0?(t>0?"-":"+")+S(Math.abs(t)/60,2):I(t,e)}function I(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+S(Math.floor(a/60),2)+n+S(a%60,2)}const J={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return k(t,e)},Y:function(t,e,n,r){var a=z(t,r),i=a>0?a:1-a;return"YY"===e?S(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):S(i,e.length)},R:function(t,e){return S(H(t),e.length)},u:function(t,e){return S(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return S(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return S(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return D(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return S(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){m(1,arguments);var n=h(t),r=F(n,e).getTime()-X(n,e).getTime();return Math.round(r/B)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):S(a,e.length)},I:function(t,e,n){var r=function(t){m(1,arguments);var e=h(t),n=Y(e).getTime()-j(e).getTime();return Math.round(n/A)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):S(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):P(t,e)},D:function(t,e,n){var r=function(t){m(1,arguments);var e=h(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/W)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):S(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return S(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return S(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return S(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return U(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):L(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):S(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):S(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):q(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):N(t,e)},S:function(t,e){return O(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return G(a);case"XXXX":case"XX":return I(a);case"XXXXX":case"XXX":default:return I(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return G(a);case"xxxx":case"xx":return I(a);case"xxxxx":case"xxx":default:return I(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Q(a,":");case"OOOO":default:return"GMT"+I(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Q(a,":");case"zzzz":default:return"GMT"+I(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return S(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return S((r._originalDate||t).getTime(),e.length)}};function R(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function $(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const _={p:$,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return R(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",R(a,e)).replace("{{time}}",$(i,e))}};function V(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var K=["D","DD"],Z=["YY","YYYY"];function tt(t){return-1!==K.indexOf(t)}function et(t){return-1!==Z.indexOf(t)}function nt(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var rt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,at=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,it=/^'([^]*?)'?$/,ot=/''/g,st=/[a-zA-Z]/;function ut(t){return t.match(it)[1].replace(ot,"'")}const ct=function(t,e,n){m(2,arguments);var r=String(e),a=n||{},i=a.locale||C,o=i.options&&i.options.firstWeekContainsDate,s=null==o?1:M(o),u=null==a.firstWeekContainsDate?s:M(a.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=i.options&&i.options.weekStartsOn,d=null==c?0:M(c),l=null==a.weekStartsOn?d:M(a.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var g=h(t);if(!f(g))throw new RangeError("Invalid time value");var w=V(g),v=E(g,w),p={firstWeekContainsDate:u,weekStartsOn:l,locale:i,_originalDate:g},b=r.match(at).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,_[e])(t,i.formatLong,p):t})).join("").match(rt).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return ut(n);var o=J[r];if(o)return!a.useAdditionalWeekYearTokens&&et(n)&&nt(n,e,t),!a.useAdditionalDayOfYearTokens&&tt(n)&&nt(n,e,t),o(v,n,i.localize,p);if(r.match(st))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return b}(new Date,"'Today is' eeee");let dt=[];const lt=document.querySelector("#projectadd");l&&(dt=l),document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector(".main");null!==localStorage.getItem("projects")&&dt.forEach((e=>{const n=document.createElement("div");n.setAttribute("class","projecttitles"),n.innerHTML=e.name,t.appendChild(n),console.log(e)}))})()),lt.addEventListener("click",(function(){u()})),n.addEventListener("click",(function(){r(ft.value,gt.value,wt.value)}));const mt=document.querySelectorAll(".projecttitles"),ht=document.querySelector("#project-name");mt.forEach((t=>{t.addEventListener("click",(function(){o(this),s(this),console.log(this.textContent)}))})),console.log(dt);const ft=document.querySelector(".task-input"),gt=document.querySelector("#start"),wt=document.querySelector("#priority");document.querySelector("#namebox").innerHTML=ct,console.log("3")})();