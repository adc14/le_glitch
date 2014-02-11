/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);;// Ion.Sound
// version 1.3.0 Build: 20
// https://github.com/IonDen/ion.sound
(function(c){if(!c.ionSound){var e={},f,g,k,b,d={},l=!1,m=function(h){var a,b;-1!==h.indexOf(":")?(a=h.split(":")[0],b=h.split(":")[1]):a=h;d[a]=new Audio;g=d[a].canPlayType("audio/mp3");k="probably"===g||"maybe"===g?e.path+a+".mp3":e.path+a+".ogg";c(d[a]).prop("src",k);d[a].load();d[a].preload="auto";d[a].volume=b||e.volume},n=function(b){var a,c,f,g;-1!==b.indexOf(":")?(c=b.split(":")[0],f=b.split(":")[1]):c=b;a=d[c];if("object"===typeof a&&null!==a)if(f&&(a.volume=f),!e.multiPlay&&!l)a.play(),l=!0,g=setInterval(function(){a.ended&&(clearInterval(g),l=!1)},250);else if(e.multiPlay){if(!a.ended)try{a.currentTime=0}catch(k){}a.play()}};c.ionSound=function(g){e=c.extend({sounds:["water_droplet"],path:"static/sounds/",multiPlay:!0,volume:"0.5"},g);f=e.sounds.length;if("function"===typeof Audio||"object"===typeof Audio)for(b=0;b<f;b+=1)m(e.sounds[b]);c.ionSound.play=function(a){n(a)};c.ionSound.stop=function(a){a=d[a];if("object"===typeof a&&null!==a){a.pause();try{a.currentTime=0}catch(b){}}};c.ionSound.kill=function(a){var b=d[a];if("object"===typeof b&&null!==b){try{d[a].src=""}catch(c){}d[a]=null}}};c.ionSound.destroy=function(){for(b=0;b<f;b+=1)d[e.sounds[b]]=null;f=0;c.ionSound.play=function(){};c.ionSound.stop=function(){};c.ionSound.kill=function(){}}}})(jQuery);;/**
	@license glitch.js v0.1 <http://www.github.com/sjhewitt/glitch.js>
	Released under MIT License

	Copyright (c) 2012 Simon Hewitt.
	http://www.twitter.com/sjhewitt
	*/
(function($){
	/*global html2canvas */

	var noop = function(){},
		/**
		 * Set default properties on an object
		 * @param  {Object} obj      The target object
		 * @param  {Object} defaults The default properties
		 * @return {Object}          The target obj
		 */
		defaults = function(obj, defaults) {
			for (var prop in defaults) {
				if (obj[prop] == null)
					obj[prop] = defaults[prop];
			}
			return obj;
		},
		/**
		 * Generates an integer between min and max
		 *
		 * @param  {Number} min The lower bound
		 * @param  {Number} max The upper bound
		 * @return {Number}     A random number
		 */
		getRandInt = function(min, max) {
			return (Math.floor(Math.random() * (max - min) + min));
		};


	/**
	 * Apply the glitch effect to a canvas object
	 *
	 * @param  {HTMLCanvasElement} canvas  The canvas (or HTMLImageElement) to apply the glitch to
	 * @param  {number}            amount  The amount to glitch the canvas (default: 6)
	 * @return {HTMLCanvasElement}         A canvas containing a glitched version
	 *                                     of the original canvas
	 */
	var _glitch = function(canvas, amount) {
		var
			// cache the width and height of the canvas locally
			x, y, w = canvas.width, h = canvas.height,


			// _len is an iterator limit, initially storing the number of slices
			// to create
			i, _len = amount || 6,

			// pick a random amount to offset the color channel
			channelOffset = (getRandInt(-_len*2, _len*2) * w * + getRandInt(-_len, _len)) * 4,

			// the maximum amount to offset a chunk of the image is a function of its width
			maxOffset = _len * _len / 100 * w,

			// vars for the width and height of the chunk that gets offset
			chunkWidth, chunkHeight,

			// create a temporary canvas to hold the image we're working on
			tempCanvas = document.createElement("canvas"),
			tempCtx = tempCanvas.getContext("2d"),

			srcData, targetImageData, data;

		// set the dimensions of the working canvas
		tempCanvas.width = w;
		tempCanvas.height = h;

		// draw the initial image onto the working canvas
		tempCtx.drawImage(canvas, 0, 0, w, h);

		// store the data of the original image for use when offsetting a channel
		srcData = tempCtx.getImageData(0, 0, w, h).data;

		// randomly offset slices horizontally
		for (i = 0; i < _len; i++) {

			// pick a random y coordinate to slice at
			y = getRandInt(0, h);

			// pick a random height of the slice
			chunkHeight = Math.min(getRandInt(1, h / 4), h - y);

			// pick a random horizontal distance to offset the slice
			x = getRandInt(1, maxOffset);
			chunkWidth = w - x;

			// draw the first chunk
			tempCtx.drawImage(canvas,
				0, y, chunkWidth, chunkHeight,
				x, y, chunkWidth, chunkHeight);

			// draw the rest
			tempCtx.drawImage(canvas,
				chunkWidth, y, x, chunkHeight,
				0, y, x, chunkHeight);
		}

		// get hold of the ImageData for the working image
		targetImageData = tempCtx.getImageData(0, 0, w, h);

		// and get a local reference to the rgba data array
		data = targetImageData.data;

		// Copy a random color channel from the original image into
		// the working canvas, offsetting it by a random amount
		//
		// ImageData arrays are a single dimension array that contains
		// 4 values for each pixel.
		// so, by initializing `i` to a random number between 0 and 2,
		// and incrementing by 4 on each iteration, we can replace only
		// a single channel in the image
		for(i = getRandInt(0, 3), _len = srcData.length; i < _len; i += 4) {
			data[i+channelOffset] = srcData[i];
		}

		// Make the image brighter by doubling the rgb values
		for(i = 0; i < _len; i++) {
			data[i++] *= 2;
			data[i++] *= 2;
			data[i++] *= 2;
		}

		// TODO: The above loops are the most costly in this function, iterating
		// over all the pixels in the image twice.
		// It maybe possible to optimize this by combining both loops into one,
		// and only processing every other line, as alternate lines are replaced
		// with black in the 'scan lines' block belop

		// copy the tweaked ImageData back into the context
		tempCtx.putImageData(targetImageData, 0, 0);
		// add scan lines
		// tempCtx.fillStyle = "rgba(182,182,182,0.1)";
		// for (i = 0; i < h; i += 2) {
		// 	tempCtx.fillRect (0, i, w, 1);
		// }

		return tempCanvas;
	};

	/**
	 * Creates a canvas containing a glitched version of the element
	 * @param  {DOMElement} el     The element to glitch
	 * @param  {Object}   options  An object containing the complete callback,
	 *                             the amount to glitch the image, and any
	 *                             html2canvas options
	 */
	var glitch = function(el, options) {
		options = defaults(options || {}, {
			// the amount to glitch the image
			amount: 6,
			// a callback that takes the glitched canvas as its only argument
			complete: noop
		});

		// callback for when the element has been rendered
		options.onrendered = function(canvas) {
			options.complete(_glitch(canvas, options.amount));
		};

		// render the element onto a canvas
		html2canvas(el[0] ? el : [el], options);
	};

	/**
	 * Replace el with a glitched version of it
	 * @param  {DOMElement} el  The element to glitch
	 * @param  {Object} options An object containing the options for glitch
	 */
	glitch.replace = function(el, options) {
		options = options || {};
		// store a reference to the complete callback so we can use the same
		// options for the glitch function call
		var _complete = options.complete;
		options.complete = function(canvas) {
			if($ && el instanceof $) {
				el.after(canvas).detach();
			} else {
				// no jQuery...
				el.parentNode.insertBefore(canvas, el);
				el.parentNode.removeChild(el);
			}
			if(_complete){
				_complete();
			}
		};

		glitch(el, options);
	};

	/**
	 * Replace `el` with `newEl` by overlaying a glitched version of `el`, then
	 * animating it out to reveal `newEl`
	 *
	 * The animation will take into account elements of different sizes by sliding
	 * the container to reveal it, however it looks best if the elements to be
	 * transitioned between are of similar sizes
	 *
	 * @param  {jQuery} el     The original element that will be glitched
	 * @param  {jQuery} newEl  The element to show
	 * @param  {Object} options An object containing the options for the animation
	 *                          and any options for html2canvas
	 */
	glitch.transition = function(el, newEl, options) {
		// set the default options
		options = defaults(options || {}, {
			// the amount to glitch the image
			amount: 6,
			// A callback when the animation is complete
			complete: noop,
			// The delay after rendering the glitched element until starting the transition
			delay: 300,
			// The duration of the transition effect
			duration: 500,
			// The z-index to apply to the overlay. You might need to tweak this if
			// you have things that appear above the element, or are using high
			// z-indexes in your page
			zIndex: 1000,
			// the transition effect to use. This may be "fade" or "slide"
			effect: "fade",
			// The size of the top border. Set to 0 to disable, only used in slide mode
			borderSize: 2,
			// The color of the top border, only used in slide mode
			borderColor: "green"
		});

		// add the new element to the dom so we can properly calculate its dimensions
		newEl.insertAfter(el);

		// store a reference to the complete callback so we can use the same
		// options for the glitch function call
		var _complete = options.complete,
			// get the dimensions of the elements so we can resize the targetContainer
			// to reveal all the content after the glitch transition
			origHeight = el.outerHeight(true),
			origWidth = el.outerWidth(true),
			targetHeight = newEl.outerHeight(true),
			targetWidth = newEl.outerWidth(true),
			origOverflow = newEl.css("overflow");

		// take the new element out of the dom again
		newEl.detach();

		// create a callback that will
		options.complete = function(canvas){
			// position the canvas absolutely within the container
			var $canvas = $(canvas).css("position", "absolute"),
				offset = el.offset(),
				// create a container element that contains the canvas and position it
				// over the element we're replacing
				container = $("<div>").css({
						"border-top": options.borderSize ? options.borderSize + "px solid " +
							options.borderColor : "none",
						position: "absolute",
						left: offset.left,
						top: offset.top - options.borderSize,
						width: canvas.width,
						height: canvas.height,
						overflow: "hidden",
						"z-index": options.zIndex
					})
					// add the canvas as a child to the container
					.html(canvas)
					// add the container to the dom
					.appendTo("body")
					// delay the animation a bit
					.delay(options.delay),

				targetContainer = $("<div>").css({
					width: origWidth,
					height: origHeight,
					overflow: "hidden",
					border: "none",
					"box-sizing": "border-box"
				})
					.html(newEl),

				// the default transition effect is to fade out
				animation = {
					opacity: 0
				},
				animateOptions = {
						duration: options.duration,
						complete: function(){
							// when the animation is done:
							// remove the container from the dom
							container.remove();

							// then animate the height of the new element back to its measured
							// height and width
							targetContainer.animate({
								height: targetHeight,
								width: targetWidth
							},
							{
								duration: 100,
								complete: function(){

									// take the targetContainer element out of the dom
									newEl.detach().insertAfter(targetContainer);
									targetContainer.remove();

									// call the complete callback
									_complete();

									// and clear all references
									options = $canvas = container = null;

								}
							});

						}
					};

			if(options.effect === "slide") {
				// for the slide effect, we move move the container down
				animation = {
					top: offset.top + canvas.height,
					height: 0
				};

				// and on each step of the animation, we need to offset the top so it
				// remains in the same place on the screen
				animateOptions.step = function(now, fx){
					if(fx.prop === "top") {
						$canvas.css("top", fx.start - now);
					}
				};
			}

			// apply the animation
			container.animate(animation, animateOptions);

			// replace the original element with the new one
			// we use detatch so that the event handlers on the old
			// element are retained.
			targetContainer.insertAfter(el);
			el.detach();

		};

		// create a glitched version of the start element
		glitch(el, options);
	};

	window.glitch = glitch;

	if($) {
		/**
		 * jQuery glitch.js plugin
		 *
		 * This can be called in the following ways:
		 *
		 * Replace the element with a glitched version
		 *     $("#el").glitch()
		 *
		 * Create a glitched canvas and pass it to a callback function
		 *     $("#el").glitch(function(canvas){})
		 *
		 * Transition effect
		 *     $("#el").glitch('transition', $("#newEl"), {})
		 */
		$.fn.glitch = function(method) {
			var args = Array.prototype.splice.call(arguments, 1);
			method = method || 'replace';
			return this.each(function(){
				if(method instanceof $) {
					glitch.transition($(this), method, args[0]);
				} else if(typeof method == 'function') {
					// just a callback passed in
					glitch($(this), {
						complete: method
					});
				} else if(typeof method == 'object') {
					// an options object passed in
					glitch($(this), method);
				} else if(glitch.hasOwnProperty(method)) {
					// explicitly call a method
					glitch[method].apply(null, [$(this)].concat(args));
				} else {
					$.error('Method ' +  method + ' does not exist on jQuery.glitch');
				}
			});
		};
	}
})(window.jQuery);;/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms3d-csstransitions-audio-webgl-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.webgl=function(){return!!a.WebGLRenderingContext},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.csstransitions=function(){return F("transition")},q.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;// three.js - http://github.com/mrdoob/three.js
'use strict';var THREE = window.THREE ={REVISION:"65"};self.console=self.console||{info:function(){},log:function(){},debug:function(){},warn:function(){},error:function(){}};String.prototype.trim=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")};THREE.extend=function(a,b){if(Object.keys)for(var c=Object.keys(b),d=0,e=c.length;d<e;d++){var f=c[d];Object.defineProperty(a,f,Object.getOwnPropertyDescriptor(b,f))}else for(f in c={}.hasOwnProperty,b)c.call(b,f)&&(a[f]=b[f]);return a};
(function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!self.requestAnimationFrame;++c)self.requestAnimationFrame=self[b[c]+"RequestAnimationFrame"],self.cancelAnimationFrame=self[b[c]+"CancelAnimationFrame"]||self[b[c]+"CancelRequestAnimationFrame"];void 0===self.requestAnimationFrame&&void 0!==self.setTimeout&&(self.requestAnimationFrame=function(b){var c=Date.now(),f=Math.max(0,16-(c-a)),g=self.setTimeout(function(){b(c+f)},f);a=c+f;return g});void 0===self.cancelAnimationFrame&&void 0!==
self.clearTimeout&&(self.cancelAnimationFrame=function(a){self.clearTimeout(a)})})();THREE.CullFaceNone=0;THREE.CullFaceBack=1;THREE.CullFaceFront=2;THREE.CullFaceFrontBack=3;THREE.FrontFaceDirectionCW=0;THREE.FrontFaceDirectionCCW=1;THREE.BasicShadowMap=0;THREE.PCFShadowMap=1;THREE.PCFSoftShadowMap=2;THREE.FrontSide=0;THREE.BackSide=1;THREE.DoubleSide=2;THREE.NoShading=0;THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NoBlending=0;
THREE.NormalBlending=1;THREE.AdditiveBlending=2;THREE.SubtractiveBlending=3;THREE.MultiplyBlending=4;THREE.CustomBlending=5;THREE.AddEquation=100;THREE.SubtractEquation=101;THREE.ReverseSubtractEquation=102;THREE.ZeroFactor=200;THREE.OneFactor=201;THREE.SrcColorFactor=202;THREE.OneMinusSrcColorFactor=203;THREE.SrcAlphaFactor=204;THREE.OneMinusSrcAlphaFactor=205;THREE.DstAlphaFactor=206;THREE.OneMinusDstAlphaFactor=207;THREE.DstColorFactor=208;THREE.OneMinusDstColorFactor=209;
THREE.SrcAlphaSaturateFactor=210;THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.AddOperation=2;THREE.UVMapping=function(){};THREE.CubeReflectionMapping=function(){};THREE.CubeRefractionMapping=function(){};THREE.SphericalReflectionMapping=function(){};THREE.SphericalRefractionMapping=function(){};THREE.RepeatWrapping=1E3;THREE.ClampToEdgeWrapping=1001;THREE.MirroredRepeatWrapping=1002;THREE.NearestFilter=1003;THREE.NearestMipMapNearestFilter=1004;THREE.NearestMipMapLinearFilter=1005;
THREE.LinearFilter=1006;THREE.LinearMipMapNearestFilter=1007;THREE.LinearMipMapLinearFilter=1008;THREE.UnsignedByteType=1009;THREE.ByteType=1010;THREE.ShortType=1011;THREE.UnsignedShortType=1012;THREE.IntType=1013;THREE.UnsignedIntType=1014;THREE.FloatType=1015;THREE.UnsignedShort4444Type=1016;THREE.UnsignedShort5551Type=1017;THREE.UnsignedShort565Type=1018;THREE.AlphaFormat=1019;THREE.RGBFormat=1020;THREE.RGBAFormat=1021;THREE.LuminanceFormat=1022;THREE.LuminanceAlphaFormat=1023;
THREE.RGB_S3TC_DXT1_Format=2001;THREE.RGBA_S3TC_DXT1_Format=2002;THREE.RGBA_S3TC_DXT3_Format=2003;THREE.RGBA_S3TC_DXT5_Format=2004;THREE.Color=function(a){void 0!==a&&this.set(a);return this};
THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,set:function(a){a instanceof THREE.Color?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(a,b,c){if(0===b)this.r=this.g=this.b=c;else{var d=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*
c:0.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a},b=0.5>=c?c*(1+b):c+b-c*b,c=2*c-b;this.r=d(c,b,a+1/3);this.g=d(c,b,a);this.b=d(c,b,a-1/3)}return this},setStyle:function(a){if(/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(a))return a=/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(a),this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,this;if(/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(a))return a=/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(a),this.r=
Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,this;if(/^\#([0-9a-f]{6})$/i.test(a))return a=/^\#([0-9a-f]{6})$/i.exec(a),this.setHex(parseInt(a[1],16)),this;if(/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a))return a=/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a),this.setHex(parseInt(a[1]+a[1]+a[2]+a[2]+a[3]+a[3],16)),this;if(/^(\w+)$/i.test(a))return this.setHex(THREE.ColorKeywords[a]),this},copy:function(a){this.r=a.r;this.g=
a.g;this.b=a.b;return this},copyGammaToLinear:function(a){this.r=a.r*a.r;this.g=a.g*a.g;this.b=a.b*a.b;return this},copyLinearToGamma:function(a){this.r=Math.sqrt(a.r);this.g=Math.sqrt(a.g);this.b=Math.sqrt(a.b);return this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<
8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){var a=a||{h:0,s:0,l:0},b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var i=e-f,f=0.5>=h?i/(e+f):i/(2-e-f);switch(e){case b:g=(c-d)/i+(c<d?6:0);break;case c:g=(d-b)/i+2;break;case d:g=(b-c)/i+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,
b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;
this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a){this.r=a[0];this.g=a[1];this.b=a[2];return this},toArray:function(){return[this.r,this.g,this.b]},clone:function(){return(new THREE.Color).setRGB(this.r,this.g,this.b)}};
THREE.ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,
darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,
grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,
lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,
palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,
tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};THREE.Quaternion=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1};
THREE.Quaternion.prototype={constructor:THREE.Quaternion,_x:0,_y:0,_z:0,_w:0,_euler:void 0,_updateEuler:function(){void 0!==this._euler&&this._euler.setFromQuaternion(this,void 0,!1)},get x(){return this._x},set x(a){this._x=a;this._updateEuler()},get y(){return this._y},set y(a){this._y=a;this._updateEuler()},get z(){return this._z},set z(a){this._z=a;this._updateEuler()},get w(){return this._w},set w(a){this._w=a;this._updateEuler()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;
this._updateEuler();return this},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._w=a._w;this._updateEuler();return this},setFromEuler:function(a,b){if(!1===a instanceof THREE.Euler)throw Error("ERROR: Quaternion's .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),f=Math.sin(a._x/2),g=Math.sin(a._y/2),h=Math.sin(a._z/2);"XYZ"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*
e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"YXZ"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"ZXY"===a.order?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"ZYX"===a.order?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"YZX"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e-f*g*h):"XZY"===a.order&&(this._x=f*d*e-c*g*h,this._y=c*g*e-f*d*h,this._z=
c*d*h+f*g*e,this._w=c*d*e+f*g*h);!1!==b&&this._updateEuler();return this},setFromAxisAngle:function(a,b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this._updateEuler();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0],a=b[4],d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],i=b[6],b=b[10],k=c+f+b;0<k?(c=0.5/Math.sqrt(k+1),this._w=0.25/c,this._x=(i-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(i-g)/c,this._x=0.25*c,
this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=0.25*c,this._z=(g+i)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+i)/c,this._z=0.25*c);this._updateEuler();return this},inverse:function(){this.conjugate().normalize();return this},conjugate:function(){this._x*=-1;this._y*=-1;this._z*=-1;this._updateEuler();return this},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*
this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);return this},multiply:function(a,b){return void 0!==b?(console.warn("DEPRECATED: Quaternion's .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,f=
a._w,g=b._x,h=b._y,i=b._z,k=b._w;this._x=c*k+f*g+d*i-e*h;this._y=d*k+f*h+e*g-c*i;this._z=e*k+f*i+c*h-d*g;this._w=f*k-c*g-d*h-e*i;this._updateEuler();return this},multiplyVector3:function(a){console.warn("DEPRECATED: Quaternion's .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");return a.applyQuaternion(this)},slerp:function(a,b){var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=
-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;var h=Math.acos(g),i=Math.sqrt(1-g*g);if(0.001>Math.abs(i))return this._w=0.5*(f+this._w),this._x=0.5*(c+this._x),this._y=0.5*(d+this._y),this._z=0.5*(e+this._z),this;g=Math.sin((1-b)*h)/i;h=Math.sin(b*h)/i;this._w=f*g+this._w*h;this._x=c*g+this._x*h;this._y=d*g+this._y*h;this._z=e*g+this._z*h;this._updateEuler();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},
fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];this._w=a[3];this._updateEuler();return this},toArray:function(){return[this._x,this._y,this._z,this._w]},clone:function(){return new THREE.Quaternion(this._x,this._y,this._z,this._w)}};THREE.Quaternion.slerp=function(a,b,c,d){return c.copy(a).slerp(b,d)};THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0};
THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(a,b){this.x=a;this.y=b;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,
b){if(void 0!==b)return console.warn("DEPRECATED: Vector2's .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},sub:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector2's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=
a.y;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a):this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);
return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,a=this.y-a.y;return b*b+a*a},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/
b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a){this.x=a[0];this.y=a[1];return this},toArray:function(){return[this.x,this.y]},clone:function(){return new THREE.Vector2(this.x,this.y)}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};
THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+
a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector3's .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},sub:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector3's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector3's .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},multiplyVectors:function(a,b){this.x=a.x*
b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z,a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this},applyProjection:function(a){var b=this.x,c=this.y,d=this.z,a=a.elements,e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);
this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z,a=a.w,h=a*b+f*d-g*c,i=a*c+g*b-e*d,k=a*d+e*c-f*b,b=-e*b-f*c-g*d;this.x=h*a+b*-e+i*-g-k*-f;this.y=i*a+b*-f+k*-e-h*-g;this.z=k*a+b*-g+h*-f-i*-e;return this},transformDirection:function(a){var b=this.x,c=this.y,d=this.z,a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*
b+a[6]*c+a[10]*d;this.normalize();return this},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a):this.z=this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<
a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},
setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},cross:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector3's .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=e*a.x-c*a.z;this.z=c*a.y-d*a.x;return this},crossVectors:function(a,b){var c=
a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;this.x=d*h-e*g;this.y=e*f-c*h;this.z=c*g-d*f;return this},angleTo:function(a){a=this.dot(a)/(this.length()*a.length());return Math.acos(THREE.Math.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y,a=this.z-a.z;return b*b+c*c+a*a},setEulerFromRotationMatrix:function(){console.error("REMOVED: Vector3's setEulerFromRotationMatrix has been removed in favor of Euler.setFromRotationMatrix(), please update your code.")},
setEulerFromQuaternion:function(){console.error("REMOVED: Vector3's setEulerFromQuaternion: has been removed in favor of Euler.setFromQuaternion(), please update your code.")},getPositionFromMatrix:function(a){console.warn("DEPRECATED: Vector3's .getPositionFromMatrix() has been renamed to .setFromMatrixPosition(). Please update your code.");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){console.warn("DEPRECATED: Vector3's .getScaleFromMatrix() has been renamed to .setFromMatrixScale(). Please update your code.");
return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,b){console.warn("DEPRECATED: Vector3's .getColumnFromMatrix() has been renamed to .setFromMatrixColumn(). Please update your code.");return this.setFromMatrixColumn(a,b)},setFromMatrixPosition:function(a){this.x=a.elements[12];this.y=a.elements[13];this.z=a.elements[14];return this},setFromMatrixScale:function(a){var b=this.set(a.elements[0],a.elements[1],a.elements[2]).length(),c=this.set(a.elements[4],a.elements[5],a.elements[6]).length(),
a=this.set(a.elements[8],a.elements[9],a.elements[10]).length();this.x=b;this.y=c;this.z=a;return this},setFromMatrixColumn:function(a,b){var c=4*a,d=b.elements;this.x=d[c];this.y=d[c+1];this.z=d[c+2];return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a){this.x=a[0];this.y=a[1];this.z=a[2];return this},toArray:function(){return[this.x,this.y,this.z]},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)}};
THREE.extend(THREE.Vector3.prototype,{applyEuler:function(){var a=new THREE.Quaternion;return function(b){!1===b instanceof THREE.Euler&&console.error("ERROR: Vector3's .applyEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");this.applyQuaternion(a.setFromEuler(b));return this}}(),applyAxisAngle:function(){var a=new THREE.Quaternion;return function(b,c){this.applyQuaternion(a.setFromAxisAngle(b,c));return this}}(),projectOnVector:function(){var a=new THREE.Vector3;
return function(b){a.copy(b).normalize();b=this.dot(a);return this.copy(a).multiplyScalar(b)}}(),projectOnPlane:function(){var a=new THREE.Vector3;return function(b){a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a=new THREE.Vector3;return function(b){a.copy(this).projectOnVector(b).multiplyScalar(2);return this.subVectors(a,this)}}()});THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector4's .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},
addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},sub:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector4's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},
applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w,a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a):(this.z=this.y=this.x=0,this.w=1);return this},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,
this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){var b,c,d,a=a.elements,e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],i=a[9];c=a[2];b=a[6];var k=a[10];if(0.01>Math.abs(d-g)&&0.01>Math.abs(f-c)&&0.01>Math.abs(i-b)){if(0.1>Math.abs(d+g)&&0.1>Math.abs(f+c)&&0.1>Math.abs(i+b)&&0.1>Math.abs(e+h+k-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;k=(k+1)/2;d=(d+g)/4;f=(f+c)/4;i=(i+b)/4;e>h&&e>k?0.01>e?(b=0,d=c=0.707106781):(b=Math.sqrt(e),c=d/b,d=f/b):h>k?0.01>h?
(b=0.707106781,c=0,d=0.707106781):(c=Math.sqrt(h),b=d/c,d=i/c):0.01>k?(c=b=0.707106781,d=0):(d=Math.sqrt(k),b=f/d,c=i/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-i)*(b-i)+(f-c)*(f-c)+(g-d)*(g-d));0.001>Math.abs(a)&&(a=1);this.x=(b-i)/a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+k-1)/2);return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);this.w>a.w&&(this.w=a.w);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=
a.y);this.z<a.z&&(this.z=a.z);this.w<a.w&&(this.w=a.w);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);this.w<a.w?this.w=a.w:this.w>b.w&&(this.w=b.w);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*
this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&
a.w===this.w},fromArray:function(a){this.x=a[0];this.y=a[1];this.z=a[2];this.w=a[3];return this},toArray:function(){return[this.x,this.y,this.z,this.w]},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,this.w)}};THREE.Euler=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||THREE.Euler.DefaultOrder};THREE.Euler.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");THREE.Euler.DefaultOrder="XYZ";
THREE.Euler.prototype={constructor:THREE.Euler,_x:0,_y:0,_z:0,_order:THREE.Euler.DefaultOrder,_quaternion:void 0,_updateQuaternion:function(){void 0!==this._quaternion&&this._quaternion.setFromEuler(this,!1)},get x(){return this._x},set x(a){this._x=a;this._updateQuaternion()},get y(){return this._y},set y(a){this._y=a;this._updateQuaternion()},get z(){return this._z},set z(a){this._z=a;this._updateQuaternion()},get order(){return this._order},set order(a){this._order=a;this._updateQuaternion()},
set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this._updateQuaternion();return this},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this._updateQuaternion();return this},setFromRotationMatrix:function(a,b){function c(a){return Math.min(Math.max(a,-1),1)}var d=a.elements,e=d[0],f=d[4],g=d[8],h=d[1],i=d[5],k=d[9],l=d[2],n=d[6],d=d[10],b=b||this._order;"XYZ"===b?(this._y=Math.asin(c(g)),0.99999>Math.abs(g)?(this._x=Math.atan2(-k,d),this._z=
Math.atan2(-f,e)):(this._x=Math.atan2(n,i),this._z=0)):"YXZ"===b?(this._x=Math.asin(-c(k)),0.99999>Math.abs(k)?(this._y=Math.atan2(g,d),this._z=Math.atan2(h,i)):(this._y=Math.atan2(-l,e),this._z=0)):"ZXY"===b?(this._x=Math.asin(c(n)),0.99999>Math.abs(n)?(this._y=Math.atan2(-l,d),this._z=Math.atan2(-f,i)):(this._y=0,this._z=Math.atan2(h,e))):"ZYX"===b?(this._y=Math.asin(-c(l)),0.99999>Math.abs(l)?(this._x=Math.atan2(n,d),this._z=Math.atan2(h,e)):(this._x=0,this._z=Math.atan2(-f,i))):"YZX"===b?(this._z=
Math.asin(c(h)),0.99999>Math.abs(h)?(this._x=Math.atan2(-k,i),this._y=Math.atan2(-l,e)):(this._x=0,this._y=Math.atan2(g,d))):"XZY"===b?(this._z=Math.asin(-c(f)),0.99999>Math.abs(f)?(this._x=Math.atan2(n,i),this._y=Math.atan2(g,e)):(this._x=Math.atan2(-k,d),this._y=0)):console.warn("WARNING: Euler.setFromRotationMatrix() given unsupported order: "+b);this._order=b;this._updateQuaternion();return this},setFromQuaternion:function(a,b,c){function d(a){return Math.min(Math.max(a,-1),1)}var e=a.x*a.x,f=
a.y*a.y,g=a.z*a.z,h=a.w*a.w,b=b||this._order;"XYZ"===b?(this._x=Math.atan2(2*(a.x*a.w-a.y*a.z),h-e-f+g),this._y=Math.asin(d(2*(a.x*a.z+a.y*a.w))),this._z=Math.atan2(2*(a.z*a.w-a.x*a.y),h+e-f-g)):"YXZ"===b?(this._x=Math.asin(d(2*(a.x*a.w-a.y*a.z))),this._y=Math.atan2(2*(a.x*a.z+a.y*a.w),h-e-f+g),this._z=Math.atan2(2*(a.x*a.y+a.z*a.w),h-e+f-g)):"ZXY"===b?(this._x=Math.asin(d(2*(a.x*a.w+a.y*a.z))),this._y=Math.atan2(2*(a.y*a.w-a.z*a.x),h-e-f+g),this._z=Math.atan2(2*(a.z*a.w-a.x*a.y),h-e+f-g)):"ZYX"===
b?(this._x=Math.atan2(2*(a.x*a.w+a.z*a.y),h-e-f+g),this._y=Math.asin(d(2*(a.y*a.w-a.x*a.z))),this._z=Math.atan2(2*(a.x*a.y+a.z*a.w),h+e-f-g)):"YZX"===b?(this._x=Math.atan2(2*(a.x*a.w-a.z*a.y),h-e+f-g),this._y=Math.atan2(2*(a.y*a.w-a.x*a.z),h+e-f-g),this._z=Math.asin(d(2*(a.x*a.y+a.z*a.w)))):"XZY"===b?(this._x=Math.atan2(2*(a.x*a.w+a.y*a.z),h-e+f-g),this._y=Math.atan2(2*(a.x*a.z+a.y*a.w),h+e-f-g),this._z=Math.asin(d(2*(a.z*a.w-a.x*a.y)))):console.warn("WARNING: Euler.setFromQuaternion() given unsupported order: "+
b);this._order=b;!1!==c&&this._updateQuaternion();return this},reorder:function(){var a=new THREE.Quaternion;return function(b){a.setFromEuler(this);this.setFromQuaternion(a,b)}}(),fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this._updateQuaternion();return this},toArray:function(){return[this._x,this._y,this._z,this._order]},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},clone:function(){return new THREE.Euler(this._x,
this._y,this._z,this._order)}};THREE.Line3=function(a,b){this.start=void 0!==a?a:new THREE.Vector3;this.end=void 0!==b?b:new THREE.Vector3};
THREE.Line3.prototype={constructor:THREE.Line3,set:function(a,b){this.start.copy(a);this.end.copy(b);return this},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},center:function(a){return(a||new THREE.Vector3).addVectors(this.start,this.end).multiplyScalar(0.5)},delta:function(a){return(a||new THREE.Vector3).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,
b){var c=b||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=THREE.Math.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);
this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)},clone:function(){return(new THREE.Line3).copy(this)}};THREE.Box2=function(a,b){this.min=void 0!==a?a:new THREE.Vector2(Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector2(-Infinity,-Infinity)};
THREE.Box2.prototype={constructor:THREE.Box2,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){if(0<a.length){var b=a[0];this.min.copy(b);this.max.copy(b);for(var c=1,d=a.length;c<d;c++)b=a[c],b.x<this.min.x?this.min.x=b.x:b.x>this.max.x&&(this.max.x=b.x),b.y<this.min.y?this.min.y=b.y:b.y>this.max.y&&(this.max.y=b.y)}else this.makeEmpty();return this},setFromCenterAndSize:function(){var a=new THREE.Vector2;return function(b,c){var d=a.copy(c).multiplyScalar(0.5);
this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},center:function(a){return(a||new THREE.Vector2).addVectors(this.min,this.max).multiplyScalar(0.5)},size:function(a){return(a||new THREE.Vector2).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);
this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector2).set((a.x-this.min.x)/(this.max.x-this.min.x),
(a.y-this.min.y)/(this.max.y-this.min.y))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector2).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector2;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);
return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)},clone:function(){return(new THREE.Box2).copy(this)}};THREE.Box3=function(a,b){this.min=void 0!==a?a:new THREE.Vector3(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector3(-Infinity,-Infinity,-Infinity)};
THREE.Box3.prototype={constructor:THREE.Box3,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},addPoint:function(a){a.x<this.min.x?this.min.x=a.x:a.x>this.max.x&&(this.max.x=a.x);a.y<this.min.y?this.min.y=a.y:a.y>this.max.y&&(this.max.y=a.y);a.z<this.min.z?this.min.z=a.z:a.z>this.max.z&&(this.max.z=a.z)},setFromPoints:function(a){if(0<a.length){var b=a[0];this.min.copy(b);this.max.copy(b);for(var b=1,c=a.length;b<c;b++)this.addPoint(a[b])}else this.makeEmpty();return this},setFromCenterAndSize:function(){var a=
new THREE.Vector3;return function(b,c){var d=a.copy(c).multiplyScalar(0.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(){var a=new THREE.Vector3;return function(b){var c=this;b.updateMatrixWorld(!0);this.makeEmpty();b.traverse(function(b){if(void 0!==b.geometry&&void 0!==b.geometry.vertices)for(var e=b.geometry.vertices,f=0,g=e.length;f<g;f++)a.copy(e[f]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a)});return this}}(),copy:function(a){this.min.copy(a.min);
this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},center:function(a){return(a||new THREE.Vector3).addVectors(this.min,this.max).multiplyScalar(0.5)},size:function(a){return(a||new THREE.Vector3).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);
this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector3).set((a.x-this.min.x)/(this.max.x-
this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector3).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=
new THREE.Vector3;return function(b){b=b||new THREE.Sphere;b.center=this.center();b.radius=0.5*this.size(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];return function(b){a[0].set(this.min.x,this.min.y,
this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.makeEmpty();this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);
this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)},clone:function(){return(new THREE.Box3).copy(this)}};THREE.Matrix3=function(a,b,c,d,e,f,g,h,i){this.elements=new Float32Array(9);this.set(void 0!==a?a:1,b||0,c||0,d||0,void 0!==e?e:1,f||0,g||0,h||0,void 0!==i?i:1)};
THREE.Matrix3.prototype={constructor:THREE.Matrix3,set:function(a,b,c,d,e,f,g,h,i){var k=this.elements;k[0]=a;k[3]=b;k[6]=c;k[1]=d;k[4]=e;k[7]=f;k[2]=g;k[5]=h;k[8]=i;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},copy:function(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]);return this},multiplyVector3:function(a){console.warn("DEPRECATED: Matrix3's .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},
multiplyVector3Array:function(){var a=new THREE.Vector3;return function(b){for(var c=0,d=b.length;c<d;c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyMatrix3(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],i=a[7],a=a[8];return b*f*a-b*g*i-c*e*a+c*g*h+d*e*i-d*f*h},getInverse:function(a,
b){var c=a.elements,d=this.elements;d[0]=c[10]*c[5]-c[6]*c[9];d[1]=-c[10]*c[1]+c[2]*c[9];d[2]=c[6]*c[1]-c[2]*c[5];d[3]=-c[10]*c[4]+c[6]*c[8];d[4]=c[10]*c[0]-c[2]*c[8];d[5]=-c[6]*c[0]+c[2]*c[4];d[6]=c[9]*c[4]-c[5]*c[8];d[7]=-c[9]*c[0]+c[1]*c[8];d[8]=c[5]*c[0]-c[1]*c[4];c=c[0]*d[0]+c[1]*d[3]+c[2]*d[6];if(0===c){if(b)throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/
c);return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},getNormalMatrix:function(a){this.getInverse(a).transpose();return this},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],
a[6],a[7],a[8]]},clone:function(){var a=this.elements;return new THREE.Matrix3(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8])}};THREE.Matrix4=function(a,b,c,d,e,f,g,h,i,k,l,n,p,t,r,m){var q=this.elements=new Float32Array(16);q[0]=void 0!==a?a:1;q[4]=b||0;q[8]=c||0;q[12]=d||0;q[1]=e||0;q[5]=void 0!==f?f:1;q[9]=g||0;q[13]=h||0;q[2]=i||0;q[6]=k||0;q[10]=void 0!==l?l:1;q[14]=n||0;q[3]=p||0;q[7]=t||0;q[11]=r||0;q[15]=void 0!==m?m:1};
THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,e,f,g,h,i,k,l,n,p,t,r,m){var q=this.elements;q[0]=a;q[4]=b;q[8]=c;q[12]=d;q[1]=e;q[5]=f;q[9]=g;q[13]=h;q[2]=i;q[6]=k;q[10]=l;q[14]=n;q[3]=p;q[7]=t;q[11]=r;q[15]=m;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(a){this.elements.set(a.elements);return this},extractPosition:function(a){console.warn("DEPRECATED: Matrix4's .extractPosition() has been renamed to .copyPosition().");
return this.copyPosition(a)},copyPosition:function(a){var b=this.elements,a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractRotation:function(){var a=new THREE.Vector3;return function(b){var c=this.elements,b=b.elements,d=1/a.set(b[0],b[1],b[2]).length(),e=1/a.set(b[4],b[5],b[6]).length(),f=1/a.set(b[8],b[9],b[10]).length();c[0]=b[0]*d;c[1]=b[1]*d;c[2]=b[2]*d;c[4]=b[4]*e;c[5]=b[5]*e;c[6]=b[6]*e;c[8]=b[8]*f;c[9]=b[9]*f;c[10]=b[10]*f;return this}}(),makeRotationFromEuler:function(a){!1===
a instanceof THREE.Euler&&console.error("ERROR: Matrix's .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);if("XYZ"===a.order){var a=f*h,i=f*e,k=c*h,l=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=i+k*d;b[5]=a-l*d;b[9]=-c*g;b[2]=l-a*d;b[6]=k+i*d;b[10]=f*g}else"YXZ"===a.order?(a=g*h,i=g*e,k=d*h,l=d*e,b[0]=a+l*c,b[4]=k*c-i,b[8]=
f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=i*c-k,b[6]=l+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,i=g*e,k=d*h,l=d*e,b[0]=a-l*c,b[4]=-f*e,b[8]=k+i*c,b[1]=i+k*c,b[5]=f*h,b[9]=l-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,i=f*e,k=c*h,l=c*e,b[0]=g*h,b[4]=k*d-i,b[8]=a*d+l,b[1]=g*e,b[5]=l*d+a,b[9]=i*d-k,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,i=f*d,k=c*g,l=c*d,b[0]=g*h,b[4]=l-a*e,b[8]=k*e+i,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=i*e+k,b[10]=a-l*e):"XZY"===a.order&&(a=f*g,i=f*d,k=c*g,l=c*d,b[0]=
g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+l,b[5]=f*h,b[9]=i*e-k,b[2]=k*e-i,b[6]=c*h,b[10]=l*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},setRotationFromQuaternion:function(a){console.warn("DEPRECATED: Matrix4's .setRotationFromQuaternion() has been deprecated in favor of makeRotationFromQuaternion.  Please update your code.");return this.makeRotationFromQuaternion(a)},makeRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,i=e+e,a=c*g,k=c*h,c=
c*i,l=d*h,d=d*i,e=e*i,g=f*g,h=f*h,f=f*i;b[0]=1-(l+e);b[4]=k-f;b[8]=c+h;b[1]=k+f;b[5]=1-(a+e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+l);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},lookAt:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f){var g=this.elements;c.subVectors(d,e).normalize();0===c.length()&&(c.z=1);a.crossVectors(f,c).normalize();0===a.length()&&(c.x+=1E-4,a.crossVectors(f,c).normalize());b.crossVectors(c,a);g[0]=a.x;
g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==b?(console.warn("DEPRECATED: Matrix4's .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],i=c[12],k=c[1],l=c[5],n=c[9],p=c[13],t=c[2],r=c[6],m=c[10],q=c[14],u=c[3],s=c[7],v=c[11],c=c[15],
z=d[0],G=d[4],N=d[8],C=d[12],B=d[1],x=d[5],F=d[9],L=d[13],w=d[2],E=d[6],y=d[10],D=d[14],H=d[3],K=d[7],A=d[11],d=d[15];e[0]=f*z+g*B+h*w+i*H;e[4]=f*G+g*x+h*E+i*K;e[8]=f*N+g*F+h*y+i*A;e[12]=f*C+g*L+h*D+i*d;e[1]=k*z+l*B+n*w+p*H;e[5]=k*G+l*x+n*E+p*K;e[9]=k*N+l*F+n*y+p*A;e[13]=k*C+l*L+n*D+p*d;e[2]=t*z+r*B+m*w+q*H;e[6]=t*G+r*x+m*E+q*K;e[10]=t*N+r*F+m*y+q*A;e[14]=t*C+r*L+m*D+q*d;e[3]=u*z+s*B+v*w+c*H;e[7]=u*G+s*x+v*E+c*K;e[11]=u*N+s*F+v*y+c*A;e[15]=u*C+s*L+v*D+c*d;return this},multiplyToArray:function(a,b,
c){var d=this.elements;this.multiplyMatrices(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},multiplyVector3:function(a){console.warn("DEPRECATED: Matrix4's .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
return a.applyProjection(this)},multiplyVector4:function(a){console.warn("DEPRECATED: Matrix4's .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector3Array:function(){var a=new THREE.Vector3;return function(b){for(var c=0,d=b.length;c<d;c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyProjection(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),rotateAxis:function(a){console.warn("DEPRECATED: Matrix4's .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
a.transformDirection(this)},crossVector:function(a){console.warn("DEPRECATED: Matrix4's .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],i=a[13],k=a[2],l=a[6],n=a[10],p=a[14];return a[3]*(+e*h*l-d*i*l-e*g*n+c*i*n+d*g*p-c*h*p)+a[7]*(+b*h*p-b*i*n+e*f*n-d*f*p+d*i*k-e*h*k)+a[11]*(+b*i*l-b*g*p-e*f*l+c*f*p+e*g*k-c*i*k)+a[15]*(-d*g*k-b*h*l+b*g*n+d*f*l-c*f*
n+c*h*k)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},flattenToArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];a[9]=b[9];a[10]=b[10];a[11]=b[11];a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a},flattenToArrayOffset:function(a,b){var c=this.elements;
a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a},getPosition:function(){var a=new THREE.Vector3;return function(){console.warn("DEPRECATED: Matrix4's .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");var b=this.elements;return a.set(b[12],b[13],b[14])}}(),setPosition:function(a){var b=this.elements;
b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=this.elements,d=a.elements,e=d[0],f=d[4],g=d[8],h=d[12],i=d[1],k=d[5],l=d[9],n=d[13],p=d[2],t=d[6],r=d[10],m=d[14],q=d[3],u=d[7],s=d[11],d=d[15];c[0]=l*m*u-n*r*u+n*t*s-k*m*s-l*t*d+k*r*d;c[4]=h*r*u-g*m*u-h*t*s+f*m*s+g*t*d-f*r*d;c[8]=g*n*u-h*l*u+h*k*s-f*n*s-g*k*d+f*l*d;c[12]=h*l*t-g*n*t-h*k*r+f*n*r+g*k*m-f*l*m;c[1]=n*r*q-l*m*q-n*p*s+i*m*s+l*p*d-i*r*d;c[5]=g*m*q-h*r*q+h*p*s-e*m*s-g*p*d+e*r*d;c[9]=h*l*q-g*n*q-h*i*s+e*n*s+g*i*d-
e*l*d;c[13]=g*n*p-h*l*p+h*i*r-e*n*r-g*i*m+e*l*m;c[2]=k*m*q-n*t*q+n*p*u-i*m*u-k*p*d+i*t*d;c[6]=h*t*q-f*m*q-h*p*u+e*m*u+f*p*d-e*t*d;c[10]=f*n*q-h*k*q+h*i*u-e*n*u-f*i*d+e*k*d;c[14]=h*k*p-f*n*p-h*i*t+e*n*t+f*i*m-e*k*m;c[3]=l*t*q-k*r*q-l*p*u+i*r*u+k*p*s-i*t*s;c[7]=f*r*q-g*t*q+g*p*u-e*r*u-f*p*s+e*t*s;c[11]=g*k*q-f*l*q-g*i*u+e*l*u+f*i*s-e*k*s;c[15]=f*l*p-g*k*p+g*i*t-e*l*t-f*i*r+e*k*r;c=e*c[0]+i*c[4]+p*c[8]+q*c[12];if(0==c){if(b)throw Error("Matrix4.getInverse(): can't invert matrix, determinant is 0");console.warn("Matrix4.getInverse(): can't invert matrix, determinant is 0");
this.identity();return this}this.multiplyScalar(1/c);return this},translate:function(){console.warn("DEPRECATED: Matrix4's .translate() has been removed.")},rotateX:function(){console.warn("DEPRECATED: Matrix4's .rotateX() has been removed.")},rotateY:function(){console.warn("DEPRECATED: Matrix4's .rotateY() has been removed.")},rotateZ:function(){console.warn("DEPRECATED: Matrix4's .rotateZ() has been removed.")},rotateByAxis:function(){console.warn("DEPRECATED: Matrix4's .rotateByAxis() has been removed.")},
scale:function(a){var b=this.elements,c=a.x,d=a.y,a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],Math.max(a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10])))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(1,
0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,i=e*f,k=e*g;this.set(i*f+c,i*g-d*h,i*h+d*g,0,i*g+d*h,k*g+c,k*h-d*f,0,i*h-d*g,k*h+d*f,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,
0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a=new THREE.Vector3,b=new THREE.Matrix4;return function(c,d,e){var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),i=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];c.y=f[13];c.z=f[14];b.elements.set(this.elements);var c=1/g,f=1/h,k=1/i;b.elements[0]*=c;b.elements[1]*=
c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=k;b.elements[9]*=k;b.elements[10]*=k;d.setFromRotationMatrix(b);e.x=g;e.y=h;e.z=i;return this}}(),makeFrustum:function(a,b,c,d,e,f){var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(d-c);g[9]=(d+c)/(d-c);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},makePerspective:function(a,b,c,d){var a=c*Math.tan(THREE.Math.degToRad(0.5*
a)),e=-a;return this.makeFrustum(e*b,a*b,e,a,c,d)},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=b-a,i=c-d,k=f-e;g[0]=2/h;g[4]=0;g[8]=0;g[12]=-((b+a)/h);g[1]=0;g[5]=2/i;g[9]=0;g[13]=-((c+d)/i);g[2]=0;g[6]=0;g[10]=-2/k;g[14]=-((f+e)/k);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]]},clone:function(){var a=
this.elements;return new THREE.Matrix4(a[0],a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15])}};THREE.Ray=function(a,b){this.origin=void 0!==a?a:new THREE.Vector3;this.direction=void 0!==b?b:new THREE.Vector3};
THREE.Ray.prototype={constructor:THREE.Ray,set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)},recast:function(){var a=new THREE.Vector3;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,b){var c=b||new THREE.Vector3;c.subVectors(a,this.origin);
var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceTo(b);a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceTo(b)}}(),distanceSqToSegment:function(a,b,c,d){var e=a.clone().add(b).multiplyScalar(0.5),f=b.clone().sub(a).normalize(),g=0.5*a.distanceTo(b),
h=this.origin.clone().sub(e),a=-this.direction.dot(f),b=h.dot(this.direction),i=-h.dot(f),k=h.lengthSq(),l=Math.abs(1-a*a),n,p;0<=l?(h=a*i-b,n=a*b-i,p=g*l,0<=h?n>=-p?n<=p?(g=1/l,h*=g,n*=g,a=h*(h+a*n+2*b)+n*(a*h+n+2*i)+k):(n=g,h=Math.max(0,-(a*n+b)),a=-h*h+n*(n+2*i)+k):(n=-g,h=Math.max(0,-(a*n+b)),a=-h*h+n*(n+2*i)+k):n<=-p?(h=Math.max(0,-(-a*g+b)),n=0<h?-g:Math.min(Math.max(-g,-i),g),a=-h*h+n*(n+2*i)+k):n<=p?(h=0,n=Math.min(Math.max(-g,-i),g),a=n*(n+2*i)+k):(h=Math.max(0,-(a*g+b)),n=0<h?g:Math.min(Math.max(-g,
-i),g),a=-h*h+n*(n+2*i)+k)):(n=0<a?-g:g,h=Math.max(0,-(a*n+b)),a=-h*h+n*(n+2*i)+k);c&&c.copy(this.direction.clone().multiplyScalar(h).add(this.origin));d&&d.copy(f.clone().multiplyScalar(n).add(e));return a},isIntersectionSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},isIntersectionPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0==b)return 0==a.distanceToPoint(this.origin)?
0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},isIntersectionBox:function(){var a=new THREE.Vector3;return function(b){return null!==this.intersectBox(b,a)}}(),intersectBox:function(a,b){var c,d,e,f,g;d=1/this.direction.x;f=1/this.direction.y;g=1/this.direction.z;var h=this.origin;0<=d?(c=(a.min.x-h.x)*d,d*=a.max.x-h.x):(c=(a.max.x-h.x)*d,d*=a.min.x-h.x);0<=f?(e=(a.min.y-h.y)*f,f*=
a.max.y-h.y):(e=(a.max.y-h.y)*f,f*=a.min.y-h.y);if(c>f||e>d)return null;if(e>c||c!==c)c=e;if(f<d||d!==d)d=f;0<=g?(e=(a.min.z-h.z)*g,g*=a.max.z-h.z):(e=(a.max.z-h.z)*g,g*=a.min.z-h.z);if(c>g||e>d)return null;if(e>c||c!==c)c=e;if(g<d||d!==d)d=g;return 0>d?null:this.at(0<=c?c:d,b)},intersectTriangle:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Vector3;return function(e,f,g,h,i){b.subVectors(f,e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<
f){if(h)return null;h=1}else if(0>f)h=-1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;g=h*this.direction.dot(b.cross(a));if(0>g||e+g>f)return null;e=-h*a.dot(d);return 0>e?null:this.at(e/f,i)}}(),applyMatrix4:function(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);this.direction.sub(this.origin);this.direction.normalize();return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)},
clone:function(){return(new THREE.Ray).copy(this)}};THREE.Sphere=function(a,b){this.center=void 0!==a?a:new THREE.Vector3;this.radius=void 0!==b?b:0};
THREE.Sphere.prototype={constructor:THREE.Sphere,set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a=new THREE.Box3;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).center(d);for(var e=0,f=0,g=b.length;f<g;f++)e=Math.max(e,d.distanceToSquared(b[f]));this.radius=Math.sqrt(e);return this}}(),copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=
this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new THREE.Vector3;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));return d},getBoundingBox:function(a){a=a||new THREE.Box3;a.set(this.center,this.center);a.expandByScalar(this.radius);
return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius},clone:function(){return(new THREE.Sphere).copy(this)}};THREE.Frustum=function(a,b,c,d,e,f){this.planes=[void 0!==a?a:new THREE.Plane,void 0!==b?b:new THREE.Plane,void 0!==c?c:new THREE.Plane,void 0!==d?d:new THREE.Plane,void 0!==e?e:new THREE.Plane,void 0!==f?f:new THREE.Plane]};
THREE.Frustum.prototype={constructor:THREE.Frustum,set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements,a=c[0],d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],i=c[6],k=c[7],l=c[8],n=c[9],p=c[10],t=c[11],r=c[12],m=c[13],q=c[14],c=c[15];b[0].setComponents(f-a,k-g,t-l,c-r).normalize();b[1].setComponents(f+
a,k+g,t+l,c+r).normalize();b[2].setComponents(f+d,k+h,t+n,c+m).normalize();b[3].setComponents(f-d,k-h,t-n,c-m).normalize();b[4].setComponents(f-e,k-i,t-p,c-q).normalize();b[5].setComponents(f+e,k+i,t+p,c+q).normalize();return this},intersectsObject:function(){var a=new THREE.Sphere;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere);a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSphere:function(a){for(var b=this.planes,
c=a.center,a=-a.radius,d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var g=f.distanceToPoint(a),f=f.distanceToPoint(b);if(0>g&&0>f)return!1}return!0}}(),containsPoint:function(a){for(var b=
this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0},clone:function(){return(new THREE.Frustum).copy(this)}};THREE.Plane=function(a,b){this.normal=void 0!==a?a:new THREE.Vector3(1,0,0);this.constant=void 0!==b?b:0};
THREE.Plane.prototype={constructor:THREE.Plane,set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,
c);return this}}(),copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,
b){var c=this.distanceToPoint(a);return(b||new THREE.Vector3).copy(this.normal).multiplyScalar(c)},isIntersectionLine:function(a){var b=this.distanceToPoint(a.start),a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectLine:function(){var a=new THREE.Vector3;return function(b,c){var d=c||new THREE.Vector3,e=b.delta(a),f=this.normal.dot(e);if(0==f){if(0==this.distanceToPoint(b.start))return d.copy(b.start)}else return f=-(b.start.dot(this.normal)+this.constant)/f,0>f||1<f?void 0:d.copy(e).multiplyScalar(f).add(b.start)}}(),
coplanarPoint:function(a){return(a||new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(d,e){var f=e||c.getNormalMatrix(d),f=a.copy(this.normal).applyMatrix3(f),g=this.coplanarPoint(b);g.applyMatrix4(d);this.setFromNormalAndCoplanarPoint(f,g);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&
a.constant==this.constant},clone:function(){return(new THREE.Plane).copy(this)}};THREE.Math={PI2:2*Math.PI,generateUUID:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8==e||13==e||18==e||23==e?b[e]="-":14==e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19==e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return a<b?b:a>c?c:a},clampBottom:function(a,b){return a<b?b:a},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},smoothstep:function(a,
b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},random16:function(){return(65280*Math.random()+255*Math.random())/65535},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(0.5-Math.random())},sign:function(a){return 0>a?-1:0<a?1:0},degToRad:function(){var a=Math.PI/
180;return function(b){return b*a}}(),radToDeg:function(){var a=180/Math.PI;return function(b){return b*a}}()};THREE.Spline=function(a){function b(a,b,c,d,e,f,g){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b}this.points=a;var c=[],d={x:0,y:0,z:0},e,f,g,h,i,k,l,n,p;this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}};this.getPoint=function(a){e=(this.points.length-1)*a;f=Math.floor(e);g=e-f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>this.points.length-2?this.points.length-1:f+1;c[3]=f>this.points.length-3?this.points.length-1:
f+2;k=this.points[c[0]];l=this.points[c[1]];n=this.points[c[2]];p=this.points[c[3]];h=g*g;i=g*h;d.x=b(k.x,l.x,n.x,p.x,g,h,i);d.y=b(k.y,l.y,n.y,p.y,g,h,i);d.z=b(k.z,l.z,n.z,p.z,g,h,i);return d};this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d};this.getLength=function(a){var b,c,d,e=b=b=0,f=new THREE.Vector3,g=new THREE.Vector3,h=[],i=0;h[0]=0;a||(a=100);c=this.points.length*a;f.copy(this.points[0]);for(a=1;a<c;a++)b=
a/c,d=this.getPoint(b),g.copy(d),i+=g.distanceTo(f),f.copy(d),b*=this.points.length-1,b=Math.floor(b),b!=e&&(h[b]=i,e=b);h[h.length]=i;return{chunks:h,total:i}};this.reparametrizeByArcLength=function(a){var b,c,d,e,f,g,h=[],i=new THREE.Vector3,k=this.getLength();h.push(i.copy(this.points[0]).clone());for(b=1;b<this.points.length;b++){c=k.chunks[b]-k.chunks[b-1];g=Math.ceil(a*c/k.total);e=(b-1)/(this.points.length-1);f=b/(this.points.length-1);for(c=1;c<g-1;c++)d=e+c*(1/g)*(f-e),d=this.getPoint(d),
h.push(i.copy(d).clone());h.push(i.copy(this.points[b]).clone())}this.points=h}};THREE.Triangle=function(a,b,c){this.a=void 0!==a?a:new THREE.Vector3;this.b=void 0!==b?b:new THREE.Vector3;this.c=void 0!==c?c:new THREE.Vector3};THREE.Triangle.normal=function(){var a=new THREE.Vector3;return function(b,c,d,e){e=e||new THREE.Vector3;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}();
THREE.Triangle.barycoordFromPoint=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);var d=a.dot(a),e=a.dot(b),f=a.dot(c),i=b.dot(b),g=b.dot(c),k=d*i-e*e,h=h||new THREE.Vector3;if(0==k)return h.set(-2,-1,-1);k=1/k;i=(i*f-e*g)*k;d=(d*g-e*f)*k;return h.set(1-i-d,d,i)}}();
THREE.Triangle.containsPoint=function(){var a=new THREE.Vector3;return function(b,c,d,e){b=THREE.Triangle.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}();
THREE.Triangle.prototype={constructor:THREE.Triangle,set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},area:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,this.b);return 0.5*a.cross(b).length()}}(),midpoint:function(a){return(a||
new THREE.Vector3).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return THREE.Triangle.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new THREE.Plane).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return THREE.Triangle.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return THREE.Triangle.containsPoint(a,this.a,this.b,this.c)},equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)},
clone:function(){return(new THREE.Triangle).copy(this)}};THREE.Vertex=function(a){console.warn("THREE.Vertex has been DEPRECATED. Use THREE.Vector3 instead.");return a};THREE.UV=function(a,b){console.warn("THREE.UV has been DEPRECATED. Use THREE.Vector2 instead.");return new THREE.Vector2(a,b)};THREE.Clock=function(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1};
THREE.Clock.prototype={constructor:THREE.Clock,start:function(){this.oldTime=this.startTime=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now();this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now(),
a=0.001*(b-this.oldTime);this.oldTime=b;this.elapsedTime+=a}return a}};THREE.EventDispatcher=function(){};
THREE.EventDispatcher.prototype={constructor:THREE.EventDispatcher,apply:function(a){a.addEventListener=THREE.EventDispatcher.prototype.addEventListener;a.hasEventListener=THREE.EventDispatcher.prototype.hasEventListener;a.removeEventListener=THREE.EventDispatcher.prototype.removeEventListener;a.dispatchEvent=THREE.EventDispatcher.prototype.dispatchEvent},addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&
c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)?!0:!1},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},dispatchEvent:function(){var a=[];return function(b){if(void 0!==this._listeners){var c=this._listeners[b.type];if(void 0!==c){b.target=this;for(var d=c.length,e=0;e<d;e++)a[e]=c[e];for(e=0;e<d;e++)a[e].call(this,
b)}}}}()};(function(a){a.Raycaster=function(b,c,d,e){this.ray=new a.Ray(b,c);this.near=d||0;this.far=e||Infinity};var b=new a.Sphere,c=new a.Ray;new a.Plane;new a.Vector3;var d=new a.Vector3,e=new a.Matrix4,f=function(a,b){return a.distance-b.distance},g=new a.Vector3,h=new a.Vector3,i=new a.Vector3,k=function(f,l,t){if(f instanceof a.Sprite){d.setFromMatrixPosition(f.matrixWorld);var r=l.ray.distanceToPoint(d);if(r>f.scale.x)return t;t.push({distance:r,point:f.position,face:null,object:f})}else if(f instanceof
a.LOD)d.setFromMatrixPosition(f.matrixWorld),r=l.ray.origin.distanceTo(d),k(f.getObjectForDistance(r),l,t);else if(f instanceof a.Mesh){var m=f.geometry;null===m.boundingSphere&&m.computeBoundingSphere();b.copy(m.boundingSphere);b.applyMatrix4(f.matrixWorld);if(!1===l.ray.isIntersectionSphere(b))return t;e.getInverse(f.matrixWorld);c.copy(l.ray).applyMatrix4(e);if(null!==m.boundingBox&&!1===c.isIntersectionBox(m.boundingBox))return t;if(m instanceof a.BufferGeometry){var q=f.material;if(void 0===
q||!1===m.dynamic)return t;var u,s,v=l.precision;if(void 0!==m.attributes.index)for(var z=m.offsets,G=m.attributes.index.array,N=m.attributes.position.array,C=m.offsets.length,B=m.attributes.index.array.length/3,B=0;B<C;++B)for(var r=z[B].start,x=z[B].index,m=r,F=r+z[B].count;m<F;m+=3)r=x+G[m],u=x+G[m+1],s=x+G[m+2],g.set(N[3*r],N[3*r+1],N[3*r+2]),h.set(N[3*u],N[3*u+1],N[3*u+2]),i.set(N[3*s],N[3*s+1],N[3*s+2]),u=q.side===a.BackSide?c.intersectTriangle(i,h,g,!0):c.intersectTriangle(g,h,i,q.side!==a.DoubleSide),
null!==u&&(u.applyMatrix4(f.matrixWorld),r=l.ray.origin.distanceTo(u),r<v||(r<l.near||r>l.far)||t.push({distance:r,point:u,face:null,faceIndex:null,object:f}));else{N=m.attributes.position.array;B=m.attributes.position.array.length;for(m=0;m<B;m+=3)r=m,u=m+1,s=m+2,g.set(N[3*r],N[3*r+1],N[3*r+2]),h.set(N[3*u],N[3*u+1],N[3*u+2]),i.set(N[3*s],N[3*s+1],N[3*s+2]),u=q.side===a.BackSide?c.intersectTriangle(i,h,g,!0):c.intersectTriangle(g,h,i,q.side!==a.DoubleSide),null!==u&&(u.applyMatrix4(f.matrixWorld),
r=l.ray.origin.distanceTo(u),r<v||(r<l.near||r>l.far)||t.push({distance:r,point:u,face:null,faceIndex:null,object:f}))}}else if(m instanceof a.Geometry){G=f.material instanceof a.MeshFaceMaterial;N=!0===G?f.material.materials:null;v=l.precision;z=m.vertices;C=0;for(B=m.faces.length;C<B;C++)if(x=m.faces[C],q=!0===G?N[x.materialIndex]:f.material,void 0!==q){r=z[x.a];u=z[x.b];s=z[x.c];if(!0===q.morphTargets){var F=m.morphTargets,L=f.morphTargetInfluences;g.set(0,0,0);h.set(0,0,0);i.set(0,0,0);for(var w=
0,E=F.length;w<E;w++){var y=L[w];if(0!==y){var D=F[w].vertices;g.x+=(D[x.a].x-r.x)*y;g.y+=(D[x.a].y-r.y)*y;g.z+=(D[x.a].z-r.z)*y;h.x+=(D[x.b].x-u.x)*y;h.y+=(D[x.b].y-u.y)*y;h.z+=(D[x.b].z-u.z)*y;i.x+=(D[x.c].x-s.x)*y;i.y+=(D[x.c].y-s.y)*y;i.z+=(D[x.c].z-s.z)*y}}g.add(r);h.add(u);i.add(s);r=g;u=h;s=i}u=q.side===a.BackSide?c.intersectTriangle(s,u,r,!0):c.intersectTriangle(r,u,s,q.side!==a.DoubleSide);null!==u&&(u.applyMatrix4(f.matrixWorld),r=l.ray.origin.distanceTo(u),r<v||(r<l.near||r>l.far)||t.push({distance:r,
point:u,face:x,faceIndex:C,object:f}))}}}else if(f instanceof a.Line){v=l.linePrecision;q=v*v;m=f.geometry;null===m.boundingSphere&&m.computeBoundingSphere();b.copy(m.boundingSphere);b.applyMatrix4(f.matrixWorld);if(!1===l.ray.isIntersectionSphere(b))return t;e.getInverse(f.matrixWorld);c.copy(l.ray).applyMatrix4(e);if(m instanceof a.Geometry){z=m.vertices;v=z.length;u=new a.Vector3;s=new a.Vector3;B=f.type===a.LineStrip?1:2;for(m=0;m<v-1;m+=B)c.distanceSqToSegment(z[m],z[m+1],s,u)>q||(r=c.origin.distanceTo(s),
r<l.near||r>l.far||t.push({distance:r,point:u.clone().applyMatrix4(f.matrixWorld),face:null,faceIndex:null,object:f}))}}},l=function(a,b,c){for(var a=a.getDescendants(),d=0,e=a.length;d<e;d++)k(a[d],b,c)};a.Raycaster.prototype.precision=1E-4;a.Raycaster.prototype.linePrecision=1;a.Raycaster.prototype.set=function(a,b){this.ray.set(a,b)};a.Raycaster.prototype.intersectObject=function(a,b){var c=[];!0===b&&l(a,this,c);k(a,this,c);c.sort(f);return c};a.Raycaster.prototype.intersectObjects=function(a,
b){for(var c=[],d=0,e=a.length;d<e;d++)k(a[d],this,c),!0===b&&l(a[d],this,c);c.sort(f);return c}})(THREE);THREE.Object3D=function(){this.id=THREE.Object3DIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.parent=void 0;this.children=[];this.up=new THREE.Vector3(0,1,0);this.position=new THREE.Vector3;this._rotation=new THREE.Euler;this._quaternion=new THREE.Quaternion;this.scale=new THREE.Vector3(1,1,1);this._rotation._quaternion=this.quaternion;this._quaternion._euler=this.rotation;this.renderDepth=null;this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;
this.visible=this.matrixWorldNeedsUpdate=this.matrixAutoUpdate=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.userData={}};
THREE.Object3D.prototype={constructor:THREE.Object3D,get rotation(){return this._rotation},set rotation(a){this._rotation=a;this._rotation._quaternion=this._quaternion;this._quaternion._euler=this._rotation;this._rotation._updateQuaternion()},get quaternion(){return this._quaternion},set quaternion(a){this._quaternion=a;this._quaternion._euler=this._rotation;this._rotation._quaternion=this._quaternion;this._quaternion._updateEuler()},get eulerOrder(){console.warn("DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order.");
return this.rotation.order},set eulerOrder(a){console.warn("DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order.");this.rotation.order=a},get useQuaternion(){console.warn("DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.")},set useQuaternion(a){console.warn("DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.")},applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix);
this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=new THREE.Quaternion;return function(b,c){a.setFromAxisAngle(b,c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=
new THREE.Vector3(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new THREE.Vector3;return function(b,c){a.copy(b);a.applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));return this}}(),translate:function(a,b){console.warn("DEPRECATED: Object3D's .translate() has been removed. Use .translateOnAxis( axis, distance ) instead. Note args have been changed.");
return this.translateOnAxis(b,a)},translateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.translateOnAxis(a,b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new THREE.Matrix4;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),
lookAt:function(){var a=new THREE.Matrix4;return function(b){a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(a===this)console.warn("THREE.Object3D.add: An object can't be added as a child of itself.");else if(a instanceof THREE.Object3D){void 0!==a.parent&&a.parent.remove(a);a.parent=this;a.dispatchEvent({type:"added"});this.children.push(a);for(var b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__addObject(a)}},remove:function(a){var b=
this.children.indexOf(a);if(-1!==b){a.parent=void 0;a.dispatchEvent({type:"removed"});this.children.splice(b,1);for(b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__removeObject(a)}},traverse:function(a){a(this);for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverse(a)},getObjectById:function(a,b){for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c];if(e.id===a||!0===b&&(e=e.getObjectById(a,b),void 0!==e))return e}},getObjectByName:function(a,
b){for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c];if(e.name===a||!0===b&&(e=e.getObjectByName(a,b),void 0!==e))return e}},getChildByName:function(a,b){console.warn("DEPRECATED: Object3D's .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a,b)},getDescendants:function(a){void 0===a&&(a=[]);Array.prototype.push.apply(a,this.children);for(var b=0,c=this.children.length;b<c;b++)this.children[b].getDescendants(a);return a},updateMatrix:function(){this.matrix.compose(this.position,
this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)void 0===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)},clone:function(a,b){void 0===a&&(a=new THREE.Object3D);void 0===b&&(b=!0);
a.name=this.name;a.up.copy(this.up);a.position.copy(this.position);a.quaternion.copy(this.quaternion);a.scale.copy(this.scale);a.renderDepth=this.renderDepth;a.rotationAutoUpdate=this.rotationAutoUpdate;a.matrix.copy(this.matrix);a.matrixWorld.copy(this.matrixWorld);a.matrixAutoUpdate=this.matrixAutoUpdate;a.matrixWorldNeedsUpdate=this.matrixWorldNeedsUpdate;a.visible=this.visible;a.castShadow=this.castShadow;a.receiveShadow=this.receiveShadow;a.frustumCulled=this.frustumCulled;a.userData=JSON.parse(JSON.stringify(this.userData));
if(!0===b)for(var c=0;c<this.children.length;c++)a.add(this.children[c].clone());return a}};THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);THREE.Object3DIdCount=0;THREE.Projector=function(){function a(){if(i===l){var a=new THREE.RenderableVertex;k.push(a);l++;i++;return a}return k[i++]}function b(a,b){return a.z!==b.z?b.z-a.z:a.id!==b.id?a.id-b.id:0}function c(a,b){var c=0,d=1,e=a.z+a.w,f=b.z+b.w,g=-a.z+a.w,h=-b.z+b.w;if(0<=e&&0<=f&&0<=g&&0<=h)return!0;if(0>e&&0>f||0>g&&0>h)return!1;0>e?c=Math.max(c,e/(e-f)):0>f&&(d=Math.min(d,e/(e-f)));0>g?c=Math.max(c,g/(g-h)):0>h&&(d=Math.min(d,g/(g-h)));if(d<c)return!1;a.lerp(b,c);b.lerp(a,1-d);return!0}var d,e,f=[],g=
0,h,i,k=[],l=0,n,p,t=[],r=0,m,q,u=[],s=0,v,z,G=[],N=0,C={objects:[],sprites:[],lights:[],elements:[]},B=new THREE.Vector3,x=new THREE.Vector3,F=new THREE.Vector3,L=new THREE.Vector3,w=new THREE.Vector4,E=new THREE.Box3(new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,1,1)),y=new THREE.Box3,D=Array(3),H=new THREE.Matrix4,K=new THREE.Matrix4,A,da=new THREE.Matrix4,ha=new THREE.Matrix3,ua=new THREE.Matrix3,O=new THREE.Vector3,T=new THREE.Frustum,ea=new THREE.Vector4,I=new THREE.Vector4;this.projectVector=
function(a,b){b.matrixWorldInverse.getInverse(b.matrixWorld);K.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);return a.applyProjection(K)};var P=new THREE.Matrix4;this.unprojectVector=function(a,b){P.getInverse(b.projectionMatrix);K.multiplyMatrices(b.matrixWorld,P);return a.applyProjection(K)};this.pickingRay=function(a,b){a.z=-1;var c=new THREE.Vector3(a.x,a.y,1);this.unprojectVector(a,b);this.unprojectVector(c,b);c.sub(a).normalize();return new THREE.Raycaster(a,c)};var Q=function(a){if(e===
g){var b=new THREE.RenderableObject;f.push(b);g++;e++;d=b}else d=f[e++];d.id=a.id;d.object=a;null!==a.renderDepth?d.z=a.renderDepth:(L.setFromMatrixPosition(a.matrixWorld),L.applyProjection(K),d.z=L.z);return d},oa=function(a){var b=a.positionWorld,c=a.positionScreen;b.copy(a.position).applyMatrix4(A);c.copy(b).applyMatrix4(K);b=1/c.w;c.x*=b;c.y*=b;c.z*=b;a.visible=-1<=c.x&&1>=c.x&&-1<=c.y&&1>=c.y&&-1<=c.z&&1>=c.z},va=function(a){if(!1!==a.visible){a instanceof THREE.Light?C.lights.push(a):a instanceof
THREE.Mesh||a instanceof THREE.Line?(!1===a.frustumCulled||!0===T.intersectsObject(a))&&C.objects.push(Q(a)):a instanceof THREE.Sprite&&C.sprites.push(Q(a));for(var b=0,c=a.children.length;b<c;b++)va(a.children[b])}};this.projectScene=function(d,f,g,l){var P=!1,L,Q,ba,W,Ka,U,ca,wa,Ua;z=q=p=0;C.elements.length=0;!0===d.autoUpdate&&d.updateMatrixWorld();void 0===f.parent&&f.updateMatrixWorld();H.copy(f.matrixWorldInverse.getInverse(f.matrixWorld));K.multiplyMatrices(f.projectionMatrix,H);ua.getNormalMatrix(H);
T.setFromMatrix(K);e=0;C.objects.length=0;C.sprites.length=0;C.lights.length=0;va(d);!0===g&&C.objects.sort(b);for(var g=0,Oa=C.objects.length;g<Oa;g++)if(d=C.objects[g].object,A=d.matrixWorld,i=0,d instanceof THREE.Mesh){L=d.geometry;Q=L.vertices;ba=L.faces;Ka=L.faceVertexUvs;ha.getNormalMatrix(A);wa=d.material instanceof THREE.MeshFaceMaterial;Ua=!0===wa?d.material:null;for(var la=0,ia=Q.length;la<ia;la++)h=a(),h.position.copy(Q[la]),oa(h);la=0;for(ia=ba.length;la<ia;la++){Q=ba[la];var Fa=!0===
wa?Ua.materials[Q.materialIndex]:d.material;if(void 0!==Fa){var Ga=Fa.side;W=k[Q.a];U=k[Q.b];ca=k[Q.c];if(!0===Fa.morphTargets){var P=L.morphTargets,Ba=d.morphTargetInfluences,xa=W.position,Va=U.position,La=ca.position;B.set(0,0,0);x.set(0,0,0);F.set(0,0,0);for(var Ma=0,ya=P.length;Ma<ya;Ma++){var V=Ba[Ma];if(0!==V){var pa=P[Ma].vertices;B.x+=(pa[Q.a].x-xa.x)*V;B.y+=(pa[Q.a].y-xa.y)*V;B.z+=(pa[Q.a].z-xa.z)*V;x.x+=(pa[Q.b].x-Va.x)*V;x.y+=(pa[Q.b].y-Va.y)*V;x.z+=(pa[Q.b].z-Va.z)*V;F.x+=(pa[Q.c].x-La.x)*
V;F.y+=(pa[Q.c].y-La.y)*V;F.z+=(pa[Q.c].z-La.z)*V}}W.position.add(B);U.position.add(x);ca.position.add(F);oa(W);oa(U);oa(ca)}D[0]=W.positionScreen;D[1]=U.positionScreen;D[2]=ca.positionScreen;if(!0===W.visible||!0===U.visible||!0===ca.visible||E.isIntersectionBox(y.setFromPoints(D)))if(P=0>(ca.positionScreen.x-W.positionScreen.x)*(U.positionScreen.y-W.positionScreen.y)-(ca.positionScreen.y-W.positionScreen.y)*(U.positionScreen.x-W.positionScreen.x),Ga===THREE.DoubleSide||P===(Ga===THREE.FrontSide)){p===
r?(Ba=new THREE.RenderableFace3,t.push(Ba),r++,p++,n=Ba):n=t[p++];n.id=d.id;n.v1.copy(W);n.v2.copy(U);n.v3.copy(ca);n.normalModel.copy(Q.normal);!1===P&&(Ga===THREE.BackSide||Ga===THREE.DoubleSide)&&n.normalModel.negate();n.normalModel.applyMatrix3(ha).normalize();n.normalModelView.copy(n.normalModel).applyMatrix3(ua);n.centroidModel.copy(Q.centroid).applyMatrix4(A);W=Q.vertexNormals;U=0;for(ca=Math.min(W.length,3);U<ca;U++)Ba=n.vertexNormalsModel[U],Ba.copy(W[U]),!1===P&&(Ga===THREE.BackSide||Ga===
THREE.DoubleSide)&&Ba.negate(),Ba.applyMatrix3(ha).normalize(),n.vertexNormalsModelView[U].copy(Ba).applyMatrix3(ua);n.vertexNormalsLength=W.length;U=0;for(Ga=Math.min(Ka.length,3);U<Ga;U++)if(W=Ka[U][la],void 0!==W){ca=0;for(P=W.length;ca<P;ca++)n.uvs[U][ca]=W[ca]}n.color=Q.color;n.material=Fa;O.copy(n.centroidModel).applyProjection(K);n.z=O.z;C.elements.push(n)}}}}else if(d instanceof THREE.Line){da.multiplyMatrices(K,A);Q=d.geometry.vertices;W=a();W.positionScreen.copy(Q[0]).applyMatrix4(da);L=
d.type===THREE.LinePieces?2:1;la=1;for(ia=Q.length;la<ia;la++)W=a(),W.positionScreen.copy(Q[la]).applyMatrix4(da),0<(la+1)%L||(U=k[i-2],ea.copy(W.positionScreen),I.copy(U.positionScreen),!0===c(ea,I)&&(ea.multiplyScalar(1/ea.w),I.multiplyScalar(1/I.w),q===s?(ba=new THREE.RenderableLine,u.push(ba),s++,q++,m=ba):m=u[q++],m.id=d.id,m.v1.positionScreen.copy(ea),m.v2.positionScreen.copy(I),m.z=Math.max(ea.z,I.z),m.material=d.material,d.material.vertexColors===THREE.VertexColors&&(m.vertexColors[0].copy(d.geometry.colors[la]),
m.vertexColors[1].copy(d.geometry.colors[la-1])),C.elements.push(m)))}g=0;for(Oa=C.sprites.length;g<Oa;g++)d=C.sprites[g].object,A=d.matrixWorld,w.set(A.elements[12],A.elements[13],A.elements[14],1),w.applyMatrix4(K),L=1/w.w,w.z*=L,-1<=w.z&&1>=w.z&&(z===N?(ba=new THREE.RenderableSprite,G.push(ba),N++,z++,v=ba):v=G[z++],v.id=d.id,v.x=w.x*L,v.y=w.y*L,v.z=w.z,v.object=d,v.rotation=d.rotation,v.scale.x=d.scale.x*Math.abs(v.x-(w.x+f.projectionMatrix.elements[0])/(w.w+f.projectionMatrix.elements[12])),
v.scale.y=d.scale.y*Math.abs(v.y-(w.y+f.projectionMatrix.elements[5])/(w.w+f.projectionMatrix.elements[13])),v.material=d.material,C.elements.push(v));!0===l&&C.elements.sort(b);return C}};THREE.Face3=function(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=d instanceof Array?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=e instanceof Array?e:[];this.vertexTangents=[];this.materialIndex=void 0!==f?f:0;this.centroid=new THREE.Vector3};
THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){var a=new THREE.Face3(this.a,this.b,this.c);a.normal.copy(this.normal);a.color.copy(this.color);a.centroid.copy(this.centroid);a.materialIndex=this.materialIndex;var b,c;b=0;for(c=this.vertexNormals.length;b<c;b++)a.vertexNormals[b]=this.vertexNormals[b].clone();b=0;for(c=this.vertexColors.length;b<c;b++)a.vertexColors[b]=this.vertexColors[b].clone();b=0;for(c=this.vertexTangents.length;b<c;b++)a.vertexTangents[b]=this.vertexTangents[b].clone();
return a}};THREE.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new THREE.Face3(a,b,c,e,f,g)};THREE.Geometry=function(){this.id=THREE.GeometryIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.dynamic=!0;this.buffersNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.tangentsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=
this.elementsNeedUpdate=this.verticesNeedUpdate=!1};
THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(a){for(var b=(new THREE.Matrix3).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){var e=this.faces[c];e.normal.applyMatrix3(b).normalize();for(var f=0,g=e.vertexNormals.length;f<g;f++)e.vertexNormals[f].applyMatrix3(b).normalize();e.centroid.applyMatrix4(a)}this.boundingBox instanceof THREE.Box3&&this.computeBoundingBox();this.boundingSphere instanceof
THREE.Sphere&&this.computeBoundingSphere()},computeCentroids:function(){var a,b,c;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c.centroid.set(0,0,0),c.centroid.add(this.vertices[c.a]),c.centroid.add(this.vertices[c.b]),c.centroid.add(this.vertices[c.c]),c.centroid.divideScalar(3)},computeFaceNormals:function(){for(var a=new THREE.Vector3,b=new THREE.Vector3,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,
g);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){var b,c,d;d=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)d[b]=new THREE.Vector3;if(a){var e,f,g,h=new THREE.Vector3,i=new THREE.Vector3;new THREE.Vector3;new THREE.Vector3;new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=this.vertices[c.a],f=this.vertices[c.b],g=this.vertices[c.c],h.subVectors(g,f),i.subVectors(e,f),h.cross(i),d[c.a].add(h),d[c.b].add(h),d[c.c].add(h)}else{a=
0;for(b=this.faces.length;a<b;a++)c=this.faces[a],d[c.a].add(c.normal),d[c.b].add(c.normal),d[c.c].add(c.normal)}b=0;for(c=this.vertices.length;b<c;b++)d[b].normalize();a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c.vertexNormals[0]=d[c.a].clone(),c.vertexNormals[1]=d[c.b].clone(),c.vertexNormals[2]=d[c.c].clone()},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++){e=this.faces[c];e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=
e.normal.clone();e.__originalVertexNormals||(e.__originalVertexNormals=[]);a=0;for(b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone()}var f=new THREE.Geometry;f.faces=this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;
var g=this.morphNormals[a].vertexNormals,h,i;c=0;for(d=this.faces.length;c<d;c++)h=new THREE.Vector3,i={a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3},e.push(h),g.push(i)}g=this.morphNormals[a];f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],h=g.faceNormals[c],i=g.vertexNormals[c],h.copy(e.normal),i.a.copy(e.vertexNormals[0]),i.b.copy(e.vertexNormals[1]),i.c.copy(e.vertexNormals[2])}c=0;for(d=
this.faces.length;c<d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeTangents:function(){var a,b,c,d,e,f,g,h,i,k,l,n,p,t,r,m,q,u=[],s=[];c=new THREE.Vector3;var v=new THREE.Vector3,z=new THREE.Vector3,G=new THREE.Vector3,N=new THREE.Vector3;a=0;for(b=this.vertices.length;a<b;a++)u[a]=new THREE.Vector3,s[a]=new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)e=this.faces[a],f=this.faceVertexUvs[0][a],d=e.a,q=e.b,e=e.c,g=this.vertices[d],h=this.vertices[q],
i=this.vertices[e],k=f[0],l=f[1],n=f[2],f=h.x-g.x,p=i.x-g.x,t=h.y-g.y,r=i.y-g.y,h=h.z-g.z,g=i.z-g.z,i=l.x-k.x,m=n.x-k.x,l=l.y-k.y,k=n.y-k.y,n=1/(i*k-m*l),c.set((k*f-l*p)*n,(k*t-l*r)*n,(k*h-l*g)*n),v.set((i*p-m*f)*n,(i*r-m*t)*n,(i*g-m*h)*n),u[d].add(c),u[q].add(c),u[e].add(c),s[d].add(v),s[q].add(v),s[e].add(v);v=["a","b","c","d"];a=0;for(b=this.faces.length;a<b;a++){e=this.faces[a];for(c=0;c<Math.min(e.vertexNormals.length,3);c++)N.copy(e.vertexNormals[c]),d=e[v[c]],q=u[d],z.copy(q),z.sub(N.multiplyScalar(N.dot(q))).normalize(),
G.crossVectors(e.vertexNormals[c],q),d=G.dot(s[d]),d=0>d?-1:1,e.vertexTangents[c]=new THREE.Vector4(z.x,z.y,z.z,d)}this.hasTangents=!0},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);
this.boundingSphere.setFromPoints(this.vertices)},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),f,g;f=0;for(g=this.vertices.length;f<g;f++)d=this.vertices[f],d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];a=[];f=0;for(g=this.faces.length;f<g;f++){e=this.faces[f];e.a=c[e.a];e.b=c[e.b];e.c=c[e.c];e=[e.a,e.b,e.c];for(d=0;3>d;d++)if(e[d]==e[(d+1)%3]){a.push(f);break}}for(f=a.length-1;0<=f;f--){e=
a[f];this.faces.splice(e,1);c=0;for(g=this.faceVertexUvs.length;c<g;c++)this.faceVertexUvs[c].splice(e,1)}f=this.vertices.length-b.length;this.vertices=b;return f},clone:function(){for(var a=new THREE.Geometry,b=this.vertices,c=0,d=b.length;c<d;c++)a.vertices.push(b[c].clone());b=this.faces;c=0;for(d=b.length;c<d;c++)a.faces.push(b[c].clone());b=this.faceVertexUvs[0];c=0;for(d=b.length;c<d;c++){for(var e=b[c],f=[],g=0,h=e.length;g<h;g++)f.push(new THREE.Vector2(e[g].x,e[g].y));a.faceVertexUvs[0].push(f)}return a},
dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);THREE.GeometryIdCount=0;THREE.BufferGeometry=function(){this.id=THREE.GeometryIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.attributes={};this.dynamic=!0;this.offsets=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.morphTargets=[]};
THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,addAttribute:function(a,b,c,d){this.attributes[a]={itemSize:d,array:new b(c*d)}},applyMatrix:function(a){var b,c;this.attributes.position&&(b=this.attributes.position.array);this.attributes.normal&&(c=this.attributes.normal.array);void 0!==b&&(a.multiplyVector3Array(b),this.verticesNeedUpdate=!0);void 0!==c&&((new THREE.Matrix3).getNormalMatrix(a).multiplyVector3Array(c),this.normalizeNormals(),this.normalsNeedUpdate=!0)},computeBoundingBox:function(){null===
this.boundingBox&&(this.boundingBox=new THREE.Box3);var a=this.attributes.position.array;if(a){var b=this.boundingBox,c,d,e;3<=a.length&&(b.min.x=b.max.x=a[0],b.min.y=b.max.y=a[1],b.min.z=b.max.z=a[2]);for(var f=3,g=a.length;f<g;f+=3)c=a[f],d=a[f+1],e=a[f+2],c<b.min.x?b.min.x=c:c>b.max.x&&(b.max.x=c),d<b.min.y?b.min.y=d:d>b.max.y&&(b.max.y=d),e<b.min.z?b.min.z=e:e>b.max.z&&(b.max.z=e)}if(void 0===a||0===a.length)this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0)},computeBoundingSphere:function(){var a=
new THREE.Box3,b=new THREE.Vector3;return function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);var c=this.attributes.position.array;if(c){a.makeEmpty();for(var d=this.boundingSphere.center,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),a.addPoint(b);a.center(d);for(var g=0,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),g=Math.max(g,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(g)}}}(),computeVertexNormals:function(){if(this.attributes.position){var a,
b,c,d;a=this.attributes.position.array.length;if(void 0===this.attributes.normal)this.attributes.normal={itemSize:3,array:new Float32Array(a)};else{a=0;for(b=this.attributes.normal.array.length;a<b;a++)this.attributes.normal.array[a]=0}var e=this.attributes.position.array,f=this.attributes.normal.array,g,h,i,k,l,n,p=new THREE.Vector3,t=new THREE.Vector3,r=new THREE.Vector3,m=new THREE.Vector3,q=new THREE.Vector3;if(this.attributes.index){var u=this.attributes.index.array,s=this.offsets;c=0;for(d=
s.length;c<d;++c){b=s[c].start;g=s[c].count;var v=s[c].index;a=b;for(b+=g;a<b;a+=3)g=v+u[a],h=v+u[a+1],i=v+u[a+2],k=e[3*g],l=e[3*g+1],n=e[3*g+2],p.set(k,l,n),k=e[3*h],l=e[3*h+1],n=e[3*h+2],t.set(k,l,n),k=e[3*i],l=e[3*i+1],n=e[3*i+2],r.set(k,l,n),m.subVectors(r,t),q.subVectors(p,t),m.cross(q),f[3*g]+=m.x,f[3*g+1]+=m.y,f[3*g+2]+=m.z,f[3*h]+=m.x,f[3*h+1]+=m.y,f[3*h+2]+=m.z,f[3*i]+=m.x,f[3*i+1]+=m.y,f[3*i+2]+=m.z}}else{a=0;for(b=e.length;a<b;a+=9)k=e[a],l=e[a+1],n=e[a+2],p.set(k,l,n),k=e[a+3],l=e[a+4],
n=e[a+5],t.set(k,l,n),k=e[a+6],l=e[a+7],n=e[a+8],r.set(k,l,n),m.subVectors(r,t),q.subVectors(p,t),m.cross(q),f[a]=m.x,f[a+1]=m.y,f[a+2]=m.z,f[a+3]=m.x,f[a+4]=m.y,f[a+5]=m.z,f[a+6]=m.x,f[a+7]=m.y,f[a+8]=m.z}this.normalizeNormals();this.normalsNeedUpdate=!0}},normalizeNormals:function(){for(var a=this.attributes.normal.array,b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b},computeTangents:function(){function a(a){ha.x=d[3*a];ha.y=d[3*a+1];
ha.z=d[3*a+2];ua.copy(ha);T=h[a];A.copy(T);A.sub(ha.multiplyScalar(ha.dot(T))).normalize();da.crossVectors(ua,T);ea=da.dot(i[a]);O=0>ea?-1:1;g[4*a]=A.x;g[4*a+1]=A.y;g[4*a+2]=A.z;g[4*a+3]=O}if(void 0===this.attributes.index||void 0===this.attributes.position||void 0===this.attributes.normal||void 0===this.attributes.uv)console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");else{var b=this.attributes.index.array,c=this.attributes.position.array,
d=this.attributes.normal.array,e=this.attributes.uv.array,f=c.length/3;void 0===this.attributes.tangent&&(this.attributes.tangent={itemSize:4,array:new Float32Array(4*f)});for(var g=this.attributes.tangent.array,h=[],i=[],k=0;k<f;k++)h[k]=new THREE.Vector3,i[k]=new THREE.Vector3;var l,n,p,t,r,m,q,u,s,v,z,G,N,C,B,f=new THREE.Vector3,k=new THREE.Vector3,x,F,L,w,E,y,D,H=this.offsets;L=0;for(w=H.length;L<w;++L){F=H[L].start;E=H[L].count;var K=H[L].index;x=F;for(F+=E;x<F;x+=3)E=K+b[x],y=K+b[x+1],D=K+b[x+
2],l=c[3*E],n=c[3*E+1],p=c[3*E+2],t=c[3*y],r=c[3*y+1],m=c[3*y+2],q=c[3*D],u=c[3*D+1],s=c[3*D+2],v=e[2*E],z=e[2*E+1],G=e[2*y],N=e[2*y+1],C=e[2*D],B=e[2*D+1],t-=l,l=q-l,r-=n,n=u-n,m-=p,p=s-p,G-=v,v=C-v,N-=z,z=B-z,B=1/(G*z-v*N),f.set((z*t-N*l)*B,(z*r-N*n)*B,(z*m-N*p)*B),k.set((G*l-v*t)*B,(G*n-v*r)*B,(G*p-v*m)*B),h[E].add(f),h[y].add(f),h[D].add(f),i[E].add(k),i[y].add(k),i[D].add(k)}var A=new THREE.Vector3,da=new THREE.Vector3,ha=new THREE.Vector3,ua=new THREE.Vector3,O,T,ea;L=0;for(w=H.length;L<w;++L){F=
H[L].start;E=H[L].count;K=H[L].index;x=F;for(F+=E;x<F;x+=3)E=K+b[x],y=K+b[x+1],D=K+b[x+2],a(E),a(y),a(D)}this.tangentsNeedUpdate=this.hasTangents=!0}},clone:function(){var a=new THREE.BufferGeometry,b=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],c;for(c in this.attributes){for(var d=this.attributes[c],e=d.array,f={itemSize:d.itemSize,numItems:d.numItems,array:null},d=0,g=b.length;d<g;d++){var h=b[d];if(e instanceof h){f.array=new h(e);
break}}a.attributes[c]=f}d=0;for(g=this.offsets.length;d<g;d++)b=this.offsets[d],a.offsets.push({start:b.start,index:b.index,count:b.count});return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);THREE.Camera=function(){THREE.Object3D.call(this);this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=new THREE.Matrix4};THREE.Camera.prototype=Object.create(THREE.Object3D.prototype);THREE.Camera.prototype.lookAt=function(){var a=new THREE.Matrix4;return function(b){a.lookAt(this.position,b,this.up);this.quaternion.setFromRotationMatrix(a)}}();
THREE.Camera.prototype.clone=function(a){void 0===a&&(a=new THREE.Camera);THREE.Object3D.prototype.clone.call(this,a);a.matrixWorldInverse.copy(this.matrixWorldInverse);a.projectionMatrix.copy(this.projectionMatrix);return a};THREE.OrthographicCamera=function(a,b,c,d,e,f){THREE.Camera.call(this);this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:0.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()};THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype);THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){this.projectionMatrix.makeOrthographic(this.left,this.right,this.top,this.bottom,this.near,this.far)};
THREE.OrthographicCamera.prototype.clone=function(){var a=new THREE.OrthographicCamera;THREE.Camera.prototype.clone.call(this,a);a.left=this.left;a.right=this.right;a.top=this.top;a.bottom=this.bottom;a.near=this.near;a.far=this.far;return a};THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.fov=void 0!==a?a:50;this.aspect=void 0!==b?b:1;this.near=void 0!==c?c:0.1;this.far=void 0!==d?d:2E3;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype);THREE.PerspectiveCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);this.fov=2*THREE.Math.radToDeg(Math.atan(b/(2*a)));this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,e,f){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=e;this.height=f;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){if(this.fullWidth){var a=this.fullWidth/this.fullHeight,b=Math.tan(THREE.Math.degToRad(0.5*this.fov))*this.near,c=-b,d=a*c,a=Math.abs(a*b-d),c=Math.abs(b-c);this.projectionMatrix.makeFrustum(d+this.x*a/this.fullWidth,d+(this.x+this.width)*a/this.fullWidth,b-(this.y+this.height)*c/this.fullHeight,b-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix.makePerspective(this.fov,this.aspect,this.near,this.far)};
THREE.PerspectiveCamera.prototype.clone=function(){var a=new THREE.PerspectiveCamera;THREE.Camera.prototype.clone.call(this,a);a.fov=this.fov;a.aspect=this.aspect;a.near=this.near;a.far=this.far;return a};THREE.Light=function(a){THREE.Object3D.call(this);this.color=new THREE.Color(a)};THREE.Light.prototype=Object.create(THREE.Object3D.prototype);THREE.Light.prototype.clone=function(a){void 0===a&&(a=new THREE.Light);THREE.Object3D.prototype.clone.call(this,a);a.color.copy(this.color);return a};THREE.AmbientLight=function(a){THREE.Light.call(this,a)};THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype);THREE.AmbientLight.prototype.clone=function(){var a=new THREE.AmbientLight;THREE.Light.prototype.clone.call(this,a);return a};THREE.AreaLight=function(a,b){THREE.Light.call(this,a);this.normal=new THREE.Vector3(0,-1,0);this.right=new THREE.Vector3(1,0,0);this.intensity=void 0!==b?b:1;this.height=this.width=1;this.constantAttenuation=1.5;this.linearAttenuation=0.5;this.quadraticAttenuation=0.1};THREE.AreaLight.prototype=Object.create(THREE.Light.prototype);THREE.DirectionalLight=function(a,b){THREE.Light.call(this,a);this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraLeft=-500;this.shadowCameraTop=this.shadowCameraRight=500;this.shadowCameraBottom=-500;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowCascade=!1;this.shadowCascadeOffset=new THREE.Vector3(0,
0,-1E3);this.shadowCascadeCount=2;this.shadowCascadeBias=[0,0,0];this.shadowCascadeWidth=[512,512,512];this.shadowCascadeHeight=[512,512,512];this.shadowCascadeNearZ=[-1,0.99,0.998];this.shadowCascadeFarZ=[0.99,0.998,1];this.shadowCascadeArray=[];this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype);
THREE.DirectionalLight.prototype.clone=function(){var a=new THREE.DirectionalLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;return a};THREE.HemisphereLight=function(a,b,c){THREE.Light.call(this,a);this.position.set(0,100,0);this.groundColor=new THREE.Color(b);this.intensity=void 0!==c?c:1};THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype);THREE.HemisphereLight.prototype.clone=function(){var a=new THREE.HemisphereLight;THREE.Light.prototype.clone.call(this,a);a.groundColor.copy(this.groundColor);a.intensity=this.intensity;return a};THREE.PointLight=function(a,b,c){THREE.Light.call(this,a);this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0};THREE.PointLight.prototype=Object.create(THREE.Light.prototype);THREE.PointLight.prototype.clone=function(){var a=new THREE.PointLight;THREE.Light.prototype.clone.call(this,a);a.intensity=this.intensity;a.distance=this.distance;return a};THREE.SpotLight=function(a,b,c,d,e){THREE.Light.call(this,a);this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.exponent=void 0!==e?e:10;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraFov=50;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowMatrix=this.shadowCamera=this.shadowMapSize=
this.shadowMap=null};THREE.SpotLight.prototype=Object.create(THREE.Light.prototype);THREE.SpotLight.prototype.clone=function(){var a=new THREE.SpotLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.distance=this.distance;a.angle=this.angle;a.exponent=this.exponent;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;return a};THREE.Loader=function(a){this.statusDomElement=(this.showStatus=a)?THREE.Loader.prototype.addStatusElement():null;this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}};
THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:void 0,addStatusElement:function(){var a=document.createElement("div");a.style.position="absolute";a.style.right="0px";a.style.top="0px";a.style.fontSize="0.8em";a.style.textAlign="left";a.style.background="rgba(0,0,0,0.25)";a.style.color="#fff";a.style.width="120px";a.style.padding="0.5em 0.5em 0.5em 0.5em";a.style.zIndex=1E3;a.innerHTML="Loading ...";return a},updateProgress:function(a){var b="Loaded ",b=a.total?b+((100*a.loaded/a.total).toFixed(0)+
"%"):b+((a.loaded/1E3).toFixed(2)+" KB");this.statusDomElement.innerHTML=b},extractUrlBase:function(a){a=a.split("/");a.pop();return(1>a.length?".":a.join("/"))+"/"},initMaterials:function(a,b){for(var c=[],d=0;d<a.length;++d)c[d]=THREE.Loader.prototype.createMaterial(a[d],b);return c},needsTangents:function(a){for(var b=0,c=a.length;b<c;b++)if(a[b]instanceof THREE.ShaderMaterial)return!0;return!1},createMaterial:function(a,b){function c(a){a=Math.log(a)/Math.LN2;return Math.floor(a)==a}function d(a){a=
Math.log(a)/Math.LN2;return Math.pow(2,Math.round(a))}function e(a,e,f,h,i,k,q){var u=/\.dds$/i.test(f),s=b+"/"+f;if(u){var v=THREE.ImageUtils.loadCompressedTexture(s);a[e]=v}else v=document.createElement("canvas"),a[e]=new THREE.Texture(v);a[e].sourceFile=f;h&&(a[e].repeat.set(h[0],h[1]),1!==h[0]&&(a[e].wrapS=THREE.RepeatWrapping),1!==h[1]&&(a[e].wrapT=THREE.RepeatWrapping));i&&a[e].offset.set(i[0],i[1]);k&&(f={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==f[k[0]]&&(a[e].wrapS=
f[k[0]]),void 0!==f[k[1]]&&(a[e].wrapT=f[k[1]]));q&&(a[e].anisotropy=q);if(!u){var z=a[e],a=new Image;a.onload=function(){if(!c(this.width)||!c(this.height)){var a=d(this.width),b=d(this.height);z.image.width=a;z.image.height=b;z.image.getContext("2d").drawImage(this,0,0,a,b)}else z.image=this;z.needsUpdate=!0};void 0!==g.crossOrigin&&(a.crossOrigin=g.crossOrigin);a.src=s}}function f(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]}var g=this,h="MeshLambertMaterial",i={color:15658734,opacity:1,map:null,
lightMap:null,normalMap:null,bumpMap:null,wireframe:!1};if(a.shading){var k=a.shading.toLowerCase();"phong"===k?h="MeshPhongMaterial":"basic"===k&&(h="MeshBasicMaterial")}void 0!==a.blending&&void 0!==THREE[a.blending]&&(i.blending=THREE[a.blending]);if(void 0!==a.transparent||1>a.opacity)i.transparent=a.transparent;void 0!==a.depthTest&&(i.depthTest=a.depthTest);void 0!==a.depthWrite&&(i.depthWrite=a.depthWrite);void 0!==a.visible&&(i.visible=a.visible);void 0!==a.flipSided&&(i.side=THREE.BackSide);
void 0!==a.doubleSided&&(i.side=THREE.DoubleSide);void 0!==a.wireframe&&(i.wireframe=a.wireframe);void 0!==a.vertexColors&&("face"===a.vertexColors?i.vertexColors=THREE.FaceColors:a.vertexColors&&(i.vertexColors=THREE.VertexColors));a.colorDiffuse?i.color=f(a.colorDiffuse):a.DbgColor&&(i.color=a.DbgColor);a.colorSpecular&&(i.specular=f(a.colorSpecular));a.colorAmbient&&(i.ambient=f(a.colorAmbient));a.transparency&&(i.opacity=a.transparency);a.specularCoef&&(i.shininess=a.specularCoef);a.mapDiffuse&&
b&&e(i,"map",a.mapDiffuse,a.mapDiffuseRepeat,a.mapDiffuseOffset,a.mapDiffuseWrap,a.mapDiffuseAnisotropy);a.mapLight&&b&&e(i,"lightMap",a.mapLight,a.mapLightRepeat,a.mapLightOffset,a.mapLightWrap,a.mapLightAnisotropy);a.mapBump&&b&&e(i,"bumpMap",a.mapBump,a.mapBumpRepeat,a.mapBumpOffset,a.mapBumpWrap,a.mapBumpAnisotropy);a.mapNormal&&b&&e(i,"normalMap",a.mapNormal,a.mapNormalRepeat,a.mapNormalOffset,a.mapNormalWrap,a.mapNormalAnisotropy);a.mapSpecular&&b&&e(i,"specularMap",a.mapSpecular,a.mapSpecularRepeat,
a.mapSpecularOffset,a.mapSpecularWrap,a.mapSpecularAnisotropy);a.mapBumpScale&&(i.bumpScale=a.mapBumpScale);a.mapNormal?(h=THREE.ShaderLib.normalmap,k=THREE.UniformsUtils.clone(h.uniforms),k.tNormal.value=i.normalMap,a.mapNormalFactor&&k.uNormalScale.value.set(a.mapNormalFactor,a.mapNormalFactor),i.map&&(k.tDiffuse.value=i.map,k.enableDiffuse.value=!0),i.specularMap&&(k.tSpecular.value=i.specularMap,k.enableSpecular.value=!0),i.lightMap&&(k.tAO.value=i.lightMap,k.enableAO.value=!0),k.diffuse.value.setHex(i.color),
k.specular.value.setHex(i.specular),k.ambient.value.setHex(i.ambient),k.shininess.value=i.shininess,void 0!==i.opacity&&(k.opacity.value=i.opacity),h=new THREE.ShaderMaterial({fragmentShader:h.fragmentShader,vertexShader:h.vertexShader,uniforms:k,lights:!0,fog:!0}),i.transparent&&(h.transparent=!0)):h=new THREE[h](i);void 0!==a.DbgName&&(h.name=a.DbgName);return h}};THREE.XHRLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.XHRLoader.prototype={constructor:THREE.XHRLoader,load:function(a,b,c,d){var e=this,f=new XMLHttpRequest;void 0!==b&&f.addEventListener("load",function(c){b(c.target.responseText);e.manager.itemEnd(a)},!1);void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1);void 0!==d&&f.addEventListener("error",function(a){d(a)},!1);void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin);f.open("GET",a,!0);f.send(null);e.manager.itemStart(a)},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.ImageLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(a,b,c,d){var e=this,f=document.createElement("img");void 0!==b&&f.addEventListener("load",function(){e.manager.itemEnd(a);b(this)},!1);void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1);void 0!==d&&f.addEventListener("error",function(a){d(a)},!1);void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin);f.src=a;e.manager.itemStart(a);return f},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.JSONLoader=function(a){THREE.Loader.call(this,a);this.withCredentials=!1};THREE.JSONLoader.prototype=Object.create(THREE.Loader.prototype);THREE.JSONLoader.prototype.load=function(a,b,c){c=c&&"string"===typeof c?c:this.extractUrlBase(a);this.onLoadStart();this.loadAjaxJSON(this,a,b,c)};
THREE.JSONLoader.prototype.loadAjaxJSON=function(a,b,c,d,e){var f=new XMLHttpRequest,g=0;f.onreadystatechange=function(){if(f.readyState===f.DONE)if(200===f.status||0===f.status){if(f.responseText){var h=JSON.parse(f.responseText),h=a.parse(h,d);c(h.geometry,h.materials)}else console.warn("THREE.JSONLoader: ["+b+"] seems to be unreachable or file there is empty");a.onLoadComplete()}else console.error("THREE.JSONLoader: Couldn't load ["+b+"] ["+f.status+"]");else f.readyState===f.LOADING?e&&(0===g&&
(g=f.getResponseHeader("Content-Length")),e({total:g,loaded:f.responseText.length})):f.readyState===f.HEADERS_RECEIVED&&void 0!==e&&(g=f.getResponseHeader("Content-Length"))};f.open("GET",b,!0);f.withCredentials=this.withCredentials;f.send(null)};
THREE.JSONLoader.prototype.parse=function(a,b){var c=new THREE.Geometry,d=void 0!==a.scale?1/a.scale:1,e,f,g,h,i,k,l,n,p,t,r,m,q,u,s=a.faces;p=a.vertices;var v=a.normals,z=a.colors,G=0;if(void 0!==a.uvs){for(e=0;e<a.uvs.length;e++)a.uvs[e].length&&G++;for(e=0;e<G;e++)c.faceVertexUvs[e]=[]}h=0;for(i=p.length;h<i;)k=new THREE.Vector3,k.x=p[h++]*d,k.y=p[h++]*d,k.z=p[h++]*d,c.vertices.push(k);h=0;for(i=s.length;h<i;)if(p=s[h++],t=p&1,g=p&2,e=p&8,l=p&16,r=p&32,k=p&64,p&=128,t){t=new THREE.Face3;t.a=s[h];
t.b=s[h+1];t.c=s[h+3];m=new THREE.Face3;m.a=s[h+1];m.b=s[h+2];m.c=s[h+3];h+=4;g&&(g=s[h++],t.materialIndex=g,m.materialIndex=g);g=c.faces.length;if(e)for(e=0;e<G;e++){q=a.uvs[e];c.faceVertexUvs[e][g]=[];c.faceVertexUvs[e][g+1]=[];for(f=0;4>f;f++)n=s[h++],u=q[2*n],n=q[2*n+1],u=new THREE.Vector2(u,n),2!==f&&c.faceVertexUvs[e][g].push(u),0!==f&&c.faceVertexUvs[e][g+1].push(u)}l&&(l=3*s[h++],t.normal.set(v[l++],v[l++],v[l]),m.normal.copy(t.normal));if(r)for(e=0;4>e;e++)l=3*s[h++],r=new THREE.Vector3(v[l++],
v[l++],v[l]),2!==e&&t.vertexNormals.push(r),0!==e&&m.vertexNormals.push(r);k&&(k=s[h++],k=z[k],t.color.setHex(k),m.color.setHex(k));if(p)for(e=0;4>e;e++)k=s[h++],k=z[k],2!==e&&t.vertexColors.push(new THREE.Color(k)),0!==e&&m.vertexColors.push(new THREE.Color(k));c.faces.push(t);c.faces.push(m)}else{t=new THREE.Face3;t.a=s[h++];t.b=s[h++];t.c=s[h++];g&&(g=s[h++],t.materialIndex=g);g=c.faces.length;if(e)for(e=0;e<G;e++){q=a.uvs[e];c.faceVertexUvs[e][g]=[];for(f=0;3>f;f++)n=s[h++],u=q[2*n],n=q[2*n+1],
u=new THREE.Vector2(u,n),c.faceVertexUvs[e][g].push(u)}l&&(l=3*s[h++],t.normal.set(v[l++],v[l++],v[l]));if(r)for(e=0;3>e;e++)l=3*s[h++],r=new THREE.Vector3(v[l++],v[l++],v[l]),t.vertexNormals.push(r);k&&(k=s[h++],t.color.setHex(z[k]));if(p)for(e=0;3>e;e++)k=s[h++],t.vertexColors.push(new THREE.Color(z[k]));c.faces.push(t)}if(a.skinWeights){h=0;for(i=a.skinWeights.length;h<i;h+=2)s=a.skinWeights[h],v=a.skinWeights[h+1],c.skinWeights.push(new THREE.Vector4(s,v,0,0))}if(a.skinIndices){h=0;for(i=a.skinIndices.length;h<
i;h+=2)s=a.skinIndices[h],v=a.skinIndices[h+1],c.skinIndices.push(new THREE.Vector4(s,v,0,0))}c.bones=a.bones;c.animation=a.animation;c.animations=a.animations;if(void 0!==a.morphTargets){h=0;for(i=a.morphTargets.length;h<i;h++){c.morphTargets[h]={};c.morphTargets[h].name=a.morphTargets[h].name;c.morphTargets[h].vertices=[];z=c.morphTargets[h].vertices;G=a.morphTargets[h].vertices;s=0;for(v=G.length;s<v;s+=3)p=new THREE.Vector3,p.x=G[s]*d,p.y=G[s+1]*d,p.z=G[s+2]*d,z.push(p)}}if(void 0!==a.morphColors){h=
0;for(i=a.morphColors.length;h<i;h++){c.morphColors[h]={};c.morphColors[h].name=a.morphColors[h].name;c.morphColors[h].colors=[];v=c.morphColors[h].colors;z=a.morphColors[h].colors;d=0;for(s=z.length;d<s;d+=3)G=new THREE.Color(16755200),G.setRGB(z[d],z[d+1],z[d+2]),v.push(G)}}c.computeCentroids();c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials)return{geometry:c};d=this.initMaterials(a.materials,b);this.needsTangents(d)&&c.computeTangents();return{geometry:c,materials:d}};THREE.LoadingManager=function(a,b,c){var d=this,e=0,f=0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(){f++};this.itemEnd=function(a){e++;if(void 0!==d.onProgress)d.onProgress(a,e,f);if(e===f&&void 0!==d.onLoad)d.onLoad()}};THREE.DefaultLoadingManager=new THREE.LoadingManager;THREE.BufferGeometryLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.BufferGeometryLoader.prototype={constructor:THREE.BufferGeometryLoader,load:function(a,b){var c=this,d=new THREE.XHRLoader;d.setCrossOrigin(this.crossOrigin);d.load(a,function(a){b(c.parse(JSON.parse(a)))})},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE.BufferGeometry,c=a.attributes,d=a.offsets,a=a.boundingSphere,e;for(e in c){var f=c[e];b.attributes[e]={itemSize:f.itemSize,array:new self[f.type](f.array)}}void 0!==d&&(b.offsets=JSON.parse(JSON.stringify(d)));
void 0!==a&&(b.boundingSphere=new THREE.Sphere((new THREE.Vector3).fromArray(void 0!==a.center?a.center:[0,0,0]),a.radius));return b}};THREE.GeometryLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};THREE.GeometryLoader.prototype={constructor:THREE.GeometryLoader,load:function(a,b){var c=this,d=new THREE.XHRLoader;d.setCrossOrigin(this.crossOrigin);d.load(a,function(a){b(c.parse(JSON.parse(a)))})},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(){}};THREE.MaterialLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.MaterialLoader.prototype={constructor:THREE.MaterialLoader,load:function(a,b){var c=this,d=new THREE.XHRLoader;d.setCrossOrigin(this.crossOrigin);d.load(a,function(a){b(c.parse(JSON.parse(a)))})},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE[a.type];void 0!==a.color&&b.color.setHex(a.color);void 0!==a.ambient&&b.ambient.setHex(a.ambient);void 0!==a.emissive&&b.emissive.setHex(a.emissive);void 0!==a.specular&&b.specular.setHex(a.specular);void 0!==a.shininess&&
(b.shininess=a.shininess);void 0!==a.vertexColors&&(b.vertexColors=a.vertexColors);void 0!==a.blending&&(b.blending=a.blending);void 0!==a.side&&(b.side=a.side);void 0!==a.opacity&&(b.opacity=a.opacity);void 0!==a.transparent&&(b.transparent=a.transparent);void 0!==a.wireframe&&(b.wireframe=a.wireframe);if(void 0!==a.materials)for(var c=0,d=a.materials.length;c<d;c++)b.materials.push(this.parse(a.materials[c]));return b}};THREE.ObjectLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ObjectLoader.prototype={constructor:THREE.ObjectLoader,load:function(a,b){var c=this,d=new THREE.XHRLoader(c.manager);d.setCrossOrigin(this.crossOrigin);d.load(a,function(a){b(c.parse(JSON.parse(a)))})},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=this.parseGeometries(a.geometries),c=this.parseMaterials(a.materials);return this.parseObject(a.object,b,c)},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new THREE.JSONLoader,d=new THREE.BufferGeometryLoader,
e=0,f=a.length;e<f;e++){var g,h=a[e];switch(h.type){case "PlaneGeometry":g=new THREE.PlaneGeometry(h.width,h.height,h.widthSegments,h.heightSegments);break;case "CircleGeometry":g=new THREE.CircleGeometry(h.radius,h.segments);break;case "CubeGeometry":g=new THREE.CubeGeometry(h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case "CylinderGeometry":g=new THREE.CylinderGeometry(h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded);break;case "SphereGeometry":g=
new THREE.SphereGeometry(h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "IcosahedronGeometry":g=new THREE.IcosahedronGeometry(h.radius,h.detail);break;case "TorusGeometry":g=new THREE.TorusGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case "TorusKnotGeometry":g=new THREE.TorusKnotGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.p,h.q,h.heightScale);break;case "BufferGeometry":g=d.parse(h.data);break;case "Geometry":g=
c.parse(h.data).geometry}g.uuid=h.uuid;void 0!==h.name&&(g.name=h.name);b[h.uuid]=g}return b},parseMaterials:function(a){var b={};if(void 0!==a)for(var c=new THREE.MaterialLoader,d=0,e=a.length;d<e;d++){var f=a[d],g=c.parse(f);g.uuid=f.uuid;void 0!==f.name&&(g.name=f.name);b[f.uuid]=g}return b},parseObject:function(){var a=new THREE.Matrix4;return function(b,c,d){var e;switch(b.type){case "Scene":e=new THREE.Scene;break;case "PerspectiveCamera":e=new THREE.PerspectiveCamera(b.fov,b.aspect,b.near,
b.far);break;case "OrthographicCamera":e=new THREE.OrthographicCamera(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case "AmbientLight":e=new THREE.AmbientLight(b.color);break;case "DirectionalLight":e=new THREE.DirectionalLight(b.color,b.intensity);break;case "PointLight":e=new THREE.PointLight(b.color,b.intensity,b.distance);break;case "SpotLight":e=new THREE.SpotLight(b.color,b.intensity,b.distance,b.angle,b.exponent);break;case "HemisphereLight":e=new THREE.HemisphereLight(b.color,b.groundColor,
b.intensity);break;case "Mesh":e=c[b.geometry];var f=d[b.material];void 0===e&&console.error("THREE.ObjectLoader: Undefined geometry "+b.geometry);void 0===f&&console.error("THREE.ObjectLoader: Undefined material "+b.material);e=new THREE.Mesh(e,f);break;case "Sprite":f=d[b.material];void 0===f&&console.error("THREE.ObjectLoader: Undefined material "+b.material);e=new THREE.Sprite(f);break;default:e=new THREE.Object3D}e.uuid=b.uuid;void 0!==b.name&&(e.name=b.name);void 0!==b.matrix?(a.fromArray(b.matrix),
a.decompose(e.position,e.quaternion,e.scale)):(void 0!==b.position&&e.position.fromArray(b.position),void 0!==b.rotation&&e.rotation.fromArray(b.rotation),void 0!==b.scale&&e.scale.fromArray(b.scale));void 0!==b.visible&&(e.visible=b.visible);void 0!==b.userData&&(e.userData=b.userData);if(void 0!==b.children)for(var g in b.children)e.add(this.parseObject(b.children[g],c,d));return e}}()};THREE.SceneLoader=function(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){};this.callbackSync=function(){};this.callbackProgress=function(){};this.geometryHandlers={};this.hierarchyHandlers={};this.addGeometryHandler("ascii",THREE.JSONLoader)};
THREE.SceneLoader.prototype={constructor:THREE.SceneLoader,load:function(a,b){var c=this,d=new THREE.XHRLoader(c.manager);d.setCrossOrigin(this.crossOrigin);d.load(a,function(d){c.parse(JSON.parse(d),b,a)})},setCrossOrigin:function(a){this.crossOrigin=a},addGeometryHandler:function(a,b){this.geometryHandlers[a]={loaderClass:b}},addHierarchyHandler:function(a,b){this.hierarchyHandlers[a]={loaderClass:b}},parse:function(a,b,c){function d(a,b){return"relativeToHTML"==b?a:p+"/"+a}function e(){f(C.scene,
x.objects)}function f(a,b){var c,e,g,i,k,l;for(l in b){var p=C.objects[l],q=b[l];if(void 0===p){if(q.type&&q.type in n.hierarchyHandlers){if(void 0===q.loading){c={type:1,url:1,material:1,position:1,rotation:1,scale:1,visible:1,children:1,userData:1,skin:1,morph:1,mirroredLoop:1,duration:1};var u={},v;for(v in q)v in c||(u[v]=q[v]);r=C.materials[q.material];q.loading=!0;c=n.hierarchyHandlers[q.type].loaderObject;c.options?c.load(d(q.url,x.urlBaseType),h(l,a,r,q)):c.load(d(q.url,x.urlBaseType),h(l,
a,r,q),u)}}else if(void 0!==q.geometry){if(t=C.geometries[q.geometry]){p=!1;r=C.materials[q.material];p=r instanceof THREE.ShaderMaterial;e=q.position;g=q.rotation;i=q.scale;c=q.matrix;k=q.quaternion;q.material||(r=new THREE.MeshFaceMaterial(C.face_materials[q.geometry]));r instanceof THREE.MeshFaceMaterial&&0===r.materials.length&&(r=new THREE.MeshFaceMaterial(C.face_materials[q.geometry]));if(r instanceof THREE.MeshFaceMaterial)for(u=0;u<r.materials.length;u++)p=p||r.materials[u]instanceof THREE.ShaderMaterial;
p&&t.computeTangents();q.skin?p=new THREE.SkinnedMesh(t,r):q.morph?(p=new THREE.MorphAnimMesh(t,r),void 0!==q.duration&&(p.duration=q.duration),void 0!==q.time&&(p.time=q.time),void 0!==q.mirroredLoop&&(p.mirroredLoop=q.mirroredLoop),r.morphNormals&&t.computeMorphNormals()):p=new THREE.Mesh(t,r);p.name=l;c?(p.matrixAutoUpdate=!1,p.matrix.set(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9],c[10],c[11],c[12],c[13],c[14],c[15])):(p.position.fromArray(e),k?p.quaternion.fromArray(k):p.rotation.fromArray(g),
p.scale.fromArray(i));p.visible=q.visible;p.castShadow=q.castShadow;p.receiveShadow=q.receiveShadow;a.add(p);C.objects[l]=p}}else if("AmbientLight"===q.type||"PointLight"===q.type||"DirectionalLight"===q.type||"SpotLight"===q.type||"HemisphereLight"===q.type||"AreaLight"===q.type){u=q.color;c=q.intensity;e=q.distance;g=q.position;i=q.rotation;switch(q.type){case "AmbientLight":s=new THREE.AmbientLight(u);break;case "PointLight":s=new THREE.PointLight(u,c,e);s.position.fromArray(g);break;case "DirectionalLight":s=
new THREE.DirectionalLight(u,c);s.position.fromArray(q.direction);break;case "SpotLight":s=new THREE.SpotLight(u,c,e,1);s.angle=q.angle;s.position.fromArray(g);s.target.set(g[0],g[1]-e,g[2]);s.target.applyEuler(new THREE.Euler(i[0],i[1],i[2],"XYZ"));break;case "HemisphereLight":s=new THREE.DirectionalLight(u,c,e);s.target.set(g[0],g[1]-e,g[2]);s.target.applyEuler(new THREE.Euler(i[0],i[1],i[2],"XYZ"));break;case "AreaLight":s=new THREE.AreaLight(u,c),s.position.fromArray(g),s.width=q.size,s.height=
q.size_y}a.add(s);s.name=l;C.lights[l]=s;C.objects[l]=s}else"PerspectiveCamera"===q.type||"OrthographicCamera"===q.type?(e=q.position,g=q.rotation,k=q.quaternion,"PerspectiveCamera"===q.type?m=new THREE.PerspectiveCamera(q.fov,q.aspect,q.near,q.far):"OrthographicCamera"===q.type&&(m=new THREE.OrthographicCamera(q.left,q.right,q.top,q.bottom,q.near,q.far)),m.name=l,m.position.fromArray(e),void 0!==k?m.quaternion.fromArray(k):void 0!==g&&m.rotation.fromArray(g),a.add(m),C.cameras[l]=m,C.objects[l]=
m):(e=q.position,g=q.rotation,i=q.scale,k=q.quaternion,p=new THREE.Object3D,p.name=l,p.position.fromArray(e),k?p.quaternion.fromArray(k):p.rotation.fromArray(g),p.scale.fromArray(i),p.visible=void 0!==q.visible?q.visible:!1,a.add(p),C.objects[l]=p,C.empties[l]=p);if(p){if(void 0!==q.userData)for(var z in q.userData)p.userData[z]=q.userData[z];if(void 0!==q.groups)for(u=0;u<q.groups.length;u++)c=q.groups[u],void 0===C.groups[c]&&(C.groups[c]=[]),C.groups[c].push(l)}}void 0!==p&&void 0!==q.children&&
f(p,q.children)}}function g(a){return function(b,c){b.name=a;C.geometries[a]=b;C.face_materials[a]=c;e();v-=1;n.onLoadComplete();k()}}function h(a,b,c,d){return function(f){var f=f.content?f.content:f.dae?f.scene:f,g=d.rotation,h=d.quaternion,i=d.scale;f.position.fromArray(d.position);h?f.quaternion.fromArray(h):f.rotation.fromArray(g);f.scale.fromArray(i);c&&f.traverse(function(a){a.material=c});var l=void 0!==d.visible?d.visible:!0;f.traverse(function(a){a.visible=l});b.add(f);f.name=a;C.objects[a]=
f;e();v-=1;n.onLoadComplete();k()}}function i(a){return function(b,c){b.name=a;C.geometries[a]=b;C.face_materials[a]=c}}function k(){n.callbackProgress({totalModels:G,totalTextures:N,loadedModels:G-v,loadedTextures:N-z},C);n.onLoadProgress();if(0===v&&0===z){for(var a=0;a<B.length;a++){var c=B[a],d=C.objects[c.targetName];d?c.object.target=d:(c.object.target=new THREE.Object3D,C.scene.add(c.object.target));c.object.target.userData.targetInverse=c.object}b(C)}}function l(a,b){b(a);if(void 0!==a.children)for(var c in a.children)l(a.children[c],
b)}var n=this,p=THREE.Loader.prototype.extractUrlBase(c),t,r,m,q,u,s,v,z,G,N,C,B=[],x=a,F;for(F in this.geometryHandlers)a=this.geometryHandlers[F].loaderClass,this.geometryHandlers[F].loaderObject=new a;for(F in this.hierarchyHandlers)a=this.hierarchyHandlers[F].loaderClass,this.hierarchyHandlers[F].loaderObject=new a;z=v=0;C={scene:new THREE.Scene,geometries:{},face_materials:{},materials:{},textures:{},objects:{},cameras:{},lights:{},fogs:{},empties:{},groups:{}};if(x.transform&&(F=x.transform.position,
a=x.transform.rotation,c=x.transform.scale,F&&C.scene.position.fromArray(F),a&&C.scene.rotation.fromArray(a),c&&C.scene.scale.fromArray(c),F||a||c))C.scene.updateMatrix(),C.scene.updateMatrixWorld();F=function(a){return function(){z-=a;k();n.onLoadComplete()}};for(var L in x.fogs)a=x.fogs[L],"linear"===a.type?q=new THREE.Fog(0,a.near,a.far):"exp2"===a.type&&(q=new THREE.FogExp2(0,a.density)),a=a.color,q.color.setRGB(a[0],a[1],a[2]),C.fogs[L]=q;for(var w in x.geometries)q=x.geometries[w],q.type in
this.geometryHandlers&&(v+=1,n.onLoadStart());for(var E in x.objects)l(x.objects[E],function(a){a.type&&a.type in n.hierarchyHandlers&&(v+=1,n.onLoadStart())});G=v;for(w in x.geometries)if(q=x.geometries[w],"cube"===q.type)t=new THREE.CubeGeometry(q.width,q.height,q.depth,q.widthSegments,q.heightSegments,q.depthSegments),t.name=w,C.geometries[w]=t;else if("plane"===q.type)t=new THREE.PlaneGeometry(q.width,q.height,q.widthSegments,q.heightSegments),t.name=w,C.geometries[w]=t;else if("sphere"===q.type)t=
new THREE.SphereGeometry(q.radius,q.widthSegments,q.heightSegments),t.name=w,C.geometries[w]=t;else if("cylinder"===q.type)t=new THREE.CylinderGeometry(q.topRad,q.botRad,q.height,q.radSegs,q.heightSegs),t.name=w,C.geometries[w]=t;else if("torus"===q.type)t=new THREE.TorusGeometry(q.radius,q.tube,q.segmentsR,q.segmentsT),t.name=w,C.geometries[w]=t;else if("icosahedron"===q.type)t=new THREE.IcosahedronGeometry(q.radius,q.subdivisions),t.name=w,C.geometries[w]=t;else if(q.type in this.geometryHandlers){E=
{};for(u in q)"type"!==u&&"url"!==u&&(E[u]=q[u]);this.geometryHandlers[q.type].loaderObject.load(d(q.url,x.urlBaseType),g(w),E)}else"embedded"===q.type&&(E=x.embeds[q.id],E.metadata=x.metadata,E&&(E=this.geometryHandlers.ascii.loaderObject.parse(E,""),i(w)(E.geometry,E.materials)));for(var y in x.textures)if(w=x.textures[y],w.url instanceof Array){z+=w.url.length;for(u=0;u<w.url.length;u++)n.onLoadStart()}else z+=1,n.onLoadStart();N=z;for(y in x.textures){w=x.textures[y];void 0!==w.mapping&&void 0!==
THREE[w.mapping]&&(w.mapping=new THREE[w.mapping]);if(w.url instanceof Array){E=w.url.length;q=[];for(u=0;u<E;u++)q[u]=d(w.url[u],x.urlBaseType);u=(u=/\.dds$/i.test(q[0]))?THREE.ImageUtils.loadCompressedTextureCube(q,w.mapping,F(E)):THREE.ImageUtils.loadTextureCube(q,w.mapping,F(E))}else u=/\.dds$/i.test(w.url),E=d(w.url,x.urlBaseType),q=F(1),u=u?THREE.ImageUtils.loadCompressedTexture(E,w.mapping,q):THREE.ImageUtils.loadTexture(E,w.mapping,q),void 0!==THREE[w.minFilter]&&(u.minFilter=THREE[w.minFilter]),
void 0!==THREE[w.magFilter]&&(u.magFilter=THREE[w.magFilter]),w.anisotropy&&(u.anisotropy=w.anisotropy),w.repeat&&(u.repeat.set(w.repeat[0],w.repeat[1]),1!==w.repeat[0]&&(u.wrapS=THREE.RepeatWrapping),1!==w.repeat[1]&&(u.wrapT=THREE.RepeatWrapping)),w.offset&&u.offset.set(w.offset[0],w.offset[1]),w.wrap&&(E={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==E[w.wrap[0]]&&(u.wrapS=E[w.wrap[0]]),void 0!==E[w.wrap[1]]&&(u.wrapT=E[w.wrap[1]]));C.textures[y]=u}var D,H;for(D in x.materials){y=
x.materials[D];for(H in y.parameters)"envMap"===H||"map"===H||"lightMap"===H||"bumpMap"===H?y.parameters[H]=C.textures[y.parameters[H]]:"shading"===H?y.parameters[H]="flat"===y.parameters[H]?THREE.FlatShading:THREE.SmoothShading:"side"===H?y.parameters[H]="double"==y.parameters[H]?THREE.DoubleSide:"back"==y.parameters[H]?THREE.BackSide:THREE.FrontSide:"blending"===H?y.parameters[H]=y.parameters[H]in THREE?THREE[y.parameters[H]]:THREE.NormalBlending:"combine"===H?y.parameters[H]=y.parameters[H]in THREE?
THREE[y.parameters[H]]:THREE.MultiplyOperation:"vertexColors"===H?"face"==y.parameters[H]?y.parameters[H]=THREE.FaceColors:y.parameters[H]&&(y.parameters[H]=THREE.VertexColors):"wrapRGB"===H&&(F=y.parameters[H],y.parameters[H]=new THREE.Vector3(F[0],F[1],F[2]));void 0!==y.parameters.opacity&&1>y.parameters.opacity&&(y.parameters.transparent=!0);y.parameters.normalMap?(F=THREE.ShaderLib.normalmap,w=THREE.UniformsUtils.clone(F.uniforms),u=y.parameters.color,E=y.parameters.specular,q=y.parameters.ambient,
L=y.parameters.shininess,w.tNormal.value=C.textures[y.parameters.normalMap],y.parameters.normalScale&&w.uNormalScale.value.set(y.parameters.normalScale[0],y.parameters.normalScale[1]),y.parameters.map&&(w.tDiffuse.value=y.parameters.map,w.enableDiffuse.value=!0),y.parameters.envMap&&(w.tCube.value=y.parameters.envMap,w.enableReflection.value=!0,w.reflectivity.value=y.parameters.reflectivity),y.parameters.lightMap&&(w.tAO.value=y.parameters.lightMap,w.enableAO.value=!0),y.parameters.specularMap&&(w.tSpecular.value=
C.textures[y.parameters.specularMap],w.enableSpecular.value=!0),y.parameters.displacementMap&&(w.tDisplacement.value=C.textures[y.parameters.displacementMap],w.enableDisplacement.value=!0,w.uDisplacementBias.value=y.parameters.displacementBias,w.uDisplacementScale.value=y.parameters.displacementScale),w.diffuse.value.setHex(u),w.specular.value.setHex(E),w.ambient.value.setHex(q),w.shininess.value=L,y.parameters.opacity&&(w.opacity.value=y.parameters.opacity),r=new THREE.ShaderMaterial({fragmentShader:F.fragmentShader,
vertexShader:F.vertexShader,uniforms:w,lights:!0,fog:!0})):r=new THREE[y.type](y.parameters);r.name=D;C.materials[D]=r}for(D in x.materials)if(y=x.materials[D],y.parameters.materials){H=[];for(u=0;u<y.parameters.materials.length;u++)H.push(C.materials[y.parameters.materials[u]]);C.materials[D].materials=H}e();C.cameras&&x.defaults.camera&&(C.currentCamera=C.cameras[x.defaults.camera]);C.fogs&&x.defaults.fog&&(C.scene.fog=C.fogs[x.defaults.fog]);n.callbackSync(C);k()}};THREE.TextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(a,b){var c=new THREE.ImageLoader(this.manager);c.setCrossOrigin(this.crossOrigin);c.load(a,function(a){a=new THREE.Texture(a);a.needsUpdate=!0;void 0!==b&&b(a)})},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.Material=function(){this.id=THREE.MaterialIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.side=THREE.FrontSide;this.opacity=1;this.transparent=!1;this.blending=THREE.NormalBlending;this.blendSrc=THREE.SrcAlphaFactor;this.blendDst=THREE.OneMinusSrcAlphaFactor;this.blendEquation=THREE.AddEquation;this.depthWrite=this.depthTest=!0;this.polygonOffset=!1;this.overdraw=this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.needsUpdate=this.visible=!0};
THREE.Material.prototype={constructor:THREE.Material,setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else if(b in this){var d=this[b];d instanceof THREE.Color?d.set(c):d instanceof THREE.Vector3&&c instanceof THREE.Vector3?d.copy(c):this[b]="overdraw"==b?Number(c):c}}},clone:function(a){void 0===a&&(a=new THREE.Material);a.name=this.name;a.side=this.side;a.opacity=this.opacity;a.transparent=this.transparent;
a.blending=this.blending;a.blendSrc=this.blendSrc;a.blendDst=this.blendDst;a.blendEquation=this.blendEquation;a.depthTest=this.depthTest;a.depthWrite=this.depthWrite;a.polygonOffset=this.polygonOffset;a.polygonOffsetFactor=this.polygonOffsetFactor;a.polygonOffsetUnits=this.polygonOffsetUnits;a.alphaTest=this.alphaTest;a.overdraw=this.overdraw;a.visible=this.visible;return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);
THREE.MaterialIdCount=0;THREE.LineBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.clone=function(){var a=new THREE.LineBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.linecap=this.linecap;a.linejoin=this.linejoin;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.LineDashedMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineDashedMaterial.prototype.clone=function(){var a=new THREE.LineDashedMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.scale=this.scale;a.dashSize=this.dashSize;a.gapSize=this.gapSize;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.MeshBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.envMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphTargets=this.skinning=!1;this.setValues(a)};
THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.clone=function(){var a=new THREE.MeshBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=
this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;return a};THREE.MeshLambertMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.envMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap=
"round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.clone=function(){var a=new THREE.MeshLambertMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;
a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.MeshPhongMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.specular=new THREE.Color(1118481);this.shininess=30;this.metal=!1;this.perPixel=!0;this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.bumpMap=this.lightMap=this.map=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.envMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;
this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.clone=function(){var a=new THREE.MeshPhongMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.specular.copy(this.specular);a.shininess=this.shininess;a.metal=this.metal;a.perPixel=this.perPixel;a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.bumpMap=this.bumpMap;a.bumpScale=this.bumpScale;a.normalMap=this.normalMap;a.normalScale.copy(this.normalScale);
a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.MeshDepthMaterial=function(a){THREE.Material.call(this);this.wireframe=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshDepthMaterial.prototype.clone=function(){var a=new THREE.MeshDepthMaterial;THREE.Material.prototype.clone.call(this,a);a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a);this.shading=THREE.FlatShading;this.wireframe=!1;this.wireframeLinewidth=1;this.morphTargets=!1;this.setValues(a)};THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshNormalMaterial.prototype.clone=function(){var a=new THREE.MeshNormalMaterial;THREE.Material.prototype.clone.call(this,a);a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshFaceMaterial=function(a){this.materials=a instanceof Array?a:[]};THREE.MeshFaceMaterial.prototype.clone=function(){for(var a=new THREE.MeshFaceMaterial,b=0;b<this.materials.length;b++)a.materials.push(this.materials[b].clone());return a};THREE.ParticleSystemMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.ParticleSystemMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ParticleSystemMaterial.prototype.clone=function(){var a=new THREE.ParticleSystemMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.size=this.size;a.sizeAttenuation=this.sizeAttenuation;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.ParticleBasicMaterial=THREE.ParticleSystemMaterial;THREE.ShaderMaterial=function(a){THREE.Material.call(this);this.vertexShader=this.fragmentShader="void main() {}";this.uniforms={};this.defines={};this.attributes=null;this.shading=THREE.SmoothShading;this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName="position";this.setValues(a)};
THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.clone=function(){var a=new THREE.ShaderMaterial;THREE.Material.prototype.clone.call(this,a);a.fragmentShader=this.fragmentShader;a.vertexShader=this.vertexShader;a.uniforms=THREE.UniformsUtils.clone(this.uniforms);a.attributes=this.attributes;a.defines=this.defines;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.fog=this.fog;a.lights=this.lights;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=
this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.SpriteMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.map=null;this.rotation=0;this.fog=!1;this.setValues(a)};THREE.SpriteMaterial.prototype=Object.create(THREE.Material.prototype);THREE.SpriteMaterial.prototype.clone=function(){var a=new THREE.SpriteMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.rotation=this.rotation;a.fog=this.fog;return a};THREE.SpriteCanvasMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.program=function(){};this.setValues(a)};THREE.SpriteCanvasMaterial.prototype=Object.create(THREE.Material.prototype);THREE.SpriteCanvasMaterial.prototype.clone=function(){var a=new THREE.SpriteCanvasMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.program=this.program;return a};THREE.ParticleCanvasMaterial=THREE.SpriteCanvasMaterial;THREE.Texture=function(a,b,c,d,e,f,g,h,i){this.id=THREE.TextureIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.image=a;this.mipmaps=[];this.mapping=void 0!==b?b:new THREE.UVMapping;this.wrapS=void 0!==c?c:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==d?d:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==e?e:THREE.LinearFilter;this.minFilter=void 0!==f?f:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==i?i:1;this.format=void 0!==g?g:THREE.RGBAFormat;this.type=void 0!==h?h:THREE.UnsignedByteType;
this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this._needsUpdate=!1;this.onUpdate=null};
THREE.Texture.prototype={constructor:THREE.Texture,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a},clone:function(a){void 0===a&&(a=new THREE.Texture);a.image=this.image;a.mipmaps=this.mipmaps.slice(0);a.mapping=this.mapping;a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.format=this.format;a.type=this.type;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.generateMipmaps=
this.generateMipmaps;a.premultiplyAlpha=this.premultiplyAlpha;a.flipY=this.flipY;a.unpackAlignment=this.unpackAlignment;return a},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);THREE.TextureIdCount=0;THREE.CompressedTexture=function(a,b,c,d,e,f,g,h,i,k,l){THREE.Texture.call(this,null,f,g,h,i,k,d,e,l);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=!1};THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CompressedTexture.prototype.clone=function(){var a=new THREE.CompressedTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.DataTexture=function(a,b,c,d,e,f,g,h,i,k,l){THREE.Texture.call(this,null,f,g,h,i,k,d,e,l);this.image={data:a,width:b,height:c}};THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype);THREE.DataTexture.prototype.clone=function(){var a=new THREE.DataTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.ParticleSystem=function(a,b){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.ParticleSystemMaterial({color:16777215*Math.random()});this.frustumCulled=this.sortParticles=!1};THREE.ParticleSystem.prototype=Object.create(THREE.Object3D.prototype);
THREE.ParticleSystem.prototype.clone=function(a){void 0===a&&(a=new THREE.ParticleSystem(this.geometry,this.material));a.sortParticles=this.sortParticles;THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Line=function(a,b,c){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.LineBasicMaterial({color:16777215*Math.random()});this.type=void 0!==c?c:THREE.LineStrip};THREE.LineStrip=0;THREE.LinePieces=1;THREE.Line.prototype=Object.create(THREE.Object3D.prototype);THREE.Line.prototype.clone=function(a){void 0===a&&(a=new THREE.Line(this.geometry,this.material,this.type));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Mesh=function(a,b){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.MeshBasicMaterial({color:16777215*Math.random()});this.updateMorphTargets()};THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.updateMorphTargets=function(){if(0<this.geometry.morphTargets.length){this.morphTargetBase=-1;this.morphTargetForcedOrder=[];this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var a=0,b=this.geometry.morphTargets.length;a<b;a++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[this.geometry.morphTargets[a].name]=a}};
THREE.Mesh.prototype.getMorphTargetIndexByName=function(a){if(void 0!==this.morphTargetDictionary[a])return this.morphTargetDictionary[a];console.log("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0.");return 0};THREE.Mesh.prototype.clone=function(a){void 0===a&&(a=new THREE.Mesh(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Bone=function(a){THREE.Object3D.call(this);this.skin=a;this.skinMatrix=new THREE.Matrix4};THREE.Bone.prototype=Object.create(THREE.Object3D.prototype);THREE.Bone.prototype.update=function(a,b){this.matrixAutoUpdate&&(b|=this.updateMatrix());if(b||this.matrixWorldNeedsUpdate)a?this.skinMatrix.multiplyMatrices(a,this.matrix):this.skinMatrix.copy(this.matrix),this.matrixWorldNeedsUpdate=!1,b=!0;var c,d=this.children.length;for(c=0;c<d;c++)this.children[c].update(this.skinMatrix,b)};THREE.SkinnedMesh=function(a,b,c){THREE.Mesh.call(this,a,b);this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new THREE.Matrix4;this.bones=[];this.boneMatrices=[];var d,e,f;if(this.geometry&&void 0!==this.geometry.bones){for(a=0;a<this.geometry.bones.length;a++)c=this.geometry.bones[a],d=c.pos,e=c.rotq,f=c.scl,b=this.addBone(),b.name=c.name,b.position.set(d[0],d[1],d[2]),b.quaternion.set(e[0],e[1],e[2],e[3]),void 0!==f?b.scale.set(f[0],f[1],f[2]):b.scale.set(1,1,1);for(a=0;a<this.bones.length;a++)c=
this.geometry.bones[a],b=this.bones[a],-1===c.parent?this.add(b):this.bones[c.parent].add(b);a=this.bones.length;this.useVertexTexture?(this.boneTextureHeight=this.boneTextureWidth=a=256<a?64:64<a?32:16<a?16:8,this.boneMatrices=new Float32Array(4*this.boneTextureWidth*this.boneTextureHeight),this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType),this.boneTexture.minFilter=THREE.NearestFilter,this.boneTexture.magFilter=
THREE.NearestFilter,this.boneTexture.generateMipmaps=!1,this.boneTexture.flipY=!1):this.boneMatrices=new Float32Array(16*a);this.pose()}};THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.SkinnedMesh.prototype.addBone=function(a){void 0===a&&(a=new THREE.Bone(this));this.bones.push(a);return a};
THREE.SkinnedMesh.prototype.updateMatrixWorld=function(){var a=new THREE.Matrix4;return function(b){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||b)this.parent?this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=!1;for(var b=0,c=this.children.length;b<c;b++){var d=this.children[b];d instanceof THREE.Bone?d.update(this.identityMatrix,!1):d.updateMatrixWorld(!0)}if(void 0==this.boneInverses){this.boneInverses=
[];b=0;for(c=this.bones.length;b<c;b++)d=new THREE.Matrix4,d.getInverse(this.bones[b].skinMatrix),this.boneInverses.push(d)}b=0;for(c=this.bones.length;b<c;b++)a.multiplyMatrices(this.bones[b].skinMatrix,this.boneInverses[b]),a.flattenToArrayOffset(this.boneMatrices,16*b);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}();THREE.SkinnedMesh.prototype.pose=function(){this.updateMatrixWorld(!0);this.normalizeSkinWeights()};
THREE.SkinnedMesh.prototype.normalizeSkinWeights=function(){if(this.geometry instanceof THREE.Geometry)for(var a=0;a<this.geometry.skinIndices.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1)}};THREE.SkinnedMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.SkinnedMesh(this.geometry,this.material,this.useVertexTexture));THREE.Mesh.prototype.clone.call(this,a);return a};THREE.MorphAnimMesh=function(a,b){THREE.Mesh.call(this,a,b);this.duration=1E3;this.mirroredLoop=!1;this.currentKeyframe=this.lastKeyframe=this.time=0;this.direction=1;this.directionBackwards=!1;this.setFrameRange(0,this.geometry.morphTargets.length-1)};THREE.MorphAnimMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.MorphAnimMesh.prototype.setFrameRange=function(a,b){this.startKeyframe=a;this.endKeyframe=b;this.length=this.endKeyframe-this.startKeyframe+1};
THREE.MorphAnimMesh.prototype.setDirectionForward=function(){this.direction=1;this.directionBackwards=!1};THREE.MorphAnimMesh.prototype.setDirectionBackward=function(){this.direction=-1;this.directionBackwards=!0};
THREE.MorphAnimMesh.prototype.parseAnimations=function(){var a=this.geometry;a.animations||(a.animations={});for(var b,c=a.animations,d=/([a-z]+)(\d+)/,e=0,f=a.morphTargets.length;e<f;e++){var g=a.morphTargets[e].name.match(d);if(g&&1<g.length){g=g[1];c[g]||(c[g]={start:Infinity,end:-Infinity});var h=c[g];e<h.start&&(h.start=e);e>h.end&&(h.end=e);b||(b=g)}}a.firstAnimation=b};
THREE.MorphAnimMesh.prototype.setAnimationLabel=function(a,b,c){this.geometry.animations||(this.geometry.animations={});this.geometry.animations[a]={start:b,end:c}};THREE.MorphAnimMesh.prototype.playAnimation=function(a,b){var c=this.geometry.animations[a];c?(this.setFrameRange(c.start,c.end),this.duration=1E3*((c.end-c.start)/b),this.time=0):console.warn("animation["+a+"] undefined")};
THREE.MorphAnimMesh.prototype.updateAnimation=function(a){var b=this.duration/this.length;this.time+=this.direction*a;if(this.mirroredLoop){if(this.time>this.duration||0>this.time)this.direction*=-1,this.time>this.duration&&(this.time=this.duration,this.directionBackwards=!0),0>this.time&&(this.time=0,this.directionBackwards=!1)}else this.time%=this.duration,0>this.time&&(this.time+=this.duration);a=this.startKeyframe+THREE.Math.clamp(Math.floor(this.time/b),0,this.length-1);a!==this.currentKeyframe&&
(this.morphTargetInfluences[this.lastKeyframe]=0,this.morphTargetInfluences[this.currentKeyframe]=1,this.morphTargetInfluences[a]=0,this.lastKeyframe=this.currentKeyframe,this.currentKeyframe=a);b=this.time%b/b;this.directionBackwards&&(b=1-b);this.morphTargetInfluences[this.currentKeyframe]=b;this.morphTargetInfluences[this.lastKeyframe]=1-b};
THREE.MorphAnimMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.MorphAnimMesh(this.geometry,this.material));a.duration=this.duration;a.mirroredLoop=this.mirroredLoop;a.time=this.time;a.lastKeyframe=this.lastKeyframe;a.currentKeyframe=this.currentKeyframe;a.direction=this.direction;a.directionBackwards=this.directionBackwards;THREE.Mesh.prototype.clone.call(this,a);return a};THREE.LOD=function(){THREE.Object3D.call(this);this.objects=[]};THREE.LOD.prototype=Object.create(THREE.Object3D.prototype);THREE.LOD.prototype.addLevel=function(a,b){void 0===b&&(b=0);for(var b=Math.abs(b),c=0;c<this.objects.length&&!(b<this.objects[c].distance);c++);this.objects.splice(c,0,{distance:b,object:a});this.add(a)};THREE.LOD.prototype.getObjectForDistance=function(a){for(var b=1,c=this.objects.length;b<c&&!(a<this.objects[b].distance);b++);return this.objects[b-1].object};
THREE.LOD.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){if(1<this.objects.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);this.objects[0].object.visible=!0;for(var d=1,e=this.objects.length;d<e;d++)if(c>=this.objects[d].distance)this.objects[d-1].object.visible=!1,this.objects[d].object.visible=!0;else break;for(;d<e;d++)this.objects[d].object.visible=!1}}}();THREE.LOD.prototype.clone=function(){};THREE.Sprite=function(a){THREE.Object3D.call(this);this.material=void 0!==a?a:new THREE.SpriteMaterial};THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype);THREE.Sprite.prototype.updateMatrix=function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0};THREE.Sprite.prototype.clone=function(a){void 0===a&&(a=new THREE.Sprite(this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Particle=THREE.Sprite;THREE.Scene=function(){THREE.Object3D.call(this);this.overrideMaterial=this.fog=null;this.autoUpdate=!0;this.matrixAutoUpdate=!1;this.__lights=[];this.__objectsAdded=[];this.__objectsRemoved=[]};THREE.Scene.prototype=Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.__addObject=function(a){if(a instanceof THREE.Light)-1===this.__lights.indexOf(a)&&this.__lights.push(a),a.target&&void 0===a.target.parent&&this.add(a.target);else if(!(a instanceof THREE.Camera||a instanceof THREE.Bone)){this.__objectsAdded.push(a);var b=this.__objectsRemoved.indexOf(a);-1!==b&&this.__objectsRemoved.splice(b,1)}this.dispatchEvent({type:"objectAdded",object:a});a.dispatchEvent({type:"addedToScene",scene:this});for(b=0;b<a.children.length;b++)this.__addObject(a.children[b])};
THREE.Scene.prototype.__removeObject=function(a){if(a instanceof THREE.Light){var b=this.__lights.indexOf(a);-1!==b&&this.__lights.splice(b,1);if(a.shadowCascadeArray)for(b=0;b<a.shadowCascadeArray.length;b++)this.__removeObject(a.shadowCascadeArray[b])}else a instanceof THREE.Camera||(this.__objectsRemoved.push(a),b=this.__objectsAdded.indexOf(a),-1!==b&&this.__objectsAdded.splice(b,1));this.dispatchEvent({type:"objectRemoved",object:a});a.dispatchEvent({type:"removedFromScene",scene:this});for(b=
0;b<a.children.length;b++)this.__removeObject(a.children[b])};THREE.Scene.prototype.clone=function(a){void 0===a&&(a=new THREE.Scene);THREE.Object3D.prototype.clone.call(this,a);null!==this.fog&&(a.fog=this.fog.clone());null!==this.overrideMaterial&&(a.overrideMaterial=this.overrideMaterial.clone());a.autoUpdate=this.autoUpdate;a.matrixAutoUpdate=this.matrixAutoUpdate;return a};THREE.Fog=function(a,b,c){this.name="";this.color=new THREE.Color(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3};THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far)};THREE.FogExp2=function(a,b){this.name="";this.color=new THREE.Color(a);this.density=void 0!==b?b:2.5E-4};THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density)};THREE.CanvasRenderer=function(a){function b(a,b,c){for(var d=0,e=N.length;d<e;d++){var f=N[d];wa.copy(f.color);if(f instanceof THREE.DirectionalLight){var g=Na.setFromMatrixPosition(f.matrixWorld).normalize(),h=b.dot(g);0>=h||(h*=f.intensity,c.add(wa.multiplyScalar(h)))}else f instanceof THREE.PointLight&&(g=Na.setFromMatrixPosition(f.matrixWorld),h=b.dot(Na.subVectors(g,a).normalize()),0>=h||(h*=0==f.distance?1:1-Math.min(a.distanceTo(g)/f.distance,1),0!=h&&(h*=f.intensity,c.add(wa.multiplyScalar(h)))))}}
function c(a,b,c,d){p(b);t(c);r(d);m(a.getStyle());E.stroke();pa.expandByScalar(2*b)}function d(a){q(a.getStyle());E.fill()}function e(a){f(a.target)}function f(a){var b=a.wrapS===THREE.RepeatWrapping,c=a.wrapT===THREE.RepeatWrapping,d=a.image,e=document.createElement("canvas");e.width=d.width;e.height=d.height;var f=e.getContext("2d");f.setTransform(1,0,0,-1,0,d.height);f.drawImage(d,0,0);Ua[a.id]=E.createPattern(e,!0===b&&!0===c?"repeat":!0===b&&!1===c?"repeat-x":!1===b&&!0===c?"repeat-y":"no-repeat")}
function g(a,b,c,d,g,h,j,i,k,l,n,p,m){if(!(m instanceof THREE.DataTexture)){!1===m.hasEventListener("update",e)&&(void 0!==m.image&&0<m.image.width&&f(m),m.addEventListener("update",e));var t=Ua[m.id];if(void 0!==t){q(t);var t=m.offset.x/m.repeat.x,r=m.offset.y/m.repeat.y,s=m.image.width*m.repeat.x,m=m.image.height*m.repeat.y,j=(j+t)*s,i=(i+r)*m,c=c-a,d=d-b,g=g-a,h=h-b,k=(k+t)*s-j,l=(l+r)*m-i,n=(n+t)*s-j,p=(p+r)*m-i,m=k*p-n*l;0!==m&&(t=1/m,m=(p*c-l*g)*t,l=(p*d-l*h)*t,c=(k*g-n*c)*t,d=(k*h-n*d)*t,a=
a-m*j-c*i,b=b-l*j-d*i,E.save(),E.transform(m,l,c,d,a,b),E.fill(),E.restore())}else q("rgba(0,0,0,1)"),E.fill()}}function h(a,b,c,d,e,f,g,h,j,i,k,l,n){var m,p;m=n.width-1;p=n.height-1;g*=m;h*=p;c-=a;d-=b;e-=a;f-=b;j=j*m-g;i=i*p-h;k=k*m-g;l=l*p-h;p=1/(j*l-k*i);m=(l*c-i*e)*p;i=(l*d-i*f)*p;c=(j*e-k*c)*p;d=(j*f-k*d)*p;a=a-m*g-c*h;b=b-i*g-d*h;E.save();E.transform(m,i,c,d,a,b);E.clip();E.drawImage(n,0,0);E.restore()}function i(a,b,c,d){qa[0]=255*a.r|0;qa[1]=255*a.g|0;qa[2]=255*a.b|0;qa[4]=255*b.r|0;qa[5]=
255*b.g|0;qa[6]=255*b.b|0;qa[8]=255*c.r|0;qa[9]=255*c.g|0;qa[10]=255*c.b|0;qa[12]=255*d.r|0;qa[13]=255*d.g|0;qa[14]=255*d.b|0;Pa.putImageData(Wa,0,0);hb.drawImage(j,0,0);return ta}function k(a,b,c){var d=b.x-a.x,e=b.y-a.y,f=d*d+e*e;0!==f&&(c/=Math.sqrt(f),d*=c,e*=c,b.x+=d,b.y+=e,a.x-=d,a.y-=e)}function l(a){H!==a&&(H=E.globalAlpha=a)}function n(a){K!==a&&(a===THREE.NormalBlending?E.globalCompositeOperation="source-over":a===THREE.AdditiveBlending?E.globalCompositeOperation="lighter":a===THREE.SubtractiveBlending&&
(E.globalCompositeOperation="darker"),K=a)}function p(a){ha!==a&&(ha=E.lineWidth=a)}function t(a){ua!==a&&(ua=E.lineCap=a)}function r(a){O!==a&&(O=E.lineJoin=a)}function m(a){A!==a&&(A=E.strokeStyle=a)}function q(a){da!==a&&(da=E.fillStyle=a)}function u(a,b){if(T!==a||ea!==b)E.setLineDash([a,b]),T=a,ea=b}console.log("THREE.CanvasRenderer",THREE.REVISION);var s=THREE.Math.smoothstep,a=a||{},v=this,z,G,N,C=new THREE.Projector,B=void 0!==a.canvas?a.canvas:document.createElement("canvas"),x=B.width,F=
B.height,L=Math.floor(x/2),w=Math.floor(F/2),E=B.getContext("2d"),y=new THREE.Color(0),D=0,H=1,K=0,A=null,da=null,ha=null,ua=null,O=null,T=null,ea=0,I,P,Q,oa;new THREE.RenderableVertex;new THREE.RenderableVertex;var va,Ea,za,Ha,Ta,Ja,sa=new THREE.Color,Aa=new THREE.Color,ba=new THREE.Color,W=new THREE.Color,Ka=new THREE.Color,U=new THREE.Color,ca=new THREE.Color,wa=new THREE.Color,Ua={},Oa,la,ia,Fa,Ga,Ba,xa,Va,La,Ma,ya=new THREE.Box2,V=new THREE.Box2,pa=new THREE.Box2,ja=new THREE.Color,fa=new THREE.Color,
Za=new THREE.Color,Na=new THREE.Vector3,j,Pa,Wa,qa,ta,hb,db=16;j=document.createElement("canvas");j.width=j.height=2;Pa=j.getContext("2d");Pa.fillStyle="rgba(0,0,0,1)";Pa.fillRect(0,0,2,2);Wa=Pa.getImageData(0,0,2,2);qa=Wa.data;ta=document.createElement("canvas");ta.width=ta.height=db;hb=ta.getContext("2d");hb.translate(-db/2,-db/2);hb.scale(db,db);db--;void 0===E.setLineDash&&(E.setLineDash=void 0!==E.mozDash?function(a){E.mozDash=null!==a[0]?a:null}:function(){});this.domElement=B;this.devicePixelRatio=
void 0!==a.devicePixelRatio?a.devicePixelRatio:void 0!==self.devicePixelRatio?self.devicePixelRatio:1;this.sortElements=this.sortObjects=this.autoClear=!0;this.info={render:{vertices:0,faces:0}};this.supportsVertexTextures=function(){};this.setFaceCulling=function(){};this.setSize=function(a,b,c){x=a*this.devicePixelRatio;F=b*this.devicePixelRatio;L=Math.floor(x/2);w=Math.floor(F/2);B.width=x;B.height=F;1!==this.devicePixelRatio&&!1!==c&&(B.style.width=a+"px",B.style.height=b+"px");ya.set(new THREE.Vector2(-L,
-w),new THREE.Vector2(L,w));V.set(new THREE.Vector2(-L,-w),new THREE.Vector2(L,w));H=1;K=0;O=ua=ha=da=A=null};this.setClearColor=function(a,b){y.set(a);D=void 0!==b?b:1;V.set(new THREE.Vector2(-L,-w),new THREE.Vector2(L,w))};this.setClearColorHex=function(a,b){console.warn("DEPRECATED: .setClearColorHex() is being removed. Use .setClearColor() instead.");this.setClearColor(a,b)};this.getMaxAnisotropy=function(){return 0};this.clear=function(){E.setTransform(1,0,0,-1,L,w);!1===V.empty()&&(V.intersect(ya),
V.expandByScalar(2),1>D&&E.clearRect(V.min.x|0,V.min.y|0,V.max.x-V.min.x|0,V.max.y-V.min.y|0),0<D&&(n(THREE.NormalBlending),l(1),q("rgba("+Math.floor(255*y.r)+","+Math.floor(255*y.g)+","+Math.floor(255*y.b)+","+D+")"),E.fillRect(V.min.x|0,V.min.y|0,V.max.x-V.min.x|0,V.max.y-V.min.y|0)),V.makeEmpty())};this.clearColor=function(){};this.clearDepth=function(){};this.clearStencil=function(){};this.render=function(a,j){if(!1===j instanceof THREE.Camera)console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");
else{!0===this.autoClear&&this.clear();E.setTransform(1,0,0,-1,L,w);v.info.render.vertices=0;v.info.render.faces=0;z=C.projectScene(a,j,this.sortObjects,this.sortElements);G=z.elements;N=z.lights;I=j;ja.setRGB(0,0,0);fa.setRGB(0,0,0);Za.setRGB(0,0,0);for(var x=0,H=N.length;x<H;x++){var B=N[x],F=B.color;B instanceof THREE.AmbientLight?ja.add(F):B instanceof THREE.DirectionalLight?fa.add(F):B instanceof THREE.PointLight&&Za.add(F)}x=0;for(H=G.length;x<H;x++){var y=G[x],D=y.material;if(!(void 0===D||
!1===D.visible)){pa.makeEmpty();if(y instanceof THREE.RenderableSprite){P=y;P.x*=L;P.y*=w;B=P;F=D;l(F.opacity);n(F.blending);var A=y.scale.x*L,y=y.scale.y*w,D=0.5*Math.sqrt(A*A+y*y);pa.min.set(B.x-D,B.y-D);pa.max.set(B.x+D,B.y+D);if(!1===ya.isIntersectionBox(pa))pa.makeEmpty();else if(F instanceof THREE.SpriteMaterial||F instanceof THREE.ParticleSystemMaterial){var O=F.map;if(null!==O){!1===O.hasEventListener("update",e)&&(void 0!==O.image&&0<O.image.width&&f(O),O.addEventListener("update",e));D=
Ua[O.id];void 0!==D?q(D):q("rgba( 0, 0, 0, 1 )");var K=O.image,D=K.width*O.offset.x,T=K.height*O.offset.y,da=K.width*O.repeat.x,O=K.height*O.repeat.y,K=A/da,ha=y/O;E.save();E.translate(B.x,B.y);0!==F.rotation&&E.rotate(F.rotation);E.translate(-A/2,-y/2);E.scale(K,ha);E.translate(-D,-T);E.fillRect(D,T,da,O)}else q(F.color.getStyle()),E.save(),E.translate(B.x,B.y),0!==F.rotation&&E.rotate(F.rotation),E.scale(A,-y),E.fillRect(-0.5,-0.5,1,1);E.restore()}else F instanceof THREE.SpriteCanvasMaterial&&(m(F.color.getStyle()),
q(F.color.getStyle()),E.save(),E.translate(B.x,B.y),0!==F.rotation&&E.rotate(F.rotation),E.scale(A,y),F.program(E),E.restore())}else if(y instanceof THREE.RenderableLine){if(P=y.v1,Q=y.v2,P.positionScreen.x*=L,P.positionScreen.y*=w,Q.positionScreen.x*=L,Q.positionScreen.y*=w,pa.setFromPoints([P.positionScreen,Q.positionScreen]),!0===ya.isIntersectionBox(pa))if(B=P,F=Q,A=y,y=D,l(y.opacity),n(y.blending),E.beginPath(),E.moveTo(B.positionScreen.x,B.positionScreen.y),E.lineTo(F.positionScreen.x,F.positionScreen.y),
y instanceof THREE.LineBasicMaterial){p(y.linewidth);t(y.linecap);r(y.linejoin);if(y.vertexColors!==THREE.VertexColors)m(y.color.getStyle());else if(D=A.vertexColors[0].getStyle(),A=A.vertexColors[1].getStyle(),D===A)m(D);else{try{var ea=E.createLinearGradient(B.positionScreen.x,B.positionScreen.y,F.positionScreen.x,F.positionScreen.y);ea.addColorStop(0,D);ea.addColorStop(1,A)}catch(qa){ea=D}m(ea)}E.stroke();pa.expandByScalar(2*y.linewidth)}else y instanceof THREE.LineDashedMaterial&&(p(y.linewidth),
t(y.linecap),r(y.linejoin),m(y.color.getStyle()),u(y.dashSize,y.gapSize),E.stroke(),pa.expandByScalar(2*y.linewidth),u(null,null))}else if(y instanceof THREE.RenderableFace3){P=y.v1;Q=y.v2;oa=y.v3;if(-1>P.positionScreen.z||1<P.positionScreen.z)continue;if(-1>Q.positionScreen.z||1<Q.positionScreen.z)continue;if(-1>oa.positionScreen.z||1<oa.positionScreen.z)continue;P.positionScreen.x*=L;P.positionScreen.y*=w;Q.positionScreen.x*=L;Q.positionScreen.y*=w;oa.positionScreen.x*=L;oa.positionScreen.y*=w;
0<D.overdraw&&(k(P.positionScreen,Q.positionScreen,D.overdraw),k(Q.positionScreen,oa.positionScreen,D.overdraw),k(oa.positionScreen,P.positionScreen,D.overdraw));pa.setFromPoints([P.positionScreen,Q.positionScreen,oa.positionScreen]);if(!0===ya.isIntersectionBox(pa)){B=P;F=Q;A=oa;v.info.render.vertices+=3;v.info.render.faces++;l(D.opacity);n(D.blending);va=B.positionScreen.x;Ea=B.positionScreen.y;za=F.positionScreen.x;Ha=F.positionScreen.y;Ta=A.positionScreen.x;Ja=A.positionScreen.y;var T=va,da=Ea,
O=za,K=Ha,ha=Ta,ua=Ja;E.beginPath();E.moveTo(T,da);E.lineTo(O,K);E.lineTo(ha,ua);E.closePath();(D instanceof THREE.MeshLambertMaterial||D instanceof THREE.MeshPhongMaterial)&&null===D.map?(U.copy(D.color),ca.copy(D.emissive),D.vertexColors===THREE.FaceColors&&U.multiply(y.color),!1===D.wireframe&&D.shading===THREE.SmoothShading&&3===y.vertexNormalsLength?(Aa.copy(ja),ba.copy(ja),W.copy(ja),b(y.v1.positionWorld,y.vertexNormalsModel[0],Aa),b(y.v2.positionWorld,y.vertexNormalsModel[1],ba),b(y.v3.positionWorld,
y.vertexNormalsModel[2],W),Aa.multiply(U).add(ca),ba.multiply(U).add(ca),W.multiply(U).add(ca),Ka.addColors(ba,W).multiplyScalar(0.5),ia=i(Aa,ba,W,Ka),h(va,Ea,za,Ha,Ta,Ja,0,0,1,0,0,1,ia)):(sa.copy(ja),b(y.centroidModel,y.normalModel,sa),sa.multiply(U).add(ca),!0===D.wireframe?c(sa,D.wireframeLinewidth,D.wireframeLinecap,D.wireframeLinejoin):d(sa))):D instanceof THREE.MeshBasicMaterial||D instanceof THREE.MeshLambertMaterial||D instanceof THREE.MeshPhongMaterial?null!==D.map?D.map.mapping instanceof
THREE.UVMapping&&(Fa=y.uvs[0],g(va,Ea,za,Ha,Ta,Ja,Fa[0].x,Fa[0].y,Fa[1].x,Fa[1].y,Fa[2].x,Fa[2].y,D.map)):null!==D.envMap?D.envMap.mapping instanceof THREE.SphericalReflectionMapping&&(Na.copy(y.vertexNormalsModelView[0]),Ga=0.5*Na.x+0.5,Ba=0.5*Na.y+0.5,Na.copy(y.vertexNormalsModelView[1]),xa=0.5*Na.x+0.5,Va=0.5*Na.y+0.5,Na.copy(y.vertexNormalsModelView[2]),La=0.5*Na.x+0.5,Ma=0.5*Na.y+0.5,g(va,Ea,za,Ha,Ta,Ja,Ga,Ba,xa,Va,La,Ma,D.envMap)):(sa.copy(D.color),D.vertexColors===THREE.FaceColors&&sa.multiply(y.color),
!0===D.wireframe?c(sa,D.wireframeLinewidth,D.wireframeLinecap,D.wireframeLinejoin):d(sa)):D instanceof THREE.MeshDepthMaterial?(Oa=I.near,la=I.far,Aa.r=Aa.g=Aa.b=1-s(B.positionScreen.z*B.positionScreen.w,Oa,la),ba.r=ba.g=ba.b=1-s(F.positionScreen.z*F.positionScreen.w,Oa,la),W.r=W.g=W.b=1-s(A.positionScreen.z*A.positionScreen.w,Oa,la),Ka.addColors(ba,W).multiplyScalar(0.5),ia=i(Aa,ba,W,Ka),h(va,Ea,za,Ha,Ta,Ja,0,0,1,0,0,1,ia)):D instanceof THREE.MeshNormalMaterial&&(B=void 0,D.shading===THREE.FlatShading?
(B=y.normalModelView,sa.setRGB(B.x,B.y,B.z).multiplyScalar(0.5).addScalar(0.5),!0===D.wireframe?c(sa,D.wireframeLinewidth,D.wireframeLinecap,D.wireframeLinejoin):d(sa)):D.shading===THREE.SmoothShading&&(B=y.vertexNormalsModelView[0],Aa.setRGB(B.x,B.y,B.z).multiplyScalar(0.5).addScalar(0.5),B=y.vertexNormalsModelView[1],ba.setRGB(B.x,B.y,B.z).multiplyScalar(0.5).addScalar(0.5),B=y.vertexNormalsModelView[2],W.setRGB(B.x,B.y,B.z).multiplyScalar(0.5).addScalar(0.5),Ka.addColors(ba,W).multiplyScalar(0.5),
ia=i(Aa,ba,W,Ka),h(va,Ea,za,Ha,Ta,Ja,0,0,1,0,0,1,ia)))}}V.union(pa)}}E.setTransform(1,0,0,1,0,0)}}};THREE.ShaderChunk={fog_pars_fragment:"#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",fog_fragment:"#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",
envmap_pars_fragment:"#ifdef USE_ENVMAP\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform float flipEnvMap;\nuniform int combine;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nuniform bool useRefract;\nuniform float refractionRatio;\n#else\nvarying vec3 vReflect;\n#endif\n#endif",envmap_fragment:"#ifdef USE_ENVMAP\nvec3 reflectVec;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nreflectVec = refract( cameraToVertex, normal, refractionRatio );\n} else { \nreflectVec = reflect( cameraToVertex, normal );\n}\n#else\nreflectVec = vReflect;\n#endif\n#ifdef DOUBLE_SIDED\nfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\nvec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#else\nvec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#endif\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\nif ( combine == 1 ) {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );\n} else if ( combine == 2 ) {\ngl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;\n} else {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );\n}\n#endif",
envmap_pars_vertex:"#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n#ifdef USE_SKINNING\nvec4 worldPosition = modelMatrix * skinned;\n#endif\n#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n#endif\n#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n#endif\n#endif",
envmap_vertex:"#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\nworldNormal = normalize( worldNormal );\nvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, worldNormal );\n}\n#endif",map_particle_pars_fragment:"#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
map_particle_fragment:"#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n#endif",map_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\nuniform vec4 offsetRepeat;\n#endif",map_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
map_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",map_fragment:"#ifdef USE_MAP\nvec4 texelColor = texture2D( map, vUv );\n#ifdef GAMMA_INPUT\ntexelColor.xyz *= texelColor.xyz;\n#endif\ngl_FragColor = gl_FragColor * texelColor;\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif",lightmap_pars_vertex:"#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",
lightmap_fragment:"#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif",lightmap_vertex:"#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\nuniform sampler2D bumpMap;\nuniform float bumpScale;\nvec2 dHdxy_fwd() {\nvec2 dSTdx = dFdx( vUv );\nvec2 dSTdy = dFdy( vUv );\nfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\nfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\nfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\nreturn vec2( dBx, dBy );\n}\nvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\nvec3 vSigmaX = dFdx( surf_pos );\nvec3 vSigmaY = dFdy( surf_pos );\nvec3 vN = surf_norm;\nvec3 R1 = cross( vSigmaY, vN );\nvec3 R2 = cross( vN, vSigmaX );\nfloat fDet = dot( vSigmaX, R1 );\nvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\nreturn normalize( abs( fDet ) * surf_norm - vGrad );\n}\n#endif",
normalmap_pars_fragment:"#ifdef USE_NORMALMAP\nuniform sampler2D normalMap;\nuniform vec2 normalScale;\nvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\nvec3 q0 = dFdx( eye_pos.xyz );\nvec3 q1 = dFdy( eye_pos.xyz );\nvec2 st0 = dFdx( vUv.st );\nvec2 st1 = dFdy( vUv.st );\nvec3 S = normalize(  q0 * st1.t - q1 * st0.t );\nvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\nvec3 N = normalize( surf_norm );\nvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\nmapN.xy = normalScale * mapN.xy;\nmat3 tsn = mat3( S, T, N );\nreturn normalize( tsn * mapN );\n}\n#endif",
specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\nuniform sampler2D specularMap;\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\nvec4 texelSpecular = texture2D( specularMap, vUv );\nspecularStrength = texelSpecular.r;\n#else\nspecularStrength = 1.0;\n#endif",lights_lambert_pars_vertex:"uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif",
lights_lambert_vertex:"vLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\nvLightBack = vec3( 0.0 );\n#endif\ntransformedNormal = normalize( transformedNormal );\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, dirVector );\nvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\ndirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\ndirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n#ifdef DOUBLE_SIDED\nvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n#endif\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\npointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\npointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n#ifdef DOUBLE_SIDED\nvLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\nspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\nspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n#ifdef DOUBLE_SIDED\nvLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\nvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n#ifdef DOUBLE_SIDED\nvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n#endif\n}\n#endif\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n#ifdef DOUBLE_SIDED\nvLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n#endif",
lights_phong_pars_vertex:"#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif",
lights_phong_vertex:"#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nvPointLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nvSpotLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvWorldPosition = worldPosition.xyz;\n#endif",
lights_phong_pars_fragment:"uniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#else\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#else\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
lights_phong_fragment:"vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#ifdef DOUBLE_SIDED\nnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n#endif\n#ifdef USE_NORMALMAP\nnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\nnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse  = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vPointLight[ i ].xyz );\nfloat lDistance = vPointLight[ i ].w;\n#endif\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n#endif\npointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\nvec3 pointHalfVector = normalize( lVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse  = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vSpotLight[ i ].xyz );\nfloat lDistance = vSpotLight[ i ].w;\n#endif\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n#endif\nspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\nvec3 spotHalfVector = normalize( lVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse  = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, dirVector );\n#ifdef WRAP_AROUND\nfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n#endif\ndirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += diffuse * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularStrength * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularStrength * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n#endif",
color_pars_fragment:"#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_fragment:"#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, 1.0 );\n#endif",color_pars_vertex:"#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n#ifdef GAMMA_INPUT\nvColor = color * color;\n#else\nvColor = color;\n#endif\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n#ifdef BONE_TEXTURE\nuniform sampler2D boneTexture;\nuniform int boneTextureWidth;\nuniform int boneTextureHeight;\nmat4 getBoneMatrix( const in float i ) {\nfloat j = i * 4.0;\nfloat x = mod( j, float( boneTextureWidth ) );\nfloat y = floor( j / float( boneTextureWidth ) );\nfloat dx = 1.0 / float( boneTextureWidth );\nfloat dy = 1.0 / float( boneTextureHeight );\ny = dy * ( y + 0.5 );\nvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\nvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\nvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\nvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\nmat4 bone = mat4( v1, v2, v3, v4 );\nreturn bone;\n}\n#else\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\nmat4 getBoneMatrix( const in float i ) {\nmat4 bone = boneGlobalMatrices[ int(i) ];\nreturn bone;\n}\n#endif\n#endif",
skinbase_vertex:"#ifdef USE_SKINNING\nmat4 boneMatX = getBoneMatrix( skinIndex.x );\nmat4 boneMatY = getBoneMatrix( skinIndex.y );\n#endif",skinning_vertex:"#ifdef USE_SKINNING\n#ifdef USE_MORPHTARGETS\nvec4 skinVertex = vec4( morphed, 1.0 );\n#else\nvec4 skinVertex = vec4( position, 1.0 );\n#endif\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n#ifndef USE_MORPHNORMALS\nuniform float morphTargetInfluences[ 8 ];\n#else\nuniform float morphTargetInfluences[ 4 ];\n#endif\n#endif",
morphtarget_vertex:"#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n#ifndef USE_MORPHNORMALS\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n#endif\nmorphed += position;\n#endif",
default_vertex:"vec4 mvPosition;\n#ifdef USE_SKINNING\nmvPosition = modelViewMatrix * skinned;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( position, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\nvec3 morphedNormal = vec3( 0.0 );\nmorphedNormal +=  ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\nmorphedNormal +=  ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\nmorphedNormal +=  ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\nmorphedNormal +=  ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\nmorphedNormal += normal;\n#endif",
skinnormal_vertex:"#ifdef USE_SKINNING\nmat4 skinMatrix = skinWeight.x * boneMatX;\nskinMatrix \t+= skinWeight.y * boneMatY;\n#ifdef USE_MORPHNORMALS\nvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n#else\nvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n#endif\n#endif",defaultnormal_vertex:"vec3 objectNormal;\n#ifdef USE_SKINNING\nobjectNormal = skinnedNormal.xyz;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )\nobjectNormal = morphedNormal;\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )\nobjectNormal = normal;\n#endif\n#ifdef FLIP_SIDED\nobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;",
shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\nuniform sampler2D shadowMap[ MAX_SHADOWS ];\nuniform vec2 shadowMapSize[ MAX_SHADOWS ];\nuniform float shadowDarkness[ MAX_SHADOWS ];\nuniform float shadowBias[ MAX_SHADOWS ];\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nfloat unpackDepth( const in vec4 rgba_depth ) {\nconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\nfloat depth = dot( rgba_depth, bit_shift );\nreturn depth;\n}\n#endif",shadowmap_fragment:"#ifdef USE_SHADOWMAP\n#ifdef SHADOWMAP_DEBUG\nvec3 frustumColors[3];\nfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\nfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\nfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n#endif\n#ifdef SHADOWMAP_CASCADE\nint inFrustumCount = 0;\n#endif\nfloat fDepth;\nvec3 shadowColor = vec3( 1.0 );\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\nbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\nbool inFrustum = all( inFrustumVec );\n#ifdef SHADOWMAP_CASCADE\ninFrustumCount += int( inFrustum );\nbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n#else\nbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n#endif\nbool frustumTest = all( frustumTestVec );\nif ( frustumTest ) {\nshadowCoord.z += shadowBias[ i ];\n#if defined( SHADOWMAP_TYPE_PCF )\nfloat shadow = 0.0;\nconst float shadowDelta = 1.0 / 9.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.25 * xPixelOffset;\nfloat dy0 = -1.25 * yPixelOffset;\nfloat dx1 = 1.25 * xPixelOffset;\nfloat dy1 = 1.25 * yPixelOffset;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\nfloat shadow = 0.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.0 * xPixelOffset;\nfloat dy0 = -1.0 * yPixelOffset;\nfloat dx1 = 1.0 * xPixelOffset;\nfloat dy1 = 1.0 * yPixelOffset;\nmat3 shadowKernel;\nmat3 depthKernel;\ndepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\ndepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\ndepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\ndepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\ndepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\ndepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\ndepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\ndepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\ndepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nvec3 shadowZ = vec3( shadowCoord.z );\nshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\nshadowKernel[0] *= vec3(0.25);\nshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\nshadowKernel[1] *= vec3(0.25);\nshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\nshadowKernel[2] *= vec3(0.25);\nvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\nshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\nshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\nvec4 shadowValues;\nshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\nshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\nshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\nshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\nshadow = dot( shadowValues, vec4( 1.0 ) );\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#else\nvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < shadowCoord.z )\nshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n#endif\n}\n#ifdef SHADOWMAP_DEBUG\n#ifdef SHADOWMAP_CASCADE\nif ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n#else\nif ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n#endif\n#endif\n}\n#ifdef GAMMA_OUTPUT\nshadowColor *= shadowColor;\n#endif\ngl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n#endif",
shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n#endif",shadowmap_vertex:"#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif",alphatest_fragment:"#ifdef ALPHATEST\nif ( gl_FragColor.a < ALPHATEST ) discard;\n#endif",linear_to_gamma_fragment:"#ifdef GAMMA_OUTPUT\ngl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n#endif"};THREE.UniformsUtils={merge:function(a){var b,c,d,e={};for(b=0;b<a.length;b++)for(c in d=this.clone(a[b]),d)e[c]=d[c];return e},clone:function(a){var b,c,d,e={};for(b in a)for(c in e[b]={},a[b])d=a[b][c],e[b][c]=d instanceof THREE.Color||d instanceof THREE.Vector2||d instanceof THREE.Vector3||d instanceof THREE.Vector4||d instanceof THREE.Matrix4||d instanceof THREE.Texture?d.clone():d instanceof Array?d.slice():d;return e}};THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},lightMap:{type:"t",value:null},specularMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"f",value:-1},useRefract:{type:"i",value:0},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:0.98},combine:{type:"i",value:0},morphTargetInfluences:{type:"f",value:0}},bump:{bumpMap:{type:"t",
value:null},bumpScale:{type:"f",value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},fog:{fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},lights:{ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},hemisphereLightDirection:{type:"fv",value:[]},hemisphereLightSkyColor:{type:"fv",
value:[]},hemisphereLightGroundColor:{type:"fv",value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]},spotLightColor:{type:"fv",value:[]},spotLightPosition:{type:"fv",value:[]},spotLightDirection:{type:"fv",value:[]},spotLightDistance:{type:"fv1",value:[]},spotLightAngleCos:{type:"fv1",value:[]},spotLightExponent:{type:"fv1",value:[]}},particle:{psColor:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},size:{type:"f",
value:1},scale:{type:"f",value:1},map:{type:"t",value:null},fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},shadowmap:{shadowMap:{type:"tv",value:[]},shadowMapSize:{type:"v2v",value:[]},shadowBias:{type:"fv1",value:[]},shadowDarkness:{type:"fv1",value:[]},shadowMatrix:{type:"m4v",value:[]}}};THREE.ShaderLib={basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:[THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,
THREE.ShaderChunk.skinbase_vertex,"#ifdef USE_ENVMAP",THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,
THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,
THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif",
THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_lambert_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,
THREE.ShaderChunk.defaultnormal_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_lambert_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,
THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"#ifdef DOUBLE_SIDED\nif ( gl_FrontFacing )\ngl_FragColor.xyz *= vLightFront;\nelse\ngl_FragColor.xyz *= vLightBack;\n#else\ngl_FragColor.xyz *= vLightFront;\n#endif",THREE.ShaderChunk.lightmap_fragment,
THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.bump,THREE.UniformsLib.normalmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},specular:{type:"c",
value:new THREE.Color(1118481)},shininess:{type:"f",value:30},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define PHONG\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_phong_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,
"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"vNormal = normalize( transformedNormal );",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,"vViewPosition = -mvPosition.xyz;",THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,
THREE.ShaderChunk.lights_phong_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_phong_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,
THREE.ShaderChunk.bumpmap_pars_fragment,THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lights_phong_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,
THREE.ShaderChunk.fog_fragment,"}"].join("\n")},particle_basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.particle,THREE.UniformsLib.shadowmap]),vertexShader:["uniform float size;\nuniform float scale;",THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;",
THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 psColor;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,"void main() {\ngl_FragColor = vec4( psColor, opacity );",THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.shadowmap_fragment,
THREE.ShaderChunk.fog_fragment,"}"].join("\n")},dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,{scale:{type:"f",value:1},dashSize:{type:"f",value:1},totalSize:{type:"f",value:2}}]),vertexShader:["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;",THREE.ShaderChunk.color_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"vLineDistance = scale * lineDistance;\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n}"].join("\n"),
fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\nif ( mod( vLineDistance, totalSize ) > dashSize ) {\ndiscard;\n}\ngl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2E3},opacity:{type:"f",
value:1}},vertexShader:"void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}"},normal:{uniforms:{opacity:{type:"f",value:1}},vertexShader:["varying vec3 vNormal;",THREE.ShaderChunk.morphtarget_pars_vertex,"void main() {\nvNormal = normalize( normalMatrix * normal );",
THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,"}"].join("\n"),fragmentShader:"uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}"},normalmap:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{enableAO:{type:"i",value:0},enableDiffuse:{type:"i",value:0},enableSpecular:{type:"i",value:0},enableReflection:{type:"i",value:0},enableDisplacement:{type:"i",
value:0},tDisplacement:{type:"t",value:null},tDiffuse:{type:"t",value:null},tCube:{type:"t",value:null},tNormal:{type:"t",value:null},tSpecular:{type:"t",value:null},tAO:{type:"t",value:null},uNormalScale:{type:"v2",value:new THREE.Vector2(1,1)},uDisplacementBias:{type:"f",value:0},uDisplacementScale:{type:"f",value:1},diffuse:{type:"c",value:new THREE.Color(16777215)},specular:{type:"c",value:new THREE.Color(1118481)},ambient:{type:"c",value:new THREE.Color(16777215)},shininess:{type:"f",value:30},
opacity:{type:"f",value:1},useRefract:{type:"i",value:0},refractionRatio:{type:"f",value:0.98},reflectivity:{type:"f",value:0.5},uOffset:{type:"v2",value:new THREE.Vector2(0,0)},uRepeat:{type:"v2",value:new THREE.Vector2(1,1)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),fragmentShader:["uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform vec2 uNormalScale;\nuniform bool useRefract;\nuniform float refractionRatio;\nuniform float reflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3( 1.0 ), opacity );\nvec3 specularTex = vec3( 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse ) {\n#ifdef GAMMA_INPUT\nvec4 texelColor = texture2D( tDiffuse, vUv );\ntexelColor.xyz *= texelColor.xyz;\ngl_FragColor = gl_FragColor * texelColor;\n#else\ngl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\n#endif\n}\nif( enableAO ) {\n#ifdef GAMMA_INPUT\nvec4 aoColor = texture2D( tAO, vUv );\naoColor.xyz *= aoColor.xyz;\ngl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\n#endif\n}\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\nvec3 finalNormal = tsb * normalTex;\n#ifdef FLIP_SIDED\nfinalNormal = -finalNormal;\n#endif\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\nfloat pointDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\npointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\npointVector = normalize( pointVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\n#endif\npointDiffuse += pointDistance * pointLightColor[ i ] * diffuse * pointDiffuseWeight;\nvec3 pointHalfVector = normalize( pointVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, shininess ), 0.0 );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\nfloat spotDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\nspotVector = normalize( spotVector );\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\n#endif\nspotDiffuse += spotDistance * spotLightColor[ i ] * diffuse * spotDiffuseWeight * spotEffect;\nvec3 spotHalfVector = normalize( spotVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, shininess ), 0.0 );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\n#ifdef WRAP_AROUND\nfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\nfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\n#endif\ndirDiffuse += directionalLightColor[ i ] * diffuse * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, shininess ), 0.0 );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += diffuse * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n#endif\nif ( enableReflection ) {\nvec3 vReflect;\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, normal, refractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, normal );\n}\nvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * reflectivity );\n}",
THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n"),vertexShader:["attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\nuniform bool enableDisplacement;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,"#ifdef USE_SKINNING\nvNormal = normalize( normalMatrix * skinnedNormal.xyz );\nvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\nvTangent = normalize( normalMatrix * skinnedTangent.xyz );\n#else\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\n#endif\nvBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );\nvUv = uv * uRepeat + uOffset;\nvec3 displacedPosition;\n#ifdef VERTEX_TEXTURES\nif ( enableDisplacement ) {\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\ndisplacedPosition = position + normalize( normal ) * df;\n} else {\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n}\n#else\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n#endif\nvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\nvec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\nvWorldPosition = worldPosition.xyz;\nvViewPosition = -mvPosition.xyz;\n#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif\n}"].join("\n")},
cube:{uniforms:{tCube:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:"varying vec3 vWorldPosition;\nvoid main() {\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\nvWorldPosition = worldPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\nvoid main() {\ngl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n}"},
depthRGBA:{uniforms:{},vertexShader:[THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,"}"].join("\n"),fragmentShader:"vec4 pack_depth( const in float depth ) {\nconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\nconst vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\nvec4 res = fract( depth * bit_shift );\nres -= res.xxyz * bit_mask;\nreturn res;\n}\nvoid main() {\ngl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n}"}};THREE.WebGLRenderer=function(a){function b(a,b){var c=a.vertices.length,d=b.material;if(d.attributes){void 0===a.__webglCustomAttributesList&&(a.__webglCustomAttributesList=[]);for(var e in d.attributes){var f=d.attributes[e];if(!f.__webglInitialized||f.createUniqueBuffers){f.__webglInitialized=!0;var g=1;"v2"===f.type?g=2:"v3"===f.type?g=3:"v4"===f.type?g=4:"c"===f.type&&(g=3);f.size=g;f.array=new Float32Array(c*g);f.buffer=j.createBuffer();f.buffer.belongsToAttribute=e;f.needsUpdate=!0}a.__webglCustomAttributesList.push(f)}}}
function c(a,b){var c=b.geometry,g=a.faces3,h=3*g.length,i=1*g.length,k=3*g.length,g=d(b,a),l=f(g),m=e(g),n=g.vertexColors?g.vertexColors:!1;a.__vertexArray=new Float32Array(3*h);m&&(a.__normalArray=new Float32Array(3*h));c.hasTangents&&(a.__tangentArray=new Float32Array(4*h));n&&(a.__colorArray=new Float32Array(3*h));l&&(0<c.faceVertexUvs.length&&(a.__uvArray=new Float32Array(2*h)),1<c.faceVertexUvs.length&&(a.__uv2Array=new Float32Array(2*h)));b.geometry.skinWeights.length&&b.geometry.skinIndices.length&&
(a.__skinIndexArray=new Float32Array(4*h),a.__skinWeightArray=new Float32Array(4*h));a.__faceArray=new Uint16Array(3*i);a.__lineArray=new Uint16Array(2*k);if(a.numMorphTargets){a.__morphTargetsArrays=[];c=0;for(l=a.numMorphTargets;c<l;c++)a.__morphTargetsArrays.push(new Float32Array(3*h))}if(a.numMorphNormals){a.__morphNormalsArrays=[];c=0;for(l=a.numMorphNormals;c<l;c++)a.__morphNormalsArrays.push(new Float32Array(3*h))}a.__webglFaceCount=3*i;a.__webglLineCount=2*k;if(g.attributes){void 0===a.__webglCustomAttributesList&&
(a.__webglCustomAttributesList=[]);for(var p in g.attributes){var i=g.attributes[p],k={},q;for(q in i)k[q]=i[q];if(!k.__webglInitialized||k.createUniqueBuffers)k.__webglInitialized=!0,c=1,"v2"===k.type?c=2:"v3"===k.type?c=3:"v4"===k.type?c=4:"c"===k.type&&(c=3),k.size=c,k.array=new Float32Array(h*c),k.buffer=j.createBuffer(),k.buffer.belongsToAttribute=p,i.needsUpdate=!0,k.__original=i;a.__webglCustomAttributesList.push(k)}}a.__inittedArrays=!0}function d(a,b){return a.material instanceof THREE.MeshFaceMaterial?
a.material.materials[b.materialIndex]:a.material}function e(a){return a instanceof THREE.MeshBasicMaterial&&!a.envMap||a instanceof THREE.MeshDepthMaterial?!1:a&&void 0!==a.shading&&a.shading===THREE.SmoothShading?THREE.SmoothShading:THREE.FlatShading}function f(a){return a.map||a.lightMap||a.bumpMap||a.normalMap||a.specularMap||a instanceof THREE.ShaderMaterial?!0:!1}function g(a){Ma[a]||(j.enableVertexAttribArray(a),Ma[a]=!0)}function h(){for(var a in Ma)Ma[a]&&(j.disableVertexAttribArray(a),Ma[a]=
!1)}function i(a,b){return a.z!==b.z?b.z-a.z:a.id-b.id}function k(a,b){return b[0]-a[0]}function l(a,b,c){if(a.length)for(var d=0,e=a.length;d<e;d++)Ha=oa=null,Ea=za=Aa=sa=wa=ca=ba=-1,Za=!0,a[d].render(b,c,Va,La),Ha=oa=null,Ea=za=Aa=sa=wa=ca=ba=-1,Za=!0}function n(a,b,c,d,e,f,g,h){var j,i,k,l;b?(i=a.length-1,l=b=-1):(i=0,b=a.length,l=1);for(var m=i;m!==b;m+=l)if(j=a[m],j.render){i=j.object;k=j.buffer;if(h)j=h;else{j=j[c];if(!j)continue;g&&I.setBlending(j.blending,j.blendEquation,j.blendSrc,j.blendDst);
I.setDepthTest(j.depthTest);I.setDepthWrite(j.depthWrite);x(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits)}I.setMaterialFaces(j);k instanceof THREE.BufferGeometry?I.renderBufferDirect(d,e,f,j,k,i):I.renderBuffer(d,e,f,j,k,i)}}function p(a,b,c,d,e,f,g){for(var h,j,i=0,k=a.length;i<k;i++)if(h=a[i],j=h.object,j.visible){if(g)h=g;else{h=h[b];if(!h)continue;f&&I.setBlending(h.blending,h.blendEquation,h.blendSrc,h.blendDst);I.setDepthTest(h.depthTest);I.setDepthWrite(h.depthWrite);x(h.polygonOffset,
h.polygonOffsetFactor,h.polygonOffsetUnits)}I.renderImmediateObject(c,d,e,h,j)}}function t(a,d){var e,f,g,h;if(void 0===a.__webglInit&&(a.__webglInit=!0,a._modelViewMatrix=new THREE.Matrix4,a._normalMatrix=new THREE.Matrix3,void 0!==a.geometry&&void 0===a.geometry.__webglInit&&(a.geometry.__webglInit=!0,a.geometry.addEventListener("dispose",Lb)),f=a.geometry,void 0!==f))if(f instanceof THREE.BufferGeometry){var i,k;for(i in f.attributes)k="index"===i?j.ELEMENT_ARRAY_BUFFER:j.ARRAY_BUFFER,h=f.attributes[i],
void 0===h.numItems&&(h.numItems=h.array.length),h.buffer=j.createBuffer(),j.bindBuffer(k,h.buffer),j.bufferData(k,h.array,j.STATIC_DRAW)}else if(a instanceof THREE.Mesh){g=a.material;if(void 0===f.geometryGroups){i=f;var l,m,n;k={};var p=i.morphTargets.length,q=i.morphNormals.length,t=g instanceof THREE.MeshFaceMaterial;i.geometryGroups={};g=0;for(l=i.faces.length;g<l;g++)m=i.faces[g],m=t?m.materialIndex:0,void 0===k[m]&&(k[m]={hash:m,counter:0}),n=k[m].hash+"_"+k[m].counter,void 0===i.geometryGroups[n]&&
(i.geometryGroups[n]={faces3:[],materialIndex:m,vertices:0,numMorphTargets:p,numMorphNormals:q}),65535<i.geometryGroups[n].vertices+3&&(k[m].counter+=1,n=k[m].hash+"_"+k[m].counter,void 0===i.geometryGroups[n]&&(i.geometryGroups[n]={faces3:[],materialIndex:m,vertices:0,numMorphTargets:p,numMorphNormals:q})),i.geometryGroups[n].faces3.push(g),i.geometryGroups[n].vertices+=3;i.geometryGroupsList=[];for(h in i.geometryGroups)i.geometryGroups[h].id=Ta++,i.geometryGroupsList.push(i.geometryGroups[h])}for(e in f.geometryGroups)if(h=
f.geometryGroups[e],!h.__webglVertexBuffer){i=h;i.__webglVertexBuffer=j.createBuffer();i.__webglNormalBuffer=j.createBuffer();i.__webglTangentBuffer=j.createBuffer();i.__webglColorBuffer=j.createBuffer();i.__webglUVBuffer=j.createBuffer();i.__webglUV2Buffer=j.createBuffer();i.__webglSkinIndicesBuffer=j.createBuffer();i.__webglSkinWeightsBuffer=j.createBuffer();i.__webglFaceBuffer=j.createBuffer();i.__webglLineBuffer=j.createBuffer();p=k=void 0;if(i.numMorphTargets){i.__webglMorphTargetsBuffers=[];
k=0;for(p=i.numMorphTargets;k<p;k++)i.__webglMorphTargetsBuffers.push(j.createBuffer())}if(i.numMorphNormals){i.__webglMorphNormalsBuffers=[];k=0;for(p=i.numMorphNormals;k<p;k++)i.__webglMorphNormalsBuffers.push(j.createBuffer())}I.info.memory.geometries++;c(h,a);f.verticesNeedUpdate=!0;f.morphTargetsNeedUpdate=!0;f.elementsNeedUpdate=!0;f.uvsNeedUpdate=!0;f.normalsNeedUpdate=!0;f.tangentsNeedUpdate=!0;f.colorsNeedUpdate=!0}}else a instanceof THREE.Line?f.__webglVertexBuffer||(h=f,h.__webglVertexBuffer=
j.createBuffer(),h.__webglColorBuffer=j.createBuffer(),h.__webglLineDistanceBuffer=j.createBuffer(),I.info.memory.geometries++,h=f,i=h.vertices.length,h.__vertexArray=new Float32Array(3*i),h.__colorArray=new Float32Array(3*i),h.__lineDistanceArray=new Float32Array(1*i),h.__webglLineCount=i,b(h,a),f.verticesNeedUpdate=!0,f.colorsNeedUpdate=!0,f.lineDistancesNeedUpdate=!0):a instanceof THREE.ParticleSystem&&!f.__webglVertexBuffer&&(h=f,h.__webglVertexBuffer=j.createBuffer(),h.__webglColorBuffer=j.createBuffer(),
I.info.memory.geometries++,h=f,i=h.vertices.length,h.__vertexArray=new Float32Array(3*i),h.__colorArray=new Float32Array(3*i),h.__sortArray=[],h.__webglParticleCount=i,b(h,a),f.verticesNeedUpdate=!0,f.colorsNeedUpdate=!0);if(void 0===a.__webglActive){if(a instanceof THREE.Mesh)if(f=a.geometry,f instanceof THREE.BufferGeometry)r(d.__webglObjects,f,a);else{if(f instanceof THREE.Geometry)for(e in f.geometryGroups)h=f.geometryGroups[e],r(d.__webglObjects,h,a)}else a instanceof THREE.Line||a instanceof
THREE.ParticleSystem?(f=a.geometry,r(d.__webglObjects,f,a)):a instanceof THREE.ImmediateRenderObject||a.immediateRenderCallback?d.__webglObjectsImmediate.push({id:null,object:a,opaque:null,transparent:null,z:0}):a instanceof THREE.Sprite?d.__webglSprites.push(a):a instanceof THREE.LensFlare&&d.__webglFlares.push(a);a.__webglActive=!0}}function r(a,b,c){a.push({id:null,buffer:b,object:c,opaque:null,transparent:null,z:0})}function m(a){for(var b in a.attributes)if(a.attributes[b].needsUpdate)return!0;
return!1}function q(a){for(var b in a.attributes)a.attributes[b].needsUpdate=!1}function u(a,b){a instanceof THREE.Mesh||a instanceof THREE.ParticleSystem||a instanceof THREE.Line?s(b.__webglObjects,a):a instanceof THREE.Sprite?v(b.__webglSprites,a):a instanceof THREE.LensFlare?v(b.__webglFlares,a):(a instanceof THREE.ImmediateRenderObject||a.immediateRenderCallback)&&s(b.__webglObjectsImmediate,a);delete a.__webglActive}function s(a,b){for(var c=a.length-1;0<=c;c--)a[c].object===b&&a.splice(c,1)}
function v(a,b){for(var c=a.length-1;0<=c;c--)a[c]===b&&a.splice(c,1)}function z(a,b,c,d,e){Ja=0;d.needsUpdate&&(d.program&&Eb(d),I.initMaterial(d,b,c,e),d.needsUpdate=!1);d.morphTargets&&!e.__webglMorphTargetInfluences&&(e.__webglMorphTargetInfluences=new Float32Array(I.maxMorphTargets));var f=!1,g=d.program,h=g.uniforms,i=d.uniforms;g!==oa&&(j.useProgram(g),oa=g,f=!0);d.id!==Ea&&(Ea=d.id,f=!0);if(f||a!==Ha)j.uniformMatrix4fv(h.projectionMatrix,!1,a.projectionMatrix.elements),a!==Ha&&(Ha=a);if(d.skinning)if(tb&&
e.useVertexTexture){if(null!==h.boneTexture){var k=G();j.uniform1i(h.boneTexture,k);I.setTexture(e.boneTexture,k)}null!==h.boneTextureWidth&&j.uniform1i(h.boneTextureWidth,e.boneTextureWidth);null!==h.boneTextureHeight&&j.uniform1i(h.boneTextureHeight,e.boneTextureHeight)}else null!==h.boneGlobalMatrices&&j.uniformMatrix4fv(h.boneGlobalMatrices,!1,e.boneMatrices);if(f){c&&d.fog&&(i.fogColor.value=c.color,c instanceof THREE.Fog?(i.fogNear.value=c.near,i.fogFar.value=c.far):c instanceof THREE.FogExp2&&
(i.fogDensity.value=c.density));if(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d.lights){if(Za){for(var l,m=k=0,n=0,p,q,t,r=Na,s=r.directional.colors,u=r.directional.positions,v=r.point.colors,z=r.point.positions,y=r.point.distances,x=r.spot.colors,B=r.spot.positions,F=r.spot.distances,E=r.spot.directions,L=r.spot.anglesCos,A=r.spot.exponents,O=r.hemi.skyColors,Q=r.hemi.groundColors,K=r.hemi.positions,P=0,W=0,T=0,va=0,sa=0,Y=0,Z=0,X=0,U=l=0,c=t=U=0,f=b.length;c<f;c++)l=
b[c],l.onlyShadow||(p=l.color,q=l.intensity,t=l.distance,l instanceof THREE.AmbientLight?l.visible&&(I.gammaInput?(k+=p.r*p.r,m+=p.g*p.g,n+=p.b*p.b):(k+=p.r,m+=p.g,n+=p.b)):l instanceof THREE.DirectionalLight?(sa+=1,l.visible&&(fa.setFromMatrixPosition(l.matrixWorld),ja.setFromMatrixPosition(l.target.matrixWorld),fa.sub(ja),fa.normalize(),0===fa.x&&0===fa.y&&0===fa.z||(l=3*P,u[l]=fa.x,u[l+1]=fa.y,u[l+2]=fa.z,I.gammaInput?N(s,l,p,q*q):C(s,l,p,q),P+=1))):l instanceof THREE.PointLight?(Y+=1,l.visible&&
(U=3*W,I.gammaInput?N(v,U,p,q*q):C(v,U,p,q),ja.setFromMatrixPosition(l.matrixWorld),z[U]=ja.x,z[U+1]=ja.y,z[U+2]=ja.z,y[W]=t,W+=1)):l instanceof THREE.SpotLight?(Z+=1,l.visible&&(U=3*T,I.gammaInput?N(x,U,p,q*q):C(x,U,p,q),ja.setFromMatrixPosition(l.matrixWorld),B[U]=ja.x,B[U+1]=ja.y,B[U+2]=ja.z,F[T]=t,fa.copy(ja),ja.setFromMatrixPosition(l.target.matrixWorld),fa.sub(ja),fa.normalize(),E[U]=fa.x,E[U+1]=fa.y,E[U+2]=fa.z,L[T]=Math.cos(l.angle),A[T]=l.exponent,T+=1)):l instanceof THREE.HemisphereLight&&
(X+=1,l.visible&&(fa.setFromMatrixPosition(l.matrixWorld),fa.normalize(),0===fa.x&&0===fa.y&&0===fa.z||(t=3*va,K[t]=fa.x,K[t+1]=fa.y,K[t+2]=fa.z,p=l.color,l=l.groundColor,I.gammaInput?(q*=q,N(O,t,p,q),N(Q,t,l,q)):(C(O,t,p,q),C(Q,t,l,q)),va+=1))));c=3*P;for(f=Math.max(s.length,3*sa);c<f;c++)s[c]=0;c=3*W;for(f=Math.max(v.length,3*Y);c<f;c++)v[c]=0;c=3*T;for(f=Math.max(x.length,3*Z);c<f;c++)x[c]=0;c=3*va;for(f=Math.max(O.length,3*X);c<f;c++)O[c]=0;c=3*va;for(f=Math.max(Q.length,3*X);c<f;c++)Q[c]=0;r.directional.length=
P;r.point.length=W;r.spot.length=T;r.hemi.length=va;r.ambient[0]=k;r.ambient[1]=m;r.ambient[2]=n;Za=!1}c=Na;i.ambientLightColor.value=c.ambient;i.directionalLightColor.value=c.directional.colors;i.directionalLightDirection.value=c.directional.positions;i.pointLightColor.value=c.point.colors;i.pointLightPosition.value=c.point.positions;i.pointLightDistance.value=c.point.distances;i.spotLightColor.value=c.spot.colors;i.spotLightPosition.value=c.spot.positions;i.spotLightDistance.value=c.spot.distances;
i.spotLightDirection.value=c.spot.directions;i.spotLightAngleCos.value=c.spot.anglesCos;i.spotLightExponent.value=c.spot.exponents;i.hemisphereLightSkyColor.value=c.hemi.skyColors;i.hemisphereLightGroundColor.value=c.hemi.groundColors;i.hemisphereLightDirection.value=c.hemi.positions}if(d instanceof THREE.MeshBasicMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshPhongMaterial){i.opacity.value=d.opacity;I.gammaInput?i.diffuse.value.copyGammaToLinear(d.color):i.diffuse.value=
d.color;i.map.value=d.map;i.lightMap.value=d.lightMap;i.specularMap.value=d.specularMap;d.bumpMap&&(i.bumpMap.value=d.bumpMap,i.bumpScale.value=d.bumpScale);d.normalMap&&(i.normalMap.value=d.normalMap,i.normalScale.value.copy(d.normalScale));var V;d.map?V=d.map:d.specularMap?V=d.specularMap:d.normalMap?V=d.normalMap:d.bumpMap&&(V=d.bumpMap);void 0!==V&&(c=V.offset,V=V.repeat,i.offsetRepeat.value.set(c.x,c.y,V.x,V.y));i.envMap.value=d.envMap;i.flipEnvMap.value=d.envMap instanceof THREE.WebGLRenderTargetCube?
1:-1;i.reflectivity.value=d.reflectivity;i.refractionRatio.value=d.refractionRatio;i.combine.value=d.combine;i.useRefract.value=d.envMap&&d.envMap.mapping instanceof THREE.CubeRefractionMapping}d instanceof THREE.LineBasicMaterial?(i.diffuse.value=d.color,i.opacity.value=d.opacity):d instanceof THREE.LineDashedMaterial?(i.diffuse.value=d.color,i.opacity.value=d.opacity,i.dashSize.value=d.dashSize,i.totalSize.value=d.dashSize+d.gapSize,i.scale.value=d.scale):d instanceof THREE.ParticleSystemMaterial?
(i.psColor.value=d.color,i.opacity.value=d.opacity,i.size.value=d.size,i.scale.value=H.height/2,i.map.value=d.map):d instanceof THREE.MeshPhongMaterial?(i.shininess.value=d.shininess,I.gammaInput?(i.ambient.value.copyGammaToLinear(d.ambient),i.emissive.value.copyGammaToLinear(d.emissive),i.specular.value.copyGammaToLinear(d.specular)):(i.ambient.value=d.ambient,i.emissive.value=d.emissive,i.specular.value=d.specular),d.wrapAround&&i.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshLambertMaterial?
(I.gammaInput?(i.ambient.value.copyGammaToLinear(d.ambient),i.emissive.value.copyGammaToLinear(d.emissive)):(i.ambient.value=d.ambient,i.emissive.value=d.emissive),d.wrapAround&&i.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshDepthMaterial?(i.mNear.value=a.near,i.mFar.value=a.far,i.opacity.value=d.opacity):d instanceof THREE.MeshNormalMaterial&&(i.opacity.value=d.opacity);if(e.receiveShadow&&!d._shadowPass&&i.shadowMatrix){c=V=0;for(f=b.length;c<f;c++)if(k=b[c],k.castShadow&&(k instanceof
THREE.SpotLight||k instanceof THREE.DirectionalLight&&!k.shadowCascade))i.shadowMap.value[V]=k.shadowMap,i.shadowMapSize.value[V]=k.shadowMapSize,i.shadowMatrix.value[V]=k.shadowMatrix,i.shadowDarkness.value[V]=k.shadowDarkness,i.shadowBias.value[V]=k.shadowBias,V++}b=d.uniformsList;i=0;for(V=b.length;i<V;i++)if(f=g.uniforms[b[i][1]])if(c=b[i][0],m=c.type,k=c.value,"i"===m)j.uniform1i(f,k);else if("f"===m)j.uniform1f(f,k);else if("v2"===m)j.uniform2f(f,k.x,k.y);else if("v3"===m)j.uniform3f(f,k.x,
k.y,k.z);else if("v4"===m)j.uniform4f(f,k.x,k.y,k.z,k.w);else if("c"===m)j.uniform3f(f,k.r,k.g,k.b);else if("iv1"===m)j.uniform1iv(f,k);else if("iv"===m)j.uniform3iv(f,k);else if("fv1"===m)j.uniform1fv(f,k);else if("fv"===m)j.uniform3fv(f,k);else if("v2v"===m){void 0===c._array&&(c._array=new Float32Array(2*k.length));m=0;for(n=k.length;m<n;m++)r=2*m,c._array[r]=k[m].x,c._array[r+1]=k[m].y;j.uniform2fv(f,c._array)}else if("v3v"===m){void 0===c._array&&(c._array=new Float32Array(3*k.length));m=0;for(n=
k.length;m<n;m++)r=3*m,c._array[r]=k[m].x,c._array[r+1]=k[m].y,c._array[r+2]=k[m].z;j.uniform3fv(f,c._array)}else if("v4v"===m){void 0===c._array&&(c._array=new Float32Array(4*k.length));m=0;for(n=k.length;m<n;m++)r=4*m,c._array[r]=k[m].x,c._array[r+1]=k[m].y,c._array[r+2]=k[m].z,c._array[r+3]=k[m].w;j.uniform4fv(f,c._array)}else if("m4"===m)void 0===c._array&&(c._array=new Float32Array(16)),k.flattenToArray(c._array),j.uniformMatrix4fv(f,!1,c._array);else if("m4v"===m){void 0===c._array&&(c._array=
new Float32Array(16*k.length));m=0;for(n=k.length;m<n;m++)k[m].flattenToArrayOffset(c._array,16*m);j.uniformMatrix4fv(f,!1,c._array)}else if("t"===m){if(r=k,k=G(),j.uniform1i(f,k),r)if(r.image instanceof Array&&6===r.image.length){if(c=r,f=k,6===c.image.length)if(c.needsUpdate){c.image.__webglTextureCube||(c.addEventListener("dispose",Bb),c.image.__webglTextureCube=j.createTexture(),I.info.memory.textures++);j.activeTexture(j.TEXTURE0+f);j.bindTexture(j.TEXTURE_CUBE_MAP,c.image.__webglTextureCube);
j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,c.flipY);f=c instanceof THREE.CompressedTexture;k=[];for(m=0;6>m;m++)I.autoScaleCubemaps&&!f?(n=k,r=m,s=c.image[m],v=Yb,s.width<=v&&s.height<=v||(z=Math.max(s.width,s.height),u=Math.floor(s.width*v/z),v=Math.floor(s.height*v/z),z=document.createElement("canvas"),z.width=u,z.height=v,z.getContext("2d").drawImage(s,0,0,s.width,s.height,0,0,u,v),s=z),n[r]=s):k[m]=c.image[m];m=k[0];n=0===(m.width&m.width-1)&&0===(m.height&m.height-1);r=D(c.format);s=D(c.type);w(j.TEXTURE_CUBE_MAP,
c,n);for(m=0;6>m;m++)if(f){v=k[m].mipmaps;z=0;for(y=v.length;z<y;z++)u=v[z],c.format!==THREE.RGBAFormat?j.compressedTexImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X+m,z,r,u.width,u.height,0,u.data):j.texImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X+m,z,r,u.width,u.height,0,r,s,u.data)}else j.texImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X+m,0,r,r,s,k[m]);c.generateMipmaps&&n&&j.generateMipmap(j.TEXTURE_CUBE_MAP);c.needsUpdate=!1;if(c.onUpdate)c.onUpdate()}else j.activeTexture(j.TEXTURE0+f),j.bindTexture(j.TEXTURE_CUBE_MAP,
c.image.__webglTextureCube)}else r instanceof THREE.WebGLRenderTargetCube?(c=r,j.activeTexture(j.TEXTURE0+k),j.bindTexture(j.TEXTURE_CUBE_MAP,c.__webglTexture)):I.setTexture(r,k)}else if("tv"===m){void 0===c._array&&(c._array=[]);m=0;for(n=c.value.length;m<n;m++)c._array[m]=G();j.uniform1iv(f,c._array);m=0;for(n=c.value.length;m<n;m++)r=c.value[m],k=c._array[m],r&&I.setTexture(r,k)}else console.warn("THREE.WebGLRenderer: Unknown uniform type: "+m);if((d instanceof THREE.ShaderMaterial||d instanceof
THREE.MeshPhongMaterial||d.envMap)&&null!==h.cameraPosition)ja.setFromMatrixPosition(a.matrixWorld),j.uniform3f(h.cameraPosition,ja.x,ja.y,ja.z);(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.ShaderMaterial||d.skinning)&&null!==h.viewMatrix&&j.uniformMatrix4fv(h.viewMatrix,!1,a.matrixWorldInverse.elements)}j.uniformMatrix4fv(h.modelViewMatrix,!1,e._modelViewMatrix.elements);h.normalMatrix&&j.uniformMatrix3fv(h.normalMatrix,!1,e._normalMatrix.elements);
null!==h.modelMatrix&&j.uniformMatrix4fv(h.modelMatrix,!1,e.matrixWorld.elements);return g}function G(){var a=Ja;a>=Ab&&console.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+Ab);Ja+=1;return a}function N(a,b,c,d){a[b]=c.r*c.r*d;a[b+1]=c.g*c.g*d;a[b+2]=c.b*c.b*d}function C(a,b,c,d){a[b]=c.r*d;a[b+1]=c.g*d;a[b+2]=c.b*d}function B(a){a!==ia&&(j.lineWidth(a),ia=a)}function x(a,b,c){Ua!==a&&(a?j.enable(j.POLYGON_OFFSET_FILL):j.disable(j.POLYGON_OFFSET_FILL),Ua=a);
if(a&&(Oa!==b||la!==c))j.polygonOffset(b,c),Oa=b,la=c}function F(a){for(var a=a.split("\n"),b=0,c=a.length;b<c;b++)a[b]=b+1+": "+a[b];return a.join("\n")}function L(a,b){var c;"fragment"===a?c=j.createShader(j.FRAGMENT_SHADER):"vertex"===a&&(c=j.createShader(j.VERTEX_SHADER));j.shaderSource(c,b);j.compileShader(c);return!j.getShaderParameter(c,j.COMPILE_STATUS)?(console.error(j.getShaderInfoLog(c)),console.error(F(b)),null):c}function w(a,b,c){c?(j.texParameteri(a,j.TEXTURE_WRAP_S,D(b.wrapS)),j.texParameteri(a,
j.TEXTURE_WRAP_T,D(b.wrapT)),j.texParameteri(a,j.TEXTURE_MAG_FILTER,D(b.magFilter)),j.texParameteri(a,j.TEXTURE_MIN_FILTER,D(b.minFilter))):(j.texParameteri(a,j.TEXTURE_WRAP_S,j.CLAMP_TO_EDGE),j.texParameteri(a,j.TEXTURE_WRAP_T,j.CLAMP_TO_EDGE),j.texParameteri(a,j.TEXTURE_MAG_FILTER,y(b.magFilter)),j.texParameteri(a,j.TEXTURE_MIN_FILTER,y(b.minFilter)));if(qa&&b.type!==THREE.FloatType&&(1<b.anisotropy||b.__oldAnisotropy))j.texParameterf(a,qa.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,Jb)),b.__oldAnisotropy=
b.anisotropy}function E(a,b){j.bindRenderbuffer(j.RENDERBUFFER,a);b.depthBuffer&&!b.stencilBuffer?(j.renderbufferStorage(j.RENDERBUFFER,j.DEPTH_COMPONENT16,b.width,b.height),j.framebufferRenderbuffer(j.FRAMEBUFFER,j.DEPTH_ATTACHMENT,j.RENDERBUFFER,a)):b.depthBuffer&&b.stencilBuffer?(j.renderbufferStorage(j.RENDERBUFFER,j.DEPTH_STENCIL,b.width,b.height),j.framebufferRenderbuffer(j.FRAMEBUFFER,j.DEPTH_STENCIL_ATTACHMENT,j.RENDERBUFFER,a)):j.renderbufferStorage(j.RENDERBUFFER,j.RGBA4,b.width,b.height)}
function y(a){return a===THREE.NearestFilter||a===THREE.NearestMipMapNearestFilter||a===THREE.NearestMipMapLinearFilter?j.NEAREST:j.LINEAR}function D(a){if(a===THREE.RepeatWrapping)return j.REPEAT;if(a===THREE.ClampToEdgeWrapping)return j.CLAMP_TO_EDGE;if(a===THREE.MirroredRepeatWrapping)return j.MIRRORED_REPEAT;if(a===THREE.NearestFilter)return j.NEAREST;if(a===THREE.NearestMipMapNearestFilter)return j.NEAREST_MIPMAP_NEAREST;if(a===THREE.NearestMipMapLinearFilter)return j.NEAREST_MIPMAP_LINEAR;if(a===
THREE.LinearFilter)return j.LINEAR;if(a===THREE.LinearMipMapNearestFilter)return j.LINEAR_MIPMAP_NEAREST;if(a===THREE.LinearMipMapLinearFilter)return j.LINEAR_MIPMAP_LINEAR;if(a===THREE.UnsignedByteType)return j.UNSIGNED_BYTE;if(a===THREE.UnsignedShort4444Type)return j.UNSIGNED_SHORT_4_4_4_4;if(a===THREE.UnsignedShort5551Type)return j.UNSIGNED_SHORT_5_5_5_1;if(a===THREE.UnsignedShort565Type)return j.UNSIGNED_SHORT_5_6_5;if(a===THREE.ByteType)return j.BYTE;if(a===THREE.ShortType)return j.SHORT;if(a===
THREE.UnsignedShortType)return j.UNSIGNED_SHORT;if(a===THREE.IntType)return j.INT;if(a===THREE.UnsignedIntType)return j.UNSIGNED_INT;if(a===THREE.FloatType)return j.FLOAT;if(a===THREE.AlphaFormat)return j.ALPHA;if(a===THREE.RGBFormat)return j.RGB;if(a===THREE.RGBAFormat)return j.RGBA;if(a===THREE.LuminanceFormat)return j.LUMINANCE;if(a===THREE.LuminanceAlphaFormat)return j.LUMINANCE_ALPHA;if(a===THREE.AddEquation)return j.FUNC_ADD;if(a===THREE.SubtractEquation)return j.FUNC_SUBTRACT;if(a===THREE.ReverseSubtractEquation)return j.FUNC_REVERSE_SUBTRACT;
if(a===THREE.ZeroFactor)return j.ZERO;if(a===THREE.OneFactor)return j.ONE;if(a===THREE.SrcColorFactor)return j.SRC_COLOR;if(a===THREE.OneMinusSrcColorFactor)return j.ONE_MINUS_SRC_COLOR;if(a===THREE.SrcAlphaFactor)return j.SRC_ALPHA;if(a===THREE.OneMinusSrcAlphaFactor)return j.ONE_MINUS_SRC_ALPHA;if(a===THREE.DstAlphaFactor)return j.DST_ALPHA;if(a===THREE.OneMinusDstAlphaFactor)return j.ONE_MINUS_DST_ALPHA;if(a===THREE.DstColorFactor)return j.DST_COLOR;if(a===THREE.OneMinusDstColorFactor)return j.ONE_MINUS_DST_COLOR;
if(a===THREE.SrcAlphaSaturateFactor)return j.SRC_ALPHA_SATURATE;if(void 0!==ta){if(a===THREE.RGB_S3TC_DXT1_Format)return ta.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT1_Format)return ta.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT3_Format)return ta.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===THREE.RGBA_S3TC_DXT5_Format)return ta.COMPRESSED_RGBA_S3TC_DXT5_EXT}return 0}console.log("THREE.WebGLRenderer",THREE.REVISION);var a=a||{},H=void 0!==a.canvas?a.canvas:document.createElement("canvas"),
K=void 0!==a.precision?a.precision:"highp",A=void 0!==a.alpha?a.alpha:!1,da=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,ha=void 0!==a.antialias?a.antialias:!1,ua=void 0!==a.stencil?a.stencil:!0,O=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,T=new THREE.Color(0),ea=0;this.domElement=H;this.context=null;this.devicePixelRatio=void 0!==a.devicePixelRatio?a.devicePixelRatio:void 0!==self.devicePixelRatio?self.devicePixelRatio:1;this.autoUpdateObjects=this.sortObjects=this.autoClearStencil=
this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.shadowMapEnabled=this.gammaOutput=this.gammaInput=!1;this.shadowMapAutoUpdate=!0;this.shadowMapType=THREE.PCFShadowMap;this.shadowMapCullFace=THREE.CullFaceFront;this.shadowMapCascade=this.shadowMapDebug=!1;this.maxMorphTargets=8;this.maxMorphNormals=4;this.autoScaleCubemaps=!0;this.renderPluginsPre=[];this.renderPluginsPost=[];this.info={memory:{programs:0,geometries:0,textures:0},render:{calls:0,vertices:0,faces:0,points:0}};var I=this,
P=[],Q=0,oa=null,va=null,Ea=-1,za=null,Ha=null,Ta=0,Ja=0,sa=-1,Aa=-1,ba=-1,W=-1,Ka=-1,U=-1,ca=-1,wa=-1,Ua=null,Oa=null,la=null,ia=null,Fa=0,Ga=0,Ba=H.width,xa=H.height,Va=0,La=0,Ma={},ya=new THREE.Frustum,V=new THREE.Matrix4,pa=new THREE.Matrix4,ja=new THREE.Vector3,fa=new THREE.Vector3,Za=!0,Na={ambient:[0,0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[]},spot:{length:0,colors:[],positions:[],distances:[],directions:[],anglesCos:[],exponents:[]},
hemi:{length:0,skyColors:[],groundColors:[],positions:[]}},j,Pa,Wa,qa,ta;try{var hb={alpha:A,premultipliedAlpha:da,antialias:ha,stencil:ua,preserveDrawingBuffer:O};j=H.getContext("webgl",hb)||H.getContext("experimental-webgl",hb);if(null===j)throw"Error creating WebGL context.";}catch(db){console.error(db)}Pa=j.getExtension("OES_texture_float");j.getExtension("OES_texture_float_linear");Wa=j.getExtension("OES_standard_derivatives");qa=j.getExtension("EXT_texture_filter_anisotropic")||j.getExtension("MOZ_EXT_texture_filter_anisotropic")||
j.getExtension("WEBKIT_EXT_texture_filter_anisotropic");ta=j.getExtension("WEBGL_compressed_texture_s3tc")||j.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||j.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");Pa||console.log("THREE.WebGLRenderer: Float textures not supported.");Wa||console.log("THREE.WebGLRenderer: Standard derivatives not supported.");qa||console.log("THREE.WebGLRenderer: Anisotropic texture filtering not supported.");ta||console.log("THREE.WebGLRenderer: S3TC compressed textures not supported.");
void 0===j.getShaderPrecisionFormat&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}});j.clearColor(0,0,0,1);j.clearDepth(1);j.clearStencil(0);j.enable(j.DEPTH_TEST);j.depthFunc(j.LEQUAL);j.frontFace(j.CCW);j.cullFace(j.BACK);j.enable(j.CULL_FACE);j.enable(j.BLEND);j.blendEquation(j.FUNC_ADD);j.blendFunc(j.SRC_ALPHA,j.ONE_MINUS_SRC_ALPHA);j.viewport(Fa,Ga,Ba,xa);j.clearColor(T.r,T.g,T.b,ea);this.context=j;var Ab=j.getParameter(j.MAX_TEXTURE_IMAGE_UNITS),Xb=j.getParameter(j.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
j.getParameter(j.MAX_TEXTURE_SIZE);var Yb=j.getParameter(j.MAX_CUBE_MAP_TEXTURE_SIZE),Jb=qa?j.getParameter(qa.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0,xb=0<Xb,tb=xb&&Pa;ta&&j.getParameter(j.COMPRESSED_TEXTURE_FORMATS);var Zb=j.getShaderPrecisionFormat(j.VERTEX_SHADER,j.HIGH_FLOAT),$b=j.getShaderPrecisionFormat(j.VERTEX_SHADER,j.MEDIUM_FLOAT);j.getShaderPrecisionFormat(j.VERTEX_SHADER,j.LOW_FLOAT);var ac=j.getShaderPrecisionFormat(j.FRAGMENT_SHADER,j.HIGH_FLOAT),pc=j.getShaderPrecisionFormat(j.FRAGMENT_SHADER,
j.MEDIUM_FLOAT);j.getShaderPrecisionFormat(j.FRAGMENT_SHADER,j.LOW_FLOAT);j.getShaderPrecisionFormat(j.VERTEX_SHADER,j.HIGH_INT);j.getShaderPrecisionFormat(j.VERTEX_SHADER,j.MEDIUM_INT);j.getShaderPrecisionFormat(j.VERTEX_SHADER,j.LOW_INT);j.getShaderPrecisionFormat(j.FRAGMENT_SHADER,j.HIGH_INT);j.getShaderPrecisionFormat(j.FRAGMENT_SHADER,j.MEDIUM_INT);j.getShaderPrecisionFormat(j.FRAGMENT_SHADER,j.LOW_INT);var qc=0<Zb.precision&&0<ac.precision,Kb=0<$b.precision&&0<pc.precision;"highp"===K&&!qc&&
(Kb?(K="mediump",console.warn("WebGLRenderer: highp not supported, using mediump")):(K="lowp",console.warn("WebGLRenderer: highp and mediump not supported, using lowp")));"mediump"===K&&!Kb&&(K="lowp",console.warn("WebGLRenderer: mediump not supported, using lowp"));this.getContext=function(){return j};this.supportsVertexTextures=function(){return xb};this.supportsFloatTextures=function(){return Pa};this.supportsStandardDerivatives=function(){return Wa};this.supportsCompressedTextureS3TC=function(){return ta};
this.getMaxAnisotropy=function(){return Jb};this.getPrecision=function(){return K};this.setSize=function(a,b,c){H.width=a*this.devicePixelRatio;H.height=b*this.devicePixelRatio;1!==this.devicePixelRatio&&!1!==c&&(H.style.width=a+"px",H.style.height=b+"px");this.setViewport(0,0,H.width,H.height)};this.setViewport=function(a,b,c,d){Fa=void 0!==a?a:0;Ga=void 0!==b?b:0;Ba=void 0!==c?c:H.width;xa=void 0!==d?d:H.height;j.viewport(Fa,Ga,Ba,xa)};this.setScissor=function(a,b,c,d){j.scissor(a,b,c,d)};this.enableScissorTest=
function(a){a?j.enable(j.SCISSOR_TEST):j.disable(j.SCISSOR_TEST)};this.setClearColor=function(a,b){T.set(a);ea=void 0!==b?b:1;j.clearColor(T.r,T.g,T.b,ea)};this.setClearColorHex=function(a,b){console.warn("DEPRECATED: .setClearColorHex() is being removed. Use .setClearColor() instead.");this.setClearColor(a,b)};this.getClearColor=function(){return T};this.getClearAlpha=function(){return ea};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=j.COLOR_BUFFER_BIT;if(void 0===b||b)d|=j.DEPTH_BUFFER_BIT;
if(void 0===c||c)d|=j.STENCIL_BUFFER_BIT;j.clear(d)};this.clearColor=function(){j.clear(j.COLOR_BUFFER_BIT)};this.clearDepth=function(){j.clear(j.DEPTH_BUFFER_BIT)};this.clearStencil=function(){j.clear(j.STENCIL_BUFFER_BIT)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.addPostPlugin=function(a){a.init(this);this.renderPluginsPost.push(a)};this.addPrePlugin=function(a){a.init(this);this.renderPluginsPre.push(a)};this.updateShadowMap=function(a,b){oa=null;Ea=za=
wa=ca=ba=-1;Za=!0;Aa=sa=-1;this.shadowMapPlugin.update(a,b)};var Lb=function(a){a=a.target;a.removeEventListener("dispose",Lb);a.__webglInit=void 0;if(a instanceof THREE.BufferGeometry){var b=a.attributes,c;for(c in b)void 0!==b[c].buffer&&j.deleteBuffer(b[c].buffer);I.info.memory.geometries--}else if(void 0!==a.geometryGroups)for(b in a.geometryGroups){c=a.geometryGroups[b];if(void 0!==c.numMorphTargets)for(var d=0,e=c.numMorphTargets;d<e;d++)j.deleteBuffer(c.__webglMorphTargetsBuffers[d]);if(void 0!==
c.numMorphNormals){d=0;for(e=c.numMorphNormals;d<e;d++)j.deleteBuffer(c.__webglMorphNormalsBuffers[d])}Db(c)}else Db(a)},Bb=function(a){a=a.target;a.removeEventListener("dispose",Bb);a.image&&a.image.__webglTextureCube?j.deleteTexture(a.image.__webglTextureCube):a.__webglInit&&(a.__webglInit=!1,j.deleteTexture(a.__webglTexture));I.info.memory.textures--},Mb=function(a){a=a.target;a.removeEventListener("dispose",Mb);if(a&&a.__webglTexture)if(j.deleteTexture(a.__webglTexture),a instanceof THREE.WebGLRenderTargetCube)for(var b=
0;6>b;b++)j.deleteFramebuffer(a.__webglFramebuffer[b]),j.deleteRenderbuffer(a.__webglRenderbuffer[b]);else j.deleteFramebuffer(a.__webglFramebuffer),j.deleteRenderbuffer(a.__webglRenderbuffer);I.info.memory.textures--},Cb=function(a){a=a.target;a.removeEventListener("dispose",Cb);Eb(a)},Db=function(a){void 0!==a.__webglVertexBuffer&&j.deleteBuffer(a.__webglVertexBuffer);void 0!==a.__webglNormalBuffer&&j.deleteBuffer(a.__webglNormalBuffer);void 0!==a.__webglTangentBuffer&&j.deleteBuffer(a.__webglTangentBuffer);
void 0!==a.__webglColorBuffer&&j.deleteBuffer(a.__webglColorBuffer);void 0!==a.__webglUVBuffer&&j.deleteBuffer(a.__webglUVBuffer);void 0!==a.__webglUV2Buffer&&j.deleteBuffer(a.__webglUV2Buffer);void 0!==a.__webglSkinIndicesBuffer&&j.deleteBuffer(a.__webglSkinIndicesBuffer);void 0!==a.__webglSkinWeightsBuffer&&j.deleteBuffer(a.__webglSkinWeightsBuffer);void 0!==a.__webglFaceBuffer&&j.deleteBuffer(a.__webglFaceBuffer);void 0!==a.__webglLineBuffer&&j.deleteBuffer(a.__webglLineBuffer);void 0!==a.__webglLineDistanceBuffer&&
j.deleteBuffer(a.__webglLineDistanceBuffer);if(void 0!==a.__webglCustomAttributesList)for(var b in a.__webglCustomAttributesList)j.deleteBuffer(a.__webglCustomAttributesList[b].buffer);I.info.memory.geometries--},Eb=function(a){var b=a.program;if(void 0!==b){a.program=void 0;var c,d,e=!1,a=0;for(c=P.length;a<c;a++)if(d=P[a],d.program===b){d.usedTimes--;0===d.usedTimes&&(e=!0);break}if(!0===e){e=[];a=0;for(c=P.length;a<c;a++)d=P[a],d.program!==b&&e.push(d);P=e;j.deleteProgram(b);I.info.memory.programs--}}};
this.renderBufferImmediate=function(a,b,c){a.hasPositions&&!a.__webglVertexBuffer&&(a.__webglVertexBuffer=j.createBuffer());a.hasNormals&&!a.__webglNormalBuffer&&(a.__webglNormalBuffer=j.createBuffer());a.hasUvs&&!a.__webglUvBuffer&&(a.__webglUvBuffer=j.createBuffer());a.hasColors&&!a.__webglColorBuffer&&(a.__webglColorBuffer=j.createBuffer());a.hasPositions&&(j.bindBuffer(j.ARRAY_BUFFER,a.__webglVertexBuffer),j.bufferData(j.ARRAY_BUFFER,a.positionArray,j.DYNAMIC_DRAW),j.enableVertexAttribArray(b.attributes.position),
j.vertexAttribPointer(b.attributes.position,3,j.FLOAT,!1,0,0));if(a.hasNormals){j.bindBuffer(j.ARRAY_BUFFER,a.__webglNormalBuffer);if(c.shading===THREE.FlatShading){var d,e,f,g,h,i,k,l,m,n,p,q=3*a.count;for(p=0;p<q;p+=9)n=a.normalArray,d=n[p],e=n[p+1],f=n[p+2],g=n[p+3],i=n[p+4],l=n[p+5],h=n[p+6],k=n[p+7],m=n[p+8],d=(d+g+h)/3,e=(e+i+k)/3,f=(f+l+m)/3,n[p]=d,n[p+1]=e,n[p+2]=f,n[p+3]=d,n[p+4]=e,n[p+5]=f,n[p+6]=d,n[p+7]=e,n[p+8]=f}j.bufferData(j.ARRAY_BUFFER,a.normalArray,j.DYNAMIC_DRAW);j.enableVertexAttribArray(b.attributes.normal);
j.vertexAttribPointer(b.attributes.normal,3,j.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(j.bindBuffer(j.ARRAY_BUFFER,a.__webglUvBuffer),j.bufferData(j.ARRAY_BUFFER,a.uvArray,j.DYNAMIC_DRAW),j.enableVertexAttribArray(b.attributes.uv),j.vertexAttribPointer(b.attributes.uv,2,j.FLOAT,!1,0,0));a.hasColors&&c.vertexColors!==THREE.NoColors&&(j.bindBuffer(j.ARRAY_BUFFER,a.__webglColorBuffer),j.bufferData(j.ARRAY_BUFFER,a.colorArray,j.DYNAMIC_DRAW),j.enableVertexAttribArray(b.attributes.color),j.vertexAttribPointer(b.attributes.color,
3,j.FLOAT,!1,0,0));j.drawArrays(j.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,e,f){if(!1!==d.visible){var i,k,l,m;i=z(a,b,c,d,f);b=i.attributes;a=e.attributes;c=!1;i=16777215*e.id+2*i.id+(d.wireframe?1:0);i!==za&&(za=i,c=!0);c&&h();if(f instanceof THREE.Mesh)if(f=a.index){e=e.offsets;1<e.length&&(c=!0);for(var n=0,p=e.length;n<p;n++){var q=e[n].index;if(c){for(k in b)l=b[k],i=a[k],0<=l&&(i?(m=i.itemSize,j.bindBuffer(j.ARRAY_BUFFER,i.buffer),g(l),j.vertexAttribPointer(l,
m,j.FLOAT,!1,0,4*q*m)):d.defaultAttributeValues&&(2===d.defaultAttributeValues[k].length?j.vertexAttrib2fv(l,d.defaultAttributeValues[k]):3===d.defaultAttributeValues[k].length&&j.vertexAttrib3fv(l,d.defaultAttributeValues[k])));j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,f.buffer)}j.drawElements(j.TRIANGLES,e[n].count,j.UNSIGNED_SHORT,2*e[n].start);I.info.render.calls++;I.info.render.vertices+=e[n].count;I.info.render.faces+=e[n].count/3}}else{if(c)for(k in b)"index"!==k&&(l=b[k],i=a[k],0<=l&&(i?(m=i.itemSize,
j.bindBuffer(j.ARRAY_BUFFER,i.buffer),g(l),j.vertexAttribPointer(l,m,j.FLOAT,!1,0,0)):d.defaultAttributeValues&&d.defaultAttributeValues[k]&&(2===d.defaultAttributeValues[k].length?j.vertexAttrib2fv(l,d.defaultAttributeValues[k]):3===d.defaultAttributeValues[k].length&&j.vertexAttrib3fv(l,d.defaultAttributeValues[k]))));d=e.attributes.position;j.drawArrays(j.TRIANGLES,0,d.numItems/3);I.info.render.calls++;I.info.render.vertices+=d.numItems/3;I.info.render.faces+=d.numItems/3/3}else if(f instanceof
THREE.ParticleSystem){if(c)for(k in b)l=b[k],i=a[k],0<=l&&(i?(m=i.itemSize,j.bindBuffer(j.ARRAY_BUFFER,i.buffer),g(l),j.vertexAttribPointer(l,m,j.FLOAT,!1,0,0)):d.defaultAttributeValues&&d.defaultAttributeValues[k]&&(2===d.defaultAttributeValues[k].length?j.vertexAttrib2fv(l,d.defaultAttributeValues[k]):3===d.defaultAttributeValues[k].length&&j.vertexAttrib3fv(l,d.defaultAttributeValues[k])));d=a.position;j.drawArrays(j.POINTS,0,d.numItems/3);I.info.render.calls++;I.info.render.points+=d.numItems/
3}else if(f instanceof THREE.Line){if(c)for(k in b)l=b[k],i=a[k],0<=l&&(i?(m=i.itemSize,j.bindBuffer(j.ARRAY_BUFFER,i.buffer),g(l),j.vertexAttribPointer(l,m,j.FLOAT,!1,0,0)):d.defaultAttributeValues&&d.defaultAttributeValues[k]&&(2===d.defaultAttributeValues[k].length?j.vertexAttrib2fv(l,d.defaultAttributeValues[k]):3===d.defaultAttributeValues[k].length&&j.vertexAttrib3fv(l,d.defaultAttributeValues[k])));k=f.type===THREE.LineStrip?j.LINE_STRIP:j.LINES;B(d.linewidth);d=a.position;j.drawArrays(k,0,
d.numItems/3);I.info.render.calls++;I.info.render.points+=d.numItems}}};this.renderBuffer=function(a,b,c,d,e,f){if(!1!==d.visible){var i,l,c=z(a,b,c,d,f),a=c.attributes,b=!1,c=16777215*e.id+2*c.id+(d.wireframe?1:0);c!==za&&(za=c,b=!0);b&&h();if(!d.morphTargets&&0<=a.position)b&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglVertexBuffer),g(a.position),j.vertexAttribPointer(a.position,3,j.FLOAT,!1,0,0));else if(f.morphTargetBase){c=d.program.attributes;-1!==f.morphTargetBase&&0<=c.position?(j.bindBuffer(j.ARRAY_BUFFER,
e.__webglMorphTargetsBuffers[f.morphTargetBase]),g(c.position),j.vertexAttribPointer(c.position,3,j.FLOAT,!1,0,0)):0<=c.position&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglVertexBuffer),g(c.position),j.vertexAttribPointer(c.position,3,j.FLOAT,!1,0,0));if(f.morphTargetForcedOrder.length){var m=0;l=f.morphTargetForcedOrder;for(i=f.morphTargetInfluences;m<d.numSupportedMorphTargets&&m<l.length;)0<=c["morphTarget"+m]&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[l[m]]),g(c["morphTarget"+m]),
j.vertexAttribPointer(c["morphTarget"+m],3,j.FLOAT,!1,0,0)),0<=c["morphNormal"+m]&&d.morphNormals&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[l[m]]),g(c["morphNormal"+m]),j.vertexAttribPointer(c["morphNormal"+m],3,j.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[m]=i[l[m]],m++}else{l=[];i=f.morphTargetInfluences;var n,p=i.length;for(n=0;n<p;n++)m=i[n],0<m&&l.push([m,n]);l.length>d.numSupportedMorphTargets?(l.sort(k),l.length=d.numSupportedMorphTargets):l.length>d.numSupportedMorphNormals?
l.sort(k):0===l.length&&l.push([0,0]);for(m=0;m<d.numSupportedMorphTargets;)l[m]?(n=l[m][1],0<=c["morphTarget"+m]&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[n]),g(c["morphTarget"+m]),j.vertexAttribPointer(c["morphTarget"+m],3,j.FLOAT,!1,0,0)),0<=c["morphNormal"+m]&&d.morphNormals&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[n]),g(c["morphNormal"+m]),j.vertexAttribPointer(c["morphNormal"+m],3,j.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[m]=i[n]):f.__webglMorphTargetInfluences[m]=
0,m++}null!==d.program.uniforms.morphTargetInfluences&&j.uniform1fv(d.program.uniforms.morphTargetInfluences,f.__webglMorphTargetInfluences)}if(b){if(e.__webglCustomAttributesList){i=0;for(l=e.__webglCustomAttributesList.length;i<l;i++)c=e.__webglCustomAttributesList[i],0<=a[c.buffer.belongsToAttribute]&&(j.bindBuffer(j.ARRAY_BUFFER,c.buffer),g(a[c.buffer.belongsToAttribute]),j.vertexAttribPointer(a[c.buffer.belongsToAttribute],c.size,j.FLOAT,!1,0,0))}0<=a.color&&(0<f.geometry.colors.length||0<f.geometry.faces.length?
(j.bindBuffer(j.ARRAY_BUFFER,e.__webglColorBuffer),g(a.color),j.vertexAttribPointer(a.color,3,j.FLOAT,!1,0,0)):d.defaultAttributeValues&&j.vertexAttrib3fv(a.color,d.defaultAttributeValues.color));0<=a.normal&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglNormalBuffer),g(a.normal),j.vertexAttribPointer(a.normal,3,j.FLOAT,!1,0,0));0<=a.tangent&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglTangentBuffer),g(a.tangent),j.vertexAttribPointer(a.tangent,4,j.FLOAT,!1,0,0));0<=a.uv&&(f.geometry.faceVertexUvs[0]?(j.bindBuffer(j.ARRAY_BUFFER,
e.__webglUVBuffer),g(a.uv),j.vertexAttribPointer(a.uv,2,j.FLOAT,!1,0,0)):d.defaultAttributeValues&&j.vertexAttrib2fv(a.uv,d.defaultAttributeValues.uv));0<=a.uv2&&(f.geometry.faceVertexUvs[1]?(j.bindBuffer(j.ARRAY_BUFFER,e.__webglUV2Buffer),g(a.uv2),j.vertexAttribPointer(a.uv2,2,j.FLOAT,!1,0,0)):d.defaultAttributeValues&&j.vertexAttrib2fv(a.uv2,d.defaultAttributeValues.uv2));d.skinning&&(0<=a.skinIndex&&0<=a.skinWeight)&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglSkinIndicesBuffer),g(a.skinIndex),j.vertexAttribPointer(a.skinIndex,
4,j.FLOAT,!1,0,0),j.bindBuffer(j.ARRAY_BUFFER,e.__webglSkinWeightsBuffer),g(a.skinWeight),j.vertexAttribPointer(a.skinWeight,4,j.FLOAT,!1,0,0));0<=a.lineDistance&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglLineDistanceBuffer),g(a.lineDistance),j.vertexAttribPointer(a.lineDistance,1,j.FLOAT,!1,0,0))}f instanceof THREE.Mesh?(d.wireframe?(B(d.wireframeLinewidth),b&&j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,e.__webglLineBuffer),j.drawElements(j.LINES,e.__webglLineCount,j.UNSIGNED_SHORT,0)):(b&&j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,
e.__webglFaceBuffer),j.drawElements(j.TRIANGLES,e.__webglFaceCount,j.UNSIGNED_SHORT,0)),I.info.render.calls++,I.info.render.vertices+=e.__webglFaceCount,I.info.render.faces+=e.__webglFaceCount/3):f instanceof THREE.Line?(f=f.type===THREE.LineStrip?j.LINE_STRIP:j.LINES,B(d.linewidth),j.drawArrays(f,0,e.__webglLineCount),I.info.render.calls++):f instanceof THREE.ParticleSystem&&(j.drawArrays(j.POINTS,0,e.__webglParticleCount),I.info.render.calls++,I.info.render.points+=e.__webglParticleCount)}};this.render=
function(a,b,c,d){if(!1===b instanceof THREE.Camera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{var e,f,g,h,k=a.__lights,m=a.fog;Ea=-1;Za=!0;!0===a.autoUpdate&&a.updateMatrixWorld();void 0===b.parent&&b.updateMatrixWorld();b.matrixWorldInverse.getInverse(b.matrixWorld);V.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);ya.setFromMatrix(V);this.autoUpdateObjects&&this.initWebGLObjects(a);l(this.renderPluginsPre,a,b);I.info.render.calls=0;I.info.render.vertices=
0;I.info.render.faces=0;I.info.render.points=0;this.setRenderTarget(c);(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);h=a.__webglObjects;d=0;for(e=h.length;d<e;d++)if(f=h[d],g=f.object,f.id=d,f.render=!1,g.visible&&(!(g instanceof THREE.Mesh||g instanceof THREE.ParticleSystem)||!g.frustumCulled||ya.intersectsObject(g))){var q=g;q._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,q.matrixWorld);q._normalMatrix.getNormalMatrix(q._modelViewMatrix);
var q=f,r=q.buffer,t=void 0,s=t=void 0,s=q.object.material;if(s instanceof THREE.MeshFaceMaterial)t=r.materialIndex,t=s.materials[t],t.transparent?(q.transparent=t,q.opaque=null):(q.opaque=t,q.transparent=null);else if(t=s)t.transparent?(q.transparent=t,q.opaque=null):(q.opaque=t,q.transparent=null);f.render=!0;!0===this.sortObjects&&(null!==g.renderDepth?f.z=g.renderDepth:(ja.setFromMatrixPosition(g.matrixWorld),ja.applyProjection(V),f.z=ja.z))}this.sortObjects&&h.sort(i);h=a.__webglObjectsImmediate;
d=0;for(e=h.length;d<e;d++)f=h[d],g=f.object,g.visible&&(g._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,g.matrixWorld),g._normalMatrix.getNormalMatrix(g._modelViewMatrix),g=f.object.material,g.transparent?(f.transparent=g,f.opaque=null):(f.opaque=g,f.transparent=null));a.overrideMaterial?(d=a.overrideMaterial,this.setBlending(d.blending,d.blendEquation,d.blendSrc,d.blendDst),this.setDepthTest(d.depthTest),this.setDepthWrite(d.depthWrite),x(d.polygonOffset,d.polygonOffsetFactor,d.polygonOffsetUnits),
n(a.__webglObjects,!1,"",b,k,m,!0,d),p(a.__webglObjectsImmediate,"",b,k,m,!1,d)):(d=null,this.setBlending(THREE.NoBlending),n(a.__webglObjects,!0,"opaque",b,k,m,!1,d),p(a.__webglObjectsImmediate,"opaque",b,k,m,!1,d),n(a.__webglObjects,!1,"transparent",b,k,m,!0,d),p(a.__webglObjectsImmediate,"transparent",b,k,m,!0,d));l(this.renderPluginsPost,a,b);c&&(c.generateMipmaps&&c.minFilter!==THREE.NearestFilter&&c.minFilter!==THREE.LinearFilter)&&(c instanceof THREE.WebGLRenderTargetCube?(j.bindTexture(j.TEXTURE_CUBE_MAP,
c.__webglTexture),j.generateMipmap(j.TEXTURE_CUBE_MAP),j.bindTexture(j.TEXTURE_CUBE_MAP,null)):(j.bindTexture(j.TEXTURE_2D,c.__webglTexture),j.generateMipmap(j.TEXTURE_2D),j.bindTexture(j.TEXTURE_2D,null)));this.setDepthTest(!0);this.setDepthWrite(!0)}};this.renderImmediateObject=function(a,b,c,d,e){var f=z(a,b,c,d,e);za=-1;I.setMaterialFaces(d);e.immediateRenderCallback?e.immediateRenderCallback(f,j,ya):e.render(function(a){I.renderBufferImmediate(a,f,d)})};this.initWebGLObjects=function(a){a.__webglObjects||
(a.__webglObjects=[],a.__webglObjectsImmediate=[],a.__webglSprites=[],a.__webglFlares=[]);for(;a.__objectsAdded.length;)t(a.__objectsAdded[0],a),a.__objectsAdded.splice(0,1);for(;a.__objectsRemoved.length;)u(a.__objectsRemoved[0],a),a.__objectsRemoved.splice(0,1);for(var b=0,g=a.__webglObjects.length;b<g;b++){var h=a.__webglObjects[b].object;void 0===h.__webglInit&&(void 0!==h.__webglActive&&u(h,a),t(h,a));var i=h,l=i.geometry,n=void 0,p=void 0,r=void 0;if(l instanceof THREE.BufferGeometry){var s=
j.DYNAMIC_DRAW,v=!l.dynamic,z=l.attributes,y=void 0,x=void 0;for(y in z)x=z[y],x.needsUpdate&&("index"===y?(j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,x.buffer),j.bufferData(j.ELEMENT_ARRAY_BUFFER,x.array,s)):(j.bindBuffer(j.ARRAY_BUFFER,x.buffer),j.bufferData(j.ARRAY_BUFFER,x.array,s)),x.needsUpdate=!1),v&&!x.dynamic&&(x.array=null)}else if(i instanceof THREE.Mesh){for(var B=0,C=l.geometryGroupsList.length;B<C;B++)if(n=l.geometryGroupsList[B],r=d(i,n),l.buffersNeedUpdate&&c(n,i),p=r.attributes&&m(r),l.verticesNeedUpdate||
l.morphTargetsNeedUpdate||l.elementsNeedUpdate||l.uvsNeedUpdate||l.normalsNeedUpdate||l.colorsNeedUpdate||l.tangentsNeedUpdate||p){var w=n,D=i,F=j.DYNAMIC_DRAW,E=!l.dynamic,G=r;if(w.__inittedArrays){var H=e(G),L=G.vertexColors?G.vertexColors:!1,N=f(G),O=H===THREE.SmoothShading,A=void 0,I=void 0,Q=void 0,K=void 0,P=void 0,U=void 0,T=void 0,W=void 0,oa=void 0,va=void 0,sa=void 0,Y=void 0,Z=void 0,X=void 0,Ea=void 0,Ta=void 0,ba=void 0,da=void 0,ca=void 0,za=void 0,Ja=void 0,ea=void 0,fa=void 0,ha=void 0,
Ha=void 0,la=void 0,Aa=void 0,qa=void 0,ua=void 0,Ia=void 0,Fa=void 0,Ba=void 0,Ka=void 0,Ga=void 0,ia=void 0,Na=void 0,ta=void 0,wa=void 0,Ma=void 0,Oa=void 0,xa=0,ya=0,Pa=0,Ua=0,Va=0,ib=0,Ya=0,La=0,eb=0,ra=0,Ca=0,M=0,Xa=void 0,jb=w.__vertexArray,Za=w.__uvArray,db=w.__uv2Array,Wa=w.__normalArray,$a=w.__tangentArray,kb=w.__colorArray,ab=w.__skinIndexArray,bb=w.__skinWeightArray,hb=w.__morphTargetsArrays,xb=w.__morphNormalsArrays,tb=w.__webglCustomAttributesList,J=void 0,Nb=w.__faceArray,ub=w.__lineArray,
Qa=D.geometry,Bb=Qa.elementsNeedUpdate,Ab=Qa.uvsNeedUpdate,Jb=Qa.normalsNeedUpdate,Kb=Qa.tangentsNeedUpdate,Lb=Qa.colorsNeedUpdate,Mb=Qa.morphTargetsNeedUpdate,bc=Qa.vertices,aa=w.faces3,lb=Qa.faces,Cb=Qa.faceVertexUvs[0],Db=Qa.faceVertexUvs[1],cc=Qa.skinIndices,Ob=Qa.skinWeights,Pb=Qa.morphTargets,Eb=Qa.morphNormals;if(Qa.verticesNeedUpdate){A=0;for(I=aa.length;A<I;A++)K=lb[aa[A]],Y=bc[K.a],Z=bc[K.b],X=bc[K.c],jb[ya]=Y.x,jb[ya+1]=Y.y,jb[ya+2]=Y.z,jb[ya+3]=Z.x,jb[ya+4]=Z.y,jb[ya+5]=Z.z,jb[ya+6]=X.x,
jb[ya+7]=X.y,jb[ya+8]=X.z,ya+=9;j.bindBuffer(j.ARRAY_BUFFER,w.__webglVertexBuffer);j.bufferData(j.ARRAY_BUFFER,jb,F)}if(Mb){ia=0;for(Na=Pb.length;ia<Na;ia++){A=Ca=0;for(I=aa.length;A<I;A++)Ma=aa[A],K=lb[Ma],Y=Pb[ia].vertices[K.a],Z=Pb[ia].vertices[K.b],X=Pb[ia].vertices[K.c],ta=hb[ia],ta[Ca]=Y.x,ta[Ca+1]=Y.y,ta[Ca+2]=Y.z,ta[Ca+3]=Z.x,ta[Ca+4]=Z.y,ta[Ca+5]=Z.z,ta[Ca+6]=X.x,ta[Ca+7]=X.y,ta[Ca+8]=X.z,G.morphNormals&&(O?(Oa=Eb[ia].vertexNormals[Ma],da=Oa.a,ca=Oa.b,za=Oa.c):za=ca=da=Eb[ia].faceNormals[Ma],
wa=xb[ia],wa[Ca]=da.x,wa[Ca+1]=da.y,wa[Ca+2]=da.z,wa[Ca+3]=ca.x,wa[Ca+4]=ca.y,wa[Ca+5]=ca.z,wa[Ca+6]=za.x,wa[Ca+7]=za.y,wa[Ca+8]=za.z),Ca+=9;j.bindBuffer(j.ARRAY_BUFFER,w.__webglMorphTargetsBuffers[ia]);j.bufferData(j.ARRAY_BUFFER,hb[ia],F);G.morphNormals&&(j.bindBuffer(j.ARRAY_BUFFER,w.__webglMorphNormalsBuffers[ia]),j.bufferData(j.ARRAY_BUFFER,xb[ia],F))}}if(Ob.length){A=0;for(I=aa.length;A<I;A++)K=lb[aa[A]],ha=Ob[K.a],Ha=Ob[K.b],la=Ob[K.c],bb[ra]=ha.x,bb[ra+1]=ha.y,bb[ra+2]=ha.z,bb[ra+3]=ha.w,
bb[ra+4]=Ha.x,bb[ra+5]=Ha.y,bb[ra+6]=Ha.z,bb[ra+7]=Ha.w,bb[ra+8]=la.x,bb[ra+9]=la.y,bb[ra+10]=la.z,bb[ra+11]=la.w,Aa=cc[K.a],qa=cc[K.b],ua=cc[K.c],ab[ra]=Aa.x,ab[ra+1]=Aa.y,ab[ra+2]=Aa.z,ab[ra+3]=Aa.w,ab[ra+4]=qa.x,ab[ra+5]=qa.y,ab[ra+6]=qa.z,ab[ra+7]=qa.w,ab[ra+8]=ua.x,ab[ra+9]=ua.y,ab[ra+10]=ua.z,ab[ra+11]=ua.w,ra+=12;0<ra&&(j.bindBuffer(j.ARRAY_BUFFER,w.__webglSkinIndicesBuffer),j.bufferData(j.ARRAY_BUFFER,ab,F),j.bindBuffer(j.ARRAY_BUFFER,w.__webglSkinWeightsBuffer),j.bufferData(j.ARRAY_BUFFER,
bb,F))}if(Lb&&L){A=0;for(I=aa.length;A<I;A++)K=lb[aa[A]],T=K.vertexColors,W=K.color,3===T.length&&L===THREE.VertexColors?(Ja=T[0],ea=T[1],fa=T[2]):fa=ea=Ja=W,kb[eb]=Ja.r,kb[eb+1]=Ja.g,kb[eb+2]=Ja.b,kb[eb+3]=ea.r,kb[eb+4]=ea.g,kb[eb+5]=ea.b,kb[eb+6]=fa.r,kb[eb+7]=fa.g,kb[eb+8]=fa.b,eb+=9;0<eb&&(j.bindBuffer(j.ARRAY_BUFFER,w.__webglColorBuffer),j.bufferData(j.ARRAY_BUFFER,kb,F))}if(Kb&&Qa.hasTangents){A=0;for(I=aa.length;A<I;A++)K=lb[aa[A]],oa=K.vertexTangents,Ea=oa[0],Ta=oa[1],ba=oa[2],$a[Ya]=Ea.x,
$a[Ya+1]=Ea.y,$a[Ya+2]=Ea.z,$a[Ya+3]=Ea.w,$a[Ya+4]=Ta.x,$a[Ya+5]=Ta.y,$a[Ya+6]=Ta.z,$a[Ya+7]=Ta.w,$a[Ya+8]=ba.x,$a[Ya+9]=ba.y,$a[Ya+10]=ba.z,$a[Ya+11]=ba.w,Ya+=12;j.bindBuffer(j.ARRAY_BUFFER,w.__webglTangentBuffer);j.bufferData(j.ARRAY_BUFFER,$a,F)}if(Jb&&H){A=0;for(I=aa.length;A<I;A++)if(K=lb[aa[A]],P=K.vertexNormals,U=K.normal,3===P.length&&O)for(Ia=0;3>Ia;Ia++)Ba=P[Ia],Wa[ib]=Ba.x,Wa[ib+1]=Ba.y,Wa[ib+2]=Ba.z,ib+=3;else for(Ia=0;3>Ia;Ia++)Wa[ib]=U.x,Wa[ib+1]=U.y,Wa[ib+2]=U.z,ib+=3;j.bindBuffer(j.ARRAY_BUFFER,
w.__webglNormalBuffer);j.bufferData(j.ARRAY_BUFFER,Wa,F)}if(Ab&&Cb&&N){A=0;for(I=aa.length;A<I;A++)if(Q=aa[A],va=Cb[Q],void 0!==va)for(Ia=0;3>Ia;Ia++)Ka=va[Ia],Za[Pa]=Ka.x,Za[Pa+1]=Ka.y,Pa+=2;0<Pa&&(j.bindBuffer(j.ARRAY_BUFFER,w.__webglUVBuffer),j.bufferData(j.ARRAY_BUFFER,Za,F))}if(Ab&&Db&&N){A=0;for(I=aa.length;A<I;A++)if(Q=aa[A],sa=Db[Q],void 0!==sa)for(Ia=0;3>Ia;Ia++)Ga=sa[Ia],db[Ua]=Ga.x,db[Ua+1]=Ga.y,Ua+=2;0<Ua&&(j.bindBuffer(j.ARRAY_BUFFER,w.__webglUV2Buffer),j.bufferData(j.ARRAY_BUFFER,db,
F))}if(Bb){A=0;for(I=aa.length;A<I;A++)Nb[Va]=xa,Nb[Va+1]=xa+1,Nb[Va+2]=xa+2,Va+=3,ub[La]=xa,ub[La+1]=xa+1,ub[La+2]=xa,ub[La+3]=xa+2,ub[La+4]=xa+1,ub[La+5]=xa+2,La+=6,xa+=3;j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,w.__webglFaceBuffer);j.bufferData(j.ELEMENT_ARRAY_BUFFER,Nb,F);j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,w.__webglLineBuffer);j.bufferData(j.ELEMENT_ARRAY_BUFFER,ub,F)}if(tb){Ia=0;for(Fa=tb.length;Ia<Fa;Ia++)if(J=tb[Ia],J.__original.needsUpdate){M=0;if(1===J.size)if(void 0===J.boundTo||"vertices"===
J.boundTo){A=0;for(I=aa.length;A<I;A++)K=lb[aa[A]],J.array[M]=J.value[K.a],J.array[M+1]=J.value[K.b],J.array[M+2]=J.value[K.c],M+=3}else{if("faces"===J.boundTo){A=0;for(I=aa.length;A<I;A++)Xa=J.value[aa[A]],J.array[M]=Xa,J.array[M+1]=Xa,J.array[M+2]=Xa,M+=3}}else if(2===J.size)if(void 0===J.boundTo||"vertices"===J.boundTo){A=0;for(I=aa.length;A<I;A++)K=lb[aa[A]],Y=J.value[K.a],Z=J.value[K.b],X=J.value[K.c],J.array[M]=Y.x,J.array[M+1]=Y.y,J.array[M+2]=Z.x,J.array[M+3]=Z.y,J.array[M+4]=X.x,J.array[M+
5]=X.y,M+=6}else{if("faces"===J.boundTo){A=0;for(I=aa.length;A<I;A++)X=Z=Y=Xa=J.value[aa[A]],J.array[M]=Y.x,J.array[M+1]=Y.y,J.array[M+2]=Z.x,J.array[M+3]=Z.y,J.array[M+4]=X.x,J.array[M+5]=X.y,M+=6}}else if(3===J.size){var na;na="c"===J.type?["r","g","b"]:["x","y","z"];if(void 0===J.boundTo||"vertices"===J.boundTo){A=0;for(I=aa.length;A<I;A++)K=lb[aa[A]],Y=J.value[K.a],Z=J.value[K.b],X=J.value[K.c],J.array[M]=Y[na[0]],J.array[M+1]=Y[na[1]],J.array[M+2]=Y[na[2]],J.array[M+3]=Z[na[0]],J.array[M+4]=
Z[na[1]],J.array[M+5]=Z[na[2]],J.array[M+6]=X[na[0]],J.array[M+7]=X[na[1]],J.array[M+8]=X[na[2]],M+=9}else if("faces"===J.boundTo){A=0;for(I=aa.length;A<I;A++)X=Z=Y=Xa=J.value[aa[A]],J.array[M]=Y[na[0]],J.array[M+1]=Y[na[1]],J.array[M+2]=Y[na[2]],J.array[M+3]=Z[na[0]],J.array[M+4]=Z[na[1]],J.array[M+5]=Z[na[2]],J.array[M+6]=X[na[0]],J.array[M+7]=X[na[1]],J.array[M+8]=X[na[2]],M+=9}else if("faceVertices"===J.boundTo){A=0;for(I=aa.length;A<I;A++)Xa=J.value[aa[A]],Y=Xa[0],Z=Xa[1],X=Xa[2],J.array[M]=
Y[na[0]],J.array[M+1]=Y[na[1]],J.array[M+2]=Y[na[2]],J.array[M+3]=Z[na[0]],J.array[M+4]=Z[na[1]],J.array[M+5]=Z[na[2]],J.array[M+6]=X[na[0]],J.array[M+7]=X[na[1]],J.array[M+8]=X[na[2]],M+=9}}else if(4===J.size)if(void 0===J.boundTo||"vertices"===J.boundTo){A=0;for(I=aa.length;A<I;A++)K=lb[aa[A]],Y=J.value[K.a],Z=J.value[K.b],X=J.value[K.c],J.array[M]=Y.x,J.array[M+1]=Y.y,J.array[M+2]=Y.z,J.array[M+3]=Y.w,J.array[M+4]=Z.x,J.array[M+5]=Z.y,J.array[M+6]=Z.z,J.array[M+7]=Z.w,J.array[M+8]=X.x,J.array[M+
9]=X.y,J.array[M+10]=X.z,J.array[M+11]=X.w,M+=12}else if("faces"===J.boundTo){A=0;for(I=aa.length;A<I;A++)X=Z=Y=Xa=J.value[aa[A]],J.array[M]=Y.x,J.array[M+1]=Y.y,J.array[M+2]=Y.z,J.array[M+3]=Y.w,J.array[M+4]=Z.x,J.array[M+5]=Z.y,J.array[M+6]=Z.z,J.array[M+7]=Z.w,J.array[M+8]=X.x,J.array[M+9]=X.y,J.array[M+10]=X.z,J.array[M+11]=X.w,M+=12}else if("faceVertices"===J.boundTo){A=0;for(I=aa.length;A<I;A++)Xa=J.value[aa[A]],Y=Xa[0],Z=Xa[1],X=Xa[2],J.array[M]=Y.x,J.array[M+1]=Y.y,J.array[M+2]=Y.z,J.array[M+
3]=Y.w,J.array[M+4]=Z.x,J.array[M+5]=Z.y,J.array[M+6]=Z.z,J.array[M+7]=Z.w,J.array[M+8]=X.x,J.array[M+9]=X.y,J.array[M+10]=X.z,J.array[M+11]=X.w,M+=12}j.bindBuffer(j.ARRAY_BUFFER,J.buffer);j.bufferData(j.ARRAY_BUFFER,J.array,F)}}E&&(delete w.__inittedArrays,delete w.__colorArray,delete w.__normalArray,delete w.__tangentArray,delete w.__uvArray,delete w.__uv2Array,delete w.__faceArray,delete w.__vertexArray,delete w.__lineArray,delete w.__skinIndexArray,delete w.__skinWeightArray)}}l.verticesNeedUpdate=
!1;l.morphTargetsNeedUpdate=!1;l.elementsNeedUpdate=!1;l.uvsNeedUpdate=!1;l.normalsNeedUpdate=!1;l.colorsNeedUpdate=!1;l.tangentsNeedUpdate=!1;l.buffersNeedUpdate=!1;r.attributes&&q(r)}else if(i instanceof THREE.Line){r=d(i,l);p=r.attributes&&m(r);if(l.verticesNeedUpdate||l.colorsNeedUpdate||l.lineDistancesNeedUpdate||p){var cb=l,Qb=j.DYNAMIC_DRAW,Fb=void 0,Gb=void 0,Hb=void 0,Rb=void 0,ma=void 0,Sb=void 0,hc=cb.vertices,ic=cb.colors,jc=cb.lineDistances,Xb=hc.length,Yb=ic.length,Zb=jc.length,Tb=cb.__vertexArray,
Ub=cb.__colorArray,kc=cb.__lineDistanceArray,$b=cb.colorsNeedUpdate,ac=cb.lineDistancesNeedUpdate,dc=cb.__webglCustomAttributesList,Vb=void 0,lc=void 0,Da=void 0,yb=void 0,Ra=void 0,ka=void 0;if(cb.verticesNeedUpdate){for(Fb=0;Fb<Xb;Fb++)Rb=hc[Fb],ma=3*Fb,Tb[ma]=Rb.x,Tb[ma+1]=Rb.y,Tb[ma+2]=Rb.z;j.bindBuffer(j.ARRAY_BUFFER,cb.__webglVertexBuffer);j.bufferData(j.ARRAY_BUFFER,Tb,Qb)}if($b){for(Gb=0;Gb<Yb;Gb++)Sb=ic[Gb],ma=3*Gb,Ub[ma]=Sb.r,Ub[ma+1]=Sb.g,Ub[ma+2]=Sb.b;j.bindBuffer(j.ARRAY_BUFFER,cb.__webglColorBuffer);
j.bufferData(j.ARRAY_BUFFER,Ub,Qb)}if(ac){for(Hb=0;Hb<Zb;Hb++)kc[Hb]=jc[Hb];j.bindBuffer(j.ARRAY_BUFFER,cb.__webglLineDistanceBuffer);j.bufferData(j.ARRAY_BUFFER,kc,Qb)}if(dc){Vb=0;for(lc=dc.length;Vb<lc;Vb++)if(ka=dc[Vb],ka.needsUpdate&&(void 0===ka.boundTo||"vertices"===ka.boundTo)){ma=0;yb=ka.value.length;if(1===ka.size)for(Da=0;Da<yb;Da++)ka.array[Da]=ka.value[Da];else if(2===ka.size)for(Da=0;Da<yb;Da++)Ra=ka.value[Da],ka.array[ma]=Ra.x,ka.array[ma+1]=Ra.y,ma+=2;else if(3===ka.size)if("c"===ka.type)for(Da=
0;Da<yb;Da++)Ra=ka.value[Da],ka.array[ma]=Ra.r,ka.array[ma+1]=Ra.g,ka.array[ma+2]=Ra.b,ma+=3;else for(Da=0;Da<yb;Da++)Ra=ka.value[Da],ka.array[ma]=Ra.x,ka.array[ma+1]=Ra.y,ka.array[ma+2]=Ra.z,ma+=3;else if(4===ka.size)for(Da=0;Da<yb;Da++)Ra=ka.value[Da],ka.array[ma]=Ra.x,ka.array[ma+1]=Ra.y,ka.array[ma+2]=Ra.z,ka.array[ma+3]=Ra.w,ma+=4;j.bindBuffer(j.ARRAY_BUFFER,ka.buffer);j.bufferData(j.ARRAY_BUFFER,ka.array,Qb)}}}l.verticesNeedUpdate=!1;l.colorsNeedUpdate=!1;l.lineDistancesNeedUpdate=!1;r.attributes&&
q(r)}else if(i instanceof THREE.ParticleSystem){r=d(i,l);p=r.attributes&&m(r);if(l.verticesNeedUpdate||l.colorsNeedUpdate||i.sortParticles||p){var mb=l,ec=j.DYNAMIC_DRAW,Ib=i,Sa=void 0,nb=void 0,ob=void 0,S=void 0,pb=void 0,sb=void 0,Wb=mb.vertices,fc=Wb.length,gc=mb.colors,mc=gc.length,vb=mb.__vertexArray,wb=mb.__colorArray,qb=mb.__sortArray,nc=mb.verticesNeedUpdate,oc=mb.colorsNeedUpdate,rb=mb.__webglCustomAttributesList,fb=void 0,zb=void 0,$=void 0,gb=void 0,ga=void 0,R=void 0;if(Ib.sortParticles){pa.copy(V);
pa.multiply(Ib.matrixWorld);for(Sa=0;Sa<fc;Sa++)ob=Wb[Sa],ja.copy(ob),ja.applyProjection(pa),qb[Sa]=[ja.z,Sa];qb.sort(k);for(Sa=0;Sa<fc;Sa++)ob=Wb[qb[Sa][1]],S=3*Sa,vb[S]=ob.x,vb[S+1]=ob.y,vb[S+2]=ob.z;for(nb=0;nb<mc;nb++)S=3*nb,sb=gc[qb[nb][1]],wb[S]=sb.r,wb[S+1]=sb.g,wb[S+2]=sb.b;if(rb){fb=0;for(zb=rb.length;fb<zb;fb++)if(R=rb[fb],void 0===R.boundTo||"vertices"===R.boundTo)if(S=0,gb=R.value.length,1===R.size)for($=0;$<gb;$++)pb=qb[$][1],R.array[$]=R.value[pb];else if(2===R.size)for($=0;$<gb;$++)pb=
qb[$][1],ga=R.value[pb],R.array[S]=ga.x,R.array[S+1]=ga.y,S+=2;else if(3===R.size)if("c"===R.type)for($=0;$<gb;$++)pb=qb[$][1],ga=R.value[pb],R.array[S]=ga.r,R.array[S+1]=ga.g,R.array[S+2]=ga.b,S+=3;else for($=0;$<gb;$++)pb=qb[$][1],ga=R.value[pb],R.array[S]=ga.x,R.array[S+1]=ga.y,R.array[S+2]=ga.z,S+=3;else if(4===R.size)for($=0;$<gb;$++)pb=qb[$][1],ga=R.value[pb],R.array[S]=ga.x,R.array[S+1]=ga.y,R.array[S+2]=ga.z,R.array[S+3]=ga.w,S+=4}}else{if(nc)for(Sa=0;Sa<fc;Sa++)ob=Wb[Sa],S=3*Sa,vb[S]=ob.x,
vb[S+1]=ob.y,vb[S+2]=ob.z;if(oc)for(nb=0;nb<mc;nb++)sb=gc[nb],S=3*nb,wb[S]=sb.r,wb[S+1]=sb.g,wb[S+2]=sb.b;if(rb){fb=0;for(zb=rb.length;fb<zb;fb++)if(R=rb[fb],R.needsUpdate&&(void 0===R.boundTo||"vertices"===R.boundTo))if(gb=R.value.length,S=0,1===R.size)for($=0;$<gb;$++)R.array[$]=R.value[$];else if(2===R.size)for($=0;$<gb;$++)ga=R.value[$],R.array[S]=ga.x,R.array[S+1]=ga.y,S+=2;else if(3===R.size)if("c"===R.type)for($=0;$<gb;$++)ga=R.value[$],R.array[S]=ga.r,R.array[S+1]=ga.g,R.array[S+2]=ga.b,S+=
3;else for($=0;$<gb;$++)ga=R.value[$],R.array[S]=ga.x,R.array[S+1]=ga.y,R.array[S+2]=ga.z,S+=3;else if(4===R.size)for($=0;$<gb;$++)ga=R.value[$],R.array[S]=ga.x,R.array[S+1]=ga.y,R.array[S+2]=ga.z,R.array[S+3]=ga.w,S+=4}}if(nc||Ib.sortParticles)j.bindBuffer(j.ARRAY_BUFFER,mb.__webglVertexBuffer),j.bufferData(j.ARRAY_BUFFER,vb,ec);if(oc||Ib.sortParticles)j.bindBuffer(j.ARRAY_BUFFER,mb.__webglColorBuffer),j.bufferData(j.ARRAY_BUFFER,wb,ec);if(rb){fb=0;for(zb=rb.length;fb<zb;fb++)if(R=rb[fb],R.needsUpdate||
Ib.sortParticles)j.bindBuffer(j.ARRAY_BUFFER,R.buffer),j.bufferData(j.ARRAY_BUFFER,R.array,ec)}}l.verticesNeedUpdate=!1;l.colorsNeedUpdate=!1;r.attributes&&q(r)}}};this.initMaterial=function(a,b,c,d){var e,f,g,h;a.addEventListener("dispose",Cb);var i,k,l,m,n;a instanceof THREE.MeshDepthMaterial?n="depth":a instanceof THREE.MeshNormalMaterial?n="normal":a instanceof THREE.MeshBasicMaterial?n="basic":a instanceof THREE.MeshLambertMaterial?n="lambert":a instanceof THREE.MeshPhongMaterial?n="phong":a instanceof
THREE.LineBasicMaterial?n="basic":a instanceof THREE.LineDashedMaterial?n="dashed":a instanceof THREE.ParticleSystemMaterial&&(n="particle_basic");if(n){var p=THREE.ShaderLib[n];a.uniforms=THREE.UniformsUtils.clone(p.uniforms);a.vertexShader=p.vertexShader;a.fragmentShader=p.fragmentShader}var q=e=0,r=0,t=p=0;for(f=b.length;t<f;t++)g=b[t],g.onlyShadow||(g instanceof THREE.DirectionalLight&&e++,g instanceof THREE.PointLight&&q++,g instanceof THREE.SpotLight&&r++,g instanceof THREE.HemisphereLight&&
p++);f=q;g=r;h=p;r=p=0;for(q=b.length;r<q;r++)t=b[r],t.castShadow&&(t instanceof THREE.SpotLight&&p++,t instanceof THREE.DirectionalLight&&!t.shadowCascade&&p++);m=p;tb&&d&&d.useVertexTexture?l=1024:(b=j.getParameter(j.MAX_VERTEX_UNIFORM_VECTORS),b=Math.floor((b-20)/4),void 0!==d&&d instanceof THREE.SkinnedMesh&&(b=Math.min(d.bones.length,b),b<d.bones.length&&console.warn("WebGLRenderer: too many bones - "+d.bones.length+", this GPU supports just "+b+" (try OpenGL instead of ANGLE)")),l=b);a:{var r=
a.fragmentShader,q=a.vertexShader,p=a.uniforms,b=a.attributes,t=a.defines,c={map:!!a.map,envMap:!!a.envMap,lightMap:!!a.lightMap,bumpMap:!!a.bumpMap,normalMap:!!a.normalMap,specularMap:!!a.specularMap,vertexColors:a.vertexColors,fog:c,useFog:a.fog,fogExp:c instanceof THREE.FogExp2,sizeAttenuation:a.sizeAttenuation,skinning:a.skinning,maxBones:l,useVertexTexture:tb&&d&&d.useVertexTexture,morphTargets:a.morphTargets,morphNormals:a.morphNormals,maxMorphTargets:this.maxMorphTargets,maxMorphNormals:this.maxMorphNormals,
maxDirLights:e,maxPointLights:f,maxSpotLights:g,maxHemiLights:h,maxShadows:m,shadowMapEnabled:this.shadowMapEnabled&&d.receiveShadow,shadowMapType:this.shadowMapType,shadowMapDebug:this.shadowMapDebug,shadowMapCascade:this.shadowMapCascade,alphaTest:a.alphaTest,metal:a.metal,perPixel:a.perPixel,wrapAround:a.wrapAround,doubleSided:a.side===THREE.DoubleSide,flipSided:a.side===THREE.BackSide},d=a.index0AttributeName,s,u,v;e=[];n?e.push(n):(e.push(r),e.push(q));for(u in t)e.push(u),e.push(t[u]);for(s in c)e.push(s),
e.push(c[s]);n=e.join();s=0;for(u=P.length;s<u;s++)if(e=P[s],e.code===n){e.usedTimes++;k=e.program;break a}s="SHADOWMAP_TYPE_BASIC";c.shadowMapType===THREE.PCFShadowMap?s="SHADOWMAP_TYPE_PCF":c.shadowMapType===THREE.PCFSoftShadowMap&&(s="SHADOWMAP_TYPE_PCF_SOFT");u=[];for(v in t)e=t[v],!1!==e&&(e="#define "+v+" "+e,u.push(e));e=u.join("\n");v=j.createProgram();u=["precision "+K+" float;","precision "+K+" int;",e,xb?"#define VERTEX_TEXTURES":"",I.gammaInput?"#define GAMMA_INPUT":"",I.gammaOutput?"#define GAMMA_OUTPUT":
"","#define MAX_DIR_LIGHTS "+c.maxDirLights,"#define MAX_POINT_LIGHTS "+c.maxPointLights,"#define MAX_SPOT_LIGHTS "+c.maxSpotLights,"#define MAX_HEMI_LIGHTS "+c.maxHemiLights,"#define MAX_SHADOWS "+c.maxShadows,"#define MAX_BONES "+c.maxBones,c.map?"#define USE_MAP":"",c.envMap?"#define USE_ENVMAP":"",c.lightMap?"#define USE_LIGHTMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.vertexColors?"#define USE_COLOR":"",c.skinning?
"#define USE_SKINNING":"",c.useVertexTexture?"#define BONE_TEXTURE":"",c.morphTargets?"#define USE_MORPHTARGETS":"",c.morphNormals?"#define USE_MORPHNORMALS":"",c.perPixel?"#define PHONG_PER_PIXEL":"",c.wrapAround?"#define WRAP_AROUND":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapEnabled?"#define "+s:"",c.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",c.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",c.sizeAttenuation?
"#define USE_SIZEATTENUATION":"","uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\n#ifdef USE_MORPHNORMALS\nattribute vec3 morphNormal0;\nattribute vec3 morphNormal1;\nattribute vec3 morphNormal2;\nattribute vec3 morphNormal3;\n#else\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n"].join("\n");
s=["precision "+K+" float;","precision "+K+" int;",c.bumpMap||c.normalMap?"#extension GL_OES_standard_derivatives : enable":"",e,"#define MAX_DIR_LIGHTS "+c.maxDirLights,"#define MAX_POINT_LIGHTS "+c.maxPointLights,"#define MAX_SPOT_LIGHTS "+c.maxSpotLights,"#define MAX_HEMI_LIGHTS "+c.maxHemiLights,"#define MAX_SHADOWS "+c.maxShadows,c.alphaTest?"#define ALPHATEST "+c.alphaTest:"",I.gammaInput?"#define GAMMA_INPUT":"",I.gammaOutput?"#define GAMMA_OUTPUT":"",c.useFog&&c.fog?"#define USE_FOG":"",c.useFog&&
c.fogExp?"#define FOG_EXP2":"",c.map?"#define USE_MAP":"",c.envMap?"#define USE_ENVMAP":"",c.lightMap?"#define USE_LIGHTMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.vertexColors?"#define USE_COLOR":"",c.metal?"#define METAL":"",c.perPixel?"#define PHONG_PER_PIXEL":"",c.wrapAround?"#define WRAP_AROUND":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":"",c.shadowMapEnabled?"#define USE_SHADOWMAP":
"",c.shadowMapEnabled?"#define "+s:"",c.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",c.shadowMapCascade?"#define SHADOWMAP_CASCADE":"","uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n");u=L("vertex",u+q);s=L("fragment",s+r);j.attachShader(v,u);j.attachShader(v,s);d&&j.bindAttribLocation(v,0,d);j.linkProgram(v);j.getProgramParameter(v,j.LINK_STATUS)||(console.error("Could not initialise shader\nVALIDATE_STATUS: "+j.getProgramParameter(v,j.VALIDATE_STATUS)+", gl error ["+j.getError()+
"]"),console.error("Program Info Log: "+j.getProgramInfoLog(v)));j.deleteShader(s);j.deleteShader(u);v.uniforms={};v.attributes={};var w;s="viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences".split(" ");c.useVertexTexture?(s.push("boneTexture"),s.push("boneTextureWidth"),s.push("boneTextureHeight")):s.push("boneGlobalMatrices");for(w in p)s.push(w);w=s;s=0;for(u=w.length;s<u;s++)p=w[s],v.uniforms[p]=j.getUniformLocation(v,p);s="position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" ");
for(w=0;w<c.maxMorphTargets;w++)s.push("morphTarget"+w);for(w=0;w<c.maxMorphNormals;w++)s.push("morphNormal"+w);for(k in b)s.push(k);k=s;w=0;for(b=k.length;w<b;w++)s=k[w],v.attributes[s]=j.getAttribLocation(v,s);v.id=Q++;P.push({program:v,code:n,usedTimes:1});I.info.memory.programs=P.length;k=v}a.program=k;w=a.program.attributes;if(a.morphTargets){a.numSupportedMorphTargets=0;b="morphTarget";for(k=0;k<this.maxMorphTargets;k++)v=b+k,0<=w[v]&&a.numSupportedMorphTargets++}if(a.morphNormals){a.numSupportedMorphNormals=
0;b="morphNormal";for(k=0;k<this.maxMorphNormals;k++)v=b+k,0<=w[v]&&a.numSupportedMorphNormals++}a.uniformsList=[];for(i in a.uniforms)a.uniformsList.push([a.uniforms[i],i])};this.setFaceCulling=function(a,b){a===THREE.CullFaceNone?j.disable(j.CULL_FACE):(b===THREE.FrontFaceDirectionCW?j.frontFace(j.CW):j.frontFace(j.CCW),a===THREE.CullFaceBack?j.cullFace(j.BACK):a===THREE.CullFaceFront?j.cullFace(j.FRONT):j.cullFace(j.FRONT_AND_BACK),j.enable(j.CULL_FACE))};this.setMaterialFaces=function(a){var b=
a.side===THREE.DoubleSide,a=a.side===THREE.BackSide;sa!==b&&(b?j.disable(j.CULL_FACE):j.enable(j.CULL_FACE),sa=b);Aa!==a&&(a?j.frontFace(j.CW):j.frontFace(j.CCW),Aa=a)};this.setDepthTest=function(a){ca!==a&&(a?j.enable(j.DEPTH_TEST):j.disable(j.DEPTH_TEST),ca=a)};this.setDepthWrite=function(a){wa!==a&&(j.depthMask(a),wa=a)};this.setBlending=function(a,b,c,d){a!==ba&&(a===THREE.NoBlending?j.disable(j.BLEND):a===THREE.AdditiveBlending?(j.enable(j.BLEND),j.blendEquation(j.FUNC_ADD),j.blendFunc(j.SRC_ALPHA,
j.ONE)):a===THREE.SubtractiveBlending?(j.enable(j.BLEND),j.blendEquation(j.FUNC_ADD),j.blendFunc(j.ZERO,j.ONE_MINUS_SRC_COLOR)):a===THREE.MultiplyBlending?(j.enable(j.BLEND),j.blendEquation(j.FUNC_ADD),j.blendFunc(j.ZERO,j.SRC_COLOR)):a===THREE.CustomBlending?j.enable(j.BLEND):(j.enable(j.BLEND),j.blendEquationSeparate(j.FUNC_ADD,j.FUNC_ADD),j.blendFuncSeparate(j.SRC_ALPHA,j.ONE_MINUS_SRC_ALPHA,j.ONE,j.ONE_MINUS_SRC_ALPHA)),ba=a);if(a===THREE.CustomBlending){if(b!==W&&(j.blendEquation(D(b)),W=b),
c!==Ka||d!==U)j.blendFunc(D(c),D(d)),Ka=c,U=d}else U=Ka=W=null};this.setTexture=function(a,b){if(a.needsUpdate){a.__webglInit||(a.__webglInit=!0,a.addEventListener("dispose",Bb),a.__webglTexture=j.createTexture(),I.info.memory.textures++);j.activeTexture(j.TEXTURE0+b);j.bindTexture(j.TEXTURE_2D,a.__webglTexture);j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,a.flipY);j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha);j.pixelStorei(j.UNPACK_ALIGNMENT,a.unpackAlignment);var c=a.image,d=0===(c.width&
c.width-1)&&0===(c.height&c.height-1),e=D(a.format),f=D(a.type);w(j.TEXTURE_2D,a,d);var g=a.mipmaps;if(a instanceof THREE.DataTexture)if(0<g.length&&d){for(var h=0,i=g.length;h<i;h++)c=g[h],j.texImage2D(j.TEXTURE_2D,h,e,c.width,c.height,0,e,f,c.data);a.generateMipmaps=!1}else j.texImage2D(j.TEXTURE_2D,0,e,c.width,c.height,0,e,f,c.data);else if(a instanceof THREE.CompressedTexture){h=0;for(i=g.length;h<i;h++)c=g[h],a.format!==THREE.RGBAFormat?j.compressedTexImage2D(j.TEXTURE_2D,h,e,c.width,c.height,
0,c.data):j.texImage2D(j.TEXTURE_2D,h,e,c.width,c.height,0,e,f,c.data)}else if(0<g.length&&d){h=0;for(i=g.length;h<i;h++)c=g[h],j.texImage2D(j.TEXTURE_2D,h,e,e,f,c);a.generateMipmaps=!1}else j.texImage2D(j.TEXTURE_2D,0,e,e,f,a.image);a.generateMipmaps&&d&&j.generateMipmap(j.TEXTURE_2D);a.needsUpdate=!1;if(a.onUpdate)a.onUpdate()}else j.activeTexture(j.TEXTURE0+b),j.bindTexture(j.TEXTURE_2D,a.__webglTexture)};this.setRenderTarget=function(a){var b=a instanceof THREE.WebGLRenderTargetCube;if(a&&!a.__webglFramebuffer){void 0===
a.depthBuffer&&(a.depthBuffer=!0);void 0===a.stencilBuffer&&(a.stencilBuffer=!0);a.addEventListener("dispose",Mb);a.__webglTexture=j.createTexture();I.info.memory.textures++;var c=0===(a.width&a.width-1)&&0===(a.height&a.height-1),d=D(a.format),e=D(a.type);if(b){a.__webglFramebuffer=[];a.__webglRenderbuffer=[];j.bindTexture(j.TEXTURE_CUBE_MAP,a.__webglTexture);w(j.TEXTURE_CUBE_MAP,a,c);for(var f=0;6>f;f++){a.__webglFramebuffer[f]=j.createFramebuffer();a.__webglRenderbuffer[f]=j.createRenderbuffer();
j.texImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,d,a.width,a.height,0,d,e,null);var g=a,h=j.TEXTURE_CUBE_MAP_POSITIVE_X+f;j.bindFramebuffer(j.FRAMEBUFFER,a.__webglFramebuffer[f]);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,h,g.__webglTexture,0);E(a.__webglRenderbuffer[f],a)}c&&j.generateMipmap(j.TEXTURE_CUBE_MAP)}else a.__webglFramebuffer=j.createFramebuffer(),a.__webglRenderbuffer=a.shareDepthFrom?a.shareDepthFrom.__webglRenderbuffer:j.createRenderbuffer(),j.bindTexture(j.TEXTURE_2D,a.__webglTexture),
w(j.TEXTURE_2D,a,c),j.texImage2D(j.TEXTURE_2D,0,d,a.width,a.height,0,d,e,null),d=j.TEXTURE_2D,j.bindFramebuffer(j.FRAMEBUFFER,a.__webglFramebuffer),j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,d,a.__webglTexture,0),a.shareDepthFrom?a.depthBuffer&&!a.stencilBuffer?j.framebufferRenderbuffer(j.FRAMEBUFFER,j.DEPTH_ATTACHMENT,j.RENDERBUFFER,a.__webglRenderbuffer):a.depthBuffer&&a.stencilBuffer&&j.framebufferRenderbuffer(j.FRAMEBUFFER,j.DEPTH_STENCIL_ATTACHMENT,j.RENDERBUFFER,a.__webglRenderbuffer):
E(a.__webglRenderbuffer,a),c&&j.generateMipmap(j.TEXTURE_2D);b?j.bindTexture(j.TEXTURE_CUBE_MAP,null):j.bindTexture(j.TEXTURE_2D,null);j.bindRenderbuffer(j.RENDERBUFFER,null);j.bindFramebuffer(j.FRAMEBUFFER,null)}a?(b=b?a.__webglFramebuffer[a.activeCubeFace]:a.__webglFramebuffer,c=a.width,a=a.height,e=d=0):(b=null,c=Ba,a=xa,d=Fa,e=Ga);b!==va&&(j.bindFramebuffer(j.FRAMEBUFFER,b),j.viewport(d,e,c,a),va=b);Va=c;La=a};this.shadowMapPlugin=new THREE.ShadowMapPlugin;this.addPrePlugin(this.shadowMapPlugin);
this.addPostPlugin(new THREE.SpritePlugin);this.addPostPlugin(new THREE.LensFlarePlugin)};THREE.WebGLRenderTarget=function(a,b,c){this.width=a;this.height=b;c=c||{};this.wrapS=void 0!==c.wrapS?c.wrapS:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==c.wrapT?c.wrapT:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==c.magFilter?c.magFilter:THREE.LinearFilter;this.minFilter=void 0!==c.minFilter?c.minFilter:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==c.anisotropy?c.anisotropy:1;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.format=void 0!==c.format?c.format:
THREE.RGBAFormat;this.type=void 0!==c.type?c.type:THREE.UnsignedByteType;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.generateMipmaps=!0;this.shareDepthFrom=null};
THREE.WebGLRenderTarget.prototype={constructor:THREE.WebGLRenderTarget,clone:function(){var a=new THREE.WebGLRenderTarget(this.width,this.height);a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.format=this.format;a.type=this.type;a.depthBuffer=this.depthBuffer;a.stencilBuffer=this.stencilBuffer;a.generateMipmaps=this.generateMipmaps;a.shareDepthFrom=this.shareDepthFrom;
return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube=function(a,b,c){THREE.WebGLRenderTarget.call(this,a,b,c);this.activeCubeFace=0};THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype);THREE.RenderableVertex=function(){this.position=new THREE.Vector3;this.positionWorld=new THREE.Vector3;this.positionScreen=new THREE.Vector4;this.visible=!0};THREE.RenderableVertex.prototype.copy=function(a){this.positionWorld.copy(a.positionWorld);this.positionScreen.copy(a.positionScreen)};THREE.RenderableFace3=function(){this.id=0;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.v3=new THREE.RenderableVertex;this.centroidModel=new THREE.Vector3;this.normalModel=new THREE.Vector3;this.normalModelView=new THREE.Vector3;this.vertexNormalsLength=0;this.vertexNormalsModel=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.vertexNormalsModelView=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.material=this.color=null;this.uvs=[[]];this.z=
0};THREE.RenderableObject=function(){this.id=0;this.object=null;this.z=0};THREE.RenderableSprite=function(){this.id=0;this.object=null;this.rotation=this.z=this.y=this.x=0;this.scale=new THREE.Vector2;this.material=null};THREE.RenderableLine=function(){this.id=0;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.vertexColors=[new THREE.Color,new THREE.Color];this.material=null;this.z=0};THREE.GeometryUtils={merge:function(a,b,c){var d,e,f=a.vertices.length,g=b instanceof THREE.Mesh?b.geometry:b,h=a.vertices,i=g.vertices,k=a.faces,l=g.faces,a=a.faceVertexUvs[0],g=g.faceVertexUvs[0];void 0===c&&(c=0);b instanceof THREE.Mesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,e=(new THREE.Matrix3).getNormalMatrix(d));for(var b=0,n=i.length;b<n;b++){var p=i[b].clone();d&&p.applyMatrix4(d);h.push(p)}b=0;for(n=l.length;b<n;b++){var p=l[b],t,r,m=p.vertexNormals,q=p.vertexColors;t=new THREE.Face3(p.a+
f,p.b+f,p.c+f);t.normal.copy(p.normal);e&&t.normal.applyMatrix3(e).normalize();h=0;for(i=m.length;h<i;h++)r=m[h].clone(),e&&r.applyMatrix3(e).normalize(),t.vertexNormals.push(r);t.color.copy(p.color);h=0;for(i=q.length;h<i;h++)r=q[h],t.vertexColors.push(r.clone());t.materialIndex=p.materialIndex+c;t.centroid.copy(p.centroid);d&&t.centroid.applyMatrix4(d);k.push(t)}b=0;for(n=g.length;b<n;b++){c=g[b];d=[];h=0;for(i=c.length;h<i;h++)d.push(new THREE.Vector2(c[h].x,c[h].y));a.push(d)}},randomPointInTriangle:function(){var a=
new THREE.Vector3;return function(b,c,d){var e=new THREE.Vector3,f=THREE.Math.random16(),g=THREE.Math.random16();1<f+g&&(f=1-f,g=1-g);var h=1-f-g;e.copy(b);e.multiplyScalar(f);a.copy(c);a.multiplyScalar(g);e.add(a);a.copy(d);a.multiplyScalar(h);e.add(a);return e}}(),randomPointInFace:function(a,b){return THREE.GeometryUtils.randomPointInTriangle(b.vertices[a.a],b.vertices[a.b],b.vertices[a.c])},randomPointsInGeometry:function(a,b){function c(a){function b(c,d){if(d<c)return c;var e=c+Math.floor((d-
c)/2);return k[e]>a?b(c,e-1):k[e]<a?b(e+1,d):e}return b(0,k.length-1)}var d,e,f=a.faces,g=a.vertices,h=f.length,i=0,k=[],l,n,p;for(e=0;e<h;e++)d=f[e],l=g[d.a],n=g[d.b],p=g[d.c],d._area=THREE.GeometryUtils.triangleArea(l,n,p),i+=d._area,k[e]=i;d=[];for(e=0;e<b;e++)g=THREE.Math.random16()*i,g=c(g),d[e]=THREE.GeometryUtils.randomPointInFace(f[g],a,!0);return d},triangleArea:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){a.subVectors(d,c);b.subVectors(e,c);a.cross(b);return 0.5*
a.length()}}(),center:function(a){a.computeBoundingBox();var b=a.boundingBox,c=new THREE.Vector3;c.addVectors(b.min,b.max);c.multiplyScalar(-0.5);a.applyMatrix((new THREE.Matrix4).makeTranslation(c.x,c.y,c.z));a.computeBoundingBox();return c},triangulateQuads:function(a){var b,c,d,e,f=[],g=[];b=0;for(c=a.faceVertexUvs.length;b<c;b++)g[b]=[];b=0;for(c=a.faces.length;b<c;b++){f.push(a.faces[b]);d=0;for(e=a.faceVertexUvs.length;d<e;d++)g[d].push(a.faceVertexUvs[d][b])}a.faces=f;a.faceVertexUvs=g;a.computeCentroids();
a.computeFaceNormals();a.computeVertexNormals();a.hasTangents&&a.computeTangents()}};THREE.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c){var d=new THREE.ImageLoader;d.crossOrigin=this.crossOrigin;var e=new THREE.Texture(void 0,b),b=d.load(a,function(){e.needsUpdate=!0;c&&c(e)});e.image=b;e.sourceFile=a;return e},loadCompressedTexture:function(a,b,c,d){var e=new THREE.CompressedTexture;e.mapping=b;var f=new XMLHttpRequest;f.onload=function(){var a=THREE.ImageUtils.parseDDS(f.response,!0);e.format=a.format;e.mipmaps=a.mipmaps;e.image.width=a.width;e.image.height=a.height;
e.generateMipmaps=!1;e.needsUpdate=!0;c&&c(e)};f.onerror=d;f.open("GET",a,!0);f.responseType="arraybuffer";f.send(null);return e},loadTextureCube:function(a,b,c,d){var e=[];e.loadCount=0;var f=new THREE.Texture;f.image=e;void 0!==b&&(f.mapping=b);f.flipY=!1;for(var b=0,g=a.length;b<g;++b){var h=new Image;e[b]=h;h.onload=function(){e.loadCount+=1;6===e.loadCount&&(f.needsUpdate=!0,c&&c(f))};h.onerror=d;h.crossOrigin=this.crossOrigin;h.src=a[b]}return f},loadCompressedTextureCube:function(a,b,c,d){var e=
[];e.loadCount=0;var f=new THREE.CompressedTexture;f.image=e;void 0!==b&&(f.mapping=b);f.flipY=!1;f.generateMipmaps=!1;b=function(a,b){return function(){var d=THREE.ImageUtils.parseDDS(a.response,!0);b.format=d.format;b.mipmaps=d.mipmaps;b.width=d.width;b.height=d.height;e.loadCount+=1;6===e.loadCount&&(f.format=d.format,f.needsUpdate=!0,c&&c(f))}};if(a instanceof Array)for(var g=0,h=a.length;g<h;++g){var i={};e[g]=i;var k=new XMLHttpRequest;k.onload=b(k,i);k.onerror=d;i=a[g];k.open("GET",i,!0);k.responseType=
"arraybuffer";k.send(null)}else k=new XMLHttpRequest,k.onload=function(){var a=THREE.ImageUtils.parseDDS(k.response,!0);if(a.isCubemap){for(var b=a.mipmaps.length/a.mipmapCount,d=0;d<b;d++){e[d]={mipmaps:[]};for(var g=0;g<a.mipmapCount;g++)e[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+g]),e[d].format=a.format,e[d].width=a.width,e[d].height=a.height}f.format=a.format;f.needsUpdate=!0;c&&c(f)}},k.onerror=d,k.open("GET",a,!0),k.responseType="arraybuffer",k.send(null);return f},loadDDSTexture:function(a,
b,c,d){var e=[];e.loadCount=0;var f=new THREE.CompressedTexture;f.image=e;void 0!==b&&(f.mapping=b);f.flipY=!1;f.generateMipmaps=!1;var g=new XMLHttpRequest;g.onload=function(){var a=THREE.ImageUtils.parseDDS(g.response,!0);if(a.isCubemap)for(var b=a.mipmaps.length/a.mipmapCount,d=0;d<b;d++){e[d]={mipmaps:[]};for(var l=0;l<a.mipmapCount;l++)e[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+l]),e[d].format=a.format,e[d].width=a.width,e[d].height=a.height}else f.image.width=a.width,f.image.height=a.height,
f.mipmaps=a.mipmaps;f.format=a.format;f.needsUpdate=!0;c&&c(f)};g.onerror=d;g.open("GET",a,!0);g.responseType="arraybuffer";g.send(null);return f},parseDDS:function(a,b){function c(a){return a.charCodeAt(0)+(a.charCodeAt(1)<<8)+(a.charCodeAt(2)<<16)+(a.charCodeAt(3)<<24)}var d={mipmaps:[],width:0,height:0,format:null,mipmapCount:1},e=c("DXT1"),f=c("DXT3"),g=c("DXT5"),h=new Int32Array(a,0,31);if(542327876!==h[0])return console.error("ImageUtils.parseDDS(): Invalid magic number in DDS header"),d;if(!h[20]&
4)return console.error("ImageUtils.parseDDS(): Unsupported format, must contain a FourCC code"),d;var i=h[21],k=!1;switch(i){case e:e=8;d.format=THREE.RGB_S3TC_DXT1_Format;break;case f:e=16;d.format=THREE.RGBA_S3TC_DXT3_Format;break;case g:e=16;d.format=THREE.RGBA_S3TC_DXT5_Format;break;default:if(32==h[22]&&h[23]&16711680&&h[24]&65280&&h[25]&255&&h[26]&4278190080)k=!0,e=64,d.format=THREE.RGBAFormat;else return console.error("ImageUtils.parseDDS(): Unsupported FourCC code: ",String.fromCharCode(i&
255,i>>8&255,i>>16&255,i>>24&255)),d}d.mipmapCount=1;h[2]&131072&&!1!==b&&(d.mipmapCount=Math.max(1,h[7]));d.isCubemap=h[28]&512?!0:!1;d.width=h[4];d.height=h[3];for(var h=h[1]+4,f=d.width,g=d.height,i=d.isCubemap?6:1,l=0;l<i;l++){for(var n=0;n<d.mipmapCount;n++){if(k){var p;p=f;for(var t=g,r=4*p*t,m=new Uint8Array(a,h,r),r=new Uint8Array(r),q=0,u=0,s=0;s<t;s++)for(var v=0;v<p;v++){var z=m[u];u++;var G=m[u];u++;var N=m[u];u++;var C=m[u];u++;r[q]=N;q++;r[q]=G;q++;r[q]=z;q++;r[q]=C;q++}p=r;t=p.length}else t=
Math.max(4,f)/4*Math.max(4,g)/4*e,p=new Uint8Array(a,h,t);d.mipmaps.push({data:p,width:f,height:g});h+=t;f=Math.max(0.5*f,1);g=Math.max(0.5*g,1)}f=d.width;g=d.height}return d},getNormalMap:function(a,b){var c=function(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);return[a[0]/b,a[1]/b,a[2]/b]},b=b|1,d=a.width,e=a.height,f=document.createElement("canvas");f.width=d;f.height=e;var g=f.getContext("2d");g.drawImage(a,0,0);for(var h=g.getImageData(0,0,d,e).data,i=g.createImageData(d,e),k=i.data,l=0;l<
d;l++)for(var n=0;n<e;n++){var p=0>n-1?0:n-1,t=n+1>e-1?e-1:n+1,r=0>l-1?0:l-1,m=l+1>d-1?d-1:l+1,q=[],u=[0,0,h[4*(n*d+l)]/255*b];q.push([-1,0,h[4*(n*d+r)]/255*b]);q.push([-1,-1,h[4*(p*d+r)]/255*b]);q.push([0,-1,h[4*(p*d+l)]/255*b]);q.push([1,-1,h[4*(p*d+m)]/255*b]);q.push([1,0,h[4*(n*d+m)]/255*b]);q.push([1,1,h[4*(t*d+m)]/255*b]);q.push([0,1,h[4*(t*d+l)]/255*b]);q.push([-1,1,h[4*(t*d+r)]/255*b]);p=[];r=q.length;for(t=0;t<r;t++){var m=q[t],s=q[(t+1)%r],m=[m[0]-u[0],m[1]-u[1],m[2]-u[2]],s=[s[0]-u[0],
s[1]-u[1],s[2]-u[2]];p.push(c([m[1]*s[2]-m[2]*s[1],m[2]*s[0]-m[0]*s[2],m[0]*s[1]-m[1]*s[0]]))}q=[0,0,0];for(t=0;t<p.length;t++)q[0]+=p[t][0],q[1]+=p[t][1],q[2]+=p[t][2];q[0]/=p.length;q[1]/=p.length;q[2]/=p.length;u=4*(n*d+l);k[u]=255*((q[0]+1)/2)|0;k[u+1]=255*((q[1]+1)/2)|0;k[u+2]=255*q[2]|0;k[u+3]=255}g.putImageData(i,0,0);return f},generateDataTexture:function(a,b,c){for(var d=a*b,e=new Uint8Array(3*d),f=Math.floor(255*c.r),g=Math.floor(255*c.g),c=Math.floor(255*c.b),h=0;h<d;h++)e[3*h]=f,e[3*h+
1]=g,e[3*h+2]=c;a=new THREE.DataTexture(e,a,b,THREE.RGBFormat);a.needsUpdate=!0;return a}};THREE.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new THREE.Object3D,d=0,e=b.length;d<e;d++)c.add(new THREE.Mesh(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){var d=new THREE.Matrix4;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};THREE.FontUtils={faces:{},face:"helvetiker",weight:"normal",style:"normal",size:150,divisions:10,getFace:function(){return this.faces[this.face][this.weight][this.style]},loadFace:function(a){var b=a.familyName.toLowerCase();this.faces[b]=this.faces[b]||{};this.faces[b][a.cssFontWeight]=this.faces[b][a.cssFontWeight]||{};this.faces[b][a.cssFontWeight][a.cssFontStyle]=a;return this.faces[b][a.cssFontWeight][a.cssFontStyle]=a},drawText:function(a){for(var b=this.getFace(),c=this.size/b.resolution,d=
0,e=String(a).split(""),f=e.length,g=[],a=0;a<f;a++){var h=new THREE.Path,h=this.extractGlyphPoints(e[a],b,c,d,h),d=d+h.offset;g.push(h.path)}return{paths:g,offset:d/2}},extractGlyphPoints:function(a,b,c,d,e){var f=[],g,h,i,k,l,n,p,t,r,m,q,u=b.glyphs[a]||b.glyphs["?"];if(u){if(u.o){b=u._cachedOutline||(u._cachedOutline=u.o.split(" "));k=b.length;for(a=0;a<k;)switch(i=b[a++],i){case "m":i=b[a++]*c+d;l=b[a++]*c;e.moveTo(i,l);break;case "l":i=b[a++]*c+d;l=b[a++]*c;e.lineTo(i,l);break;case "q":i=b[a++]*
c+d;l=b[a++]*c;t=b[a++]*c+d;r=b[a++]*c;e.quadraticCurveTo(t,r,i,l);if(g=f[f.length-1]){n=g.x;p=g.y;g=1;for(h=this.divisions;g<=h;g++){var s=g/h;THREE.Shape.Utils.b2(s,n,t,i);THREE.Shape.Utils.b2(s,p,r,l)}}break;case "b":if(i=b[a++]*c+d,l=b[a++]*c,t=b[a++]*c+d,r=b[a++]*-c,m=b[a++]*c+d,q=b[a++]*-c,e.bezierCurveTo(i,l,t,r,m,q),g=f[f.length-1]){n=g.x;p=g.y;g=1;for(h=this.divisions;g<=h;g++)s=g/h,THREE.Shape.Utils.b3(s,n,t,m,i),THREE.Shape.Utils.b3(s,p,r,q,l)}}}return{offset:u.ha*c,path:e}}}};
THREE.FontUtils.generateShapes=function(a,b){var b=b||{},c=void 0!==b.curveSegments?b.curveSegments:4,d=void 0!==b.font?b.font:"helvetiker",e=void 0!==b.weight?b.weight:"normal",f=void 0!==b.style?b.style:"normal";THREE.FontUtils.size=void 0!==b.size?b.size:100;THREE.FontUtils.divisions=c;THREE.FontUtils.face=d;THREE.FontUtils.weight=e;THREE.FontUtils.style=f;c=THREE.FontUtils.drawText(a).paths;d=[];e=0;for(f=c.length;e<f;e++)Array.prototype.push.apply(d,c[e].toShapes());return d};
(function(a){var b=function(a){for(var b=a.length,e=0,f=b-1,g=0;g<b;f=g++)e+=a[f].x*a[g].y-a[g].x*a[f].y;return 0.5*e};a.Triangulate=function(a,d){var e=a.length;if(3>e)return null;var f=[],g=[],h=[],i,k,l;if(0<b(a))for(k=0;k<e;k++)g[k]=k;else for(k=0;k<e;k++)g[k]=e-1-k;var n=2*e;for(k=e-1;2<e;){if(0>=n--){console.log("Warning, unable to triangulate polygon!");break}i=k;e<=i&&(i=0);k=i+1;e<=k&&(k=0);l=k+1;e<=l&&(l=0);var p;a:{var t=p=void 0,r=void 0,m=void 0,q=void 0,u=void 0,s=void 0,v=void 0,z=
void 0,t=a[g[i]].x,r=a[g[i]].y,m=a[g[k]].x,q=a[g[k]].y,u=a[g[l]].x,s=a[g[l]].y;if(1E-10>(m-t)*(s-r)-(q-r)*(u-t))p=!1;else{var G=void 0,N=void 0,C=void 0,B=void 0,x=void 0,F=void 0,L=void 0,w=void 0,E=void 0,y=void 0,E=w=L=z=v=void 0,G=u-m,N=s-q,C=t-u,B=r-s,x=m-t,F=q-r;for(p=0;p<e;p++)if(!(p===i||p===k||p===l))if(v=a[g[p]].x,z=a[g[p]].y,L=v-t,w=z-r,E=v-m,y=z-q,v-=u,z-=s,E=G*y-N*E,L=x*w-F*L,w=C*z-B*v,-1E-10<=E&&-1E-10<=w&&-1E-10<=L){p=!1;break a}p=!0}}if(p){f.push([a[g[i]],a[g[k]],a[g[l]]]);h.push([g[i],
g[k],g[l]]);i=k;for(l=k+1;l<e;i++,l++)g[i]=g[l];e--;n=2*e}}return d?h:f};a.Triangulate.area=b;return a})(THREE.FontUtils);self._typeface_js={faces:THREE.FontUtils.faces,loadFace:THREE.FontUtils.loadFace};THREE.typeface_js=self._typeface_js;THREE.Curve=function(){};THREE.Curve.prototype.getPoint=function(){console.log("Warning, getPoint() not implemented!");return null};THREE.Curve.prototype.getPointAt=function(a){a=this.getUtoTmapping(a);return this.getPoint(a)};THREE.Curve.prototype.getPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPoint(b/a));return c};THREE.Curve.prototype.getSpacedPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPointAt(b/a));return c};
THREE.Curve.prototype.getLength=function(){var a=this.getLengths();return a[a.length-1]};THREE.Curve.prototype.getLengths=function(a){a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length==a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=b};
THREE.Curve.prototype.updateArcLengths=function(){this.needsUpdate=!0;this.getLengths()};THREE.Curve.prototype.getUtoTmapping=function(a,b){var c=this.getLengths(),d=0,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-1,i;g<=h;)if(d=Math.floor(g+(h-g)/2),i=c[d]-f,0>i)g=d+1;else if(0<i)h=d-1;else{h=d;break}d=h;if(c[d]==f)return d/(e-1);g=c[d];return c=(d+(f-g)/(c[d+1]-g))/(e-1)};THREE.Curve.prototype.getTangent=function(a){var b=a-1E-4,a=a+1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()};
THREE.Curve.prototype.getTangentAt=function(a){a=this.getUtoTmapping(a);return this.getTangent(a)};
THREE.Curve.Utils={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},tangentCubicBezier:function(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*a-2*a)},interpolate:function(a,b,c,d,e){var a=0.5*(c-a),d=0.5*(d-b),f=e*e;return(2*b-2*c+a+d)*e*f+(-3*b+3*c-2*a-d)*f+a*e+b}};
THREE.Curve.create=function(a,b){a.prototype=Object.create(THREE.Curve.prototype);a.prototype.getPoint=b;return a};THREE.CurvePath=function(){this.curves=[];this.bends=[];this.autoClose=!1};THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype);THREE.CurvePath.prototype.add=function(a){this.curves.push(a)};THREE.CurvePath.prototype.checkConnection=function(){};THREE.CurvePath.prototype.closePath=function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new THREE.LineCurve(b,a))};
THREE.CurvePath.prototype.getPoint=function(a){for(var b=a*this.getLength(),c=this.getCurveLengths(),a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],b=1-b/a.getLength(),a.getPointAt(b);a++}return null};THREE.CurvePath.prototype.getLength=function(){var a=this.getCurveLengths();return a[a.length-1]};
THREE.CurvePath.prototype.getCurveLengths=function(){if(this.cacheLengths&&this.cacheLengths.length==this.curves.length)return this.cacheLengths;var a=[],b=0,c,d=this.curves.length;for(c=0;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a};
THREE.CurvePath.prototype.getBoundingBox=function(){var a=this.getPoints(),b,c,d,e,f,g;b=c=Number.NEGATIVE_INFINITY;e=f=Number.POSITIVE_INFINITY;var h,i,k,l,n=a[0]instanceof THREE.Vector3;l=n?new THREE.Vector3:new THREE.Vector2;i=0;for(k=a.length;i<k;i++)h=a[i],h.x>b?b=h.x:h.x<e&&(e=h.x),h.y>c?c=h.y:h.y<f&&(f=h.y),n&&(h.z>d?d=h.z:h.z<g&&(g=h.z)),l.add(h);a={minX:e,minY:f,maxX:b,maxY:c,centroid:l.divideScalar(k)};n&&(a.maxZ=d,a.minZ=g);return a};
THREE.CurvePath.prototype.createPointsGeometry=function(a){a=this.getPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createSpacedPointsGeometry=function(a){a=this.getSpacedPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createGeometry=function(a){for(var b=new THREE.Geometry,c=0;c<a.length;c++)b.vertices.push(new THREE.Vector3(a[c].x,a[c].y,a[c].z||0));return b};THREE.CurvePath.prototype.addWrapPath=function(a){this.bends.push(a)};
THREE.CurvePath.prototype.getTransformedPoints=function(a,b){var c=this.getPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};THREE.CurvePath.prototype.getTransformedSpacedPoints=function(a,b){var c=this.getSpacedPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};
THREE.CurvePath.prototype.getWrapPoints=function(a,b){var c=this.getBoundingBox(),d,e,f,g,h,i;d=0;for(e=a.length;d<e;d++)f=a[d],g=f.x,h=f.y,i=g/c.maxX,i=b.getUtoTmapping(i,g),g=b.getPoint(i),i=b.getTangent(i),i.set(-i.y,i.x).multiplyScalar(h),f.x=g.x+i.x,f.y=g.y+i.y;return a};THREE.Gyroscope=function(){THREE.Object3D.call(this)};THREE.Gyroscope.prototype=Object.create(THREE.Object3D.prototype);
THREE.Gyroscope.prototype.updateMatrixWorld=function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)this.parent?(this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorld.decompose(this.translationWorld,this.quaternionWorld,this.scaleWorld),this.matrix.decompose(this.translationObject,this.quaternionObject,this.scaleObject),this.matrixWorld.compose(this.translationWorld,this.quaternionObject,this.scaleWorld)):this.matrixWorld.copy(this.matrix),
this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)};THREE.Gyroscope.prototype.translationWorld=new THREE.Vector3;THREE.Gyroscope.prototype.translationObject=new THREE.Vector3;THREE.Gyroscope.prototype.quaternionWorld=new THREE.Quaternion;THREE.Gyroscope.prototype.quaternionObject=new THREE.Quaternion;THREE.Gyroscope.prototype.scaleWorld=new THREE.Vector3;THREE.Gyroscope.prototype.scaleObject=new THREE.Vector3;THREE.Path=function(a){THREE.CurvePath.call(this);this.actions=[];a&&this.fromPoints(a)};THREE.Path.prototype=Object.create(THREE.CurvePath.prototype);THREE.PathActions={MOVE_TO:"moveTo",LINE_TO:"lineTo",QUADRATIC_CURVE_TO:"quadraticCurveTo",BEZIER_CURVE_TO:"bezierCurveTo",CSPLINE_THRU:"splineThru",ARC:"arc",ELLIPSE:"ellipse"};THREE.Path.prototype.fromPoints=function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)};
THREE.Path.prototype.moveTo=function(a,b){var c=Array.prototype.slice.call(arguments);this.actions.push({action:THREE.PathActions.MOVE_TO,args:c})};THREE.Path.prototype.lineTo=function(a,b){var c=Array.prototype.slice.call(arguments),d=this.actions[this.actions.length-1].args,d=new THREE.LineCurve(new THREE.Vector2(d[d.length-2],d[d.length-1]),new THREE.Vector2(a,b));this.curves.push(d);this.actions.push({action:THREE.PathActions.LINE_TO,args:c})};
THREE.Path.prototype.quadraticCurveTo=function(a,b,c,d){var e=Array.prototype.slice.call(arguments),f=this.actions[this.actions.length-1].args,f=new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length-2],f[f.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d));this.curves.push(f);this.actions.push({action:THREE.PathActions.QUADRATIC_CURVE_TO,args:e})};
THREE.Path.prototype.bezierCurveTo=function(a,b,c,d,e,f){var g=Array.prototype.slice.call(arguments),h=this.actions[this.actions.length-1].args,h=new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length-2],h[h.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,f));this.curves.push(h);this.actions.push({action:THREE.PathActions.BEZIER_CURVE_TO,args:g})};
THREE.Path.prototype.splineThru=function(a){var b=Array.prototype.slice.call(arguments),c=this.actions[this.actions.length-1].args,c=[new THREE.Vector2(c[c.length-2],c[c.length-1])];Array.prototype.push.apply(c,a);c=new THREE.SplineCurve(c);this.curves.push(c);this.actions.push({action:THREE.PathActions.CSPLINE_THRU,args:b})};THREE.Path.prototype.arc=function(a,b,c,d,e,f){var g=this.actions[this.actions.length-1].args;this.absarc(a+g[g.length-2],b+g[g.length-1],c,d,e,f)};
THREE.Path.prototype.absarc=function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)};THREE.Path.prototype.ellipse=function(a,b,c,d,e,f,g){var h=this.actions[this.actions.length-1].args;this.absellipse(a+h[h.length-2],b+h[h.length-1],c,d,e,f,g)};THREE.Path.prototype.absellipse=function(a,b,c,d,e,f,g){var h=Array.prototype.slice.call(arguments),i=new THREE.EllipseCurve(a,b,c,d,e,f,g);this.curves.push(i);i=i.getPoint(1);h.push(i.x);h.push(i.y);this.actions.push({action:THREE.PathActions.ELLIPSE,args:h})};
THREE.Path.prototype.getSpacedPoints=function(a){a||(a=40);for(var b=[],c=0;c<a;c++)b.push(this.getPoint(c/a));return b};
THREE.Path.prototype.getPoints=function(a,b){if(this.useSpacedPoints)return console.log("tata"),this.getSpacedPoints(a,b);var a=a||12,c=[],d,e,f,g,h,i,k,l,n,p,t,r,m;d=0;for(e=this.actions.length;d<e;d++)switch(f=this.actions[d],g=f.action,f=f.args,g){case THREE.PathActions.MOVE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.LINE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.QUADRATIC_CURVE_TO:h=f[2];i=f[3];n=f[0];p=f[1];0<c.length?(g=c[c.length-1],t=g.x,
r=g.y):(g=this.actions[d-1].args,t=g[g.length-2],r=g[g.length-1]);for(f=1;f<=a;f++)m=f/a,g=THREE.Shape.Utils.b2(m,t,n,h),m=THREE.Shape.Utils.b2(m,r,p,i),c.push(new THREE.Vector2(g,m));break;case THREE.PathActions.BEZIER_CURVE_TO:h=f[4];i=f[5];n=f[0];p=f[1];k=f[2];l=f[3];0<c.length?(g=c[c.length-1],t=g.x,r=g.y):(g=this.actions[d-1].args,t=g[g.length-2],r=g[g.length-1]);for(f=1;f<=a;f++)m=f/a,g=THREE.Shape.Utils.b3(m,t,n,k,h),m=THREE.Shape.Utils.b3(m,r,p,l,i),c.push(new THREE.Vector2(g,m));break;case THREE.PathActions.CSPLINE_THRU:g=
this.actions[d-1].args;m=[new THREE.Vector2(g[g.length-2],g[g.length-1])];g=a*f[0].length;m=m.concat(f[0]);m=new THREE.SplineCurve(m);for(f=1;f<=g;f++)c.push(m.getPointAt(f/g));break;case THREE.PathActions.ARC:h=f[0];i=f[1];p=f[2];k=f[3];g=f[4];n=!!f[5];t=g-k;r=2*a;for(f=1;f<=r;f++)m=f/r,n||(m=1-m),m=k+m*t,g=h+p*Math.cos(m),m=i+p*Math.sin(m),c.push(new THREE.Vector2(g,m));break;case THREE.PathActions.ELLIPSE:h=f[0];i=f[1];p=f[2];l=f[3];k=f[4];g=f[5];n=!!f[6];t=g-k;r=2*a;for(f=1;f<=r;f++)m=f/r,n||
(m=1-m),m=k+m*t,g=h+p*Math.cos(m),m=i+l*Math.sin(m),c.push(new THREE.Vector2(g,m))}d=c[c.length-1];1E-10>Math.abs(d.x-c[0].x)&&1E-10>Math.abs(d.y-c[0].y)&&c.splice(c.length-1,1);b&&c.push(c[0]);return c};
THREE.Path.prototype.toShapes=function(a){var b,c,d,e,f=[],g=new THREE.Path;b=0;for(c=this.actions.length;b<c;b++)d=this.actions[b],e=d.args,d=d.action,d==THREE.PathActions.MOVE_TO&&0!=g.actions.length&&(f.push(g),g=new THREE.Path),g[d].apply(g,e);0!=g.actions.length&&f.push(g);if(0==f.length)return[];var h;e=[];if(1==f.length)return d=f[0],h=new THREE.Shape,h.actions=d.actions,h.curves=d.curves,e.push(h),e;b=!THREE.Shape.Utils.isClockWise(f[0].getPoints());if(a?!b:b){h=new THREE.Shape;b=0;for(c=
f.length;b<c;b++)d=f[b],g=THREE.Shape.Utils.isClockWise(d.getPoints()),(g=a?!g:g)?(h.actions=d.actions,h.curves=d.curves,e.push(h),h=new THREE.Shape):h.holes.push(d)}else{h=void 0;b=0;for(c=f.length;b<c;b++)d=f[b],g=THREE.Shape.Utils.isClockWise(d.getPoints()),(g=a?!g:g)?(h&&e.push(h),h=new THREE.Shape,h.actions=d.actions,h.curves=d.curves):h.holes.push(d);e.push(h)}return e};THREE.Shape=function(){THREE.Path.apply(this,arguments);this.holes=[]};THREE.Shape.prototype=Object.create(THREE.Path.prototype);THREE.Shape.prototype.extrude=function(a){return new THREE.ExtrudeGeometry(this,a)};THREE.Shape.prototype.makeGeometry=function(a){return new THREE.ShapeGeometry(this,a)};THREE.Shape.prototype.getPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedPoints(a,this.bends);return d};
THREE.Shape.prototype.getSpacedPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedSpacedPoints(a,this.bends);return d};THREE.Shape.prototype.extractAllPoints=function(a){return{shape:this.getTransformedPoints(a),holes:this.getPointsHoles(a)}};THREE.Shape.prototype.extractPoints=function(a){return this.useSpacedPoints?this.extractAllSpacedPoints(a):this.extractAllPoints(a)};
THREE.Shape.prototype.extractAllSpacedPoints=function(a){return{shape:this.getTransformedSpacedPoints(a),holes:this.getSpacedPointsHoles(a)}};
THREE.Shape.Utils={removeHoles:function(a,b){var c=a.concat(),d=c.concat(),e,f,g,h,i,k,l,n,p,t,r=[];for(i=0;i<b.length;i++){k=b[i];Array.prototype.push.apply(d,k);f=Number.POSITIVE_INFINITY;for(e=0;e<k.length;e++){p=k[e];t=[];for(n=0;n<c.length;n++)l=c[n],l=p.distanceToSquared(l),t.push(l),l<f&&(f=l,g=e,h=n)}e=0<=h-1?h-1:c.length-1;f=0<=g-1?g-1:k.length-1;var m=[k[g],c[h],c[e]];n=THREE.FontUtils.Triangulate.area(m);var q=[k[g],k[f],c[h]];p=THREE.FontUtils.Triangulate.area(q);t=h;l=g;h+=1;g+=-1;0>
h&&(h+=c.length);h%=c.length;0>g&&(g+=k.length);g%=k.length;e=0<=h-1?h-1:c.length-1;f=0<=g-1?g-1:k.length-1;m=[k[g],c[h],c[e]];m=THREE.FontUtils.Triangulate.area(m);q=[k[g],k[f],c[h]];q=THREE.FontUtils.Triangulate.area(q);n+p>m+q&&(h=t,g=l,0>h&&(h+=c.length),h%=c.length,0>g&&(g+=k.length),g%=k.length,e=0<=h-1?h-1:c.length-1,f=0<=g-1?g-1:k.length-1);n=c.slice(0,h);p=c.slice(h);t=k.slice(g);l=k.slice(0,g);f=[k[g],k[f],c[h]];r.push([k[g],c[h],c[e]]);r.push(f);c=n.concat(t).concat(l).concat(p)}return{shape:c,
isolatedPts:r,allpoints:d}},triangulateShape:function(a,b){var c=THREE.Shape.Utils.removeHoles(a,b),d=c.allpoints,e=c.isolatedPts,c=THREE.FontUtils.Triangulate(c.shape,!1),f,g,h,i,k={};f=0;for(g=d.length;f<g;f++)i=d[f].x+":"+d[f].y,void 0!==k[i]&&console.log("Duplicate point",i),k[i]=f;f=0;for(g=c.length;f<g;f++){h=c[f];for(d=0;3>d;d++)i=h[d].x+":"+h[d].y,i=k[i],void 0!==i&&(h[d]=i)}f=0;for(g=e.length;f<g;f++){h=e[f];for(d=0;3>d;d++)i=h[d].x+":"+h[d].y,i=k[i],void 0!==i&&(h[d]=i)}return c.concat(e)},
isClockWise:function(a){return 0>THREE.FontUtils.Triangulate.area(a)},b2p0:function(a,b){var c=1-a;return c*c*b},b2p1:function(a,b){return 2*(1-a)*a*b},b2p2:function(a,b){return a*a*b},b2:function(a,b,c,d){return this.b2p0(a,b)+this.b2p1(a,c)+this.b2p2(a,d)},b3p0:function(a,b){var c=1-a;return c*c*c*b},b3p1:function(a,b){var c=1-a;return 3*c*c*a*b},b3p2:function(a,b){return 3*(1-a)*a*a*b},b3p3:function(a,b){return a*a*a*b},b3:function(a,b,c,d,e){return this.b3p0(a,b)+this.b3p1(a,c)+this.b3p2(a,d)+
this.b3p3(a,e)}};THREE.LineCurve=function(a,b){this.v1=a;this.v2=b};THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.LineCurve.prototype.getPoint=function(a){var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b};THREE.LineCurve.prototype.getPointAt=function(a){return this.getPoint(a)};THREE.LineCurve.prototype.getTangent=function(){return this.v2.clone().sub(this.v1).normalize()};THREE.QuadraticBezierCurve=function(a,b,c){this.v0=a;this.v1=b;this.v2=c};THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.QuadraticBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);return new THREE.Vector2(b,a)};
THREE.QuadraticBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.y,this.v1.y,this.v2.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.CubicBezierCurve=function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d};THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.CubicBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);return new THREE.Vector2(b,a)};
THREE.CubicBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.SplineCurve=function(a){this.points=void 0==a?[]:a};THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.SplineCurve.prototype.getPoint=function(a){var b=new THREE.Vector2,c=[],d=this.points,e;e=(d.length-1)*a;a=Math.floor(e);e-=a;c[0]=0==a?a:a-1;c[1]=a;c[2]=a>d.length-2?d.length-1:a+1;c[3]=a>d.length-3?d.length-1:a+2;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);return b};THREE.EllipseCurve=function(a,b,c,d,e,f,g){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=g};THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype);
THREE.EllipseCurve.prototype.getPoint=function(a){var b;b=this.aEndAngle-this.aStartAngle;0>b&&(b+=2*Math.PI);b>2*Math.PI&&(b-=2*Math.PI);b=!0===this.aClockwise?this.aEndAngle+(1-a)*(2*Math.PI-b):this.aStartAngle+a*b;a=this.aX+this.xRadius*Math.cos(b);b=this.aY+this.yRadius*Math.sin(b);return new THREE.Vector2(a,b)};THREE.ArcCurve=function(a,b,c,d,e,f){THREE.EllipseCurve.call(this,a,b,c,c,d,e,f)};THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype);THREE.LineCurve3=THREE.Curve.create(function(a,b){this.v1=a;this.v2=b},function(a){var b=new THREE.Vector3;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b});THREE.QuadraticBezierCurve3=THREE.Curve.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c},function(a){var b,c;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);c=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);a=THREE.Shape.Utils.b2(a,this.v0.z,this.v1.z,this.v2.z);return new THREE.Vector3(b,c,a)});THREE.CubicBezierCurve3=THREE.Curve.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d},function(a){var b,c;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);c=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);a=THREE.Shape.Utils.b3(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z);return new THREE.Vector3(b,c,a)});THREE.SplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e,a=(d.length-1)*a;e=Math.floor(a);a-=e;c[0]=0==e?e:e-1;c[1]=e;c[2]=e>d.length-2?d.length-1:e+1;c[3]=e>d.length-3?d.length-1:e+2;e=d[c[0]];var f=d[c[1]],g=d[c[2]],c=d[c[3]];b.x=THREE.Curve.Utils.interpolate(e.x,f.x,g.x,c.x,a);b.y=THREE.Curve.Utils.interpolate(e.y,f.y,g.y,c.y,a);b.z=THREE.Curve.Utils.interpolate(e.z,f.z,g.z,c.z,a);return b});THREE.ClosedSplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e;e=(d.length-0)*a;a=Math.floor(e);e-=a;a+=0<a?0:(Math.floor(Math.abs(a)/d.length)+1)*d.length;c[0]=(a-1)%d.length;c[1]=a%d.length;c[2]=(a+1)%d.length;c[3]=(a+2)%d.length;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);b.z=THREE.Curve.Utils.interpolate(d[c[0]].z,
d[c[1]].z,d[c[2]].z,d[c[3]].z,e);return b});THREE.AnimationHandler=function(){var a=[],b={},c={update:function(b){for(var c=0;c<a.length;c++)a[c].update(b)},addToUpdate:function(b){-1===a.indexOf(b)&&a.push(b)},removeFromUpdate:function(b){b=a.indexOf(b);-1!==b&&a.splice(b,1)},add:function(a){void 0!==b[a.name]&&console.log("THREE.AnimationHandler.add: Warning! "+a.name+" already exists in library. Overwriting.");b[a.name]=a;if(!0!==a.initialized){for(var c=0;c<a.hierarchy.length;c++){for(var d=0;d<a.hierarchy[c].keys.length;d++)if(0>a.hierarchy[c].keys[d].time&&
(a.hierarchy[c].keys[d].time=0),void 0!==a.hierarchy[c].keys[d].rot&&!(a.hierarchy[c].keys[d].rot instanceof THREE.Quaternion)){var h=a.hierarchy[c].keys[d].rot;a.hierarchy[c].keys[d].rot=new THREE.Quaternion(h[0],h[1],h[2],h[3])}if(a.hierarchy[c].keys.length&&void 0!==a.hierarchy[c].keys[0].morphTargets){h={};for(d=0;d<a.hierarchy[c].keys.length;d++)for(var i=0;i<a.hierarchy[c].keys[d].morphTargets.length;i++){var k=a.hierarchy[c].keys[d].morphTargets[i];h[k]=-1}a.hierarchy[c].usedMorphTargets=h;
for(d=0;d<a.hierarchy[c].keys.length;d++){var l={};for(k in h){for(i=0;i<a.hierarchy[c].keys[d].morphTargets.length;i++)if(a.hierarchy[c].keys[d].morphTargets[i]===k){l[k]=a.hierarchy[c].keys[d].morphTargetsInfluences[i];break}i===a.hierarchy[c].keys[d].morphTargets.length&&(l[k]=0)}a.hierarchy[c].keys[d].morphTargetsInfluences=l}}for(d=1;d<a.hierarchy[c].keys.length;d++)a.hierarchy[c].keys[d].time===a.hierarchy[c].keys[d-1].time&&(a.hierarchy[c].keys.splice(d,1),d--);for(d=0;d<a.hierarchy[c].keys.length;d++)a.hierarchy[c].keys[d].index=
d}d=parseInt(a.length*a.fps,10);a.JIT={};a.JIT.hierarchy=[];for(c=0;c<a.hierarchy.length;c++)a.JIT.hierarchy.push(Array(d));a.initialized=!0}},get:function(a){if("string"===typeof a){if(b[a])return b[a];console.log("THREE.AnimationHandler.get: Couldn't find animation "+a);return null}},parse:function(a){var b=[];if(a instanceof THREE.SkinnedMesh)for(var c=0;c<a.bones.length;c++)b.push(a.bones[c]);else d(a,b);return b}},d=function(a,b){b.push(a);for(var c=0;c<a.children.length;c++)d(a.children[c],
b)};c.LINEAR=0;c.CATMULLROM=1;c.CATMULLROM_FORWARD=2;return c}();THREE.Animation=function(a,b,c){this.root=a;this.data=THREE.AnimationHandler.get(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=1;this.isPlaying=!1;this.loop=this.isPaused=!0;this.interpolationType=void 0!==c?c:THREE.AnimationHandler.LINEAR;this.points=[];this.target=new THREE.Vector3};
THREE.Animation.prototype.play=function(a,b){if(!1===this.isPlaying){this.isPlaying=!0;this.loop=void 0!==a?a:!0;this.currentTime=void 0!==b?b:0;var c,d=this.hierarchy.length,e;for(c=0;c<d;c++){e=this.hierarchy[c];e.matrixAutoUpdate=!0;void 0===e.animationCache&&(e.animationCache={},e.animationCache.prevKey={pos:0,rot:0,scl:0},e.animationCache.nextKey={pos:0,rot:0,scl:0},e.animationCache.originalMatrix=e instanceof THREE.Bone?e.skinMatrix:e.matrix);var f=e.animationCache.prevKey;e=e.animationCache.nextKey;
f.pos=this.data.hierarchy[c].keys[0];f.rot=this.data.hierarchy[c].keys[0];f.scl=this.data.hierarchy[c].keys[0];e.pos=this.getNextKeyWith("pos",c,1);e.rot=this.getNextKeyWith("rot",c,1);e.scl=this.getNextKeyWith("scl",c,1)}this.update(0)}this.isPaused=!1;THREE.AnimationHandler.addToUpdate(this)};THREE.Animation.prototype.pause=function(){!0===this.isPaused?THREE.AnimationHandler.addToUpdate(this):THREE.AnimationHandler.removeFromUpdate(this);this.isPaused=!this.isPaused};
THREE.Animation.prototype.stop=function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.removeFromUpdate(this)};
THREE.Animation.prototype.update=function(a){if(!1!==this.isPlaying){var b=["pos","rot","scl"],c,d,e,f,g,h,i,k,l;for(l=this.currentTime+=a*this.timeScale;this.currentTime>this.data.length;)this.currentTime-=this.data.length;k=this.currentTime%=this.data.length;parseInt(Math.min(k*this.data.fps,this.data.length*this.data.fps),10);for(var n=0,p=this.hierarchy.length;n<p;n++){a=this.hierarchy[n];i=a.animationCache;for(var t=0;3>t;t++){c=b[t];g=i.prevKey[c];h=i.nextKey[c];if(h.time<=l){if(k<=l)if(this.loop){g=
this.data.hierarchy[n].keys[0];for(h=this.getNextKeyWith(c,n,1);null!==h&&h.time<k&&h.index>g.index;)g=h,h=this.getNextKeyWith(c,n,h.index+1)}else{this.stop();return}else{do g=h,h=this.getNextKeyWith(c,n,h.index+1);while(null!==h&&h.time<k&&h.index>g.index)}i.prevKey[c]=g;i.nextKey[c]=h}a.matrixAutoUpdate=!0;a.matrixWorldNeedsUpdate=!0;d=(k-g.time)/(h.time-g.time);e=g[c];f=h[c];if(0>d||1<d)console.log("THREE.Animation.update: Warning! Scale out of bounds:"+d+" on bone "+n),d=0>d?0:1;if("pos"===c)if(c=
a.position,this.interpolationType===THREE.AnimationHandler.LINEAR)c.x=e[0]+(f[0]-e[0])*d,c.y=e[1]+(f[1]-e[1])*d,c.z=e[2]+(f[2]-e[2])*d;else{if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD)this.points[0]=this.getPrevKeyWith("pos",n,g.index-1).pos,this.points[1]=e,this.points[2]=f,this.points[3]=this.getNextKeyWith("pos",n,h.index+1).pos,d=0.33*d+0.33,e=this.interpolateCatmullRom(this.points,d),c.x=e[0],c.y=e[1],c.z=e[2],
this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD&&(d=this.interpolateCatmullRom(this.points,1.01*d),this.target.set(d[0],d[1],d[2]),this.target.sub(c),this.target.y=0,this.target.normalize(),d=Math.atan2(this.target.x,this.target.z),a.rotation.set(0,d,0))}else"rot"===c?THREE.Quaternion.slerp(e,f,a.quaternion,d):"scl"===c&&(c=a.scale,c.x=e[0]+(f[0]-e[0])*d,c.y=e[1]+(f[1]-e[1])*d,c.z=e[2]+(f[2]-e[2])*d)}}}};
THREE.Animation.prototype.interpolateCatmullRom=function(a,b){var c=[],d=[],e,f,g,h,i,k;e=(a.length-1)*b;f=Math.floor(e);e-=f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>a.length-2?f:f+1;c[3]=f>a.length-3?f:f+2;f=a[c[0]];h=a[c[1]];i=a[c[2]];k=a[c[3]];c=e*e;g=e*c;d[0]=this.interpolate(f[0],h[0],i[0],k[0],e,c,g);d[1]=this.interpolate(f[1],h[1],i[1],k[1],e,c,g);d[2]=this.interpolate(f[2],h[2],i[2],k[2],e,c,g);return d};
THREE.Animation.prototype.interpolate=function(a,b,c,d,e,f,g){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b};THREE.Animation.prototype.getNextKeyWith=function(a,b,c){for(var d=this.data.hierarchy[b].keys,c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?c<d.length-1?c:d.length-1:c%d.length;c<d.length;c++)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[0]};
THREE.Animation.prototype.getPrevKeyWith=function(a,b,c){for(var d=this.data.hierarchy[b].keys,c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?0<c?c:0:0<=c?c:c+d.length;0<=c;c--)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[d.length-1]};THREE.KeyFrameAnimation=function(a,b,c){this.root=a;this.data=THREE.AnimationHandler.get(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=0.001;this.isPlaying=!1;this.loop=this.isPaused=!0;this.JITCompile=void 0!==c?c:!0;a=0;for(b=this.hierarchy.length;a<b;a++){var c=this.data.hierarchy[a].sids,d=this.hierarchy[a];if(this.data.hierarchy[a].keys.length&&c){for(var e=0;e<c.length;e++){var f=c[e],g=this.getNextKeyWith(f,a,0);g&&g.apply(f)}d.matrixAutoUpdate=!1;this.data.hierarchy[a].node.updateMatrix();
d.matrixWorldNeedsUpdate=!0}}};
THREE.KeyFrameAnimation.prototype.play=function(a,b){if(!this.isPlaying){this.isPlaying=!0;this.loop=void 0!==a?a:!0;this.currentTime=void 0!==b?b:0;this.startTimeMs=b;this.startTime=1E7;this.endTime=-this.startTime;var c,d=this.hierarchy.length,e,f;for(c=0;c<d;c++)e=this.hierarchy[c],f=this.data.hierarchy[c],void 0===f.animationCache&&(f.animationCache={},f.animationCache.prevKey=null,f.animationCache.nextKey=null,f.animationCache.originalMatrix=e instanceof THREE.Bone?e.skinMatrix:e.matrix),e=this.data.hierarchy[c].keys,
e.length&&(f.animationCache.prevKey=e[0],f.animationCache.nextKey=e[1],this.startTime=Math.min(e[0].time,this.startTime),this.endTime=Math.max(e[e.length-1].time,this.endTime));this.update(0)}this.isPaused=!1;THREE.AnimationHandler.addToUpdate(this)};THREE.KeyFrameAnimation.prototype.pause=function(){this.isPaused?THREE.AnimationHandler.addToUpdate(this):THREE.AnimationHandler.removeFromUpdate(this);this.isPaused=!this.isPaused};
THREE.KeyFrameAnimation.prototype.stop=function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.removeFromUpdate(this);for(var a=0;a<this.data.hierarchy.length;a++){var b=this.hierarchy[a],c=this.data.hierarchy[a];if(void 0!==c.animationCache){var d=c.animationCache.originalMatrix;b instanceof THREE.Bone?(d.copy(b.skinMatrix),b.skinMatrix=d):(d.copy(b.matrix),b.matrix=d);delete c.animationCache}}};
THREE.KeyFrameAnimation.prototype.update=function(a){if(this.isPlaying){var b,c,d,e,f=this.data.JIT.hierarchy,g,h,i;h=this.currentTime+=a*this.timeScale;g=this.currentTime%=this.data.length;g<this.startTimeMs&&(g=this.currentTime=this.startTimeMs+g);e=parseInt(Math.min(g*this.data.fps,this.data.length*this.data.fps),10);if((i=g<h)&&!this.loop){for(var a=0,k=this.hierarchy.length;a<k;a++){var l=this.data.hierarchy[a].keys,f=this.data.hierarchy[a].sids;d=l.length-1;e=this.hierarchy[a];if(l.length){for(l=
0;l<f.length;l++)g=f[l],(h=this.getPrevKeyWith(g,a,d))&&h.apply(g);this.data.hierarchy[a].node.updateMatrix();e.matrixWorldNeedsUpdate=!0}}this.stop()}else if(!(g<this.startTime)){a=0;for(k=this.hierarchy.length;a<k;a++){d=this.hierarchy[a];b=this.data.hierarchy[a];var l=b.keys,n=b.animationCache;if(this.JITCompile&&void 0!==f[a][e])d instanceof THREE.Bone?(d.skinMatrix=f[a][e],d.matrixWorldNeedsUpdate=!1):(d.matrix=f[a][e],d.matrixWorldNeedsUpdate=!0);else if(l.length){this.JITCompile&&n&&(d instanceof
THREE.Bone?d.skinMatrix=n.originalMatrix:d.matrix=n.originalMatrix);b=n.prevKey;c=n.nextKey;if(b&&c){if(c.time<=h){if(i&&this.loop){b=l[0];for(c=l[1];c.time<g;)b=c,c=l[b.index+1]}else if(!i)for(var p=l.length-1;c.time<g&&c.index!==p;)b=c,c=l[b.index+1];n.prevKey=b;n.nextKey=c}c.time>=g?b.interpolate(c,g):b.interpolate(c,c.time)}this.data.hierarchy[a].node.updateMatrix();d.matrixWorldNeedsUpdate=!0}}if(this.JITCompile&&void 0===f[0][e]){this.hierarchy[0].updateMatrixWorld(!0);for(a=0;a<this.hierarchy.length;a++)f[a][e]=
this.hierarchy[a]instanceof THREE.Bone?this.hierarchy[a].skinMatrix.clone():this.hierarchy[a].matrix.clone()}}}};THREE.KeyFrameAnimation.prototype.getNextKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c%=b.length;c<b.length;c++)if(b[c].hasTarget(a))return b[c];return b[0]};THREE.KeyFrameAnimation.prototype.getPrevKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c=0<=c?c:c+b.length;0<=c;c--)if(b[c].hasTarget(a))return b[c];return b[b.length-1]};THREE.CubeCamera=function(a,b,c){THREE.Object3D.call(this);var d=new THREE.PerspectiveCamera(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new THREE.Vector3(1,0,0));this.add(d);var e=new THREE.PerspectiveCamera(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new THREE.Vector3(-1,0,0));this.add(e);var f=new THREE.PerspectiveCamera(90,1,a,b);f.up.set(0,0,1);f.lookAt(new THREE.Vector3(0,1,0));this.add(f);var g=new THREE.PerspectiveCamera(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new THREE.Vector3(0,-1,0));this.add(g);var h=new THREE.PerspectiveCamera(90,
1,a,b);h.up.set(0,-1,0);h.lookAt(new THREE.Vector3(0,0,1));this.add(h);var i=new THREE.PerspectiveCamera(90,1,a,b);i.up.set(0,-1,0);i.lookAt(new THREE.Vector3(0,0,-1));this.add(i);this.renderTarget=new THREE.WebGLRenderTargetCube(c,c,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter});this.updateCubeMap=function(a,b){var c=this.renderTarget,p=c.generateMipmaps;c.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=
2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.generateMipmaps=p;c.activeCubeFace=5;a.render(b,i,c)}};THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype);THREE.CombinedCamera=function(a,b,c,d,e,f,g){THREE.Camera.call(this);this.fov=c;this.left=-a/2;this.right=a/2;this.top=b/2;this.bottom=-b/2;this.cameraO=new THREE.OrthographicCamera(a/-2,a/2,b/2,b/-2,f,g);this.cameraP=new THREE.PerspectiveCamera(c,a/b,d,e);this.zoom=1;this.toPerspective()};THREE.CombinedCamera.prototype=Object.create(THREE.Camera.prototype);
THREE.CombinedCamera.prototype.toPerspective=function(){this.near=this.cameraP.near;this.far=this.cameraP.far;this.cameraP.fov=this.fov/this.zoom;this.cameraP.updateProjectionMatrix();this.projectionMatrix=this.cameraP.projectionMatrix;this.inPerspectiveMode=!0;this.inOrthographicMode=!1};
THREE.CombinedCamera.prototype.toOrthographic=function(){var a=this.cameraP.aspect,b=(this.cameraP.near+this.cameraP.far)/2,b=Math.tan(this.fov/2)*b,a=2*b*a/2,b=b/this.zoom,a=a/this.zoom;this.cameraO.left=-a;this.cameraO.right=a;this.cameraO.top=b;this.cameraO.bottom=-b;this.cameraO.updateProjectionMatrix();this.near=this.cameraO.near;this.far=this.cameraO.far;this.projectionMatrix=this.cameraO.projectionMatrix;this.inPerspectiveMode=!1;this.inOrthographicMode=!0};
THREE.CombinedCamera.prototype.setSize=function(a,b){this.cameraP.aspect=a/b;this.left=-a/2;this.right=a/2;this.top=b/2;this.bottom=-b/2};THREE.CombinedCamera.prototype.setFov=function(a){this.fov=a;this.inPerspectiveMode?this.toPerspective():this.toOrthographic()};THREE.CombinedCamera.prototype.updateProjectionMatrix=function(){this.inPerspectiveMode?this.toPerspective():(this.toPerspective(),this.toOrthographic())};
THREE.CombinedCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);var c=2*THREE.Math.radToDeg(Math.atan(b/(2*a)));this.setFov(c);return c};THREE.CombinedCamera.prototype.setZoom=function(a){this.zoom=a;this.inPerspectiveMode?this.toPerspective():this.toOrthographic()};THREE.CombinedCamera.prototype.toFrontView=function(){this.rotation.x=0;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};
THREE.CombinedCamera.prototype.toBackView=function(){this.rotation.x=0;this.rotation.y=Math.PI;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toLeftView=function(){this.rotation.x=0;this.rotation.y=-Math.PI/2;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toRightView=function(){this.rotation.x=0;this.rotation.y=Math.PI/2;this.rotation.z=0;this.rotationAutoUpdate=!1};
THREE.CombinedCamera.prototype.toTopView=function(){this.rotation.x=-Math.PI/2;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toBottomView=function(){this.rotation.x=Math.PI/2;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CircleGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.radius=a=a||50;this.segments=b=void 0!==b?Math.max(3,b):8;this.thetaStart=c=void 0!==c?c:0;this.thetaLength=d=void 0!==d?d:2*Math.PI;var e,f=[];e=new THREE.Vector3;var g=new THREE.Vector2(0.5,0.5);this.vertices.push(e);f.push(g);for(e=0;e<=b;e++){var h=new THREE.Vector3,i=c+e/b*d;h.x=a*Math.cos(i);h.y=a*Math.sin(i);this.vertices.push(h);f.push(new THREE.Vector2((h.x/a+1)/2,(h.y/a+1)/2))}c=new THREE.Vector3(0,0,1);for(e=1;e<=b;e++)this.faces.push(new THREE.Face3(e,
e+1,0,[c.clone(),c.clone(),c.clone()])),this.faceVertexUvs[0].push([f[e].clone(),f[e+1].clone(),g.clone()]);this.computeCentroids();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CubeGeometry=function(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,m){var q,u=h.widthSegments,s=h.heightSegments,v=e/2,z=f/2,G=h.vertices.length;if("x"===a&&"y"===b||"y"===a&&"x"===b)q="z";else if("x"===a&&"z"===b||"z"===a&&"x"===b)q="y",s=h.depthSegments;else if("z"===a&&"y"===b||"y"===a&&"z"===b)q="x",u=h.depthSegments;var N=u+1,C=s+1,B=e/u,x=f/s,F=new THREE.Vector3;F[q]=0<g?1:-1;for(e=0;e<C;e++)for(f=0;f<N;f++){var L=new THREE.Vector3;L[a]=(f*B-v)*c;L[b]=(e*x-z)*d;L[q]=g;h.vertices.push(L)}for(e=
0;e<s;e++)for(f=0;f<u;f++)z=f+N*e,a=f+N*(e+1),b=f+1+N*(e+1),c=f+1+N*e,d=new THREE.Vector2(f/u,1-e/s),g=new THREE.Vector2(f/u,1-(e+1)/s),q=new THREE.Vector2((f+1)/u,1-(e+1)/s),v=new THREE.Vector2((f+1)/u,1-e/s),z=new THREE.Face3(z+G,a+G,c+G),z.normal.copy(F),z.vertexNormals.push(F.clone(),F.clone(),F.clone()),z.materialIndex=m,h.faces.push(z),h.faceVertexUvs[0].push([d,g,v]),z=new THREE.Face3(a+G,b+G,c+G),z.normal.copy(F),z.vertexNormals.push(F.clone(),F.clone(),F.clone()),z.materialIndex=m,h.faces.push(z),
h.faceVertexUvs[0].push([g.clone(),q,v.clone()])}THREE.Geometry.call(this);var h=this;this.width=a;this.height=b;this.depth=c;this.widthSegments=d||1;this.heightSegments=e||1;this.depthSegments=f||1;a=this.width/2;b=this.height/2;c=this.depth/2;g("z","y",-1,-1,this.depth,this.height,a,0);g("z","y",1,-1,this.depth,this.height,-a,1);g("x","z",1,1,this.width,this.depth,b,2);g("x","z",1,-1,this.width,this.depth,-b,3);g("x","y",1,-1,this.width,this.height,c,4);g("x","y",-1,-1,this.width,this.height,-c,
5);this.computeCentroids();this.mergeVertices()};THREE.CubeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CylinderGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.radiusTop=a=void 0!==a?a:20;this.radiusBottom=b=void 0!==b?b:20;this.height=c=void 0!==c?c:100;this.radialSegments=d=d||8;this.heightSegments=e=e||1;this.openEnded=f=void 0!==f?f:!1;var g=c/2,h,i,k=[],l=[];for(i=0;i<=e;i++){var n=[],p=[],t=i/e,r=t*(b-a)+a;for(h=0;h<=d;h++){var m=h/d,q=new THREE.Vector3;q.x=r*Math.sin(2*m*Math.PI);q.y=-t*c+g;q.z=r*Math.cos(2*m*Math.PI);this.vertices.push(q);n.push(this.vertices.length-1);p.push(new THREE.Vector2(m,
1-t))}k.push(n);l.push(p)}c=(b-a)/c;for(h=0;h<d;h++){0!==a?(n=this.vertices[k[0][h]].clone(),p=this.vertices[k[0][h+1]].clone()):(n=this.vertices[k[1][h]].clone(),p=this.vertices[k[1][h+1]].clone());n.setY(Math.sqrt(n.x*n.x+n.z*n.z)*c).normalize();p.setY(Math.sqrt(p.x*p.x+p.z*p.z)*c).normalize();for(i=0;i<e;i++){var t=k[i][h],r=k[i+1][h],m=k[i+1][h+1],q=k[i][h+1],u=n.clone(),s=n.clone(),v=p.clone(),z=p.clone(),G=l[i][h].clone(),N=l[i+1][h].clone(),C=l[i+1][h+1].clone(),B=l[i][h+1].clone();this.faces.push(new THREE.Face3(t,
r,q,[u,s,z]));this.faceVertexUvs[0].push([G,N,B]);this.faces.push(new THREE.Face3(r,m,q,[s.clone(),v,z.clone()]));this.faceVertexUvs[0].push([N.clone(),C,B.clone()])}}if(!1===f&&0<a){this.vertices.push(new THREE.Vector3(0,g,0));for(h=0;h<d;h++)t=k[0][h],r=k[0][h+1],m=this.vertices.length-1,u=new THREE.Vector3(0,1,0),s=new THREE.Vector3(0,1,0),v=new THREE.Vector3(0,1,0),G=l[0][h].clone(),N=l[0][h+1].clone(),C=new THREE.Vector2(N.x,0),this.faces.push(new THREE.Face3(t,r,m,[u,s,v])),this.faceVertexUvs[0].push([G,
N,C])}if(!1===f&&0<b){this.vertices.push(new THREE.Vector3(0,-g,0));for(h=0;h<d;h++)t=k[i][h+1],r=k[i][h],m=this.vertices.length-1,u=new THREE.Vector3(0,-1,0),s=new THREE.Vector3(0,-1,0),v=new THREE.Vector3(0,-1,0),G=l[i][h+1].clone(),N=l[i][h].clone(),C=new THREE.Vector2(N.x,1),this.faces.push(new THREE.Face3(t,r,m,[u,s,v])),this.faceVertexUvs[0].push([G,N,C])}this.computeCentroids();this.computeFaceNormals()};THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry=function(a,b){"undefined"!==typeof a&&(THREE.Geometry.call(this),a=a instanceof Array?a:[a],this.shapebb=a[a.length-1].getBoundingBox(),this.addShapeList(a,b),this.computeCentroids(),this.computeFaceNormals())};THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};
THREE.ExtrudeGeometry.prototype.addShape=function(a,b){function c(a,b,c){b||console.log("die");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d=THREE.ExtrudeGeometry.__v1,e=THREE.ExtrudeGeometry.__v2,f=THREE.ExtrudeGeometry.__v3,g=THREE.ExtrudeGeometry.__v4,h=THREE.ExtrudeGeometry.__v5,i=THREE.ExtrudeGeometry.__v6;d.set(a.x-b.x,a.y-b.y);e.set(a.x-c.x,a.y-c.y);d=d.normalize();e=e.normalize();f.set(-d.y,d.x);g.set(e.y,-e.x);h.copy(a).add(f);i.copy(a).add(g);if(h.equals(i))return g.clone();
h.copy(b).add(f);i.copy(c).add(g);f=d.dot(g);g=i.sub(h).dot(g);0===f&&(console.log("Either infinite or no solutions!"),0===g?console.log("Its finite solutions."):console.log("Too bad, no solutions."));g/=f;return 0>g?(b=Math.atan2(b.y-a.y,b.x-a.x),a=Math.atan2(c.y-a.y,c.x-a.x),b>a&&(a+=2*Math.PI),c=(b+a)/2,a=-Math.cos(c),c=-Math.sin(c),new THREE.Vector2(a,c)):d.multiplyScalar(g).add(h).sub(a).clone()}function e(c,d){var e,f;for(O=c.length;0<=--O;){e=O;f=O-1;0>f&&(f=c.length-1);for(var g=0,h=t+2*l,
g=0;g<h;g++){var i=da*g,k=da*(g+1),m=d+e+i,i=d+f+i,n=d+f+k,k=d+e+k,p=c,q=g,r=h,u=e,z=f,m=m+w,i=i+w,n=n+w,k=k+w;L.faces.push(new THREE.Face3(m,i,k,null,null,s));L.faces.push(new THREE.Face3(i,n,k,null,null,s));m=v.generateSideWallUV(L,a,p,b,m,i,n,k,q,r,u,z);L.faceVertexUvs[0].push([m[0],m[1],m[3]]);L.faceVertexUvs[0].push([m[1],m[2],m[3]])}}}function f(a,b,c){L.vertices.push(new THREE.Vector3(a,b,c))}function g(c,d,e,f){c+=w;d+=w;e+=w;L.faces.push(new THREE.Face3(c,d,e,null,null,u));c=f?v.generateBottomUV(L,
a,b,c,d,e):v.generateTopUV(L,a,b,c,d,e);L.faceVertexUvs[0].push(c)}var h=void 0!==b.amount?b.amount:100,i=void 0!==b.bevelThickness?b.bevelThickness:6,k=void 0!==b.bevelSize?b.bevelSize:i-2,l=void 0!==b.bevelSegments?b.bevelSegments:3,n=void 0!==b.bevelEnabled?b.bevelEnabled:!0,p=void 0!==b.curveSegments?b.curveSegments:12,t=void 0!==b.steps?b.steps:1,r=b.extrudePath,m,q=!1,u=b.material,s=b.extrudeMaterial,v=void 0!==b.UVGenerator?b.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator,z,G,N,C;r&&(m=
r.getSpacedPoints(t),q=!0,n=!1,z=void 0!==b.frames?b.frames:new THREE.TubeGeometry.FrenetFrames(r,t,!1),G=new THREE.Vector3,N=new THREE.Vector3,C=new THREE.Vector3);n||(k=i=l=0);var B,x,F,L=this,w=this.vertices.length,p=a.extractPoints(p),E=p.shape,p=p.holes;if(r=!THREE.Shape.Utils.isClockWise(E)){E=E.reverse();x=0;for(F=p.length;x<F;x++)B=p[x],THREE.Shape.Utils.isClockWise(B)&&(p[x]=B.reverse());r=!1}var y=THREE.Shape.Utils.triangulateShape(E,p),r=E;x=0;for(F=p.length;x<F;x++)B=p[x],E=E.concat(B);
var D,H,K,A,da=E.length,ha=y.length,ua=[],O=0,T=r.length;D=T-1;for(H=O+1;O<T;O++,D++,H++)D===T&&(D=0),H===T&&(H=0),ua[O]=d(r[O],r[D],r[H]);var ea=[],I,P=ua.concat();x=0;for(F=p.length;x<F;x++){B=p[x];I=[];O=0;T=B.length;D=T-1;for(H=O+1;O<T;O++,D++,H++)D===T&&(D=0),H===T&&(H=0),I[O]=d(B[O],B[D],B[H]);ea.push(I);P=P.concat(I)}for(D=0;D<l;D++){B=D/l;K=i*(1-B);H=k*Math.sin(B*Math.PI/2);O=0;for(T=r.length;O<T;O++)A=c(r[O],ua[O],H),f(A.x,A.y,-K);x=0;for(F=p.length;x<F;x++){B=p[x];I=ea[x];O=0;for(T=B.length;O<
T;O++)A=c(B[O],I[O],H),f(A.x,A.y,-K)}}H=k;for(O=0;O<da;O++)A=n?c(E[O],P[O],H):E[O],q?(N.copy(z.normals[0]).multiplyScalar(A.x),G.copy(z.binormals[0]).multiplyScalar(A.y),C.copy(m[0]).add(N).add(G),f(C.x,C.y,C.z)):f(A.x,A.y,0);for(B=1;B<=t;B++)for(O=0;O<da;O++)A=n?c(E[O],P[O],H):E[O],q?(N.copy(z.normals[B]).multiplyScalar(A.x),G.copy(z.binormals[B]).multiplyScalar(A.y),C.copy(m[B]).add(N).add(G),f(C.x,C.y,C.z)):f(A.x,A.y,h/t*B);for(D=l-1;0<=D;D--){B=D/l;K=i*(1-B);H=k*Math.sin(B*Math.PI/2);O=0;for(T=
r.length;O<T;O++)A=c(r[O],ua[O],H),f(A.x,A.y,h+K);x=0;for(F=p.length;x<F;x++){B=p[x];I=ea[x];O=0;for(T=B.length;O<T;O++)A=c(B[O],I[O],H),q?f(A.x,A.y+m[t-1].y,m[t-1].x+K):f(A.x,A.y,h+K)}}if(n){i=0*da;for(O=0;O<ha;O++)h=y[O],g(h[2]+i,h[1]+i,h[0]+i,!0);i=da*(t+2*l);for(O=0;O<ha;O++)h=y[O],g(h[0]+i,h[1]+i,h[2]+i,!1)}else{for(O=0;O<ha;O++)h=y[O],g(h[2],h[1],h[0],!0);for(O=0;O<ha;O++)h=y[O],g(h[0]+da*t,h[1]+da*t,h[2]+da*t,!1)}h=0;e(r,h);h+=r.length;x=0;for(F=p.length;x<F;x++)B=p[x],e(B,h),h+=B.length};
THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(a,b,c,d,e,f){b=a.vertices[e].x;e=a.vertices[e].y;c=a.vertices[f].x;f=a.vertices[f].y;return[new THREE.Vector2(a.vertices[d].x,a.vertices[d].y),new THREE.Vector2(b,e),new THREE.Vector2(c,f)]},generateBottomUV:function(a,b,c,d,e,f){return this.generateTopUV(a,b,c,d,e,f)},generateSideWallUV:function(a,b,c,d,e,f,g,h){var b=a.vertices[e].x,c=a.vertices[e].y,e=a.vertices[e].z,d=a.vertices[f].x,i=a.vertices[f].y,f=a.vertices[f].z,k=a.vertices[g].x,
l=a.vertices[g].y,g=a.vertices[g].z,n=a.vertices[h].x,p=a.vertices[h].y,a=a.vertices[h].z;return 0.01>Math.abs(c-i)?[new THREE.Vector2(b,1-e),new THREE.Vector2(d,1-f),new THREE.Vector2(k,1-g),new THREE.Vector2(n,1-a)]:[new THREE.Vector2(c,1-e),new THREE.Vector2(i,1-f),new THREE.Vector2(l,1-g),new THREE.Vector2(p,1-a)]}};THREE.ExtrudeGeometry.__v1=new THREE.Vector2;THREE.ExtrudeGeometry.__v2=new THREE.Vector2;THREE.ExtrudeGeometry.__v3=new THREE.Vector2;THREE.ExtrudeGeometry.__v4=new THREE.Vector2;
THREE.ExtrudeGeometry.__v5=new THREE.Vector2;THREE.ExtrudeGeometry.__v6=new THREE.Vector2;THREE.ShapeGeometry=function(a,b){THREE.Geometry.call(this);!1===a instanceof Array&&(a=[a]);this.shapebb=a[a.length-1].getBoundingBox();this.addShapeList(a,b);this.computeCentroids();this.computeFaceNormals()};THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ShapeGeometry.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++)this.addShape(a[c],b);return this};
THREE.ShapeGeometry.prototype.addShape=function(a,b){void 0===b&&(b={});var c=b.material,d=void 0===b.UVGenerator?THREE.ExtrudeGeometry.WorldUVGenerator:b.UVGenerator,e,f,g,h=this.vertices.length;e=a.extractPoints(void 0!==b.curveSegments?b.curveSegments:12);var i=e.shape,k=e.holes;if(!THREE.Shape.Utils.isClockWise(i)){i=i.reverse();e=0;for(f=k.length;e<f;e++)g=k[e],THREE.Shape.Utils.isClockWise(g)&&(k[e]=g.reverse())}var l=THREE.Shape.Utils.triangulateShape(i,k);e=0;for(f=k.length;e<f;e++)g=k[e],
i=i.concat(g);k=i.length;f=l.length;for(e=0;e<k;e++)g=i[e],this.vertices.push(new THREE.Vector3(g.x,g.y,0));for(e=0;e<f;e++)k=l[e],i=k[0]+h,g=k[1]+h,k=k[2]+h,this.faces.push(new THREE.Face3(i,g,k,null,null,c)),this.faceVertexUvs[0].push(d.generateBottomUV(this,a,b,i,g,k))};THREE.LatheGeometry=function(a,b,c,d){THREE.Geometry.call(this);for(var b=b||12,c=c||0,d=d||2*Math.PI,e=1/(a.length-1),f=1/b,g=0,h=b;g<=h;g++)for(var i=c+g*f*d,k=Math.cos(i),l=Math.sin(i),i=0,n=a.length;i<n;i++){var p=a[i],t=new THREE.Vector3;t.x=k*p.x-l*p.y;t.y=l*p.x+k*p.y;t.z=p.z;this.vertices.push(t)}c=a.length;g=0;for(h=b;g<h;g++){i=0;for(n=a.length-1;i<n;i++){var b=l=i+c*g,d=l+c,k=l+1+c,l=l+1,p=g*f,t=i*e,r=p+f,m=t+e;this.faces.push(new THREE.Face3(b,d,l));this.faceVertexUvs[0].push([new THREE.Vector2(p,
t),new THREE.Vector2(r,t),new THREE.Vector2(p,m)]);this.faces.push(new THREE.Face3(d,k,l));this.faceVertexUvs[0].push([new THREE.Vector2(r,t),new THREE.Vector2(r,m),new THREE.Vector2(p,m)])}}this.mergeVertices();this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PlaneGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.width=a;this.height=b;this.widthSegments=c||1;this.heightSegments=d||1;for(var e=a/2,f=b/2,c=this.widthSegments,d=this.heightSegments,g=c+1,h=d+1,i=this.width/c,k=this.height/d,l=new THREE.Vector3(0,0,1),a=0;a<h;a++)for(b=0;b<g;b++)this.vertices.push(new THREE.Vector3(b*i-e,-(a*k-f),0));for(a=0;a<d;a++)for(b=0;b<c;b++){var n=b+g*a,e=b+g*(a+1),f=b+1+g*(a+1),h=b+1+g*a,i=new THREE.Vector2(b/c,1-a/d),k=new THREE.Vector2(b/c,1-(a+1)/
d),p=new THREE.Vector2((b+1)/c,1-(a+1)/d),t=new THREE.Vector2((b+1)/c,1-a/d),n=new THREE.Face3(n,e,h);n.normal.copy(l);n.vertexNormals.push(l.clone(),l.clone(),l.clone());this.faces.push(n);this.faceVertexUvs[0].push([i,k,t]);n=new THREE.Face3(e,f,h);n.normal.copy(l);n.vertexNormals.push(l.clone(),l.clone(),l.clone());this.faces.push(n);this.faceVertexUvs[0].push([k.clone(),p,t.clone()])}this.computeCentroids()};THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.RingGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);for(var a=a||0,b=b||50,e=void 0!==e?e:0,f=void 0!==f?f:2*Math.PI,c=void 0!==c?Math.max(3,c):8,d=void 0!==d?Math.max(3,d):8,g,h=[],i=a,k=(b-a)/d,a=0;a<=d;a++){for(g=0;g<=c;g++){var l=new THREE.Vector3,n=e+g/c*f;l.x=i*Math.cos(n);l.y=i*Math.sin(n);this.vertices.push(l);h.push(new THREE.Vector2((l.x/b+1)/2,(l.y/b+1)/2))}i+=k}b=new THREE.Vector3(0,0,1);for(a=0;a<d;a++){e=a*c;for(g=0;g<=c;g++)n=g+e,f=n+a,k=n+c+a,l=n+c+1+a,this.faces.push(new THREE.Face3(f,
k,l,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[k].clone(),h[l].clone()]),f=n+a,k=n+c+1+a,l=n+1+a,this.faces.push(new THREE.Face3(f,k,l,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[k].clone(),h[l].clone()])}this.computeCentroids();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,i)};THREE.RingGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.SphereGeometry=function(a,b,c,d,e,f,g){THREE.Geometry.call(this);this.radius=a=a||50;this.widthSegments=b=Math.max(3,Math.floor(b)||8);this.heightSegments=c=Math.max(2,Math.floor(c)||6);this.phiStart=d=void 0!==d?d:0;this.phiLength=e=void 0!==e?e:2*Math.PI;this.thetaStart=f=void 0!==f?f:0;this.thetaLength=g=void 0!==g?g:Math.PI;var h,i,k=[],l=[];for(i=0;i<=c;i++){var n=[],p=[];for(h=0;h<=b;h++){var t=h/b,r=i/c,m=new THREE.Vector3;m.x=-a*Math.cos(d+t*e)*Math.sin(f+r*g);m.y=a*Math.cos(f+r*g);
m.z=a*Math.sin(d+t*e)*Math.sin(f+r*g);this.vertices.push(m);n.push(this.vertices.length-1);p.push(new THREE.Vector2(t,1-r))}k.push(n);l.push(p)}for(i=0;i<this.heightSegments;i++)for(h=0;h<this.widthSegments;h++){var b=k[i][h+1],c=k[i][h],d=k[i+1][h],e=k[i+1][h+1],f=this.vertices[b].clone().normalize(),g=this.vertices[c].clone().normalize(),n=this.vertices[d].clone().normalize(),p=this.vertices[e].clone().normalize(),t=l[i][h+1].clone(),r=l[i][h].clone(),m=l[i+1][h].clone(),q=l[i+1][h+1].clone();Math.abs(this.vertices[b].y)===
this.radius?(t.x=(t.x+r.x)/2,this.faces.push(new THREE.Face3(b,d,e,[f,n,p])),this.faceVertexUvs[0].push([t,m,q])):Math.abs(this.vertices[d].y)===this.radius?(m.x=(m.x+q.x)/2,this.faces.push(new THREE.Face3(b,c,d,[f,g,n])),this.faceVertexUvs[0].push([t,r,m])):(this.faces.push(new THREE.Face3(b,c,e,[f,g,p])),this.faceVertexUvs[0].push([t,r,q]),this.faces.push(new THREE.Face3(c,d,e,[g.clone(),n,p.clone()])),this.faceVertexUvs[0].push([r.clone(),m,q.clone()]))}this.computeCentroids();this.computeFaceNormals();
this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TextGeometry=function(a,b){var b=b||{},c=THREE.FontUtils.generateShapes(a,b);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);THREE.ExtrudeGeometry.call(this,c,b)};THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype);THREE.TorusGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.radius=a||100;this.tube=b||40;this.radialSegments=c||8;this.tubularSegments=d||6;this.arc=e||2*Math.PI;e=new THREE.Vector3;a=[];b=[];for(c=0;c<=this.radialSegments;c++)for(d=0;d<=this.tubularSegments;d++){var f=d/this.tubularSegments*this.arc,g=2*c/this.radialSegments*Math.PI;e.x=this.radius*Math.cos(f);e.y=this.radius*Math.sin(f);var h=new THREE.Vector3;h.x=(this.radius+this.tube*Math.cos(g))*Math.cos(f);h.y=(this.radius+this.tube*
Math.cos(g))*Math.sin(f);h.z=this.tube*Math.sin(g);this.vertices.push(h);a.push(new THREE.Vector2(d/this.tubularSegments,c/this.radialSegments));b.push(h.clone().sub(e).normalize())}for(c=1;c<=this.radialSegments;c++)for(d=1;d<=this.tubularSegments;d++){var e=(this.tubularSegments+1)*c+d-1,f=(this.tubularSegments+1)*(c-1)+d-1,g=(this.tubularSegments+1)*(c-1)+d,h=(this.tubularSegments+1)*c+d,i=new THREE.Face3(e,f,h,[b[e].clone(),b[f].clone(),b[h].clone()]);this.faces.push(i);this.faceVertexUvs[0].push([a[e].clone(),
a[f].clone(),a[h].clone()]);i=new THREE.Face3(f,g,h,[b[f].clone(),b[g].clone(),b[h].clone()]);this.faces.push(i);this.faceVertexUvs[0].push([a[f].clone(),a[g].clone(),a[h].clone()])}this.computeCentroids();this.computeFaceNormals()};THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusKnotGeometry=function(a,b,c,d,e,f,g){function h(a,b,c,d,e){var f=Math.cos(a),g=Math.sin(a),a=b/c*a,b=Math.cos(a),f=0.5*(d*(2+b))*f,g=0.5*d*(2+b)*g,d=0.5*e*d*Math.sin(a);return new THREE.Vector3(f,g,d)}THREE.Geometry.call(this);this.radius=a||100;this.tube=b||40;this.radialSegments=c||64;this.tubularSegments=d||8;this.p=e||2;this.q=f||3;this.heightScale=g||1;this.grid=Array(this.radialSegments);c=new THREE.Vector3;d=new THREE.Vector3;e=new THREE.Vector3;for(a=0;a<this.radialSegments;++a){this.grid[a]=
Array(this.tubularSegments);b=2*(a/this.radialSegments)*this.p*Math.PI;f=h(b,this.q,this.p,this.radius,this.heightScale);b=h(b+0.01,this.q,this.p,this.radius,this.heightScale);c.subVectors(b,f);d.addVectors(b,f);e.crossVectors(c,d);d.crossVectors(e,c);e.normalize();d.normalize();for(b=0;b<this.tubularSegments;++b){var i=2*(b/this.tubularSegments)*Math.PI,g=-this.tube*Math.cos(i),i=this.tube*Math.sin(i),k=new THREE.Vector3;k.x=f.x+g*d.x+i*e.x;k.y=f.y+g*d.y+i*e.y;k.z=f.z+g*d.z+i*e.z;this.grid[a][b]=
this.vertices.push(k)-1}}for(a=0;a<this.radialSegments;++a)for(b=0;b<this.tubularSegments;++b){var e=(a+1)%this.radialSegments,f=(b+1)%this.tubularSegments,c=this.grid[a][b],d=this.grid[e][b],e=this.grid[e][f],f=this.grid[a][f],g=new THREE.Vector2(a/this.radialSegments,b/this.tubularSegments),i=new THREE.Vector2((a+1)/this.radialSegments,b/this.tubularSegments),k=new THREE.Vector2((a+1)/this.radialSegments,(b+1)/this.tubularSegments),l=new THREE.Vector2(a/this.radialSegments,(b+1)/this.tubularSegments);
this.faces.push(new THREE.Face3(c,d,f));this.faceVertexUvs[0].push([g,i,l]);this.faces.push(new THREE.Face3(d,e,f));this.faceVertexUvs[0].push([i.clone(),k,l.clone()])}this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TubeGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.path=a;this.segments=b||64;this.radius=c||1;this.radialSegments=d||8;this.closed=e||!1;this.grid=[];var f,g,d=this.segments+1,h,i,k,e=new THREE.Vector3,l,n,b=new THREE.TubeGeometry.FrenetFrames(this.path,this.segments,this.closed);l=b.normals;n=b.binormals;this.tangents=b.tangents;this.normals=l;this.binormals=n;for(b=0;b<d;b++){this.grid[b]=[];c=b/(d-1);k=a.getPointAt(c);f=l[b];g=n[b];for(c=0;c<this.radialSegments;c++)h=2*(c/this.radialSegments)*
Math.PI,i=-this.radius*Math.cos(h),h=this.radius*Math.sin(h),e.copy(k),e.x+=i*f.x+h*g.x,e.y+=i*f.y+h*g.y,e.z+=i*f.z+h*g.z,this.grid[b][c]=this.vertices.push(new THREE.Vector3(e.x,e.y,e.z))-1}for(b=0;b<this.segments;b++)for(c=0;c<this.radialSegments;c++)e=this.closed?(b+1)%this.segments:b+1,l=(c+1)%this.radialSegments,a=this.grid[b][c],d=this.grid[e][c],e=this.grid[e][l],l=this.grid[b][l],n=new THREE.Vector2(b/this.segments,c/this.radialSegments),f=new THREE.Vector2((b+1)/this.segments,c/this.radialSegments),
g=new THREE.Vector2((b+1)/this.segments,(c+1)/this.radialSegments),i=new THREE.Vector2(b/this.segments,(c+1)/this.radialSegments),this.faces.push(new THREE.Face3(a,d,l)),this.faceVertexUvs[0].push([n,f,i]),this.faces.push(new THREE.Face3(d,e,l)),this.faceVertexUvs[0].push([f.clone(),g,i.clone()]);this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.FrenetFrames=function(a,b,c){new THREE.Vector3;var d=new THREE.Vector3;new THREE.Vector3;var e=[],f=[],g=[],h=new THREE.Vector3,i=new THREE.Matrix4,b=b+1,k,l,n;this.tangents=e;this.normals=f;this.binormals=g;for(k=0;k<b;k++)l=k/(b-1),e[k]=a.getTangentAt(l),e[k].normalize();f[0]=new THREE.Vector3;g[0]=new THREE.Vector3;a=Number.MAX_VALUE;k=Math.abs(e[0].x);l=Math.abs(e[0].y);n=Math.abs(e[0].z);k<=a&&(a=k,d.set(1,0,0));l<=a&&(a=l,d.set(0,1,0));n<=a&&d.set(0,0,1);h.crossVectors(e[0],
d).normalize();f[0].crossVectors(e[0],h);g[0].crossVectors(e[0],f[0]);for(k=1;k<b;k++)f[k]=f[k-1].clone(),g[k]=g[k-1].clone(),h.crossVectors(e[k-1],e[k]),1E-4<h.length()&&(h.normalize(),d=Math.acos(THREE.Math.clamp(e[k-1].dot(e[k]),-1,1)),f[k].applyMatrix4(i.makeRotationAxis(h,d))),g[k].crossVectors(e[k],f[k]);if(c){d=Math.acos(THREE.Math.clamp(f[0].dot(f[b-1]),-1,1));d/=b-1;0<e[0].dot(h.crossVectors(f[0],f[b-1]))&&(d=-d);for(k=1;k<b;k++)f[k].applyMatrix4(i.makeRotationAxis(e[k],d*k)),g[k].crossVectors(e[k],
f[k])}};THREE.PolyhedronGeometry=function(a,b,c,d){function e(a){var b=a.normalize().clone();b.index=h.vertices.push(b)-1;var c=Math.atan2(a.z,-a.x)/2/Math.PI+0.5,a=Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+0.5;b.uv=new THREE.Vector2(c,1-a);return b}function f(a,b,c){var d=new THREE.Face3(a.index,b.index,c.index,[a.clone(),b.clone(),c.clone()]);d.centroid.add(a).add(b).add(c).divideScalar(3);h.faces.push(d);d=Math.atan2(d.centroid.z,-d.centroid.x);h.faceVertexUvs[0].push([g(a.uv,a,d),g(b.uv,b,d),
g(c.uv,c,d)])}function g(a,b,c){0>c&&1===a.x&&(a=new THREE.Vector2(a.x-1,a.y));0===b.x&&0===b.z&&(a=new THREE.Vector2(c/2/Math.PI+0.5,a.y));return a.clone()}THREE.Geometry.call(this);for(var c=c||1,d=d||0,h=this,i=0,k=a.length;i<k;i++)e(new THREE.Vector3(a[i][0],a[i][1],a[i][2]));for(var l=this.vertices,a=[],i=0,k=b.length;i<k;i++){var n=l[b[i][0]],p=l[b[i][1]],t=l[b[i][2]];a[i]=new THREE.Face3(n.index,p.index,t.index,[n.clone(),p.clone(),t.clone()])}i=0;for(k=a.length;i<k;i++){p=a[i];l=d;b=Math.pow(2,
l);Math.pow(4,l);for(var l=e(h.vertices[p.a]),n=e(h.vertices[p.b]),r=e(h.vertices[p.c]),p=[],t=0;t<=b;t++){p[t]=[];for(var m=e(l.clone().lerp(r,t/b)),q=e(n.clone().lerp(r,t/b)),u=b-t,s=0;s<=u;s++)p[t][s]=0==s&&t==b?m:e(m.clone().lerp(q,s/u))}for(t=0;t<b;t++)for(s=0;s<2*(b-t)-1;s++)l=Math.floor(s/2),0==s%2?f(p[t][l+1],p[t+1][l],p[t][l]):f(p[t][l+1],p[t+1][l+1],p[t+1][l])}i=0;for(k=this.faceVertexUvs[0].length;i<k;i++)d=this.faceVertexUvs[0][i],a=d[0].x,b=d[1].x,l=d[2].x,n=Math.max(a,Math.max(b,l)),
p=Math.min(a,Math.min(b,l)),0.9<n&&0.1>p&&(0.2>a&&(d[0].x+=1),0.2>b&&(d[1].x+=1),0.2>l&&(d[2].x+=1));i=0;for(k=this.vertices.length;i<k;i++)this.vertices[i].multiplyScalar(c);this.mergeVertices();this.computeCentroids();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,c)};THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.IcosahedronGeometry=function(a,b){this.radius=a;this.detail=b;var c=(1+Math.sqrt(5))/2;THREE.PolyhedronGeometry.call(this,[[-1,c,0],[1,c,0],[-1,-c,0],[1,-c,0],[0,-1,c],[0,1,c],[0,-1,-c],[0,1,-c],[c,0,-1],[c,0,1],[-c,0,-1],[-c,0,1]],[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]],a,b)};THREE.IcosahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.OctahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],[[0,2,4],[0,4,3],[0,3,5],[0,5,2],[1,2,5],[1,5,3],[1,3,4],[1,4,2]],a,b)};THREE.OctahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TetrahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[[1,1,1],[-1,-1,1],[-1,1,-1],[1,-1,-1]],[[2,1,0],[0,3,2],[1,3,0],[2,3,1]],a,b)};THREE.TetrahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ParametricGeometry=function(a,b,c){THREE.Geometry.call(this);var d=this.vertices,e=this.faces,f=this.faceVertexUvs[0],g,h,i,k,l=b+1;for(g=0;g<=c;g++){k=g/c;for(h=0;h<=b;h++)i=h/b,i=a(i,k),d.push(i)}var n,p,t,r;for(g=0;g<c;g++)for(h=0;h<b;h++)a=g*l+h,d=g*l+h+1,k=(g+1)*l+h+1,i=(g+1)*l+h,n=new THREE.Vector2(h/b,g/c),p=new THREE.Vector2((h+1)/b,g/c),t=new THREE.Vector2((h+1)/b,(g+1)/c),r=new THREE.Vector2(h/b,(g+1)/c),e.push(new THREE.Face3(a,d,i)),f.push([n,p,r]),e.push(new THREE.Face3(d,k,i)),
f.push([p.clone(),t,r.clone()]);this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.AxisHelper=function(a){var a=a||1,b=new THREE.Geometry;b.vertices.push(new THREE.Vector3,new THREE.Vector3(a,0,0),new THREE.Vector3,new THREE.Vector3(0,a,0),new THREE.Vector3,new THREE.Vector3(0,0,a));b.colors.push(new THREE.Color(16711680),new THREE.Color(16755200),new THREE.Color(65280),new THREE.Color(11206400),new THREE.Color(255),new THREE.Color(43775));a=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.Line.call(this,b,a,THREE.LinePieces)};
THREE.AxisHelper.prototype=Object.create(THREE.Line.prototype);THREE.ArrowHelper=function(a,b,c,d,e,f){THREE.Object3D.call(this);void 0===d&&(d=16776960);void 0===c&&(c=1);void 0===e&&(e=0.2*c);void 0===f&&(f=0.2*e);this.position=b;b=new THREE.Geometry;b.vertices.push(new THREE.Vector3(0,0,0));b.vertices.push(new THREE.Vector3(0,1,0));this.line=new THREE.Line(b,new THREE.LineBasicMaterial({color:d}));this.line.matrixAutoUpdate=!1;this.add(this.line);b=new THREE.CylinderGeometry(0,0.5,1,5,1);b.applyMatrix((new THREE.Matrix4).makeTranslation(0,-0.5,0));this.cone=
new THREE.Mesh(b,new THREE.MeshBasicMaterial({color:d}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(a);this.setLength(c,e,f)};THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.ArrowHelper.prototype.setDirection=function(){var a=new THREE.Vector3,b;return function(c){0.99999<c.y?this.quaternion.set(0,0,0,1):-0.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();
THREE.ArrowHelper.prototype.setLength=function(a,b,c){void 0===b&&(b=0.2*a);void 0===c&&(c=0.2*b);this.line.scale.set(1,a,1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};THREE.ArrowHelper.prototype.setColor=function(a){this.line.material.color.setHex(a);this.cone.material.color.setHex(a)};THREE.BoxHelper=function(a){var b=[new THREE.Vector3(1,1,1),new THREE.Vector3(-1,1,1),new THREE.Vector3(-1,-1,1),new THREE.Vector3(1,-1,1),new THREE.Vector3(1,1,-1),new THREE.Vector3(-1,1,-1),new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,-1,-1)];this.vertices=b;var c=new THREE.Geometry;c.vertices.push(b[0],b[1],b[1],b[2],b[2],b[3],b[3],b[0],b[4],b[5],b[5],b[6],b[6],b[7],b[7],b[4],b[0],b[4],b[1],b[5],b[2],b[6],b[3],b[7]);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:16776960}),THREE.LinePieces);
void 0!==a&&this.update(a)};THREE.BoxHelper.prototype=Object.create(THREE.Line.prototype);
THREE.BoxHelper.prototype.update=function(a){var b=a.geometry;null===b.boundingBox&&b.computeBoundingBox();var c=b.boundingBox.min,b=b.boundingBox.max,d=this.vertices;d[0].set(b.x,b.y,b.z);d[1].set(c.x,b.y,b.z);d[2].set(c.x,c.y,b.z);d[3].set(b.x,c.y,b.z);d[4].set(b.x,b.y,c.z);d[5].set(c.x,b.y,c.z);d[6].set(c.x,c.y,c.z);d[7].set(b.x,c.y,c.z);this.geometry.computeBoundingSphere();this.geometry.verticesNeedUpdate=!0;this.matrixAutoUpdate=!1;this.matrixWorld=a.matrixWorld};THREE.BoundingBoxHelper=function(a,b){var c=void 0!==b?b:8947848;this.object=a;this.box=new THREE.Box3;THREE.Mesh.call(this,new THREE.CubeGeometry(1,1,1),new THREE.MeshBasicMaterial({color:c,wireframe:!0}))};THREE.BoundingBoxHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.BoundingBoxHelper.prototype.update=function(){this.box.setFromObject(this.object);this.box.size(this.scale);this.box.center(this.position)};THREE.CameraHelper=function(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){d.vertices.push(new THREE.Vector3);d.colors.push(new THREE.Color(b));void 0===f[a]&&(f[a]=[]);f[a].push(d.vertices.length-1)}var d=new THREE.Geometry,e=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors}),f={};b("n1","n2",16755200);b("n2","n4",16755200);b("n4","n3",16755200);b("n3","n1",16755200);b("f1","f2",16755200);b("f2","f4",16755200);b("f4","f3",16755200);b("f3","f1",16755200);b("n1","f1",16755200);
b("n2","f2",16755200);b("n3","f3",16755200);b("n4","f4",16755200);b("p","n1",16711680);b("p","n2",16711680);b("p","n3",16711680);b("p","n4",16711680);b("u1","u2",43775);b("u2","u3",43775);b("u3","u1",43775);b("c","t",16777215);b("p","c",3355443);b("cn1","cn2",3355443);b("cn3","cn4",3355443);b("cf1","cf2",3355443);b("cf3","cf4",3355443);THREE.Line.call(this,d,e,THREE.LinePieces);this.camera=a;this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=f;this.update()};
THREE.CameraHelper.prototype=Object.create(THREE.Line.prototype);
THREE.CameraHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Camera,c=new THREE.Projector;return function(){function d(d,g,h,i){a.set(g,h,i);c.unprojectVector(a,b);d=e.pointMap[d];if(void 0!==d){g=0;for(h=d.length;g<h;g++)e.geometry.vertices[d[g]].copy(a)}}var e=this;b.projectionMatrix.copy(this.camera.projectionMatrix);d("c",0,0,-1);d("t",0,0,1);d("n1",-1,-1,-1);d("n2",1,-1,-1);d("n3",-1,1,-1);d("n4",1,1,-1);d("f1",-1,-1,1);d("f2",1,-1,1);d("f3",-1,1,1);d("f4",1,1,1);d("u1",
0.7,1.1,-1);d("u2",-0.7,1.1,-1);d("u3",0,2,-1);d("cf1",-1,0,1);d("cf2",1,0,1);d("cf3",0,-1,1);d("cf4",0,1,1);d("cn1",-1,0,-1);d("cn2",1,0,-1);d("cn3",0,-1,-1);d("cn4",0,1,-1);this.geometry.verticesNeedUpdate=!0}}();THREE.DirectionalLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;var b=b||1,c=new THREE.PlaneGeometry(b,b),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.lightPlane=new THREE.Mesh(c,d);this.add(this.lightPlane);c=new THREE.Geometry;c.vertices.push(new THREE.Vector3);c.vertices.push(new THREE.Vector3);d=new THREE.LineBasicMaterial({fog:!1});
d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine=new THREE.Line(c,d);this.add(this.targetLine);this.update()};THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.DirectionalLightHelper.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose()};
THREE.DirectionalLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);this.lightPlane.lookAt(c);this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine.geometry.vertices[1].copy(c);this.targetLine.geometry.verticesNeedUpdate=!0;this.targetLine.material.color.copy(this.lightPlane.material.color)}}();THREE.EdgesHelper=function(a,b){var c=void 0!==b?b:16777215,d=[0,0],e={},f=function(a,b){return a-b},g=["a","b","c"],h=new THREE.BufferGeometry,i=a.geometry.clone();i.mergeVertices();i.computeFaceNormals();for(var k=i.vertices,i=i.faces,l=0,n=0,p=i.length;n<p;n++)for(var t=i[n],r=0;3>r;r++){d[0]=t[g[r]];d[1]=t[g[(r+1)%3]];d.sort(f);var m=d.toString();void 0===e[m]?(e[m]={vert1:d[0],vert2:d[1],face1:n,face2:void 0},l++):e[m].face2=n}h.addAttribute("position",Float32Array,2*l,3);d=h.attributes.position.array;
f=0;for(m in e)if(g=e[m],void 0===g.face2||0.9999>i[g.face1].normal.dot(i[g.face2].normal))l=k[g.vert1],d[f++]=l.x,d[f++]=l.y,d[f++]=l.z,l=k[g.vert2],d[f++]=l.x,d[f++]=l.y,d[f++]=l.z;THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:c}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.matrixWorld=a.matrixWorld};THREE.EdgesHelper.prototype=Object.create(THREE.Line.prototype);THREE.FaceNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;for(var a=void 0!==c?c:16776960,d=void 0!==d?d:1,b=new THREE.Geometry,c=0,e=this.object.geometry.faces.length;c<e;c++)b.vertices.push(new THREE.Vector3),b.vertices.push(new THREE.Vector3);THREE.Line.call(this,b,new THREE.LineBasicMaterial({color:a,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.FaceNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){this.object.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(this.object.matrixWorld);for(var b=this.geometry.vertices,c=this.object.geometry.faces,d=this.object.matrixWorld,e=0,f=c.length;e<f;e++){var g=c[e];a.copy(g.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);var h=2*e;b[h].copy(g.centroid).applyMatrix4(d);b[h+1].addVectors(b[h],a)}this.geometry.verticesNeedUpdate=
!0;return this}}();THREE.GridHelper=function(a,b){var c=new THREE.Geometry,d=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});this.color1=new THREE.Color(4473924);this.color2=new THREE.Color(8947848);for(var e=-a;e<=a;e+=b){c.vertices.push(new THREE.Vector3(-a,0,e),new THREE.Vector3(a,0,e),new THREE.Vector3(e,0,-a),new THREE.Vector3(e,0,a));var f=0===e?this.color1:this.color2;c.colors.push(f,f,f,f)}THREE.Line.call(this,c,d,THREE.LinePieces)};THREE.GridHelper.prototype=Object.create(THREE.Line.prototype);
THREE.GridHelper.prototype.setColors=function(a,b){this.color1.set(a);this.color2.set(b);this.geometry.colorsNeedUpdate=!0};THREE.HemisphereLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;this.colors=[new THREE.Color,new THREE.Color];var c=new THREE.SphereGeometry(b,4,2);c.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));for(var d=0;8>d;d++)c.faces[d].color=this.colors[4>d?0:1];d=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors,wireframe:!0});this.lightSphere=new THREE.Mesh(c,d);this.add(this.lightSphere);
this.update()};THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.HemisphereLightHelper.prototype.dispose=function(){this.lightSphere.geometry.dispose();this.lightSphere.material.dispose()};
THREE.HemisphereLightHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());this.lightSphere.geometry.colorsNeedUpdate=!0}}();THREE.PointLightHelper=function(a,b){this.light=a;this.light.updateMatrixWorld();var c=new THREE.SphereGeometry(b,4,2),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);THREE.Mesh.call(this,c,d);this.matrixWorld=this.light.matrixWorld;this.matrixAutoUpdate=!1};THREE.PointLightHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.PointLightHelper.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};
THREE.PointLightHelper.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};THREE.SpotLightHelper=function(a){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;a=new THREE.CylinderGeometry(0,1,1,8,1,!0);a.applyMatrix((new THREE.Matrix4).makeTranslation(0,-0.5,0));a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));var b=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});this.cone=new THREE.Mesh(a,b);this.add(this.cone);this.update()};THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};THREE.SpotLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){var c=this.light.distance?this.light.distance:1E4,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();THREE.VertexNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;for(var b=void 0!==c?c:16711680,d=void 0!==d?d:1,c=new THREE.Geometry,a=a.geometry.faces,e=0,f=a.length;e<f;e++)for(var g=0,h=a[e].vertexNormals.length;g<h;g++)c.vertices.push(new THREE.Vector3),c.vertices.push(new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};
THREE.VertexNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexNormalsHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){var b=["a","b","c","d"];this.object.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(this.object.matrixWorld);for(var c=this.geometry.vertices,d=this.object.geometry.vertices,e=this.object.geometry.faces,f=this.object.matrixWorld,g=0,h=0,i=e.length;h<i;h++)for(var k=e[h],l=0,n=k.vertexNormals.length;l<n;l++){var p=k.vertexNormals[l];c[g].copy(d[k[b[l]]]).applyMatrix4(f);a.copy(p).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);
a.add(c[g]);g+=1;c[g].copy(a);g+=1}this.geometry.verticesNeedUpdate=!0;return this}}();THREE.VertexTangentsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;for(var b=void 0!==c?c:255,d=void 0!==d?d:1,c=new THREE.Geometry,a=a.geometry.faces,e=0,f=a.length;e<f;e++)for(var g=0,h=a[e].vertexTangents.length;g<h;g++)c.vertices.push(new THREE.Vector3),c.vertices.push(new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.update()};THREE.VertexTangentsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexTangentsHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){var b=["a","b","c","d"];this.object.updateMatrixWorld(!0);for(var c=this.geometry.vertices,d=this.object.geometry.vertices,e=this.object.geometry.faces,f=this.object.matrixWorld,g=0,h=0,i=e.length;h<i;h++)for(var k=e[h],l=0,n=k.vertexTangents.length;l<n;l++){var p=k.vertexTangents[l];c[g].copy(d[k[b[l]]]).applyMatrix4(f);a.copy(p).transformDirection(f).multiplyScalar(this.size);a.add(c[g]);g+=1;c[g].copy(a);
g+=1}this.geometry.verticesNeedUpdate=!0;return this}}();THREE.WireframeHelper=function(a,b){var c=void 0!==b?b:16777215,d=[0,0],e={},f=function(a,b){return a-b},g=["a","b","c"],h=new THREE.BufferGeometry;if(a.geometry instanceof THREE.Geometry){for(var i=a.geometry.vertices,k=a.geometry.faces,l=0,n=new Uint32Array(6*k.length),p=0,t=k.length;p<t;p++)for(var r=k[p],m=0;3>m;m++){d[0]=r[g[m]];d[1]=r[g[(m+1)%3]];d.sort(f);var q=d.toString();void 0===e[q]&&(n[2*l]=d[0],n[2*l+1]=d[1],e[q]=!0,l++)}h.addAttribute("position",Float32Array,2*l,3);d=h.attributes.position.array;
p=0;for(t=l;p<t;p++)for(m=0;2>m;m++)l=i[n[2*p+m]],g=6*p+3*m,d[g+0]=l.x,d[g+1]=l.y,d[g+2]=l.z}else if(a.geometry instanceof THREE.BufferGeometry&&void 0!==a.geometry.attributes.index){for(var i=a.geometry.attributes.position.array,t=a.geometry.attributes.index.array,k=a.geometry.offsets,l=0,n=new Uint32Array(2*t.length),r=0,u=k.length;r<u;++r)for(var m=k[r].start,q=k[r].count,g=k[r].index,p=m,s=m+q;p<s;p+=3)for(m=0;3>m;m++)d[0]=g+t[p+m],d[1]=g+t[p+(m+1)%3],d.sort(f),q=d.toString(),void 0===e[q]&&(n[2*
l]=d[0],n[2*l+1]=d[1],e[q]=!0,l++);h.addAttribute("position",Float32Array,2*l,3);d=h.attributes.position.array;p=0;for(t=l;p<t;p++)for(m=0;2>m;m++)g=6*p+3*m,l=3*n[2*p+m],d[g+0]=i[l],d[g+1]=i[l+1],d[g+2]=i[l+2]}else if(a.geometry instanceof THREE.BufferGeometry){i=a.geometry.attributes.position.array;l=i.length/3;n=l/3;h.addAttribute("position",Float32Array,2*l,3);d=h.attributes.position.array;p=0;for(t=n;p<t;p++)for(m=0;3>m;m++)g=18*p+6*m,n=9*p+3*m,d[g+0]=i[n],d[g+1]=i[n+1],d[g+2]=i[n+2],l=9*p+3*
((m+1)%3),d[g+3]=i[l],d[g+4]=i[l+1],d[g+5]=i[l+2]}THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:c}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.matrixWorld=a.matrixWorld};THREE.WireframeHelper.prototype=Object.create(THREE.Line.prototype);THREE.ImmediateRenderObject=function(){THREE.Object3D.call(this);this.render=function(){}};THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype);THREE.LensFlare=function(a,b,c,d,e){THREE.Object3D.call(this);this.lensFlares=[];this.positionScreen=new THREE.Vector3;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)};THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype);
THREE.LensFlare.prototype.add=function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new THREE.Color(16777215));void 0===d&&(d=THREE.NormalBlending);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:1,opacity:f,color:e,blending:d})};
THREE.LensFlare.prototype.updateLensFlares=function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=0.25*c.x*Math.PI,c.rotation+=0.25*(c.wantedRotation-c.rotation)};THREE.MorphBlendMesh=function(a,b){THREE.Mesh.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)};THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){b={startFrame:b,endFrame:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};
THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)(\d+)/,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<g;f++){var h=e.morphTargets[f].name.match(b);if(h&&1<h.length){var i=h[1];d[i]||(d[i]={start:Infinity,end:-Infinity});h=d[i];f<h.start&&(h.start=f);f>h.end&&(h.end=f);c||(c=i)}}for(i in d)h=d[i],this.createAnimation(i,h.start,h.end,a);this.firstAnimation=c};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};THREE.MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};
THREE.MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};THREE.MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};THREE.MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};THREE.MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};
THREE.MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};THREE.MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn("animation["+a+"] undefined")};THREE.MorphBlendMesh.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};
THREE.MorphBlendMesh.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.startFrame+THREE.Math.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;
f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);this.morphTargetInfluences[d.currentFrame]=e*g;this.morphTargetInfluences[d.lastFrame]=(1-e)*g}}};THREE.LensFlarePlugin=function(){function a(a,c){var d=b.createProgram(),e=b.createShader(b.FRAGMENT_SHADER),f=b.createShader(b.VERTEX_SHADER),g="precision "+c+" float;\n";b.shaderSource(e,g+a.fragmentShader);b.shaderSource(f,g+a.vertexShader);b.compileShader(e);b.compileShader(f);b.attachShader(d,e);b.attachShader(d,f);b.linkProgram(d);return d}var b,c,d,e,f,g,h,i,k,l,n,p,t;this.init=function(r){b=r.context;c=r;d=r.getPrecision();e=new Float32Array(16);f=new Uint16Array(6);r=0;e[r++]=-1;e[r++]=-1;
e[r++]=0;e[r++]=0;e[r++]=1;e[r++]=-1;e[r++]=1;e[r++]=0;e[r++]=1;e[r++]=1;e[r++]=1;e[r++]=1;e[r++]=-1;e[r++]=1;e[r++]=0;e[r++]=1;r=0;f[r++]=0;f[r++]=1;f[r++]=2;f[r++]=0;f[r++]=2;f[r++]=3;g=b.createBuffer();h=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,g);b.bufferData(b.ARRAY_BUFFER,e,b.STATIC_DRAW);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,h);b.bufferData(b.ELEMENT_ARRAY_BUFFER,f,b.STATIC_DRAW);i=b.createTexture();k=b.createTexture();b.bindTexture(b.TEXTURE_2D,i);b.texImage2D(b.TEXTURE_2D,0,b.RGB,16,16,
0,b.RGB,b.UNSIGNED_BYTE,null);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);b.bindTexture(b.TEXTURE_2D,k);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,16,16,0,b.RGBA,b.UNSIGNED_BYTE,null);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);0>=b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS)?(l=!1,n=a(THREE.ShaderFlares.lensFlare,d)):(l=!0,n=a(THREE.ShaderFlares.lensFlareVertexTexture,d));p={};t={};p.vertex=b.getAttribLocation(n,"position");p.uv=b.getAttribLocation(n,"uv");t.renderType=b.getUniformLocation(n,"renderType");t.map=b.getUniformLocation(n,"map");t.occlusionMap=b.getUniformLocation(n,"occlusionMap");t.opacity=
b.getUniformLocation(n,"opacity");t.color=b.getUniformLocation(n,"color");t.scale=b.getUniformLocation(n,"scale");t.rotation=b.getUniformLocation(n,"rotation");t.screenPosition=b.getUniformLocation(n,"screenPosition")};this.render=function(a,d,e,f){var a=a.__webglFlares,s=a.length;if(s){var v=new THREE.Vector3,z=f/e,G=0.5*e,N=0.5*f,C=16/f,B=new THREE.Vector2(C*z,C),x=new THREE.Vector3(1,1,0),F=new THREE.Vector2(1,1),L=t,C=p;b.useProgram(n);b.enableVertexAttribArray(p.vertex);b.enableVertexAttribArray(p.uv);
b.uniform1i(L.occlusionMap,0);b.uniform1i(L.map,1);b.bindBuffer(b.ARRAY_BUFFER,g);b.vertexAttribPointer(C.vertex,2,b.FLOAT,!1,16,0);b.vertexAttribPointer(C.uv,2,b.FLOAT,!1,16,8);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,h);b.disable(b.CULL_FACE);b.depthMask(!1);var w,E,y,D,H;for(w=0;w<s;w++)if(C=16/f,B.set(C*z,C),D=a[w],v.set(D.matrixWorld.elements[12],D.matrixWorld.elements[13],D.matrixWorld.elements[14]),v.applyMatrix4(d.matrixWorldInverse),v.applyProjection(d.projectionMatrix),x.copy(v),F.x=x.x*G+G,
F.y=x.y*N+N,l||0<F.x&&F.x<e&&0<F.y&&F.y<f){b.activeTexture(b.TEXTURE1);b.bindTexture(b.TEXTURE_2D,i);b.copyTexImage2D(b.TEXTURE_2D,0,b.RGB,F.x-8,F.y-8,16,16,0);b.uniform1i(L.renderType,0);b.uniform2f(L.scale,B.x,B.y);b.uniform3f(L.screenPosition,x.x,x.y,x.z);b.disable(b.BLEND);b.enable(b.DEPTH_TEST);b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0);b.activeTexture(b.TEXTURE0);b.bindTexture(b.TEXTURE_2D,k);b.copyTexImage2D(b.TEXTURE_2D,0,b.RGBA,F.x-8,F.y-8,16,16,0);b.uniform1i(L.renderType,1);b.disable(b.DEPTH_TEST);
b.activeTexture(b.TEXTURE1);b.bindTexture(b.TEXTURE_2D,i);b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0);D.positionScreen.copy(x);D.customUpdateCallback?D.customUpdateCallback(D):D.updateLensFlares();b.uniform1i(L.renderType,2);b.enable(b.BLEND);E=0;for(y=D.lensFlares.length;E<y;E++)H=D.lensFlares[E],0.001<H.opacity&&0.001<H.scale&&(x.x=H.x,x.y=H.y,x.z=H.z,C=H.size*H.scale/f,B.x=C*z,B.y=C,b.uniform3f(L.screenPosition,x.x,x.y,x.z),b.uniform2f(L.scale,B.x,B.y),b.uniform1f(L.rotation,H.rotation),b.uniform1f(L.opacity,
H.opacity),b.uniform3f(L.color,H.color.r,H.color.g,H.color.b),c.setBlending(H.blending,H.blendEquation,H.blendSrc,H.blendDst),c.setTexture(H.texture,1),b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0))}b.enable(b.CULL_FACE);b.enable(b.DEPTH_TEST);b.depthMask(!0)}}};THREE.ShadowMapPlugin=function(){var a,b,c,d,e,f,g=new THREE.Frustum,h=new THREE.Matrix4,i=new THREE.Vector3,k=new THREE.Vector3,l=new THREE.Vector3;this.init=function(g){a=g.context;b=g;var g=THREE.ShaderLib.depthRGBA,h=THREE.UniformsUtils.clone(g.uniforms);c=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h});d=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0});e=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,
vertexShader:g.vertexShader,uniforms:h,skinning:!0});f=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0,skinning:!0});c._shadowPass=!0;d._shadowPass=!0;e._shadowPass=!0;f._shadowPass=!0};this.render=function(a,c){b.shadowMapEnabled&&b.shadowMapAutoUpdate&&this.update(a,c)};this.update=function(n,p){var t,r,m,q,u,s,v,z,G,N=[];q=0;a.clearColor(1,1,1,1);a.disable(a.BLEND);a.enable(a.CULL_FACE);a.frontFace(a.CCW);b.shadowMapCullFace===THREE.CullFaceFront?
a.cullFace(a.FRONT):a.cullFace(a.BACK);b.setDepthTest(!0);t=0;for(r=n.__lights.length;t<r;t++)if(m=n.__lights[t],m.castShadow)if(m instanceof THREE.DirectionalLight&&m.shadowCascade)for(u=0;u<m.shadowCascadeCount;u++){var C;if(m.shadowCascadeArray[u])C=m.shadowCascadeArray[u];else{G=m;v=u;C=new THREE.DirectionalLight;C.isVirtual=!0;C.onlyShadow=!0;C.castShadow=!0;C.shadowCameraNear=G.shadowCameraNear;C.shadowCameraFar=G.shadowCameraFar;C.shadowCameraLeft=G.shadowCameraLeft;C.shadowCameraRight=G.shadowCameraRight;
C.shadowCameraBottom=G.shadowCameraBottom;C.shadowCameraTop=G.shadowCameraTop;C.shadowCameraVisible=G.shadowCameraVisible;C.shadowDarkness=G.shadowDarkness;C.shadowBias=G.shadowCascadeBias[v];C.shadowMapWidth=G.shadowCascadeWidth[v];C.shadowMapHeight=G.shadowCascadeHeight[v];C.pointsWorld=[];C.pointsFrustum=[];z=C.pointsWorld;s=C.pointsFrustum;for(var B=0;8>B;B++)z[B]=new THREE.Vector3,s[B]=new THREE.Vector3;z=G.shadowCascadeNearZ[v];G=G.shadowCascadeFarZ[v];s[0].set(-1,-1,z);s[1].set(1,-1,z);s[2].set(-1,
1,z);s[3].set(1,1,z);s[4].set(-1,-1,G);s[5].set(1,-1,G);s[6].set(-1,1,G);s[7].set(1,1,G);C.originalCamera=p;s=new THREE.Gyroscope;s.position=m.shadowCascadeOffset;s.add(C);s.add(C.target);p.add(s);m.shadowCascadeArray[u]=C;console.log("Created virtualLight",C)}v=m;z=u;G=v.shadowCascadeArray[z];G.position.copy(v.position);G.target.position.copy(v.target.position);G.lookAt(G.target);G.shadowCameraVisible=v.shadowCameraVisible;G.shadowDarkness=v.shadowDarkness;G.shadowBias=v.shadowCascadeBias[z];s=v.shadowCascadeNearZ[z];
v=v.shadowCascadeFarZ[z];G=G.pointsFrustum;G[0].z=s;G[1].z=s;G[2].z=s;G[3].z=s;G[4].z=v;G[5].z=v;G[6].z=v;G[7].z=v;N[q]=C;q++}else N[q]=m,q++;t=0;for(r=N.length;t<r;t++){m=N[t];m.shadowMap||(u=THREE.LinearFilter,b.shadowMapType===THREE.PCFSoftShadowMap&&(u=THREE.NearestFilter),m.shadowMap=new THREE.WebGLRenderTarget(m.shadowMapWidth,m.shadowMapHeight,{minFilter:u,magFilter:u,format:THREE.RGBAFormat}),m.shadowMapSize=new THREE.Vector2(m.shadowMapWidth,m.shadowMapHeight),m.shadowMatrix=new THREE.Matrix4);
if(!m.shadowCamera){if(m instanceof THREE.SpotLight)m.shadowCamera=new THREE.PerspectiveCamera(m.shadowCameraFov,m.shadowMapWidth/m.shadowMapHeight,m.shadowCameraNear,m.shadowCameraFar);else if(m instanceof THREE.DirectionalLight)m.shadowCamera=new THREE.OrthographicCamera(m.shadowCameraLeft,m.shadowCameraRight,m.shadowCameraTop,m.shadowCameraBottom,m.shadowCameraNear,m.shadowCameraFar);else{console.error("Unsupported light type for shadow");continue}n.add(m.shadowCamera);!0===n.autoUpdate&&n.updateMatrixWorld()}m.shadowCameraVisible&&
!m.cameraHelper&&(m.cameraHelper=new THREE.CameraHelper(m.shadowCamera),m.shadowCamera.add(m.cameraHelper));if(m.isVirtual&&C.originalCamera==p){u=p;q=m.shadowCamera;s=m.pointsFrustum;G=m.pointsWorld;i.set(Infinity,Infinity,Infinity);k.set(-Infinity,-Infinity,-Infinity);for(v=0;8>v;v++)z=G[v],z.copy(s[v]),THREE.ShadowMapPlugin.__projector.unprojectVector(z,u),z.applyMatrix4(q.matrixWorldInverse),z.x<i.x&&(i.x=z.x),z.x>k.x&&(k.x=z.x),z.y<i.y&&(i.y=z.y),z.y>k.y&&(k.y=z.y),z.z<i.z&&(i.z=z.z),z.z>k.z&&
(k.z=z.z);q.left=i.x;q.right=k.x;q.top=k.y;q.bottom=i.y;q.updateProjectionMatrix()}q=m.shadowMap;s=m.shadowMatrix;u=m.shadowCamera;u.position.setFromMatrixPosition(m.matrixWorld);l.setFromMatrixPosition(m.target.matrixWorld);u.lookAt(l);u.updateMatrixWorld();u.matrixWorldInverse.getInverse(u.matrixWorld);m.cameraHelper&&(m.cameraHelper.visible=m.shadowCameraVisible);m.shadowCameraVisible&&m.cameraHelper.update();s.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);s.multiply(u.projectionMatrix);s.multiply(u.matrixWorldInverse);
h.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse);g.setFromMatrix(h);b.setRenderTarget(q);b.clear();G=n.__webglObjects;m=0;for(q=G.length;m<q;m++)if(v=G[m],s=v.object,v.render=!1,s.visible&&s.castShadow&&(!(s instanceof THREE.Mesh||s instanceof THREE.ParticleSystem)||!s.frustumCulled||g.intersectsObject(s)))s._modelViewMatrix.multiplyMatrices(u.matrixWorldInverse,s.matrixWorld),v.render=!0;m=0;for(q=G.length;m<q;m++)v=G[m],v.render&&(s=v.object,v=v.buffer,B=s.material instanceof THREE.MeshFaceMaterial?
s.material.materials[0]:s.material,z=0<s.geometry.morphTargets.length&&B.morphTargets,B=s instanceof THREE.SkinnedMesh&&B.skinning,z=s.customDepthMaterial?s.customDepthMaterial:B?z?f:e:z?d:c,v instanceof THREE.BufferGeometry?b.renderBufferDirect(u,n.__lights,null,z,v,s):b.renderBuffer(u,n.__lights,null,z,v,s));G=n.__webglObjectsImmediate;m=0;for(q=G.length;m<q;m++)v=G[m],s=v.object,s.visible&&s.castShadow&&(s._modelViewMatrix.multiplyMatrices(u.matrixWorldInverse,s.matrixWorld),b.renderImmediateObject(u,
n.__lights,null,c,s))}t=b.getClearColor();r=b.getClearAlpha();a.clearColor(t.r,t.g,t.b,r);a.enable(a.BLEND);b.shadowMapCullFace===THREE.CullFaceFront&&a.cullFace(a.BACK)}};THREE.ShadowMapPlugin.__projector=new THREE.Projector;THREE.SpritePlugin=function(){var a,b,c,d,e,f,g,h,i,k,l,n,p,t,r,m,q;function u(a,b){return a.z!==b.z?b.z-a.z:b.id-a.id}var s,v,z,G,N,C,B,x;this.init=function(u){s=u.context;v=u;G=new Float32Array([-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]);N=new Uint16Array([0,1,2,0,2,3]);C=s.createBuffer();B=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,C);s.bufferData(s.ARRAY_BUFFER,G,s.STATIC_DRAW);s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,B);s.bufferData(s.ELEMENT_ARRAY_BUFFER,N,s.STATIC_DRAW);var u=s.createProgram(),
L=s.createShader(s.VERTEX_SHADER),w=s.createShader(s.FRAGMENT_SHADER);s.shaderSource(L,["precision "+v.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
s.shaderSource(w,["precision "+v.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
s.compileShader(L);s.compileShader(w);s.attachShader(u,L);s.attachShader(u,w);s.linkProgram(u);x=u;m=s.getAttribLocation(x,"position");q=s.getAttribLocation(x,"uv");a=s.getUniformLocation(x,"uvOffset");b=s.getUniformLocation(x,"uvScale");c=s.getUniformLocation(x,"rotation");d=s.getUniformLocation(x,"scale");e=s.getUniformLocation(x,"color");f=s.getUniformLocation(x,"map");g=s.getUniformLocation(x,"opacity");h=s.getUniformLocation(x,"modelViewMatrix");i=s.getUniformLocation(x,"projectionMatrix");k=
s.getUniformLocation(x,"fogType");l=s.getUniformLocation(x,"fogDensity");n=s.getUniformLocation(x,"fogNear");p=s.getUniformLocation(x,"fogFar");t=s.getUniformLocation(x,"fogColor");r=s.getUniformLocation(x,"alphaTest");u=document.createElement("canvas");u.width=8;u.height=8;L=u.getContext("2d");L.fillStyle="#ffffff";L.fillRect(0,0,u.width,u.height);z=new THREE.Texture(u);z.needsUpdate=!0};this.render=function(F,G){var w=F.__webglSprites,E=w.length;if(E){s.useProgram(x);s.enableVertexAttribArray(m);
s.enableVertexAttribArray(q);s.disable(s.CULL_FACE);s.enable(s.BLEND);s.bindBuffer(s.ARRAY_BUFFER,C);s.vertexAttribPointer(m,2,s.FLOAT,!1,16,0);s.vertexAttribPointer(q,2,s.FLOAT,!1,16,8);s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,B);s.uniformMatrix4fv(i,!1,G.projectionMatrix.elements);s.activeTexture(s.TEXTURE0);s.uniform1i(f,0);var y=0,D=0,H=F.fog;H?(s.uniform3f(t,H.color.r,H.color.g,H.color.b),H instanceof THREE.Fog?(s.uniform1f(n,H.near),s.uniform1f(p,H.far),s.uniform1i(k,1),D=y=1):H instanceof THREE.FogExp2&&
(s.uniform1f(l,H.density),s.uniform1i(k,2),D=y=2)):(s.uniform1i(k,0),D=y=0);for(var K,A,N=[],H=0;H<E;H++)K=w[H],!1!==K.visible&&(K._modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,K.matrixWorld),K.z=-K._modelViewMatrix.elements[14]);w.sort(u);for(H=0;H<E;H++)K=w[H],!1!==K.visible&&(A=K.material,s.uniform1f(r,A.alphaTest),s.uniformMatrix4fv(h,!1,K._modelViewMatrix.elements),N[0]=K.scale.x,N[1]=K.scale.y,K=F.fog&&A.fog?D:0,y!==K&&(s.uniform1i(k,K),y=K),null!==A.map?(s.uniform2f(a,A.map.offset.x,
A.map.offset.y),s.uniform2f(b,A.map.repeat.x,A.map.repeat.y)):(s.uniform2f(a,0,0),s.uniform2f(b,1,1)),s.uniform1f(g,A.opacity),s.uniform3f(e,A.color.r,A.color.g,A.color.b),s.uniform1f(c,A.rotation),s.uniform2fv(d,N),v.setBlending(A.blending,A.blendEquation,A.blendSrc,A.blendDst),v.setDepthTest(A.depthTest),v.setDepthWrite(A.depthWrite),A.map&&A.map.image&&A.map.image.width?v.setTexture(A.map,0):v.setTexture(z,0),s.drawElements(s.TRIANGLES,6,s.UNSIGNED_SHORT,0));s.enable(s.CULL_FACE)}}};THREE.DepthPassPlugin=function(){this.enabled=!1;this.renderTarget=null;var a,b,c,d,e,f,g=new THREE.Frustum,h=new THREE.Matrix4;this.init=function(g){a=g.context;b=g;var g=THREE.ShaderLib.depthRGBA,h=THREE.UniformsUtils.clone(g.uniforms);c=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h});d=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0});e=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,
vertexShader:g.vertexShader,uniforms:h,skinning:!0});f=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0,skinning:!0});c._shadowPass=!0;d._shadowPass=!0;e._shadowPass=!0;f._shadowPass=!0};this.render=function(a,b){this.enabled&&this.update(a,b)};this.update=function(i,k){var l,n,p,t,r,m;a.clearColor(1,1,1,1);a.disable(a.BLEND);b.setDepthTest(!0);!0===i.autoUpdate&&i.updateMatrixWorld();k.matrixWorldInverse.getInverse(k.matrixWorld);h.multiplyMatrices(k.projectionMatrix,
k.matrixWorldInverse);g.setFromMatrix(h);b.setRenderTarget(this.renderTarget);b.clear();m=i.__webglObjects;l=0;for(n=m.length;l<n;l++)if(p=m[l],r=p.object,p.render=!1,r.visible&&(!(r instanceof THREE.Mesh||r instanceof THREE.ParticleSystem)||!r.frustumCulled||g.intersectsObject(r)))r._modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,r.matrixWorld),p.render=!0;var q;l=0;for(n=m.length;l<n;l++)if(p=m[l],p.render&&(r=p.object,p=p.buffer,!(r instanceof THREE.ParticleSystem)||r.customDepthMaterial))(q=
r.material instanceof THREE.MeshFaceMaterial?r.material.materials[0]:r.material)&&b.setMaterialFaces(r.material),t=0<r.geometry.morphTargets.length&&q.morphTargets,q=r instanceof THREE.SkinnedMesh&&q.skinning,t=r.customDepthMaterial?r.customDepthMaterial:q?t?f:e:t?d:c,p instanceof THREE.BufferGeometry?b.renderBufferDirect(k,i.__lights,null,t,p,r):b.renderBuffer(k,i.__lights,null,t,p,r);m=i.__webglObjectsImmediate;l=0;for(n=m.length;l<n;l++)p=m[l],r=p.object,r.visible&&(r._modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,
r.matrixWorld),b.renderImmediateObject(k,i.__lights,null,c,r));l=b.getClearColor();n=b.getClearAlpha();a.clearColor(l.r,l.g,l.b,n);a.enable(a.BLEND)}};THREE.ShaderFlares={lensFlareVertexTexture:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},lensFlare:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}};
;// tween.js - http://github.com/sole/tween.js
'use strict';void 0===Date.now&&(Date.now=function(){return(new Date).valueOf()});
var TWEEN=TWEEN||function(){var a=[];return{REVISION:"12",getAll:function(){return a},removeAll:function(){a=[]},add:function(c){a.push(c)},remove:function(c){c=a.indexOf(c);-1!==c&&a.splice(c,1)},update:function(c){if(0===a.length)return!1;for(var b=0,c=void 0!==c?c:"undefined"!==typeof window&&void 0!==window.performance&&void 0!==window.performance.now?window.performance.now():Date.now();b<a.length;)a[b].update(c)?b++:a.splice(b,1);return!0}}}();
TWEEN.Tween=function(a){var c={},b={},d={},e=1E3,g=0,h=!1,j=!1,q=0,m=null,v=TWEEN.Easing.Linear.None,w=TWEEN.Interpolation.Linear,n=[],r=null,s=!1,t=null,u=null,k;for(k in a)c[k]=parseFloat(a[k],10);this.to=function(a,c){void 0!==c&&(e=c);b=a;return this};this.start=function(e){TWEEN.add(this);j=!0;s=!1;m=void 0!==e?e:"undefined"!==typeof window&&void 0!==window.performance&&void 0!==window.performance.now?window.performance.now():Date.now();m+=q;for(var f in b){if(b[f]instanceof Array){if(0===b[f].length)continue;
b[f]=[a[f]].concat(b[f])}c[f]=a[f];!1===c[f]instanceof Array&&(c[f]*=1);d[f]=c[f]||0}return this};this.stop=function(){if(!j)return this;TWEEN.remove(this);j=!1;this.stopChainedTweens();return this};this.stopChainedTweens=function(){for(var a=0,b=n.length;a<b;a++)n[a].stop()};this.delay=function(a){q=a;return this};this.repeat=function(a){g=a;return this};this.yoyo=function(a){h=a;return this};this.easing=function(a){v=a;return this};this.interpolation=function(a){w=a;return this};this.chain=function(){n=
arguments;return this};this.onStart=function(a){r=a;return this};this.onUpdate=function(a){t=a;return this};this.onComplete=function(a){u=a;return this};this.update=function(p){var f;if(p<m)return!0;!1===s&&(null!==r&&r.call(a),s=!0);var i=(p-m)/e,i=1<i?1:i,j=v(i);for(f in b){var k=c[f]||0,l=b[f];l instanceof Array?a[f]=w(l,j):("string"===typeof l&&(l=k+parseFloat(l,10)),"number"===typeof l&&(a[f]=k+(l-k)*j))}null!==t&&t.call(a,j);if(1==i)if(0<g){isFinite(g)&&g--;for(f in d)"string"===typeof b[f]&&
(d[f]+=parseFloat(b[f],10)),h&&(i=d[f],d[f]=b[f],b[f]=i),c[f]=d[f];m=p+q}else{null!==u&&u.call(a);f=0;for(i=n.length;f<i;f++)n[f].start(p);return!1}return!0}};
TWEEN.Easing={Linear:{None:function(a){return a}},Quadratic:{In:function(a){return a*a},Out:function(a){return a*(2-a)},InOut:function(a){return 1>(a*=2)?0.5*a*a:-0.5*(--a*(a-2)-1)}},Cubic:{In:function(a){return a*a*a},Out:function(a){return--a*a*a+1},InOut:function(a){return 1>(a*=2)?0.5*a*a*a:0.5*((a-=2)*a*a+2)}},Quartic:{In:function(a){return a*a*a*a},Out:function(a){return 1- --a*a*a*a},InOut:function(a){return 1>(a*=2)?0.5*a*a*a*a:-0.5*((a-=2)*a*a*a-2)}},Quintic:{In:function(a){return a*a*a*
a*a},Out:function(a){return--a*a*a*a*a+1},InOut:function(a){return 1>(a*=2)?0.5*a*a*a*a*a:0.5*((a-=2)*a*a*a*a+2)}},Sinusoidal:{In:function(a){return 1-Math.cos(a*Math.PI/2)},Out:function(a){return Math.sin(a*Math.PI/2)},InOut:function(a){return 0.5*(1-Math.cos(Math.PI*a))}},Exponential:{In:function(a){return 0===a?0:Math.pow(1024,a-1)},Out:function(a){return 1===a?1:1-Math.pow(2,-10*a)},InOut:function(a){return 0===a?0:1===a?1:1>(a*=2)?0.5*Math.pow(1024,a-1):0.5*(-Math.pow(2,-10*(a-1))+2)}},Circular:{In:function(a){return 1-
Math.sqrt(1-a*a)},Out:function(a){return Math.sqrt(1- --a*a)},InOut:function(a){return 1>(a*=2)?-0.5*(Math.sqrt(1-a*a)-1):0.5*(Math.sqrt(1-(a-=2)*a)+1)}},Elastic:{In:function(a){var c,b=0.1;if(0===a)return 0;if(1===a)return 1;!b||1>b?(b=1,c=0.1):c=0.4*Math.asin(1/b)/(2*Math.PI);return-(b*Math.pow(2,10*(a-=1))*Math.sin((a-c)*2*Math.PI/0.4))},Out:function(a){var c,b=0.1;if(0===a)return 0;if(1===a)return 1;!b||1>b?(b=1,c=0.1):c=0.4*Math.asin(1/b)/(2*Math.PI);return b*Math.pow(2,-10*a)*Math.sin((a-c)*
2*Math.PI/0.4)+1},InOut:function(a){var c,b=0.1;if(0===a)return 0;if(1===a)return 1;!b||1>b?(b=1,c=0.1):c=0.4*Math.asin(1/b)/(2*Math.PI);return 1>(a*=2)?-0.5*b*Math.pow(2,10*(a-=1))*Math.sin((a-c)*2*Math.PI/0.4):0.5*b*Math.pow(2,-10*(a-=1))*Math.sin((a-c)*2*Math.PI/0.4)+1}},Back:{In:function(a){return a*a*(2.70158*a-1.70158)},Out:function(a){return--a*a*(2.70158*a+1.70158)+1},InOut:function(a){return 1>(a*=2)?0.5*a*a*(3.5949095*a-2.5949095):0.5*((a-=2)*a*(3.5949095*a+2.5949095)+2)}},Bounce:{In:function(a){return 1-
TWEEN.Easing.Bounce.Out(1-a)},Out:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375},InOut:function(a){return 0.5>a?0.5*TWEEN.Easing.Bounce.In(2*a):0.5*TWEEN.Easing.Bounce.Out(2*a-1)+0.5}}};
TWEEN.Interpolation={Linear:function(a,c){var b=a.length-1,d=b*c,e=Math.floor(d),g=TWEEN.Interpolation.Utils.Linear;return 0>c?g(a[0],a[1],d):1<c?g(a[b],a[b-1],b-d):g(a[e],a[e+1>b?b:e+1],d-e)},Bezier:function(a,c){var b=0,d=a.length-1,e=Math.pow,g=TWEEN.Interpolation.Utils.Bernstein,h;for(h=0;h<=d;h++)b+=e(1-c,d-h)*e(c,h)*a[h]*g(d,h);return b},CatmullRom:function(a,c){var b=a.length-1,d=b*c,e=Math.floor(d),g=TWEEN.Interpolation.Utils.CatmullRom;return a[0]===a[b]?(0>c&&(e=Math.floor(d=b*(1+c))),g(a[(e-
1+b)%b],a[e],a[(e+1)%b],a[(e+2)%b],d-e)):0>c?a[0]-(g(a[0],a[0],a[1],a[1],-d)-a[0]):1<c?a[b]-(g(a[b],a[b],a[b-1],a[b-1],d-b)-a[b]):g(a[e?e-1:0],a[e],a[b<e+1?b:e+1],a[b<e+2?b:e+2],d-e)},Utils:{Linear:function(a,c,b){return(c-a)*b+a},Bernstein:function(a,c){var b=TWEEN.Interpolation.Utils.Factorial;return b(a)/b(c)/b(a-c)},Factorial:function(){var a=[1];return function(c){var b=1,d;if(a[c])return a[c];for(d=c;1<d;d--)b*=d;return a[c]=b}}(),CatmullRom:function(a,c,b,d,e){var a=0.5*(b-a),d=0.5*(d-c),g=
e*e;return(2*c-2*b+a+d)*e*g+(-3*c+3*b-2*a-d)*g+a*e+c}}};;/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Full-screen textured quad shader
 */

THREE.CopyShader = {

	uniforms: {

		"tDiffuse": { type: "t", value: null },
		"opacity":  { type: "f", value: 1.0 }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"uniform float opacity;",

		"uniform sampler2D tDiffuse;",

		"varying vec2 vUv;",

		"void main() {",

			"vec4 texel = texture2D( tDiffuse, vUv );",
			"gl_FragColor = opacity * texel;",

		"}"

	].join("\n")

};
;/**
 * @author felixturner / http://airtight.cc/
 *
 * RGB Shift Shader
 * Shifts red and blue channels from center in opposite directions
 * Ported from http://kriss.cx/tom/2009/05/rgb-shift/
 * by Tom Butterworth / http://kriss.cx/tom/
 *
 * amount: shift distance (1 is width of input)
 * angle: shift angle in radians
 */

THREE.RGBShiftShader = {

	uniforms: {

		"tDiffuse": { type: "t", value: null },
		"amount":   { type: "f", value: 0.005 },
		"angle":    { type: "f", value: 0.0 }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"uniform sampler2D tDiffuse;",
		"uniform float amount;",
		"uniform float angle;",

		"varying vec2 vUv;",

		"void main() {",

			"vec2 offset = amount * vec2( cos(angle), sin(angle));",
			"vec4 cr = texture2D(tDiffuse, vUv + offset);",
			"vec4 cga = texture2D(tDiffuse, vUv);",
			"vec4 cb = texture2D(tDiffuse, vUv - offset);",
			"gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);",

		"}"

	].join("\n")

};
;/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.EffectComposer = function ( renderer, renderTarget ) {

	this.renderer = renderer;

	if ( renderTarget === undefined ) {

		var width = window.innerWidth || 1;
		var height = window.innerHeight || 1;
		var parameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBuffer: false };

		renderTarget = new THREE.WebGLRenderTarget( width, height, parameters );

	}

	this.renderTarget1 = renderTarget;
	this.renderTarget2 = renderTarget.clone();

	this.writeBuffer = this.renderTarget1;
	this.readBuffer = this.renderTarget2;

	this.passes = [];

	if ( THREE.CopyShader === undefined )
		console.error( "THREE.EffectComposer relies on THREE.CopyShader" );

	this.copyPass = new THREE.ShaderPass( THREE.CopyShader );

};

THREE.EffectComposer.prototype = {

	swapBuffers: function() {

		var tmp = this.readBuffer;
		this.readBuffer = this.writeBuffer;
		this.writeBuffer = tmp;

	},

	addPass: function ( pass ) {

		this.passes.push( pass );

	},

	insertPass: function ( pass, index ) {

		this.passes.splice( index, 0, pass );

	},

	render: function ( delta ) {

		this.writeBuffer = this.renderTarget1;
		this.readBuffer = this.renderTarget2;

		var maskActive = false;

		var pass, i, il = this.passes.length;

		for ( i = 0; i < il; i ++ ) {

			pass = this.passes[ i ];

			if ( !pass.enabled ) continue;

			pass.render( this.renderer, this.writeBuffer, this.readBuffer, delta, maskActive );

			if ( pass.needsSwap ) {

				if ( maskActive ) {

					var context = this.renderer.context;

					context.stencilFunc( context.NOTEQUAL, 1, 0xffffffff );

					this.copyPass.render( this.renderer, this.writeBuffer, this.readBuffer, delta );

					context.stencilFunc( context.EQUAL, 1, 0xffffffff );

				}

				this.swapBuffers();

			}

			if ( pass instanceof THREE.MaskPass ) {

				maskActive = true;

			} else if ( pass instanceof THREE.ClearMaskPass ) {

				maskActive = false;

			}

		}

	},

	reset: function ( renderTarget ) {

		if ( renderTarget === undefined ) {

			renderTarget = this.renderTarget1.clone();

			renderTarget.width = window.innerWidth;
			renderTarget.height = window.innerHeight;

		}

		this.renderTarget1 = renderTarget;
		this.renderTarget2 = renderTarget.clone();

		this.writeBuffer = this.renderTarget1;
		this.readBuffer = this.renderTarget2;

	},

	setSize: function ( width, height ) {

		var renderTarget = this.renderTarget1.clone();

		renderTarget.width = width;
		renderTarget.height = height;

		this.reset( renderTarget );

	}

};

// shared ortho camera

THREE.EffectComposer.camera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0, 1 );

THREE.EffectComposer.quad = new THREE.Mesh( new THREE.PlaneGeometry( 2, 2 ), null );

THREE.EffectComposer.scene = new THREE.Scene();
THREE.EffectComposer.scene.add( THREE.EffectComposer.quad );
;/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.RenderPass = function ( scene, camera, overrideMaterial, clearColor, clearAlpha ) {

	this.scene = scene;
	this.camera = camera;

	this.overrideMaterial = overrideMaterial;

	this.clearColor = clearColor;
	this.clearAlpha = ( clearAlpha !== undefined ) ? clearAlpha : 1;

	this.oldClearColor = new THREE.Color();
	this.oldClearAlpha = 1;

	this.enabled = true;
	this.clear = true;
	this.needsSwap = false;

};

THREE.RenderPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		this.scene.overrideMaterial = this.overrideMaterial;

		if ( this.clearColor ) {

			this.oldClearColor.copy( renderer.getClearColor() );
			this.oldClearAlpha = renderer.getClearAlpha();

			renderer.setClearColor( this.clearColor, this.clearAlpha );

		}

		renderer.render( this.scene, this.camera, readBuffer, this.clear );

		if ( this.clearColor ) {

			renderer.setClearColor( this.oldClearColor, this.oldClearAlpha );

		}

		this.scene.overrideMaterial = null;

	}

};
;/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.MaskPass = function ( scene, camera ) {

	this.scene = scene;
	this.camera = camera;

	this.enabled = true;
	this.clear = true;
	this.needsSwap = false;

	this.inverse = false;

};

THREE.MaskPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		var context = renderer.context;

		// don't update color or depth

		context.colorMask( false, false, false, false );
		context.depthMask( false );

		// set up stencil

		var writeValue, clearValue;

		if ( this.inverse ) {

			writeValue = 0;
			clearValue = 1;

		} else {

			writeValue = 1;
			clearValue = 0;

		}

		context.enable( context.STENCIL_TEST );
		context.stencilOp( context.REPLACE, context.REPLACE, context.REPLACE );
		context.stencilFunc( context.ALWAYS, writeValue, 0xffffffff );
		context.clearStencil( clearValue );

		// draw into the stencil buffer

		renderer.render( this.scene, this.camera, readBuffer, this.clear );
		renderer.render( this.scene, this.camera, writeBuffer, this.clear );

		// re-enable update of color and depth

		context.colorMask( true, true, true, true );
		context.depthMask( true );

		// only render where stencil is set to 1

		context.stencilFunc( context.EQUAL, 1, 0xffffffff );  // draw if == 1
		context.stencilOp( context.KEEP, context.KEEP, context.KEEP );

	}

};


THREE.ClearMaskPass = function () {

	this.enabled = true;

};

THREE.ClearMaskPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		var context = renderer.context;

		context.disable( context.STENCIL_TEST );

	}

};
;/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.ShaderPass = function ( shader, textureID ) {

	this.textureID = ( textureID !== undefined ) ? textureID : "tDiffuse";

	this.uniforms = THREE.UniformsUtils.clone( shader.uniforms );

	this.material = new THREE.ShaderMaterial( {

		uniforms: this.uniforms,
		vertexShader: shader.vertexShader,
		fragmentShader: shader.fragmentShader

	} );

	this.renderToScreen = false;

	this.enabled = true;
	this.needsSwap = true;
	this.clear = false;

};

THREE.ShaderPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		if ( this.uniforms[ this.textureID ] ) {

			this.uniforms[ this.textureID ].value = readBuffer;

		}

		THREE.EffectComposer.quad.material = this.material;

		if ( this.renderToScreen ) {

			renderer.render( THREE.EffectComposer.scene, THREE.EffectComposer.camera );

		} else {

			renderer.render( THREE.EffectComposer.scene, THREE.EffectComposer.camera, writeBuffer, this.clear );

		}

	}

};
;// Inspired by threejs examples.
// Used for le_glitch project.
// 
// @author: Valeri Kremer
// @twitter: @krevativ

(function () {



	//==================================================================
	// requestAnimFrame() Shim layer by Paul Irish
	//==================================================================
	

	window.requestAnimFrame = (function () {
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          function( callback ){
	            window.setTimeout(callback, 1000 / 60);
	          };
	})();

	
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };




    //==================================================================
    // Globals
    //==================================================================
    
	var WIDTH = window.innerWidth,
		HEIGHT = window.innerHeight,
		HALFWIDTH = WIDTH / 2,
		HALFHEIGTH = HEIGHT / 2,
		VIEW_ANGLE = 60,
	    ASPECT = WIDTH / HEIGHT,
	    animationRequestID = undefined,
		container = null,
		mouseX = 0,
		mouseY = 0,
		scene = null,
		camera = null,
		renderer = null,
		composer = null,
		ratio = getPixelRatio(),
		effect = null,
		glitchCounter = 0,
		glitchStart = 0,
		glitchRepeats = 10,
		glitchRepeatCounter = 0,
		sceneMeshObjtectsGraph = [],
		sceneObject = null,
		frame = 0,
		radius = 1,
		rings = 12,
		segments = 12,
		flatShadingExceptions = ['Floor']
		rotationExceptions = ['Floor', 'Glitch'],
		SCENELAMPS = [],
		SHARKS = [],
		pulsar = null,
		pulsarRadius = 0.5,
		particleSystem = null,
		scrollPosition = 0,
		segmentHeight = window.innerHeight;
		scrollMarks = {
			first : {
				mark : segmentHeight * 1,
				inView : false,
				triggerd : false
			},
			second : {
				mark : segmentHeight * 2,
				inView : false,
				triggerd : false
			},
			third : {
				mark : segmentHeight * 3,
				inView : false,
				triggerd : false
			}
		},
		rotSpeed = 0.0008;


	var mouse = new THREE.Vector2(),
		offset = new THREE.Vector3( 10, 10, 10 ),
		INTERSECTED,
		controls;

	var pickingData = [], pickingTexture, pickingScene;
	var objects = [], highlightBox;

	var clock = new THREE.Clock();

	var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });

	var defaultCamera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, 0.1, 10000 ),
		firstPersonCamera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, 1, 20000 ),
		camera = firstPersonCamera;

	var projector = new THREE.Projector(),
		raycaster = new THREE.Raycaster();

	// Particle System
	// @particleCount needs to be at least the same count as sharks in second scene
	var particleCount = 99, 
	    particles = new THREE.Geometry(),
		pMaterial = new THREE.ParticleBasicMaterial({
			color: 0xFFFFFF,
			size: 20,
			map: THREE.ImageUtils.loadTexture(
				"/img/arrow.png"
			),
			blending: THREE.AdditiveBlending,
			transparent: true
		}),
		pmMaterial = new THREE.ParticleBasicMaterial({
			color: 0xFFFFFF,
			size: 1,
			transparent: true
		});



	// create shader
	var attributes = {
	    displacement: {
	        type: 'f', // a float
	        value: [] // an empty array
	    }
	};

	// add a uniform for the amplitude
	var uniforms = {
	    amplitude: {
	        type: 'f', // a float
	        value: 0
	    }
	};

	//==================================================================
	// Small Helpers
	//==================================================================
	
	/**
	 * [getPixelRatio description]
	 * @return {[type]} [description]
	 */
	function getPixelRatio () {
		var canvas = document.createElement('canvas'),
			context = canvas.getContext('2d'),
			devicePixelRatio = window.devicePixelRatio || 1,
			backingStoreRatio = context.webkitBackingStorePixelRatio ||
								context.mozBackingStorePixelRatio ||
								context.msBackingStorePixelRatio ||
								context.oBackingStorePixelRatio ||
								context.backingStorePixelRatio || 1,
			ratio = devicePixelRatio / backingStoreRatio;

		return ratio;
	}

	/**
	 * [getYScrollPosition description]
	 * @return {[type]} [description]
	 */
	function getYScrollPosition (){
	    if(window.pageYOffset!= undefined){
	        return pageYOffset;
	    } else {
	        var sx, sy;
	        sx= document.documentElement.scrollLeft || 0;
	        sy= document.documentElement.scrollTop || 0;
	        return sy;
	    }
	}

	function getRandom (min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	//==================================================================
	// Event Handlers
	//==================================================================

	/**
	 * [onDocumentMouseMoveHandler description]
	 * @param  {[type]} event [description]
	 * @return {[type]}       [description]
	 */
	function onDocumentMouseMoveHandler (event) {
			mouseX = ( event.clientX - HALFWIDTH );
			mouseY = ( event.clientY - HALFHEIGTH );
	}

	/**
	 * [onWindowResize description]
	 * @return {[type]} [description]
	 */
	function onWindowResize() {

		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

		segmentHeight = window.innerHeight;

	}

	/**
	 * [onWindowScroll description]
	 * @return {[type]} [description]
	 */
	function onWindowScroll () {
		scrollPosition = getYScrollPosition();

		if ( scrollPosition && scrollPosition <= scrollMarks.first.mark) {
			scrollMarks.first.inView = true;
			scrollMarks.second.inView = false;
			scrollMarks.third.inView = false;
		}
		if ( scrollPosition && scrollPosition >= scrollMarks.first.mark && scrollPosition <= scrollMarks.second.mark) {
			scrollMarks.first.inView = false;
			scrollMarks.second.inView = true;
			scrollMarks.third.inView = false;
		}
		// if ( scrollPosition && scrollPosition >= scrollMarks.second.mark && scrollPosition <= scrollMarks.third.mark) {
		// 	scrollMarks.first.inView = false;
		// 	scrollMarks.second.inView = false;
		// 	scrollMarks.third.inView = true;
		// }

	}

	/**
	 * [bindEvents description]
	 * @return {[type]} [description]
	 */
	function bindEvents () {
		window.addEventListener('scroll', onWindowScroll, false);
		window.addEventListener( 'resize', onWindowResize, false );
	}

	/**
	 * [createLoadingScene description]
	 * @return {[type]} [description]
	 */
	function createLoadingScene () {
		var object, geometry, material, light, count = 500, range = 300;
		var context = {
			scene : new THREE.Scene(),
			camera : new THREE.PerspectiveCamera( 54, window.innerWidth / window.innerHeight, 1, 1000 )
		};

		context.camera.position.z = 100;
		context.scene.matrixAutoUpdate = false;

		return context;

	}

	/**
	 * [handle_update description]
	 * @param  {[type]} result [description]
	 * @param  {[type]} pieces [description]
	 * @return {[type]}        [description]
	 */
	function handle_update ( result, pieces ) {

		var m, material, count = 0;

		for ( m in result.materials ) {

			material = result.materials[ m ];
			if ( ! ( material instanceof THREE.MeshFaceMaterial ) ) {

				if( !material.program ) {

					renderer.initMaterial( material, result.scene.__lights, result.scene.fog );

					count += 1;
					if( count > pieces ) {
						break;
					}

				}
				
			}
			material.shading = THREE.FlatShading;

		}
	}





	//==================================================================
	// Callbacks
	//==================================================================

	/**
	 * [callbackProgress description]
	 * @param  {[type]} progress [description]
	 * @param  {[type]} result   [description]
	 * @return {[type]}          [description]
	 */
	function callbackProgress ( progress, result ) {

		var bar = 250,
			total = progress.total_models + progress.total_textures,
			loaded = progress.loaded_models + progress.loaded_textures;

		if ( total )
			bar = Math.floor( bar * loaded / total );

		count = 0;
		for ( var m in result.materials ) count++;

		handle_update( result, Math.floor( count/total ) );

	}

	/**
	 * [setAllSceneObjectsFlat description]
	 * @param {[type]} exceptArr [description]
	 */
	function setAllSceneObjectsFlat(exceptArr) {

		var except = false;
		//set flat shading
		for (var i = 0; i < scene.children.length; i++) {
			if (scene.children[i]){
				for (var z = 0; z < exceptArr.length; z++) {
					if (exceptArr[i] === scene.children[i].name){
						except = true;
					}
				}
				if (scene.children[i].material && scene.children[i].material.materials) {
					for (var x = 0; x < scene.children[i].material.materials.length; x++) {
						if (scene.children[i].material.materials[x] && !except) {
							scene.children[i].material.materials[x].shading = THREE.FlatShading;
							scene.children[i].material.materials[x].needsUpdate = true;
						}
					}
				}
				except = false;
			}
		}

	}



	//==================================================================
	// Scene Loader
	//==================================================================

	/**
	 * [findObjectsByNames description]
	 * @param  {[type]} searchArr [description]
	 * @return {[type]}           [description]
	 */
	function findObjectsByNames (searchArr){
		var result = [], child;

		for (var i = 0; i < scene.children.length; i++) {
			child = scene.children[i];
			if (child){
				for (var x = 0; x < searchArr.length; x++){
					if(child.name.split('.')[0] === searchArr[x] ){
						result.push(child);
					}
				}
			}
		}

		return result;
	}

	/**
	 * [prepareScene description]
	 * @param  {[type]} result [description]
	 * @return {[type]}        [description]
	 */
	function prepareScene (result) {

		camera = result.currentCamera;
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		scene = result.scene;
		handle_update( result, 1 );
		scene.fog = new THREE.Fog( 0x3C3C3C, 1, 250 );
		scene.add( new THREE.AmbientLight( 0x3c3c3c ) );

		composer = new THREE.EffectComposer( renderer );
		composer.addPass( new THREE.RenderPass( scene, camera ) );

		effect = new THREE.ShaderPass( THREE.RGBShiftShader );
		effect.uniforms[ 'amount' ].value = 0.0015;
		effect.renderToScreen = true;
		composer.addPass( effect );

	}

	/**
	 * [addPulsar description]
	 */
	function addPulsar () {

		var shaderMaterial = new THREE.ShaderMaterial({
			uniforms: 		uniforms,
			attributes:     attributes,
			vertexShader: document.getElementById( 'vertexshader' ).textContent,
			fragmentShader:  document.getElementById( 'fragmentshader' ).textContent
		});


		// create a new mesh with sphere geometry -
		// we will cover the sphereMaterial next!
		
		var sphere = new THREE.Mesh(
		   new THREE.SphereGeometry(2,
		   segments,
		   rings),

		   shaderMaterial);


		// changes to the vertices
		sphere.geometry.__dirtyVertices = true;

		// changes to the normals
		sphere.geometry.__dirtyNormals = true;
		sphere.name = 'Glitch';
		sphere.scale.y = 1.2;
		sphere.scale.x = 0.7;
		sphere.scale.z = 0.9;


		// now populate the array of attributes
		var vertices = sphere.geometry.vertices;
		var values = attributes.displacement.value
		for(var v = 0; v < vertices.length; v++) {
		    values.push(Math.random() * 30);
		}

		scene.add(sphere);

		sphereMaterial =
		  new THREE.MeshLambertMaterial(
		    {
		      color: 0xCC0000,
		      transparent: true,
		      opacity: 0.25
		    });

		// set up the sphere vars
		var radius = pulsarRadius,
		    segments = 24,
		    rings = 24;

		// create a new mesh with
		// sphere geometry - we will cover
		// the sphereMaterial next!
		pulsar = new THREE.Mesh(

		  new THREE.SphereGeometry(
		    radius,
		    segments,
		    rings),

		  sphereMaterial);

		// add the sphere to the scene
		scene.add(pulsar);
	}




	/**
	 * [firstCallbackFinished description]
	 * @param  {[type]} result [description]
	 * @return {[type]}        [description]
	 */
	function firstCallbackFinished ( result ) {

		prepareScene(result);

		setAllSceneObjectsFlat(flatShadingExceptions);

		$.ionSound({
		    sounds: [
		        "computer_error",
		        "synth_stab:0.5"        // http://www.freesound.org/people/Erokia/sounds/216059/
		    ],
		    path: "sounds/",            // set path to sounds
		    multiPlay: true,            // playing only 1 sound at once
		    volume: "0.3"               // not so loud please
		});

/*		var invisible = findObjectsByNames(['Icosphere']);

		for (var i = 0; i < invisible.length; i++) {
			invisible[i].visible = false;
		}
*/
		$.ionSound.play("computer_error");
	}




	/**
	 * [secondCallbackFinished description]
	 * @param  {[type]} result [description]
	 * @return {[type]}        [description]
	 */
	function secondCallbackFinished ( result ) {

		prepareScene(result);

		SCENELAMPS = findObjectsByNames(['Lamp']);
		SHARKS = findObjectsByNames(['Icosphere_cell']);
		addPulsar();
		
		//set flat shading
		setAllSceneObjectsFlat(flatShadingExceptions);


		$.ionSound.play("computer_error");
	}


	/**
	 * [secondCallbackFinished description]
	 * @param  {[type]} result [description]
	 * @return {[type]}        [description]
	 */
	function thirdCallbackFinished ( result ) {

		prepareScene(result);

		SCENELAMPS = findObjectsByNames(['Lamp']);
		SHARKS = findObjectsByNames(['Icosphere_cell']);
		addPulsar();
		

		//set flat shading
		setAllSceneObjectsFlat(flatShadingExceptions);

		addSharkParticleSystem();


		$.ionSound.play("computer_error");
	}





	// mietääää
	


	/**
	 * [loadFirstBlenderScene description]
	 * @param  {[type]} path [description]
	 * @return {[type]}      [description]
	 */
	function loadFirstBlenderScene ( path ) {
		var loader = new THREE.SceneLoader();
		loader.callbackProgress = callbackProgress;
		loader.load( path, firstCallbackFinished);
	}



	/**
	 * [loadSecondBlenderScene description]
	 * @param  {[type]} path [description]
	 * @return {[type]}      [description]
	 */
	function loadSecondBlenderScene ( path ) {
		var loader = new THREE.SceneLoader();
		loader.callbackProgress = callbackProgress;
		loader.load( path, secondCallbackFinished);
	}


	/**
	 * [loadSecondBlenderScene description]
	 * @param  {[type]} path [description]
	 * @return {[type]}      [description]
	 */
	function loadThirdBlenderScene ( path ) {
		var loader = new THREE.SceneLoader();
		loader.callbackProgress = callbackProgress;
		loader.load( path, thirdCallbackFinished);
	}



	/**
	 * [addParticleSystem description]
	 */
	function addParticleSystem () {
		particleSystem = new THREE.ParticleSystem(
				particles,
				pMaterial);

		particleSystem.sortParticles = true;

		particles = new THREE.Geometry();

		for(var p = 0; p < particleCount; p++) {
			
				// create a particle with random
				var pX = Math.random() * 8 - 1 - Math.random() * 7,
					pY = Math.random() * 8 - 1 - Math.random() * 7,
					pZ = Math.random() * 8 - 1 - Math.random() * 7,
				    particle = new THREE.Vector3(pX, pY, pZ);

				// create a velocity vector
				particle.velocity = new THREE.Vector3(
					0,				// x
					-Math.random(),	// y
					0);				// z

				// add it to the geometry
				particles.vertices.push(particle);

			}

		scene.add(particleSystem);
	}


	/**
	 * [addSharkParticleSystem description]
	 */
	function addSharkParticleSystem () {
		if (!SHARKS || SHARKS.length < 1)
			return;


		particleSystem = new THREE.ParticleSystem(
				particles,
				pMaterial);

		scene.add( new THREE.BoxHelper( particleSystem) );
		scene.add( new THREE.FaceNormalsHelper( particleSystem) );
		scene.add( new THREE.VertexNormalsHelper( particleSystem) );
		scene.add( new THREE.WireframeHelper( particleSystem) );﻿

		particleSystem.sortParticles = true;

		particles = new THREE.Geometry();

		for(var p = 0; p < particleCount; p++) {
			
				var pX = SHARKS[p].position.x,
					pY = SHARKS[p].position.y,
					pZ = SHARKS[p].position.z,
				    particle = new THREE.Vector3(pX, pY, pZ);

	/*			var theta = Math.random()*2*Math.PI;
		    	var phi = Math.acos(Math.random()*2-1);
		    	var pX = 2*Math.sin(phi)*Math.cos(theta);
		    	var pY = 2*Math.sin(phi)*Math.sin(theta);
		    	var pZ = 2*Math.cos(phi);*/

/*			    var pX = Math.random() * 20 - 1 - Math.random() * 20,
			    	pY = Math.random() * 20 - 1 - Math.random() * 20,
			    	pZ = Math.random() * 20 - 1 - Math.random() * 20;*/
			        
				var particle = new THREE.Vector3(pX, pY, pZ);

				particleSystem.add(SHARKS[p]);

				new TWEEN.Tween( { x : pX, y : pY, z : pZ, shark : SHARKS[p] } )
				.to( { 
						x : pX + Math.random() * 10,
						y : pY + Math.random() * 10,
						z : pZ + Math.random() * 10
					 }, 4000 )
				.easing( TWEEN.Easing.Quadratic.InOut )
				.onUpdate(function() {
					this.shark.position = new THREE.Vector3(this.x, this.y, this.z);
				}).start();

				// create a velocity vector
				particle.velocity = new THREE.Vector3(
					0,				// x
					-Math.random(),	// y
					0);				// z

				// add it to the geometry
				particles.vertices.push(particle);

			}

		scene.add(particleSystem);
	}



	/**
	 * [particleUpdate description]
	 * @return {[type]} [description]
	 */
	function particleUpdate () {
		if(!particleSystem)
		return;


		particleSystem.rotation.y += 0.0015;

		var pCount = particleCount;
		while (pCount--) {

			// get the particle
			var particle = particles.vertices[pCount];

			// check if we need to reset
			if (particle.z < -6) {
					particle.z = 6;
					//particle.velocity.y = 0;
				}

			//particle.x = particle.x * Math.PI;
			//particle.y = particle.x * Math.PI;
			//particle.z = particle.x * Math.PI;

			// update the velocity with
			// a splat of randomniz
			//particle.velocity.y -= Math.random() * .1;

			// and the position
			//particle.y *= particle.velocity;

			if (SHARKS.length > 0){
					SHARKS[pCount].position = new THREE.Vector3(particle.x, particle.y, particle.z);
				}

		}

			// flag to the particle system
			// that we've changed its vertices.
			particleSystem.geometry.__dirtyVertices = true;
	}


	/**
	 * [render description]
	 * @param  {[type]} time [description]
	 * @return {[type]}      [description]
	 */
	function render(time) {

		// update the amplitude based on
		// the frame value
		uniforms.amplitude.value = Math.sin(time*0.0006) * 0.009;
		frame += 0.1;

		particleUpdate();

		//camera.position.x += ( mouseX - camera.position.x ) * .001;
		//camera.position.y += ( - mouseY - camera.position.y ) * .001;
		if (scrollMarks && scrollMarks.first.inView && !scrollMarks.first.triggerd) {
			rotSpeed = 0.0008;
			loadFirstBlenderScene('scene/scene1.js');
			scrollMarks.first.triggerd = true;
			scrollMarks.second.triggerd = false;
			scrollMarks.third.triggerd = false;
			} else if (scrollMarks && scrollMarks.second.inView && !scrollMarks.second.triggerd) {
				rotSpeed = 0.0014;
				loadSecondBlenderScene('scene/scene2.js');
				scrollMarks.first.triggerd = false;
				scrollMarks.second.triggerd = true;
				scrollMarks.third.triggerd = false;
			} else if (scrollMarks && scrollMarks.third.inView && !scrollMarks.third.triggerd) {
				rotSpeed = 0.0028;
				loadThirdBlenderScene('scene/scene2.js');
				scrollMarks.first.triggerd = false;
				scrollMarks.second.triggerd = false;
				scrollMarks.third.triggerd = true;
			}

		if (scene.children.length > -1) {

			for (var i=0; i < scene.children.length; i++) {
				if(rotationExceptions.indexOf(scene.children[i].name) === -1) {
					sceneObject = scene.children[i];
					sceneObject.rotation.z += rotSpeed;
				}
			}

			glitchCounter = (glitchCounter + 1) % (250 + glitchRepeats);

			if (glitchCounter > 248 && glitchCounter < (250 + glitchRepeats)) {

				if (glitchRepeatCounter === 0) {
					glitchStart = effect.uniforms[ 'amount' ].value;
					glitchRepeatCounter++;
					$.ionSound.play("synth_stab");
				} else if (glitchRepeatCounter === glitchRepeats) {
					effect.uniforms[ 'amount' ].value = glitchStart;
					glitchRepeatCounter = 0;
					if (SCENELAMPS.length){
						SCENELAMPS[1].intensity = 0.6;
						SCENELAMPS[2].intensity = 0.6;
					}
				} else {
					effect.uniforms[ 'amount' ].value = Math.random() * 0.035;
					if (SCENELAMPS.length){
						SCENELAMPS[1].intensity = Math.random() * 0.35;
						SCENELAMPS[2].intensity = Math.random() * 0.95;
					}
					if (pulsar && pulsarRadius < 18) {
						pulsarRadius += Math.random() * 2;
						pulsar.scale.x = pulsarRadius;
						pulsar.scale.y = pulsarRadius;
						pulsar.scale.z = pulsarRadius;
					} else if ( pulsarRadius >= 18 ) {
						pulsarRadius = 1;
 					}
					glitchRepeatCounter++;
				}
			}

		}
		TWEEN.update();
		camera.lookAt( scene.position );
		composer.render(scene, camera);
		//renderer.render(scene, camera);
	}






	/**
	 * [pick description]
	 * @return {[type]} [description]
	 */
	function pick() {

		var vector = new THREE.Vector3( mouseX, mouseY, 1 );
		projector.unprojectVector( vector, camera );

		raycaster.set( camera.position, vector.sub( camera.position ).normalize() );
		var intersects = raycaster.intersectObjects( scene.children );

		if ( intersects.length > 0 ) {

			if ( INTERSECTED != intersects[ 0 ].object ) {

				if ( INTERSECTED && INTERSECTED.material ){
					if(INTERSECTED.material.emissive) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
				}

				INTERSECTED = intersects[ 0 ].object;
				if( INTERSECTED.material.emissive ){
					INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
					INTERSECTED.material.emissive.setHex( 0xff0000 );
				}

			}

		} else {

			if ( INTERSECTED && INTERSECTED.material.emissive ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

			INTERSECTED = null;

		}


	}





	/**
	 * [animate description]
	 * @param  {[type]} time [description]
	 * @return {[type]}      [description]
	 */
	function animate(time) {
		requestAnimationFrame( animate );

		render(time);

	}

	function animatePreloader () {
		animationRequestID = requestAnimationFrame( animatePreloader );
		TWEEN.update();
	}





	/**
	 * [init description]
	 * @return {[type]} [description]
	 */
	function init () {
		// Globals
		container = document.getElementById('threeBackground');

		// Events
		document.addEventListener( 'mousemove', onDocumentMouseMoveHandler, false );
		bindEvents();

		var loadScene = createLoadingScene();

		scene = loadScene.scene;
		camera = loadScene.camera;

		renderer = new THREE.WebGLRenderer({ antialiasing: true });
		renderer.setSize(WIDTH * ratio, HEIGHT * ratio);
		renderer.setClearColor( 0x3C3C3C, 1 );
		renderer.domElement.style.position = "relative";

		// postprocessing

		composer = new THREE.EffectComposer( renderer );
		composer.addPass( new THREE.RenderPass( scene, camera ) );


		container.appendChild(renderer.domElement);

		loadFirstBlenderScene('scene/scene1.js');
/*		setTimeout(function () {
			loadSecondBlenderScene('scene/scene2.js');
		}, 5000);*/

		cancelAnimationFrame(animationRequestID);
		animationRequestID = undefined;
		animate();

	}



	//start if webgl supported
	if ( Modernizr.webgl ){

		
		$(document).ready(function($) {

			$('.home .arrow').fadeOut( "fast" );
			// document.body.style.overflow = "hidden";

			var loader = new THREE.SceneLoader(),
				canvas = document.getElementById('preloader'),
				ctx = canvas.getContext("2d"),
				margin = { all : 10 }
				pWidth = 88,
				pHeight = 88,
				pWidthHalf = (pWidth / 2),
				pHeightHalf = (pHeight / 2);

			canvas.width = pWidth;
			canvas.height = pHeight;
			animatePreloader();

			new TWEEN.Tween( { progress : 0, loader : loader } )
			.to( { progress : 0.5 }, 1000 )
			.easing( TWEEN.Easing.Quadratic.InOut )
			.onUpdate(function() {
				ctx.beginPath();
				ctx.clearRect(0, 0, pWidth, pHeight);
				ctx.arc(pWidthHalf,pWidthHalf,pWidthHalf - margin.all,0,Math.PI*this.progress,false);
				ctx.lineWidth=3;
				ctx.strokeStyle="#DADADA";
				ctx.stroke();
				ctx.fillStyle = "#DADADA";
			}).onComplete(function () {
				loader.load( 'scene/scene1.js', function () {

					new TWEEN.Tween( { progress : 1, loader : loader } )
					.to( { progress : 1.5 }, 5000 )
					.easing( TWEEN.Easing.Quadratic.InOut )
					.onUpdate(function() {
						ctx.beginPath();
						ctx.clearRect(0, 0, pWidth, pHeight);
						ctx.arc(pWidthHalf,pWidthHalf,pWidthHalf - margin.all,0,Math.PI*this.progress,false);
						ctx.stroke();
						ctx.fillStyle = "#DADADA";
					}).onComplete(function () {
						loader.load( 'scene/scene2.js', function () {

							new TWEEN.Tween( { progress : 1.5, loader : loader } )
							.to( { progress : 2 }, 500 )
							.easing( TWEEN.Easing.Quadratic.InOut )
							.onUpdate(function() {
								ctx.beginPath();
								ctx.clearRect(0, 0, pWidth, pHeight);
								ctx.arc(pWidthHalf,pWidthHalf,pWidthHalf - margin.all,0,Math.PI*this.progress,false);
								ctx.stroke();
								ctx.fillStyle = "#DADADA";
							}).start();

							init();
							document.body.style.overflow = "";
							$('.preloaderContainer').fadeOut( "slow" );
							$('.home .arrow').fadeIn( "slow" );
						});
					}).start();

				});
			}).start();



		});

	}





})();;/*
 * Konami-JS ~
 * :: Now with support for touch events and multiple instances for
 * :: those situations that call for multiple easter eggs!
 * Code: http://konami-js.googlecode.com/
 * Examples: http://www.snaptortoise.com/konami-js
 * Copyright (c) 2009 George Mandis (georgemandis.com, snaptortoise.com)
 * Version: 1.4.2 (9/2/2013)
 * Licensed under the MIT License (http://opensource.org/licenses/MIT)
 * Tested in: Safari 4+, Google Chrome 4+, Firefox 3+, IE7+, Mobile Safari 2.2.1 and Dolphin Browser
 */

var Konami = function (callback) {
	var konami = {
		addEvent: function (obj, type, fn, ref_obj) {
			if (obj.addEventListener)
				obj.addEventListener(type, fn, false);
			else if (obj.attachEvent) {
				// IE
				obj["e" + type + fn] = fn;
				obj[type + fn] = function () {
					obj["e" + type + fn](window.event, ref_obj);
				}
				obj.attachEvent("on" + type, obj[type + fn]);
			}
		},
		input: "",
		pattern: "38384040373937396665",
		load: function (link) {
			this.addEvent(document, "keydown", function (e, ref_obj) {
				if (ref_obj) konami = ref_obj; // IE
				konami.input += e ? e.keyCode : event.keyCode;
				if (konami.input.length > konami.pattern.length)
					konami.input = konami.input.substr((konami.input.length - konami.pattern.length));
				if (konami.input == konami.pattern) {
					konami.code(link);
					konami.input = "";
					e.preventDefault();
					return false;
				}
			}, this);
			this.iphone.load(link);
		},
		code: function (link) {
			window.location = link
		},
		iphone: {
			start_x: 0,
			start_y: 0,
			stop_x: 0,
			stop_y: 0,
			tap: false,
			capture: false,
			orig_keys: "",
			keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
			code: function (link) {
				konami.code(link);
			},
			load: function (link) {
				this.orig_keys = this.keys;
				konami.addEvent(document, "touchmove", function (e) {
					if (e.touches.length == 1 && konami.iphone.capture == true) {
						var touch = e.touches[0];
						konami.iphone.stop_x = touch.pageX;
						konami.iphone.stop_y = touch.pageY;
						konami.iphone.tap = false;
						konami.iphone.capture = false;
						konami.iphone.check_direction();
					}
				});
				konami.addEvent(document, "touchend", function (evt) {
					if (konami.iphone.tap == true) konami.iphone.check_direction(link);
				}, false);
				konami.addEvent(document, "touchstart", function (evt) {
					konami.iphone.start_x = evt.changedTouches[0].pageX;
					konami.iphone.start_y = evt.changedTouches[0].pageY;
					konami.iphone.tap = true;
					konami.iphone.capture = true;
				});
			},
			check_direction: function (link) {
				x_magnitude = Math.abs(this.start_x - this.stop_x);
				y_magnitude = Math.abs(this.start_y - this.stop_y);
				x = ((this.start_x - this.stop_x) < 0) ? "RIGHT" : "LEFT";
				y = ((this.start_y - this.stop_y) < 0) ? "DOWN" : "UP";
				result = (x_magnitude > y_magnitude) ? x : y;
				result = (this.tap == true) ? "TAP" : result;

				if (result == this.keys[0]) this.keys = this.keys.slice(1, this.keys.length);
				if (this.keys.length == 0) {
					this.keys = this.orig_keys;
					this.code(link);
				}
			}
		}
	}

	typeof callback === "string" && konami.load(callback);
	if (typeof callback === "function") {
		konami.code = callback;
		konami.load();
	}

	return konami;
};
;
(function(){

		var command = function () {
			if(console) {
				console.log('Some crazy stuff');
				return true;
			}
			return false;
		};

		window.doCrazyStuff = command;

})();



$(document).ready(function($) {

	function getRandom (min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function randomDeadPixel() {
		console.log('load');
		var value = getRandom(0, window.innerWidth),
			element = document.getElementById('deadPixel'),
			color = element.style.backgroundColor,
			top = parseInt (element.style.top.replace('px', ''), 10),
			left = parseInt (element.style.left.replace('px', ''), 10);

		color = "rgb(255, 0, 0)";
		top = value * value;
		left = value * value;

		element.style.top = getRandom(0, window.innerHeight) + "px";
		element.style.left = getRandom(0, window.innerWidth) + "px";
		element.style.backgroundColor = color;
	}

	randomDeadPixel();

	// window.addEventListener('resize', function () {
	// 	$('article section').each(function () {
	// 		this.style.height = window.innerHeight + 'px';
	// 	});
	// }, true);

/*	function animate(time) {
		requestAnimationFrame( animate );
		if (canvas) {
			ctx = canvas.getContext('2d');
			ctx.fillStyle = '#DADADA';
			ctx.clearRect(0,0, 50, 3);
			ctx.rect(0,0, 50, 3);
			ctx.fill();
		}
	}

	animate();*/

	// function activeSectionHandler (section) {
	// 	canvas  = $('canvas', section)[0];

	// 	if (canvas){
	// 		if ($(canvas).hasClass('pixelLine')) {

	// 			canvas.style.width = window.innerWidth + 'px';
	// 			canvas.style.maxHeight = canvas.height + 'px';


	// 		}
	// 	}
	// }

	// window.addEventListener('scroll', function () {

	// }, false);

	//
	// Imageglitch
	//
	var customImageGlitch = function(duration,$elem, $target){
		$elem.glitch({
		    amount: 3,
		    background : undefined,
		    complete: function(canvas){
				$target.html(canvas);
				setTimeout(function(){
					customImageGlitch(duration, $elem, $target);
				}, duration);
			}
		});
	};

	function getKeyCode(event) {
	   event = event || window.event;
	   return event.keyCode;
	}

	// customImageGlitch(1000, $(".img-glitch-source"), $(".img-glitch-target"));

	// $('article section').each(function () {
	// 	this.style.height = window.innerHeight + 'px';
	// });
	var lastText;

	$( "#inputForm" ).on( "keydown", function( event ) {
	  //console.log( event.type + ": " +  event.which );

	  //arrow up
	  if (event.which === 38) {
	  	$('input[name~="inputField"]',this).val(lastText);
	  }
	});

	$('#inputForm').submit(function (e) {

		var text = $('input[name~="inputField"]',this).val();
		$('input[name~="inputField"]',this).val('');
		var output = $(this).find('.output');
		var aside = document.createElement('aside');
		var p = document.createElement('p');

		lastText = text;

		switch (text.toLowerCase()) {


			case "marco": 	$(aside).addClass('success');
						 	p.innerHTML = 'Tipp: Terminal ♡';
			              	break;

          	case "help": 	$(aside).addClass('help');
          				 	p.innerHTML = 'Tipp: Try Marco';
          	              	break;

          	case "hilfe": 	$(aside).addClass('help');
          				 	p.innerHTML = 'Tipp: Try Marco';
          	              	break;

          	case "ls": 	$(aside).addClass('success');
          				 	p.innerHTML = 'secret.txt';
          	              	break;

          	case "open secret.txt": 	$(aside).addClass('success');
		              				 	p.innerHTML = '0x3a66f2';
		              	              	break;

          	case "vi secret.txt": 	$(aside).addClass('success');
	              				 	p.innerHTML = '0x3a66f2';
	              	              	break;

          	case "vim secret.txt": 	$(aside).addClass('success');
	              				 	p.innerHTML = '0x3a66f2';
	              	              	break;

          	case "0x3a66f2": 	$(aside).addClass('success');
              				 	p.innerHTML = 'Your Win: Free drink!';
              	              	break;

          	case "help": 	$(aside).addClass('success');
          				 	p.innerHTML = 'Tipp: Try Marco';
          	              	break;

          	case "developer": 	$(aside).addClass('success');
	          				 	p.innerHTML = 'Marius Bruns, Florenz Helderman, Valeri Kremer, Matthias Bauer';
	          	              	break;

          	case "thx": 	$(aside).addClass('success');
	          				 	p.innerHTML = 'sass, three.js, tween.js, Ion.Sound';
	          	              	break;

			default: 		$(aside).addClass('error');
							p.innerHTML = 'command not found : ' + text;
		}



		$(aside).append(p);
		$(output).append(aside);
		$( document ).scrollTop( 16000 );

		e.preventDefault();
		return false;
	});


	// Konami Code 
	var easter_egg = new Konami();
	easter_egg.code = function() {
		window.location.href = "well-well-what-do-we-have-here.html";
	}
	easter_egg.load();


	// page related arg tips
	if( $('body').hasClass('main') ){
		console.log("http://www.imdb.com/title/tt0113957/");
	}

    if( $('body').hasClass('l33t') ){
        console.log('... such intense');
        console.log('much love....ö')
        console.log('...wow...')
        console.log('(ﾉಥ益ಥ）ﾉ﻿ ┻━┻');
        console.log('┬─┬ノ( º _ ºノ)', 'chill out bro');
        console.log('┬──┬﻿ ¯\_(ツ)');
        console.log('(ﾉಥ益ಥ）ﾉ﻿ /(.o.) ', 'Dont flip me, Bro!')
    }
    if( $('body').hasClass('pi') ){
    	console.log("Gratulation - du hast die Seite kaputt gemacht");
    	console.log("٩(͡๏̯͡๏)۶");
    	console.log("Ich hoffe es war es wert... ");
    	console.log("... vielleicht ist es dir auch eine Lehre... ");
    	console.log("... man sollte nicht jedes PI anklicken, nur weil Sandra Bullock es gemacht hat... ");
    	console.log("... ich meine... ");
    	console.log("...schon die Tatsache, dass überhaupt etwas hier integriert wurde, was auf einer John Grisham Verfilmung basiert, ist schon seltsam... ");
    	console.log("... was kommt als nächstes... ein KONAMI CODE???");
    	console.log("ಠ_ಠ");
    }
});


