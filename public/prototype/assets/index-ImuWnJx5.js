(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var bc={exports:{}},Xi={},jc={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $r=Symbol.for("react.element"),Np=Symbol.for("react.portal"),Sp=Symbol.for("react.fragment"),Cp=Symbol.for("react.strict_mode"),zp=Symbol.for("react.profiler"),Ep=Symbol.for("react.provider"),Mp=Symbol.for("react.context"),$p=Symbol.for("react.forward_ref"),Lp=Symbol.for("react.suspense"),Pp=Symbol.for("react.memo"),Ap=Symbol.for("react.lazy"),rs=Symbol.iterator;function Tp(e){return e===null||typeof e!="object"?null:(e=rs&&e[rs]||e["@@iterator"],typeof e=="function"?e:null)}var Nc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sc=Object.assign,Cc={};function Pt(e,n,t){this.props=e,this.context=n,this.refs=Cc,this.updater=t||Nc}Pt.prototype.isReactComponent={};Pt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Pt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zc(){}zc.prototype=Pt.prototype;function Kl(e,n,t){this.props=e,this.context=n,this.refs=Cc,this.updater=t||Nc}var Gl=Kl.prototype=new zc;Gl.constructor=Kl;Sc(Gl,Pt.prototype);Gl.isPureReactComponent=!0;var is=Array.isArray,Ec=Object.prototype.hasOwnProperty,Yl={current:null},Mc={key:!0,ref:!0,__self:!0,__source:!0};function $c(e,n,t){var r,a={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)Ec.call(n,r)&&!Mc.hasOwnProperty(r)&&(a[r]=n[r]);var s=arguments.length-2;if(s===1)a.children=t;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:$r,type:e,key:l,ref:o,props:a,_owner:Yl.current}}function Ip(e,n){return{$$typeof:$r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Xl(e){return typeof e=="object"&&e!==null&&e.$$typeof===$r}function Rp(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var as=/\/+/g;function xa(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Rp(""+e.key):n.toString(36)}function oi(e,n,t,r,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case $r:case Np:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+xa(o,0):r,is(a)?(t="",e!=null&&(t=e.replace(as,"$&/")+"/"),oi(a,n,t,"",function(d){return d})):a!=null&&(Xl(a)&&(a=Ip(a,t+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(as,"$&/")+"/")+e)),n.push(a)),1;if(o=0,r=r===""?".":r+":",is(e))for(var s=0;s<e.length;s++){l=e[s];var c=r+xa(l,s);o+=oi(l,n,t,c,a)}else if(c=Tp(e),typeof c=="function")for(e=c.call(e),s=0;!(l=e.next()).done;)l=l.value,c=r+xa(l,s++),o+=oi(l,n,t,c,a);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Dr(e,n,t){if(e==null)return e;var r=[],a=0;return oi(e,r,"","",function(l){return n.call(t,l,a++)}),r}function Fp(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},si={transition:null},Dp={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:si,ReactCurrentOwner:Yl};function Lc(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Dr,forEach:function(e,n,t){Dr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Dr(e,function(){n++}),n},toArray:function(e){return Dr(e,function(n){return n})||[]},only:function(e){if(!Xl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Pt;O.Fragment=Sp;O.Profiler=zp;O.PureComponent=Kl;O.StrictMode=Cp;O.Suspense=Lp;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dp;O.act=Lc;O.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Sc({},e.props),a=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=Yl.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in n)Ec.call(n,c)&&!Mc.hasOwnProperty(c)&&(r[c]=n[c]===void 0&&s!==void 0?s[c]:n[c])}var c=arguments.length-2;if(c===1)r.children=t;else if(1<c){s=Array(c);for(var d=0;d<c;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:$r,type:e.type,key:a,ref:l,props:r,_owner:o}};O.createContext=function(e){return e={$$typeof:Mp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ep,_context:e},e.Consumer=e};O.createElement=$c;O.createFactory=function(e){var n=$c.bind(null,e);return n.type=e,n};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:$p,render:e}};O.isValidElement=Xl;O.lazy=function(e){return{$$typeof:Ap,_payload:{_status:-1,_result:e},_init:Fp}};O.memo=function(e,n){return{$$typeof:Pp,type:e,compare:n===void 0?null:n}};O.startTransition=function(e){var n=si.transition;si.transition={};try{e()}finally{si.transition=n}};O.unstable_act=Lc;O.useCallback=function(e,n){return Se.current.useCallback(e,n)};O.useContext=function(e){return Se.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};O.useEffect=function(e,n){return Se.current.useEffect(e,n)};O.useId=function(){return Se.current.useId()};O.useImperativeHandle=function(e,n,t){return Se.current.useImperativeHandle(e,n,t)};O.useInsertionEffect=function(e,n){return Se.current.useInsertionEffect(e,n)};O.useLayoutEffect=function(e,n){return Se.current.useLayoutEffect(e,n)};O.useMemo=function(e,n){return Se.current.useMemo(e,n)};O.useReducer=function(e,n,t){return Se.current.useReducer(e,n,t)};O.useRef=function(e){return Se.current.useRef(e)};O.useState=function(e){return Se.current.useState(e)};O.useSyncExternalStore=function(e,n,t){return Se.current.useSyncExternalStore(e,n,t)};O.useTransition=function(){return Se.current.useTransition()};O.version="18.3.1";jc.exports=O;var b=jc.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op=b,Bp=Symbol.for("react.element"),Hp=Symbol.for("react.fragment"),Wp=Object.prototype.hasOwnProperty,Up=Op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vp={key:!0,ref:!0,__self:!0,__source:!0};function Pc(e,n,t){var r,a={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Wp.call(n,r)&&!Vp.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:Bp,type:e,key:l,ref:o,props:a,_owner:Up.current}}Xi.Fragment=Hp;Xi.jsx=Pc;Xi.jsxs=Pc;bc.exports=Xi;var i=bc.exports,Ac={exports:{}},Fe={},Tc={exports:{}},Ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(M,R){var I=M.length;M.push(R);e:for(;0<I;){var A=I-1>>>1,F=M[A];if(0<a(F,R))M[A]=R,M[I]=F,I=A;else break e}}function t(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var R=M[0],I=M.pop();if(I!==R){M[0]=I;e:for(var A=0,F=M.length,H=F>>>1;A<H;){var ae=2*(A+1)-1,re=M[ae],U=ae+1,ge=M[U];if(0>a(re,I))U<F&&0>a(ge,re)?(M[A]=ge,M[U]=I,A=U):(M[A]=re,M[ae]=I,A=ae);else if(U<F&&0>a(ge,I))M[A]=ge,M[U]=I,A=U;else break e}}return R}function a(M,R){var I=M.sortIndex-R.sortIndex;return I!==0?I:M.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],d=[],f=1,h=null,m=3,k=!1,v=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(M){for(var R=t(d);R!==null;){if(R.callback===null)r(d);else if(R.startTime<=M)r(d),R.sortIndex=R.expirationTime,n(c,R);else break;R=t(d)}}function _(M){if(w=!1,y(M),!v)if(t(c)!==null)v=!0,ee(N);else{var R=t(d);R!==null&&V(_,R.startTime-M)}}function N(M,R){v=!1,w&&(w=!1,p($),$=-1),k=!0;var I=m;try{for(y(R),h=t(c);h!==null&&(!(h.expirationTime>R)||M&&!L());){var A=h.callback;if(typeof A=="function"){h.callback=null,m=h.priorityLevel;var F=A(h.expirationTime<=R);R=e.unstable_now(),typeof F=="function"?h.callback=F:h===t(c)&&r(c),y(R)}else r(c);h=t(c)}if(h!==null)var H=!0;else{var ae=t(d);ae!==null&&V(_,ae.startTime-R),H=!1}return H}finally{h=null,m=I,k=!1}}var g=!1,S=null,$=-1,C=5,z=-1;function L(){return!(e.unstable_now()-z<C)}function B(){if(S!==null){var M=e.unstable_now();z=M;var R=!0;try{R=S(!0,M)}finally{R?we():(g=!1,S=null)}}else g=!1}var we;if(typeof u=="function")we=function(){u(B)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,se=D.port2;D.port1.onmessage=B,we=function(){se.postMessage(null)}}else we=function(){j(B,0)};function ee(M){S=M,g||(g=!0,we())}function V(M,R){$=j(function(){M(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){v||k||(v=!0,ee(N))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(M){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var I=m;m=R;try{return M()}finally{m=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,R){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var I=m;m=M;try{return R()}finally{m=I}},e.unstable_scheduleCallback=function(M,R,I){var A=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?A+I:A):I=A,M){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=I+F,M={id:f++,callback:R,priorityLevel:M,startTime:I,expirationTime:F,sortIndex:-1},I>A?(M.sortIndex=I,n(d,M),t(c)===null&&M===t(d)&&(w?(p($),$=-1):w=!0,V(_,I-A))):(M.sortIndex=F,n(c,M),v||k||(v=!0,ee(N))),M},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(M){var R=m;return function(){var I=m;m=R;try{return M.apply(this,arguments)}finally{m=I}}}})(Ic);Tc.exports=Ic;var qp=Tc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp=b,Re=qp;function E(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rc=new Set,dr={};function Xn(e,n){bt(e,n),bt(e+"Capture",n)}function bt(e,n){for(dr[e]=n,e=0;e<n.length;e++)Rc.add(n[e])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ya=Object.prototype.hasOwnProperty,Kp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ls={},os={};function Gp(e){return Ya.call(os,e)?!0:Ya.call(ls,e)?!1:Kp.test(e)?os[e]=!0:(ls[e]=!0,!1)}function Yp(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xp(e,n,t,r){if(n===null||typeof n>"u"||Yp(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ce(e,n,t,r,a,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];me[n]=new Ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zl=/[\-:]([a-z])/g;function Jl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Zl,Jl);me[n]=new Ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Zl,Jl);me[n]=new Ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Zl,Jl);me[n]=new Ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function eo(e,n,t,r){var a=me.hasOwnProperty(n)?me[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Xp(n,t,a,r)&&(t=null),r||a===null?Gp(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var xn=Qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Or=Symbol.for("react.element"),nt=Symbol.for("react.portal"),tt=Symbol.for("react.fragment"),no=Symbol.for("react.strict_mode"),Xa=Symbol.for("react.profiler"),Fc=Symbol.for("react.provider"),Dc=Symbol.for("react.context"),to=Symbol.for("react.forward_ref"),Za=Symbol.for("react.suspense"),Ja=Symbol.for("react.suspense_list"),ro=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),Oc=Symbol.for("react.offscreen"),ss=Symbol.iterator;function It(e){return e===null||typeof e!="object"?null:(e=ss&&e[ss]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,ya;function Qt(e){if(ya===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ya=n&&n[1]||""}return`
`+ya+e}var va=!1;function ka(e,n){if(!e||va)return"";va=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),l=r.stack.split(`
`),o=a.length-1,s=l.length-1;1<=o&&0<=s&&a[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(a[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||a[o]!==l[s]){var c=`
`+a[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=s);break}}}finally{va=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Qt(e):""}function Zp(e){switch(e.tag){case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 2:case 15:return e=ka(e.type,!1),e;case 11:return e=ka(e.type.render,!1),e;case 1:return e=ka(e.type,!0),e;default:return""}}function el(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tt:return"Fragment";case nt:return"Portal";case Xa:return"Profiler";case no:return"StrictMode";case Za:return"Suspense";case Ja:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Dc:return(e.displayName||"Context")+".Consumer";case Fc:return(e._context.displayName||"Context")+".Provider";case to:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ro:return n=e.displayName||null,n!==null?n:el(e.type)||"Memo";case kn:n=e._payload,e=e._init;try{return el(e(n))}catch{}}return null}function Jp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return el(n);case 8:return n===no?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function An(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function eh(e){var n=Bc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Br(e){e._valueTracker||(e._valueTracker=eh(e))}function Hc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Bc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nl(e,n){var t=n.checked;return J({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function cs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=An(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Wc(e,n){n=n.checked,n!=null&&eo(e,"checked",n,!1)}function tl(e,n){Wc(e,n);var t=An(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?rl(e,n.type,t):n.hasOwnProperty("defaultValue")&&rl(e,n.type,An(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ds(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function rl(e,n,t){(n!=="number"||ki(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Kt=Array.isArray;function ht(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+An(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function il(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(E(91));return J({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function us(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(E(92));if(Kt(t)){if(1<t.length)throw Error(E(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:An(t)}}function Uc(e,n){var t=An(n.value),r=An(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ps(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Vc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function al(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Vc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hr,qc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Hr=Hr||document.createElement("div"),Hr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ur(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Zt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nh=["Webkit","ms","Moz","O"];Object.keys(Zt).forEach(function(e){nh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Zt[n]=Zt[e]})});function Qc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Zt.hasOwnProperty(e)&&Zt[e]?(""+n).trim():n+"px"}function Kc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=Qc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var th=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ll(e,n){if(n){if(th[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(E(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(E(61))}if(n.style!=null&&typeof n.style!="object")throw Error(E(62))}}function ol(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sl=null;function io(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cl=null,ft=null,mt=null;function hs(e){if(e=Ar(e)){if(typeof cl!="function")throw Error(E(280));var n=e.stateNode;n&&(n=ta(n),cl(e.stateNode,e.type,n))}}function Gc(e){ft?mt?mt.push(e):mt=[e]:ft=e}function Yc(){if(ft){var e=ft,n=mt;if(mt=ft=null,hs(e),n)for(e=0;e<n.length;e++)hs(n[e])}}function Xc(e,n){return e(n)}function Zc(){}var _a=!1;function Jc(e,n,t){if(_a)return e(n,t);_a=!0;try{return Xc(e,n,t)}finally{_a=!1,(ft!==null||mt!==null)&&(Zc(),Yc())}}function pr(e,n){var t=e.stateNode;if(t===null)return null;var r=ta(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(E(231,n,typeof t));return t}var dl=!1;if(hn)try{var Rt={};Object.defineProperty(Rt,"passive",{get:function(){dl=!0}}),window.addEventListener("test",Rt,Rt),window.removeEventListener("test",Rt,Rt)}catch{dl=!1}function rh(e,n,t,r,a,l,o,s,c){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(f){this.onError(f)}}var Jt=!1,_i=null,wi=!1,ul=null,ih={onError:function(e){Jt=!0,_i=e}};function ah(e,n,t,r,a,l,o,s,c){Jt=!1,_i=null,rh.apply(ih,arguments)}function lh(e,n,t,r,a,l,o,s,c){if(ah.apply(this,arguments),Jt){if(Jt){var d=_i;Jt=!1,_i=null}else throw Error(E(198));wi||(wi=!0,ul=d)}}function Zn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ed(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function fs(e){if(Zn(e)!==e)throw Error(E(188))}function oh(e){var n=e.alternate;if(!n){if(n=Zn(e),n===null)throw Error(E(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===t)return fs(a),e;if(l===r)return fs(a),n;l=l.sibling}throw Error(E(188))}if(t.return!==r.return)t=a,r=l;else{for(var o=!1,s=a.child;s;){if(s===t){o=!0,t=a,r=l;break}if(s===r){o=!0,r=a,t=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===t){o=!0,t=l,r=a;break}if(s===r){o=!0,r=l,t=a;break}s=s.sibling}if(!o)throw Error(E(189))}}if(t.alternate!==r)throw Error(E(190))}if(t.tag!==3)throw Error(E(188));return t.stateNode.current===t?e:n}function nd(e){return e=oh(e),e!==null?td(e):null}function td(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=td(e);if(n!==null)return n;e=e.sibling}return null}var rd=Re.unstable_scheduleCallback,ms=Re.unstable_cancelCallback,sh=Re.unstable_shouldYield,ch=Re.unstable_requestPaint,te=Re.unstable_now,dh=Re.unstable_getCurrentPriorityLevel,ao=Re.unstable_ImmediatePriority,id=Re.unstable_UserBlockingPriority,bi=Re.unstable_NormalPriority,uh=Re.unstable_LowPriority,ad=Re.unstable_IdlePriority,Zi=null,an=null;function ph(e){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Zi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:mh,hh=Math.log,fh=Math.LN2;function mh(e){return e>>>=0,e===0?32:31-(hh(e)/fh|0)|0}var Wr=64,Ur=4194304;function Gt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ji(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~a;s!==0?r=Gt(s):(l&=o,l!==0&&(r=Gt(l)))}else o=t&~a,o!==0?r=Gt(o):l!==0&&(r=Gt(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&a)&&(a=r&-r,l=n&-n,a>=l||a===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ze(n),a=1<<t,r|=e[t],n&=~a;return r}function gh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xh(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Ze(l),s=1<<o,c=a[o];c===-1?(!(s&t)||s&r)&&(a[o]=gh(s,n)):c<=n&&(e.expiredLanes|=s),l&=~s}}function pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ld(){var e=Wr;return Wr<<=1,!(Wr&4194240)&&(Wr=64),e}function wa(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Lr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ze(n),e[n]=t}function yh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Ze(t),l=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~l}}function lo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ze(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var q=0;function od(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sd,oo,cd,dd,ud,hl=!1,Vr=[],Sn=null,Cn=null,zn=null,hr=new Map,fr=new Map,wn=[],vh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gs(e,n){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":hr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fr.delete(n.pointerId)}}function Ft(e,n,t,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},n!==null&&(n=Ar(n),n!==null&&oo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function kh(e,n,t,r,a){switch(n){case"focusin":return Sn=Ft(Sn,e,n,t,r,a),!0;case"dragenter":return Cn=Ft(Cn,e,n,t,r,a),!0;case"mouseover":return zn=Ft(zn,e,n,t,r,a),!0;case"pointerover":var l=a.pointerId;return hr.set(l,Ft(hr.get(l)||null,e,n,t,r,a)),!0;case"gotpointercapture":return l=a.pointerId,fr.set(l,Ft(fr.get(l)||null,e,n,t,r,a)),!0}return!1}function pd(e){var n=Bn(e.target);if(n!==null){var t=Zn(n);if(t!==null){if(n=t.tag,n===13){if(n=ed(t),n!==null){e.blockedOn=n,ud(e.priority,function(){cd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ci(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=fl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);sl=r,t.target.dispatchEvent(r),sl=null}else return n=Ar(t),n!==null&&oo(n),e.blockedOn=t,!1;n.shift()}return!0}function xs(e,n,t){ci(e)&&t.delete(n)}function _h(){hl=!1,Sn!==null&&ci(Sn)&&(Sn=null),Cn!==null&&ci(Cn)&&(Cn=null),zn!==null&&ci(zn)&&(zn=null),hr.forEach(xs),fr.forEach(xs)}function Dt(e,n){e.blockedOn===n&&(e.blockedOn=null,hl||(hl=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,_h)))}function mr(e){function n(a){return Dt(a,e)}if(0<Vr.length){Dt(Vr[0],e);for(var t=1;t<Vr.length;t++){var r=Vr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Sn!==null&&Dt(Sn,e),Cn!==null&&Dt(Cn,e),zn!==null&&Dt(zn,e),hr.forEach(n),fr.forEach(n),t=0;t<wn.length;t++)r=wn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<wn.length&&(t=wn[0],t.blockedOn===null);)pd(t),t.blockedOn===null&&wn.shift()}var gt=xn.ReactCurrentBatchConfig,Ni=!0;function wh(e,n,t,r){var a=q,l=gt.transition;gt.transition=null;try{q=1,so(e,n,t,r)}finally{q=a,gt.transition=l}}function bh(e,n,t,r){var a=q,l=gt.transition;gt.transition=null;try{q=4,so(e,n,t,r)}finally{q=a,gt.transition=l}}function so(e,n,t,r){if(Ni){var a=fl(e,n,t,r);if(a===null)La(e,n,r,Si,t),gs(e,r);else if(kh(a,e,n,t,r))r.stopPropagation();else if(gs(e,r),n&4&&-1<vh.indexOf(e)){for(;a!==null;){var l=Ar(a);if(l!==null&&sd(l),l=fl(e,n,t,r),l===null&&La(e,n,r,Si,t),l===a)break;a=l}a!==null&&r.stopPropagation()}else La(e,n,r,null,t)}}var Si=null;function fl(e,n,t,r){if(Si=null,e=io(r),e=Bn(e),e!==null)if(n=Zn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ed(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Si=e,null}function hd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dh()){case ao:return 1;case id:return 4;case bi:case uh:return 16;case ad:return 536870912;default:return 16}default:return 16}}var jn=null,co=null,di=null;function fd(){if(di)return di;var e,n=co,t=n.length,r,a="value"in jn?jn.value:jn.textContent,l=a.length;for(e=0;e<t&&n[e]===a[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===a[l-r];r++);return di=a.slice(e,1<r?1-r:void 0)}function ui(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qr(){return!0}function ys(){return!1}function De(e){function n(t,r,a,l,o){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?qr:ys,this.isPropagationStopped=ys,this}return J(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),n}var At={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uo=De(At),Pr=J({},At,{view:0,detail:0}),jh=De(Pr),ba,ja,Ot,Ji=J({},Pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:po,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ot&&(Ot&&e.type==="mousemove"?(ba=e.screenX-Ot.screenX,ja=e.screenY-Ot.screenY):ja=ba=0,Ot=e),ba)},movementY:function(e){return"movementY"in e?e.movementY:ja}}),vs=De(Ji),Nh=J({},Ji,{dataTransfer:0}),Sh=De(Nh),Ch=J({},Pr,{relatedTarget:0}),Na=De(Ch),zh=J({},At,{animationName:0,elapsedTime:0,pseudoElement:0}),Eh=De(zh),Mh=J({},At,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$h=De(Mh),Lh=J({},At,{data:0}),ks=De(Lh),Ph={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ah={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Th={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ih(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Th[e])?!!n[e]:!1}function po(){return Ih}var Rh=J({},Pr,{key:function(e){if(e.key){var n=Ph[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ah[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:po,charCode:function(e){return e.type==="keypress"?ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fh=De(Rh),Dh=J({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_s=De(Dh),Oh=J({},Pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:po}),Bh=De(Oh),Hh=J({},At,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wh=De(Hh),Uh=J({},Ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vh=De(Uh),qh=[9,13,27,32],ho=hn&&"CompositionEvent"in window,er=null;hn&&"documentMode"in document&&(er=document.documentMode);var Qh=hn&&"TextEvent"in window&&!er,md=hn&&(!ho||er&&8<er&&11>=er),ws=" ",bs=!1;function gd(e,n){switch(e){case"keyup":return qh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rt=!1;function Kh(e,n){switch(e){case"compositionend":return xd(n);case"keypress":return n.which!==32?null:(bs=!0,ws);case"textInput":return e=n.data,e===ws&&bs?null:e;default:return null}}function Gh(e,n){if(rt)return e==="compositionend"||!ho&&gd(e,n)?(e=fd(),di=co=jn=null,rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return md&&n.locale!=="ko"?null:n.data;default:return null}}var Yh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function js(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Yh[e.type]:n==="textarea"}function yd(e,n,t,r){Gc(r),n=Ci(n,"onChange"),0<n.length&&(t=new uo("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var nr=null,gr=null;function Xh(e){Ed(e,0)}function ea(e){var n=lt(e);if(Hc(n))return e}function Zh(e,n){if(e==="change")return n}var vd=!1;if(hn){var Sa;if(hn){var Ca="oninput"in document;if(!Ca){var Ns=document.createElement("div");Ns.setAttribute("oninput","return;"),Ca=typeof Ns.oninput=="function"}Sa=Ca}else Sa=!1;vd=Sa&&(!document.documentMode||9<document.documentMode)}function Ss(){nr&&(nr.detachEvent("onpropertychange",kd),gr=nr=null)}function kd(e){if(e.propertyName==="value"&&ea(gr)){var n=[];yd(n,gr,e,io(e)),Jc(Xh,n)}}function Jh(e,n,t){e==="focusin"?(Ss(),nr=n,gr=t,nr.attachEvent("onpropertychange",kd)):e==="focusout"&&Ss()}function ef(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ea(gr)}function nf(e,n){if(e==="click")return ea(n)}function tf(e,n){if(e==="input"||e==="change")return ea(n)}function rf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var en=typeof Object.is=="function"?Object.is:rf;function xr(e,n){if(en(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!Ya.call(n,a)||!en(e[a],n[a]))return!1}return!0}function Cs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zs(e,n){var t=Cs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Cs(t)}}function _d(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?_d(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function wd(){for(var e=window,n=ki();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ki(e.document)}return n}function fo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function af(e){var n=wd(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&_d(t.ownerDocument.documentElement,t)){if(r!==null&&fo(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=zs(t,l);var o=zs(t,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lf=hn&&"documentMode"in document&&11>=document.documentMode,it=null,ml=null,tr=null,gl=!1;function Es(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;gl||it==null||it!==ki(r)||(r=it,"selectionStart"in r&&fo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),tr&&xr(tr,r)||(tr=r,r=Ci(ml,"onSelect"),0<r.length&&(n=new uo("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=it)))}function Qr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var at={animationend:Qr("Animation","AnimationEnd"),animationiteration:Qr("Animation","AnimationIteration"),animationstart:Qr("Animation","AnimationStart"),transitionend:Qr("Transition","TransitionEnd")},za={},bd={};hn&&(bd=document.createElement("div").style,"AnimationEvent"in window||(delete at.animationend.animation,delete at.animationiteration.animation,delete at.animationstart.animation),"TransitionEvent"in window||delete at.transitionend.transition);function na(e){if(za[e])return za[e];if(!at[e])return e;var n=at[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in bd)return za[e]=n[t];return e}var jd=na("animationend"),Nd=na("animationiteration"),Sd=na("animationstart"),Cd=na("transitionend"),zd=new Map,Ms="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(e,n){zd.set(e,n),Xn(n,[e])}for(var Ea=0;Ea<Ms.length;Ea++){var Ma=Ms[Ea],of=Ma.toLowerCase(),sf=Ma[0].toUpperCase()+Ma.slice(1);In(of,"on"+sf)}In(jd,"onAnimationEnd");In(Nd,"onAnimationIteration");In(Sd,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(Cd,"onTransitionEnd");bt("onMouseEnter",["mouseout","mouseover"]);bt("onMouseLeave",["mouseout","mouseover"]);bt("onPointerEnter",["pointerout","pointerover"]);bt("onPointerLeave",["pointerout","pointerover"]);Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yt));function $s(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,lh(r,n,void 0,e),e.currentTarget=null}function Ed(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,d=s.currentTarget;if(s=s.listener,c!==l&&a.isPropagationStopped())break e;$s(a,s,d),l=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,d=s.currentTarget,s=s.listener,c!==l&&a.isPropagationStopped())break e;$s(a,s,d),l=c}}}if(wi)throw e=ul,wi=!1,ul=null,e}function K(e,n){var t=n[_l];t===void 0&&(t=n[_l]=new Set);var r=e+"__bubble";t.has(r)||(Md(n,e,2,!1),t.add(r))}function $a(e,n,t){var r=0;n&&(r|=4),Md(t,e,r,n)}var Kr="_reactListening"+Math.random().toString(36).slice(2);function yr(e){if(!e[Kr]){e[Kr]=!0,Rc.forEach(function(t){t!=="selectionchange"&&(cf.has(t)||$a(t,!1,e),$a(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Kr]||(n[Kr]=!0,$a("selectionchange",!1,n))}}function Md(e,n,t,r){switch(hd(n)){case 1:var a=wh;break;case 4:a=bh;break;default:a=so}t=a.bind(null,n,t,e),a=void 0,!dl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function La(e,n,t,r,a){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;o=o.return}for(;s!==null;){if(o=Bn(s),o===null)return;if(c=o.tag,c===5||c===6){r=l=o;continue e}s=s.parentNode}}r=r.return}Jc(function(){var d=l,f=io(t),h=[];e:{var m=zd.get(e);if(m!==void 0){var k=uo,v=e;switch(e){case"keypress":if(ui(t)===0)break e;case"keydown":case"keyup":k=Fh;break;case"focusin":v="focus",k=Na;break;case"focusout":v="blur",k=Na;break;case"beforeblur":case"afterblur":k=Na;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Sh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Bh;break;case jd:case Nd:case Sd:k=Eh;break;case Cd:k=Wh;break;case"scroll":k=jh;break;case"wheel":k=Vh;break;case"copy":case"cut":case"paste":k=$h;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=_s}var w=(n&4)!==0,j=!w&&e==="scroll",p=w?m!==null?m+"Capture":null:m;w=[];for(var u=d,y;u!==null;){y=u;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,p!==null&&(_=pr(u,p),_!=null&&w.push(vr(u,_,y)))),j)break;u=u.return}0<w.length&&(m=new k(m,v,null,t,f),h.push({event:m,listeners:w}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",m&&t!==sl&&(v=t.relatedTarget||t.fromElement)&&(Bn(v)||v[fn]))break e;if((k||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,k?(v=t.relatedTarget||t.toElement,k=d,v=v?Bn(v):null,v!==null&&(j=Zn(v),v!==j||v.tag!==5&&v.tag!==6)&&(v=null)):(k=null,v=d),k!==v)){if(w=vs,_="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=_s,_="onPointerLeave",p="onPointerEnter",u="pointer"),j=k==null?m:lt(k),y=v==null?m:lt(v),m=new w(_,u+"leave",k,t,f),m.target=j,m.relatedTarget=y,_=null,Bn(f)===d&&(w=new w(p,u+"enter",v,t,f),w.target=y,w.relatedTarget=j,_=w),j=_,k&&v)n:{for(w=k,p=v,u=0,y=w;y;y=et(y))u++;for(y=0,_=p;_;_=et(_))y++;for(;0<u-y;)w=et(w),u--;for(;0<y-u;)p=et(p),y--;for(;u--;){if(w===p||p!==null&&w===p.alternate)break n;w=et(w),p=et(p)}w=null}else w=null;k!==null&&Ls(h,m,k,w,!1),v!==null&&j!==null&&Ls(h,j,v,w,!0)}}e:{if(m=d?lt(d):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var N=Zh;else if(js(m))if(vd)N=tf;else{N=ef;var g=Jh}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=nf);if(N&&(N=N(e,d))){yd(h,N,t,f);break e}g&&g(e,m,d),e==="focusout"&&(g=m._wrapperState)&&g.controlled&&m.type==="number"&&rl(m,"number",m.value)}switch(g=d?lt(d):window,e){case"focusin":(js(g)||g.contentEditable==="true")&&(it=g,ml=d,tr=null);break;case"focusout":tr=ml=it=null;break;case"mousedown":gl=!0;break;case"contextmenu":case"mouseup":case"dragend":gl=!1,Es(h,t,f);break;case"selectionchange":if(lf)break;case"keydown":case"keyup":Es(h,t,f)}var S;if(ho)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else rt?gd(e,t)&&($="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&($="onCompositionStart");$&&(md&&t.locale!=="ko"&&(rt||$!=="onCompositionStart"?$==="onCompositionEnd"&&rt&&(S=fd()):(jn=f,co="value"in jn?jn.value:jn.textContent,rt=!0)),g=Ci(d,$),0<g.length&&($=new ks($,e,null,t,f),h.push({event:$,listeners:g}),S?$.data=S:(S=xd(t),S!==null&&($.data=S)))),(S=Qh?Kh(e,t):Gh(e,t))&&(d=Ci(d,"onBeforeInput"),0<d.length&&(f=new ks("onBeforeInput","beforeinput",null,t,f),h.push({event:f,listeners:d}),f.data=S))}Ed(h,n)})}function vr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ci(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=pr(e,t),l!=null&&r.unshift(vr(e,l,a)),l=pr(e,n),l!=null&&r.push(vr(e,l,a))),e=e.return}return r}function et(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ls(e,n,t,r,a){for(var l=n._reactName,o=[];t!==null&&t!==r;){var s=t,c=s.alternate,d=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&d!==null&&(s=d,a?(c=pr(t,l),c!=null&&o.unshift(vr(t,c,s))):a||(c=pr(t,l),c!=null&&o.push(vr(t,c,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var df=/\r\n?/g,uf=/\u0000|\uFFFD/g;function Ps(e){return(typeof e=="string"?e:""+e).replace(df,`
`).replace(uf,"")}function Gr(e,n,t){if(n=Ps(n),Ps(e)!==n&&t)throw Error(E(425))}function zi(){}var xl=null,yl=null;function vl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kl=typeof setTimeout=="function"?setTimeout:void 0,pf=typeof clearTimeout=="function"?clearTimeout:void 0,As=typeof Promise=="function"?Promise:void 0,hf=typeof queueMicrotask=="function"?queueMicrotask:typeof As<"u"?function(e){return As.resolve(null).then(e).catch(ff)}:kl;function ff(e){setTimeout(function(){throw e})}function Pa(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),mr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);mr(n)}function En(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ts(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Tt=Math.random().toString(36).slice(2),rn="__reactFiber$"+Tt,kr="__reactProps$"+Tt,fn="__reactContainer$"+Tt,_l="__reactEvents$"+Tt,mf="__reactListeners$"+Tt,gf="__reactHandles$"+Tt;function Bn(e){var n=e[rn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[fn]||t[rn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ts(e);e!==null;){if(t=e[rn])return t;e=Ts(e)}return n}e=t,t=e.parentNode}return null}function Ar(e){return e=e[rn]||e[fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function ta(e){return e[kr]||null}var wl=[],ot=-1;function Rn(e){return{current:e}}function G(e){0>ot||(e.current=wl[ot],wl[ot]=null,ot--)}function Q(e,n){ot++,wl[ot]=e.current,e.current=n}var Tn={},_e=Rn(Tn),Me=Rn(!1),qn=Tn;function jt(e,n){var t=e.type.contextTypes;if(!t)return Tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in t)a[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function $e(e){return e=e.childContextTypes,e!=null}function Ei(){G(Me),G(_e)}function Is(e,n,t){if(_e.current!==Tn)throw Error(E(168));Q(_e,n),Q(Me,t)}function $d(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(E(108,Jp(e)||"Unknown",a));return J({},t,r)}function Mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tn,qn=_e.current,Q(_e,e),Q(Me,Me.current),!0}function Rs(e,n,t){var r=e.stateNode;if(!r)throw Error(E(169));t?(e=$d(e,n,qn),r.__reactInternalMemoizedMergedChildContext=e,G(Me),G(_e),Q(_e,e)):G(Me),Q(Me,t)}var cn=null,ra=!1,Aa=!1;function Ld(e){cn===null?cn=[e]:cn.push(e)}function xf(e){ra=!0,Ld(e)}function Fn(){if(!Aa&&cn!==null){Aa=!0;var e=0,n=q;try{var t=cn;for(q=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}cn=null,ra=!1}catch(a){throw cn!==null&&(cn=cn.slice(e+1)),rd(ao,Fn),a}finally{q=n,Aa=!1}}return null}var st=[],ct=0,$i=null,Li=0,Be=[],He=0,Qn=null,dn=1,un="";function Dn(e,n){st[ct++]=Li,st[ct++]=$i,$i=e,Li=n}function Pd(e,n,t){Be[He++]=dn,Be[He++]=un,Be[He++]=Qn,Qn=e;var r=dn;e=un;var a=32-Ze(r)-1;r&=~(1<<a),t+=1;var l=32-Ze(n)+a;if(30<l){var o=a-a%5;l=(r&(1<<o)-1).toString(32),r>>=o,a-=o,dn=1<<32-Ze(n)+a|t<<a|r,un=l+e}else dn=1<<l|t<<a|r,un=e}function mo(e){e.return!==null&&(Dn(e,1),Pd(e,1,0))}function go(e){for(;e===$i;)$i=st[--ct],st[ct]=null,Li=st[--ct],st[ct]=null;for(;e===Qn;)Qn=Be[--He],Be[He]=null,un=Be[--He],Be[He]=null,dn=Be[--He],Be[He]=null}var Te=null,Ae=null,Y=!1,Xe=null;function Ad(e,n){var t=We(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Fs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Te=e,Ae=En(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Te=e,Ae=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Qn!==null?{id:dn,overflow:un}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=We(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Te=e,Ae=null,!0):!1;default:return!1}}function bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jl(e){if(Y){var n=Ae;if(n){var t=n;if(!Fs(e,n)){if(bl(e))throw Error(E(418));n=En(t.nextSibling);var r=Te;n&&Fs(e,n)?Ad(r,t):(e.flags=e.flags&-4097|2,Y=!1,Te=e)}}else{if(bl(e))throw Error(E(418));e.flags=e.flags&-4097|2,Y=!1,Te=e}}}function Ds(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function Yr(e){if(e!==Te)return!1;if(!Y)return Ds(e),Y=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!vl(e.type,e.memoizedProps)),n&&(n=Ae)){if(bl(e))throw Td(),Error(E(418));for(;n;)Ad(e,n),n=En(n.nextSibling)}if(Ds(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ae=En(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ae=null}}else Ae=Te?En(e.stateNode.nextSibling):null;return!0}function Td(){for(var e=Ae;e;)e=En(e.nextSibling)}function Nt(){Ae=Te=null,Y=!1}function xo(e){Xe===null?Xe=[e]:Xe.push(e)}var yf=xn.ReactCurrentBatchConfig;function Bt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(E(309));var r=t.stateNode}if(!r)throw Error(E(147,e));var a=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var s=a.refs;o===null?delete s[l]:s[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(E(284));if(!t._owner)throw Error(E(290,e))}return e}function Xr(e,n){throw e=Object.prototype.toString.call(n),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Os(e){var n=e._init;return n(e._payload)}function Id(e){function n(p,u){if(e){var y=p.deletions;y===null?(p.deletions=[u],p.flags|=16):y.push(u)}}function t(p,u){if(!e)return null;for(;u!==null;)n(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function a(p,u){return p=Pn(p,u),p.index=0,p.sibling=null,p}function l(p,u,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<u?(p.flags|=2,u):y):(p.flags|=2,u)):(p.flags|=1048576,u)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,u,y,_){return u===null||u.tag!==6?(u=Ba(y,p.mode,_),u.return=p,u):(u=a(u,y),u.return=p,u)}function c(p,u,y,_){var N=y.type;return N===tt?f(p,u,y.props.children,_,y.key):u!==null&&(u.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===kn&&Os(N)===u.type)?(_=a(u,y.props),_.ref=Bt(p,u,y),_.return=p,_):(_=yi(y.type,y.key,y.props,null,p.mode,_),_.ref=Bt(p,u,y),_.return=p,_)}function d(p,u,y,_){return u===null||u.tag!==4||u.stateNode.containerInfo!==y.containerInfo||u.stateNode.implementation!==y.implementation?(u=Ha(y,p.mode,_),u.return=p,u):(u=a(u,y.children||[]),u.return=p,u)}function f(p,u,y,_,N){return u===null||u.tag!==7?(u=Vn(y,p.mode,_,N),u.return=p,u):(u=a(u,y),u.return=p,u)}function h(p,u,y){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ba(""+u,p.mode,y),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Or:return y=yi(u.type,u.key,u.props,null,p.mode,y),y.ref=Bt(p,null,u),y.return=p,y;case nt:return u=Ha(u,p.mode,y),u.return=p,u;case kn:var _=u._init;return h(p,_(u._payload),y)}if(Kt(u)||It(u))return u=Vn(u,p.mode,y,null),u.return=p,u;Xr(p,u)}return null}function m(p,u,y,_){var N=u!==null?u.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return N!==null?null:s(p,u,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Or:return y.key===N?c(p,u,y,_):null;case nt:return y.key===N?d(p,u,y,_):null;case kn:return N=y._init,m(p,u,N(y._payload),_)}if(Kt(y)||It(y))return N!==null?null:f(p,u,y,_,null);Xr(p,y)}return null}function k(p,u,y,_,N){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(y)||null,s(u,p,""+_,N);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Or:return p=p.get(_.key===null?y:_.key)||null,c(u,p,_,N);case nt:return p=p.get(_.key===null?y:_.key)||null,d(u,p,_,N);case kn:var g=_._init;return k(p,u,y,g(_._payload),N)}if(Kt(_)||It(_))return p=p.get(y)||null,f(u,p,_,N,null);Xr(u,_)}return null}function v(p,u,y,_){for(var N=null,g=null,S=u,$=u=0,C=null;S!==null&&$<y.length;$++){S.index>$?(C=S,S=null):C=S.sibling;var z=m(p,S,y[$],_);if(z===null){S===null&&(S=C);break}e&&S&&z.alternate===null&&n(p,S),u=l(z,u,$),g===null?N=z:g.sibling=z,g=z,S=C}if($===y.length)return t(p,S),Y&&Dn(p,$),N;if(S===null){for(;$<y.length;$++)S=h(p,y[$],_),S!==null&&(u=l(S,u,$),g===null?N=S:g.sibling=S,g=S);return Y&&Dn(p,$),N}for(S=r(p,S);$<y.length;$++)C=k(S,p,$,y[$],_),C!==null&&(e&&C.alternate!==null&&S.delete(C.key===null?$:C.key),u=l(C,u,$),g===null?N=C:g.sibling=C,g=C);return e&&S.forEach(function(L){return n(p,L)}),Y&&Dn(p,$),N}function w(p,u,y,_){var N=It(y);if(typeof N!="function")throw Error(E(150));if(y=N.call(y),y==null)throw Error(E(151));for(var g=N=null,S=u,$=u=0,C=null,z=y.next();S!==null&&!z.done;$++,z=y.next()){S.index>$?(C=S,S=null):C=S.sibling;var L=m(p,S,z.value,_);if(L===null){S===null&&(S=C);break}e&&S&&L.alternate===null&&n(p,S),u=l(L,u,$),g===null?N=L:g.sibling=L,g=L,S=C}if(z.done)return t(p,S),Y&&Dn(p,$),N;if(S===null){for(;!z.done;$++,z=y.next())z=h(p,z.value,_),z!==null&&(u=l(z,u,$),g===null?N=z:g.sibling=z,g=z);return Y&&Dn(p,$),N}for(S=r(p,S);!z.done;$++,z=y.next())z=k(S,p,$,z.value,_),z!==null&&(e&&z.alternate!==null&&S.delete(z.key===null?$:z.key),u=l(z,u,$),g===null?N=z:g.sibling=z,g=z);return e&&S.forEach(function(B){return n(p,B)}),Y&&Dn(p,$),N}function j(p,u,y,_){if(typeof y=="object"&&y!==null&&y.type===tt&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Or:e:{for(var N=y.key,g=u;g!==null;){if(g.key===N){if(N=y.type,N===tt){if(g.tag===7){t(p,g.sibling),u=a(g,y.props.children),u.return=p,p=u;break e}}else if(g.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===kn&&Os(N)===g.type){t(p,g.sibling),u=a(g,y.props),u.ref=Bt(p,g,y),u.return=p,p=u;break e}t(p,g);break}else n(p,g);g=g.sibling}y.type===tt?(u=Vn(y.props.children,p.mode,_,y.key),u.return=p,p=u):(_=yi(y.type,y.key,y.props,null,p.mode,_),_.ref=Bt(p,u,y),_.return=p,p=_)}return o(p);case nt:e:{for(g=y.key;u!==null;){if(u.key===g)if(u.tag===4&&u.stateNode.containerInfo===y.containerInfo&&u.stateNode.implementation===y.implementation){t(p,u.sibling),u=a(u,y.children||[]),u.return=p,p=u;break e}else{t(p,u);break}else n(p,u);u=u.sibling}u=Ha(y,p.mode,_),u.return=p,p=u}return o(p);case kn:return g=y._init,j(p,u,g(y._payload),_)}if(Kt(y))return v(p,u,y,_);if(It(y))return w(p,u,y,_);Xr(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,u!==null&&u.tag===6?(t(p,u.sibling),u=a(u,y),u.return=p,p=u):(t(p,u),u=Ba(y,p.mode,_),u.return=p,p=u),o(p)):t(p,u)}return j}var St=Id(!0),Rd=Id(!1),Pi=Rn(null),Ai=null,dt=null,yo=null;function vo(){yo=dt=Ai=null}function ko(e){var n=Pi.current;G(Pi),e._currentValue=n}function Nl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function xt(e,n){Ai=e,yo=dt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ee=!0),e.firstContext=null)}function Ve(e){var n=e._currentValue;if(yo!==e)if(e={context:e,memoizedValue:n,next:null},dt===null){if(Ai===null)throw Error(E(308));dt=e,Ai.dependencies={lanes:0,firstContext:e}}else dt=dt.next=e;return n}var Hn=null;function _o(e){Hn===null?Hn=[e]:Hn.push(e)}function Fd(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,_o(n)):(t.next=a.next,a.next=t),n.interleaved=t,mn(e,r)}function mn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var _n=!1;function wo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Mn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,mn(e,t)}return a=r.interleaved,a===null?(n.next=n,_o(r)):(n.next=a.next,a.next=n),r.interleaved=n,mn(e,t)}function pi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,lo(e,t)}}function Bs(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?a=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?a=l=n:l=l.next=n}else a=l=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ti(e,n,t,r){var a=e.updateQueue;_n=!1;var l=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var c=s,d=c.next;c.next=null,o===null?l=d:o.next=d,o=c;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==o&&(s===null?f.firstBaseUpdate=d:s.next=d,f.lastBaseUpdate=c))}if(l!==null){var h=a.baseState;o=0,f=d=c=null,s=l;do{var m=s.lane,k=s.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(m=n,k=t,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(k,h,m);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,m=typeof v=="function"?v.call(k,h,m):v,m==null)break e;h=J({},h,m);break e;case 2:_n=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[s]:m.push(s))}else k={eventTime:k,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(d=f=k,c=h):f=f.next=k,o|=m;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;m=s,s=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(f===null&&(c=h),a.baseState=c,a.firstBaseUpdate=d,a.lastBaseUpdate=f,n=a.shared.interleaved,n!==null){a=n;do o|=a.lane,a=a.next;while(a!==n)}else l===null&&(a.shared.lanes=0);Gn|=o,e.lanes=o,e.memoizedState=h}}function Hs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(E(191,a));a.call(r)}}}var Tr={},ln=Rn(Tr),_r=Rn(Tr),wr=Rn(Tr);function Wn(e){if(e===Tr)throw Error(E(174));return e}function bo(e,n){switch(Q(wr,n),Q(_r,e),Q(ln,Tr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:al(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=al(n,e)}G(ln),Q(ln,n)}function Ct(){G(ln),G(_r),G(wr)}function Od(e){Wn(wr.current);var n=Wn(ln.current),t=al(n,e.type);n!==t&&(Q(_r,e),Q(ln,t))}function jo(e){_r.current===e&&(G(ln),G(_r))}var X=Rn(0);function Ii(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ta=[];function No(){for(var e=0;e<Ta.length;e++)Ta[e]._workInProgressVersionPrimary=null;Ta.length=0}var hi=xn.ReactCurrentDispatcher,Ia=xn.ReactCurrentBatchConfig,Kn=0,Z=null,le=null,de=null,Ri=!1,rr=!1,br=0,vf=0;function xe(){throw Error(E(321))}function So(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!en(e[t],n[t]))return!1;return!0}function Co(e,n,t,r,a,l){if(Kn=l,Z=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,hi.current=e===null||e.memoizedState===null?bf:jf,e=t(r,a),rr){l=0;do{if(rr=!1,br=0,25<=l)throw Error(E(301));l+=1,de=le=null,n.updateQueue=null,hi.current=Nf,e=t(r,a)}while(rr)}if(hi.current=Fi,n=le!==null&&le.next!==null,Kn=0,de=le=Z=null,Ri=!1,n)throw Error(E(300));return e}function zo(){var e=br!==0;return br=0,e}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?Z.memoizedState=de=e:de=de.next=e,de}function qe(){if(le===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var n=de===null?Z.memoizedState:de.next;if(n!==null)de=n,le=e;else{if(e===null)throw Error(E(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},de===null?Z.memoizedState=de=e:de=de.next=e}return de}function jr(e,n){return typeof n=="function"?n(e):n}function Ra(e){var n=qe(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=le,a=r.baseQueue,l=t.pending;if(l!==null){if(a!==null){var o=a.next;a.next=l.next,l.next=o}r.baseQueue=a=l,t.pending=null}if(a!==null){l=a.next,r=r.baseState;var s=o=null,c=null,d=l;do{var f=d.lane;if((Kn&f)===f)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(s=c=h,o=r):c=c.next=h,Z.lanes|=f,Gn|=f}d=d.next}while(d!==null&&d!==l);c===null?o=r:c.next=s,en(r,n.memoizedState)||(Ee=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=c,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do l=a.lane,Z.lanes|=l,Gn|=l,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Fa(e){var n=qe(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,l=n.memoizedState;if(a!==null){t.pending=null;var o=a=a.next;do l=e(l,o.action),o=o.next;while(o!==a);en(l,n.memoizedState)||(Ee=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Bd(){}function Hd(e,n){var t=Z,r=qe(),a=n(),l=!en(r.memoizedState,a);if(l&&(r.memoizedState=a,Ee=!0),r=r.queue,Eo(Vd.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||de!==null&&de.memoizedState.tag&1){if(t.flags|=2048,Nr(9,Ud.bind(null,t,r,a,n),void 0,null),ue===null)throw Error(E(349));Kn&30||Wd(t,n,a)}return a}function Wd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Z.updateQueue,n===null?(n={lastEffect:null,stores:null},Z.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ud(e,n,t,r){n.value=t,n.getSnapshot=r,qd(n)&&Qd(e)}function Vd(e,n,t){return t(function(){qd(n)&&Qd(e)})}function qd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!en(e,t)}catch{return!0}}function Qd(e){var n=mn(e,1);n!==null&&Je(n,e,1,-1)}function Ws(e){var n=tn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:e},n.queue=e,e=e.dispatch=wf.bind(null,Z,e),[n.memoizedState,e]}function Nr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Z.updateQueue,n===null?(n={lastEffect:null,stores:null},Z.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Kd(){return qe().memoizedState}function fi(e,n,t,r){var a=tn();Z.flags|=e,a.memoizedState=Nr(1|n,t,void 0,r===void 0?null:r)}function ia(e,n,t,r){var a=qe();r=r===void 0?null:r;var l=void 0;if(le!==null){var o=le.memoizedState;if(l=o.destroy,r!==null&&So(r,o.deps)){a.memoizedState=Nr(n,t,l,r);return}}Z.flags|=e,a.memoizedState=Nr(1|n,t,l,r)}function Us(e,n){return fi(8390656,8,e,n)}function Eo(e,n){return ia(2048,8,e,n)}function Gd(e,n){return ia(4,2,e,n)}function Yd(e,n){return ia(4,4,e,n)}function Xd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zd(e,n,t){return t=t!=null?t.concat([e]):null,ia(4,4,Xd.bind(null,n,e),t)}function Mo(){}function Jd(e,n){var t=qe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&So(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function eu(e,n){var t=qe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&So(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function nu(e,n,t){return Kn&21?(en(t,n)||(t=ld(),Z.lanes|=t,Gn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=t)}function kf(e,n){var t=q;q=t!==0&&4>t?t:4,e(!0);var r=Ia.transition;Ia.transition={};try{e(!1),n()}finally{q=t,Ia.transition=r}}function tu(){return qe().memoizedState}function _f(e,n,t){var r=Ln(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ru(e))iu(n,t);else if(t=Fd(e,n,t,r),t!==null){var a=Ne();Je(t,e,r,a),au(t,n,r)}}function wf(e,n,t){var r=Ln(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ru(e))iu(n,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,s=l(o,t);if(a.hasEagerState=!0,a.eagerState=s,en(s,o)){var c=n.interleaved;c===null?(a.next=a,_o(n)):(a.next=c.next,c.next=a),n.interleaved=a;return}}catch{}finally{}t=Fd(e,n,a,r),t!==null&&(a=Ne(),Je(t,e,r,a),au(t,n,r))}}function ru(e){var n=e.alternate;return e===Z||n!==null&&n===Z}function iu(e,n){rr=Ri=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function au(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,lo(e,t)}}var Fi={readContext:Ve,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},bf={readContext:Ve,useCallback:function(e,n){return tn().memoizedState=[e,n===void 0?null:n],e},useContext:Ve,useEffect:Us,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,fi(4194308,4,Xd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return fi(4194308,4,e,n)},useInsertionEffect:function(e,n){return fi(4,2,e,n)},useMemo:function(e,n){var t=tn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=tn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=_f.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var n=tn();return e={current:e},n.memoizedState=e},useState:Ws,useDebugValue:Mo,useDeferredValue:function(e){return tn().memoizedState=e},useTransition:function(){var e=Ws(!1),n=e[0];return e=kf.bind(null,e[1]),tn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Z,a=tn();if(Y){if(t===void 0)throw Error(E(407));t=t()}else{if(t=n(),ue===null)throw Error(E(349));Kn&30||Wd(r,n,t)}a.memoizedState=t;var l={value:t,getSnapshot:n};return a.queue=l,Us(Vd.bind(null,r,l,e),[e]),r.flags|=2048,Nr(9,Ud.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=tn(),n=ue.identifierPrefix;if(Y){var t=un,r=dn;t=(r&~(1<<32-Ze(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=br++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=vf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},jf={readContext:Ve,useCallback:Jd,useContext:Ve,useEffect:Eo,useImperativeHandle:Zd,useInsertionEffect:Gd,useLayoutEffect:Yd,useMemo:eu,useReducer:Ra,useRef:Kd,useState:function(){return Ra(jr)},useDebugValue:Mo,useDeferredValue:function(e){var n=qe();return nu(n,le.memoizedState,e)},useTransition:function(){var e=Ra(jr)[0],n=qe().memoizedState;return[e,n]},useMutableSource:Bd,useSyncExternalStore:Hd,useId:tu,unstable_isNewReconciler:!1},Nf={readContext:Ve,useCallback:Jd,useContext:Ve,useEffect:Eo,useImperativeHandle:Zd,useInsertionEffect:Gd,useLayoutEffect:Yd,useMemo:eu,useReducer:Fa,useRef:Kd,useState:function(){return Fa(jr)},useDebugValue:Mo,useDeferredValue:function(e){var n=qe();return le===null?n.memoizedState=e:nu(n,le.memoizedState,e)},useTransition:function(){var e=Fa(jr)[0],n=qe().memoizedState;return[e,n]},useMutableSource:Bd,useSyncExternalStore:Hd,useId:tu,unstable_isNewReconciler:!1};function Ge(e,n){if(e&&e.defaultProps){n=J({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Sl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:J({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var aa={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ne(),a=Ln(e),l=pn(r,a);l.payload=n,t!=null&&(l.callback=t),n=Mn(e,l,a),n!==null&&(Je(n,e,a,r),pi(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ne(),a=Ln(e),l=pn(r,a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Mn(e,l,a),n!==null&&(Je(n,e,a,r),pi(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ne(),r=Ln(e),a=pn(t,r);a.tag=2,n!=null&&(a.callback=n),n=Mn(e,a,r),n!==null&&(Je(n,e,r,t),pi(n,e,r))}};function Vs(e,n,t,r,a,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!xr(t,r)||!xr(a,l):!0}function lu(e,n,t){var r=!1,a=Tn,l=n.contextType;return typeof l=="object"&&l!==null?l=Ve(l):(a=$e(n)?qn:_e.current,r=n.contextTypes,l=(r=r!=null)?jt(e,a):Tn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=aa,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),n}function qs(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&aa.enqueueReplaceState(n,n.state,null)}function Cl(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},wo(e);var l=n.contextType;typeof l=="object"&&l!==null?a.context=Ve(l):(l=$e(n)?qn:_e.current,a.context=jt(e,l)),a.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Sl(e,n,l,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&aa.enqueueReplaceState(a,a.state,null),Ti(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function zt(e,n){try{var t="",r=n;do t+=Zp(r),r=r.return;while(r);var a=t}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:a,digest:null}}function Da(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function zl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Sf=typeof WeakMap=="function"?WeakMap:Map;function ou(e,n,t){t=pn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Oi||(Oi=!0,Fl=r),zl(e,n)},t}function su(e,n,t){t=pn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){zl(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){zl(e,n),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Qs(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Sf;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=Of.bind(null,e,n,t),n.then(e,e))}function Ks(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Gs(e,n,t,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=pn(-1,1),n.tag=2,Mn(t,n,1))),t.lanes|=1),e)}var Cf=xn.ReactCurrentOwner,Ee=!1;function je(e,n,t,r){n.child=e===null?Rd(n,null,t,r):St(n,e.child,t,r)}function Ys(e,n,t,r,a){t=t.render;var l=n.ref;return xt(n,a),r=Co(e,n,t,r,l,a),t=zo(),e!==null&&!Ee?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,gn(e,n,a)):(Y&&t&&mo(n),n.flags|=1,je(e,n,r,a),n.child)}function Xs(e,n,t,r,a){if(e===null){var l=t.type;return typeof l=="function"&&!Fo(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,cu(e,n,l,r,a)):(e=yi(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&a)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:xr,t(o,r)&&e.ref===n.ref)return gn(e,n,a)}return n.flags|=1,e=Pn(l,r),e.ref=n.ref,e.return=n,n.child=e}function cu(e,n,t,r,a){if(e!==null){var l=e.memoizedProps;if(xr(l,r)&&e.ref===n.ref)if(Ee=!1,n.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(Ee=!0);else return n.lanes=e.lanes,gn(e,n,a)}return El(e,n,t,r,a)}function du(e,n,t){var r=n.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(pt,Pe),Pe|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Q(pt,Pe),Pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,Q(pt,Pe),Pe|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,Q(pt,Pe),Pe|=r;return je(e,n,a,t),n.child}function uu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function El(e,n,t,r,a){var l=$e(t)?qn:_e.current;return l=jt(n,l),xt(n,a),t=Co(e,n,t,r,l,a),r=zo(),e!==null&&!Ee?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,gn(e,n,a)):(Y&&r&&mo(n),n.flags|=1,je(e,n,t,a),n.child)}function Zs(e,n,t,r,a){if($e(t)){var l=!0;Mi(n)}else l=!1;if(xt(n,a),n.stateNode===null)mi(e,n),lu(n,t,r),Cl(n,t,r,a),r=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var c=o.context,d=t.contextType;typeof d=="object"&&d!==null?d=Ve(d):(d=$e(t)?qn:_e.current,d=jt(n,d));var f=t.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||c!==d)&&qs(n,o,r,d),_n=!1;var m=n.memoizedState;o.state=m,Ti(n,r,o,a),c=n.memoizedState,s!==r||m!==c||Me.current||_n?(typeof f=="function"&&(Sl(n,t,f,r),c=n.memoizedState),(s=_n||Vs(n,t,s,r,m,c,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=c),o.props=r,o.state=c,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Dd(e,n),s=n.memoizedProps,d=n.type===n.elementType?s:Ge(n.type,s),o.props=d,h=n.pendingProps,m=o.context,c=t.contextType,typeof c=="object"&&c!==null?c=Ve(c):(c=$e(t)?qn:_e.current,c=jt(n,c));var k=t.getDerivedStateFromProps;(f=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||m!==c)&&qs(n,o,r,c),_n=!1,m=n.memoizedState,o.state=m,Ti(n,r,o,a);var v=n.memoizedState;s!==h||m!==v||Me.current||_n?(typeof k=="function"&&(Sl(n,t,k,r),v=n.memoizedState),(d=_n||Vs(n,t,d,r,m,v,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,c)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),o.props=r,o.state=v,o.context=c,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Ml(e,n,t,r,l,a)}function Ml(e,n,t,r,a,l){uu(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return a&&Rs(n,t,!1),gn(e,n,l);r=n.stateNode,Cf.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=St(n,e.child,null,l),n.child=St(n,null,s,l)):je(e,n,s,l),n.memoizedState=r.state,a&&Rs(n,t,!0),n.child}function pu(e){var n=e.stateNode;n.pendingContext?Is(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Is(e,n.context,!1),bo(e,n.containerInfo)}function Js(e,n,t,r,a){return Nt(),xo(a),n.flags|=256,je(e,n,t,r),n.child}var $l={dehydrated:null,treeContext:null,retryLane:0};function Ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function hu(e,n,t){var r=n.pendingProps,a=X.current,l=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Q(X,a&1),e===null)return jl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=sa(o,r,0,null),e=Vn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Ll(t),n.memoizedState=$l,e):$o(n,o));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return zf(e,n,o,r,s,a,t);if(l){l=r.fallback,o=n.mode,a=e.child,s=a.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=c,n.deletions=null):(r=Pn(a,c),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?l=Pn(s,l):(l=Vn(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?Ll(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=$l,r}return l=e.child,e=l.sibling,r=Pn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function $o(e,n){return n=sa({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Zr(e,n,t,r){return r!==null&&xo(r),St(n,e.child,null,t),e=$o(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function zf(e,n,t,r,a,l,o){if(t)return n.flags&256?(n.flags&=-257,r=Da(Error(E(422))),Zr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,a=n.mode,r=sa({mode:"visible",children:r.children},a,0,null),l=Vn(l,a,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&St(n,e.child,null,o),n.child.memoizedState=Ll(o),n.memoizedState=$l,l);if(!(n.mode&1))return Zr(e,n,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(E(419)),r=Da(l,r,void 0),Zr(e,n,o,r)}if(s=(o&e.childLanes)!==0,Ee||s){if(r=ue,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,mn(e,a),Je(r,e,a,-1))}return Ro(),r=Da(Error(E(421))),Zr(e,n,o,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Bf.bind(null,e),a._reactRetry=n,null):(e=l.treeContext,Ae=En(a.nextSibling),Te=n,Y=!0,Xe=null,e!==null&&(Be[He++]=dn,Be[He++]=un,Be[He++]=Qn,dn=e.id,un=e.overflow,Qn=n),n=$o(n,r.children),n.flags|=4096,n)}function ec(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Nl(e.return,n,t)}function Oa(e,n,t,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=a)}function fu(e,n,t){var r=n.pendingProps,a=r.revealOrder,l=r.tail;if(je(e,n,r.children,t),r=X.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ec(e,t,n);else if(e.tag===19)ec(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(X,r),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&Ii(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Oa(n,!1,a,t,l);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Ii(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Oa(n,!0,t,null,l);break;case"together":Oa(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function mi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function gn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Gn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(E(153));if(n.child!==null){for(e=n.child,t=Pn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Pn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ef(e,n,t){switch(n.tag){case 3:pu(n),Nt();break;case 5:Od(n);break;case 1:$e(n.type)&&Mi(n);break;case 4:bo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;Q(Pi,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(Q(X,X.current&1),n.flags|=128,null):t&n.child.childLanes?hu(e,n,t):(Q(X,X.current&1),e=gn(e,n,t),e!==null?e.sibling:null);Q(X,X.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return fu(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Q(X,X.current),r)break;return null;case 22:case 23:return n.lanes=0,du(e,n,t)}return gn(e,n,t)}var mu,Pl,gu,xu;mu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Pl=function(){};gu=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,Wn(ln.current);var l=null;switch(t){case"input":a=nl(e,a),r=nl(e,r),l=[];break;case"select":a=J({},a,{value:void 0}),r=J({},r,{value:void 0}),l=[];break;case"textarea":a=il(e,a),r=il(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=zi)}ll(t,r);var o;t=null;for(d in a)if(!r.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var s=a[d];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(dr.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var c=r[d];if(s=a!=null?a[d]:void 0,r.hasOwnProperty(d)&&c!==s&&(c!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in c)c.hasOwnProperty(o)&&s[o]!==c[o]&&(t||(t={}),t[o]=c[o])}else t||(l||(l=[]),l.push(d,t)),t=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(l=l||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(dr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&K("scroll",e),l||s===c||(l=[])):(l=l||[]).push(d,c))}t&&(l=l||[]).push("style",t);var d=l;(n.updateQueue=d)&&(n.flags|=4)}};xu=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ht(e,n){if(!Y)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Mf(e,n,t){var r=n.pendingProps;switch(go(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(n),null;case 1:return $e(n.type)&&Ei(),ye(n),null;case 3:return r=n.stateNode,Ct(),G(Me),G(_e),No(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Xe!==null&&(Bl(Xe),Xe=null))),Pl(e,n),ye(n),null;case 5:jo(n);var a=Wn(wr.current);if(t=n.type,e!==null&&n.stateNode!=null)gu(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(E(166));return ye(n),null}if(e=Wn(ln.current),Yr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[rn]=n,r[kr]=l,e=(n.mode&1)!==0,t){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(a=0;a<Yt.length;a++)K(Yt[a],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":cs(r,l),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},K("invalid",r);break;case"textarea":us(r,l),K("invalid",r)}ll(t,l),a=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Gr(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Gr(r.textContent,s,e),a=["children",""+s]):dr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&K("scroll",r)}switch(t){case"input":Br(r),ds(r,l,!0);break;case"textarea":Br(r),ps(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=zi)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[rn]=n,e[kr]=r,mu(e,n,!1,!1),n.stateNode=e;e:{switch(o=ol(t,r),t){case"dialog":K("cancel",e),K("close",e),a=r;break;case"iframe":case"object":case"embed":K("load",e),a=r;break;case"video":case"audio":for(a=0;a<Yt.length;a++)K(Yt[a],e);a=r;break;case"source":K("error",e),a=r;break;case"img":case"image":case"link":K("error",e),K("load",e),a=r;break;case"details":K("toggle",e),a=r;break;case"input":cs(e,r),a=nl(e,r),K("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=J({},r,{value:void 0}),K("invalid",e);break;case"textarea":us(e,r),a=il(e,r),K("invalid",e);break;default:a=r}ll(t,a),s=a;for(l in s)if(s.hasOwnProperty(l)){var c=s[l];l==="style"?Kc(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&qc(e,c)):l==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&ur(e,c):typeof c=="number"&&ur(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(dr.hasOwnProperty(l)?c!=null&&l==="onScroll"&&K("scroll",e):c!=null&&eo(e,l,c,o))}switch(t){case"input":Br(e),ds(e,r,!1);break;case"textarea":Br(e),ps(e);break;case"option":r.value!=null&&e.setAttribute("value",""+An(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?ht(e,!!r.multiple,l,!1):r.defaultValue!=null&&ht(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=zi)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ye(n),null;case 6:if(e&&n.stateNode!=null)xu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(E(166));if(t=Wn(wr.current),Wn(ln.current),Yr(n)){if(r=n.stateNode,t=n.memoizedProps,r[rn]=n,(l=r.nodeValue!==t)&&(e=Te,e!==null))switch(e.tag){case 3:Gr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gr(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[rn]=n,n.stateNode=r}return ye(n),null;case 13:if(G(X),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Ae!==null&&n.mode&1&&!(n.flags&128))Td(),Nt(),n.flags|=98560,l=!1;else if(l=Yr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(E(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(E(317));l[rn]=n}else Nt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ye(n),l=!1}else Xe!==null&&(Bl(Xe),Xe=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||X.current&1?oe===0&&(oe=3):Ro())),n.updateQueue!==null&&(n.flags|=4),ye(n),null);case 4:return Ct(),Pl(e,n),e===null&&yr(n.stateNode.containerInfo),ye(n),null;case 10:return ko(n.type._context),ye(n),null;case 17:return $e(n.type)&&Ei(),ye(n),null;case 19:if(G(X),l=n.memoizedState,l===null)return ye(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Ht(l,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Ii(e),o!==null){for(n.flags|=128,Ht(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Q(X,X.current&1|2),n.child}e=e.sibling}l.tail!==null&&te()>Et&&(n.flags|=128,r=!0,Ht(l,!1),n.lanes=4194304)}else{if(!r)if(e=Ii(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ht(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Y)return ye(n),null}else 2*te()-l.renderingStartTime>Et&&t!==1073741824&&(n.flags|=128,r=!0,Ht(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=te(),n.sibling=null,t=X.current,Q(X,r?t&1|2:t&1),n):(ye(n),null);case 22:case 23:return Io(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Pe&1073741824&&(ye(n),n.subtreeFlags&6&&(n.flags|=8192)):ye(n),null;case 24:return null;case 25:return null}throw Error(E(156,n.tag))}function $f(e,n){switch(go(n),n.tag){case 1:return $e(n.type)&&Ei(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ct(),G(Me),G(_e),No(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return jo(n),null;case 13:if(G(X),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(E(340));Nt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(X),null;case 4:return Ct(),null;case 10:return ko(n.type._context),null;case 22:case 23:return Io(),null;case 24:return null;default:return null}}var Jr=!1,ke=!1,Lf=typeof WeakSet=="function"?WeakSet:Set,T=null;function ut(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ne(e,n,r)}else t.current=null}function Al(e,n,t){try{t()}catch(r){ne(e,n,r)}}var nc=!1;function Pf(e,n){if(xl=Ni,e=wd(),fo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,s=-1,c=-1,d=0,f=0,h=e,m=null;n:for(;;){for(var k;h!==t||a!==0&&h.nodeType!==3||(s=o+a),h!==l||r!==0&&h.nodeType!==3||(c=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(k=h.firstChild)!==null;)m=h,h=k;for(;;){if(h===e)break n;if(m===t&&++d===a&&(s=o),m===l&&++f===r&&(c=o),(k=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=k}t=s===-1||c===-1?null:{start:s,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(yl={focusedElem:e,selectionRange:t},Ni=!1,T=n;T!==null;)if(n=T,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,T=e;else for(;T!==null;){n=T;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,j=v.memoizedState,p=n.stateNode,u=p.getSnapshotBeforeUpdate(n.elementType===n.type?w:Ge(n.type,w),j);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(_){ne(n,n.return,_)}if(e=n.sibling,e!==null){e.return=n.return,T=e;break}T=n.return}return v=nc,nc=!1,v}function ir(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Al(n,t,l)}a=a.next}while(a!==r)}}function la(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Tl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function yu(e){var n=e.alternate;n!==null&&(e.alternate=null,yu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[rn],delete n[kr],delete n[_l],delete n[mf],delete n[gf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vu(e){return e.tag===5||e.tag===3||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=zi));else if(r!==4&&(e=e.child,e!==null))for(Il(e,n,t),e=e.sibling;e!==null;)Il(e,n,t),e=e.sibling}function Rl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rl(e,n,t),e=e.sibling;e!==null;)Rl(e,n,t),e=e.sibling}var he=null,Ye=!1;function vn(e,n,t){for(t=t.child;t!==null;)ku(e,n,t),t=t.sibling}function ku(e,n,t){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Zi,t)}catch{}switch(t.tag){case 5:ke||ut(t,n);case 6:var r=he,a=Ye;he=null,vn(e,n,t),he=r,Ye=a,he!==null&&(Ye?(e=he,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):he.removeChild(t.stateNode));break;case 18:he!==null&&(Ye?(e=he,t=t.stateNode,e.nodeType===8?Pa(e.parentNode,t):e.nodeType===1&&Pa(e,t),mr(e)):Pa(he,t.stateNode));break;case 4:r=he,a=Ye,he=t.stateNode.containerInfo,Ye=!0,vn(e,n,t),he=r,Ye=a;break;case 0:case 11:case 14:case 15:if(!ke&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Al(t,n,o),a=a.next}while(a!==r)}vn(e,n,t);break;case 1:if(!ke&&(ut(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){ne(t,n,s)}vn(e,n,t);break;case 21:vn(e,n,t);break;case 22:t.mode&1?(ke=(r=ke)||t.memoizedState!==null,vn(e,n,t),ke=r):vn(e,n,t);break;default:vn(e,n,t)}}function rc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Lf),n.forEach(function(r){var a=Hf.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function Qe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var l=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:he=s.stateNode,Ye=!1;break e;case 3:he=s.stateNode.containerInfo,Ye=!0;break e;case 4:he=s.stateNode.containerInfo,Ye=!0;break e}s=s.return}if(he===null)throw Error(E(160));ku(l,o,a),he=null,Ye=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(d){ne(a,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)_u(n,e),n=n.sibling}function _u(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(n,e),nn(e),r&4){try{ir(3,e,e.return),la(3,e)}catch(w){ne(e,e.return,w)}try{ir(5,e,e.return)}catch(w){ne(e,e.return,w)}}break;case 1:Qe(n,e),nn(e),r&512&&t!==null&&ut(t,t.return);break;case 5:if(Qe(n,e),nn(e),r&512&&t!==null&&ut(t,t.return),e.flags&32){var a=e.stateNode;try{ur(a,"")}catch(w){ne(e,e.return,w)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Wc(a,l),ol(s,o);var d=ol(s,l);for(o=0;o<c.length;o+=2){var f=c[o],h=c[o+1];f==="style"?Kc(a,h):f==="dangerouslySetInnerHTML"?qc(a,h):f==="children"?ur(a,h):eo(a,f,h,d)}switch(s){case"input":tl(a,l);break;case"textarea":Uc(a,l);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var k=l.value;k!=null?ht(a,!!l.multiple,k,!1):m!==!!l.multiple&&(l.defaultValue!=null?ht(a,!!l.multiple,l.defaultValue,!0):ht(a,!!l.multiple,l.multiple?[]:"",!1))}a[kr]=l}catch(w){ne(e,e.return,w)}}break;case 6:if(Qe(n,e),nn(e),r&4){if(e.stateNode===null)throw Error(E(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(w){ne(e,e.return,w)}}break;case 3:if(Qe(n,e),nn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{mr(n.containerInfo)}catch(w){ne(e,e.return,w)}break;case 4:Qe(n,e),nn(e);break;case 13:Qe(n,e),nn(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Ao=te())),r&4&&rc(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(ke=(d=ke)||f,Qe(n,e),ke=d):Qe(n,e),nn(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(T=e,f=e.child;f!==null;){for(h=T=f;T!==null;){switch(m=T,k=m.child,m.tag){case 0:case 11:case 14:case 15:ir(4,m,m.return);break;case 1:ut(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(w){ne(r,t,w)}}break;case 5:ut(m,m.return);break;case 22:if(m.memoizedState!==null){ac(h);continue}}k!==null?(k.return=m,T=k):ac(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{a=h.stateNode,d?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,c=h.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Qc("display",o))}catch(w){ne(e,e.return,w)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(w){ne(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Qe(n,e),nn(e),r&4&&rc(e);break;case 21:break;default:Qe(n,e),nn(e)}}function nn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(vu(t)){var r=t;break e}t=t.return}throw Error(E(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(ur(a,""),r.flags&=-33);var l=tc(e);Rl(e,l,a);break;case 3:case 4:var o=r.stateNode.containerInfo,s=tc(e);Il(e,s,o);break;default:throw Error(E(161))}}catch(c){ne(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Af(e,n,t){T=e,wu(e)}function wu(e,n,t){for(var r=(e.mode&1)!==0;T!==null;){var a=T,l=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||Jr;if(!o){var s=a.alternate,c=s!==null&&s.memoizedState!==null||ke;s=Jr;var d=ke;if(Jr=o,(ke=c)&&!d)for(T=a;T!==null;)o=T,c=o.child,o.tag===22&&o.memoizedState!==null?lc(a):c!==null?(c.return=o,T=c):lc(a);for(;l!==null;)T=l,wu(l),l=l.sibling;T=a,Jr=s,ke=d}ic(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,T=l):ic(e)}}function ic(e){for(;T!==null;){var n=T;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ke||la(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ke)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:Ge(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Hs(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Hs(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&mr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ke||n.flags&512&&Tl(n)}catch(m){ne(n,n.return,m)}}if(n===e){T=null;break}if(t=n.sibling,t!==null){t.return=n.return,T=t;break}T=n.return}}function ac(e){for(;T!==null;){var n=T;if(n===e){T=null;break}var t=n.sibling;if(t!==null){t.return=n.return,T=t;break}T=n.return}}function lc(e){for(;T!==null;){var n=T;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{la(4,n)}catch(c){ne(n,t,c)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(c){ne(n,a,c)}}var l=n.return;try{Tl(n)}catch(c){ne(n,l,c)}break;case 5:var o=n.return;try{Tl(n)}catch(c){ne(n,o,c)}}}catch(c){ne(n,n.return,c)}if(n===e){T=null;break}var s=n.sibling;if(s!==null){s.return=n.return,T=s;break}T=n.return}}var Tf=Math.ceil,Di=xn.ReactCurrentDispatcher,Lo=xn.ReactCurrentOwner,Ue=xn.ReactCurrentBatchConfig,W=0,ue=null,ie=null,fe=0,Pe=0,pt=Rn(0),oe=0,Sr=null,Gn=0,oa=0,Po=0,ar=null,ze=null,Ao=0,Et=1/0,sn=null,Oi=!1,Fl=null,$n=null,ei=!1,Nn=null,Bi=0,lr=0,Dl=null,gi=-1,xi=0;function Ne(){return W&6?te():gi!==-1?gi:gi=te()}function Ln(e){return e.mode&1?W&2&&fe!==0?fe&-fe:yf.transition!==null?(xi===0&&(xi=ld()),xi):(e=q,e!==0||(e=window.event,e=e===void 0?16:hd(e.type)),e):1}function Je(e,n,t,r){if(50<lr)throw lr=0,Dl=null,Error(E(185));Lr(e,t,r),(!(W&2)||e!==ue)&&(e===ue&&(!(W&2)&&(oa|=t),oe===4&&bn(e,fe)),Le(e,r),t===1&&W===0&&!(n.mode&1)&&(Et=te()+500,ra&&Fn()))}function Le(e,n){var t=e.callbackNode;xh(e,n);var r=ji(e,e===ue?fe:0);if(r===0)t!==null&&ms(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ms(t),n===1)e.tag===0?xf(oc.bind(null,e)):Ld(oc.bind(null,e)),hf(function(){!(W&6)&&Fn()}),t=null;else{switch(od(r)){case 1:t=ao;break;case 4:t=id;break;case 16:t=bi;break;case 536870912:t=ad;break;default:t=bi}t=Mu(t,bu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function bu(e,n){if(gi=-1,xi=0,W&6)throw Error(E(327));var t=e.callbackNode;if(yt()&&e.callbackNode!==t)return null;var r=ji(e,e===ue?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Hi(e,r);else{n=r;var a=W;W|=2;var l=Nu();(ue!==e||fe!==n)&&(sn=null,Et=te()+500,Un(e,n));do try{Ff();break}catch(s){ju(e,s)}while(!0);vo(),Di.current=l,W=a,ie!==null?n=0:(ue=null,fe=0,n=oe)}if(n!==0){if(n===2&&(a=pl(e),a!==0&&(r=a,n=Ol(e,a))),n===1)throw t=Sr,Un(e,0),bn(e,r),Le(e,te()),t;if(n===6)bn(e,r);else{if(a=e.current.alternate,!(r&30)&&!If(a)&&(n=Hi(e,r),n===2&&(l=pl(e),l!==0&&(r=l,n=Ol(e,l))),n===1))throw t=Sr,Un(e,0),bn(e,r),Le(e,te()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(E(345));case 2:On(e,ze,sn);break;case 3:if(bn(e,r),(r&130023424)===r&&(n=Ao+500-te(),10<n)){if(ji(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=kl(On.bind(null,e,ze,sn),n);break}On(e,ze,sn);break;case 4:if(bn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var o=31-Ze(r);l=1<<o,o=n[o],o>a&&(a=o),r&=~l}if(r=a,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tf(r/1960))-r,10<r){e.timeoutHandle=kl(On.bind(null,e,ze,sn),r);break}On(e,ze,sn);break;case 5:On(e,ze,sn);break;default:throw Error(E(329))}}}return Le(e,te()),e.callbackNode===t?bu.bind(null,e):null}function Ol(e,n){var t=ar;return e.current.memoizedState.isDehydrated&&(Un(e,n).flags|=256),e=Hi(e,n),e!==2&&(n=ze,ze=t,n!==null&&Bl(n)),e}function Bl(e){ze===null?ze=e:ze.push.apply(ze,e)}function If(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],l=a.getSnapshot;a=a.value;try{if(!en(l(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function bn(e,n){for(n&=~Po,n&=~oa,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ze(n),r=1<<t;e[t]=-1,n&=~r}}function oc(e){if(W&6)throw Error(E(327));yt();var n=ji(e,0);if(!(n&1))return Le(e,te()),null;var t=Hi(e,n);if(e.tag!==0&&t===2){var r=pl(e);r!==0&&(n=r,t=Ol(e,r))}if(t===1)throw t=Sr,Un(e,0),bn(e,n),Le(e,te()),t;if(t===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,On(e,ze,sn),Le(e,te()),null}function To(e,n){var t=W;W|=1;try{return e(n)}finally{W=t,W===0&&(Et=te()+500,ra&&Fn())}}function Yn(e){Nn!==null&&Nn.tag===0&&!(W&6)&&yt();var n=W;W|=1;var t=Ue.transition,r=q;try{if(Ue.transition=null,q=1,e)return e()}finally{q=r,Ue.transition=t,W=n,!(W&6)&&Fn()}}function Io(){Pe=pt.current,G(pt)}function Un(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,pf(t)),ie!==null)for(t=ie.return;t!==null;){var r=t;switch(go(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ei();break;case 3:Ct(),G(Me),G(_e),No();break;case 5:jo(r);break;case 4:Ct();break;case 13:G(X);break;case 19:G(X);break;case 10:ko(r.type._context);break;case 22:case 23:Io()}t=t.return}if(ue=e,ie=e=Pn(e.current,null),fe=Pe=n,oe=0,Sr=null,Po=oa=Gn=0,ze=ar=null,Hn!==null){for(n=0;n<Hn.length;n++)if(t=Hn[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=a,r.next=o}t.pending=r}Hn=null}return e}function ju(e,n){do{var t=ie;try{if(vo(),hi.current=Fi,Ri){for(var r=Z.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Ri=!1}if(Kn=0,de=le=Z=null,rr=!1,br=0,Lo.current=null,t===null||t.return===null){oe=1,Sr=n,ie=null;break}e:{var l=e,o=t.return,s=t,c=n;if(n=fe,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,f=s,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=Ks(o);if(k!==null){k.flags&=-257,Gs(k,o,s,l,n),k.mode&1&&Qs(l,d,n),n=k,c=d;var v=n.updateQueue;if(v===null){var w=new Set;w.add(c),n.updateQueue=w}else v.add(c);break e}else{if(!(n&1)){Qs(l,d,n),Ro();break e}c=Error(E(426))}}else if(Y&&s.mode&1){var j=Ks(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Gs(j,o,s,l,n),xo(zt(c,s));break e}}l=c=zt(c,s),oe!==4&&(oe=2),ar===null?ar=[l]:ar.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var p=ou(l,c,n);Bs(l,p);break e;case 1:s=c;var u=l.type,y=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&($n===null||!$n.has(y)))){l.flags|=65536,n&=-n,l.lanes|=n;var _=su(l,s,n);Bs(l,_);break e}}l=l.return}while(l!==null)}Cu(t)}catch(N){n=N,ie===t&&t!==null&&(ie=t=t.return);continue}break}while(!0)}function Nu(){var e=Di.current;return Di.current=Fi,e===null?Fi:e}function Ro(){(oe===0||oe===3||oe===2)&&(oe=4),ue===null||!(Gn&268435455)&&!(oa&268435455)||bn(ue,fe)}function Hi(e,n){var t=W;W|=2;var r=Nu();(ue!==e||fe!==n)&&(sn=null,Un(e,n));do try{Rf();break}catch(a){ju(e,a)}while(!0);if(vo(),W=t,Di.current=r,ie!==null)throw Error(E(261));return ue=null,fe=0,oe}function Rf(){for(;ie!==null;)Su(ie)}function Ff(){for(;ie!==null&&!sh();)Su(ie)}function Su(e){var n=Eu(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,n===null?Cu(e):ie=n,Lo.current=null}function Cu(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=$f(t,n),t!==null){t.flags&=32767,ie=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,ie=null;return}}else if(t=Mf(t,n,Pe),t!==null){ie=t;return}if(n=n.sibling,n!==null){ie=n;return}ie=n=e}while(n!==null);oe===0&&(oe=5)}function On(e,n,t){var r=q,a=Ue.transition;try{Ue.transition=null,q=1,Df(e,n,t,r)}finally{Ue.transition=a,q=r}return null}function Df(e,n,t,r){do yt();while(Nn!==null);if(W&6)throw Error(E(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(yh(e,l),e===ue&&(ie=ue=null,fe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ei||(ei=!0,Mu(bi,function(){return yt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Ue.transition,Ue.transition=null;var o=q;q=1;var s=W;W|=4,Lo.current=null,Pf(e,t),_u(t,e),af(yl),Ni=!!xl,yl=xl=null,e.current=t,Af(t),ch(),W=s,q=o,Ue.transition=l}else e.current=t;if(ei&&(ei=!1,Nn=e,Bi=a),l=e.pendingLanes,l===0&&($n=null),ph(t.stateNode),Le(e,te()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(Oi)throw Oi=!1,e=Fl,Fl=null,e;return Bi&1&&e.tag!==0&&yt(),l=e.pendingLanes,l&1?e===Dl?lr++:(lr=0,Dl=e):lr=0,Fn(),null}function yt(){if(Nn!==null){var e=od(Bi),n=Ue.transition,t=q;try{if(Ue.transition=null,q=16>e?16:e,Nn===null)var r=!1;else{if(e=Nn,Nn=null,Bi=0,W&6)throw Error(E(331));var a=W;for(W|=4,T=e.current;T!==null;){var l=T,o=l.child;if(T.flags&16){var s=l.deletions;if(s!==null){for(var c=0;c<s.length;c++){var d=s[c];for(T=d;T!==null;){var f=T;switch(f.tag){case 0:case 11:case 15:ir(8,f,l)}var h=f.child;if(h!==null)h.return=f,T=h;else for(;T!==null;){f=T;var m=f.sibling,k=f.return;if(yu(f),f===d){T=null;break}if(m!==null){m.return=k,T=m;break}T=k}}}var v=l.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}T=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,T=o;else e:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:ir(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,T=p;break e}T=l.return}}var u=e.current;for(T=u;T!==null;){o=T;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,T=y;else e:for(o=u;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:la(9,s)}}catch(N){ne(s,s.return,N)}if(s===o){T=null;break e}var _=s.sibling;if(_!==null){_.return=s.return,T=_;break e}T=s.return}}if(W=a,Fn(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Zi,e)}catch{}r=!0}return r}finally{q=t,Ue.transition=n}}return!1}function sc(e,n,t){n=zt(t,n),n=ou(e,n,1),e=Mn(e,n,1),n=Ne(),e!==null&&(Lr(e,1,n),Le(e,n))}function ne(e,n,t){if(e.tag===3)sc(e,e,t);else for(;n!==null;){if(n.tag===3){sc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){e=zt(t,e),e=su(n,e,1),n=Mn(n,e,1),e=Ne(),n!==null&&(Lr(n,1,e),Le(n,e));break}}n=n.return}}function Of(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ne(),e.pingedLanes|=e.suspendedLanes&t,ue===e&&(fe&t)===t&&(oe===4||oe===3&&(fe&130023424)===fe&&500>te()-Ao?Un(e,0):Po|=t),Le(e,n)}function zu(e,n){n===0&&(e.mode&1?(n=Ur,Ur<<=1,!(Ur&130023424)&&(Ur=4194304)):n=1);var t=Ne();e=mn(e,n),e!==null&&(Lr(e,n,t),Le(e,t))}function Bf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),zu(e,t)}function Hf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(n),zu(e,t)}var Eu;Eu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Me.current)Ee=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ee=!1,Ef(e,n,t);Ee=!!(e.flags&131072)}else Ee=!1,Y&&n.flags&1048576&&Pd(n,Li,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;mi(e,n),e=n.pendingProps;var a=jt(n,_e.current);xt(n,t),a=Co(null,n,r,e,a,t);var l=zo();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,$e(r)?(l=!0,Mi(n)):l=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,wo(n),a.updater=aa,n.stateNode=a,a._reactInternals=n,Cl(n,r,e,t),n=Ml(null,n,r,!0,l,t)):(n.tag=0,Y&&l&&mo(n),je(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(mi(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=Uf(r),e=Ge(r,e),a){case 0:n=El(null,n,r,e,t);break e;case 1:n=Zs(null,n,r,e,t);break e;case 11:n=Ys(null,n,r,e,t);break e;case 14:n=Xs(null,n,r,Ge(r.type,e),t);break e}throw Error(E(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Ge(r,a),El(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Ge(r,a),Zs(e,n,r,a,t);case 3:e:{if(pu(n),e===null)throw Error(E(387));r=n.pendingProps,l=n.memoizedState,a=l.element,Dd(e,n),Ti(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){a=zt(Error(E(423)),n),n=Js(e,n,r,t,a);break e}else if(r!==a){a=zt(Error(E(424)),n),n=Js(e,n,r,t,a);break e}else for(Ae=En(n.stateNode.containerInfo.firstChild),Te=n,Y=!0,Xe=null,t=Rd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Nt(),r===a){n=gn(e,n,t);break e}je(e,n,r,t)}n=n.child}return n;case 5:return Od(n),e===null&&jl(n),r=n.type,a=n.pendingProps,l=e!==null?e.memoizedProps:null,o=a.children,vl(r,a)?o=null:l!==null&&vl(r,l)&&(n.flags|=32),uu(e,n),je(e,n,o,t),n.child;case 6:return e===null&&jl(n),null;case 13:return hu(e,n,t);case 4:return bo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=St(n,null,r,t):je(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Ge(r,a),Ys(e,n,r,a,t);case 7:return je(e,n,n.pendingProps,t),n.child;case 8:return je(e,n,n.pendingProps.children,t),n.child;case 12:return je(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,l=n.memoizedProps,o=a.value,Q(Pi,r._currentValue),r._currentValue=o,l!==null)if(en(l.value,o)){if(l.children===a.children&&!Me.current){n=gn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=pn(-1,t&-t),c.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?c.next=c:(c.next=f.next,f.next=c),d.pending=c}}l.lanes|=t,c=l.alternate,c!==null&&(c.lanes|=t),Nl(l.return,t,n),s.lanes|=t;break}c=c.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(E(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Nl(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}je(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,xt(n,t),a=Ve(a),r=r(a),n.flags|=1,je(e,n,r,t),n.child;case 14:return r=n.type,a=Ge(r,n.pendingProps),a=Ge(r.type,a),Xs(e,n,r,a,t);case 15:return cu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Ge(r,a),mi(e,n),n.tag=1,$e(r)?(e=!0,Mi(n)):e=!1,xt(n,t),lu(n,r,a),Cl(n,r,a,t),Ml(null,n,r,!0,e,t);case 19:return fu(e,n,t);case 22:return du(e,n,t)}throw Error(E(156,n.tag))};function Mu(e,n){return rd(e,n)}function Wf(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,n,t,r){return new Wf(e,n,t,r)}function Fo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Uf(e){if(typeof e=="function")return Fo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===to)return 11;if(e===ro)return 14}return 2}function Pn(e,n){var t=e.alternate;return t===null?(t=We(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function yi(e,n,t,r,a,l){var o=2;if(r=e,typeof e=="function")Fo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case tt:return Vn(t.children,a,l,n);case no:o=8,a|=8;break;case Xa:return e=We(12,t,n,a|2),e.elementType=Xa,e.lanes=l,e;case Za:return e=We(13,t,n,a),e.elementType=Za,e.lanes=l,e;case Ja:return e=We(19,t,n,a),e.elementType=Ja,e.lanes=l,e;case Oc:return sa(t,a,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fc:o=10;break e;case Dc:o=9;break e;case to:o=11;break e;case ro:o=14;break e;case kn:o=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return n=We(o,t,n,a),n.elementType=e,n.type=r,n.lanes=l,n}function Vn(e,n,t,r){return e=We(7,e,r,n),e.lanes=t,e}function sa(e,n,t,r){return e=We(22,e,r,n),e.elementType=Oc,e.lanes=t,e.stateNode={isHidden:!1},e}function Ba(e,n,t){return e=We(6,e,null,n),e.lanes=t,e}function Ha(e,n,t){return n=We(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Vf(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wa(0),this.expirationTimes=wa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wa(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Do(e,n,t,r,a,l,o,s,c){return e=new Vf(e,n,t,s,c),n===1?(n=1,l===!0&&(n|=8)):n=0,l=We(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},wo(l),e}function qf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function $u(e){if(!e)return Tn;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(E(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if($e(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(E(171))}if(e.tag===1){var t=e.type;if($e(t))return $d(e,t,n)}return n}function Lu(e,n,t,r,a,l,o,s,c){return e=Do(t,r,!0,e,a,l,o,s,c),e.context=$u(null),t=e.current,r=Ne(),a=Ln(t),l=pn(r,a),l.callback=n??null,Mn(t,l,a),e.current.lanes=a,Lr(e,a,r),Le(e,r),e}function ca(e,n,t,r){var a=n.current,l=Ne(),o=Ln(a);return t=$u(t),n.context===null?n.context=t:n.pendingContext=t,n=pn(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Mn(a,n,o),e!==null&&(Je(e,a,o,l),pi(e,a,o)),o}function Wi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Oo(e,n){cc(e,n),(e=e.alternate)&&cc(e,n)}function Qf(){return null}var Pu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bo(e){this._internalRoot=e}da.prototype.render=Bo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(E(409));ca(e,n,null,null)};da.prototype.unmount=Bo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yn(function(){ca(null,e,null,null)}),n[fn]=null}};function da(e){this._internalRoot=e}da.prototype.unstable_scheduleHydration=function(e){if(e){var n=dd();e={blockedOn:null,target:e,priority:n};for(var t=0;t<wn.length&&n!==0&&n<wn[t].priority;t++);wn.splice(t,0,e),t===0&&pd(e)}};function Ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function dc(){}function Kf(e,n,t,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var d=Wi(o);l.call(d)}}var o=Lu(n,r,e,0,null,!1,!1,"",dc);return e._reactRootContainer=o,e[fn]=o.current,yr(e.nodeType===8?e.parentNode:e),Yn(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var d=Wi(c);s.call(d)}}var c=Do(e,0,!1,null,null,!1,!1,"",dc);return e._reactRootContainer=c,e[fn]=c.current,yr(e.nodeType===8?e.parentNode:e),Yn(function(){ca(n,c,t,r)}),c}function pa(e,n,t,r,a){var l=t._reactRootContainer;if(l){var o=l;if(typeof a=="function"){var s=a;a=function(){var c=Wi(o);s.call(c)}}ca(n,o,e,a)}else o=Kf(t,n,e,a,r);return Wi(o)}sd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Gt(n.pendingLanes);t!==0&&(lo(n,t|1),Le(n,te()),!(W&6)&&(Et=te()+500,Fn()))}break;case 13:Yn(function(){var r=mn(e,1);if(r!==null){var a=Ne();Je(r,e,1,a)}}),Oo(e,1)}};oo=function(e){if(e.tag===13){var n=mn(e,134217728);if(n!==null){var t=Ne();Je(n,e,134217728,t)}Oo(e,134217728)}};cd=function(e){if(e.tag===13){var n=Ln(e),t=mn(e,n);if(t!==null){var r=Ne();Je(t,e,n,r)}Oo(e,n)}};dd=function(){return q};ud=function(e,n){var t=q;try{return q=e,n()}finally{q=t}};cl=function(e,n,t){switch(n){case"input":if(tl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=ta(r);if(!a)throw Error(E(90));Hc(r),tl(r,a)}}}break;case"textarea":Uc(e,t);break;case"select":n=t.value,n!=null&&ht(e,!!t.multiple,n,!1)}};Xc=To;Zc=Yn;var Gf={usingClientEntryPoint:!1,Events:[Ar,lt,ta,Gc,Yc,To]},Wt={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yf={bundleType:Wt.bundleType,version:Wt.version,rendererPackageName:Wt.rendererPackageName,rendererConfig:Wt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nd(e),e===null?null:e.stateNode},findFiberByHostInstance:Wt.findFiberByHostInstance||Qf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ni.isDisabled&&ni.supportsFiber)try{Zi=ni.inject(Yf),an=ni}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gf;Fe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ho(n))throw Error(E(200));return qf(e,n,null,t)};Fe.createRoot=function(e,n){if(!Ho(e))throw Error(E(299));var t=!1,r="",a=Pu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Do(e,1,!1,null,null,t,!1,r,a),e[fn]=n.current,yr(e.nodeType===8?e.parentNode:e),new Bo(n)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=nd(n),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return Yn(e)};Fe.hydrate=function(e,n,t){if(!ua(n))throw Error(E(200));return pa(null,e,n,!0,t)};Fe.hydrateRoot=function(e,n,t){if(!Ho(e))throw Error(E(405));var r=t!=null&&t.hydratedSources||null,a=!1,l="",o=Pu;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Lu(n,null,e,1,t??null,a,!1,l,o),e[fn]=n.current,yr(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new da(n)};Fe.render=function(e,n,t){if(!ua(n))throw Error(E(200));return pa(null,e,n,!1,t)};Fe.unmountComponentAtNode=function(e){if(!ua(e))throw Error(E(40));return e._reactRootContainer?(Yn(function(){pa(null,null,e,!1,function(){e._reactRootContainer=null,e[fn]=null})}),!0):!1};Fe.unstable_batchedUpdates=To;Fe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ua(t))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return pa(e,n,t,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function Au(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Au)}catch(e){console.error(e)}}Au(),Ac.exports=Fe;var Xf=Ac.exports,Tu,uc=Xf;Tu=uc.createRoot,uc.hydrateRoot;/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Iu=(...e)=>e.filter((n,t,r)=>!!n&&r.indexOf(n)===t).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=b.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:o,...s},c)=>b.createElement("svg",{ref:c,...Jf,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:Iu("lucide",a),...s},[...o.map(([d,f])=>b.createElement(d,f)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=(e,n)=>{const t=b.forwardRef(({className:r,...a},l)=>b.createElement(em,{ref:l,iconNode:n,className:Iu(`lucide-${Zf(e)}`,r),...a}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=P("AlignCenter",[["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 18H5",key:"18s9l3"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=P("AlignLeft",[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=P("AlignRight",[["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 18H7",key:"1ygte8"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=P("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=P("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=P("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=P("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=P("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=P("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=P("Bold",[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=P("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=P("CaseUpper",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4",key:"1sqfas"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=P("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=P("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=P("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=P("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=P("CircleDashed",[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=P("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=P("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=P("CornerUpLeft",[["polyline",{points:"9 14 4 9 9 4",key:"881910"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=P("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=P("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=P("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=P("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=P("FileCode2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=P("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=P("FileType",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M11 18h2",key:"12mj7e"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=P("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=P("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=P("Frame",[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=P("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=P("Heading",[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=P("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=P("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=P("Keyboard",[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=P("LayoutPanelTop",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=P("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=P("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=P("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=P("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=P("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=P("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=P("MessagesSquare",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",key:"p1xzt8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=P("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=P("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=P("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=P("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=P("MousePointerClick",[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=P("MoveHorizontal",[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=P("MoveVertical",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m8 18 4 4 4-4",key:"bh5tu3"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=P("PaintBucket",[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",key:"irua1i"}],["path",{d:"m5 2 5 5",key:"1lls2c"}],["path",{d:"M2 13h15",key:"1hkzvu"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",key:"xk76lq"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=P("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=P("Pipette",[["path",{d:"m2 22 1-1h3l9-9",key:"1sre89"}],["path",{d:"M3 21v-3l9-9",key:"hpe2y6"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",key:"196du1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=P("Plug",[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=P("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=P("RectangleHorizontal",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=P("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=P("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=P("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=P("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=P("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=P("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=P("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=P("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=P("SquareDashed",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=P("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=P("Table2",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=P("Tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=P("ThumbsDown",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=P("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=P("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=P("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=P("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=P("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=P("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Ju="bolt-visual-design:v3",Bm=1200;function Hm(){try{const e=localStorage.getItem(Ju);if(e){const n=JSON.parse(e);return{doc:n.doc??{},compiled:n.compiled??{}}}}catch{}return{doc:{},compiled:{}}}function Wm(e){const n={...e};if(n.style){const t={};for(const[r,a]of Object.entries(n.style))a!==""&&a!=null&&(t[r]=a);Object.keys(t).length?n.style=t:delete n.style}return n.text===void 0&&delete n.text,n.href||delete n.href,n.target||delete n.target,n.hidden||delete n.hidden,Object.keys(n).length?n:void 0}function Ut(e,n,t){const r=e[n]??{},a=Wm(t(r)),l={...e};return a?l[n]=a:delete l[n],l}function Um(e,n){switch(n.type){case"update":{const t=n.fn(e.doc);return t===e.doc||JSON.stringify(t)===JSON.stringify(e.doc)?e:{doc:t,past:n.push?[...e.past,e.doc].slice(-150):e.past,future:[]}}case"undo":return e.past.length?{doc:e.past[e.past.length-1],past:e.past.slice(0,-1),future:[e.doc,...e.future]}:e;case"redo":return e.future.length?{doc:e.future[0],past:[...e.past,e.doc],future:e.future.slice(1)}:e;case"reset":return{doc:{},past:[...e.past,e.doc],future:[]}}}const ep=b.createContext(null),np=b.createContext(null);function Vm({children:e}){const n=b.useMemo(Hm,[]),[t,r]=b.useReducer(Um,{doc:n.doc,past:[],future:[]}),[a,l]=b.useState(n.compiled),o=b.useRef({t:0}),s=b.useRef(t.doc);s.current=t.doc;const c=b.useCallback((m,k)=>{const v=Date.now(),w=!!k&&o.current.key===k&&v-o.current.t<Bm;o.current={key:k,t:v},r({type:"update",fn:m,push:!w})},[]),d=b.useMemo(()=>({setStyle:(m,k,v)=>c(w=>Ut(w,m,j=>({...j,style:{...j.style??{},...k}})),v),setText:(m,k,v)=>c(w=>Ut(w,m,j=>({...j,text:k})),v),setLink:(m,k,v)=>c(w=>Ut(w,m,j=>({...j,...k})),v),setHidden:(m,k)=>c(v=>Ut(v,m,w=>({...w,hidden:k}))),resetNode:m=>c(k=>Ut(k,m,()=>({}))),resetAll:()=>{r({type:"reset"}),l({})},undo:()=>{o.current={t:0},r({type:"undo"})},redo:()=>{o.current={t:0},r({type:"redo"})},markCompiled:()=>l(s.current)}),[c]),f=b.useRef(!0);b.useEffect(()=>{if(f.current){f.current=!1;return}const m=setTimeout(()=>{try{localStorage.setItem(Ju,JSON.stringify({doc:t.doc,compiled:a}))}catch{}},450);return()=>clearTimeout(m)},[t.doc,a]);const h=b.useMemo(()=>({doc:t.doc,compiled:a,canUndo:t.past.length>0,canRedo:t.future.length>0}),[t,a]);return i.jsx(np.Provider,{value:d,children:i.jsx(ep.Provider,{value:h,children:e})})}function Jn(){const e=b.useContext(ep);if(!e)throw new Error("useDoc outside DocProvider");return e}function yn(){const e=b.useContext(np);if(!e)throw new Error("useDocApi outside DocProvider");return e}const tp=b.createContext({editingId:null,animatingId:null,mode:"preview",stopEdit:()=>{}}),rp=b.createContext(null);function qm({children:e,mode:n,setMode:t}){const[r,a]=b.useState("desktop"),[l,o]=b.useState(null),[s,c]=b.useState(null),[d,f]=b.useState(null),[h,m]=b.useState(null),[k,v]=b.useState(null),w=b.useRef(null),j=b.useRef(null),p=b.useCallback(g=>!g||!w.current?null:w.current.querySelector(`[data-vid="${CSS.escape(g)}"]`),[]),u=b.useCallback(g=>{o(g),f(S=>S===g?S:null),v(S=>S&&S.id!==g&&S.phase!=="applying"&&S.phase!=="thinking"?null:S)},[]);b.useEffect(()=>{n!=="design"&&(o(null),c(null),f(null),v(null))},[n]);const y=b.useCallback(()=>f(null),[]),_=b.useMemo(()=>({editingId:d,animatingId:h,mode:n,stopEdit:y}),[d,h,n,y]),N=b.useMemo(()=>({mode:n,setMode:t,device:r,setDevice:a,selectedId:l,select:u,hoverId:s,setHover:c,editingId:d,startEdit:g=>{o(g),f(g)},stopEdit:y,animatingId:h,setAnimating:m,ai:k,setAi:v,rootRef:w,viewportRef:j,getEl:p}),[n,t,r,l,u,s,d,y,h,k,p]);return i.jsx(rp.Provider,{value:N,children:i.jsx(tp.Provider,{value:_,children:e})})}function Oe(){const e=b.useContext(rp);if(!e)throw new Error("useEditor outside EditorProvider");return e}function fa(){return b.useContext(tp)}const ip=b.createContext(()=>{});let Qm=0;function Km({children:e}){const[n,t]=b.useState([]),r=b.useCallback((a,l)=>{const o=++Qm;t(s=>[...s.slice(-2),{id:o,text:a,action:l}]),setTimeout(()=>t(s=>s.filter(c=>c.id!==o)),3600)},[]);return i.jsxs(ip.Provider,{value:r,children:[e,i.jsx("div",{className:"toasts","aria-live":"polite",children:n.map(a=>i.jsxs("div",{className:"toast",children:[i.jsx("span",{children:a.text}),a.action&&i.jsx("button",{onClick:()=>{a.action.run(),t(l=>l.filter(o=>o.id!==a.id))},children:a.action.label})]},a.id))})]})}const Ir=()=>b.useContext(ip),Gm=[[/\{\/\*.*?\*\/\}|\/\/.*$/,"cm"],[/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`[^`]*`/,"str"],[/<\/?[A-Za-z][\w.]*|\/?>/,e=>/^<\/?[A-Z]/.test(e)?"cmp":"tag"],[/\b(import|from|export|default|function|return|const|let|type|interface|as)\b/,"kw"],[/\b[a-zA-Z-]+(?==)/,"attr"],[/\b\d+(\.\d+)?\b/,"num"],[/[{}()[\],;:.!]/,"pun"]],Ym=[[/\/\*.*?\*\/|^\s*\*.*$|^\s*\/\*.*$/,"cm"],[/@[\w-]+/,"kw"],[/^\s*[\w-]+(?=\s*:(?!\w*\)))/,"attr"],[/'[^']*'|"[^"]*"/,"str"],[/#[0-9a-fA-F]{3,8}\b/,"num"],[/-?\d*\.?\d+(px|em|rem|%|deg|s|fr|cqi)?\b/,"num"],[/[.#][\w-]+|::?[\w-]+|\[[^\]]+\]/,"sel"],[/[{}();:,>]/,"pun"]],Xm=[[/"(?:[^"\\]|\\.)*"(?=\s*:)/,"attr"],[/"(?:[^"\\]|\\.)*"/,"str"],[/\b(true|false|null)\b|-?\d+(\.\d+)?/,"num"],[/[{}[\],:]/,"pun"]],Zm=[[/<!--.*?-->/,"cm"],[/"[^"]*"/,"str"],[/<\/?[\w!-]+|\/?>/,"tag"],[/\b[\w-]+(?==)/,"attr"]],Jm={tsx:Gm,css:Ym,json:Xm,html:Zm};function ap(e,n){const t=Jm[n],r=[];let a=0,l="";const o=()=>{l&&r.push({t:l}),l=""};for(;a<e.length;){let s=null;const c=e.slice(a);for(const[d,f]of t){const h=d.exec(c);if(h&&h[0].length&&(s===null||h.index<s.idx)&&(s={idx:h.index,m:h[0],c:typeof f=="string"?f:f(h[0])},h.index===0))break}if(!s){l+=c;break}l+=c.slice(0,s.idx),o(),r.push({t:s.m,c:s.c}),a+=s.idx+s.m.length}return o(),r}const eg=`/* Alfred Chang — refined neo-brutalism
   ink #000 · paper #fff · sky #87CEEB · lime #D7FF28 · coral #FF6E6C · blue #0EA5E9
   orange #F16122 · bolt #006CFF (white text, 4.6:1) · purple #B79CFF · turquoise #40E0D0 · yellow #FFD23F
   Blue is a surface/fill colour; blue text uses --blue-ink (#0369A1, 5.9:1 on white). */

:root {
  --ink: #000;
  --paper: #fff;
  --sky: #87ceeb;
  --sky-soft: #e4f5fc;
  --lime: #d7ff28;
  --coral: #ff6e6c;
  --blue: #0ea5e9;
  --blue-ink: #0369a1;
  --orange: #f16122;
  --bolt: #006cff;
  --purple: #b79cff;
  --turquoise: #40e0d0;
  --yellow: #ffd23f;
  --muted: #2d2d2d;
  --grid: rgba(0, 0, 0, 0.075);
  --focus: var(--blue-ink);

  --display: 'Archivo Black', 'Arial Black', Impact, sans-serif;
  --body: 'Space Grotesk', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;

  --border: 3px solid var(--ink);
  --shadow: 6px 6px 0 var(--ink);
  --shadow-lg: 10px 10px 0 var(--ink);
  --header-h: 64px;
  --gutter: clamp(16px, 4vw, 48px);
  --wrap: 1240px;
  --edge: max(var(--gutter), calc((100vw - var(--wrap)) / 2 + var(--gutter)));

  color-scheme: light;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-padding-top: calc(var(--header-h) + 16px);
  -webkit-text-size-adjust: 100%;
}
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--body);
  font-size: 1.0625rem;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

main:focus {
  outline: none;
}

img,
svg {
  max-width: 100%;
}

a {
  color: inherit;
}

h1,
h2,
h3,
h4 {
  margin: 0;
}

:focus-visible {
  outline: 4px solid var(--focus);
  outline-offset: 3px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}

.skip-link {
  position: absolute;
  left: 16px;
  top: -120px;
  z-index: 100;
  padding: 12px 16px;
  background: var(--lime);
  border: var(--border);
  box-shadow: var(--shadow);
  font-family: var(--mono);
  font-weight: 700;
  text-decoration: none;
}
.skip-link:focus {
  top: 12px;
}

/* ---------------- primitives ---------------- */

.wrap {
  max-width: var(--wrap);
  margin-inline: auto;
  padding-inline: var(--gutter);
}

.mono {
  font-family: var(--mono);
}
.mono-label {
  display: block;
  margin: 0 0 8px;
  font-family: var(--mono);
  font-weight: 700;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.display {
  font-family: var(--display);
  font-weight: 400;
  text-transform: uppercase;
  line-height: 0.92;
  letter-spacing: -0.02em;
}
.line {
  display: block;
}
.h2 {
  margin-top: 18px;
  max-width: 15em;
  font-size: clamp(2.1rem, 5.4vw, 4.6rem);
  text-wrap: balance;
}

.surface-sky {
  background-color: var(--sky);
}
.surface-lime {
  background-color: var(--lime);
}
.surface-coral {
  background-color: var(--coral);
}
.surface-blue {
  background-color: var(--blue);
}
.surface-orange {
  background-color: var(--orange);
}
.surface-purple {
  background-color: var(--purple);
}
.surface-turquoise {
  background-color: var(--turquoise);
}
.surface-yellow {
  background-color: var(--yellow);
}
.surface-bolt {
  background-color: var(--bolt);
  color: var(--paper);
}
.surface-paper {
  background-color: var(--paper);
}

.grid-paper {
  background-image: linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size: 28px 28px;
}

.sticker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 8px 14px;
  border: var(--border);
  box-shadow: 4px 4px 0 var(--ink);
  font-family: var(--mono);
  font-weight: 700;
  font-size: 13px;
  line-height: 1.3;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  rotate: -2deg;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.chips li {
  padding: 4px 9px;
  background: var(--paper);
  border: 2px solid var(--ink);
  font-family: var(--mono);
  font-weight: 700;
  font-size: 12px;
  line-height: 1.4;
}
.chips--small li {
  font-size: 11.5px;
}

.arrow-list,
.milestone__highlights ul {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.arrow-list li,
.milestone__highlights li {
  position: relative;
  padding-left: 26px;
  line-height: 1.55;
}
.arrow-list li::before,
.milestone__highlights li::before {
  content: '→';
  position: absolute;
  left: 0;
  font-weight: 700;
}

/* ---------------- buttons ---------------- */

.btn-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 20px;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  padding: 13px 22px;
  background: var(--paper);
  color: var(--ink);
  border: var(--border);
  box-shadow: var(--shadow);
  font-family: var(--mono);
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition:
    translate 0.12s ease,
    box-shadow 0.12s ease;
}
.btn--ink {
  background: var(--ink);
  color: var(--paper);
  box-shadow:
    6px 6px 0 0 var(--lime),
    6px 6px 0 3px var(--ink);
}
.btn--sm {
  min-height: 40px;
  padding: 8px 14px;
  font-size: 12px;
  box-shadow: 4px 4px 0 var(--ink);
}
@media (hover: hover) {
  .btn:hover {
    translate: -2px -2px;
    box-shadow: 8px 8px 0 var(--ink);
  }
  .btn--ink:hover {
    box-shadow:
      8px 8px 0 0 var(--lime),
      8px 8px 0 3px var(--ink);
  }
  .btn--sm:hover {
    box-shadow: 6px 6px 0 var(--ink);
  }
}
.btn:active {
  translate: 4px 4px;
  box-shadow: 2px 2px 0 var(--ink);
}
.btn--ink:active {
  box-shadow:
    2px 2px 0 0 var(--lime),
    2px 2px 0 3px var(--ink);
}
.btn__chev {
  transition: rotate 0.2s ease;
}
[aria-expanded='true'] > .btn__chev {
  rotate: 180deg;
}

/* ---------------- header ---------------- */

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  height: var(--header-h);
  background: var(--paper);
  border-bottom: var(--border);
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 0 22px;
  background: var(--lime);
  border-right: var(--border);
  font-family: var(--mono);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
}
.brand__mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  background: var(--ink);
  color: var(--lime);
  font-family: var(--display);
  font-size: 13px;
  letter-spacing: 0;
}
.nav {
  display: flex;
  align-items: center;
  gap: 28px;
  padding-inline: 24px;
}
.nav__links {
  display: flex;
  gap: clamp(16px, 2.2vw, 30px);
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav__links a {
  display: block;
  padding: 6px 0;
  border-bottom: 3px solid transparent;
  font-family: var(--mono);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
}
.nav__links a:hover {
  border-color: var(--blue);
}
.nav__links a[aria-current] {
  border-color: var(--ink);
}
.nav__resume,
.nav__linkedin,
.mobile-menu__resume {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: var(--sky);
  border: var(--border);
  box-shadow: 3px 3px 0 var(--ink);
  font-family: var(--mono);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
}
.menu-toggle {
  display: none;
}
.mobile-menu[hidden] {
  display: none;
}

@media (max-width: 1000px) {
  .nav {
    display: none;
  }
  .menu-toggle {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 0 20px;
    background: var(--paper);
    color: var(--ink);
    border: 0;
    border-left: var(--border);
    font-family: var(--mono);
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
  }
  .menu-toggle[aria-expanded='true'] {
    background: var(--lime);
  }
  .mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 3px;
    background: var(--paper);
    border-bottom: var(--border);
    box-shadow: 0 8px 0 rgba(0, 0, 0, 0.12);
  }
  .mobile-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .mobile-menu li + li {
    border-top: 2px solid var(--ink);
  }
  .mobile-menu a:not(.mobile-menu__resume) {
    display: block;
    padding: 16px var(--gutter);
    font-family: var(--display);
    font-size: 1.25rem;
    text-transform: uppercase;
    text-decoration: none;
  }
  .mobile-menu a[aria-current] {
    background: var(--sky-soft);
  }
  .mobile-menu__resume {
    margin: 16px var(--gutter) 20px;
  }
}
@media (min-width: 1001px) {
  .mobile-menu {
    display: none !important;
  }
}

/* ---------------- hero ---------------- */

.hero {
  padding-block: clamp(36px, 6vw, 72px) clamp(56px, 8vw, 104px);
  background-color: var(--paper);
  border-bottom: var(--border);
  overflow-x: clip;
}
.hero__layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) clamp(240px, 27vw, 360px);
  gap: clamp(40px, 6vw, 88px);
  align-items: center;
}
.hero__title {
  font-size: clamp(3.5rem, 7.2vw, 6.75rem);
  line-height: 0.9;
  letter-spacing: -0.03em;
}
.hero__title .line {
  white-space: nowrap;
}
.hero__mark {
  display: inline-block;
  margin-top: 0.06em;
  padding: 0.02em 0.1em 0;
  background: var(--lime);
  color: inherit;
  border: var(--border);
  box-shadow: 0.06em 0.06em 0 var(--ink);
  rotate: -1.2deg;
}
.hero__lead {
  max-width: 28em;
  margin: clamp(22px, 3vw, 32px) 0 0;
  font-weight: 700;
  font-size: clamp(1.2rem, 1.9vw, 1.5rem);
  line-height: 1.35;
}
.hero__wins {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  max-width: 720px;
  margin: clamp(24px, 3vw, 32px) 0 0;
  padding: 0;
  list-style: none;
}
.hero__win {
  position: relative;
  border: var(--border);
  box-shadow: var(--shadow);
  transition:
    translate 0.12s ease,
    box-shadow 0.12s ease;
}
.hero__win[data-open] {
  z-index: 10;
  translate: -2px -2px;
  box-shadow: 8px 8px 0 var(--ink);
}
.hero__win-trigger {
  container-type: inline-size;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  grid-template-areas:
    'icon chevron'
    'value value'
    'label label';
  align-content: start;
  gap: 12px 8px;
  width: 100%;
  padding: 14px 16px 18px;
  background: none;
  border: 0;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: default;
}
.hero__win-trigger:focus-visible {
  outline-offset: 4px;
}
.hero__win-icon {
  grid-area: icon;
  display: inline-grid;
  place-items: center;
  justify-self: start;
  width: 36px;
  height: 36px;
  background: var(--paper);
  border: 2px solid var(--ink);
}
.hero__win-chevron {
  grid-area: chevron;
  align-self: center;
  transition: rotate 0.15s ease;
}
.hero__win[data-open] .hero__win-chevron {
  rotate: 180deg;
}
.hero__win-detail {
  position: absolute;
  top: calc(100% + 14px);
  left: -3px;
  width: 300px;
  margin: 0;
  padding: 14px 16px;
  background: var(--paper);
  border: var(--border);
  box-shadow: var(--shadow);
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.5;
  animation: hero-win-pop 0.14s ease-out;
}
.hero__win-money {
  padding: 0 0.2em;
  background: var(--lime);
  color: inherit;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: inset 0 0 0 1.5px var(--ink);
}
/* keeps the hover alive while the pointer crosses the gap to the card */
.hero__win-detail::before {
  content: '';
  position: absolute;
  inset: auto 0 100%;
  height: 17px;
}
.hero__win:nth-child(2) .hero__win-detail {
  left: 50%;
  transform: translateX(-50%);
}
.hero__win:last-child .hero__win-detail {
  left: auto;
  right: -3px;
}
@keyframes hero-win-pop {
  from {
    opacity: 0;
    translate: 0 -6px;
  }
}
.hero__win-value {
  grid-area: value;
  font-family: var(--display);
  font-size: clamp(1.5rem, 2.4vw, 2.5rem);
  /* sized to the tile so "$146M ARR" never overflows */
  font-size: clamp(1.5rem, 19cqi, 2.75rem);
  line-height: 1;
  letter-spacing: -0.02em;
  white-space: nowrap;
}
.hero__win-unit {
  font-size: 0.42em;
  letter-spacing: 0.02em;
}
.hero__win-label {
  grid-area: label;
  font-family: var(--mono);
  font-weight: 700;
  font-size: 13px;
  line-height: 1.3;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.hero__tagline {
  display: inline-block;
  margin: 30px 0 30px;
  padding: 6px 10px;
  background: var(--ink);
  color: var(--lime);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.status-dot {
  width: 10px;
  height: 10px;
  background: var(--ink);
  border-radius: 50%;
}
.hero__photo {
  position: relative;
  margin: 0 0 24px;
  rotate: 1.5deg;
}
.hero__photo img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  background: var(--sky);
  border: var(--border);
  box-shadow:
    10px 10px 0 0 var(--lime),
    10px 10px 0 3px var(--ink);
}
.hero__current {
  position: absolute;
  left: -20px;
  bottom: -18px;
  rotate: -4deg;
  white-space: nowrap;
}

/* ---------------- sections ---------------- */

.section {
  padding-block: clamp(64px, 9vw, 120px);
  border-bottom: var(--border);
  overflow-x: clip;
}
.section--paper {
  background-color: var(--paper);
}
.section--sky {
  background-color: var(--sky);
}
.section--ink {
  --focus: var(--lime);
  background: var(--ink);
  color: var(--paper);
}
.section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: clamp(32px, 5vw, 56px);
}
.section-label {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  font-family: var(--mono);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.section-label__num {
  display: inline-grid;
  place-items: center;
  min-width: 42px;
  height: 32px;
  padding: 0 6px;
  background: var(--coral);
  color: var(--ink);
  border: var(--border);
  font-family: var(--display);
  font-size: 14px;
  letter-spacing: 0;
  rotate: -3deg;
}
.section-intro {
  max-width: 38em;
  margin: calc(-1 * clamp(12px, 2vw, 24px)) 0 clamp(28px, 4vw, 40px);
  font-size: clamp(1.08rem, 1.4vw, 1.2rem);
  line-height: 1.6;
}

/* ---------------- how I think ---------------- */

.think__intro {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
  gap: clamp(32px, 5vw, 64px);
  align-items: start;
}
.prose p {
  max-width: 36em;
  margin: 0 0 1.1em;
  font-size: clamp(1.08rem, 1.4vw, 1.22rem);
  line-height: 1.65;
}
.prose p:last-child {
  margin-bottom: 0;
}
.principles {
  display: grid;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.principle {
  display: grid;
  grid-template-columns: 104px minmax(0, 1fr);
  align-items: center;
  gap: 16px;
  padding: 14px 18px;
  border: var(--border);
  box-shadow: 4px 4px 0 var(--ink);
}
.principle:nth-child(2) {
  margin-left: 22px;
}
.principle:nth-child(3) {
  margin-left: 44px;
}
.principle__label {
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.principle__text {
  font-weight: 500;
  font-size: 1.05rem;
  line-height: 1.4;
}

/* lens */
.lens {
  margin-top: clamp(48px, 7vw, 88px);
  background: var(--paper);
  border: var(--border);
  box-shadow: var(--shadow-lg);
}
.lens__intro {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 4px 24px;
  padding: 16px 24px;
  background: var(--lime);
  border-bottom: var(--border);
}
.lens__intro .mono-label {
  margin: 0;
  font-size: 13px;
}
.lens__hint {
  margin: 0;
  font-size: 0.98rem;
}
.lens__body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
}
.lens__list {
  margin: 0;
  padding: 0;
  list-style: none;
  border-right: var(--border);
}
.lens__item {
  padding: 18px 24px 20px;
  transition: background-color 0.15s ease;
}
.lens__item + .lens__item {
  border-top: 2px solid var(--ink);
}
.lens__item.is-active {
  background: var(--sky-soft);
  box-shadow: inset 6px 0 0 var(--blue);
}
.lens__btn {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  padding: 0;
  background: none;
  border: 0;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.lens__num {
  flex: none;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  background: var(--paper);
  border: var(--border);
  font-family: var(--display);
  font-size: 14px;
}
.lens__item.is-active .lens__num {
  background: var(--ink);
  color: var(--lime);
}
.lens__q {
  padding-top: 3px;
  font-weight: 700;
  font-size: 1.12rem;
  line-height: 1.3;
  text-decoration: underline 2px transparent;
  text-underline-offset: 4px;
}
.lens__btn:hover .lens__q {
  text-decoration-color: currentColor;
}
.lens__gist {
  margin: 6px 0 0 46px;
  font-family: var(--mono);
  font-size: 13px;
  line-height: 1.5;
  color: var(--muted);
}
.lens__detail {
  margin: 12px 0 0 46px;
  line-height: 1.6;
}
.lens__figure {
  display: grid;
  place-items: center;
  padding: clamp(16px, 3vw, 28px);
  background-image: linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size: 24px 24px;
}
.lens-svg {
  display: block;
  width: 100%;
  max-width: 560px;
  height: auto;
}
.lens-svg text {
  font-family: var(--mono);
  font-weight: 700;
  font-size: 14px;
  fill: var(--ink);
}
.lz-region {
  transition: opacity 0.25s ease;
}
.lz-region:not(.is-on) {
  opacity: 0.42;
}
.lz-fill {
  fill: var(--paper);
  stroke: var(--ink);
  stroke-width: 3;
  stroke-linejoin: round;
}
.lz-stroke {
  stroke: var(--ink);
  stroke-width: 4;
}
.lz-road {
  fill: var(--paper);
  stroke: var(--ink);
  stroke-width: 3;
  stroke-linejoin: round;
}
.lz-step {
  fill: var(--ink);
}
.lz-tag {
  fill: var(--paper);
  stroke: var(--ink);
  stroke-width: 2.5;
}
.lz-bridge {
  fill: none;
  stroke: var(--ink);
  stroke-width: 2.5;
  stroke-dasharray: 6 4;
}
.lz-pointer,
.lz-wire {
  stroke: var(--ink);
  stroke-width: 2.5;
}
.lz-system-box {
  fill: var(--paper);
  stroke: var(--ink);
  stroke-width: 3;
  stroke-dasharray: 9 6;
}
.lz-node {
  fill: var(--paper);
  stroke: var(--ink);
  stroke-width: 2.5;
}
.lens-svg .lz-node-text {
  font-size: 12px;
}
.lz-cause {
  fill: none;
  stroke: var(--ink);
  stroke-width: 2.5;
  stroke-dasharray: 5 5;
}
.lz-badge rect {
  fill: var(--ink);
}
.lens-svg .lz-badge text {
  fill: var(--lime);
  font-family: var(--display);
  font-weight: 400;
  font-size: 13px;
}
.is-on .lz-fill {
  fill: var(--lime);
}
.is-on .lz-road {
  fill: var(--sky);
}
.is-on .lz-tag--break {
  fill: var(--coral);
}
.is-on .lz-tag--test,
.is-on .lz-bridge {
  fill: var(--lime);
}
.is-on .lz-bridge {
  stroke-width: 3;
  stroke-dasharray: none;
}
.is-on .lz-system-box {
  fill: var(--sky-soft);
  stroke-dasharray: none;
}
.is-on .lz-node {
  fill: var(--sky);
}
.is-on .lz-cause {
  stroke-width: 4;
  stroke-dasharray: none;
}

/* ---------------- journey ---------------- */

.spans {
  margin: 0 0 clamp(48px, 6vw, 72px);
  padding: 18px clamp(16px, 3vw, 28px) 20px;
  background: var(--paper);
  border: var(--border);
  box-shadow: var(--shadow-lg);
}
.spans__caption {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 2px 16px;
  margin-bottom: 14px;
  font-size: 0.95rem;
}
.spans__caption .mono-label {
  margin: 0;
}
.spans__chart {
  --label-w: 124px;
  position: relative;
  padding: 26px 0 30px;
}
.spans__grid {
  position: absolute;
  inset: 0 0 0 var(--label-w);
  pointer-events: none;
}
.spans__year {
  position: absolute;
  top: 0;
  bottom: 0;
  padding-left: 6px;
  border-left: 1px dashed rgba(0, 0, 0, 0.35);
  font-family: var(--mono);
  font-weight: 700;
  font-size: 12px;
  line-height: 1;
}
.spans__year-short {
  display: none;
}
.spans__now {
  position: absolute;
  top: 18px;
  bottom: 22px;
  border-left: 2px solid var(--ink);
}
.spans__now span {
  position: absolute;
  bottom: -22px;
  right: -2px;
  padding: 1px 6px;
  background: var(--coral);
  border: 2px solid var(--ink);
  font-family: var(--mono);
  font-weight: 700;
  font-size: 10.5px;
  line-height: 1.3;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.spans__rows {
  position: relative;
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.spans__row {
  display: grid;
  grid-template-columns: var(--label-w) minmax(0, 1fr);
  align-items: center;
  min-height: 34px;
  color: inherit;
  text-decoration: none;
}
.spans__label {
  padding-right: 10px;
  font-family: var(--mono);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}
.spans__row:hover .spans__label {
  text-decoration: underline 2px;
  text-underline-offset: 3px;
}
.spans__track {
  position: relative;
  height: 26px;
}
.spans__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  min-width: 8px;
  display: flex;
  align-items: center;
  overflow: hidden;
  border: 2.5px solid var(--ink);
  box-shadow: 3px 3px 0 var(--ink);
  transition:
    translate 0.12s ease,
    box-shadow 0.12s ease;
}
.spans__bar.surface-paper {
  background: var(--paper) repeating-linear-gradient(-45deg, transparent 0 4px, rgba(0, 0, 0, 0.45) 4px 6px);
}
.spans__row:hover .spans__bar {
  translate: -1px -1px;
  box-shadow: 4px 4px 0 var(--ink);
}
.spans__bar-label {
  flex: none;
  padding: 0 7px;
  font-family: var(--mono);
  font-weight: 700;
  font-size: 11.5px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  white-space: nowrap;
}
.spans__row[data-inside='false'] .spans__bar-label {
  visibility: hidden;
}
.spans__title {
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  font-family: var(--mono);
  font-weight: 700;
  font-size: 11.5px;
  line-height: 1.15;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-wrap: balance;
}
.spans__title--after {
  right: 0;
  padding-left: 10px;
}
.spans__title--before {
  left: 0;
  padding-right: 10px;
  text-align: right;
}

.timeline {
  --tl-gap: clamp(28px, 4vw, 44px);
  display: grid;
  gap: var(--tl-gap);
  margin: 0;
  padding: 0;
  list-style: none;
}
.milestone {
  position: relative;
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: clamp(16px, 3vw, 32px);
  scroll-margin-top: calc(var(--header-h) + 24px);
}
.milestone::before {
  content: '';
  position: absolute;
  left: 34px;
  top: 72px;
  bottom: calc(-1 * var(--tl-gap));
  width: 4px;
  background: var(--ink);
}
.milestone:last-child::before {
  display: none;
}
.milestone__marker {
  position: sticky;
  top: calc(var(--header-h) + 20px);
  z-index: 1;
  align-self: start;
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
  border: var(--border);
  box-shadow: var(--shadow);
  font-family: var(--display);
  font-size: 28px;
}
.milestone__card {
  background: var(--paper);
  border: var(--border);
  box-shadow: var(--shadow-lg);
}
.milestone__head {
  padding: 22px 26px 18px;
  border-bottom: var(--border);
}
.milestone__theme {
  margin: 0 0 8px;
  color: var(--blue-ink);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.milestone__company {
  font-family: var(--display);
  font-weight: 400;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  line-height: 1;
  text-transform: uppercase;
}
.milestone__roles {
  display: grid;
  gap: 8px;
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
}
.milestone__roles li {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 4px 16px;
}
.milestone__role {
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.35;
}
.milestone__dates {
  padding: 3px 8px;
  background: var(--ink);
  color: var(--paper);
  font-weight: 700;
  font-size: 12.5px;
  white-space: nowrap;
}
.milestone__body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
  align-items: start;
  gap: 20px 32px;
  padding: 22px 26px;
}
.milestone__body p {
  margin: 0 0 14px;
  line-height: 1.6;
}
.milestone__body p:last-child {
  margin-bottom: 0;
}
.milestone__context {
  color: var(--muted);
}
.milestone__perspective {
  padding: 4px 0 4px 18px;
  border-left: 6px solid var(--ink);
}
.milestone__perspective p {
  font-weight: 700;
  font-size: clamp(1.15rem, 1.7vw, 1.35rem);
  line-height: 1.35;
}
.milestone__win {
  padding: 16px 18px 18px;
  background: var(--sky-soft);
  border: 2px solid var(--ink);
  box-shadow: inset 0 6px 0 var(--lime);
}
.milestone__win .arrow-list li {
  font-weight: 500;
}
.milestone__more {
  border-top: var(--border);
}
.milestone__more summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 26px;
  font-family: var(--mono);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  list-style: none;
  cursor: pointer;
}
.milestone__more summary::-webkit-details-marker {
  display: none;
}
.milestone__more summary:hover {
  background: var(--lime);
}
.milestone__plus {
  transition: rotate 0.2s ease;
}
.milestone__more[open] .milestone__plus {
  rotate: 45deg;
}
.milestone__more[open] summary {
  border-bottom: 2px solid var(--ink);
}
.milestone__highlights {
  padding: 18px 26px 4px;
}
.milestone__highlights:last-child {
  padding-bottom: 22px;
}
.milestone__highlights p {
  margin: 0 0 14px;
}
.milestone__highlights p.mono-label {
  margin-bottom: 8px;
}

/* ---------------- work ---------------- */

.cases {
  display: grid;
  gap: clamp(40px, 5vw, 60px);
}
.case {
  background: var(--paper);
  border: var(--border);
  box-shadow: var(--shadow-lg);
}
.case__band {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 20px;
  border-bottom: var(--border);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.case__letter {
  flex: none;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  background: var(--ink);
  color: var(--paper);
  font-family: var(--display);
  font-size: 22px;
}
.case__body {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.4fr);
}
.case__intro {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  padding: 28px;
  border-right: var(--border);
}
.case__title {
  font-family: var(--display);
  font-weight: 400;
  font-size: clamp(1.7rem, 3.2vw, 2.6rem);
  line-height: 0.98;
  text-transform: uppercase;
}
.case__summary {
  margin: 0;
  font-size: 1.12rem;
  line-height: 1.55;
}
.case__fields {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 24px 32px;
  margin: 0;
  padding: 28px;
}
.case__fields dt {
  margin: 0 0 6px;
  font-family: var(--mono);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.case__fields dd {
  margin: 0;
  line-height: 1.6;
}
.case__shows {
  grid-column: 1 / -1;
  padding: 16px 20px;
  background: var(--lime);
  border: var(--border);
}
.case__shows dd {
  font-weight: 500;
  font-size: 1.08rem;
}

.builder__body {
  padding: 28px;
}
.builder__title {
  margin-bottom: 24px;
}
.builder__cols {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border: var(--border);
}
.builder__col {
  padding: 20px 22px 24px;
}
.builder__col + .builder__col {
  border-left: var(--border);
}
.builder__col h4 {
  margin: 0 0 8px;
  font-size: 1.2rem;
  line-height: 1.3;
}
.builder__col p {
  margin: 0;
  line-height: 1.6;
}
.builder__col--now {
  background: var(--sky-soft);
}
.projects {
  display: grid;
  gap: 14px;
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
}
.projects__name {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  font-size: 1.05rem;
  text-decoration: underline 2px;
  text-underline-offset: 3px;
}
.projects__text {
  display: block;
  margin-top: 2px;
  font-size: 0.95rem;
  line-height: 1.5;
}
.toolkit {
  margin-top: 20px;
}
.builder__shows {
  max-width: 52em;
  margin: 22px 0 0;
  font-size: 1.05rem;
  line-height: 1.6;
}
.builder__shows .mono-label {
  display: inline;
  margin-right: 8px;
}

/* featured */
.featured {
  padding: clamp(22px, 4vw, 44px);
  background-color: var(--sky);
  border: var(--border);
  box-shadow: var(--shadow-lg);
}
.featured__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: clamp(20px, 3vw, 28px);
}
.featured__letter {
  background: var(--paper);
  color: var(--ink);
  border: var(--border);
}
.featured__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: clamp(28px, 4vw, 48px);
  align-items: center;
}
.featured__title {
  font-size: clamp(2rem, 3.7vw, 3.3rem);
  text-wrap: balance;
}
.featured__desc {
  max-width: 34em;
  margin: 20px 0 0;
  font-size: 1.15rem;
  line-height: 1.6;
}
.featured__insight {
  margin: 28px 0 0;
  padding: 16px 20px;
  background: var(--lime);
  border: var(--border);
  box-shadow: var(--shadow);
  rotate: -1deg;
}
.featured__insight p {
  margin: 0;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.4;
}
.featured__visual img,
.vd-illo {
  display: block;
  width: 100%;
  height: auto;
}
.featured__visual img {
  border: var(--border);
  box-shadow: var(--shadow);
}
.steps {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 28px;
  margin: clamp(32px, 4vw, 48px) 0 0;
  padding: 0;
  list-style: none;
}
.step {
  position: relative;
  padding: 18px;
  background: var(--paper);
  border: var(--border);
}
.step:last-child {
  border-style: dashed;
}
.step:not(:last-child)::after {
  content: '→';
  position: absolute;
  top: 22px;
  right: -23px;
  font-weight: 700;
  font-size: 18px;
}
.step__num {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  margin-bottom: 12px;
  background: var(--ink);
  color: var(--lime);
  font-family: var(--display);
}
.step__label {
  margin: 0 0 6px;
  font-family: var(--display);
  font-weight: 400;
  font-size: 1.05rem;
  line-height: 1.1;
  text-transform: uppercase;
}
.step p {
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.55;
}
.featured__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 22px;
  margin-top: 36px;
}
.thinking {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  margin-top: 28px;
  background: var(--paper);
  border: var(--border);
}
.thinking[hidden] {
  display: none;
}
.thinking__col {
  padding: 20px 22px 24px;
}
.thinking__col + .thinking__col {
  border-left: var(--border);
}
.thinking__col .mono-label {
  margin-bottom: 12px;
}
.featured__disclosure {
  margin: 26px 0 0;
  font-weight: 700;
  font-size: 12.5px;
  line-height: 1.5;
}

/* ---------------- reach ---------------- */

.reach {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(48px, 6vw, 88px);
  align-items: center;
}
.reach .h2 {
  max-width: 11em;
}
.reach__goal-line {
  color: var(--lime);
}
.reach__body {
  max-width: 32em;
  margin: 26px 0 0;
  color: #e9e9e9;
  font-size: clamp(1.1rem, 1.5vw, 1.25rem);
  line-height: 1.6;
}
.reach__standard {
  display: inline-block;
  margin: 28px 0 0;
  padding-top: 16px;
  border-top: 4px solid var(--lime);
  font-family: var(--display);
  font-size: clamp(1.1rem, 2vw, 1.45rem);
  line-height: 1.2;
  text-transform: uppercase;
}
.reach__figure {
  position: relative;
  margin: 0;
  padding: 36px clamp(20px, 3vw, 32px) 28px;
  background: #121212;
  border: 3px solid var(--paper);
  box-shadow: 10px 10px 0 var(--lime);
}
.reach__sticker {
  position: absolute;
  top: -20px;
  right: 16px;
  color: var(--ink);
  rotate: 2deg;
}
.reach__stats {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}
.reach__stats > div:last-child {
  text-align: right;
}
.reach__num {
  display: block;
  margin-bottom: 6px;
  color: var(--lime);
  font-family: var(--display);
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  line-height: 1;
}
.reach__num--goal {
  color: var(--paper);
}
.reach__stats .mono-label {
  margin: 0;
  color: #d4d4d4;
}
.reach__grid {
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  gap: 4px;
}
.reach__cell {
  position: relative;
  aspect-ratio: 1;
  border: 1.5px solid rgba(255, 255, 255, 0.42);
}
.reach__cell.is-filled {
  background: var(--lime);
  border-color: var(--lime);
}
.reach__partial {
  position: absolute;
  inset: 0 auto 0 0;
  background: var(--lime);
}
.reach__bar {
  position: relative;
  height: 18px;
  margin-top: 22px;
  border: 2px solid var(--paper);
}
.reach__bar-fill {
  position: absolute;
  inset: 0 auto 0 0;
  background: var(--lime);
}
.reach__scale {
  position: relative;
  height: 20px;
  margin-top: 8px;
  color: #e6e6e6;
  font-weight: 700;
  font-size: 12px;
}
.reach__scale span {
  position: absolute;
  top: 0;
  white-space: nowrap;
}
.reach__marker {
  translate: -0.45em 0;
}
.reach__scale-goal {
  right: 0;
}
.reach__caption {
  display: grid;
  gap: 8px;
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}
.reach__caption .mono-label {
  margin: 0;
  color: var(--lime);
}
.reach__definition {
  color: #d4d4d4;
  font-size: 0.92rem;
  line-height: 1.5;
}

/* ---------------- beyond ---------------- */

.beyond {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(20px, 3vw, 36px);
  margin: 0;
  padding: 0;
  list-style: none;
}
.beyond-card {
  display: flex;
  flex-direction: column;
  background: var(--paper);
  border: var(--border);
  box-shadow: var(--shadow-lg);
}
.beyond__art {
  position: relative;
  display: block;
  width: 100%;
  padding: 14px 14px 30px;
  color: inherit;
  border: 0;
  border-bottom: var(--border);
  font: inherit;
  cursor: pointer;
}
.art-svg {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}
.beyond__hint {
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 2px 8px;
  background: var(--paper);
  border: 2px solid var(--ink);
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.beyond__text {
  padding: 20px 22px 24px;
}
.beyond__title {
  margin-bottom: 8px;
  font-family: var(--display);
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1;
  text-transform: uppercase;
}
.beyond__line {
  margin: 0;
  font-weight: 500;
  font-size: 1.15rem;
  line-height: 1.4;
}
.beyond__note {
  margin: 10px 0 0;
  color: var(--muted);
  font-weight: 700;
  font-size: 12px;
}
.beyond__text .chips {
  margin-top: 12px;
}
.beyond__footer {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  align-items: end;
  gap: 24px 48px;
  margin-top: clamp(44px, 6vw, 72px);
}
.beyond__personal {
  max-width: 30em;
  margin: 0;
  padding-left: 20px;
  border-left: 8px solid var(--lime);
  font-weight: 500;
  font-size: clamp(1.2rem, 2.1vw, 1.65rem);
  line-height: 1.4;
}
.beyond__also {
  margin: 0;
  line-height: 1.6;
}

/* illustration motion — only on interaction, never looping */
.fly-x {
  transition: transform 0.7s linear;
}
.fly-hop {
  animation: hop 0.7s both;
}
.fly-hop--high {
  animation-name: hop-high;
}
@keyframes hop {
  0% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0.2, 0.6, 0.4, 1);
  }
  50% {
    transform: translateY(-48px);
    animation-timing-function: cubic-bezier(0.6, 0, 0.8, 0.4);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes hop-high {
  0% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0.2, 0.6, 0.4, 1);
  }
  50% {
    transform: translateY(-66px);
    animation-timing-function: cubic-bezier(0.6, 0, 0.8, 0.4);
  }
  100% {
    transform: translateY(0);
  }
}
.shuttle-wobble,
.piece-lift {
  transition: transform 0.25s ease;
  transform-box: fill-box;
  transform-origin: center;
}
.piece {
  transition: transform 0.5s cubic-bezier(0.3, 1.25, 0.5, 1);
}
@keyframes nudge {
  0%,
  100% {
    transform: translateY(0);
  }
  45% {
    transform: translateY(-16px);
  }
}
@media (hover: hover) {
  .beyond__art:hover .shuttle-wobble {
    transform: rotate(-14deg) translate(3px, -5px);
  }
  .beyond__art:hover .piece-lift {
    transform: translateY(-4px);
  }
  .beyond__art:hover .ball-nudge {
    animation: nudge 0.5s ease-out 1;
  }
}

/* ---------------- contact ---------------- */

.contact {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
  border-bottom: var(--border);
}
.contact__left {
  padding: clamp(56px, 8vw, 112px) clamp(24px, 4vw, 56px) clamp(56px, 8vw, 104px) var(--edge);
  background-color: var(--sky);
}
.contact__title {
  max-width: 12em;
}
.contact__body {
  max-width: 32em;
  margin: 24px 0 0;
  font-size: 1.15rem;
  line-height: 1.6;
}
.contact__email {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 20px;
  margin-top: 34px;
}
.contact__email-link {
  font-family: var(--display);
  font-size: clamp(1.1rem, 2.4vw, 1.8rem);
  line-height: 1.2;
  text-decoration: underline 4px;
  text-underline-offset: 6px;
  overflow-wrap: anywhere;
}
.contact__right {
  --focus: var(--ink);
  display: flex;
  align-items: center;
  padding: clamp(40px, 6vw, 80px) var(--edge) clamp(40px, 6vw, 80px) clamp(24px, 4vw, 56px);
  background: var(--blue);
  border-left: var(--border);
}
.contact__rows {
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: var(--border);
}
.contact__row {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  grid-template-areas:
    'icon label arrow'
    'icon detail arrow';
  align-items: center;
  column-gap: 16px;
  padding: 20px 0;
  border-bottom: var(--border);
  text-decoration: none;
}
.contact__icon {
  grid-area: icon;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  background: var(--paper);
  border: var(--border);
}
.contact__label {
  grid-area: label;
  font-family: var(--display);
  font-size: 1.25rem;
  line-height: 1.1;
  text-transform: uppercase;
}
.contact__detail {
  grid-area: detail;
  font-family: var(--mono);
  font-weight: 700;
  font-size: 13px;
  overflow-wrap: anywhere;
}
.contact__arrow {
  grid-area: arrow;
  transition: translate 0.15s ease;
}
@media (hover: hover) {
  .contact__row:hover .contact__arrow {
    translate: 3px -3px;
  }
  .contact__row:hover .contact__label {
    text-decoration: underline 3px;
    text-underline-offset: 4px;
  }
}

/* ---------------- footer ---------------- */

.footer {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  min-height: 64px;
}
.footer .brand {
  padding-block: 14px;
}
.footer__copy {
  align-self: center;
  margin: 0;
  padding: 12px 20px;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.footer__top {
  align-self: center;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
}
.footer__top:hover {
  text-decoration: underline 2px;
  text-underline-offset: 4px;
}
.footer__links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.footer__for {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 10px 4px;
  padding: 8px 14px;
  background: var(--paper);
  border: var(--border);
  box-shadow: 3px 3px 0 var(--ink);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  transition:
    translate 0.12s ease,
    box-shadow 0.12s ease;
}
@media (hover: hover) {
  .footer__for:hover {
    translate: -1px -1px;
    background: var(--lime);
    box-shadow: 4px 4px 0 var(--ink);
  }
}

/* ---------------- for Bolt.new (#bolt) ---------------- */

.bolt-hero {
  padding-block: clamp(28px, 5vw, 56px) clamp(56px, 8vw, 96px);
  background-color: var(--paper);
  border-bottom: var(--border);
  overflow-x: clip;
}
.bolt-hero__top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px 24px;
}
.bolt-back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  border-bottom: 3px solid var(--ink);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
}
.bolt-back:hover {
  border-color: var(--blue);
}
.bolt-hero__sticker {
  rotate: 2deg;
}
.bolt-hero__intro {
  display: grid;
  grid-template-columns: minmax(0, 1fr) clamp(280px, 30vw, 380px);
  gap: clamp(32px, 5vw, 64px);
  align-items: end;
}
.bolt-hero__title {
  margin-top: clamp(28px, 4vw, 48px);
  font-size: clamp(3.2rem, 7vw, 6.5rem);
  line-height: 0.9;
  letter-spacing: -0.03em;
}
.bolt-hero__title:focus {
  outline: none;
}
.bolt-hero__lede {
  max-width: 36em;
  margin: clamp(24px, 3vw, 36px) 0 0;
  font-size: clamp(1.1rem, 1.6vw, 1.3rem);
  line-height: 1.6;
}
.bolt-hero__cta {
  margin-top: clamp(24px, 3vw, 32px);
}
.bolt-builds {
  margin-top: clamp(28px, 4vw, 48px);
  padding: 18px 22px 20px;
  background: var(--sky-soft);
  border: var(--border);
  box-shadow: var(--shadow);
}
.bolt-builds__label {
  margin-bottom: 4px;
}
.bolt-builds__list {
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
}
.bolt-builds__item {
  display: grid;
  gap: 4px;
  padding-block: 14px;
}
.bolt-builds__item + .bolt-builds__item {
  border-top: 2px dashed var(--ink);
}
.bolt-builds__item:last-child {
  padding-bottom: 0;
}
.bolt-builds__name {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  justify-self: start;
  font-family: var(--display);
  font-size: 1.35rem;
  line-height: 1.1;
  text-transform: uppercase;
  text-decoration: underline 3px;
  text-underline-offset: 4px;
}
a.bolt-builds__name:hover {
  text-decoration-color: var(--blue);
}
.bolt-builds__text {
  font-size: 0.95rem;
  line-height: 1.5;
}
.bolt-builds__host {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--blue-ink);
}

.bolt-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  margin: clamp(32px, 4vw, 48px) 0 0;
  padding: 0;
  list-style: none;
}
.bolt-stat {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px 20px 20px;
  border: var(--border);
  box-shadow: var(--shadow);
}
.bolt-stat__value {
  font-family: var(--display);
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1;
  letter-spacing: -0.02em;
}
.bolt-stat__label {
  font-weight: 500;
  font-size: 0.98rem;
  line-height: 1.4;
}

.bolt-proto .featured__desc {
  margin-top: 0;
}

.plan {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.plan__step {
  position: relative;
  padding: 22px 22px 24px;
  background: var(--paper);
  border: var(--border);
  box-shadow: var(--shadow);
}
.plan__step:not(:last-child)::after {
  content: '→';
  position: absolute;
  top: 22px;
  right: -24px;
  font-weight: 700;
  font-size: 18px;
}
.plan__when {
  display: inline-block;
  padding: 3px 8px;
  border: 2px solid var(--ink);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.plan__title {
  margin: 14px 0 8px;
  font-family: var(--display);
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.1;
  text-transform: uppercase;
}
.plan__step p {
  margin: 0;
  line-height: 1.55;
}
.plan + .featured__disclosure {
  margin-top: clamp(28px, 4vw, 40px);
}

/* the problem (#bolt-problem) — dark "slide" */

.section--ink .section-intro {
  color: #e9e9e9;
}
.section--ink .featured__disclosure {
  color: #d4d4d4;
}
.flow {
  margin: 0;
  padding: clamp(18px, 3vw, 28px);
  background: #121212;
  border: 3px solid var(--paper);
  box-shadow: 10px 10px 0 var(--coral);
}
.flow__label {
  margin-bottom: 16px;
  color: var(--lime);
}
.flow__steps {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 28px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.flow__step {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 14px;
  background: var(--paper);
  color: var(--ink);
}
.flow__step:not(:last-child)::after {
  content: '→';
  position: absolute;
  top: 50%;
  right: -22px;
  translate: 0 -50%;
  color: var(--paper);
  font-weight: 700;
  font-size: 18px;
}
.flow__step--cost {
  background: var(--coral);
}
.flow__num {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  background: var(--ink);
  color: var(--paper);
  font-weight: 700;
  font-size: 13px;
}
.flow__text {
  font-weight: 700;
  line-height: 1.3;
}
.flow__tag {
  padding: 2px 7px;
  background: var(--ink);
  color: var(--coral);
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.flow__source {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 18px;
  color: #d4d4d4;
  font-weight: 700;
  font-size: 12px;
}
.flow__source:hover {
  color: var(--lime);
}

.problems {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(20px, 3vw, 32px);
  margin: clamp(40px, 5vw, 56px) 0 0;
  padding: 0;
  list-style: none;
}
.problem {
  display: flex;
  flex-direction: column;
  background: var(--paper);
  color: var(--ink);
  box-shadow: 8px 8px 0 var(--accent, var(--lime));
}
.problem__band {
  padding: 16px 18px 18px;
  border: 3px solid var(--paper);
  border-bottom: var(--border);
}
.problem__num {
  display: inline-block;
  padding: 2px 8px;
  background: var(--ink);
  color: var(--paper);
  font-weight: 700;
  font-size: 12px;
}
.problem__ask {
  margin-top: 12px;
  font-family: var(--display);
  font-weight: 400;
  font-size: clamp(1.6rem, 2.6vw, 2.2rem);
  line-height: 1;
  text-transform: uppercase;
}
.problem__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 18px 18px 20px;
}
.problem__text {
  margin: 0 0 16px;
  font-size: 1.05rem;
  line-height: 1.55;
}
.problem__note {
  margin: auto 0 0;
  padding-top: 14px;
  border-top: 2px dashed var(--ink);
  font-size: 0.95rem;
  line-height: 1.5;
}
.problem__note .mono {
  margin-right: 4px;
  padding: 1px 6px;
  background: var(--accent, var(--lime));
  border: 2px solid var(--ink);
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.also {
  margin-top: clamp(40px, 5vw, 56px);
}
.also__label {
  color: var(--lime);
}
.also__list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.also__item {
  padding: 16px 18px;
  border: 2px dashed rgba(255, 255, 255, 0.55);
}
.also__title {
  margin-bottom: 6px;
  font-family: var(--display);
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.1;
  text-transform: uppercase;
}
.also__item p {
  margin: 0;
  color: #d4d4d4;
  line-height: 1.5;
}

/* the proposal (#bolt-proposal) */

.paths {
  margin: 0;
  padding: clamp(20px, 3vw, 32px);
  background: var(--paper);
  border: var(--border);
  box-shadow: var(--shadow-lg);
}
.paths__start {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.paths__start::after {
  content: '';
  width: 3px;
  height: 18px;
  background: var(--ink);
}
.paths__node {
  padding: 8px 14px;
  background: var(--ink);
  color: var(--paper);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.paths__down {
  margin: 6px 0;
}
.paths__decision {
  padding: 12px 20px;
  background: var(--yellow);
  border: var(--border);
  box-shadow: 4px 4px 0 var(--ink);
  font-family: var(--display);
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  line-height: 1.1;
  text-transform: uppercase;
  rotate: -1deg;
}
.paths__lanes {
  --gap: clamp(20px, 3vw, 36px);
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--gap);
  margin-top: 18px;
}
/* bracket from the decision down into both lanes */
.paths__lanes::before {
  content: '';
  position: absolute;
  top: -18px;
  left: calc(25% - var(--gap) / 4);
  right: calc(25% - var(--gap) / 4);
  height: 18px;
  border: 3px solid var(--ink);
  border-bottom: 0;
}
.lane {
  display: flex;
  flex-direction: column;
  background: var(--paper);
  border: var(--border);
}
.lane__head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 12px;
  padding: 12px 16px;
  border-bottom: var(--border);
}
.lane__when {
  font-family: var(--display);
  font-size: 1.15rem;
  line-height: 1.1;
  text-transform: uppercase;
}
.lane__tag {
  padding: 3px 8px;
  background: var(--ink);
  color: var(--paper);
  font-weight: 700;
  font-size: 11.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.lane__steps {
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: lane;
}
.lane__steps li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  font-weight: 500;
  line-height: 1.4;
  counter-increment: lane;
}
.lane__steps li + li {
  border-top: 2px dashed var(--ink);
}
.lane__steps li::before {
  content: counter(lane);
  display: inline-grid;
  flex: none;
  place-items: center;
  width: 22px;
  height: 22px;
  background: var(--ink);
  color: var(--paper);
  font-family: var(--mono);
  font-weight: 700;
  font-size: 12px;
}
.paths__note {
  margin: 18px 0 0;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 0.04em;
  text-align: center;
}

.proposal__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(20px, 3vw, 32px);
  margin-top: clamp(28px, 4vw, 40px);
}
.proposal__card {
  padding: clamp(18px, 3vw, 26px);
  background: var(--paper);
  border: var(--border);
  box-shadow: var(--shadow);
}
.proposal__card > .mono-label {
  margin-bottom: 14px;
}
.tenets {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.tenets li {
  padding-left: 12px;
  border-left: 4px solid var(--ink);
  line-height: 1.5;
}
.north-star {
  padding: 14px 16px 16px;
  background: var(--lime);
  border: var(--border);
}
.north-star__label {
  display: inline-block;
  padding: 2px 7px;
  background: var(--ink);
  color: var(--lime);
  font-weight: 700;
  font-size: 11.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.north-star__name {
  margin: 10px 0 6px;
  font-family: var(--display);
  font-size: clamp(1.25rem, 2.2vw, 1.6rem);
  line-height: 1.05;
  text-transform: uppercase;
}
.north-star__text {
  margin: 0;
  line-height: 1.5;
}
.gates__label {
  margin: 20px 0 10px;
}
.gates {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px 18px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.gates li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-weight: 500;
  line-height: 1.4;
}
.gates svg {
  flex: none;
  margin-top: 2px;
}
.prd-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: clamp(28px, 4vw, 40px);
  padding: 6px 0;
  border-bottom: 3px solid var(--ink);
  font-weight: 700;
  font-size: 13px;
  line-height: 1.4;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
}
.prd-link:hover {
  border-color: var(--blue-ink);
}

/* prioritization (#bolt-priority, and the PRD's #prd-priority) */

.options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(20px, 3vw, 32px);
  align-items: start;
}
.option {
  background: var(--paper);
  color: var(--ink);
  border: var(--border);
  box-shadow: var(--shadow);
}
.section--ink .option {
  border-color: var(--paper);
  box-shadow: 8px 8px 0 var(--accent, var(--lime));
}
.option__head {
  padding: 14px 18px 16px;
  border-bottom: var(--border);
}
.option .option__tag {
  display: inline-block;
  margin: 0;
  padding: 2px 8px;
  background: var(--ink);
  color: var(--paper);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.option__title {
  margin-top: 10px;
  font-family: var(--display);
  font-weight: 400;
  font-size: clamp(1.4rem, 2.4vw, 1.9rem);
  line-height: 1;
  text-transform: uppercase;
}
.option__body {
  margin: 0;
  padding: 16px 18px 18px;
}
.option .option__text {
  margin: 0 0 14px;
  line-height: 1.55;
}
.option__points {
  display: grid;
  gap: 12px;
}
.option__points div {
  display: grid;
  grid-template-columns: 7.5rem minmax(0, 1fr);
  gap: 12px;
}
.option__points dt {
  font-weight: 700;
  font-size: 11.5px;
  line-height: 1.7;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.option__points dd {
  margin: 0;
  line-height: 1.5;
}

.phases__label {
  margin: clamp(40px, 5vw, 56px) 0 14px;
}
.section--ink .phases__label {
  color: var(--lime);
}
.phases {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(20px, 3vw, 32px);
  margin: 0;
  padding: 0;
  list-style: none;
}
.section--ink .lane {
  color: var(--ink);
  border-color: var(--paper);
}
.lane__meta {
  display: grid;
  gap: 6px;
  margin: auto 0 0;
  padding: 12px 16px 14px;
  background: var(--sky-soft);
  border-top: var(--border);
}
.lane__meta div {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 2px 10px;
}
.lane__meta dt {
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.lane__meta dd {
  margin: 0;
  font-weight: 500;
}
.phases__note {
  margin: 18px 0 0;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 0.04em;
}
.section--ink .phases__note {
  color: #d4d4d4;
}
.change-mind {
  max-width: 44em;
  margin-top: clamp(28px, 4vw, 40px);
  padding: 16px 18px;
  border: 2px dashed rgba(255, 255, 255, 0.55);
}
.change-mind .mono-label {
  color: var(--lime);
}
.change-mind p:last-child {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.55;
}
.section--ink .prd-link {
  border-color: var(--lime);
}
.section--ink .prd-link:hover {
  border-color: var(--paper);
}

/* building on Bolt (#bolt-prototype) */

.bolt-proto .featured__grid {
  align-items: start;
}
.try__label {
  margin: 24px 0 10px;
}
.try {
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: try;
}
.try li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  line-height: 1.45;
  counter-increment: try;
}
.try li::before {
  content: counter(try);
  display: inline-grid;
  flex: none;
  place-items: center;
  width: 26px;
  height: 26px;
  background: var(--ink);
  color: var(--lime);
  font-family: var(--display);
  font-size: 13px;
}
.covers {
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.covers li {
  display: flex;
  align-items: baseline;
  gap: 10px;
  line-height: 1.45;
}
.covers__id {
  flex: none;
  min-width: 44px;
  padding: 1px 6px;
  background: var(--lime);
  border: 2px solid var(--ink);
  font-weight: 700;
  font-size: 12px;
  text-align: center;
}

/* ---------------- PRD (#bolt-prd) ---------------- */

.prd-hero {
  padding-block: clamp(28px, 5vw, 56px) clamp(40px, 6vw, 72px);
  background-color: var(--paper);
  border-bottom: var(--border);
  overflow-x: clip;
}
.prd-hero__kicker {
  margin: clamp(28px, 4vw, 48px) 0 0;
  color: var(--blue-ink);
}
.prd-hero__title {
  max-width: 14em;
  margin-top: 10px;
  font-size: clamp(2.6rem, 6.4vw, 5.6rem);
  text-wrap: balance;
}
.prd-hero__title:focus {
  outline: none;
}
.prd-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: clamp(24px, 3vw, 32px) 0 0;
}
.prd-meta div {
  padding: 8px 12px;
  background: var(--paper);
  border: var(--border);
}
.prd-meta dt {
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.prd-meta dd {
  margin: 2px 0 0;
  font-weight: 700;
}
.prd-hero .featured__actions {
  margin-top: 28px;
}

.prd-body {
  padding-block: clamp(40px, 6vw, 80px);
  border-bottom: var(--border);
}
.prd-layout {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: clamp(32px, 5vw, 64px);
  align-items: start;
}
.prd-toc {
  position: sticky;
  top: calc(var(--header-h) + 24px);
}
.prd-toc__list {
  display: grid;
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.prd-toc__list a {
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 6px 10px;
  border: 2px solid transparent;
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1.3;
  text-decoration: none;
}
.prd-toc__list a .mono {
  font-weight: 700;
  font-size: 12px;
}
.prd-toc__list a:hover {
  border-color: var(--ink);
}
.prd-toc__list a[aria-current] {
  background: var(--lime);
  border-color: var(--ink);
  font-weight: 700;
}

.prd-doc {
  max-width: 52rem;
  min-width: 0;
}
.prd-doc p {
  max-width: 42em;
  margin: 0 0 1em;
  line-height: 1.65;
}
.prd-doc code {
  padding: 1px 5px;
  background: var(--sky-soft);
  border: 1px solid var(--ink);
  font-family: var(--mono);
  font-size: 0.88em;
}
.prd-part + .prd-part {
  margin-top: clamp(48px, 6vw, 72px);
  padding-top: clamp(32px, 4vw, 44px);
  border-top: var(--border);
}
.prd-part__title {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  font-family: var(--display);
  font-weight: 400;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  line-height: 1;
  text-transform: uppercase;
}
.prd-part__num {
  display: inline-grid;
  flex: none;
  place-items: center;
  min-width: 44px;
  height: 34px;
  padding: 0 6px;
  background: var(--coral);
  border: var(--border);
  font-size: 14px;
  rotate: -3deg;
}
.prd-h3 {
  margin: 32px 0 12px;
  font-family: var(--display);
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.1;
  text-transform: uppercase;
}
.prd-h3--first {
  margin-top: 0;
}
.prd-doc .prd-lead {
  font-weight: 500;
  font-size: clamp(1.2rem, 1.8vw, 1.45rem);
  line-height: 1.5;
}
.prd-doc .prd-aside {
  padding: 12px 16px;
  background: var(--sky-soft);
  border-left: 6px solid var(--blue);
}
.prd-source {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 24px;
  color: var(--blue-ink);
  font-weight: 700;
  font-size: 12.5px;
}
.prd-cols {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 28px;
}

.prd-principles {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.prd-principles li {
  padding: 14px 16px;
  background: var(--paper);
  border: var(--border);
}
.prd-principles__title {
  margin-bottom: 6px;
  font-family: var(--display);
  font-weight: 400;
  font-size: 1.05rem;
  line-height: 1.1;
  text-transform: uppercase;
}
.prd-doc .prd-principles p {
  margin: 0;
  line-height: 1.5;
}

.prd-problems {
  display: grid;
  gap: 18px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.prd-problem {
  padding: 18px 20px 20px;
  background: var(--paper);
  border: var(--border);
  box-shadow: var(--shadow);
}
.prd-problem__num {
  margin-bottom: 4px;
  color: var(--blue-ink);
}
.prd-problem__title {
  margin-bottom: 10px;
  font-family: var(--display);
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.1;
  text-transform: uppercase;
}
.prd-notes {
  display: grid;
  gap: 8px;
  margin: 14px 0 0;
}
.prd-note {
  display: grid;
  grid-template-columns: 11.5rem minmax(0, 1fr);
  gap: 12px;
  padding: 10px 12px;
  border: 2px solid var(--ink);
}
.prd-note dt {
  font-weight: 700;
  font-size: 11.5px;
  line-height: 1.6;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.prd-note dd {
  margin: 0;
  line-height: 1.5;
}
.prd-note--observed {
  background: var(--sky-soft);
}
.prd-note--hypothesis {
  background: #f4ffd0;
}
.prd-note--unverified {
  background: #fff0ef;
  border-style: dashed;
}
.prd-note--requirement {
  background: #fff6d6;
}

.prd-callout {
  margin-bottom: 8px;
  padding: 18px 20px 20px;
  border: var(--border);
  box-shadow: var(--shadow);
}
.prd-doc .prd-callout__title {
  margin-bottom: 10px;
  font-family: var(--display);
  font-size: clamp(1.4rem, 2.6vw, 2rem);
  line-height: 1.05;
  text-transform: uppercase;
}
.prd-doc .prd-callout p:last-child {
  margin-bottom: 0;
}
.prd-callout__note {
  font-size: 0.95rem;
}

.prd-table,
.prd-segments {
  width: 100%;
  margin: 4px 0 8px;
  background: var(--paper);
  border: var(--border);
  border-collapse: collapse;
  font-size: 0.97rem;
  line-height: 1.45;
}
.prd-table thead th,
.prd-segments thead th {
  padding: 10px 12px;
  background: var(--ink);
  color: var(--paper);
  font-family: var(--mono);
  font-weight: 700;
  font-size: 11.5px;
  letter-spacing: 0.08em;
  text-align: left;
  text-transform: uppercase;
}
.prd-table tbody th,
.prd-table td,
.prd-segments tbody th,
.prd-segments td {
  padding: 11px 12px;
  border-top: 2px solid var(--ink);
  text-align: left;
  vertical-align: top;
}
.prd-table tbody th,
.prd-segments tbody th {
  font-weight: 700;
}
.prd-table tbody :is(th, td) + :is(th, td),
.prd-segments tbody :is(th, td) + :is(th, td) {
  border-left: 2px solid var(--ink);
}
.prd-table tbody tr:nth-child(even),
.prd-segments tbody tr:nth-child(even) {
  background: #f6f6f6;
}
/* stays a two-column table on phones; .prd-table's card layout doesn't apply */
.prd-segments {
  max-width: 480px;
}
.prd-segments :is(th, td):last-child {
  width: 1%;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
}
.prd-box {
  display: inline-grid;
  place-items: center;
  width: 24px;
  height: 24px;
  vertical-align: middle;
  background: var(--paper);
  border: 2px solid var(--ink);
}
.prd-box--yes {
  background: var(--lime);
}
.prd-id {
  font-weight: 700;
  font-size: 13px;
}
.prd-priority {
  display: inline-block;
  padding: 2px 8px;
  border: 2px solid var(--ink);
  font-weight: 700;
  font-size: 12px;
}
.prd-priority--p0 {
  background: var(--coral);
}
.prd-priority--p1 {
  background: var(--sky);
}
.prd-priority--p2 {
  background: var(--paper);
}
.prd-phase--1 {
  background: var(--sky);
}
.prd-phase--2 {
  background: var(--lime);
}
.prd-doc .options {
  margin: 24px 0 8px;
}
.prd-doc .option__points div {
  grid-template-columns: minmax(0, 1fr);
  gap: 2px;
}
.prd-doc .phases {
  margin-bottom: 20px;
}
.prd-doc .prd-aside--mind {
  background: var(--paper);
  border: 2px dashed var(--ink);
  border-left: 6px solid var(--coral);
}

.prd-audience {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}
.prd-audience__card {
  padding: 18px 20px 20px;
  background: var(--paper);
  border: var(--border);
  box-shadow: var(--shadow);
}
.prd-doc .prd-audience__job-label {
  margin: 0 0 6px;
  font-weight: 700;
  font-size: 11.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.prd-quote {
  margin: 0;
  padding: 12px 16px;
  background: var(--lime);
  border: var(--border);
  rotate: -0.6deg;
}
.prd-doc .prd-quote p {
  margin: 0;
  font-weight: 700;
  line-height: 1.45;
}
.prd-quote--big {
  display: inline-block;
  margin: 4px 0 20px;
  box-shadow: var(--shadow);
}
.prd-doc .prd-quote--big p {
  font-size: 1.25rem;
}

.prd-scope {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  align-items: start;
}
.prd-scope__col {
  background: var(--paper);
  border: var(--border);
}
.prd-scope__head {
  padding: 10px 16px;
  border-bottom: var(--border);
  font-family: var(--display);
  font-weight: 400;
  font-size: 1.1rem;
  text-transform: uppercase;
}
.prd-scope__col .prd-checks {
  margin: 0;
  padding: 14px 16px 16px;
}
.prd-checks {
  display: grid;
  gap: 8px;
  margin: 0 0 16px;
  padding: 0;
  list-style: none;
}
.prd-checks li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  line-height: 1.45;
}
.prd-checks svg {
  flex: none;
  margin-top: 3px;
}

.prd-assume__label {
  margin-bottom: 10px;
  color: var(--blue-ink);
}
.prd-assume {
  margin: 0 0 16px;
  padding: 0;
  background: var(--paper);
  border: var(--border);
  list-style: none;
}
.prd-assume li {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 14px;
  padding: 14px 16px;
}
.prd-assume li + li {
  border-top: 2px dashed var(--ink);
}
.prd-assume__id {
  display: inline-grid;
  place-items: center;
  min-width: 36px;
  height: 26px;
  padding: 0 6px;
  background: var(--yellow);
  border: 2px solid var(--ink);
  font-weight: 700;
  font-size: 12px;
}
.prd-assume__title {
  margin-bottom: 4px;
  font-family: var(--display);
  font-weight: 400;
  font-size: 1.05rem;
  line-height: 1.15;
  text-transform: uppercase;
}
.prd-doc .prd-assume p {
  margin: 0;
  line-height: 1.55;
}

.prd-questions {
  margin: 0;
  padding: 0;
  background: var(--paper);
  border: var(--border);
  list-style: none;
  counter-reset: q;
}
.prd-questions li {
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr);
  gap: 10px;
  padding: 10px 14px;
  line-height: 1.45;
  counter-increment: q;
}
.prd-questions li + li {
  border-top: 2px dashed var(--ink);
}
.prd-questions li::before {
  content: counter(q, decimal-leading-zero);
  padding-top: 1px;
  color: var(--blue-ink);
  font-family: var(--mono);
  font-weight: 700;
  font-size: 13px;
}

.prd-tasks {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 18px;
  padding: 0;
  list-style: none;
  counter-reset: task;
}
.prd-tasks li {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  background: var(--paper);
  border: 2px solid var(--ink);
  font-weight: 500;
  counter-increment: task;
}
.prd-tasks li::before {
  content: counter(task);
  font-family: var(--mono);
  font-weight: 700;
  font-size: 12px;
}

.prd-rollout {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  margin: 0 0 18px;
  padding: 0;
  list-style: none;
  counter-reset: roll;
}
.prd-rollout li {
  position: relative;
  padding: 12px 14px;
  background: var(--paper);
  border: var(--border);
  font-weight: 700;
  line-height: 1.35;
  counter-increment: roll;
}
.prd-rollout li::before {
  content: counter(roll);
  display: block;
  margin-bottom: 6px;
  font-family: var(--display);
  font-size: 1.4rem;
  line-height: 1;
}
.prd-rollout li:not(:last-child)::after {
  content: '→';
  position: absolute;
  top: 50%;
  right: -19px;
  translate: 0 -50%;
  font-weight: 700;
}

.prd-end {
  margin-top: clamp(48px, 6vw, 72px);
  padding: clamp(20px, 3vw, 32px);
  background: var(--sky);
  border: var(--border);
  box-shadow: var(--shadow-lg);
}
.prd-doc .prd-end__title {
  margin: 0;
  font-family: var(--display);
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  line-height: 1;
  text-transform: uppercase;
}
.prd-end .featured__actions {
  margin-top: 24px;
}

/* ---------------- responsive ---------------- */

@media (max-width: 1100px) {
  .flow__steps {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .flow__step:nth-child(3)::after {
    display: none;
  }
}

@media (max-width: 900px) {
  .problems,
  .also__list,
  .proposal__grid,
  .options,
  .prd-layout {
    grid-template-columns: minmax(0, 1fr);
  }
  .flow__steps {
    grid-template-columns: minmax(0, 1fr);
    gap: 22px;
  }
  .flow__step {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
  .flow__step:nth-child(n)::after {
    display: block;
    content: '↓';
    top: auto;
    right: auto;
    left: 50%;
    bottom: -22px;
    translate: -50% 0;
  }
  .flow__step:last-child::after {
    display: none;
  }
  .prd-toc {
    position: static;
    padding: 14px 16px;
    background: var(--sky-soft);
    border: var(--border);
  }
  .prd-toc__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .paths__lanes,
  .phases,
  .prd-principles,
  .prd-audience,
  .prd-scope,
  .prd-cols {
    grid-template-columns: minmax(0, 1fr);
  }
  .paths__lanes::before {
    display: none;
  }
  .prd-note,
  .option__points div {
    grid-template-columns: minmax(0, 1fr);
    gap: 2px;
  }
  .prd-rollout {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .prd-rollout li::after {
    display: none;
  }
  /* tables become one labelled card per row */
  .prd-table,
  .prd-table tbody,
  .prd-table tr,
  .prd-table tbody th,
  .prd-table td {
    display: block;
  }
  .prd-table {
    background: none;
    border: 0;
  }
  .prd-table thead {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }
  .prd-table tr {
    display: flex;
    flex-direction: column;
    margin-bottom: 14px;
    border: var(--border);
  }
  .prd-table tbody tr:nth-child(n) {
    background: var(--paper);
  }
  .prd-table tbody th,
  .prd-table td {
    padding: 8px 14px;
    border-top: 0;
  }
  .prd-table tbody :is(th, td) + :is(th, td) {
    border-left: 0;
    border-top: 2px dashed var(--ink);
  }
  .prd-table tbody th {
    order: -1;
    border-top: 0;
    border-bottom: var(--border);
    background: var(--sky-soft);
  }
  .prd-table [data-label]::before {
    content: attr(data-label);
    display: block;
    margin-bottom: 2px;
    font-family: var(--mono);
    font-weight: 700;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
}


@media (max-width: 1100px) {
  .steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .step:nth-child(2)::after {
    display: none;
  }
}

@media (max-width: 900px) {
  .hero__layout,
  .think__intro,
  .lens__body,
  .case__body,
  .featured__grid,
  .reach,
  .contact,
  .beyond__footer,
  .thinking,
  .plan {
    grid-template-columns: minmax(0, 1fr);
  }
  .plan__step:not(:last-child)::after {
    content: '↓';
    top: auto;
    right: auto;
    left: 50%;
    bottom: -26px;
    translate: -50% 0;
  }
  .bolt-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .bolt-hero__intro {
    grid-template-columns: minmax(0, 1fr);
  }
  .bolt-hero__title {
    font-size: clamp(3.2rem, 12vw, 9rem);
  }
  .bolt-builds {
    max-width: 560px;
    margin-top: 0;
  }
  .hero__layout {
    gap: 44px;
  }
  .hero__photo {
    order: -1;
    width: min(62vw, 270px);
    margin-left: 4px;
  }
  .hero__current {
    left: 14px;
    bottom: -20px;
  }
  .hero__title {
    font-size: clamp(2.75rem, 13vw, 6.5rem);
  }
  .principle:nth-child(n) {
    margin-left: 0;
  }
  .lens__list {
    border-right: 0;
  }
  .lens__figure {
    order: -1;
    border-bottom: var(--border);
  }
  .case__intro {
    border-right: 0;
    border-bottom: var(--border);
  }
  .builder__cols {
    grid-template-columns: minmax(0, 1fr);
  }
  .builder__col + .builder__col {
    border-left: 0;
    border-top: var(--border);
  }
  .thinking__col + .thinking__col {
    border-left: 0;
    border-top: var(--border);
  }
  .reach__figure {
    max-width: 560px;
  }
  .contact__left {
    padding-inline: var(--gutter);
  }
  .contact__right {
    padding-inline: var(--gutter);
    border-left: 0;
    border-top: var(--border);
  }
  .beyond {
    grid-template-columns: minmax(0, 1fr);
  }
  .beyond-card {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  }
  .beyond__art {
    border-bottom: 0;
    border-right: var(--border);
  }
  .beyond__text {
    align-self: center;
  }
}

@media (max-width: 600px) {
  :root {
    --header-h: 58px;
  }
  .brand {
    padding: 0 14px;
    gap: 10px;
    font-size: 13px;
  }
  .brand__mark {
    width: 30px;
    height: 30px;
    font-size: 12px;
  }
  .menu-toggle {
    padding: 0 14px;
  }
  .btn-row .btn {
    flex: 1 1 100%;
  }
  .hero__current {
    font-size: 11.5px;
  }
  .hero__wins {
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;
  }
  .hero__win {
    box-shadow: 4px 4px 0 var(--ink);
  }
  .hero__win[data-open] {
    box-shadow: 6px 6px 0 var(--ink);
  }
  .hero__win-trigger {
    grid-template-columns: auto minmax(0, 1fr) auto;
    grid-template-areas:
      'icon value chevron'
      'icon label chevron';
    align-items: center;
    gap: 4px 14px;
    padding: 12px 14px;
  }
  .hero__win-value {
    font-size: 1.75rem;
  }
  /* on phones the detail opens inside the tile, like an accordion */
  .hero__win-detail,
  .hero__win:nth-child(n) .hero__win-detail {
    position: static;
    width: auto;
    padding: 12px 14px 14px;
    border: 0;
    border-top: var(--border);
    box-shadow: none;
    transform: none;
  }
  .hero__win-detail::before {
    content: none;
  }
  .principle {
    grid-template-columns: minmax(0, 1fr);
    gap: 4px;
  }
  .lens__intro,
  .lens__item {
    padding-inline: 16px;
  }
  .lens__gist,
  .lens__detail {
    margin-left: 0;
  }
  .lens__figure {
    padding: 12px 8px;
  }
  .lens-svg text {
    font-size: 15.5px;
  }
  .lens-svg .lz-node-text {
    font-size: 13.5px;
  }
  .spans__chart {
    --label-w: 84px;
  }
  .spans__label {
    font-size: 11px;
  }
  .spans__year-full {
    display: none;
  }
  .spans__title {
    font-size: 10px;
    letter-spacing: 0;
  }
  .spans__title--after {
    padding-left: 6px;
  }
  .spans__title--before {
    padding-right: 6px;
  }
  .spans__year-short {
    display: inline;
  }
  .spans__year {
    font-size: 11px;
    padding-left: 3px;
  }
  .milestone {
    grid-template-columns: minmax(0, 1fr);
    gap: 0;
  }
  .milestone::before {
    display: none;
  }
  .milestone__marker {
    position: relative;
    top: 0;
    width: 52px;
    height: 52px;
    margin: 0 0 -3px;
    font-size: 20px;
    box-shadow: none;
  }
  .milestone__head,
  .milestone__body,
  .milestone__highlights {
    padding-inline: 18px;
  }
  .milestone__more summary {
    padding-inline: 18px;
  }
  .milestone__body {
    grid-template-columns: minmax(0, 1fr);
  }
  .bolt-stats {
    gap: 14px;
  }
  .bolt-stat {
    padding: 14px 14px 16px;
    box-shadow: 4px 4px 0 var(--ink);
  }
  .bolt-stat__value {
    font-size: 1.75rem;
  }
  .bolt-stat__label {
    font-size: 0.9rem;
  }
  .case__intro,
  .case__fields,
  .builder__body {
    padding: 20px 18px;
  }
  .case__fields {
    grid-template-columns: minmax(0, 1fr);
  }
  .case__band {
    padding: 10px 14px;
    font-size: 12px;
  }
  .steps {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
  }
  .step::after {
    display: none;
  }
  .featured__actions .btn,
  .bolt-hero__cta {
    flex: 1 1 100%;
  }
  .bolt-hero__cta {
    width: 100%;
  }
  .reach__figure {
    padding-top: 44px;
  }
  .reach__sticker {
    right: 10px;
    left: 10px;
    justify-content: center;
    font-size: 11.5px;
  }
  .beyond-card {
    display: flex;
  }
  .beyond__art {
    border-right: 0;
    border-bottom: var(--border);
  }
  .contact__row {
    column-gap: 12px;
  }
  .contact__icon {
    width: 42px;
    height: 42px;
  }
  .footer {
    flex-direction: column;
  }
  .footer .brand {
    border-right: 0;
    border-bottom: var(--border);
  }
  .footer__copy,
  .footer__links {
    align-self: flex-start;
    padding-inline: var(--gutter);
  }
  .footer__links {
    gap: 4px 16px;
    padding-bottom: 12px;
  }
  .footer__for {
    margin-inline: 0;
  }
  .footer__top {
    padding-inline: 0;
  }
}

/* ---------------- reduced motion ---------------- */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`,ng=new Set(["class","style","contenteditable","spellcheck"]),tg={"stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","fill-rule":"fillRule","clip-rule":"clipRule",viewbox:"viewBox"},rg=e=>e.split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""),fc=e=>e.replace(/[{}<>]/g,n=>`{"${n}"}`);function ig(e){if(!e)return null;const n=Object.entries(e).filter(([r])=>r!=="transition");return n.length?`{{ ${n.map(([r,a])=>`${r.startsWith("--")?JSON.stringify(r):r}: ${JSON.stringify(a)}`).join(", ")} }}`:null}function lp(e,n){var o,s;const t=[],r=(o=e.dataset)==null?void 0:o.vid,a=Array.from(e.classList).join(" ");a&&t.push(`className="${a}"`);for(const c of Array.from(e.attributes)){if(ng.has(c.name)||c.name.startsWith("data-"))continue;const d=e instanceof SVGElement?tg[c.name]??c.name:c.name;t.push(`${d}="${c.value.replace(/"/g,"&quot;")}"`)}const l=ig(r?(s=n.doc[r])==null?void 0:s.style:void 0);return l&&t.push(`style=${l}`),t}function ag(e){if(e.tagName.toLowerCase()!=="svg")return null;const n=Array.from(e.classList).find(t=>t.startsWith("lucide-"));return n?rg(n.replace(/^lucide-/,"").replace(/-icon$/,"")):null}function op(e,n,t){var v,w,j;const r="  ".repeat(n),a=(v=e.dataset)==null?void 0:v.vid;if(a&&((w=t.doc[a])!=null&&w.hidden)){t.lines.push(`${r}{/* “${e.dataset.label??a}” hidden in Visual Design */}`),t.changed.has(a)&&t.marks.add(t.lines.length);return}const l=()=>a&&t.changed.has(a)&&t.marks.add(t.lines.length),o=ag(e);if(o){t.icons.add(o);const p=e.getAttribute("width"),u=e.getAttribute("stroke-width");t.lines.push(`${r}<${o} size={${p}}${u&&u!=="2"?` strokeWidth={${u}}`:""} />`);return}const s=e.tagName.toLowerCase(),c=lp(e,t),d=Array.from(e.childNodes).filter(p=>p.nodeType===1||p.nodeType===3&&p.textContent.trim()),f=d.length===1&&d[0].nodeType===3,h=c.length?` ${c.join(" ")}`:"",m=h.length+r.length+s.length>96,k=p=>{if(!m){t.lines.push(`${r}<${s}${h}${p}`),l();return}t.lines.push(`${r}<${s}`),l();for(const u of c)t.lines.push(`${r}  ${u}`),l();t.lines.push(`${r}${p.trim()==="/>"?"/>":">"}`)};if(!d.length){k(" />");return}if(f){const p=fc(d[0].textContent.replace(/\s+/g," ").trim());if(!m&&r.length+s.length*2+h.length+p.length<110&&!p.includes(`
`)){t.lines.push(`${r}<${s}${h}>${p}</${s}>`),l();return}}k(">");for(const p of d)if(p.nodeType===3){const u=p.textContent,y=u.includes(`
`)&&s==="code"?u.split(`
`):[u.replace(/\s+/g," ").trim()];for(const _ of y)t.lines.push(s==="code"?`${r}  {${JSON.stringify(_)}}`:`${r}  ${fc(_)}`),a&&t.changed.has(a)&&((j=t.doc[a])==null?void 0:j.text)!==void 0&&t.marks.add(t.lines.length)}else op(p,n+1,t);t.lines.push(`${r}</${s}>`)}function lg(e,n){const r=lp(e,{doc:n});return`<${e.tagName.toLowerCase()}${r.length?` ${r.join(" ")}`:""}>`}const og=`{
  "name": "alfred-chang-site",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.453.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.3",
    "typescript": "^5.6.3",
    "vite": "^5.4.10"
  }
}`,sg=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Alfred Chang · Staff Product Manager</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>
  </body>
</html>`,cg=`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);`,dg=new Set(["Header","Footer"]);function ug(e,n,t){const r=Array.from(e.querySelectorAll("[data-file]")),a=[];for(const s of r){const c=s.dataset.file,d={doc:n,changed:t,icons:new Set,lines:[],marks:new Set};op(s,2,d);const f=[];d.icons.size&&f.push(`import { ${[...d.icons].sort().join(", ")} } from "lucide-react";`,""),f.push(`export function ${c}() {`,"  return (");const h=f.length,m=[...f,...d.lines,"  );","}",""].join(`
`);a.push({path:`src/components/${c}.tsx`,content:m,changedLines:new Set([...d.marks].map(k=>k+h)),lang:"tsx"})}const l=r.map(s=>s.dataset.file),o=[...l.map(s=>`import { ${s} } from "./components/${s}";`),"","export default function App() {","  return (","    <>",...l.filter(s=>s==="Header").map(s=>`      <${s} />`),'      <main id="main" tabIndex={-1}>',...l.filter(s=>!dg.has(s)).map(s=>`        <${s} />`),"      </main>",...l.filter(s=>s==="Footer").map(s=>`      <${s} />`),"    </>","  );","}",""].join(`
`);return[{path:"index.html",content:sg,changedLines:new Set,lang:"html"},{path:"package.json",content:og,changedLines:new Set,lang:"json"},{path:"src/main.tsx",content:cg,changedLines:new Set,lang:"tsx"},{path:"src/App.tsx",content:o,changedLines:new Set,lang:"tsx"},{path:"src/styles.css",content:eg,changedLines:new Set,lang:"css"},...a]}function mc({path:e}){return e.endsWith(".json")?i.jsx(sm,{size:14,className:"fi fi--json"}):e.endsWith(".css")?i.jsx(cm,{size:14,className:"fi fi--css"}):e.endsWith(".html")?i.jsx(zr,{size:14,className:"fi fi--html"}):i.jsx(zr,{size:14,className:"fi fi--tsx"})}function pg({sync:e}){const{rootRef:n}=Oe(),{doc:t}=Jn(),r=Ir(),a=b.useMemo(()=>n.current?ug(n.current,t,new Set((e==null?void 0:e.ids)??[])):[],[n,t,e]),l=a.filter(C=>C.changedLines.size>0),[o,s]=b.useState(()=>{var C;return(e==null?void 0:e.focusFile)??((C=l[0])==null?void 0:C.path)??"src/components/Hero.tsx"}),[c,d]=b.useState(()=>[...new Set([o,"src/App.tsx"])]),[f,h]=b.useState(!0),[m,k]=b.useState(!0),[v,w]=b.useState(!0),j=b.useRef(null),p=a.find(C=>C.path===o)??a[0],u=C=>{s(C),d(z=>z.includes(C)?z:[...z,C])};if(b.useEffect(()=>{const C=p&&[...p.changedLines].sort((L,B)=>L-B)[0],z=j.current;if(z)if(C){const L=z.querySelector(`[data-line="${C}"]`);L&&z.scrollTo({top:Math.max(0,L.offsetTop-120),behavior:"smooth"})}else z.scrollTo({top:0})},[p]),!p)return null;const y=p.content.split(`
`),_=a.filter(C=>!C.path.startsWith("src/")),N=a.filter(C=>C.path.startsWith("src/")&&!C.path.startsWith("src/components/")),g=a.filter(C=>C.path.startsWith("src/components/")),S=C=>{var z;return(z=a.find(L=>L.path===C))==null?void 0:z.changedLines.size},$=(C,z)=>i.jsxs("button",{className:`tree__row ${o===C.path?"is-active":""}`,style:{paddingLeft:10+z*14},onClick:()=>u(C.path),children:[i.jsx(mc,{path:C.path}),i.jsx("span",{children:C.path.split("/").pop()}),C.changedLines.size>0&&i.jsx("em",{className:"tree__badge",children:"M"})]},C.path);return i.jsxs("div",{className:"code",children:[i.jsxs("aside",{className:"tree",children:[i.jsx("div",{className:"tree__head",children:"Files"}),i.jsxs("button",{className:"tree__row",onClick:()=>h(C=>!C),children:[f?i.jsx(Cr,{size:12}):i.jsx(vt,{size:12}),f?i.jsx(pc,{size:14,className:"fi fi--dir"}):i.jsx(hc,{size:14,className:"fi fi--dir"}),i.jsx("span",{children:"src"})]}),f&&i.jsxs(i.Fragment,{children:[i.jsxs("button",{className:"tree__row",style:{paddingLeft:24},onClick:()=>k(C=>!C),children:[m?i.jsx(Cr,{size:12}):i.jsx(vt,{size:12}),m?i.jsx(pc,{size:14,className:"fi fi--dir"}):i.jsx(hc,{size:14,className:"fi fi--dir"}),i.jsx("span",{children:"components"}),g.some(C=>C.changedLines.size)&&i.jsx("i",{className:"tree__dot"})]}),m&&g.map(C=>$(C,3)),N.map(C=>$(C,2))]}),_.map(C=>$(C,0))]}),i.jsxs("div",{className:"code__main",children:[i.jsx("div",{className:"code__tabs",children:c.map(C=>i.jsxs("div",{className:`code__tab ${C===o?"is-active":""}`,onClick:()=>s(C),children:[i.jsx(mc,{path:C}),i.jsx("span",{children:C.split("/").pop()}),S(C)?i.jsx("i",{className:"tree__dot"}):null,c.length>1&&i.jsx("button",{className:"code__tab-x","aria-label":"Close tab",onClick:z=>{z.stopPropagation();const L=c.filter(B=>B!==C);d(L),C===o&&s(L[L.length-1])},children:i.jsx(qi,{size:12})})]},C))}),e&&v&&l.length>0&&i.jsxs("div",{className:"code__banner",children:[i.jsx(Lt,{size:14}),i.jsxs("span",{children:["AI applied ",i.jsx("b",{children:e.ids.length})," design ",e.ids.length===1?"change":"changes"," to"," ",l.map((C,z)=>i.jsxs("button",{onClick:()=>u(C.path),children:[C.path.split("/").pop(),z<l.length-1?", ":""]},C.path))]}),i.jsx("button",{className:"icon-btn","aria-label":"Dismiss",onClick:()=>w(!1),children:i.jsx(qi,{size:13})})]}),i.jsxs("div",{className:"code__crumbs",children:[p.path.split("/").map((C,z,L)=>i.jsxs("span",{children:[C,z<L.length-1&&i.jsx(vt,{size:11})]},z)),i.jsxs("button",{className:"code__copy",onClick:()=>{var C;(C=navigator.clipboard)==null||C.writeText(p.content),r("Copied to clipboard")},children:[i.jsx(qo,{size:12})," Copy"]})]}),i.jsx("div",{className:"code__editor",ref:j,children:i.jsx("div",{className:"code__lines",children:y.map((C,z)=>{const L=z+1,B=p.changedLines.has(L);return i.jsxs("div",{className:`code__line ${B?"is-changed":""}`,"data-line":L,children:[i.jsx("span",{className:"code__ln",children:L}),i.jsxs("span",{className:"code__src",children:[ap(C,p.lang).map((we,D)=>we.c?i.jsx("span",{className:`tk-${we.c}`,children:we.t},D):we.t),C===""&&"​"]})]},z)})})})]})]})}const Yo=[{name:"Sky",hex:"#87CEEB"},{name:"Lime",hex:"#D7FF28"},{name:"Coral",hex:"#FF6E6C"},{name:"Blue",hex:"#0EA5E9"},{name:"Orange",hex:"#F16122"},{name:"Purple",hex:"#B79CFF"},{name:"Turquoise",hex:"#40E0D0"},{name:"Yellow",hex:"#FFD23F"},{name:"Black",hex:"#000000"},{name:"White",hex:"#FFFFFF"}],Wa=[{label:"Archivo Black",value:"'Archivo Black', sans-serif"},{label:"Space Grotesk",value:"'Space Grotesk', sans-serif"},{label:"JetBrains Mono",value:"'JetBrains Mono', monospace"},{label:"Inter",value:"'Inter', sans-serif"},{label:"Courier Prime",value:"'Courier Prime', monospace"},{label:"DM Serif Display",value:"'DM Serif Display', serif"}];function or(e){const n=e.match(/rgba?\(([^)]+)\)/);if(!n)return e.startsWith("#")?{hex:e.toUpperCase(),alpha:1}:{hex:"#000000",alpha:e==="transparent"?0:1};const t=n[1].split(/[\s,/]+/).filter(Boolean).map(Number),[r,a,l]=t,o=t.length>3?t[3]:1,s=c=>Math.round(c).toString(16).padStart(2,"0");return{hex:`#${s(r)}${s(a)}${s(l)}`.toUpperCase(),alpha:o}}function kt(e){let n=e.trim().replace(/^#/,"");return/^[0-9a-f]{3}$/i.test(n)&&(n=n.split("").map(t=>t+t).join("")),/^[0-9a-f]{6}$/i.test(n)?`#${n.toUpperCase()}`:null}function gc(e){const n=kt(e);if(!n)return"#000000";const t=[1,3,5].map(a=>{const l=parseInt(n.slice(a,a+2),16)/255;return l<=.03928?l/12.92:((l+.055)/1.055)**2.4});return .2126*t[0]+.7152*t[1]+.0722*t[2]>.4?"#000000":"#FFFFFF"}function hg(e){var r,a;if(!e||e==="none")return{on:!1,x:6,y:6,blur:0,color:"#000000"};const n=((r=e.match(/rgba?\([^)]+\)|#[0-9a-f]{3,8}/i))==null?void 0:r[0])??"#000",t=((a=e.replace(n,"").match(/-?\d+(\.\d+)?px/g))==null?void 0:a.map(l=>parseFloat(l)))??[0,0,0];return{on:!0,x:t[0]??0,y:t[1]??0,blur:t[2]??0,color:or(n).hex}}function fg(e){return e.on?`${e.x}px ${e.y}px ${e.blur}px ${e.color}`:"none"}function mg(e){const n=getComputedStyle(e),t=e.getBoundingClientRect(),r=parseFloat(n.fontSize)||16,a=n.lineHeight==="normal"?"Auto":(parseFloat(n.lineHeight)/r).toFixed(2).replace(/\.?0+$/,""),l=n.fontFamily.split(",")[0].replace(/["']/g,"").trim();return{kind:e.dataset.kind??"container",label:e.dataset.label??"",tag:e.tagName.toLowerCase(),width:Math.round(t.width),height:Math.round(t.height),display:n.display,flexDirection:n.flexDirection,gap:parseFloat(n.columnGap)||0,alignItems:n.alignItems,justifyContent:n.justifyContent,padX:parseFloat(n.paddingLeft)||0,padY:parseFloat(n.paddingTop)||0,rotate:n.rotate&&n.rotate!=="none"?parseFloat(n.rotate):0,opacity:Math.round(parseFloat(n.opacity)*100),radius:parseFloat(n.borderTopLeftRadius)||0,fill:or(n.backgroundColor),color:or(n.color).hex,strokeWidth:n.borderTopStyle==="none"?0:parseFloat(n.borderTopWidth)||0,strokeColor:or(n.borderTopColor).hex,shadow:hg(n.boxShadow),fontFamily:l,fontSize:Math.round(r),fontWeight:parseInt(n.fontWeight,10)||400,lineHeight:a,letterSpacing:Math.round((parseFloat(n.letterSpacing)||0)/r*1e3)/10,textAlign:n.textAlign==="start"?"left":n.textAlign,textTransform:n.textTransform,href:e.getAttribute("href"),target:e.getAttribute("target"),text:e.textContent??"",isLeafText:Hl(e)}}function Hl(e){const n=e.dataset.kind;return(n==="text"||n==="heading"||n==="link"||n==="button")&&e.children.length===0}function sp(e){const{getEl:n,device:t}=Oe(),{doc:r}=Jn(),[a,l]=b.useState(null);return b.useLayoutEffect(()=>{const o=n(e);if(!o){l(null);return}const s=()=>l(mg(o));s();const c=setTimeout(s,700),d=new ResizeObserver(s);return d.observe(o),o.addEventListener("transitionend",s),()=>{clearTimeout(c),d.disconnect(),o.removeEventListener("transitionend",s)}},[e,r,t,n]),a}function Rr(e){const n=e.dataset.kind;if((n==="text"||n==="heading")&&e.children.length===0){const t=e.innerText.replace(/\s+/g," ").trim();if(t)return t.length>28?`${t.slice(0,28)}…`:t}return e.dataset.label??n??"Layer"}function Wl(e){var t;const n=[];for(const r of Array.from(e.children)){const a=r;(t=a.dataset)!=null&&t.vid?n.push({id:a.dataset.vid,kind:a.dataset.kind,name:Rr(a),hidden:a.style.display==="none",children:Wl(a)}):a instanceof SVGElement||n.push(...Wl(a))}return n}function gg(e){var r;const n=[];let t=e;for(;t&&((r=t.dataset)!=null&&r.vid&&n.unshift(t),t=t.parentElement,!(t!=null&&t.classList.contains("site"))););return n}const Er={section:"Section",container:"Container",heading:"Heading",text:"Text",button:"Button",link:"Link",icon:"Icon",graphic:"Graphic"},cp=["heading","text","button","link"];function x({id:e,htmlId:n,kind:t,as:r="div",label:a,file:l,className:o,style:s,href:c,target:d,children:f,...h}){const{doc:m}=Jn(),k=yn(),{editingId:v,animatingId:w,stopEdit:j}=fa(),p=m[e],u=v===e,y=b.useRef(null),_=b.useRef(null);let N=(p==null?void 0:p.text)??f;u?(_.current===null&&(_.current=N),N=_.current):_.current=null,b.useLayoutEffect(()=>{const z=y.current;if(!u||!z)return;z.focus({preventScroll:!0});const L=document.createRange();L.selectNodeContents(z);const B=window.getSelection();B==null||B.removeAllRanges(),B==null||B.addRange(L)},[u]);const g={...s,...p==null?void 0:p.style};p!=null&&p.hidden&&(g.display="none"),w===e&&(g.transition="all 620ms cubic-bezier(.2,.8,.2,1)");const S={...h,id:n,ref:y,key:u?"editing":"view",className:o,style:g,"data-vid":e,"data-kind":t,"data-label":a,"data-file":l},$=(p==null?void 0:p.href)??c;$!==void 0&&(S.href=$);const C=(p==null?void 0:p.target)??d;return C&&(S.target=C,C==="_blank"&&(S.rel="noreferrer")),u&&Object.assign(S,{contentEditable:"plaintext-only",suppressContentEditableWarning:!0,spellCheck:!1,onInput:z=>k.setText(e,z.currentTarget.textContent??"",`text:${e}`),onBlur:()=>j(),onKeyDown:z=>{(z.key==="Enter"&&!z.shiftKey||z.key==="Escape")&&(z.preventDefault(),z.currentTarget.blur())},onPaste:z=>{z.preventDefault(),document.execCommand("insertText",!1,z.clipboardData.getData("text/plain"))}}),b.createElement(r,S,N)}function Xo({kind:e,size:n=14}){const t={size:n,strokeWidth:1.9};switch(e){case"section":return i.jsx(gm,{...t});case"heading":return i.jsx(pm,{...t});case"text":return i.jsx(Zu,{...t});case"button":return i.jsx(zm,{...t});case"link":return i.jsx(Ko,{...t});case"icon":return i.jsx(Pm,{...t});case"graphic":return i.jsx(fm,{...t});default:return i.jsx(dm,{...t})}}function xg(){const{rootRef:e,selectedId:n,hoverId:t,select:r,setHover:a,getEl:l,viewportRef:o}=Oe(),{doc:s}=Jn(),[c,d]=b.useState([]),[f,h]=b.useState(()=>new Set(["hero","hero.layout","hero.copy"])),m=b.useRef(null);b.useLayoutEffect(()=>{e.current&&d(Wl(e.current))},[s,e]),b.useEffect(()=>{var p,u;const v=l(n);if(!v)return;const w=[];let j=(p=v.parentElement)==null?void 0:p.closest("[data-vid]");for(;j;)w.push(j.dataset.vid),j=(u=j.parentElement)==null?void 0:u.closest("[data-vid]");h(y=>w.every(_=>y.has(_))?y:new Set([...y,...w])),requestAnimationFrame(()=>{var y,_;(_=(y=m.current)==null?void 0:y.querySelector(`[data-row="${CSS.escape(n)}"]`))==null||_.scrollIntoView({block:"nearest"})})},[n,l]);const k=v=>{const w=l(v),j=o.current;if(!w||!j)return;const p=w.getBoundingClientRect(),u=j.getBoundingClientRect();(p.top<u.top+40||p.bottom>u.bottom-40)&&j.scrollTo({top:j.scrollTop+p.top-u.top-120,behavior:"smooth"})};return i.jsxs("div",{className:"layers",ref:m,onPointerLeave:()=>a(null),children:[i.jsxs("div",{className:"layers__page",children:[i.jsx(vt,{size:12,className:"is-open"}),i.jsx("span",{children:"Home"}),i.jsx("em",{children:"/"})]}),c.map(v=>i.jsx(dp,{node:v,depth:0,open:f,setOpen:h,selectedId:n,hoverId:t,onSelect:w=>{r(w),k(w)},onHover:a},v.id))]})}function dp({node:e,depth:n,open:t,setOpen:r,selectedId:a,hoverId:l,onSelect:o,onHover:s}){const c=yn(),d=t.has(e.id),f=e.children.length>0,h=a===e.id;return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:`layer ${h?"is-selected":""} ${l===e.id&&!h?"is-hover":""} ${e.hidden?"is-hidden":""} layer--${e.kind}`,style:{paddingLeft:8+n*14},"data-row":e.id,onPointerEnter:()=>s(e.id),onClick:()=>o(e.id),children:[i.jsx("button",{className:`layer__caret ${f?"":"is-empty"} ${d?"is-open":""}`,onClick:m=>{m.stopPropagation(),r(k=>{const v=new Set(k);return v.has(e.id)?v.delete(e.id):v.add(e.id),v})},tabIndex:-1,"aria-label":d?"Collapse":"Expand",children:f&&i.jsx(vt,{size:12})}),i.jsx("span",{className:"layer__icon",children:i.jsx(Xo,{kind:e.kind,size:13})}),i.jsx("span",{className:"layer__name",children:e.name}),i.jsx("button",{className:"layer__eye","aria-label":e.hidden?"Show":"Hide",onClick:m=>{m.stopPropagation(),c.setHidden(e.id,!e.hidden)},children:e.hidden?i.jsx(Qo,{size:13}):i.jsx(ha,{size:13})})]}),f&&d&&e.children.map(m=>i.jsx(dp,{node:m,depth:n+1,open:t,setOpen:r,selectedId:a,hoverId:l,onSelect:o,onHover:s},m.id))]})}const Qi=(e,n=22)=>e===void 0?void 0:e.length>n?`${e.slice(0,n)}…`:e;function yg(e,n,t){var l,o;const r=[...new Set([...Object.keys(e),...Object.keys(n)])],a=[];for(const s of r){const c=e[s]??{},d=n[s]??{};if(JSON.stringify(c)===JSON.stringify(d))continue;const f=t(s);if(!f)continue;const h=[],m=new Set([...Object.keys(c.style??{}),...Object.keys(d.style??{})]);for(const v of m){const w=(l=c.style)==null?void 0:l[v],j=(o=d.style)==null?void 0:o[v];w!==j&&h.push({key:v,from:w,to:j??"default"})}c.text!==d.text&&h.push({key:"text",from:Qi(c.text),to:`“${Qi(d.text??"original")??""}”`}),c.href!==d.href&&h.push({key:"href",from:c.href,to:d.href??"original"}),c.target!==d.target&&h.push({key:"target",from:c.target,to:d.target??"original"}),!!c.hidden!=!!d.hidden&&h.push({key:"visible",to:d.hidden?"false":"true"});const k=f.closest("[data-file]");a.push({id:s,name:Rr(f),kind:f.dataset.kind??"container",file:`src/components/${(k==null?void 0:k.dataset.file)??"App"}.tsx`,props:h,code:d.hidden?`{/* “${f.dataset.label??s}” hidden */}`:lg(f,n)})}return a}function vg({changes:e,onDone:n}){const r=b.useMemo(()=>{var _;return(_=window.matchMedia)==null?void 0:_.call(window,"(prefers-reduced-motion: reduce)").matches},[])?.35:1,a=e.length,l=Math.max(420,Math.min(760,3e3/a))*r,o=900*r,s=1700*r,c=s+a*l,d=c+650*r,f=d+750*r,[h,m]=b.useState(0),k=b.useRef(!1),v=b.useRef(null);b.useEffect(()=>{const _=performance.now();let N=0;const g=S=>{const $=S-_;if(m($),$>=f){k.current||(k.current=!0,n());return}N=requestAnimationFrame(g)};return N=requestAnimationFrame(g),()=>cancelAnimationFrame(N)},[f,n]),b.useEffect(()=>{const _=v.current;_&&(_.scrollTop=_.scrollHeight)});const w=[...new Set(e.map(_=>_.file))],j=h<s?-1:Math.min(a-1,Math.floor((h-s)/l)),p=j>=0?e[j].file:w[0],u=Math.min(1,h/d),y=[{label:`Collecting ${a} design ${a===1?"change":"changes"}`,at:0,end:o},{label:`Mapping to ${w.length} ${w.length===1?"component":"components"}`,at:o,end:s},{label:"AI writing JSX & styles",at:s,end:c},{label:"Checking the build",at:c,end:d}];return i.jsxs("div",{className:"xf",role:"dialog","aria-modal":"true","aria-label":"Applying design changes with AI",children:[i.jsx("div",{className:"xf__backdrop"}),i.jsxs("div",{className:`xf__card ${h>=d?"is-done":""}`,children:[i.jsx("div",{className:"xf__glow"}),i.jsxs("header",{className:"xf__head",children:[i.jsx("span",{className:"xf__bolt",children:i.jsx(Om,{size:18,fill:"currentColor"})}),i.jsxs("div",{children:[i.jsx("h3",{children:h>=d?"Saved to code":"Applying your design with AI"}),i.jsx("p",{children:"You left Visual Design, so Bolt’s AI is writing every change to your React components in one pass. Uses tokens."})]}),i.jsx("button",{className:"xf__skip",onClick:n,children:"Skip"})]}),i.jsxs("div",{className:"xf__body",children:[i.jsxs("div",{className:"xf__edits",children:[i.jsx("div",{className:"xf__col-title",children:"Design changes"}),e.slice(0,7).map((_,N)=>{const g=h>N*90*r,S=h>o+N*60*r,$=j>N||h>=c,C=j===N&&h<c;return i.jsxs("div",{className:`xf__chip ${g?"is-in":""} ${C?"is-writing":""} ${$?"is-written":""}`,children:[i.jsx("span",{className:"xf__chip-icon",children:i.jsx(Xo,{kind:_.kind,size:13})}),i.jsxs("div",{className:"xf__chip-body",children:[i.jsxs("strong",{children:[_.name,i.jsx("em",{children:Er[_.kind]})]}),i.jsxs("span",{className:"xf__props",children:[_.props.slice(0,3).map(z=>i.jsxs("span",{children:[z.key,": ",z.from&&i.jsx("s",{children:Qi(z.from,10)})," ",Qi(z.to,16)]},z.key)),_.props.length>3&&i.jsxs("span",{children:["+",_.props.length-3," more"]})]}),i.jsxs("span",{className:`xf__file ${S?"is-in":""}`,children:[i.jsx(zr,{size:11})," ",_.file.split("/").pop()]})]}),i.jsx("span",{className:"xf__chip-state",children:$?i.jsx(Mt,{size:13,strokeWidth:3}):C?i.jsx(Ui,{size:13,className:"spin"}):null})]},_.id)}),a>7&&i.jsxs("div",{className:"xf__more",children:["+",a-7," more changes"]})]}),i.jsxs("div",{className:"xf__beam","data-active":h>o&&h<c,children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]}),i.jsxs("div",{className:"xf__code",children:[i.jsxs("div",{className:"xf__code-tab",children:[i.jsx(zr,{size:12}),p]}),i.jsxs("div",{className:"xf__code-body",ref:v,children:[e.map((_,N)=>{if(j<N)return null;const g=N===j&&h<c,S=g?Math.min(1,(h-s-N*l)/(l*.85)):1,$=_.code.slice(0,Math.ceil(_.code.length*S));return i.jsxs("div",{className:"xf__block",children:[i.jsx("div",{className:"xf__cm",children:`// ${_.name} · ${_.file.split("/").pop()}`}),i.jsxs("div",{className:"xf__ln",children:[ap($,"tsx").map((C,z)=>i.jsx("span",{className:C.c?`tk-${C.c}`:void 0,children:C.t},z)),g&&i.jsx("i",{className:"xf__caret"})]})]},_.id)}),j<0&&i.jsx("div",{className:"xf__cm xf__wait",children:h<o?"// reading canvas…":"// resolving components…"})]})]})]}),i.jsxs("footer",{className:"xf__foot",children:[i.jsx("ol",{className:"xf__steps",children:y.map(_=>{const N=h>=_.end?"done":h>=_.at?"run":"wait";return i.jsxs("li",{className:`is-${N}`,children:[i.jsx("span",{children:N==="done"?i.jsx(Mt,{size:11,strokeWidth:3}):N==="run"?i.jsx(Ui,{size:11,className:"spin"}):null}),_.label]},_.label)})}),i.jsx("div",{className:"xf__bar",children:i.jsx("i",{style:{transform:`scaleX(${u})`}})})]})]})]})}const up={requirements:[{id:"R1",title:"First-class Visual Design entry",priority:"P0",phase:1,criteria:"Visible near Preview/Code; current mode is clear; chat Select remains an alternate entry"},{id:"R2",title:"True visual selection, no mutate on selects",priority:"P0",phase:1,criteria:"Hover/click adds editor overlays only; no source mutation, layout shift, or navigation"},{id:"R3",title:"Edit/interact toggle",priority:"P0",phase:2,criteria:"User can test buttons and navigation without exiting the entire workflow"},{id:"R4",title:"Selection hierarchy",priority:"P0",phase:1,criteria:"User can distinguish a button from its label and move to a parent"},{id:"R5",title:"Supported-property inspector",priority:"P0",phase:1,criteria:"Available properties are explicit; unsupported properties are disabled with explanation"},{id:"R6",title:"Static text editing",priority:"P0",phase:1,criteria:"Static literals persist; dynamic, localized, or bound values are identified rather than overwritten"},{id:"R7",title:"Live preview",priority:"P0",phase:1,criteria:"Manipulation produces immediate-feeling feedback without source writes on every pointer movement"},{id:"R8",title:"Automatic source persistence",priority:"P0",phase:2,criteria:"Supported edits commit after interaction completion; no Add changes or chat confirmation"},{id:"R9",title:"Accurate save state",priority:"P0",phase:1,criteria:"Saved appears only after source persistence and applicable validation; failure offers Retry/Revert"},{id:"R10",title:"Token-free deterministic edits",priority:"P0",phase:2,criteria:"Supported direct edits do not invoke an LLM or debit AI tokens"},{id:"R11",title:"Transactional undo/redo",priority:"P0",phase:1,criteria:"One completed gesture is one undo action; source and preview restore together"},{id:"R12",title:"Responsive scope",priority:"P0",phase:1,criteria:"Inspector shows base/current-breakpoint scope; no silent conversion to fixed desktop dimensions"},{id:"R13",title:"Latest-state agent awareness",priority:"P0",phase:1,criteria:"Later prompts use persisted source; concurrent mutations are serialized or blocked"},{id:"R14",title:"Contextual AI action",priority:"P1",phase:1,criteria:"Selected element and intended scope accompany the request; user sees that AI is involved"},{id:"R15",title:"Explicit unsupported fallback",priority:"P0",phase:1,criteria:"No silent inference; user chooses AI edit, Code, or cancellation"},{id:"R16",title:"Repeated/shared-element scope",priority:"P0",phase:2,criteria:"Repeated instances are detected; ambiguous instance-only changes are blocked or clarified"},{id:"R17",title:"Change history",priority:"P1",phase:1,criteria:"Completed edits create readable, recoverable history without requiring a synthetic user prompt"},{id:"R18",title:"Code parity",priority:"P0",phase:1,criteria:"Opening Code shows already-persisted changes; it does not initiate synchronization"},{id:"R19",title:"Publication parity",priority:"P0",phase:1,criteria:"Export/publish uses persisted source; unsettled mutations are surfaced before publication"},{id:"R20",title:"Expanded layers panel",priority:"P2",phase:2,criteria:"Hidden/shared/repeated elements have accurate labels and safe selection behavior"}]},kg=e=>up.requirements.filter(n=>n.phase===e),Ie={name:"Alfred Chang",role:"Staff Product Manager",company:"Shutterfly",email:"Alfred_chang@outlook.com",linkedinUrl:"https://www.linkedin.com/in/alfred-karken-chang/",linkedinHandle:"in/alfred-karken-chang",resumeUrl:null,prototypeUrl:"/prototype/index.html"},pp=[{id:"journey",label:"My journey"},{id:"beyond-work",label:"Beyond work"},{id:"how-i-think",label:"How I think"},{id:"work",label:"Work"},{id:"contact",label:"Contact"}],ve={hello:["Hi, I’m","Alfred."],highlight:"Alfred.",lead:"Staff Product Manager driving AI-powered product growth and platform modernization for Creation, Photos.",wins:[{value:"$146M",unit:"ARR",label:"Replatforming",icon:"blocks",accent:"coral",detail:"Rebuilt a 20-year-old platform that drives $2B in revenue. A/B testing at launch showed a 13.9% revenue lift."},{value:"$60M",unit:"ARR",label:"AI commerce & photo augmentation",icon:"wand",accent:"lime",detail:"Conversational AI that helps customers find products, get answers, and manage orders ($20M), plus Google Gemini photo expansion, filters, and magic eraser ($40M)."},{value:"100K",unit:"UNITS",label:"Acquired via product‑led growth",icon:"api",accent:"sky",detail:"100K units added across 6 months through API-as-a-service products. One week of development let existing customers easily add their properties from Apartments.com. $1.5M in contracts revenue and a $17M ARR lift"}],photo:{alt:"Alfred Chang, smiling, wearing glasses and a dark patterned shirt",width:640,height:800},current:"Currently building at Shutterfly",tagline:"Problem-first. Prioritize. Built for impact.",primaryCta:{label:"Explore my journey",href:"#journey"},secondaryCta:{label:"See what I’m building",href:"#work"}},_t={heading:"Before the solution, find the real problem.",body:["A feature request is a starting point—not a diagnosis. I want to understand what someone is trying to accomplish, where the experience breaks down, and why that friction exists before deciding what to build.","Problem-first doesn’t mean slow. It means reducing the chance that we move quickly in the wrong direction. I use prototypes and experiments to test the framing as well as the solution."],lens:[{region:"person",question:"What is the person trying to do?",gist:"The outcome behind the request.",detail:"A request often arrives already shaped as a solution. I try to name the outcome underneath it—what “done” looks like for the person—so we can judge any solution against that."},{region:"experience",question:"Where does the experience break?",gist:"The exact step where people struggle.",detail:"I look for the moment people hesitate, drop off, or work around the product. Funnel data shows where it happens; talking with customers and watching real usage helps explain why."},{region:"system",question:"What is causing it across the system?",gist:"The cause, not just the symptom.",detail:"The visible problem is often produced somewhere else—a platform constraint, a data gap, a handoff between teams, or a policy. Fixing only the surface tends to bring the problem back."},{region:"test",question:"What is the smallest useful thing we can test?",gist:"A fast, honest check before a big bet.",detail:"Before committing a roadmap, I look for the cheapest way to learn whether the framing is right—an experiment, a prototype, or a narrow release—and decide up front what result would change my mind."}],principles:[{label:"Evidence",text:"Evidence tells me what is happening.",accent:"sky"},{label:"Judgment",text:"Judgment helps me choose what to do next.",accent:"lime"},{label:"Building",text:"Building helps me find out whether I’m right.",accent:"coral"}]},sr={heading:"The path that shaped my product judgment.",intro:"7+ years of identifying problems.",milestones:[{id:"paradox",company:"Paradox AI",short:"Paradox AI",accent:"sky",roles:[{title:"Product Management Intern",short:"Intern",start:"2019-03",end:"2019-09",highlights:[]}],context:"Paradox builds an AI assistant for recruiters. In 2019, NLP was the main technology behind conversational AI.",theme:"AI assistant for Recruiters, before LLM",workedOn:"Decision-mapping trees and reinforcement learning for the assistant, and client onboarding for McHire, McDonald’s AI hiring assistant, so hiring managers could ask any HR-related question.",perspective:"I fell in love with building. AI is cool.",accomplishments:["Enabled 13k McDonald’s locations to hire with an AI solution, and onboarded those users with AI too."]},{id:"benq",company:"BenQ America Corp.",short:"BenQ",accent:"purple",roles:[{title:"Associate Product Manager – Google Jamboard",short:"Associate PM",start:"2019-09",end:"2020-09",highlights:["Managed a high-profile partnership product with Google, contributing to $5M in hardware revenue and more than $1M in ARR.","Executed go-to-market and localization strategy for 9 new products in the North American market."]}],context:"BenQ’s B2B team partners with Google’s Jamboard to provide a digital whiteboard experience for corporate offices.",theme:"Google Jamboard - Meeting room solutions",workedOn:"The Jamboard partnership product with Google, plus go-to-market and localization for 9 new products in North America.",perspective:"Gathering Feedback through sales, fulfillment and support channels.",accomplishments:["Executed the go-to-market and localization strategy for 9 new product launches in North America, opening new segments of the business."]},{id:"eyesbox",company:"Eyesbox AI",short:"Eyesbox AI",accent:"coral",roles:[{title:"Founder/CEO",short:"Founder",start:"2020-03",end:"2021-08",highlights:["Took a smart IoT camera for refrigerators from concept to a launched mobile app on the Apple App Store and Google Play.","Led a cross-functional team of 8 engineers across mobile, hardware, and AI.","Pitched to more than 50 investors and secured a $10,000 grant."]}],context:"Eyesbox AI built a smart IoT camera for refrigerators, designed to reduce food waste by improving everyday refrigerator use.",theme:"Smart Camera for Refrigerator",workedOn:"Founded the company and took it from concept to a launched app across hardware, AI, and mobile.",perspective:"Startups are hardwork, talent makes or breaks your journey.",accomplishments:["Led and mentored a team of 8 engineers across app development, hardware, and AI image recognition."]},{id:"smartrent",company:"SmartRent",short:"SmartRent",accent:"turquoise",roles:[{title:"Associate Product Manager II – Self-guided tour",short:"Associate PM II",start:"2021-08",end:"2022-12",highlights:["Drove a 400% increase in user engagement for the Self-Guided Tour product, scaling it to more than 1 million users within 6 months.","Generated $1.5M in new revenue with a scalable API service integrated with key industry platforms, adding 100,000+ new properties in six months.","Turned features built for rapid growth into scalable solutions, resulting in $500,000 in monthly operational savings."]}],context:"SmartRent provides smart home automation, enabling remote control of IoT devices in homes and buildings.",theme:"Self-guided Tour, Smart Home as a Service Platform",workedOn:"The Self-Guided Tour product: new-market adaptation features, an API service for industry platforms, and hardening growth-era features.",perspective:"Good product solves a problem. Product led growth happens when the solution you provided is wanted by others.",accomplishments:["Grew from 250k to 1 million users within 6 months.","Launched an API-as-a-service business yielding $1.5M in ARR."]},{id:"brightfi",company:"BrightFi",short:"BrightFi",accent:"yellow",roles:[{title:"Founding Product Manager",short:"1st PM Hired",start:"2022-12",end:"2023-03",highlights:["Grew product adoption by 300% with a strategy focused on product-market fit for an Employee Retention Credit (ERC) tax product.","Identified a critical usability bottleneck in form intake through a targeted product experiment; the solution was projected to accelerate customer adoption by 4 weeks.","Partnered daily with the COO and CRO to keep product vision and execution aligned with business and revenue goals."]}],context:"BrightFi provides fintech solutions to community banks and credit unions.",theme:"BaaS for Community bank and Credit union",workedOn:"Product strategy for an Employee Retention Credit (ERC) tax product, working daily with the COO and CRO.",perspective:"How to do more with less? By solving the right problems.",accomplishments:["300% growth in product adoption and lead generation."]},{id:"shutterfly",company:"Shutterfly",short:"Shutterfly",accent:"orange",roles:[{title:"Staff Product Manager - Creation, Photo, AI Commerce",short:"Staff PM",start:"2026-02",end:null,highlights:["Built and released specialized AI agents for shopping personalization, promotions, help, and order management in the conversational chat experience, delivering $20M in incremental ARR with responsible AI guardrails developed alongside Security and Legal.","Launched AI photo augmentation and editing (Google Nano Banana) that enables prints of AI-generated products: a $40M ARR increase and a 4% improvement in cart conversion.","Grew an in-house AI product team of 2 PMs, 2 principal engineers, and 3 engineers across Desktop, mWeb, iOS, and Android.","Improved CSAT by 21% through user-centric AI solutions across the design ecosystem.","Built internal AI agents for release notes and design-to-story breakdowns, accelerating feature-to-release timelines by 10 days for quarter-long initiatives.","Partnered with BCG X on the 2026–2027 product roadmap and AI product strategy."]},{title:"Senior Product Manager II - Creation, Photo",short:"Senior PM II",start:"2023-08",end:"2026-01",highlights:["Led the 2-year, end-to-end replatforming of core design and photo tooling: 400+ strategic initiatives and $400M in incremental ARR.","Aligned a cross-functional organization of 80+ people across design, engineering, and data science on a multi-year replatforming of a $2B platform.","Seeded and executed the roadmap for an AI-powered photobook creator: a $4M ARR increase and creation time reduced from hours to seconds.","Architected a new data-tracking funnel with 12 A/B-testable user touchpoints.","Mentored a team of 4 product managers."]}],context:"Shutterfly brings memories to life by printing photos on physical products. I’m the product lead for Shutterfly’s design tools.",theme:"CREATION tool to help customize anything with your photo",workedOn:"A two-year replatforming of core design and photo tooling, an AI photobook creator, and now AI shopping agents and photo editing across Desktop, mWeb, iOS, and Android.",perspective:"AB testing streamlines decision making. AI can do a lot, builder needs to spend more time understanding the problems.",accomplishments:["Replatformed a $2B business across 400 initiatives: a 10.9% AOV lift and a 2.03% total sales lift, adding $146M in revenue.","Launched an AI commerce service for our users: $20M in incremental ARR."]}]},Ki={heading:"Where the thinking becomes tangible.",cases:[{id:"creation",letter:"A",kicker:"Shutterfly · 2023 – present",title:"Creation experiences at Shutterfly",summary:"Helping customers turn their photos into books, prints, and gifts they’re proud of.",accent:"lime",problem:"People arrive with a camera roll and an occasion. Getting from those photos to a finished book or gift could take hours of placing, cropping, and arranging.",role:"Senior Product Manager II, then Staff Product Manager and product lead for Shutterfly’s design tools.",complexity:"A 2-year replatforming of core design and photo tooling on a $2B platform: 400+ initiatives, with an 80+ person organization across design, engineering, and data science.",changed:["$400M in incremental ARR from the replatforming.","AI photobook creator: creation time from hours to seconds, and a $4M ARR increase.","A new tracking funnel with 12 A/B-testable touchpoints to guide decisions."],shows:"Automation should take on the tedious work without taking creative decisions away from the customer, and a platform rebuild earns its cost by making improvements like that easier to ship.",tags:["Customer control + automation","Creation UX","Platform modernization","Experimentation","Cross-functional alignment"]},{id:"ai",letter:"B",kicker:"Shutterfly · 2026 – present",title:"AI customer experiences",summary:"Conversational shopping help and AI photo enhancement across Desktop, mWeb, iOS, and Android.",accent:"sky",problem:"Customers want help finding the right product, deal, or order, and they want their photos to look their best. AI can help with both, but only if it is relevant, accurate, and safe.",role:"Staff Product Manager leading the AI Product team, which I grew to 2 PMs, 2 principal engineers, and 3 engineers.",complexity:"Specialized agents for shopping personalization, promotions, help, and order management, orchestrated with Amazon Bedrock, across four surfaces, with guardrails defined alongside Security and Legal.",changed:["$20M in incremental ARR from the conversational chat experience.","AI photo augmentation and editing: a $40M ARR increase and a 4% lift in cart conversion.","CSAT up 21% through user-centric AI across the design ecosystem."],shows:"A capability becomes customer value when the experience sets the right expectations and earns trust. Guardrails and quality after the demo are product work, not a launch checklist.",tags:["Capability → customer value","Expectations + trust","Responsible AI","Cross-surface"]}],builder:{letter:"C",kicker:"Founder → hands-on builder",title:"I like to make ideas tangible.",then:{label:"Then · 2020 – 2021",title:"Founder/CEO, Eyesbox AI",text:"Took a smart refrigerator camera from concept to a launched app on the App Store and Google Play, across hardware, AI, and mobile, with a team of 8 engineers. Pitched 50+ investors and secured a $10,000 grant."},atWork:{label:"At work · now",title:"Prototypes and internal agents",text:"I use AI-assisted prototyping to align leadership on high-fidelity experiences and give engineering precise requirements. I also built internal AI agents, one that drafts release notes from Jira and one that turns designs into epics and stories."},now:{label:"Now · personal projects",title:"Building in my own time",text:"Outside work, I design and build small web and mobile products to keep my instincts sharp.",projects:[{name:"OurFamilyBook",text:"Invite the people who love your child to answer a few questions; their words and photos become a book your family can keep.",url:"https://www.ourfamilybook.org"},{name:"Rumbly",text:"An AI kitchen companion that turns recipes, videos, and receipts into meal plans and a smart pantry.",url:"https://rumbly.ai"}],tools:["React Native","Supabase","Stripe","Claude Code"]},shows:"Building things myself keeps me honest about what’s hard, and makes conversations with design and engineering more concrete."},featured:{label:"Independent product exploration",title:"Making the next edit feel as good as the first build.",description:"After building with Bolt, I explored how visual refinement could feel more direct, predictable, and trustworthy.",insight:"Precise visual changes should not feel like starting the conversation again.",steps:[{label:"Noticed friction",text:"Small visual changes, like a color, a label, or some spacing, meant describing them in words and hoping the next generation got them right."},{label:"Framed a hypothesis",text:"If people can select what they see and change it directly, refinement will feel more predictable, and the code should still reflect those edits."},{label:"Built a prototype",text:"A clickable Visual Design mode: select any element, edit text in place, adjust it in an inspector, and review how edits map back to code."},{label:"Still to validate",text:"Which changes people prefer to make directly versus by prompt, whether direct edits stay trustworthy when code is regenerated, and how it holds up on real projects."}],implemented:["Selecting any element on a live page, with breadcrumbs and a layers panel","Editing text in place and adjusting layout, fill, stroke, and shadow in an inspector","Undo/redo, plus desktop, tablet, and mobile widths","Edits saved in your browser so they survive a reload"],simulated:["The AI box in the toolbar: prompts are matched to a few keywords, and no model is called","The chat history and version entries","The AI pass that applies your design when you leave Visual Design, and the code view: both are illustrative and don’t write to real source files"],disclosure:"Independent concept. Not affiliated with Bolt. Some prototype behaviors are simulated."}},be={reached:4e7,goal:1e9,reachedLabel:"~40M",goalLabel:"1B",headingReached:"40 million reached.",headingGoal:"One billion in sight.",body:"Through products I’ve managed, I’ve helped reach approximately 40 million users. My long-term ambition is to help build products that reach one billion.",standard:"Scale is the ambition. Usefulness is the standard.",figureLabel:"Approximate career reach · self-reported",definition:"My own estimate across products I’ve managed over my career. Not a daily or monthly active user count, not paying customers, and people may be counted in more than one product."},Vt={heading:["Competitive + strategy","= fun for me."],badminton:{title:"Badminton",line:"Competitive badminton player."},tft:{title:"Teamfight Tactics",line:"Top 1% of players base."},pickleball:{title:"Pickleball",line:"Another reason to get on a court."},personal:"I enjoy the mix of practice, strategy, and competition—and the fact that there is always another way to get better.",alsoInto:["Writing AI guides","Medium contributor","Notion template creator","Baldur’s Gate geek"]},xc={heading:"Let’s find something worth solving.",body:"Hiring for a product role, building something ambitious, or just want to compare notes on a hard problem? I’d like to hear from you."},Ua={hash:"bolt",footerLabel:"For the Bolt.new team",priority:{phasesNote:`Phase 1 runs on today’s AI save path and covers ${kg(1).length} of the PRD’s ${up.requirements.length} requirements. The re-architecture unlocks the rest, starting with token-free saves.`}},hp=[["#top","Top"],...pp.map(e=>[`#${e.id}`,e.label])],yc=[{id:"v2",role:"version",title:"Hi, I’m Alfred: new hero with photo",subtitle:"Version 2 at Oct 15 12:47 AM"},{id:"u1",role:"user",text:"Make the hero punchier. Replace the intro paragraph with my top three results as stat tiles: AI commerce $20M ARR, AI photo augmentation $40M ARR, replatforming $146M ARR. Give each tile an icon and a short detail that opens on hover, or on tap on phones."},{id:"a1",role:"assistant",text:"I'll swap the intro paragraph for three stat tiles under the hello. Each gets an icon and a detail card that opens on hover, keyboard focus, or tap. The figures and details live in content.ts so you can edit them in one place.",actions:["Read src/content.ts","Read src/components/Hero.tsx","Edited src/content.ts — hero.wins","Edited src/components/Hero.tsx — stat tiles","Edited src/styles.css — tile detail cards","Ran npm run build"]},{id:"v3",role:"version",title:"Hero stat tiles with detail cards",subtitle:"Version 3 at Oct 15 2:05 AM",current:!0}],vc="bolt-visual-design:chat:v2",fp=b.createContext(null);let _g=0;const wg=(e="m")=>`${e}${Date.now().toString(36)}${(_g++).toString(36)}`;function bg({children:e}){const[n,t]=b.useState(()=>{try{const s=localStorage.getItem(vc);if(s)return JSON.parse(s)}catch{}return yc});b.useEffect(()=>{try{localStorage.setItem(vc,JSON.stringify(n.filter(s=>s.role!=="typing")))}catch{}},[n]);const r=b.useCallback(s=>{const c="id"in s&&s.id?s.id:wg(),d={...s,id:c};return t(f=>{let h=f;return d.role==="version"&&(h=f.map(m=>m.role==="version"?{...m,current:!1}:m)),[...h,d]}),c},[]),a=b.useCallback(s=>t(c=>c.filter(d=>d.id!==s)),[]),l=b.useCallback(()=>t(yc),[]),o=b.useMemo(()=>({messages:n,add:r,remove:a,reset:l}),[n,r,a,l]);return i.jsx(fp.Provider,{value:o,children:e})}function Zo(){const e=b.useContext(fp);if(!e)throw new Error("useChat outside ChatProvider");return e}function jg(e=new Date){const n=e.toLocaleString("en-US",{month:"short"}),t=String(e.getDate()).padStart(2,"0"),r=e.toLocaleString("en-US",{hour:"numeric",minute:"2-digit"});return`${n} ${t} ${r}`}const Ng=[[/sky|light blue|baby blue/,"#87CEEB","sky blue"],[/lime|neon|green/,"#D7FF28","lime"],[/yellow|gold/,"#FFD23F","yellow"],[/orange/,"#F16122","orange"],[/coral|salmon|red|pink/,"#FF6E6C","coral"],[/purple|violet|lavender/,"#B79CFF","purple"],[/turquoise|teal|aqua|cyan/,"#40E0D0","turquoise"],[/\bblue\b/,"#0EA5E9","blue"],[/black|ink/,"#000000","black"],[/white/,"#FFFFFF","white"]];function Sg(e,n){const t=e.toLowerCase(),r=getComputedStyle(n),a=or(r.backgroundColor).hex,l=parseFloat(r.borderTopLeftRadius)||0,o=[];let s=null;/pill|capsule|fully round|super round/.test(t)?s="999px":/sharp|square|hard corner|no radius|brutal/.test(t)?s="0px":/round|soft|curv|corner|radius/.test(t)&&(s="14px");const c=/secondary|non[- ]?cta|ghost|outline|subtle|less (prominent|loud)|tone (it )?down|quiet|neutral/.test(t),d=!c&&/\bprimary\b|\bcta\b|prominent|stand out|main action/.test(t);let f=null;for(const[w,j,p]of Ng)if(w.test(t)){f={hex:j,name:p};break}const h=t.match(/#?\b([0-9a-f]{6}|[0-9a-f]{3})\b/i);h&&kt(h[1])&&(f={hex:kt(h[1]),name:kt(h[1])});let m=null;/no shadow|flat|remove (the )?shadow/.test(t)?m="none":/(big|bigg|more|deep)\w* shadow|pop/.test(t)&&(m="10px 10px 0px #000000");let k=null;/bigger|larger|increase|grow/.test(t)&&!/shadow/.test(t)&&(k="up"),/smaller|compact|shrink|decrease/.test(t)&&(k="down");const v=!s&&!c&&!d&&!f&&!m&&!k;if(v&&(s=l>0?"999px":"14px"),s&&o.push({label:`Corners ${Math.round(l)}px → ${s==="999px"?"pill":s}`,style:{borderRadius:s}}),c||v){const j=gc(a)==="#000000"&&a!=="#87CEEB"?"#87CEEB":"#FFFFFF";o.push({label:`Fill ${a} → ${j} (secondary)`,style:{backgroundColor:j,color:"#000000",borderColor:"#000000"}}),o.push({label:"Shadow softened to 4px",style:{boxShadow:"4px 4px 0px #000000"}})}else d&&o.push({label:`Fill ${a} → #000000 (primary CTA)`,style:{backgroundColor:"#000000",color:"#FFFFFF"}});if(f&&o.push({label:`Fill → ${f.name}`,style:{backgroundColor:f.hex,color:gc(f.hex)}}),m&&o.push({label:m==="none"?"Shadow removed":"Shadow deepened to 10px",style:{boxShadow:m}}),k){const w=parseFloat(r.fontSize),j=parseFloat(r.paddingLeft),p=parseFloat(r.paddingTop),u=k==="up"?1.18:.85;o.push({label:k==="up"?"Scaled up 18%":"Made more compact",style:{fontSize:`${Math.round(w*u)}px`,paddingLeft:`${Math.round(j*u)}px`,paddingRight:`${Math.round(j*u)}px`,paddingTop:`${Math.round(p*u)}px`,paddingBottom:`${Math.round(p*u)}px`}})}return o}const Va=e=>new Promise(n=>setTimeout(n,e));function Cg(){const e=yn(),n=Zo(),{getEl:t,setAi:r,setAnimating:a,select:l}=Oe();return b.useCallback(async(o,s)=>{var k;const c=((k=t(o))==null?void 0:k.closest('[data-kind="button"]'))??t(o);if(!c)return;const d=c.dataset.vid;if(d!==o&&l(d),c.dataset.kind!=="button"){r({id:d,prompt:s,phase:"unsupported",steps:[]});return}const f=Rr(c),h=Sg(s,c);r({id:d,prompt:s,phase:"thinking",steps:h.map(v=>({label:v.label,done:!1}))}),await Va(1100),a(d),r(v=>v&&{...v,phase:"applying"});const m=`ai:${d}:${Date.now()}`;for(let v=0;v<h.length;v++)await Va(v===0?150:520),e.setStyle(d,h[v].style,m),r(w=>w&&{...w,steps:w.steps.map((j,p)=>p===v?{...j,done:!0}:j)});await Va(700),a(null),r(v=>v&&{...v,phase:"done"}),n.add({role:"assistant",badge:"Visual Design · AI edit",text:`Updated the “${f}” button from your prompt “${s.trim()||"make it rounded & secondary"}”:
${h.map(v=>`• ${v.label}`).join(`
`)}
It’s in your Visual Design draft. AI applies it to code when you leave Visual Design.`})},[e,n,t,r,a,l])}function Jo(e,n,t=!0){b.useEffect(()=>{if(!t)return;const r=a=>{e.current&&!e.current.contains(a.target)&&n()};return document.addEventListener("pointerdown",r,!0),()=>document.removeEventListener("pointerdown",r,!0)},[e,n,t])}function pe({prefix:e,value:n,onChange:t,min:r=-1/0,max:a=1/0,step:l=1,suffix:o,title:s,disabled:c,display:d}){const[f,h]=b.useState(null),m=j=>Math.min(a,Math.max(r,Math.round(j/l)*l)),k=j=>Math.round(j*100)/100,v=j=>{if(c)return;j.preventDefault();const p=j.clientX,u=n,y=N=>{const g=N.shiftKey?10:1;t(k(m(u+Math.round((N.clientX-p)/2)*l*g)))},_=()=>{window.removeEventListener("pointermove",y),window.removeEventListener("pointerup",_),document.body.classList.remove("is-scrubbing")};document.body.classList.add("is-scrubbing"),window.addEventListener("pointermove",y),window.addEventListener("pointerup",_)},w=()=>{if(f===null)return;const j=parseFloat(f);Number.isNaN(j)||t(k(m(j))),h(null)};return i.jsxs("label",{className:`scrub ${c?"is-disabled":""}`,title:s,children:[i.jsx("span",{className:"scrub__prefix",onPointerDown:v,children:e}),i.jsx("input",{value:f??d??String(k(n)),disabled:c,onFocus:j=>j.currentTarget.select(),onChange:j=>h(j.target.value),onBlur:w,onKeyDown:j=>{if(j.key==="Enter"&&(w(),j.currentTarget.blur()),j.key==="ArrowUp"||j.key==="ArrowDown"){j.preventDefault();const p=(j.key==="ArrowUp"?1:-1)*l*(j.shiftKey?10:1);h(null),t(k(m(n+p)))}}}),o&&i.jsx("span",{className:"scrub__suffix",children:o})]})}function Xt({value:e,options:n,onChange:t,size:r="md"}){return i.jsx("div",{className:`seg seg--${r}`,children:n.map(a=>i.jsxs("button",{className:`seg__btn ${e===a.value?"is-active":""}`,title:a.title??a.label,onClick:()=>t(a.value),type:"button",children:[a.icon,a.label&&i.jsx("span",{children:a.label})]},a.value))})}function Ul({on:e,onChange:n,label:t}){return i.jsxs("button",{type:"button",className:`toggle ${e?"is-on":""}`,onClick:()=>n(!e),"aria-pressed":e,children:[i.jsx("span",{className:"toggle__track",children:i.jsx("span",{className:"toggle__thumb"})}),t&&i.jsx("span",{children:t})]})}function Gi({title:e,value:n,onChange:t,allowNone:r}){const[a,l]=b.useState(n??"");b.useEffect(()=>l(n??""),[n]);const o=(n==null?void 0:n.toUpperCase())??null,s=async()=>{const c=window.EyeDropper;if(c)try{const d=await new c().open(),f=kt(d.sRGBHex);f&&t(f)}catch{}};return i.jsxs("div",{className:"colorpanel",onPointerDown:c=>c.stopPropagation(),children:[i.jsxs("div",{className:"colorpanel__head",children:[i.jsx("span",{children:e}),i.jsx("span",{className:"colorpanel__sub",children:"Theme colors"})]}),i.jsxs("div",{className:"colorpanel__grid",children:[r&&i.jsx("button",{className:`swatch swatch--none ${o===null?"is-active":""}`,title:"None",onClick:()=>t(null),children:i.jsx(nm,{size:14})}),Yo.map(c=>i.jsx("button",{className:`swatch ${o===c.hex?"is-active":""}`,style:{background:c.hex},title:`${c.name} ${c.hex}`,onClick:()=>t(c.hex),children:o===c.hex&&i.jsx(Mt,{size:12,strokeWidth:3,color:c.hex==="#000000"||c.hex==="#1E1E1E"?"#fff":"#000"})},c.hex))]}),i.jsxs("div",{className:"colorpanel__custom",children:[i.jsx("label",{className:"colorpanel__native",style:{background:o??"transparent"},title:"Custom color",children:i.jsx("input",{type:"color",value:o??"#000000",onChange:c=>t(c.target.value.toUpperCase())})}),i.jsx("input",{className:"colorpanel__hex",value:a,placeholder:"None",spellCheck:!1,onChange:c=>{l(c.target.value);const d=kt(c.target.value);d&&t(d)},onBlur:()=>l(n??"")}),"EyeDropper"in window&&i.jsx("button",{className:"icon-btn",title:"Pick from screen",onClick:s,children:i.jsx(Cm,{size:14})})]})]})}function qt({value:e,onChange:n,title:t,allowNone:r}){const[a,l]=b.useState(!1),o=b.useRef(null);return Jo(o,()=>l(!1),a),i.jsxs("div",{className:"colorfield",ref:o,children:[i.jsxs("button",{className:"colorfield__btn",onClick:()=>l(s=>!s),children:[i.jsx("span",{className:`colorfield__chip ${e?"":"is-none"}`,style:{background:e??void 0}}),i.jsx("span",{className:"colorfield__hex",children:e?e.replace("#",""):"None"})]}),a&&i.jsx("div",{className:"colorfield__pop",children:i.jsx(Gi,{title:t,value:e,onChange:n,allowNone:r})})]})}const zg=["Round the corners & make it secondary","Make it a pill","Make it sky blue","Back to a sharp primary CTA"];function on({title:e,active:n,onClick:t,children:r,disabled:a}){return i.jsx("button",{type:"button",className:`ctb__btn ${n?"is-active":""}`,"data-tip":e,"aria-label":e,onClick:t,disabled:a,children:r})}function Eg({id:e,onGrip:n}){const t=sp(e),r=yn(),a=Ir(),{select:l,ai:o,setAi:s}=Oe(),c=Cg(),[d,f]=b.useState(null),[h,m]=b.useState(""),[k,v]=b.useState(!1),w=b.useRef(null);if(Jo(w,()=>f(null),d!==null),b.useEffect(()=>{f(null),m("")},[e]),!t)return null;const j=t.kind,p=cp.includes(j)||j==="container"||j==="section",u=j==="icon"||j==="graphic",y=j==="button"||j==="link",_=o&&o.id===e?o:null,N=(_==null?void 0:_.phase)==="thinking"||(_==null?void 0:_.phase)==="applying",g=(L,B)=>r.setStyle(e,L,`${e}:${B}`),S=L=>f(B=>B===L?null:L),$=(L=h)=>{N||(v(!1),m(""),c(e,L))},C=u?Mg(e):0,z=t.textAlign==="center"?Ru:t.textAlign==="right"?Du:Fu;return i.jsxs("div",{className:"ctb",ref:w,children:[i.jsxs("div",{className:"ctb__bar",children:[i.jsx("span",{className:"ctb__grip",onPointerDown:n,title:"Drag toolbar",children:i.jsx(um,{size:16})}),p&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"ctb__stepper",children:[i.jsx("button",{type:"button","aria-label":"Decrease font size",onClick:()=>g({fontSize:`${Math.max(8,t.fontSize-1)}px`},"fs"),children:i.jsx(Vi,{size:14})}),i.jsx("input",{"aria-label":"Font size",value:t.fontSize,onChange:L=>{const B=parseInt(L.target.value,10);B>0&&g({fontSize:`${B}px`},"fs")}}),i.jsx("button",{type:"button","aria-label":"Increase font size",onClick:()=>g({fontSize:`${t.fontSize+1}px`},"fs"),children:i.jsx($t,{size:14})})]}),i.jsx(on,{title:"Bold",active:t.fontWeight>=600,onClick:()=>g({fontWeight:t.fontWeight>=600?"400":"700"},"fw"),children:i.jsx(rm,{size:16})}),i.jsx(on,{title:`Align ${t.textAlign}`,onClick:()=>{const L=["left","center","right"],B=L[(L.indexOf(t.textAlign)+1)%3]??"left";g({textAlign:B},"ta")},children:i.jsx(z,{size:16})}),i.jsx(on,{title:t.textTransform==="uppercase"?"Sentence case":"Uppercase",active:t.textTransform==="uppercase",onClick:()=>g({textTransform:t.textTransform==="uppercase"?"none":"uppercase"},"tt"),children:i.jsx(am,{size:17})})]}),u&&i.jsxs("div",{className:"ctb__stepper",children:[i.jsx("button",{type:"button","aria-label":"Smaller icon",onClick:()=>g({"--icon-size":`${Math.max(8,C-2)}px`},"is"),children:i.jsx(Vi,{size:14})}),i.jsx("input",{"aria-label":"Icon size",value:C,readOnly:!0}),i.jsx("button",{type:"button","aria-label":"Larger icon",onClick:()=>g({"--icon-size":`${C+2}px`},"is"),children:i.jsx($t,{size:14})})]}),y&&i.jsx(on,{title:"Link",active:d==="link",onClick:()=>S("link"),children:i.jsx(Ko,{size:16})}),i.jsx("span",{className:"ctb__sep"}),!u&&i.jsx(on,{title:"Corner radius",active:d==="radius",onClick:()=>S("radius"),children:i.jsx(mp,{})}),i.jsx(on,{title:u?"Icon color":"Text color",active:d==="text",onClick:()=>S("text"),children:i.jsxs("span",{className:"ctb__aa",children:["Aa",i.jsx("i",{style:{background:t.color}})]})}),!u&&i.jsxs(i.Fragment,{children:[i.jsx(on,{title:"Fill",active:d==="fill",onClick:()=>S("fill"),children:i.jsxs("span",{className:"ctb__aa",children:[i.jsx(Nm,{size:16}),i.jsx("i",{className:t.fill.alpha===0?"is-none":"",style:{background:t.fill.alpha===0?void 0:t.fill.hex}})]})}),i.jsx(on,{title:"Stroke",active:d==="stroke",onClick:()=>S("stroke"),children:t.strokeWidth?i.jsx(Tm,{size:16,strokeWidth:2.6}):i.jsx(Am,{size:16})})]}),i.jsx("span",{className:"ctb__sep"}),i.jsx(on,{title:"Hide element",onClick:()=>{r.setHidden(e,!0),l(null),a(`Hidden “${t.label||j}”`,{label:"Undo",run:()=>r.setHidden(e,!1)})},children:i.jsx(Qo,{size:16})}),i.jsxs("form",{className:`ctb__ai ${k?"is-focus":""} ${N?"is-busy":""}`,onSubmit:L=>{L.preventDefault(),$()},children:[i.jsx(Lt,{size:15,className:"ctb__ai-icon"}),i.jsx("input",{value:h,disabled:N,placeholder:N?"Bolt is editing…":j==="button"?"Ask AI to edit this button…":"Ask AI to edit…",onChange:L=>m(L.target.value),onFocus:()=>v(!0),onBlur:()=>setTimeout(()=>v(!1),150),onKeyDown:L=>L.stopPropagation()}),i.jsx("button",{type:"submit",className:"ctb__send","aria-label":"Send to AI",disabled:N,children:N?i.jsx(Ui,{size:14,className:"spin"}):i.jsx(Vo,{size:14,strokeWidth:2.5})})]})]}),k&&!h&&!_&&j==="button"&&i.jsxs("div",{className:"ctb__panel ctb__suggest",children:[i.jsxs("span",{className:"ctb__panel-title",children:[i.jsx(Lt,{size:12})," Try"]}),zg.map(L=>i.jsx("button",{type:"button",onMouseDown:B=>B.preventDefault(),onClick:()=>$(L),children:L},L))]}),_&&i.jsx($g,{run:_,onUndo:()=>{r.undo(),s(null)},onClose:()=>s(null)}),d&&i.jsxs("div",{className:"ctb__pop",children:[d==="text"&&i.jsx(Gi,{title:u?"Icon color":"Text color",value:t.color,onChange:L=>g({color:L??void 0},"color")}),d==="fill"&&i.jsx(Gi,{title:"Fill",allowNone:!0,value:t.fill.alpha===0?null:t.fill.hex,onChange:L=>g({backgroundColor:L??"transparent"},"bg")}),d==="radius"&&i.jsx(Lg,{snap:t,onChange:L=>g({borderRadius:`${L}px`},"radius")}),d==="stroke"&&i.jsx(Pg,{snap:t,set:g}),d==="link"&&i.jsx(Ag,{id:e,snap:t})]})]})}function Mg(e){const n=document.querySelector(`[data-vid="${CSS.escape(e)}"] svg`);return n?Math.round(n.getBoundingClientRect().width):24}function mp(){return i.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[i.jsx("path",{d:"M4 20V11a7 7 0 0 1 7-7h9"}),i.jsx("path",{d:"M4 20h2M20 4v2",opacity:".5"})]})}function $g({run:e,onUndo:n,onClose:t}){return e.phase==="unsupported"?i.jsxs("div",{className:"ctb__panel ctb__ai-panel",children:[i.jsxs("div",{className:"ctb__ai-head",children:[i.jsx(Lt,{size:14}),i.jsx("span",{children:"AI edits are wired to buttons in this prototype."}),i.jsx("button",{className:"icon-btn",onClick:t,"aria-label":"Dismiss",children:i.jsx(qi,{size:14})})]}),i.jsx("p",{className:"ctb__ai-note",children:"Select a button such as “See my work” and ask again — or use the controls above."})]}):i.jsxs("div",{className:`ctb__panel ctb__ai-panel is-${e.phase}`,children:[i.jsxs("div",{className:"ctb__ai-head",children:[e.phase==="done"?i.jsx(Mt,{size:14,className:"ok"}):i.jsx(Lt,{size:14,className:"pulse"}),i.jsxs("span",{children:[e.phase==="thinking"&&"Reading the button styles…",e.phase==="applying"&&"Applying edits live…",e.phase==="done"&&"Done · not in code yet"]}),e.phase==="done"&&i.jsxs("span",{className:"ctb__ai-actions",children:[i.jsxs("button",{onClick:n,children:[i.jsx(Go,{size:13})," Undo"]}),i.jsx("button",{className:"is-primary",onClick:t,children:"Keep"})]})]}),i.jsxs("div",{className:"ctb__ai-prompt",children:[i.jsx(om,{size:12})," “",e.prompt||"Round the corners & make it secondary","”"]}),i.jsx("ul",{className:"ctb__steps",children:e.steps.map((r,a)=>i.jsxs("li",{className:r.done?"is-done":"",style:{animationDelay:`${a*90}ms`},children:[i.jsx("span",{className:"ctb__step-dot",children:r.done?i.jsx(Mt,{size:11,strokeWidth:3}):i.jsx(Ui,{size:11,className:e.phase==="thinking"?"":"spin"})}),r.label]},a))})]})}function Lg({snap:e,onChange:n}){const t=[["Sharp",0],["Soft",6],["Round",14],["Pill",999]],r=Math.min(e.radius,999);return i.jsxs("div",{className:"minipanel",children:[i.jsx("div",{className:"minipanel__head",children:"Corner radius"}),i.jsx("div",{className:"minipanel__chips",children:t.map(([a,l])=>i.jsxs("button",{className:r===l?"is-active":"",onClick:()=>n(l),children:[i.jsx("span",{className:"radius-demo",style:{borderRadius:Math.min(l,9)}}),a]},a))}),i.jsxs("div",{className:"minipanel__row",children:[i.jsx("input",{type:"range",min:0,max:48,value:Math.min(r,48),onChange:a=>n(+a.target.value)}),i.jsx(pe,{prefix:i.jsx(mp,{}),value:r,min:0,max:999,onChange:n})]})]})}function Pg({snap:e,set:n}){return i.jsxs("div",{className:"minipanel minipanel--wide",children:[i.jsxs("div",{className:"minipanel__row",children:[i.jsx("span",{className:"minipanel__head",children:"Stroke"}),i.jsx(pe,{prefix:"W",value:e.strokeWidth,min:0,max:12,onChange:t=>n({borderWidth:`${t}px`,borderStyle:t?"solid":"none"},"bw")})]}),i.jsx(Gi,{title:"Stroke color",value:e.strokeColor,onChange:t=>n({borderColor:t??void 0,borderStyle:"solid"},"bc")})]})}function Ag({id:e,snap:n}){const t=yn(),[r,a]=b.useState(n.href??"");b.useEffect(()=>a(n.href??""),[n.href]);const l=n.target==="_blank";return i.jsxs("div",{className:"minipanel minipanel--wide",children:[i.jsx("div",{className:"minipanel__head",children:"Link"}),i.jsx("input",{className:"field",value:r,placeholder:"https:// or #section",spellCheck:!1,onChange:o=>{a(o.target.value),t.setLink(e,{href:o.target.value},`${e}:href`)},onKeyDown:o=>o.stopPropagation()}),i.jsx("div",{className:"minipanel__chips",children:hp.map(([o,s])=>i.jsx("button",{className:n.href===o?"is-active":"",onClick:()=>t.setLink(e,{href:o,target:"_self"},`${e}:href`),children:s},o))}),i.jsxs("div",{className:"minipanel__row",children:[i.jsx(Ul,{on:l,onChange:o=>t.setLink(e,{target:o?"_blank":"_self"}),label:"Open in new tab"}),n.href&&/^https?:/.test(n.href)&&i.jsx("a",{className:"minipanel__test",href:n.href,target:"_blank",rel:"noreferrer",children:"Test ↗"})]})]})}const Tg=["nw","n","ne","e","se","s","sw","w"];function kc(e){return Hl(e)?e:Array.from(e.querySelectorAll("[data-vid]")).find(Hl)??null}function Ig(){const{mode:e,rootRef:n,selectedId:t,hoverId:r,setHover:a,select:l,editingId:o,startEdit:s,getEl:c,ai:d}=Oe(),f=yn(),h=Ir(),m=e==="design",k=b.useRef(null),v=b.useRef(null),w=b.useRef(null),j=b.useRef(null),p=b.useRef(null),u=b.useRef(null),y=b.useRef(null),_=b.useRef(null),N=b.useRef(t);N.current=t;const g=b.useRef(r);g.current=r,b.useEffect(()=>{_.current=null},[t]),b.useEffect(()=>{const D=n.current;if(!m||!D)return;const se=A=>{var ae,re;const F=(ae=A==null?void 0:A.closest)==null?void 0:ae.call(A,"[data-vid]");if(!F||!D.contains(F))return null;const H=(re=F.parentElement)==null?void 0:re.closest('[data-kind="button"],[data-kind="link"]');if(H&&D.contains(H)){const U=c(N.current);if(!(U&&(U===H||H.contains(U))))return H}return F},ee=A=>{var H;const F=((H=se(A.target))==null?void 0:H.dataset.vid)??null;F!==g.current&&a(F)},V=()=>a(null),M=A=>{var H;const F=c(o);F&&F.contains(A.target)||(A.preventDefault(),A.stopPropagation(),l(((H=se(A.target))==null?void 0:H.dataset.vid)??null))},R=A=>{A.preventDefault();const F=A.target.closest("[data-vid]"),H=F&&kc(F);H!=null&&H.dataset.vid&&s(H.dataset.vid)},I=A=>{var ge;if(A.target.closest("input, textarea, select, [contenteditable]"))return;const H=A.metaKey||A.ctrlKey,ae=A.key.toLowerCase();if(H&&ae==="z"){A.preventDefault(),A.shiftKey?f.redo():f.undo();return}if(H&&ae==="y"){A.preventDefault(),f.redo();return}const re=N.current;if(!re)return;const U=c(re);if(A.key==="Escape"){const ce=(ge=U==null?void 0:U.parentElement)==null?void 0:ge.closest("[data-vid]");l(ce&&D.contains(ce)?ce.dataset.vid:null)}else if(A.key==="Delete"||A.key==="Backspace"){A.preventDefault();const ce=U?Rr(U):"element";f.setHidden(re,!0),l(null),h(`Hidden “${ce}”`,{label:"Undo",run:()=>f.setHidden(re,!1)})}else if(A.key==="Enter"&&U){A.preventDefault();const ce=kc(U);ce!=null&&ce.dataset.vid&&s(ce.dataset.vid)}};return D.addEventListener("pointermove",ee),D.addEventListener("pointerleave",V),D.addEventListener("click",M,!0),D.addEventListener("dblclick",R,!0),window.addEventListener("keydown",I),()=>{D.removeEventListener("pointermove",ee),D.removeEventListener("pointerleave",V),D.removeEventListener("click",M,!0),D.removeEventListener("dblclick",R,!0),window.removeEventListener("keydown",I)}},[m,n,c,l,a,s,o,f,h]);const S=!!d&&d.id===t&&(d.phase==="thinking"||d.phase==="applying");if(b.useEffect(()=>{if(!m)return;let D=0;const se=(V,M,R)=>{if(!V)return null;const I=M&&M.style.display!=="none"?M.getBoundingClientRect():null;if(!I||I.width===0&&I.height===0)return V.style.visibility="hidden",null;const A=I.left-R.left,F=I.top-R.top;return V.style.visibility="visible",V.style.transform=`translate(${A}px, ${F}px)`,V.style.width=`${I.width}px`,V.style.height=`${I.height}px`,V.dataset.edgeTop=F<26?"1":"",{x:A,y:F,w:I.width,h:I.height}},ee=()=>{const V=k.current;if(V){const M=V.getBoundingClientRect(),R=c(t),I=se(j.current,R,M);I&&p.current&&R&&(p.current.textContent=`${R.offsetWidth||Math.round(I.w)} × ${R.offsetHeight||Math.round(I.h)}`),se(u.current,S?R:null,M),se(v.current,r&&r!==t?c(r):null,M);const A=y.current;if(A&&I){const F=A.querySelector(".ctb__bar"),H=(F==null?void 0:F.offsetHeight)??52,ae=(F==null?void 0:F.offsetWidth)??A.offsetWidth;let re,U,ge;if(_.current)({x:re,y:U}=_.current),ge=U>M.height/2?"above":"below";else{const ts=I.y+I.h+34;ge=ts+H+8<M.height?"below":"above",U=ge==="below"?ts:I.y-14-H,re=I.x+I.w/2-ae/2}re=Math.max(8,Math.min(re,M.width-ae-8)),U=Math.max(8,Math.min(U,M.height-H-8)),A.style.transform=`translate(${re}px, ${U}px)`,A.style.visibility="visible",A.dataset.place=ge;const ce=M.height-(U+H);A.dataset.pop=ce>300||U<ce?"down":"up"}else A&&(A.style.visibility="hidden")}D=requestAnimationFrame(ee)};return D=requestAnimationFrame(ee),()=>cancelAnimationFrame(D)},[m,t,r,c,S]),!m)return null;const $=c(t),C=c(r),z=($==null?void 0:$.dataset.kind)??"container",L=!!o&&o===t,B=D=>se=>{const ee=c(t);if(!ee||!t)return;se.preventDefault(),se.stopPropagation();const V=t,M=se.clientX,R=se.clientY,I=ee.offsetWidth,A=ee.offsetHeight,F=`resize:${V}:${Date.now()}`;getComputedStyle(ee).display==="inline"&&f.setStyle(V,{display:"inline-block"},F);const H=re=>{const U=re.clientX-M,ge=re.clientY-R,ce={};(D.includes("e")||D.includes("w"))&&(ce.width=`${Math.max(8,Math.round(I+(D.includes("w")?-U:U)))}px`,ce.maxWidth="none"),(D.includes("s")||D.includes("n"))&&(ce.height=`${Math.max(8,Math.round(A+(D.includes("n")?-ge:ge)))}px`),f.setStyle(V,ce,F)},ae=()=>{window.removeEventListener("pointermove",H),window.removeEventListener("pointerup",ae),document.body.classList.remove("is-resizing")};document.body.classList.add("is-resizing"),window.addEventListener("pointermove",H),window.addEventListener("pointerup",ae)},we=D=>{D.preventDefault();const se=y.current;if(!se)return;const ee=se.style.transform.match(/translate\((-?[\d.]+)px, (-?[\d.]+)px\)/),V=ee?parseFloat(ee[1]):0,M=ee?parseFloat(ee[2]):0,R=D.clientX,I=D.clientY,A=H=>{_.current={x:V+H.clientX-R,y:M+H.clientY-I}},F=()=>{window.removeEventListener("pointermove",A),window.removeEventListener("pointerup",F)};window.addEventListener("pointermove",A),window.addEventListener("pointerup",F)};return i.jsxs("div",{className:"dl",ref:k,children:[i.jsx("div",{className:"dl__hover",ref:v,children:i.jsx("span",{className:"dl__chip dl__chip--ghost",ref:w,children:C?Er[C.dataset.kind??"container"]:""})}),i.jsx("div",{className:"dl__ai",ref:u,children:i.jsx("span",{className:"dl__ai-sweep"})}),i.jsx("div",{className:`dl__sel ${L?"is-editing":""}`,ref:j,children:$&&i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"dl__chip",children:L?"Editing text":Er[z]}),!L&&Tg.map(D=>i.jsx("span",{className:`dl__handle dl__handle--${D}`,onPointerDown:B(D)},D)),i.jsx("span",{className:"dl__size",ref:p})]})}),t&&!L&&i.jsx("div",{className:"dl__tb",ref:y,children:i.jsx(Eg,{id:t,onGrip:we})})]})}function Rg({onDone:e,pending:n}){const{selectedId:t,getEl:r,select:a,setHover:l,device:o,setDevice:s}=Oe(),{canUndo:c,canRedo:d}=Jn(),f=yn(),h=gg(r(t)),m=`${n} ${n===1?"change":"changes"}`;return i.jsxs("div",{className:"strip",children:[i.jsx("div",{className:"strip__left",children:i.jsx("div",{className:"strip__crumbs",children:h.length===0?i.jsx("span",{className:"strip__hint",children:"Click any element to select it · double-click text to edit"}):h.map((k,v)=>i.jsxs(b.Fragment,{children:[v>0&&i.jsx(vt,{size:12,className:"strip__sep"}),i.jsx("button",{className:v===h.length-1?"is-current":"",onClick:()=>a(k.dataset.vid),onPointerEnter:()=>l(k.dataset.vid),onPointerLeave:()=>l(null),children:Rr(k)})]},k.dataset.vid))})}),i.jsxs("div",{className:"strip__right",children:[i.jsx("button",{className:"icon-btn","data-tip":"Undo  ⌘Z",disabled:!c,onClick:f.undo,children:i.jsx(Go,{size:15})}),i.jsx("button",{className:"icon-btn","data-tip":"Redo  ⇧⌘Z",disabled:!d,onClick:f.redo,children:i.jsx(Em,{size:15})}),i.jsx("span",{className:"strip__div"}),i.jsx(Xt,{size:"sm",value:o,onChange:s,options:[{value:"desktop",icon:i.jsx(qu,{size:14}),title:"Desktop"},{value:"tablet",icon:i.jsx(Xu,{size:14}),title:"Tablet · 834"},{value:"mobile",icon:i.jsx(Yu,{size:14}),title:"Mobile · 390"}]}),i.jsx("span",{className:"strip__div"}),i.jsxs("span",{className:`draft ${n?"has-changes":""}`,"data-tip":"AI applies your changes to code when you leave",children:[i.jsx(Hu,{size:14}),n?`${m} · not in code yet`:"No changes yet"]}),i.jsx("button",{className:"btn btn--blue btn--sm",onClick:e,children:n?i.jsxs(i.Fragment,{children:[i.jsx(Lt,{size:13})," Apply ",m]}):"Done"})]})]})}function Ke({title:e,children:n,action:t}){return i.jsxs("section",{className:"insp__sec",children:[i.jsxs("header",{children:[i.jsx("h4",{children:e}),t]}),n]})}function Fg(){var u,y,_,N;const{selectedId:e,getEl:n,select:t}=Oe(),{doc:r}=Jn(),a=yn(),l=sp(e),[o,s]=b.useState("");if(b.useEffect(()=>{l!=null&&l.isLeafText&&s(l.text)},[l==null?void 0:l.text,l==null?void 0:l.isLeafText,e]),!e||!l)return i.jsx(Dg,{});const c=e,d=r[c],f=l.kind,h=cp.includes(f)||f==="container"||f==="section",m=f==="button"||f==="link",k=l.display.includes("flex"),v=(g,S)=>a.setStyle(c,g,`${c}:${S}`),w=g=>v({boxShadow:fg({...l.shadow,...g})},"shadow"),j=g=>{var $;const S=($=d==null?void 0:d.style)==null?void 0:$[g];return S?S==="fit-content"?"hug":S==="100%"?"fill":"fixed":"auto"},p=(y=(u=n(c))==null?void 0:u.parentElement)==null?void 0:y.closest("[data-vid]");return i.jsxs("aside",{className:"insp",children:[i.jsxs("div",{className:"insp__head",children:[i.jsx("span",{className:"insp__kind",children:i.jsx(Xo,{kind:f})}),i.jsxs("div",{className:"insp__title",children:[i.jsx("strong",{children:l.label||Er[f]}),i.jsxs("span",{children:[Er[f]," · <",l.tag,">"]})]}),i.jsxs("div",{className:"insp__head-actions",children:[p&&i.jsx("button",{className:"icon-btn","data-tip":"Select parent (Esc)",onClick:()=>t(p.dataset.vid),children:i.jsx(Vg,{})}),i.jsx("button",{className:"icon-btn","data-tip":d!=null&&d.hidden?"Show":"Hide",onClick:()=>a.setHidden(c,!(d!=null&&d.hidden)),children:d!=null&&d.hidden?i.jsx(Qo,{size:15}):i.jsx(ha,{size:15})}),i.jsx("button",{className:"icon-btn","data-tip":"Reset to original",disabled:!d,onClick:()=>a.resetNode(c),children:i.jsx(Mm,{size:15})})]})]}),i.jsxs("div",{className:"insp__body",children:[l.isLeafText&&i.jsx(Ke,{title:"Content",children:i.jsx("textarea",{className:"field field--area",value:o,rows:Math.min(5,Math.max(2,Math.ceil(o.length/30))),onChange:g=>{s(g.target.value),a.setText(c,g.target.value,`text:${c}`)}})}),m&&i.jsxs(Ke,{title:"Link",children:[i.jsxs("div",{className:"field-icon",children:[i.jsx(Ko,{size:14}),i.jsx("input",{className:"field",value:(d==null?void 0:d.href)??l.href??"",placeholder:"https:// or #section",spellCheck:!1,onChange:g=>a.setLink(c,{href:g.target.value},`${c}:href`)})]}),i.jsx("div",{className:"insp__row",children:i.jsxs("select",{className:"field field--select",value:(_=l.href)!=null&&_.startsWith("#")?l.href:"",onChange:g=>g.target.value&&a.setLink(c,{href:g.target.value,target:"_self"}),children:[i.jsx("option",{value:"",children:"Jump to section…"}),hp.map(([g,S])=>i.jsx("option",{value:g,children:S},g))]})}),i.jsx(Ul,{on:l.target==="_blank",onChange:g=>a.setLink(c,{target:g?"_blank":"_self"}),label:"Open in new tab"})]}),i.jsxs(Ke,{title:"Layout",children:[i.jsxs("div",{className:"insp__grid2",children:[i.jsx(pe,{prefix:"W",value:l.width,min:0,onChange:g=>v({width:`${g}px`,maxWidth:"none"},"w")}),i.jsx(pe,{prefix:"H",value:l.height,min:0,onChange:g=>v({height:`${g}px`},"h")}),i.jsxs("select",{className:"field field--select field--sm",value:j("width"),onChange:g=>{const S=g.target.value;v({width:S==="hug"?"fit-content":S==="fill"?"100%":S==="fixed"?`${l.width}px`:void 0},"wm")},children:[i.jsx("option",{value:"auto",children:"Auto width"}),i.jsx("option",{value:"hug",children:"Hug contents"}),i.jsx("option",{value:"fill",children:"Fill container"}),i.jsx("option",{value:"fixed",children:"Fixed"})]}),i.jsxs("select",{className:"field field--select field--sm",value:j("height"),onChange:g=>{const S=g.target.value;v({height:S==="hug"?"fit-content":S==="fill"?"100%":S==="fixed"?`${l.height}px`:void 0},"hm")},children:[i.jsx("option",{value:"auto",children:"Auto height"}),i.jsx("option",{value:"hug",children:"Hug contents"}),i.jsx("option",{value:"fill",children:"Fill container"}),i.jsx("option",{value:"fixed",children:"Fixed"})]})]}),i.jsxs("div",{className:"insp__grid2",children:[i.jsx(pe,{prefix:i.jsx(bm,{size:13}),title:"Horizontal padding",value:l.padX,min:0,onChange:g=>v({paddingLeft:`${g}px`,paddingRight:`${g}px`},"px")}),i.jsx(pe,{prefix:i.jsx(jm,{size:13}),title:"Vertical padding",value:l.padY,min:0,onChange:g=>v({paddingTop:`${g}px`,paddingBottom:`${g}px`},"py")})]}),k&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"insp__row",children:[i.jsx(Xt,{size:"sm",value:l.flexDirection.startsWith("column")?"column":"row",onChange:g=>v({flexDirection:g},"dir"),options:[{value:"row",icon:i.jsx(Ou,{size:13}),title:"Horizontal"},{value:"column",icon:i.jsx(Wo,{size:13}),title:"Vertical"}]}),i.jsx(pe,{prefix:"Gap",value:l.gap,min:0,onChange:g=>v({gap:`${g}px`},"gap")})]}),i.jsx("div",{className:"insp__row",children:i.jsx(Xt,{size:"sm",value:["flex-start","center","flex-end"].includes(l.alignItems)?l.alignItems:"normal",onChange:g=>v({alignItems:g},"ai"),options:[{value:"flex-start",label:"Start",title:"Align start"},{value:"center",label:"Center",title:"Align center"},{value:"flex-end",label:"End",title:"Align end"}]})})]})]}),i.jsx(Ke,{title:"Appearance",children:i.jsxs("div",{className:"insp__grid2",children:[i.jsx(pe,{prefix:i.jsx(Bg,{}),title:"Opacity",value:l.opacity,min:0,max:100,suffix:"%",onChange:g=>v({opacity:String(g/100)},"op")}),i.jsx(pe,{prefix:i.jsx(Og,{}),title:"Corner radius",value:Math.min(l.radius,999),min:0,max:999,onChange:g=>v({borderRadius:`${g}px`},"radius")}),i.jsx(pe,{prefix:i.jsx(Gu,{size:13}),title:"Rotation",value:l.rotate,step:.5,suffix:"°",onChange:g=>v({rotate:`${g}deg`},"rot")})]})}),i.jsx(Ke,{title:"Fill",action:l.fill.alpha===0?i.jsx("button",{className:"icon-btn","data-tip":"Add fill",onClick:()=>v({backgroundColor:Yo[0].hex},"bg"),children:i.jsx($t,{size:14})}):i.jsx("button",{className:"icon-btn","data-tip":"Remove fill",onClick:()=>v({backgroundColor:"transparent"},"bg"),children:i.jsx(Vi,{size:14})}),children:l.fill.alpha>0?i.jsx(qt,{title:"Fill",allowNone:!0,value:l.fill.hex,onChange:g=>v({backgroundColor:g??"transparent"},"bg")}):i.jsx("p",{className:"insp__muted",children:"No fill"})}),i.jsx(Ke,{title:"Stroke",action:l.strokeWidth?i.jsx("button",{className:"icon-btn","data-tip":"Remove stroke",onClick:()=>v({borderWidth:"0px",borderStyle:"none"},"bw"),children:i.jsx(Vi,{size:14})}):i.jsx("button",{className:"icon-btn","data-tip":"Add stroke",onClick:()=>v({borderWidth:"3px",borderStyle:"solid",borderColor:"#000000"},"bw"),children:i.jsx($t,{size:14})}),children:l.strokeWidth?i.jsxs("div",{className:"insp__grid2",children:[i.jsx(qt,{title:"Stroke",value:l.strokeColor,onChange:g=>v({borderColor:g??void 0,borderStyle:"solid"},"bc")}),i.jsx(pe,{prefix:i.jsx(Hg,{}),title:"Stroke width",value:l.strokeWidth,min:0,max:16,onChange:g=>v({borderWidth:`${g}px`,borderStyle:g?"solid":"none"},"bw")})]}):i.jsx("p",{className:"insp__muted",children:"No stroke"})}),i.jsx(Ke,{title:"Effects",action:i.jsx(Ul,{on:l.shadow.on,onChange:g=>w({on:g,x:l.shadow.x||6,y:l.shadow.y||6})}),children:l.shadow.on?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"insp__grid3",children:[i.jsx(pe,{prefix:"X",value:l.shadow.x,onChange:g=>w({x:g})}),i.jsx(pe,{prefix:"Y",value:l.shadow.y,onChange:g=>w({y:g})}),i.jsx(pe,{prefix:"B",title:"Blur",value:l.shadow.blur,min:0,onChange:g=>w({blur:g})})]}),i.jsx(qt,{title:"Shadow",value:l.shadow.color,onChange:g=>g&&w({color:g})})]}):i.jsx("p",{className:"insp__muted",children:"Drop shadow off"})}),h&&i.jsxs(Ke,{title:"Typography",children:[i.jsxs("select",{className:"field field--select",value:((N=Wa.find(g=>g.label===l.fontFamily))==null?void 0:N.value)??"",onChange:g=>v({fontFamily:g.target.value||void 0},"ff"),children:[!Wa.some(g=>g.label===l.fontFamily)&&i.jsx("option",{value:"",children:l.fontFamily}),Wa.map(g=>i.jsx("option",{value:g.value,children:g.label},g.label))]}),i.jsxs("div",{className:"insp__grid2",children:[i.jsx("select",{className:"field field--select",value:String(Math.round(l.fontWeight/100)*100),onChange:g=>v({fontWeight:g.target.value},"fw"),children:[400,500,600,700,800,900].map(g=>i.jsx("option",{value:g,children:{400:"Regular",500:"Medium",600:"Semibold",700:"Bold",800:"Extra bold",900:"Black"}[g]},g))}),i.jsx(pe,{prefix:i.jsx(Zu,{size:13}),title:"Font size",value:l.fontSize,min:6,max:400,onChange:g=>v({fontSize:`${g}px`},"fs")}),i.jsx(pe,{prefix:i.jsx(Wg,{}),title:"Line height",value:l.lineHeight==="Auto"?1.2:parseFloat(l.lineHeight),display:l.lineHeight,step:.05,min:.5,max:4,onChange:g=>v({lineHeight:String(g)},"lh")}),i.jsx(pe,{prefix:i.jsx(Ug,{}),title:"Letter spacing",value:l.letterSpacing,step:.5,suffix:"%",onChange:g=>v({letterSpacing:`${g/100}em`},"ls")})]}),i.jsxs("div",{className:"insp__row",children:[i.jsx(Xt,{size:"sm",value:l.textAlign,onChange:g=>v({textAlign:g},"ta"),options:[{value:"left",icon:i.jsx(Fu,{size:14}),title:"Align left"},{value:"center",icon:i.jsx(Ru,{size:14}),title:"Align center"},{value:"right",icon:i.jsx(Du,{size:14}),title:"Align right"}]}),i.jsx(Xt,{size:"sm",value:l.textTransform==="uppercase"?"uppercase":l.textTransform==="lowercase"?"lowercase":"none",onChange:g=>v({textTransform:g},"tt"),options:[{value:"none",label:"Aa",title:"As typed"},{value:"uppercase",label:"AA",title:"Uppercase"},{value:"lowercase",label:"aa",title:"Lowercase"}]})]}),i.jsx(qt,{title:"Text color",value:l.color,onChange:g=>v({color:g??void 0},"color")})]}),f==="icon"&&i.jsx(Ke,{title:"Icon",children:i.jsx(qt,{title:"Icon color",value:l.color,onChange:g=>v({color:g??void 0},"color")})})]})]})}function Dg(){return i.jsxs("aside",{className:"insp insp--empty",children:[i.jsxs("div",{className:"insp__empty-hero",children:[i.jsx("span",{className:"insp__empty-icon",children:i.jsx(wm,{size:20})}),i.jsx("strong",{children:"Select anything on the page"}),i.jsx("p",{children:"Click to select, double-click to edit text. Changes stay a draft until you leave Visual Design, then AI applies them to code."})]}),i.jsx(Ke,{title:"Palette",children:i.jsx("div",{className:"insp__palette",children:Yo.map(e=>i.jsxs("span",{title:e.hex,children:[i.jsx("i",{style:{background:e.hex}}),e.name]},e.hex))})}),i.jsx(Ke,{title:"Shortcuts",action:i.jsx(mm,{size:14,className:"insp__muted-icon"}),children:i.jsx("dl",{className:"insp__keys",children:[["Click","Select"],["Click again","Select inside a button"],["Double-click / ↵","Edit text"],["Esc","Select parent"],["⌫","Hide element"],["⌘ Z / ⇧⌘ Z","Undo / Redo"],["Drag W/H labels","Scrub values"]].map(([e,n])=>i.jsxs("div",{children:[i.jsx("dt",{children:e}),i.jsx("dd",{children:n})]},e))})})]})}const Fr=({children:e})=>i.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:e}),Og=()=>i.jsx(Fr,{children:i.jsx("path",{d:"M4 20V11a7 7 0 0 1 7-7h9"})}),Bg=()=>i.jsxs(Fr,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"8"}),i.jsx("path",{d:"M12 4a8 8 0 0 1 0 16z",fill:"currentColor"})]}),Hg=()=>i.jsxs(Fr,{children:[i.jsx("path",{d:"M4 6h16",strokeWidth:"1.5"}),i.jsx("path",{d:"M4 12h16",strokeWidth:"2.5"}),i.jsx("path",{d:"M4 18h16",strokeWidth:"4"})]}),Wg=()=>i.jsx(Fr,{children:i.jsx("path",{d:"M4 4h16M4 20h16M9 16l3-8 3 8M10 13.5h4"})}),Ug=()=>i.jsx(Fr,{children:i.jsx("path",{d:"M3 4v16M21 4v16M8 16l4-9 4 9M9.5 13h5"})}),Vg=()=>i.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M9 14 4 9l5-5"}),i.jsx("path",{d:"M4 9h10.5a5.5 5.5 0 0 1 0 11H11"})]});function ma(){const{mode:e,selectedId:n}=Oe();return e==="design"?n:null}const Mr=(e,n)=>!!e&&(e===n||e.startsWith(`${n}.`));function es({id:e,num:n,children:t}){return i.jsxs(x,{id:`${e}.label`,kind:"text",as:"p",className:"section-label",label:"Eyebrow",children:[i.jsx(x,{id:`${e}.label.num`,kind:"text",as:"span",className:"section-label__num",label:"Number",children:n}),i.jsx(x,{id:`${e}.label.text`,kind:"text",as:"span",label:"Eyebrow text",children:t})]})}function ga({id:e,num:n,label:t,title:r,titleId:a}){return i.jsx(x,{id:`${e}.head`,kind:"container",className:"section-head",label:"Section heading",children:i.jsxs("div",{children:[i.jsx(es,{id:e,num:n,children:t}),i.jsx(x,{id:`${e}.title`,htmlId:a,kind:"heading",as:"h2",className:"display h2",label:"Heading",children:r})]})})}function qg({id:e,lines:n}){return i.jsx(i.Fragment,{children:n.map((t,r)=>i.jsxs(b.Fragment,{children:[i.jsx(x,{id:`${e}.${r}`,kind:"text",as:"span",className:"line",label:`Line ${r+1}`,children:t}),r<n.length-1?" ":""]},r))})}function Qg({facing:e}){return i.jsxs("g",{className:"shuttle-flip",style:{transform:`scaleX(${e})`},children:[i.jsx("path",{d:"M-4 -6 L-34 -17 L-34 17 L-4 6 Z",fill:"#fff",stroke:"#000",strokeWidth:"3",strokeLinejoin:"round"}),i.jsx("path",{d:"M-34 -8 L-6 -2 M-34 8 L-6 2 M-34 0 H-6",stroke:"#000",strokeWidth:"2"}),i.jsx("circle",{cx:"2",cy:"0",r:"8",fill:"#ff6e6c",stroke:"#000",strokeWidth:"3"})]})}function Kg({hits:e}){const n=e%2===1,t=e===0||n?1:-1;return i.jsxs("svg",{viewBox:"0 0 320 200","aria-hidden":"true",className:"art-svg",children:[i.jsx("rect",{x:"18",y:"34",width:"284",height:"136",fill:"#fff",stroke:"#000",strokeWidth:"3"}),i.jsx("path",{d:"M18 46 H302 M18 158 H302 M34 34 V170 M286 34 V170 M118 34 V170 M202 34 V170 M18 102 H118 M202 102 H302",stroke:"#000",strokeWidth:"2",fill:"none"}),i.jsx("rect",{x:"157",y:"22",width:"6",height:"160",fill:"#000"}),i.jsx("path",{d:"M154 34 V170 M166 34 V170",stroke:"#000",strokeWidth:"1",strokeDasharray:"3 3"}),i.jsx("g",{transform:"translate(84 96)",children:i.jsx("g",{className:"fly-x",style:{transform:`translateX(${n?152:0}px)`},children:i.jsx("g",{className:e?"fly-hop fly-hop--high":void 0,children:i.jsx("g",{className:"shuttle-wobble",children:i.jsx(Qg,{facing:t})})},e)})})]})}const wt=17,cr=Math.sqrt(3)*wt,gp=4,xp=7,Gg=(320-(xp*cr+cr/2))/2+cr/2,Yg=(200-((gp-1)*wt*1.5+wt*2))/2+wt,_c=(e,n)=>({x:Gg+n*cr+(e%2?cr/2:0),y:Yg+e*wt*1.5}),Xg=(e,n,t)=>Array.from({length:6},(r,a)=>{const l=Math.PI/180*(60*a-90);return`${(e+t*Math.cos(l)).toFixed(1)},${(n+t*Math.sin(l)).toFixed(1)}`}).join(" "),Vl=[[[0,2],[0,3],[0,4],[2,1],[3,5]],[[3,0],[3,1],[2,0],[2,1],[3,2]],[[0,0],[1,3],[3,6],[2,4],[0,6]]],Zg=["circle","square","diamond","triangle","ring"],Jg=["#d7ff28","#ff6e6c","#87ceeb","#0ea5e9","#fff"];function ex({kind:e,fill:n}){const t={fill:n,stroke:"#000",strokeWidth:3};switch(e){case"circle":return i.jsx("circle",{r:"9",...t});case"square":return i.jsx("rect",{x:"-8",y:"-8",width:"16",height:"16",...t});case"diamond":return i.jsx("rect",{x:"-7",y:"-7",width:"14",height:"14",transform:"rotate(45)",...t});case"triangle":return i.jsx("path",{d:"M0 -10 L9 7 L-9 7 Z",strokeLinejoin:"round",...t});default:return i.jsxs("g",{children:[i.jsx("circle",{r:"9",...t}),i.jsx("circle",{r:"3",fill:"#000"})]})}}function nx({formation:e}){return i.jsxs("svg",{viewBox:"0 0 320 200","aria-hidden":"true",className:"art-svg",children:[Array.from({length:gp},(n,t)=>Array.from({length:xp},(r,a)=>{const{x:l,y:o}=_c(t,a);return i.jsx("polygon",{points:Xg(l,o,wt-1.5),fill:"#fff",stroke:"#000",strokeWidth:"2"},`${t}-${a}`)})),Zg.map((n,t)=>{const[r,a]=Vl[e][t],{x:l,y:o}=_c(r,a);return i.jsx("g",{className:"piece",style:{transform:`translate(${l}px, ${o}px)`},children:i.jsx("g",{className:"piece-lift",children:i.jsx(ex,{kind:n,fill:Jg[t]})})},n)})]})}function tx({hits:e}){const n=e%2===1;return i.jsxs("svg",{viewBox:"0 0 320 200","aria-hidden":"true",className:"art-svg",children:[i.jsx("rect",{x:"10",y:"168",width:"300",height:"6",fill:"#000"}),i.jsx("path",{d:"M100 168 V174 M220 168 V174",stroke:"#fff",strokeWidth:"3"}),i.jsx("rect",{x:"156",y:"128",width:"8",height:"42",fill:"#000"}),i.jsx("rect",{x:"132",y:"130",width:"56",height:"34",fill:"none",stroke:"#000",strokeWidth:"2"}),i.jsx("path",{d:"M132 138 H188 M132 146 H188 M132 154 H188 M146 130 V164 M160 130 V164 M174 130 V164",stroke:"#000",strokeWidth:"1"}),i.jsx("rect",{x:"132",y:"126",width:"56",height:"6",fill:"#fff",stroke:"#000",strokeWidth:"2"}),i.jsxs("g",{transform:"translate(52 112) rotate(-18)",children:[i.jsx("rect",{x:"-6",y:"30",width:"12",height:"34",fill:"#000"}),i.jsx("rect",{x:"-24",y:"-30",width:"48",height:"62",rx:"16",fill:"#fff",stroke:"#000",strokeWidth:"3"}),i.jsx("rect",{x:"-15",y:"-21",width:"30",height:"44",rx:"10",fill:"#87ceeb",stroke:"#000",strokeWidth:"2"})]}),i.jsx("g",{transform:"translate(96 96)",children:i.jsx("g",{className:"fly-x",style:{transform:n?"translate(152px, 61px)":"translate(0px, 0px)"},children:i.jsx("g",{className:e?"fly-hop":void 0,children:i.jsxs("g",{className:"ball-nudge",children:[i.jsx("circle",{r:"11",fill:"#d7ff28",stroke:"#000",strokeWidth:"3"}),[0,72,144,216,288].map(t=>i.jsx("circle",{cx:(5.5*Math.cos((t-90)*Math.PI/180)).toFixed(2),cy:(5.5*Math.sin((t-90)*Math.PI/180)).toFixed(2),r:"1.6",fill:"#000"},t))]})},e)})})]})}function qa({id:e,n,title:t,line:r,children:a}){return i.jsxs(x,{id:e,kind:"container",as:"li",className:`beyond-card beyond-card--${n}`,label:`${t} card`,children:[a,i.jsxs("div",{className:"beyond__text",children:[i.jsx(x,{id:`${e}.title`,kind:"heading",as:"h3",className:"beyond__title",label:"Title",children:t}),i.jsx(x,{id:`${e}.line`,kind:"text",as:"p",className:"beyond__line",label:"Line",children:r})]})]})}function rx(){const[e,n]=b.useState(0),[t,r]=b.useState(0),[a,l]=b.useState(0),{badminton:o,tft:s,pickleball:c}=Vt;return i.jsx(x,{id:"beyond",htmlId:"beyond-work",kind:"section",as:"section",className:"section section--paper grid-paper","aria-labelledby":"beyond-title",file:"Beyond",label:"Beyond work",children:i.jsxs("div",{className:"wrap",children:[i.jsx(ga,{id:"beyond",num:"03",label:"Beyond the roadmap",titleId:"beyond-title",title:i.jsx(qg,{id:"beyond.title",lines:Vt.heading})}),i.jsxs(x,{id:"beyond.cards",kind:"container",as:"ul",className:"beyond",label:"Cards",children:[i.jsx(qa,{id:"beyond.badminton",n:1,title:o.title,line:o.line,children:i.jsxs(x,{id:"beyond.badminton.art",kind:"container",as:"button",className:"beyond__art surface-sky","aria-label":"Play: send the shuttlecock over the net",onClick:()=>n(d=>d+1),label:"Illustration",children:[i.jsx(Kg,{hits:e}),i.jsx("span",{className:"beyond__hint mono","aria-hidden":"true",children:"Tap to rally"})]})}),i.jsx(qa,{id:"beyond.tft",n:2,title:s.title,line:s.line,children:i.jsxs(x,{id:"beyond.tft.art",kind:"container",as:"button",className:"beyond__art surface-lime","aria-label":"Play: rearrange the strategy board",onClick:()=>r(d=>(d+1)%Vl.length),label:"Illustration",children:[i.jsx(nx,{formation:t}),i.jsxs("span",{className:"beyond__hint mono","aria-hidden":"true",children:["Tap to reposition · ",t+1,"/",Vl.length]})]})}),i.jsx(qa,{id:"beyond.pickleball",n:3,title:c.title,line:c.line,children:i.jsxs(x,{id:"beyond.pickleball.art",kind:"container",as:"button",className:"beyond__art surface-coral","aria-label":"Play: hit the pickleball over the net",onClick:()=>l(d=>d+1),label:"Illustration",children:[i.jsx(tx,{hits:a}),i.jsx("span",{className:"beyond__hint mono","aria-hidden":"true",children:"Tap to dink"})]})})]}),i.jsxs(x,{id:"beyond.footer",kind:"container",className:"beyond__footer",label:"Footer",children:[i.jsx(x,{id:"beyond.personal",kind:"text",as:"p",className:"beyond__personal",label:"Personal note",children:Vt.personal}),Vt.alsoInto.length>0&&i.jsxs(x,{id:"beyond.also",kind:"text",as:"p",className:"beyond__also",label:"Also into",children:[i.jsx(x,{id:"beyond.also.label",kind:"text",as:"span",className:"mono-label",label:"Label",children:"Also into"}),i.jsx(x,{id:"beyond.also.list",kind:"text",as:"span",label:"Interests",children:Vt.alsoInto.join(" · ")})]})]})]})})}function yp({id:e}){return i.jsxs(x,{id:e,kind:"link",as:"a",className:"brand",href:"#top",label:"Brand",children:[i.jsx(x,{id:`${e}.mark`,kind:"text",as:"span",className:"brand__mark","aria-hidden":"true",label:"Monogram",children:"AC"}),i.jsx(x,{id:`${e}.name`,kind:"text",as:"span",className:"brand__name",label:"Name",children:Ie.name})]})}function ix(){return i.jsxs(x,{id:"header",kind:"section",as:"header",className:"header",file:"Header",label:"Header",children:[i.jsx(yp,{id:"header.brand"}),i.jsxs(x,{id:"header.nav",kind:"container",as:"nav",className:"nav","aria-label":"Primary",label:"Navigation",children:[i.jsx(x,{id:"header.links",kind:"container",as:"ul",className:"nav__links",label:"Nav links",children:pp.map(e=>i.jsx("li",{children:i.jsx(x,{id:`header.link.${e.id}`,kind:"link",as:"a",href:`#${e.id}`,label:`${e.label} link`,children:e.label})},e.id))}),i.jsxs(x,{id:"header.linkedin",kind:"button",as:"a",className:"nav__linkedin",href:Ie.linkedinUrl,target:"_blank",label:"LinkedIn button",children:[i.jsx(Vu,{size:16,strokeWidth:2.5,"aria-hidden":"true"}),i.jsx(x,{id:"header.linkedin.label",kind:"text",as:"span",label:"Label",children:"LinkedIn"})]}),Ie.resumeUrl]}),i.jsxs(x,{id:"header.menu",kind:"button",as:"button",type:"button",className:"menu-toggle","aria-expanded":!1,label:"Menu button",children:[i.jsx(vm,{size:18,strokeWidth:2.75,"aria-hidden":"true"}),i.jsx(x,{id:"header.menu.label",kind:"text",as:"span",label:"Label",children:"Menu"})]})]})}const ns=[{key:"email",href:`mailto:${Ie.email}`,icon:i.jsx(ym,{size:22,strokeWidth:2.25}),label:"Email",detail:Ie.email,external:!1}];ns.push({key:"linkedin",href:Ie.linkedinUrl,icon:i.jsx(Vu,{size:22,strokeWidth:2.25}),label:"LinkedIn",detail:Ie.linkedinHandle,external:!0});ns.push({key:"prototype",href:Ie.prototypeUrl,icon:i.jsx(Qu,{size:22,strokeWidth:2.25}),label:"Prototype",detail:"Visual Design concept",external:!0});function ax(){const[e,n]=b.useState(!1);b.useEffect(()=>{if(!e)return;const r=setTimeout(()=>n(!1),2200);return()=>clearTimeout(r)},[e]);const t=async()=>{try{await navigator.clipboard.writeText(Ie.email),n(!0)}catch{}};return i.jsxs(x,{id:"contact",htmlId:"contact",kind:"section",as:"section",className:"contact","aria-labelledby":"contact-title",file:"Contact",label:"Contact",children:[i.jsxs(x,{id:"contact.left",kind:"container",className:"contact__left grid-paper",label:"Pitch",children:[i.jsx(es,{id:"contact",num:"06",children:"Contact"}),i.jsx(x,{id:"contact.title",htmlId:"contact-title",kind:"heading",as:"h2",className:"display h2 contact__title",label:"Heading",children:xc.heading}),i.jsx(x,{id:"contact.body",kind:"text",as:"p",className:"contact__body",label:"Body",children:xc.body}),i.jsxs(x,{id:"contact.email",kind:"container",className:"contact__email",label:"Email row",children:[i.jsx(x,{id:"contact.email.link",kind:"link",as:"a",className:"contact__email-link",href:`mailto:${Ie.email}`,label:"Email link",children:Ie.email}),i.jsxs(x,{id:"contact.copy",kind:"button",as:"button",type:"button",className:"btn btn--sm",onClick:t,label:"Copy email",children:[e?i.jsx(Mt,{size:16,strokeWidth:3,"aria-hidden":"true"}):i.jsx(qo,{size:16,strokeWidth:2.5,"aria-hidden":"true"}),i.jsx(x,{id:"contact.copy.label",kind:"text",as:"span",label:"Label",children:e?"Copied":"Copy email"})]})]})]}),i.jsx(x,{id:"contact.right",kind:"container",className:"contact__right",label:"Links",children:i.jsx("ul",{className:"contact__rows",children:ns.map(r=>i.jsx("li",{children:i.jsxs(x,{id:`contact.row.${r.key}`,kind:"link",as:"a",className:"contact__row",href:r.href,target:r.external?"_blank":void 0,label:`${r.label} row`,children:[i.jsx(x,{id:`contact.row.${r.key}.icon`,kind:"icon",as:"span",className:"contact__icon","aria-hidden":"true",label:"Icon",children:r.icon}),i.jsx(x,{id:`contact.row.${r.key}.label`,kind:"text",as:"span",className:"contact__label",label:"Label",children:r.label}),i.jsx(x,{id:`contact.row.${r.key}.detail`,kind:"text",as:"span",className:"contact__detail",label:"Detail",children:r.detail}),i.jsx(Uo,{className:"contact__arrow",size:22,strokeWidth:2.75,"aria-hidden":"true"})]})},r.key))})})]})}function lx(){return i.jsxs(x,{id:"footer",kind:"section",as:"footer",className:"footer",file:"Footer",label:"Footer",children:[i.jsx(yp,{id:"footer.brand"}),i.jsx(x,{id:"footer.copy",kind:"text",as:"p",className:"footer__copy mono",label:"Copyright",children:`© ${new Date().getFullYear()} ${Ie.name} · Built with React + TypeScript`}),i.jsxs("div",{className:"footer__links",children:[i.jsxs(x,{id:"footer.bolt",kind:"link",as:"a",className:"footer__for mono",href:`#${Ua.hash}`,label:Ua.footerLabel,children:[i.jsx(x,{id:"footer.bolt.label",kind:"text",as:"span",label:"Label",children:Ua.footerLabel}),i.jsx(Ou,{size:16,strokeWidth:2.75,"aria-hidden":"true"})]}),i.jsxs(x,{id:"footer.top",kind:"link",as:"a",className:"footer__top mono",href:"#top",label:"Back to top",children:[i.jsx(x,{id:"footer.top.label",kind:"text",as:"span",label:"Label",children:"Back to top"}),i.jsx(Vo,{size:16,strokeWidth:2.75,"aria-hidden":"true"})]})]})]})}const ox="/prototype/assets/alfred-chang-Bsx9eZ18.jpg",sx={wand:Dm,blocks:tm,api:Ku};function cx(){const{mode:e}=fa(),n=ma(),[t,r]=b.useState(null),a=b.useRef(!1),l=e!=="design";return i.jsx(x,{id:"hero.wins",kind:"container",as:"ul",className:"hero__wins","aria-label":"Top results",label:"Stat tiles",children:ve.wins.map((o,s)=>{const c=sx[o.icon],d=`hero.win.${s}`,f=l?t===s:Mr(n,d);return i.jsxs(x,{id:d,kind:"container",as:"li",className:`hero__win surface-${o.accent}`,"data-open":f||void 0,onPointerEnter:h=>l&&h.pointerType==="mouse"&&r(s),onPointerLeave:h=>l&&h.pointerType==="mouse"&&r(m=>m===s?null:m),label:`${o.label} tile`,children:[i.jsxs("button",{type:"button",className:"hero__win-trigger","aria-expanded":f,onPointerDown:h=>a.current=h.pointerType==="mouse",onClick:()=>{a.current?a.current=!1:r(f?null:s)},children:[i.jsx(x,{id:`${d}.icon`,kind:"icon",as:"span",className:"hero__win-icon",label:"Icon",children:i.jsx(c,{size:20,strokeWidth:2.5,"aria-hidden":"true"})}),i.jsxs(x,{id:`${d}.value`,kind:"heading",as:"span",className:"hero__win-value",label:"Value",children:[i.jsx(x,{id:`${d}.amount`,kind:"text",as:"span",label:"Amount",children:o.value})," ",i.jsx(x,{id:`${d}.unit`,kind:"text",as:"span",className:"hero__win-unit",label:"Unit",children:o.unit})]}),i.jsx(x,{id:`${d}.label`,kind:"text",as:"span",className:"hero__win-label",label:"Label",children:o.label}),i.jsx(Cr,{className:"hero__win-chevron",size:18,strokeWidth:3,"aria-hidden":"true"})]}),i.jsx(x,{id:`${d}.detail`,kind:"text",as:"p",className:"hero__win-detail",hidden:!f,label:"Detail",children:o.detail})]},o.label)})})}function dx(){return i.jsx(x,{id:"hero",htmlId:"top",kind:"section",as:"section",className:"hero grid-paper","aria-labelledby":"hero-title",file:"Hero",label:"Hero",children:i.jsxs(x,{id:"hero.layout",kind:"container",className:"wrap hero__layout",label:"Hero layout",children:[i.jsxs(x,{id:"hero.copy",kind:"container",className:"hero__copy",label:"Hero copy",children:[i.jsx(x,{id:"hero.title",htmlId:"hero-title",kind:"heading",as:"h1",className:"display hero__title",label:"Hello",children:ve.hello.map((e,n)=>i.jsxs(b.Fragment,{children:[e===ve.highlight?i.jsx("span",{className:"line",children:i.jsx(x,{id:"hero.title.mark",kind:"text",as:"mark",className:"hero__mark",label:"Highlight",children:e})}):i.jsx(x,{id:`hero.title.${n}`,kind:"text",as:"span",className:"line",label:`Line ${n+1}`,children:e}),n<ve.hello.length-1?" ":""]},e))}),i.jsx(x,{id:"hero.lead",kind:"text",as:"p",className:"hero__lead",label:"Intro",children:ve.lead}),i.jsx(cx,{}),i.jsx(x,{id:"hero.tagline",kind:"text",as:"p",className:"hero__tagline mono",label:"Tagline",children:ve.tagline}),i.jsxs(x,{id:"hero.ctas",kind:"container",className:"btn-row",label:"Buttons",children:[i.jsxs(x,{id:"hero.cta.primary",kind:"button",as:"a",className:"btn btn--ink",href:ve.primaryCta.href,label:ve.primaryCta.label,children:[i.jsx(x,{id:"hero.cta.primary.label",kind:"text",as:"span",label:"Label",children:ve.primaryCta.label}),i.jsx(Wo,{size:18,strokeWidth:2.75,"aria-hidden":"true"})]}),i.jsxs(x,{id:"hero.cta.secondary",kind:"button",as:"a",className:"btn",href:ve.secondaryCta.href,label:ve.secondaryCta.label,children:[i.jsx(x,{id:"hero.cta.secondary.label",kind:"text",as:"span",label:"Label",children:ve.secondaryCta.label}),i.jsx(Uo,{size:18,strokeWidth:2.75,"aria-hidden":"true"})]})]})]}),i.jsxs(x,{id:"hero.photo",kind:"container",as:"figure",className:"hero__photo",label:"Photo",children:[i.jsx(x,{id:"hero.photo.img",kind:"graphic",as:"img",src:ox,alt:ve.photo.alt,width:ve.photo.width,height:ve.photo.height,label:"Portrait"}),i.jsxs(x,{id:"hero.current",kind:"container",as:"figcaption",className:"sticker surface-orange hero__current",label:"Status sticker",children:[i.jsx("span",{className:"status-dot","aria-hidden":"true"}),i.jsx(x,{id:"hero.current.text",kind:"text",as:"span",label:"Status",children:ve.current})]})]})]})})}function ti({x:e,y:n,n:t}){return i.jsxs("g",{className:"lz-badge",children:[i.jsx("rect",{x:e-11,y:n-11,width:"22",height:"22"}),i.jsx("text",{x:e,y:n+5,textAnchor:"middle",children:t})]})}function ux({on:e}){const n=t=>`lz-region${e===t?" is-on":""}`;return i.jsxs("svg",{className:"lens-svg",viewBox:"0 0 480 372",role:"img","aria-label":`Diagram: a person, a break in their path, the system underneath, and a small test. Highlighted: ${e}.`,children:[i.jsxs("g",{className:n("system"),"data-region":"system",children:[i.jsx("rect",{className:"lz-system-box",x:"20",y:"206",width:"440",height:"152"}),i.jsx("text",{className:"lz-label",x:"38",y:"234",children:"SYSTEM"}),["PLATFORM","DATA","TEAMS","POLICY"].map((t,r)=>i.jsxs("g",{children:[i.jsx("rect",{className:"lz-node",x:36+r*104,y:"272",width:"88",height:"40"}),i.jsx("text",{className:"lz-node-text",x:80+r*104,y:"297",textAnchor:"middle",children:t})]},t)),i.jsx("path",{className:"lz-wire",d:"M124 292 H140 M228 292 H244 M332 292 H348"}),i.jsx("path",{className:"lz-cause",d:"M184 272 V250 H288 V272 M260 250 V166"}),i.jsx(ti,{x:444,y:232,n:3})]}),i.jsxs("g",{className:n("person"),"data-region":"person",children:[i.jsx("circle",{className:"lz-fill",cx:"52",cy:"80",r:"14"}),i.jsx("path",{className:"lz-fill",d:"M30 132 Q30 100 52 100 Q74 100 74 132 Z"}),i.jsx("line",{className:"lz-stroke",x1:"436",y1:"66",x2:"436",y2:"132"}),i.jsx("path",{className:"lz-fill",d:"M436 68 L468 79 L436 92 Z"}),i.jsx("text",{className:"lz-label",x:"52",y:"160",textAnchor:"middle",children:"PERSON"}),i.jsx("text",{className:"lz-label",x:"436",y:"160",textAnchor:"middle",children:"GOAL"}),i.jsx(ti,{x:22,y:44,n:1})]}),i.jsxs("g",{className:n("experience"),"data-region":"experience",children:[i.jsx("polygon",{className:"lz-road",points:"84,108 236,108 228,112 238,116 230,120 236,124 84,124"}),i.jsx("polygon",{className:"lz-road",points:"410,108 284,108 292,112 282,116 290,120 284,124 410,124"}),[110,150,190,320,362].map(t=>i.jsx("rect",{className:"lz-step",x:t,y:"113",width:"6",height:"6"},t)),i.jsx("rect",{className:"lz-tag lz-tag--break",x:"190",y:"140",width:"140",height:"26"}),i.jsx("text",{className:"lz-label",x:"260",y:"158",textAnchor:"middle",children:"IT BREAKS HERE"}),i.jsx(ti,{x:176,y:153,n:2})]}),i.jsxs("g",{className:n("test"),"data-region":"test",children:[i.jsx("rect",{className:"lz-bridge",x:"220",y:"100",width:"80",height:"10"}),i.jsx("line",{className:"lz-pointer",x1:"260",y1:"72",x2:"260",y2:"96"}),i.jsx("rect",{className:"lz-tag lz-tag--test",x:"196",y:"44",width:"128",height:"26"}),i.jsx("text",{className:"lz-label",x:"260",y:"62",textAnchor:"middle",children:"SMALLEST TEST"}),i.jsx(ti,{x:340,y:57,n:4})]})]})}function px(){const{mode:e}=fa(),n=ma(),[t,r]=b.useState(0),[a,l]=b.useState(null),o=e!=="design",s=_t.lens.findIndex((f,h)=>Mr(n,`think.lens.${h}`)),c=o||s<0?t:s,d=_t.lens[(o?a:null)??c].region;return i.jsxs(x,{id:"think.lens",kind:"container",className:"lens",label:"Problem lens",children:[i.jsxs("div",{className:"lens__intro",children:[i.jsx(x,{id:"think.lens.label",kind:"text",as:"p",className:"mono-label",label:"Label",children:"The problem lens"}),i.jsx(x,{id:"think.lens.hint",kind:"text",as:"p",className:"lens__hint",label:"Hint",children:"Four questions I ask before deciding what to build. Pick one to see where it points."})]}),i.jsxs("div",{className:"lens__body",children:[i.jsx("ol",{className:"lens__list",onPointerLeave:()=>l(null),children:_t.lens.map((f,h)=>i.jsxs(x,{id:`think.lens.${h}`,kind:"container",as:"li",className:`lens__item${c===h?" is-active":""}`,onPointerEnter:()=>o&&l(h),label:`Question ${h+1}`,children:[i.jsxs("button",{type:"button",className:"lens__btn","aria-expanded":c===h,onClick:()=>r(h),children:[i.jsx("span",{className:"lens__num","aria-hidden":"true",children:h+1}),i.jsx(x,{id:`think.lens.${h}.q`,kind:"text",as:"span",className:"lens__q",label:"Question",children:f.question})]}),i.jsx(x,{id:`think.lens.${h}.gist`,kind:"text",as:"p",className:"lens__gist",label:"Gist",children:f.gist}),i.jsx(x,{id:`think.lens.${h}.detail`,kind:"text",as:"p",className:"lens__detail",hidden:c!==h,label:"Detail",children:f.detail})]},f.region))}),i.jsx(x,{id:"think.lens.figure",kind:"graphic",className:"lens__figure",label:"Diagram",children:i.jsx(ux,{on:d})})]})]})}function hx(){return i.jsx(x,{id:"think",htmlId:"how-i-think",kind:"section",as:"section",className:"section section--paper","aria-labelledby":"how-title",file:"HowIThink",label:"How I think",children:i.jsxs("div",{className:"wrap",children:[i.jsx(ga,{id:"think",num:"04",label:"How I think",titleId:"how-title",title:_t.heading}),i.jsxs(x,{id:"think.intro",kind:"container",className:"think__intro",label:"Intro",children:[i.jsx(x,{id:"think.prose",kind:"container",className:"prose",label:"Prose",children:_t.body.map((e,n)=>i.jsx(x,{id:`think.prose.${n}`,kind:"text",as:"p",label:`Paragraph ${n+1}`,children:e},e.slice(0,20)))}),i.jsx(x,{id:"think.principles",kind:"container",as:"ul",className:"principles","aria-label":"How evidence, judgment, and building fit together",label:"Principles",children:_t.principles.map((e,n)=>i.jsxs(x,{id:`think.principle.${n}`,kind:"container",as:"li",className:`principle surface-${e.accent}`,label:`${e.label} card`,children:[i.jsx(x,{id:`think.principle.${n}.label`,kind:"text",as:"span",className:"principle__label mono",label:"Label",children:e.label}),i.jsx(x,{id:`think.principle.${n}.text`,kind:"text",as:"span",className:"principle__text",label:"Text",children:e.text})]},e.label))})]}),i.jsx(px,{})]})})}const fx=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ql=new Date,Qa=ql.getFullYear()*12+ql.getMonth(),ri=e=>{const[n,t]=e.split("-").map(Number);return n*12+(t-1)},wc=e=>{if(!e)return"Present";const[n,t]=e.split("-").map(Number);return`${fx[t-1]} ${n}`},mx=e=>`${wc(e.start)} – ${wc(e.end)}`,vp=sr.milestones.flatMap(e=>e.roles),Ql=Math.min(...vp.map(e=>Number(e.start.slice(0,4)))),kp=Math.max(ql.getFullYear(),...vp.map(e=>Number((e.end??e.start).slice(0,4))))+1,Yi=Ql*12,vi=kp*12-Yi,ii=e=>`${(e-Yi)/vi*100}%`,gx=Array.from({length:kp-Ql},(e,n)=>Ql+n);function xx(){const e=b.useRef(null),[n,t]=b.useState({});return b.useLayoutEffect(()=>{var o;const r=e.current;if(!r)return;const a=()=>{const s={};r.querySelectorAll("[data-row]").forEach(c=>{const d=[...c.querySelectorAll(".spans__bar")];s[c.dataset.row]=d.every(f=>{const h=f.querySelector(".spans__bar-label");return!!h&&h.offsetWidth<=f.clientWidth})}),t(c=>Object.keys(s).every(d=>c[d]===s[d])?c:s)};a();const l=new ResizeObserver(a);return l.observe(r),(o=document.fonts)==null||o.ready.then(a),()=>l.disconnect()},[]),[e,n]}function yx(){const[e,n]=xx();return i.jsxs(x,{id:"journey.chart",kind:"container",as:"figure",className:"spans","aria-labelledby":"spans-caption",label:"Career chart",children:[i.jsxs(x,{id:"journey.chart.caption",htmlId:"spans-caption",kind:"container",as:"figcaption",className:"spans__caption",label:"Chart caption",children:[i.jsx(x,{id:"journey.chart.caption.label",kind:"text",as:"span",className:"mono-label",label:"Label",children:"At a glance"}),i.jsx(x,{id:"journey.chart.caption.text",kind:"text",as:"span",label:"Caption",children:"Title by title, month by month. Some roles overlap."})]}),i.jsxs("div",{className:"spans__chart",children:[i.jsxs("div",{className:"spans__grid","aria-hidden":"true",children:[gx.map(t=>i.jsxs("span",{className:"spans__year",style:{left:ii(t*12)},children:[i.jsx("span",{className:"spans__year-full",children:t}),i.jsxs("span",{className:"spans__year-short",children:["’",String(t).slice(2)]})]},t)),i.jsx("span",{className:"spans__now",style:{left:ii(Qa+1)},children:i.jsx("span",{children:"Now"})})]}),i.jsx("ul",{ref:e,className:"spans__rows",children:sr.milestones.map(t=>{const r=[...t.roles].reverse(),a=ri(r[0].start),l=Math.max(...r.map(d=>d.end?ri(d.end):Qa))+1,o=(l-Yi)/vi<.62,s=n[t.id]??!0,c=`journey.chart.${t.id}`;return i.jsx("li",{children:i.jsxs(x,{id:c,kind:"link",as:"a",className:"spans__row",href:`#role-${t.id}`,"data-row":t.id,"data-inside":s,label:`${t.short} row`,children:[i.jsx(x,{id:`${c}.label`,kind:"text",as:"span",className:"spans__label",label:"Company",children:t.short}),i.jsxs("span",{className:"spans__track","aria-hidden":"true",children:[r.map((d,f)=>{const h=ri(d.start),m=d.end?ri(d.end):Qa;return i.jsx(x,{id:`${c}.bar.${f}`,kind:"container",as:"span",className:`spans__bar surface-${t.accent}`,style:{left:ii(h),width:`${(m+1-h)/vi*100}%`},label:"Bar",children:i.jsx(x,{id:`${c}.bar.${f}.label`,kind:"text",as:"span",className:"spans__bar-label",label:"Title",children:d.short??d.title})},d.title)}),!s&&i.jsx("span",{className:`spans__title spans__title--${o?"after":"before"}`,style:o?{left:ii(l)}:{right:`${100-(a-Yi)/vi*100}%`},children:r.map(d=>d.short??d.title).join(" → ")})]})]})},t.id)})})]})]})}function vx({id:e,children:n}){const t=ma();return i.jsx(x,{id:e,kind:"container",as:"details",className:"milestone__more",open:Mr(t,e)||void 0,label:"More about this role",children:n})}function kx({m:e,i:n}){const t=`journey.${e.id}`,r=e.roles.filter(a=>a.highlights.length>0);return i.jsxs(x,{id:t,htmlId:`role-${e.id}`,kind:"container",as:"li",className:"milestone",label:e.company,children:[i.jsx(x,{id:`${t}.marker`,kind:"text",as:"span",className:`milestone__marker surface-${e.accent}`,"aria-hidden":"true",label:"Marker",children:String(n+1).padStart(2,"0")}),i.jsxs(x,{id:`${t}.card`,kind:"container",as:"article",className:"milestone__card","aria-labelledby":`role-${e.id}-name`,label:"Card",children:[i.jsxs(x,{id:`${t}.head`,kind:"container",as:"header",className:"milestone__head",label:"Card header",children:[i.jsx(x,{id:`${t}.theme`,kind:"text",as:"p",className:"milestone__theme mono",label:"Theme",children:e.theme}),i.jsx(x,{id:`${t}.company`,htmlId:`role-${e.id}-name`,kind:"heading",as:"h3",className:"milestone__company",label:"Company",children:e.company}),i.jsx("ul",{className:"milestone__roles",children:e.roles.map((a,l)=>i.jsxs("li",{children:[i.jsx(x,{id:`${t}.role.${l}`,kind:"text",as:"span",className:"milestone__role",label:"Role",children:a.title}),i.jsx(x,{id:`${t}.role.${l}.dates`,kind:"text",as:"span",className:"milestone__dates mono",label:"Dates",children:mx(a)})]},a.title))})]}),i.jsxs("div",{className:"milestone__body",children:[i.jsxs(x,{id:`${t}.perspective`,kind:"container",className:"milestone__perspective",label:"Perspective",children:[i.jsx(x,{id:`${t}.perspective.label`,kind:"text",as:"h4",className:"mono-label",label:"Label",children:"Perspective I gained"}),i.jsx(x,{id:`${t}.perspective.text`,kind:"text",as:"p",label:"Perspective",children:e.perspective})]}),i.jsxs(x,{id:`${t}.win`,kind:"container",className:"milestone__win",label:"Accomplishment",children:[i.jsx(x,{id:`${t}.win.label`,kind:"text",as:"h4",className:"mono-label",label:"Label",children:e.accomplishments.length>1?"Main accomplishments":"Main accomplishment"}),i.jsx("ul",{className:"arrow-list",children:e.accomplishments.map((a,l)=>i.jsx(x,{id:`${t}.win.${l}`,kind:"text",as:"li",label:`Accomplishment ${l+1}`,children:a},a.slice(0,32)))})]})]}),i.jsxs(vx,{id:`${t}.more`,children:[i.jsxs("summary",{children:[i.jsx(x,{id:`${t}.more.label`,kind:"text",as:"span",label:"Label",children:"More about this role"}),i.jsx($t,{className:"milestone__plus",size:18,strokeWidth:3,"aria-hidden":"true"})]}),i.jsxs("div",{className:"milestone__highlights",children:[i.jsx(x,{id:`${t}.more.context`,kind:"text",as:"p",className:"milestone__context",label:"Context",children:e.context}),i.jsx(x,{id:`${t}.more.workedOnLabel`,kind:"text",as:"p",className:"mono-label",label:"Label",children:"What I worked on"}),i.jsx(x,{id:`${t}.more.workedOn`,kind:"text",as:"p",label:"What I worked on",children:e.workedOn})]}),r.map((a,l)=>i.jsxs("div",{className:"milestone__highlights",children:[i.jsx(x,{id:`${t}.more.highlights.${l}.label`,kind:"text",as:"p",className:"mono-label",label:"Label",children:e.roles.length>1?`Résumé highlights · ${a.title}`:"Résumé highlights"}),i.jsx("ul",{children:a.highlights.map((o,s)=>i.jsx(x,{id:`${t}.more.highlights.${l}.${s}`,kind:"text",as:"li",label:`Highlight ${s+1}`,children:o},o.slice(0,32)))})]},a.title))]})]})]})}function _x(){return i.jsx(x,{id:"journey",htmlId:"journey",kind:"section",as:"section",className:"section section--sky grid-paper","aria-labelledby":"journey-title",file:"Journey",label:"My journey",children:i.jsxs("div",{className:"wrap",children:[i.jsx(ga,{id:"journey",num:"01",label:"My journey",titleId:"journey-title",title:sr.heading}),i.jsx(x,{id:"journey.intro",kind:"text",as:"p",className:"section-intro",label:"Intro",children:sr.intro}),i.jsx(yx,{}),i.jsx(x,{id:"journey.timeline",kind:"container",as:"ol",className:"timeline",label:"Timeline",children:sr.milestones.map((e,n)=>i.jsx(kx,{m:e,i:n},e.id))})]})})}const Ka=100;function wx(){const e=be.reached/be.goal,n=be.goal/Ka,t=e*Ka,r=Math.round(e*1e3)/10;return i.jsxs(x,{id:"reach.figure",kind:"container",as:"figure",className:"reach__figure","aria-labelledby":"reach-fig-caption",label:"Reach figure",children:[i.jsx(x,{id:"reach.sticker",kind:"text",as:"p",className:"sticker surface-coral reach__sticker",label:"Sticker",children:be.figureLabel}),i.jsxs(x,{id:"reach.stats",kind:"container",className:"reach__stats",label:"Stats",children:[i.jsxs(x,{id:"reach.stat.reached",kind:"container",label:"Reached",children:[i.jsx(x,{id:"reach.stat.reached.num",kind:"heading",as:"span",className:"reach__num",label:"Number",children:be.reachedLabel}),i.jsx(x,{id:"reach.stat.reached.label",kind:"text",as:"span",className:"mono-label",label:"Label",children:"Reached, approx."})]}),i.jsxs(x,{id:"reach.stat.goal",kind:"container",label:"Goal",children:[i.jsx(x,{id:"reach.stat.goal.num",kind:"heading",as:"span",className:"reach__num reach__num--goal",label:"Number",children:be.goalLabel}),i.jsx(x,{id:"reach.stat.goal.label",kind:"text",as:"span",className:"mono-label",label:"Label",children:"Long-term goal"})]})]}),i.jsx(x,{id:"reach.grid",kind:"graphic",className:"reach__grid",role:"img","aria-label":`About ${be.reachedLabel.replace("~","")} of a ${be.goalLabel} goal, roughly ${r} percent.`,label:"Square grid",children:Array.from({length:Ka},(a,l)=>{const o=Math.max(0,Math.min(1,t-l));return i.jsx("span",{className:`reach__cell${o>=1?" is-filled":""}`,children:o>0&&o<1&&i.jsx("span",{className:"reach__partial",style:{width:`${o*100}%`}})},l)})}),i.jsx(x,{id:"reach.bar",kind:"graphic",className:"reach__bar","aria-hidden":"true",label:"Progress bar",children:i.jsx("span",{className:"reach__bar-fill",style:{width:`${e*100}%`}})}),i.jsxs("div",{className:"reach__scale mono","aria-hidden":"true",children:[i.jsx(x,{id:"reach.marker",kind:"text",as:"span",className:"reach__marker",style:{left:`${e*100}%`},label:"Marker",children:`▲ ${be.reachedLabel} ≈ ${r}%`}),i.jsx(x,{id:"reach.scaleGoal",kind:"text",as:"span",className:"reach__scale-goal",label:"Goal",children:be.goalLabel})]}),i.jsxs(x,{id:"reach.caption",htmlId:"reach-fig-caption",kind:"container",as:"figcaption",className:"reach__caption",label:"Caption",children:[i.jsx(x,{id:"reach.caption.unit",kind:"text",as:"span",className:"mono-label",label:"Unit",children:`1 square = ${n/1e6}M users`}),i.jsx(x,{id:"reach.caption.definition",kind:"text",as:"span",className:"reach__definition",label:"Definition",children:be.definition})]})]})}function bx(){return i.jsx(x,{id:"reach",htmlId:"ambition",kind:"section",as:"section",className:"section section--ink","aria-labelledby":"reach-title",file:"Reach",label:"Reach",children:i.jsxs("div",{className:"wrap reach",children:[i.jsxs(x,{id:"reach.copy",kind:"container",className:"reach__copy",label:"Copy",children:[i.jsx(es,{id:"reach",num:"02",children:"The billion-user journey"}),i.jsxs(x,{id:"reach.title",htmlId:"reach-title",kind:"heading",as:"h2",className:"display h2",label:"Heading",children:[i.jsx(x,{id:"reach.title.reached",kind:"text",as:"span",className:"line",label:"Line 1",children:be.headingReached})," ",i.jsx(x,{id:"reach.title.goal",kind:"text",as:"span",className:"line reach__goal-line",label:"Line 2",children:be.headingGoal})]}),i.jsx(x,{id:"reach.body",kind:"text",as:"p",className:"reach__body",label:"Body",children:be.body}),i.jsx(x,{id:"reach.standard",kind:"text",as:"p",className:"reach__standard",label:"Standard",children:be.standard})]}),i.jsx(wx,{})]})})}function _p({id:e,accent:n,letter:t,kicker:r}){return i.jsxs(x,{id:`${e}.band`,kind:"container",className:`case__band surface-${n}`,label:"Band",children:[i.jsx(x,{id:`${e}.letter`,kind:"text",as:"span",className:"case__letter","aria-hidden":"true",label:"Letter",children:t}),i.jsx(x,{id:`${e}.kicker`,kind:"text",as:"span",className:"mono",label:"Kicker",children:r})]})}function ai({id:e,term:n,children:t}){return i.jsxs(i.Fragment,{children:[i.jsx(x,{id:`${e}.label`,kind:"text",as:"dt",label:"Label",children:n}),i.jsx(x,{id:e,kind:"text",as:"dd",label:n,children:t})]})}function jx({c:e}){const n=`work.${e.id}`;return i.jsxs(x,{id:n,kind:"container",as:"article",className:"case","aria-labelledby":`case-${e.id}`,label:e.title,children:[i.jsx(_p,{id:n,accent:e.accent,letter:e.letter,kicker:e.kicker}),i.jsxs("div",{className:"case__body",children:[i.jsxs("div",{className:"case__intro",children:[i.jsx(x,{id:`${n}.title`,htmlId:`case-${e.id}`,kind:"heading",as:"h3",className:"case__title",label:"Title",children:e.title}),i.jsx(x,{id:`${n}.summary`,kind:"text",as:"p",className:"case__summary",label:"Summary",children:e.summary}),i.jsx(x,{id:`${n}.tags`,kind:"container",as:"ul",className:"chips","aria-label":"Themes",label:"Tags",children:e.tags.map((t,r)=>i.jsx(x,{id:`${n}.tag.${r}`,kind:"text",as:"li",label:"Tag",children:t},t))})]}),i.jsxs("dl",{className:"case__fields",children:[i.jsx("div",{children:i.jsx(ai,{id:`${n}.problem`,term:"Customer problem",children:e.problem})}),i.jsx("div",{children:i.jsx(ai,{id:`${n}.role`,term:"My role",children:e.role})}),i.jsx("div",{children:i.jsx(ai,{id:`${n}.complexity`,term:"Complexity",children:e.complexity})}),i.jsxs("div",{children:[i.jsx(x,{id:`${n}.changed.label`,kind:"text",as:"dt",label:"Label",children:"What changed"}),i.jsx("dd",{children:i.jsx("ul",{className:"arrow-list",children:e.changed.map((t,r)=>i.jsx(x,{id:`${n}.changed.${r}`,kind:"text",as:"li",label:`Result ${r+1}`,children:t},t))})})]}),i.jsx("div",{className:"case__shows",children:i.jsx(ai,{id:`${n}.shows`,term:"What it shows about how I work",children:e.shows})})]})]})]})}function Ga({id:e,label:n,title:t,text:r,className:a="builder__col",children:l}){return i.jsxs(x,{id:`work.builder.${e}`,kind:"container",as:"section",className:a,"aria-labelledby":`builder-${e}`,label:t,children:[i.jsx(x,{id:`work.builder.${e}.label`,kind:"text",as:"p",className:"mono-label",label:"Label",children:n}),i.jsx(x,{id:`work.builder.${e}.title`,htmlId:`builder-${e}`,kind:"heading",as:"h4",label:"Title",children:t}),i.jsx(x,{id:`work.builder.${e}.text`,kind:"text",as:"p",label:"Text",children:r}),l]})}function Nx(){const e=Ki.builder;return i.jsxs(x,{id:"work.builder",kind:"container",as:"article",className:"case builder","aria-labelledby":"case-builder",label:"Builder card",children:[i.jsx(_p,{id:"work.builder",accent:"coral",letter:e.letter,kicker:e.kicker}),i.jsxs("div",{className:"builder__body",children:[i.jsx(x,{id:"work.builder.title",htmlId:"case-builder",kind:"heading",as:"h3",className:"case__title builder__title",label:"Title",children:e.title}),i.jsxs("div",{className:"builder__cols",children:[i.jsx(Ga,{id:"then",...e.then}),i.jsx(Ga,{id:"work",...e.atWork}),i.jsxs(Ga,{id:"now",...e.now,className:"builder__col builder__col--now",children:[e.now.projects.length>0&&i.jsx(x,{id:"work.builder.projects",kind:"container",as:"ul",className:"projects",label:"Projects",children:e.now.projects.map((n,t)=>i.jsxs("li",{children:[n.url?i.jsxs(x,{id:`work.builder.project.${t}`,kind:"link",as:"a",href:n.url,target:"_blank",className:"projects__name",label:`${n.name} link`,children:[i.jsx(x,{id:`work.builder.project.${t}.name`,kind:"text",as:"span",label:"Name",children:n.name}),i.jsx(Uo,{size:16,strokeWidth:2.75,"aria-hidden":"true"})]}):i.jsx(x,{id:`work.builder.project.${t}.name`,kind:"text",as:"span",className:"projects__name",label:"Name",children:n.name}),i.jsx(x,{id:`work.builder.project.${t}.text`,kind:"text",as:"span",className:"projects__text",label:"Description",children:n.text})]},n.name))}),e.now.tools.length>0&&i.jsxs(x,{id:"work.builder.toolkit",kind:"container",className:"toolkit",label:"Toolkit",children:[i.jsx(x,{id:"work.builder.toolkit.label",kind:"text",as:"span",className:"mono-label",label:"Label",children:"Toolkit for personal builds"}),i.jsx("ul",{className:"chips chips--small",children:e.now.tools.map((n,t)=>i.jsx(x,{id:`work.builder.tool.${t}`,kind:"text",as:"li",label:"Tool",children:n},n))})]})]})]}),i.jsxs(x,{id:"work.builder.shows",kind:"text",as:"p",className:"builder__shows",label:"What it shows",children:[i.jsx(x,{id:"work.builder.shows.label",kind:"text",as:"span",className:"mono-label",label:"Label",children:"What it shows"})," ",i.jsx(x,{id:"work.builder.shows.text",kind:"text",as:"span",label:"Text",children:e.shows})]})]})]})}function Sx(){return i.jsxs("svg",{className:"vd-illo",viewBox:"0 0 520 360",role:"img","aria-label":"Illustration: a web page with one button selected for direct editing, a floating toolbar, and an inspector panel.",children:[i.jsx("rect",{x:"18",y:"18",width:"494",height:"334",fill:"#000"}),i.jsx("rect",{x:"10",y:"10",width:"494",height:"334",fill:"#fff",stroke:"#000",strokeWidth:"3"}),i.jsx("rect",{x:"10",y:"10",width:"494",height:"28",fill:"#000"}),[0,1,2].map(e=>i.jsx("rect",{x:22+e*16,y:"19",width:"10",height:"10",fill:["#ff6e6c","#d7ff28","#87ceeb"][e]},e)),i.jsx("rect",{x:"34",y:"62",width:"220",height:"18",fill:"#000"}),i.jsx("rect",{x:"34",y:"88",width:"168",height:"18",fill:"#000"}),i.jsx("rect",{x:"34",y:"122",width:"250",height:"6",fill:"#9aa3ab"}),i.jsx("rect",{x:"34",y:"136",width:"226",height:"6",fill:"#9aa3ab"}),i.jsx("rect",{x:"34",y:"150",width:"196",height:"6",fill:"#9aa3ab"}),i.jsx("rect",{className:"vd-illo__btn",x:"34",y:"184",width:"124",height:"34",fill:"#d7ff28",stroke:"#000",strokeWidth:"3"}),i.jsx("rect",{x:"54",y:"198",width:"60",height:"6",fill:"#000"}),i.jsx("rect",{x:"168",y:"184",width:"96",height:"34",fill:"#fff",stroke:"#000",strokeWidth:"3"}),i.jsx("rect",{x:"27",y:"177",width:"138",height:"48",fill:"none",stroke:"#0369a1",strokeWidth:"2.5",strokeDasharray:"6 4"}),[[27,177],[165,177],[27,225],[165,225]].map(([e,n])=>i.jsx("rect",{x:e-5,y:n-5,width:"10",height:"10",fill:"#fff",stroke:"#0369a1",strokeWidth:"2.5"},`${e}-${n}`)),i.jsx("rect",{x:"27",y:"157",width:"58",height:"16",fill:"#0369a1"}),i.jsx("text",{x:"56",y:"169",fill:"#fff",fontFamily:"JetBrains Mono, monospace",fontSize:"10",fontWeight:"700",textAnchor:"middle",children:"BUTTON"}),i.jsx("rect",{x:"40",y:"250",width:"250",height:"42",fill:"#000"}),i.jsx("rect",{x:"34",y:"244",width:"250",height:"42",fill:"#fff",stroke:"#000",strokeWidth:"3"}),i.jsx("text",{x:"56",y:"271",fontFamily:"Archivo Black, sans-serif",fontSize:"15",children:"Aa"}),i.jsx("rect",{x:"92",y:"256",width:"18",height:"18",fill:"#d7ff28",stroke:"#000",strokeWidth:"2.5"}),i.jsx("path",{d:"M126 274 V264 Q126 256 134 256 H142",fill:"none",stroke:"#000",strokeWidth:"2.5"}),i.jsx("rect",{x:"156",y:"256",width:"18",height:"18",fill:"#fff",stroke:"#000",strokeWidth:"2.5"}),i.jsx("rect",{x:"160",y:"260",width:"18",height:"18",fill:"none",stroke:"#000",strokeWidth:"2.5"}),i.jsx("line",{x1:"190",y1:"254",x2:"190",y2:"276",stroke:"#000",strokeWidth:"2"}),i.jsx("rect",{x:"200",y:"256",width:"72",height:"18",fill:"#eef9fd",stroke:"#000",strokeWidth:"2"}),i.jsx("rect",{x:"207",y:"263",width:"44",height:"4",fill:"#9aa3ab"}),i.jsx("rect",{x:"372",y:"38",width:"132",height:"306",fill:"#87ceeb",stroke:"#000",strokeWidth:"3"}),["FILL","RADIUS","SHADOW","TEXT"].map((e,n)=>i.jsxs("g",{children:[i.jsx("text",{x:"386",y:70+n*66,fontFamily:"JetBrains Mono, monospace",fontSize:"10",fontWeight:"700",children:e}),i.jsx("rect",{x:"386",y:78+n*66,width:"104",height:"24",fill:"#fff",stroke:"#000",strokeWidth:"2.5"}),n===0&&i.jsx("rect",{x:"392",y:"84",width:"12",height:"12",fill:"#d7ff28",stroke:"#000",strokeWidth:"2"}),i.jsx("rect",{x:n===0?410:394,y:88+n*66,width:n===0?50:40+n*8,height:"4",fill:"#000"})]},e))]})}function Cx(){const e=Ki.featured,{mode:n}=fa(),t=ma(),[r,a]=b.useState(!1),l=n==="design"?Mr(t,"work.featured.thinking")||Mr(t,"work.featured.notes"):r,o=e.implemented.length>0||e.simulated.length>0;return i.jsxs(x,{id:"work.featured",htmlId:"prototype-case",kind:"container",as:"article",className:"featured grid-paper","aria-labelledby":"featured-title",label:"Featured prototype",children:[i.jsxs("div",{className:"featured__top",children:[i.jsx(x,{id:"work.featured.label",kind:"text",as:"p",className:"sticker surface-coral featured__label",label:"Sticker",children:e.label}),i.jsx(x,{id:"work.featured.letter",kind:"text",as:"span",className:"case__letter featured__letter","aria-hidden":"true",label:"Letter",children:"D"})]}),i.jsxs("div",{className:"featured__grid",children:[i.jsxs("div",{className:"featured__copy",children:[i.jsx(x,{id:"work.featured.title",htmlId:"featured-title",kind:"heading",as:"h3",className:"display featured__title",label:"Title",children:e.title}),i.jsx(x,{id:"work.featured.desc",kind:"text",as:"p",className:"featured__desc",label:"Description",children:e.description}),i.jsx(x,{id:"work.featured.insight",kind:"container",as:"blockquote",className:"featured__insight",label:"Insight",children:i.jsx(x,{id:"work.featured.insight.text",kind:"text",as:"p",label:"Quote",children:e.insight})})]}),i.jsx(x,{id:"work.featured.visual",kind:"graphic",className:"featured__visual",label:"Illustration",children:i.jsx(Sx,{})})]}),i.jsx(x,{id:"work.featured.steps",kind:"container",as:"ol",className:"steps",label:"Steps",children:e.steps.map((s,c)=>i.jsxs(x,{id:`work.featured.step.${c}`,kind:"container",as:"li",className:"step",label:`Step ${c+1}`,children:[i.jsx(x,{id:`work.featured.step.${c}.num`,kind:"text",as:"span",className:"step__num","aria-hidden":"true",label:"Number",children:String(c+1)}),i.jsx(x,{id:`work.featured.step.${c}.label`,kind:"heading",as:"h4",className:"step__label",label:"Label",children:s.label}),i.jsx(x,{id:`work.featured.step.${c}.text`,kind:"text",as:"p",label:"Text",children:s.text})]},s.label))}),i.jsxs(x,{id:"work.featured.actions",kind:"container",className:"featured__actions",label:"Buttons",children:[i.jsxs(x,{id:"work.featured.open",kind:"button",as:"a",className:"btn btn--ink",href:Ie.prototypeUrl,target:"_blank",label:"Open the prototype",children:[i.jsx(x,{id:"work.featured.open.label",kind:"text",as:"span",label:"Label",children:"Open the prototype"}),i.jsx("span",{"aria-hidden":"true",children:"↗"})]}),o&&i.jsxs(x,{id:"work.featured.thinking",kind:"button",as:"button",type:"button",className:"btn","aria-expanded":l,onClick:()=>a(s=>!s),label:"Explore the thinking",children:[i.jsx(x,{id:"work.featured.thinking.label",kind:"text",as:"span",label:"Label",children:"Explore the thinking"}),i.jsx(Cr,{className:"btn__chev",size:18,strokeWidth:2.75,"aria-hidden":"true"})]})]}),o&&i.jsxs(x,{id:"work.featured.notes",kind:"container",className:"thinking",hidden:!l,label:"Thinking",children:[i.jsxs("div",{className:"thinking__col",children:[i.jsx(x,{id:"work.featured.notes.implemented.label",kind:"text",as:"h4",className:"mono-label",label:"Label",children:"Working in the prototype"}),i.jsx("ul",{className:"arrow-list",children:e.implemented.map((s,c)=>i.jsx(x,{id:`work.featured.notes.implemented.${c}`,kind:"text",as:"li",label:`Item ${c+1}`,children:s},s))})]}),i.jsxs("div",{className:"thinking__col",children:[i.jsx(x,{id:"work.featured.notes.simulated.label",kind:"text",as:"h4",className:"mono-label",label:"Label",children:"Simulated"}),i.jsx("ul",{className:"arrow-list",children:e.simulated.map((s,c)=>i.jsx(x,{id:`work.featured.notes.simulated.${c}`,kind:"text",as:"li",label:`Item ${c+1}`,children:s},s))})]})]}),i.jsx(x,{id:"work.featured.disclosure",kind:"text",as:"p",className:"featured__disclosure mono",label:"Disclosure",children:e.disclosure})]})}function zx(){return i.jsx(x,{id:"work",htmlId:"work",kind:"section",as:"section",className:"section section--paper","aria-labelledby":"work-title",file:"Work",label:"Selected work",children:i.jsxs("div",{className:"wrap",children:[i.jsx(ga,{id:"work",num:"05",label:"Selected work",titleId:"work-title",title:Ki.heading}),i.jsxs("div",{className:"cases",children:[Ki.cases.map(e=>i.jsx(jx,{c:e},e.id)),i.jsx(Nx,{}),i.jsx(Cx,{})]})]})})}const Ex=b.memo(function(){return i.jsxs(i.Fragment,{children:[i.jsx(ix,{}),i.jsx(dx,{}),i.jsx(_x,{}),i.jsx(bx,{}),i.jsx(rx,{}),i.jsx(hx,{}),i.jsx(zx,{}),i.jsx(ax,{}),i.jsx(lx,{})]})});function Mx(){const{mode:e,rootRef:n,viewportRef:t}=Oe(),r=a=>{var m;if(e==="design")return;const l=a.target.closest("a"),o=l==null?void 0:l.getAttribute("href");if(!l||!(o!=null&&o.startsWith("#")))return;a.preventDefault();const s=n.current,c=t.current,d=o==="#"?s:s==null?void 0:s.querySelector(`#${CSS.escape(o.slice(1))}`);if(!s||!c||!d)return;const f=((m=s.querySelector(".header"))==null?void 0:m.offsetHeight)??0,h=d.getBoundingClientRect().top-c.getBoundingClientRect().top+c.scrollTop;c.scrollTo({top:Math.max(0,h-f-16),behavior:"smooth"})};return i.jsx("div",{className:"site","data-mode":e,ref:n,onClick:r,children:i.jsx(Ex,{})})}function wp({size:e=22}){return i.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24","aria-label":"bolt",children:i.jsx("path",{d:"M7.2 2.5h3.9l-1.3 6.1c.9-.9 2.1-1.4 3.5-1.4 3 0 5 2.2 5 5.5 0 4-2.8 7-6.9 7-1.8 0-3.2-.6-4-1.6l-.3 1.3H3.3L7.2 2.5Zm4.1 15.1c1.9 0 3.2-1.5 3.2-3.5 0-1.6-1-2.6-2.5-2.6-1.9 0-3.2 1.5-3.2 3.5 0 1.6 1 2.6 2.5 2.6Z",fill:"currentColor"})})}function bp({size:e=18,active:n=!1}){return i.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,children:[i.jsx("path",{d:"M4.6 3.9 11.5 20l2.1-6.4 6.4-2.1L4.6 3.9Z",stroke:n?"#1A8CFF":"currentColor",fill:n?"#1A8CFF":"none",fillOpacity:n?.22:0,strokeWidth:"1.8",strokeLinejoin:"round"}),i.jsx("path",{d:"M18.2 2.2l.55 1.45 1.45.55-1.45.55-.55 1.45-.55-1.45-1.45-.55 1.45-.55.55-1.45Z",fill:n?"#1A8CFF":"currentColor",stroke:n?"#1A8CFF":"currentColor",strokeWidth:"1",strokeLinejoin:"round"}),i.jsx("path",{d:"M14.2 14.2 19 19",stroke:n?"#1A8CFF":"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})}function $x({size:e=18}){return i.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:i.jsx("path",{d:"M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"})})}function jp(){return i.jsxs("div",{className:"msg__feedback",children:[i.jsx("button",{"aria-label":"Copy",children:i.jsx(qo,{size:15})}),i.jsx("button",{"aria-label":"Good response",children:i.jsx(Fm,{size:15})}),i.jsx("button",{"aria-label":"Bad response",children:i.jsx(Rm,{size:15})}),i.jsx("button",{"aria-label":"More",children:i.jsx(Uu,{size:15})})]})}function Lx({m:e}){const[n,t]=b.useState(!1);return e.role==="version"?i.jsxs("div",{className:`vcard ${e.current?"is-current":""}`,children:[i.jsxs("div",{children:[i.jsx("strong",{children:e.title}),i.jsx("span",{children:e.subtitle})]}),i.jsxs("div",{className:"vcard__actions",children:[i.jsx(im,{size:17,className:e.current?"is-blue":""}),!e.current&&i.jsxs(i.Fragment,{children:[i.jsx(ha,{size:17}),i.jsx(Go,{size:17})]})]})]}):e.role==="user"?i.jsx("div",{className:"msg msg--user",children:e.text}):e.role==="typing"?i.jsxs("div",{className:"msg msg--bot",children:[i.jsx("div",{className:"msg__brand",children:"bolt"}),i.jsxs("div",{className:"typing",children:[i.jsx("i",{}),i.jsx("i",{}),i.jsx("i",{})]})]}):i.jsxs("div",{className:"msg msg--bot",children:[i.jsx("div",{className:"msg__brand",children:"bolt"}),e.badge&&i.jsxs("div",{className:"msg__badge",children:[i.jsx(bp,{size:14,active:!0})," ",e.badge]}),e.skill&&i.jsxs("div",{className:"msg__skill",children:[i.jsx($m,{size:15})," Skill ",i.jsx("code",{children:e.skill})]}),i.jsx("p",{className:"msg__text",children:e.text}),e.actions&&i.jsxs("div",{className:`actions ${n?"is-open":""}`,children:[i.jsxs("button",{className:"actions__head",onClick:()=>t(r=>!r),children:[i.jsx(Hu,{size:15}),i.jsxs("span",{children:[e.actions.length," actions taken"]}),i.jsx(Cr,{size:16})]}),n&&i.jsx("ul",{children:e.actions.map(r=>i.jsxs("li",{children:[i.jsx(zr,{size:13})," ",r]},r))})]}),i.jsx(jp,{})]})}function Px({onMode:e}){const{mode:n}=Oe(),{messages:t,add:r,remove:a}=Zo(),[l,o]=b.useState("chat"),[s,c]=b.useState(""),[d,f]=b.useState(!0),h=b.useRef(null);b.useEffect(()=>o(n==="design"?"layers":"chat"),[n]),b.useEffect(()=>{const k=h.current;k&&l==="chat"&&k.scrollTo({top:k.scrollHeight,behavior:"smooth"})},[t.length,l]);const m=()=>{const k=s.trim();if(!k)return;c(""),r({role:"user",text:k});const v=r({role:"typing"});setTimeout(()=>{a(v),r({role:"assistant",text:"This is a prototype, so chat replies are simulated. To change the page yourself, open ✦ Visual Design (left of Preview): click any element to restyle it, double-click text to edit, or ask the AI box in the toolbar to restyle a button."})},1300)};return i.jsxs("aside",{className:"left",children:[n==="design"&&i.jsxs("div",{className:"left__tabs",children:[i.jsx("button",{className:l==="chat"?"is-active":"",onClick:()=>o("chat"),children:"Chat"}),i.jsx("button",{className:l==="layers"?"is-active":"",onClick:()=>o("layers"),children:"Layers"})]}),l==="layers"&&n==="design"?i.jsx(xg,{}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"chat",ref:h,onScroll:k=>{const v=k.currentTarget;f(v.scrollHeight-v.scrollTop-v.clientHeight<40)},children:[i.jsx(jp,{}),t.map(k=>i.jsx(Lx,{m:k},k.id))]}),!d&&i.jsx("button",{className:"chat__down","aria-label":"Scroll to bottom",onClick:()=>{var k;return(k=h.current)==null?void 0:k.scrollTo({top:1e6,behavior:"smooth"})},children:i.jsx(Wo,{size:16})}),i.jsxs("div",{className:"composer",children:[i.jsx("textarea",{value:s,placeholder:"How can Bolt help you today? (or /command)",onChange:k=>c(k.target.value),onKeyDown:k=>{k.key==="Enter"&&!k.shiftKey&&(k.preventDefault(),m())}}),i.jsxs("div",{className:"composer__bar",children:[i.jsx("button",{className:"composer__plus","aria-label":"Attach",children:i.jsx($t,{size:18})}),i.jsxs("button",{className:"composer__pill",children:["Standard ",i.jsx(Bu,{size:13})]}),i.jsx("span",{className:"composer__spacer"}),i.jsxs("button",{className:`composer__pill ${n==="design"?"is-on":""}`,"data-tip":"Select an element to edit visually",onClick:()=>e(n==="design"?"preview":"design"),children:[i.jsx(Qu,{size:15})," Select"]}),i.jsxs("button",{className:"composer__pill",children:[i.jsx(xm,{size:15})," Plan"]}),i.jsx("button",{className:"composer__icon","aria-label":"Voice",children:i.jsx(_m,{size:16})}),i.jsx("button",{className:"composer__send","aria-label":"Send",disabled:!s.trim(),onClick:m,children:i.jsx(Vo,{size:16,strokeWidth:2.5})})]})]})]})]})}const li=[{d:"desktop",icon:qu,label:"Desktop"},{d:"tablet",icon:Xu,label:"Tablet"},{d:"mobile",icon:Yu,label:"Mobile"}];function Ax({onMode:e,onToggleLeft:n,pending:t,onReload:r,onReset:a}){const{mode:l,device:o,setDevice:s}=Oe(),c=Ir(),[d,f]=b.useState(!1),h=b.useRef(null);Jo(h,()=>f(!1),d);const m=li.find(w=>w.d===o),k=m.icon,v=[{m:"design",label:"Visual Design",tip:"Visual Design",icon:i.jsx(bp,{size:17,active:l==="design"})},{m:"preview",label:"Preview",tip:"Preview",icon:i.jsx(ha,{size:17})},{m:"code",label:"Code",tip:"Code",icon:i.jsx(lm,{size:17})},{m:"database",label:"Database",tip:"Database",icon:i.jsx(Wu,{size:16})}];return i.jsxs("header",{className:"top",children:[i.jsxs("div",{className:"top__left",children:[i.jsx("span",{className:"top__logo",children:i.jsx(wp,{size:24})}),i.jsx("span",{className:"top__slash",children:"/"}),i.jsx("span",{className:"top__avatar",children:"A"}),i.jsx(Bu,{size:13,className:"top__muted"}),i.jsx("span",{className:"top__project",title:"Alfred Chang · Personal Site",children:"Alfred Chang · Personal Site"}),i.jsx("button",{className:"top__icon","data-tip":"Discussion",children:i.jsx(km,{size:17})}),i.jsx("button",{className:"top__icon","data-tip":"Version history",children:i.jsx(hm,{size:17})}),i.jsx("button",{className:"top__icon","data-tip":"Toggle sidebar",onClick:n,children:i.jsx(Sm,{size:17})}),i.jsx("nav",{className:"modes","aria-label":"Workspace view",children:v.map(w=>i.jsxs("button",{className:`modes__btn ${l===w.m?"is-active":""} ${w.m==="design"?"modes__btn--design":""}`,"data-tip":l===w.m?void 0:w.tip,"data-tip-kbd":w.m==="design"?"D":void 0,"aria-label":w.tip,"aria-pressed":l===w.m,onClick:()=>e(l===w.m&&w.m==="design"?"preview":w.m),children:[w.icon,l===w.m&&i.jsx("span",{children:w.label}),w.m==="code"&&t>0&&l!=="code"&&i.jsx("i",{className:"modes__dot",title:`${t} edits not yet in code`})]},w.m))}),i.jsxs("div",{className:"top__menu",ref:h,children:[i.jsx("button",{className:"top__icon","data-tip":"Project settings",onClick:()=>f(w=>!w),children:i.jsx(Lm,{size:17})}),d&&i.jsx("div",{className:"menu",children:i.jsx("button",{onClick:()=>{f(!1),a()},children:"Reset prototype to original"})})]})]}),i.jsxs("div",{className:"urlbar",children:[i.jsx("span",{className:"urlbar__path",children:"/"}),i.jsx("button",{className:"top__icon","data-tip":"Reload preview",onClick:r,children:i.jsx(Gu,{size:15})}),i.jsx("button",{className:"top__icon","data-tip":`${m.label} — click to switch`,onClick:()=>s(li[(li.indexOf(m)+1)%li.length].d),children:i.jsx(k,{size:15})}),i.jsx("button",{className:"top__icon","data-tip":"More",children:i.jsx(Uu,{size:15})})]}),i.jsxs("div",{className:"top__right",children:[i.jsx("button",{className:"top__icon","data-tip":"GitHub",children:i.jsx($x,{size:19})}),i.jsx("button",{className:"btn btn--light",onClick:()=>c("Upgrade is not part of this prototype"),children:"Upgrade"}),i.jsx("button",{className:"btn btn--ghost",onClick:()=>c("Share link copied (prototype)"),children:"Share"}),i.jsx("button",{className:"btn btn--blue",onClick:()=>c("Publishing is disabled in this prototype"),children:"Publish"})]})]})}const Tx={desktop:"100%",tablet:"834px",mobile:"390px"};function Ix(){const[e,n]=b.useState("preview");return i.jsx(Km,{children:i.jsx(Vm,{children:i.jsx(bg,{children:i.jsx(qm,{mode:e,setMode:n,children:i.jsx(Fx,{})})})})})}function Rx(e,n){return[...new Set([...Object.keys(e),...Object.keys(n)])].filter(t=>JSON.stringify(e[t])!==JSON.stringify(n[t]))}function Fx(){const{mode:e,setMode:n,device:t,getEl:r,viewportRef:a,select:l}=Oe(),{doc:o,compiled:s}=Jn(),c=yn(),d=Zo(),f=Ir(),[h,m]=b.useState(!0),[k,v]=b.useState(null),[w,j]=b.useState(null),[p,u]=b.useState(0),[y,_]=b.useState(!0),N=b.useMemo(()=>Rx(s,o).length,[s,o]);b.useEffect(()=>{N>0&&n("design")},[]);const g=b.useCallback(z=>{if(!(z===e||k)){if(e==="design"&&N>0){const L=yg(s,o,r);if(L.length){v({changes:L,next:z});return}c.markCompiled()}n(z)}},[e,k,N,s,o,r,c,n]),S=b.useRef({applying:k,chat:d,toast:f});S.current={applying:k,chat:d,toast:f};const $=b.useCallback(()=>{var ee;const{applying:z,chat:L,toast:B}=S.current;if(!z)return;const we=z.changes.length,D=`${we} design ${we===1?"change":"changes"}`,se=L.messages.filter(V=>V.role==="version").length;L.add({role:"assistant",badge:"Visual Design",text:`Applied ${D} to your code in one pass.`,actions:[...new Set(z.changes.map(V=>`Edited ${V.file}`)),"Ran npm run build"]}),L.add({role:"version",title:`Visual Design · ${D}`,subtitle:`Version ${se+2} at ${jg()}`,current:!0}),j({ids:z.changes.map(V=>V.id),at:Date.now(),focusFile:(ee=z.changes[0])==null?void 0:ee.file}),c.markCompiled(),v(null),n(z.next),B("Saved to code")},[c,n]);b.useEffect(()=>{const z=L=>{const B=L.target;L.metaKey||L.ctrlKey||L.altKey||B.closest("input, textarea, select, [contenteditable]")||(L.key==="d"||L.key==="D")&&g(e==="design"?"preview":"design")};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[e,g]);const C=e==="design"||e==="preview";return i.jsxs("div",{className:`app mode-${e}`,children:[i.jsx(Ax,{onMode:g,onToggleLeft:()=>m(z=>!z),pending:N,onReload:()=>u(z=>z+1),onReset:()=>{c.resetAll(),d.reset(),j(null),l(null),f("Prototype reset to the original design")}}),i.jsxs("div",{className:"body",children:[h&&i.jsx(Px,{onMode:g}),i.jsx("main",{className:"main",children:i.jsxs("div",{className:"workspace",children:[e==="code"&&i.jsx(pg,{sync:w}),e==="database"&&i.jsx(Dx,{}),i.jsxs("div",{className:"canvas-area",style:{display:C?void 0:"none"},children:[e==="design"&&i.jsx(Rg,{onDone:()=>g("preview"),pending:N}),i.jsxs("div",{className:"canvas-row",children:[i.jsxs("div",{className:`canvas ${e==="design"?"is-design":""} device-${t}`,children:[i.jsx("div",{className:"canvas__scroll",ref:a,children:i.jsx("div",{className:"canvas__device",style:{width:Tx[t]},children:i.jsx(Mx,{})},p)}),i.jsx(Ig,{}),e==="preview"&&y&&i.jsxs("div",{className:"made-in",children:[i.jsx(wp,{size:16}),i.jsx("span",{children:"Made in Bolt"}),i.jsx("button",{"aria-label":"Hide badge",onClick:()=>_(!1),children:i.jsx(qi,{size:13})})]})]}),e==="design"&&i.jsx(Fg,{})]})]})]})})]}),k&&i.jsx(vg,{changes:k.changes,onDone:$})]})}function Dx(){return i.jsx("div",{className:"db",children:i.jsxs("div",{className:"db__card",children:[i.jsx("span",{className:"db__icon",children:i.jsx(Wu,{size:22})}),i.jsx("h3",{children:"No database connected"}),i.jsx("p",{children:"This portfolio is a static site. Connect a database to store contact form submissions or project analytics."}),i.jsxs("button",{className:"btn btn--blue",children:[i.jsx(Ku,{size:15})," Connect Supabase"]}),i.jsx("div",{className:"db__ghost",children:["contacts","projects","page_views"].map(e=>i.jsxs("div",{children:[i.jsx(Im,{size:14})," ",e,i.jsx("em",{children:"suggested"})]},e))})]})})}Tu(document.getElementById("root")).render(i.jsx(b.StrictMode,{children:i.jsx(Ix,{})}));
