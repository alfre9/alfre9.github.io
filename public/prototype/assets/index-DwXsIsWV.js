(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(l){if(l.ep)return;l.ep=!0;const a=t(l);fetch(l.href,a)}})();var jc={exports:{}},Xi={},Nc={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lr=Symbol.for("react.element"),bp=Symbol.for("react.portal"),jp=Symbol.for("react.fragment"),Np=Symbol.for("react.strict_mode"),Sp=Symbol.for("react.profiler"),Cp=Symbol.for("react.provider"),zp=Symbol.for("react.context"),Ep=Symbol.for("react.forward_ref"),Mp=Symbol.for("react.suspense"),$p=Symbol.for("react.memo"),Lp=Symbol.for("react.lazy"),ro=Symbol.iterator;function Tp(e){return e===null||typeof e!="object"?null:(e=ro&&e[ro]||e["@@iterator"],typeof e=="function"?e:null)}var Sc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cc=Object.assign,zc={};function Lt(e,n,t){this.props=e,this.context=n,this.refs=zc,this.updater=t||Sc}Lt.prototype.isReactComponent={};Lt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Lt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ec(){}Ec.prototype=Lt.prototype;function Ga(e,n,t){this.props=e,this.context=n,this.refs=zc,this.updater=t||Sc}var Ya=Ga.prototype=new Ec;Ya.constructor=Ga;Cc(Ya,Lt.prototype);Ya.isPureReactComponent=!0;var io=Array.isArray,Mc=Object.prototype.hasOwnProperty,Xa={current:null},$c={key:!0,ref:!0,__self:!0,__source:!0};function Lc(e,n,t){var r,l={},a=null,s=null;if(n!=null)for(r in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(a=""+n.key),n)Mc.call(n,r)&&!$c.hasOwnProperty(r)&&(l[r]=n[r]);var o=arguments.length-2;if(o===1)l.children=t;else if(1<o){for(var c=Array(o),d=0;d<o;d++)c[d]=arguments[d+2];l.children=c}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)l[r]===void 0&&(l[r]=o[r]);return{$$typeof:Lr,type:e,key:a,ref:s,props:l,_owner:Xa.current}}function Pp(e,n){return{$$typeof:Lr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Za(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lr}function Ap(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var lo=/\/+/g;function xl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Ap(""+e.key):n.toString(36)}function oi(e,n,t,r,l){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Lr:case bp:s=!0}}if(s)return s=e,l=l(s),e=r===""?"."+xl(s,0):r,io(l)?(t="",e!=null&&(t=e.replace(lo,"$&/")+"/"),oi(l,n,t,"",function(d){return d})):l!=null&&(Za(l)&&(l=Pp(l,t+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(lo,"$&/")+"/")+e)),n.push(l)),1;if(s=0,r=r===""?".":r+":",io(e))for(var o=0;o<e.length;o++){a=e[o];var c=r+xl(a,o);s+=oi(a,n,t,c,l)}else if(c=Tp(e),typeof c=="function")for(e=c.call(e),o=0;!(a=e.next()).done;)a=a.value,c=r+xl(a,o++),s+=oi(a,n,t,c,l);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function Or(e,n,t){if(e==null)return e;var r=[],l=0;return oi(e,r,"","",function(a){return n.call(t,a,l++)}),r}function Ip(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},ci={transition:null},Rp={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:ci,ReactCurrentOwner:Xa};function Tc(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Or,forEach:function(e,n,t){Or(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Or(e,function(){n++}),n},toArray:function(e){return Or(e,function(n){return n})||[]},only:function(e){if(!Za(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Lt;O.Fragment=jp;O.Profiler=Sp;O.PureComponent=Ga;O.StrictMode=Np;O.Suspense=Mp;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rp;O.act=Tc;O.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cc({},e.props),l=e.key,a=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,s=Xa.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in n)Mc.call(n,c)&&!$c.hasOwnProperty(c)&&(r[c]=n[c]===void 0&&o!==void 0?o[c]:n[c])}var c=arguments.length-2;if(c===1)r.children=t;else if(1<c){o=Array(c);for(var d=0;d<c;d++)o[d]=arguments[d+2];r.children=o}return{$$typeof:Lr,type:e.type,key:l,ref:a,props:r,_owner:s}};O.createContext=function(e){return e={$$typeof:zp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cp,_context:e},e.Consumer=e};O.createElement=Lc;O.createFactory=function(e){var n=Lc.bind(null,e);return n.type=e,n};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Ep,render:e}};O.isValidElement=Za;O.lazy=function(e){return{$$typeof:Lp,_payload:{_status:-1,_result:e},_init:Ip}};O.memo=function(e,n){return{$$typeof:$p,type:e,compare:n===void 0?null:n}};O.startTransition=function(e){var n=ci.transition;ci.transition={};try{e()}finally{ci.transition=n}};O.unstable_act=Tc;O.useCallback=function(e,n){return Se.current.useCallback(e,n)};O.useContext=function(e){return Se.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};O.useEffect=function(e,n){return Se.current.useEffect(e,n)};O.useId=function(){return Se.current.useId()};O.useImperativeHandle=function(e,n,t){return Se.current.useImperativeHandle(e,n,t)};O.useInsertionEffect=function(e,n){return Se.current.useInsertionEffect(e,n)};O.useLayoutEffect=function(e,n){return Se.current.useLayoutEffect(e,n)};O.useMemo=function(e,n){return Se.current.useMemo(e,n)};O.useReducer=function(e,n,t){return Se.current.useReducer(e,n,t)};O.useRef=function(e){return Se.current.useRef(e)};O.useState=function(e){return Se.current.useState(e)};O.useSyncExternalStore=function(e,n,t){return Se.current.useSyncExternalStore(e,n,t)};O.useTransition=function(){return Se.current.useTransition()};O.version="18.3.1";Nc.exports=O;var w=Nc.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp=w,Dp=Symbol.for("react.element"),Op=Symbol.for("react.fragment"),Bp=Object.prototype.hasOwnProperty,Hp=Fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wp={key:!0,ref:!0,__self:!0,__source:!0};function Pc(e,n,t){var r,l={},a=null,s=null;t!==void 0&&(a=""+t),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(s=n.ref);for(r in n)Bp.call(n,r)&&!Wp.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Dp,type:e,key:a,ref:s,props:l,_owner:Hp.current}}Xi.Fragment=Op;Xi.jsx=Pc;Xi.jsxs=Pc;jc.exports=Xi;var i=jc.exports,Ac={exports:{}},Fe={},Ic={exports:{}},Rc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(M,R){var I=M.length;M.push(R);e:for(;0<I;){var T=I-1>>>1,D=M[T];if(0<l(D,R))M[T]=R,M[I]=D,I=T;else break e}}function t(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var R=M[0],I=M.pop();if(I!==R){M[0]=I;e:for(var T=0,D=M.length,B=D>>>1;T<B;){var se=2*(T+1)-1,le=M[se],V=se+1,xe=M[V];if(0>l(le,I))V<D&&0>l(xe,le)?(M[T]=xe,M[V]=I,T=V):(M[T]=le,M[se]=I,T=se);else if(V<D&&0>l(xe,I))M[T]=xe,M[V]=I,T=V;else break e}}return R}function l(M,R){var I=M.sortIndex-R.sortIndex;return I!==0?I:M.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var c=[],d=[],f=1,h=null,g=3,_=!1,v=!1,b=!1,j=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(M){for(var R=t(d);R!==null;){if(R.callback===null)r(d);else if(R.startTime<=M)r(d),R.sortIndex=R.expirationTime,n(c,R);else break;R=t(d)}}function k(M){if(b=!1,m(M),!v)if(t(c)!==null)v=!0,re(N);else{var R=t(d);R!==null&&X(k,R.startTime-M)}}function N(M,R){v=!1,b&&(b=!1,p($),$=-1),_=!0;var I=g;try{for(m(R),h=t(c);h!==null&&(!(h.expirationTime>R)||M&&!P());){var T=h.callback;if(typeof T=="function"){h.callback=null,g=h.priorityLevel;var D=T(h.expirationTime<=R);R=e.unstable_now(),typeof D=="function"?h.callback=D:h===t(c)&&r(c),m(R)}else r(c);h=t(c)}if(h!==null)var B=!0;else{var se=t(d);se!==null&&X(k,se.startTime-R),B=!1}return B}finally{h=null,g=I,_=!1}}var y=!1,C=null,$=-1,S=5,E=-1;function P(){return!(e.unstable_now()-E<S)}function H(){if(C!==null){var M=e.unstable_now();E=M;var R=!0;try{R=C(!0,M)}finally{R?U():(y=!1,C=null)}}else y=!1}var U;if(typeof u=="function")U=function(){u(H)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,ne=F.port2;F.port1.onmessage=H,U=function(){ne.postMessage(null)}}else U=function(){j(H,0)};function re(M){C=M,y||(y=!0,U())}function X(M,R){$=j(function(){M(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){v||_||(v=!0,re(N))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(M){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var I=g;g=R;try{return M()}finally{g=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,R){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var I=g;g=M;try{return R()}finally{g=I}},e.unstable_scheduleCallback=function(M,R,I){var T=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?T+I:T):I=T,M){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=I+D,M={id:f++,callback:R,priorityLevel:M,startTime:I,expirationTime:D,sortIndex:-1},I>T?(M.sortIndex=I,n(d,M),t(c)===null&&M===t(d)&&(b?(p($),$=-1):b=!0,X(k,I-T))):(M.sortIndex=D,n(c,M),v||_||(v=!0,re(N))),M},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(M){var R=g;return function(){var I=g;g=R;try{return M.apply(this,arguments)}finally{g=I}}}})(Rc);Ic.exports=Rc;var Up=Ic.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp=w,Re=Up;function z(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fc=new Set,cr={};function Zn(e,n){jt(e,n),jt(e+"Capture",n)}function jt(e,n){for(cr[e]=n,e=0;e<n.length;e++)Fc.add(n[e])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,Qp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ao={},so={};function qp(e){return Xl.call(so,e)?!0:Xl.call(ao,e)?!1:Qp.test(e)?so[e]=!0:(ao[e]=!0,!1)}function Kp(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gp(e,n,t,r){if(n===null||typeof n>"u"||Kp(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ce(e,n,t,r,l,a,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=s}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ge[n]=new Ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ja=/[\-:]([a-z])/g;function es(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ja,es);ge[n]=new Ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ja,es);ge[n]=new Ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ja,es);ge[n]=new Ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function ns(e,n,t,r){var l=ge.hasOwnProperty(n)?ge[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Gp(n,t,l,r)&&(t=null),r||l===null?qp(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var xn=Vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Br=Symbol.for("react.element"),tt=Symbol.for("react.portal"),rt=Symbol.for("react.fragment"),ts=Symbol.for("react.strict_mode"),Zl=Symbol.for("react.profiler"),Dc=Symbol.for("react.provider"),Oc=Symbol.for("react.context"),rs=Symbol.for("react.forward_ref"),Jl=Symbol.for("react.suspense"),ea=Symbol.for("react.suspense_list"),is=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),Bc=Symbol.for("react.offscreen"),oo=Symbol.iterator;function At(e){return e===null||typeof e!="object"?null:(e=oo&&e[oo]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,yl;function Qt(e){if(yl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);yl=n&&n[1]||""}return`
`+yl+e}var vl=!1;function kl(e,n){if(!e||vl)return"";vl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),a=r.stack.split(`
`),s=l.length-1,o=a.length-1;1<=s&&0<=o&&l[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(l[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||l[s]!==a[o]){var c=`
`+l[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=o);break}}}finally{vl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Qt(e):""}function Yp(e){switch(e.tag){case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 2:case 15:return e=kl(e.type,!1),e;case 11:return e=kl(e.type.render,!1),e;case 1:return e=kl(e.type,!0),e;default:return""}}function na(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rt:return"Fragment";case tt:return"Portal";case Zl:return"Profiler";case ts:return"StrictMode";case Jl:return"Suspense";case ea:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Oc:return(e.displayName||"Context")+".Consumer";case Dc:return(e._context.displayName||"Context")+".Provider";case rs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case is:return n=e.displayName||null,n!==null?n:na(e.type)||"Memo";case kn:n=e._payload,e=e._init;try{return na(e(n))}catch{}}return null}function Xp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return na(n);case 8:return n===ts?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zp(e){var n=Hc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Hr(e){e._valueTracker||(e._valueTracker=Zp(e))}function Wc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Hc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ta(e,n){var t=n.checked;return ee({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function co(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Pn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Uc(e,n){n=n.checked,n!=null&&ns(e,"checked",n,!1)}function ra(e,n){Uc(e,n);var t=Pn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ia(e,n.type,t):n.hasOwnProperty("defaultValue")&&ia(e,n.type,Pn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function uo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ia(e,n,t){(n!=="number"||_i(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var qt=Array.isArray;function ft(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Pn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function la(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(z(91));return ee({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function po(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(z(92));if(qt(t)){if(1<t.length)throw Error(z(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Pn(t)}}function Vc(e,n){var t=Pn(n.value),r=Pn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ho(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Qc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function aa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Qc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wr,qc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Wr=Wr||document.createElement("div"),Wr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function dr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Xt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jp=["Webkit","ms","Moz","O"];Object.keys(Xt).forEach(function(e){Jp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Xt[n]=Xt[e]})});function Kc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Xt.hasOwnProperty(e)&&Xt[e]?(""+n).trim():n+"px"}function Gc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Kc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var eh=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sa(e,n){if(n){if(eh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(z(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(z(61))}if(n.style!=null&&typeof n.style!="object")throw Error(z(62))}}function oa(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ca=null;function ls(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var da=null,mt=null,gt=null;function fo(e){if(e=Ar(e)){if(typeof da!="function")throw Error(z(280));var n=e.stateNode;n&&(n=tl(n),da(e.stateNode,e.type,n))}}function Yc(e){mt?gt?gt.push(e):gt=[e]:mt=e}function Xc(){if(mt){var e=mt,n=gt;if(gt=mt=null,fo(e),n)for(e=0;e<n.length;e++)fo(n[e])}}function Zc(e,n){return e(n)}function Jc(){}var _l=!1;function ed(e,n,t){if(_l)return e(n,t);_l=!0;try{return Zc(e,n,t)}finally{_l=!1,(mt!==null||gt!==null)&&(Jc(),Xc())}}function ur(e,n){var t=e.stateNode;if(t===null)return null;var r=tl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(z(231,n,typeof t));return t}var ua=!1;if(hn)try{var It={};Object.defineProperty(It,"passive",{get:function(){ua=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch{ua=!1}function nh(e,n,t,r,l,a,s,o,c){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(f){this.onError(f)}}var Zt=!1,wi=null,bi=!1,pa=null,th={onError:function(e){Zt=!0,wi=e}};function rh(e,n,t,r,l,a,s,o,c){Zt=!1,wi=null,nh.apply(th,arguments)}function ih(e,n,t,r,l,a,s,o,c){if(rh.apply(this,arguments),Zt){if(Zt){var d=wi;Zt=!1,wi=null}else throw Error(z(198));bi||(bi=!0,pa=d)}}function Jn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function nd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function mo(e){if(Jn(e)!==e)throw Error(z(188))}function lh(e){var n=e.alternate;if(!n){if(n=Jn(e),n===null)throw Error(z(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var a=l.alternate;if(a===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===t)return mo(l),e;if(a===r)return mo(l),n;a=a.sibling}throw Error(z(188))}if(t.return!==r.return)t=l,r=a;else{for(var s=!1,o=l.child;o;){if(o===t){s=!0,t=l,r=a;break}if(o===r){s=!0,r=l,t=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===t){s=!0,t=a,r=l;break}if(o===r){s=!0,r=a,t=l;break}o=o.sibling}if(!s)throw Error(z(189))}}if(t.alternate!==r)throw Error(z(190))}if(t.tag!==3)throw Error(z(188));return t.stateNode.current===t?e:n}function td(e){return e=lh(e),e!==null?rd(e):null}function rd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=rd(e);if(n!==null)return n;e=e.sibling}return null}var id=Re.unstable_scheduleCallback,go=Re.unstable_cancelCallback,ah=Re.unstable_shouldYield,sh=Re.unstable_requestPaint,ie=Re.unstable_now,oh=Re.unstable_getCurrentPriorityLevel,as=Re.unstable_ImmediatePriority,ld=Re.unstable_UserBlockingPriority,ji=Re.unstable_NormalPriority,ch=Re.unstable_LowPriority,ad=Re.unstable_IdlePriority,Zi=null,ln=null;function dh(e){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Zi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:hh,uh=Math.log,ph=Math.LN2;function hh(e){return e>>>=0,e===0?32:31-(uh(e)/ph|0)|0}var Ur=64,Vr=4194304;function Kt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ni(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,a=e.pingedLanes,s=t&268435455;if(s!==0){var o=s&~l;o!==0?r=Kt(o):(a&=s,a!==0&&(r=Kt(a)))}else s=t&~l,s!==0?r=Kt(s):a!==0&&(r=Kt(a));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,a=n&-n,l>=a||l===16&&(a&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ze(n),l=1<<t,r|=e[t],n&=~l;return r}function fh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mh(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-Ze(a),o=1<<s,c=l[s];c===-1?(!(o&t)||o&r)&&(l[s]=fh(o,n)):c<=n&&(e.expiredLanes|=o),a&=~o}}function ha(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sd(){var e=Ur;return Ur<<=1,!(Ur&4194240)&&(Ur=64),e}function wl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Tr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ze(n),e[n]=t}function gh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Ze(t),a=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~a}}function ss(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ze(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var Q=0;function od(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var cd,os,dd,ud,pd,fa=!1,Qr=[],Sn=null,Cn=null,zn=null,pr=new Map,hr=new Map,wn=[],xh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xo(e,n){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":pr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(n.pointerId)}}function Rt(e,n,t,r,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:a,targetContainers:[l]},n!==null&&(n=Ar(n),n!==null&&os(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function yh(e,n,t,r,l){switch(n){case"focusin":return Sn=Rt(Sn,e,n,t,r,l),!0;case"dragenter":return Cn=Rt(Cn,e,n,t,r,l),!0;case"mouseover":return zn=Rt(zn,e,n,t,r,l),!0;case"pointerover":var a=l.pointerId;return pr.set(a,Rt(pr.get(a)||null,e,n,t,r,l)),!0;case"gotpointercapture":return a=l.pointerId,hr.set(a,Rt(hr.get(a)||null,e,n,t,r,l)),!0}return!1}function hd(e){var n=Bn(e.target);if(n!==null){var t=Jn(n);if(t!==null){if(n=t.tag,n===13){if(n=nd(t),n!==null){e.blockedOn=n,pd(e.priority,function(){dd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function di(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ma(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ca=r,t.target.dispatchEvent(r),ca=null}else return n=Ar(t),n!==null&&os(n),e.blockedOn=t,!1;n.shift()}return!0}function yo(e,n,t){di(e)&&t.delete(n)}function vh(){fa=!1,Sn!==null&&di(Sn)&&(Sn=null),Cn!==null&&di(Cn)&&(Cn=null),zn!==null&&di(zn)&&(zn=null),pr.forEach(yo),hr.forEach(yo)}function Ft(e,n){e.blockedOn===n&&(e.blockedOn=null,fa||(fa=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,vh)))}function fr(e){function n(l){return Ft(l,e)}if(0<Qr.length){Ft(Qr[0],e);for(var t=1;t<Qr.length;t++){var r=Qr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Sn!==null&&Ft(Sn,e),Cn!==null&&Ft(Cn,e),zn!==null&&Ft(zn,e),pr.forEach(n),hr.forEach(n),t=0;t<wn.length;t++)r=wn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<wn.length&&(t=wn[0],t.blockedOn===null);)hd(t),t.blockedOn===null&&wn.shift()}var xt=xn.ReactCurrentBatchConfig,Si=!0;function kh(e,n,t,r){var l=Q,a=xt.transition;xt.transition=null;try{Q=1,cs(e,n,t,r)}finally{Q=l,xt.transition=a}}function _h(e,n,t,r){var l=Q,a=xt.transition;xt.transition=null;try{Q=4,cs(e,n,t,r)}finally{Q=l,xt.transition=a}}function cs(e,n,t,r){if(Si){var l=ma(e,n,t,r);if(l===null)Ll(e,n,r,Ci,t),xo(e,r);else if(yh(l,e,n,t,r))r.stopPropagation();else if(xo(e,r),n&4&&-1<xh.indexOf(e)){for(;l!==null;){var a=Ar(l);if(a!==null&&cd(a),a=ma(e,n,t,r),a===null&&Ll(e,n,r,Ci,t),a===l)break;l=a}l!==null&&r.stopPropagation()}else Ll(e,n,r,null,t)}}var Ci=null;function ma(e,n,t,r){if(Ci=null,e=ls(r),e=Bn(e),e!==null)if(n=Jn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=nd(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ci=e,null}function fd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oh()){case as:return 1;case ld:return 4;case ji:case ch:return 16;case ad:return 536870912;default:return 16}default:return 16}}var jn=null,ds=null,ui=null;function md(){if(ui)return ui;var e,n=ds,t=n.length,r,l="value"in jn?jn.value:jn.textContent,a=l.length;for(e=0;e<t&&n[e]===l[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===l[a-r];r++);return ui=l.slice(e,1<r?1-r:void 0)}function pi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qr(){return!0}function vo(){return!1}function De(e){function n(t,r,l,a,s){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?qr:vo,this.isPropagationStopped=vo,this}return ee(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),n}var Tt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},us=De(Tt),Pr=ee({},Tt,{view:0,detail:0}),wh=De(Pr),bl,jl,Dt,Ji=ee({},Pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dt&&(Dt&&e.type==="mousemove"?(bl=e.screenX-Dt.screenX,jl=e.screenY-Dt.screenY):jl=bl=0,Dt=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:jl}}),ko=De(Ji),bh=ee({},Ji,{dataTransfer:0}),jh=De(bh),Nh=ee({},Pr,{relatedTarget:0}),Nl=De(Nh),Sh=ee({},Tt,{animationName:0,elapsedTime:0,pseudoElement:0}),Ch=De(Sh),zh=ee({},Tt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Eh=De(zh),Mh=ee({},Tt,{data:0}),_o=De(Mh),$h={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Th={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ph(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Th[e])?!!n[e]:!1}function ps(){return Ph}var Ah=ee({},Pr,{key:function(e){if(e.key){var n=$h[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ps,charCode:function(e){return e.type==="keypress"?pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ih=De(Ah),Rh=ee({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wo=De(Rh),Fh=ee({},Pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ps}),Dh=De(Fh),Oh=ee({},Tt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bh=De(Oh),Hh=ee({},Ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wh=De(Hh),Uh=[9,13,27,32],hs=hn&&"CompositionEvent"in window,Jt=null;hn&&"documentMode"in document&&(Jt=document.documentMode);var Vh=hn&&"TextEvent"in window&&!Jt,gd=hn&&(!hs||Jt&&8<Jt&&11>=Jt),bo=" ",jo=!1;function xd(e,n){switch(e){case"keyup":return Uh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var it=!1;function Qh(e,n){switch(e){case"compositionend":return yd(n);case"keypress":return n.which!==32?null:(jo=!0,bo);case"textInput":return e=n.data,e===bo&&jo?null:e;default:return null}}function qh(e,n){if(it)return e==="compositionend"||!hs&&xd(e,n)?(e=md(),ui=ds=jn=null,it=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gd&&n.locale!=="ko"?null:n.data;default:return null}}var Kh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function No(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Kh[e.type]:n==="textarea"}function vd(e,n,t,r){Yc(r),n=zi(n,"onChange"),0<n.length&&(t=new us("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var er=null,mr=null;function Gh(e){Md(e,0)}function el(e){var n=st(e);if(Wc(n))return e}function Yh(e,n){if(e==="change")return n}var kd=!1;if(hn){var Sl;if(hn){var Cl="oninput"in document;if(!Cl){var So=document.createElement("div");So.setAttribute("oninput","return;"),Cl=typeof So.oninput=="function"}Sl=Cl}else Sl=!1;kd=Sl&&(!document.documentMode||9<document.documentMode)}function Co(){er&&(er.detachEvent("onpropertychange",_d),mr=er=null)}function _d(e){if(e.propertyName==="value"&&el(mr)){var n=[];vd(n,mr,e,ls(e)),ed(Gh,n)}}function Xh(e,n,t){e==="focusin"?(Co(),er=n,mr=t,er.attachEvent("onpropertychange",_d)):e==="focusout"&&Co()}function Zh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(mr)}function Jh(e,n){if(e==="click")return el(n)}function ef(e,n){if(e==="input"||e==="change")return el(n)}function nf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var en=typeof Object.is=="function"?Object.is:nf;function gr(e,n){if(en(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Xl.call(n,l)||!en(e[l],n[l]))return!1}return!0}function zo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eo(e,n){var t=zo(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=zo(t)}}function wd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?wd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function bd(){for(var e=window,n=_i();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=_i(e.document)}return n}function fs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function tf(e){var n=bd(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&wd(t.ownerDocument.documentElement,t)){if(r!==null&&fs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,a=Math.min(r.start,l);r=r.end===void 0?a:Math.min(r.end,l),!e.extend&&a>r&&(l=r,r=a,a=l),l=Eo(t,a);var s=Eo(t,r);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),a>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rf=hn&&"documentMode"in document&&11>=document.documentMode,lt=null,ga=null,nr=null,xa=!1;function Mo(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;xa||lt==null||lt!==_i(r)||(r=lt,"selectionStart"in r&&fs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),nr&&gr(nr,r)||(nr=r,r=zi(ga,"onSelect"),0<r.length&&(n=new us("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=lt)))}function Kr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var at={animationend:Kr("Animation","AnimationEnd"),animationiteration:Kr("Animation","AnimationIteration"),animationstart:Kr("Animation","AnimationStart"),transitionend:Kr("Transition","TransitionEnd")},zl={},jd={};hn&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete at.animationend.animation,delete at.animationiteration.animation,delete at.animationstart.animation),"TransitionEvent"in window||delete at.transitionend.transition);function nl(e){if(zl[e])return zl[e];if(!at[e])return e;var n=at[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in jd)return zl[e]=n[t];return e}var Nd=nl("animationend"),Sd=nl("animationiteration"),Cd=nl("animationstart"),zd=nl("transitionend"),Ed=new Map,$o="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(e,n){Ed.set(e,n),Zn(n,[e])}for(var El=0;El<$o.length;El++){var Ml=$o[El],lf=Ml.toLowerCase(),af=Ml[0].toUpperCase()+Ml.slice(1);In(lf,"on"+af)}In(Nd,"onAnimationEnd");In(Sd,"onAnimationIteration");In(Cd,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(zd,"onTransitionEnd");jt("onMouseEnter",["mouseout","mouseover"]);jt("onMouseLeave",["mouseout","mouseover"]);jt("onPointerEnter",["pointerout","pointerover"]);jt("onPointerLeave",["pointerout","pointerover"]);Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gt));function Lo(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,ih(r,n,void 0,e),e.currentTarget=null}function Md(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var a=void 0;if(n)for(var s=r.length-1;0<=s;s--){var o=r[s],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==a&&l.isPropagationStopped())break e;Lo(l,o,d),a=c}else for(s=0;s<r.length;s++){if(o=r[s],c=o.instance,d=o.currentTarget,o=o.listener,c!==a&&l.isPropagationStopped())break e;Lo(l,o,d),a=c}}}if(bi)throw e=pa,bi=!1,pa=null,e}function K(e,n){var t=n[wa];t===void 0&&(t=n[wa]=new Set);var r=e+"__bubble";t.has(r)||($d(n,e,2,!1),t.add(r))}function $l(e,n,t){var r=0;n&&(r|=4),$d(t,e,r,n)}var Gr="_reactListening"+Math.random().toString(36).slice(2);function xr(e){if(!e[Gr]){e[Gr]=!0,Fc.forEach(function(t){t!=="selectionchange"&&(sf.has(t)||$l(t,!1,e),$l(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gr]||(n[Gr]=!0,$l("selectionchange",!1,n))}}function $d(e,n,t,r){switch(fd(n)){case 1:var l=kh;break;case 4:l=_h;break;default:l=cs}t=l.bind(null,n,t,e),l=void 0,!ua||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Ll(e,n,t,r,l){var a=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var o=r.stateNode.containerInfo;if(o===l||o.nodeType===8&&o.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;s=s.return}for(;o!==null;){if(s=Bn(o),s===null)return;if(c=s.tag,c===5||c===6){r=a=s;continue e}o=o.parentNode}}r=r.return}ed(function(){var d=a,f=ls(t),h=[];e:{var g=Ed.get(e);if(g!==void 0){var _=us,v=e;switch(e){case"keypress":if(pi(t)===0)break e;case"keydown":case"keyup":_=Ih;break;case"focusin":v="focus",_=Nl;break;case"focusout":v="blur",_=Nl;break;case"beforeblur":case"afterblur":_=Nl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=ko;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=jh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Dh;break;case Nd:case Sd:case Cd:_=Ch;break;case zd:_=Bh;break;case"scroll":_=wh;break;case"wheel":_=Wh;break;case"copy":case"cut":case"paste":_=Eh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=wo}var b=(n&4)!==0,j=!b&&e==="scroll",p=b?g!==null?g+"Capture":null:g;b=[];for(var u=d,m;u!==null;){m=u;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,p!==null&&(k=ur(u,p),k!=null&&b.push(yr(u,k,m)))),j)break;u=u.return}0<b.length&&(g=new _(g,v,null,t,f),h.push({event:g,listeners:b}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",g&&t!==ca&&(v=t.relatedTarget||t.fromElement)&&(Bn(v)||v[fn]))break e;if((_||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,_?(v=t.relatedTarget||t.toElement,_=d,v=v?Bn(v):null,v!==null&&(j=Jn(v),v!==j||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=d),_!==v)){if(b=ko,k="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(b=wo,k="onPointerLeave",p="onPointerEnter",u="pointer"),j=_==null?g:st(_),m=v==null?g:st(v),g=new b(k,u+"leave",_,t,f),g.target=j,g.relatedTarget=m,k=null,Bn(f)===d&&(b=new b(p,u+"enter",v,t,f),b.target=m,b.relatedTarget=j,k=b),j=k,_&&v)n:{for(b=_,p=v,u=0,m=b;m;m=nt(m))u++;for(m=0,k=p;k;k=nt(k))m++;for(;0<u-m;)b=nt(b),u--;for(;0<m-u;)p=nt(p),m--;for(;u--;){if(b===p||p!==null&&b===p.alternate)break n;b=nt(b),p=nt(p)}b=null}else b=null;_!==null&&To(h,g,_,b,!1),v!==null&&j!==null&&To(h,j,v,b,!0)}}e:{if(g=d?st(d):window,_=g.nodeName&&g.nodeName.toLowerCase(),_==="select"||_==="input"&&g.type==="file")var N=Yh;else if(No(g))if(kd)N=ef;else{N=Zh;var y=Xh}else(_=g.nodeName)&&_.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(N=Jh);if(N&&(N=N(e,d))){vd(h,N,t,f);break e}y&&y(e,g,d),e==="focusout"&&(y=g._wrapperState)&&y.controlled&&g.type==="number"&&ia(g,"number",g.value)}switch(y=d?st(d):window,e){case"focusin":(No(y)||y.contentEditable==="true")&&(lt=y,ga=d,nr=null);break;case"focusout":nr=ga=lt=null;break;case"mousedown":xa=!0;break;case"contextmenu":case"mouseup":case"dragend":xa=!1,Mo(h,t,f);break;case"selectionchange":if(rf)break;case"keydown":case"keyup":Mo(h,t,f)}var C;if(hs)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else it?xd(e,t)&&($="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&($="onCompositionStart");$&&(gd&&t.locale!=="ko"&&(it||$!=="onCompositionStart"?$==="onCompositionEnd"&&it&&(C=md()):(jn=f,ds="value"in jn?jn.value:jn.textContent,it=!0)),y=zi(d,$),0<y.length&&($=new _o($,e,null,t,f),h.push({event:$,listeners:y}),C?$.data=C:(C=yd(t),C!==null&&($.data=C)))),(C=Vh?Qh(e,t):qh(e,t))&&(d=zi(d,"onBeforeInput"),0<d.length&&(f=new _o("onBeforeInput","beforeinput",null,t,f),h.push({event:f,listeners:d}),f.data=C))}Md(h,n)})}function yr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function zi(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=ur(e,t),a!=null&&r.unshift(yr(e,a,l)),a=ur(e,n),a!=null&&r.push(yr(e,a,l))),e=e.return}return r}function nt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function To(e,n,t,r,l){for(var a=n._reactName,s=[];t!==null&&t!==r;){var o=t,c=o.alternate,d=o.stateNode;if(c!==null&&c===r)break;o.tag===5&&d!==null&&(o=d,l?(c=ur(t,a),c!=null&&s.unshift(yr(t,c,o))):l||(c=ur(t,a),c!=null&&s.push(yr(t,c,o)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var of=/\r\n?/g,cf=/\u0000|\uFFFD/g;function Po(e){return(typeof e=="string"?e:""+e).replace(of,`
`).replace(cf,"")}function Yr(e,n,t){if(n=Po(n),Po(e)!==n&&t)throw Error(z(425))}function Ei(){}var ya=null,va=null;function ka(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var _a=typeof setTimeout=="function"?setTimeout:void 0,df=typeof clearTimeout=="function"?clearTimeout:void 0,Ao=typeof Promise=="function"?Promise:void 0,uf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ao<"u"?function(e){return Ao.resolve(null).then(e).catch(pf)}:_a;function pf(e){setTimeout(function(){throw e})}function Tl(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),fr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);fr(n)}function En(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Io(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Pt=Math.random().toString(36).slice(2),rn="__reactFiber$"+Pt,vr="__reactProps$"+Pt,fn="__reactContainer$"+Pt,wa="__reactEvents$"+Pt,hf="__reactListeners$"+Pt,ff="__reactHandles$"+Pt;function Bn(e){var n=e[rn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[fn]||t[rn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Io(e);e!==null;){if(t=e[rn])return t;e=Io(e)}return n}e=t,t=e.parentNode}return null}function Ar(e){return e=e[rn]||e[fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function st(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function tl(e){return e[vr]||null}var ba=[],ot=-1;function Rn(e){return{current:e}}function G(e){0>ot||(e.current=ba[ot],ba[ot]=null,ot--)}function q(e,n){ot++,ba[ot]=e.current,e.current=n}var An={},we=Rn(An),Me=Rn(!1),Qn=An;function Nt(e,n){var t=e.type.contextTypes;if(!t)return An;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in t)l[a]=n[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function $e(e){return e=e.childContextTypes,e!=null}function Mi(){G(Me),G(we)}function Ro(e,n,t){if(we.current!==An)throw Error(z(168));q(we,n),q(Me,t)}function Ld(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(z(108,Xp(e)||"Unknown",l));return ee({},t,r)}function $i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||An,Qn=we.current,q(we,e),q(Me,Me.current),!0}function Fo(e,n,t){var r=e.stateNode;if(!r)throw Error(z(169));t?(e=Ld(e,n,Qn),r.__reactInternalMemoizedMergedChildContext=e,G(Me),G(we),q(we,e)):G(Me),q(Me,t)}var cn=null,rl=!1,Pl=!1;function Td(e){cn===null?cn=[e]:cn.push(e)}function mf(e){rl=!0,Td(e)}function Fn(){if(!Pl&&cn!==null){Pl=!0;var e=0,n=Q;try{var t=cn;for(Q=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}cn=null,rl=!1}catch(l){throw cn!==null&&(cn=cn.slice(e+1)),id(as,Fn),l}finally{Q=n,Pl=!1}}return null}var ct=[],dt=0,Li=null,Ti=0,Be=[],He=0,qn=null,dn=1,un="";function Dn(e,n){ct[dt++]=Ti,ct[dt++]=Li,Li=e,Ti=n}function Pd(e,n,t){Be[He++]=dn,Be[He++]=un,Be[He++]=qn,qn=e;var r=dn;e=un;var l=32-Ze(r)-1;r&=~(1<<l),t+=1;var a=32-Ze(n)+l;if(30<a){var s=l-l%5;a=(r&(1<<s)-1).toString(32),r>>=s,l-=s,dn=1<<32-Ze(n)+l|t<<l|r,un=a+e}else dn=1<<a|t<<l|r,un=e}function ms(e){e.return!==null&&(Dn(e,1),Pd(e,1,0))}function gs(e){for(;e===Li;)Li=ct[--dt],ct[dt]=null,Ti=ct[--dt],ct[dt]=null;for(;e===qn;)qn=Be[--He],Be[He]=null,un=Be[--He],Be[He]=null,dn=Be[--He],Be[He]=null}var Ae=null,Pe=null,Y=!1,Xe=null;function Ad(e,n){var t=We(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Do(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ae=e,Pe=En(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ae=e,Pe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=qn!==null?{id:dn,overflow:un}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=We(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ae=e,Pe=null,!0):!1;default:return!1}}function ja(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Na(e){if(Y){var n=Pe;if(n){var t=n;if(!Do(e,n)){if(ja(e))throw Error(z(418));n=En(t.nextSibling);var r=Ae;n&&Do(e,n)?Ad(r,t):(e.flags=e.flags&-4097|2,Y=!1,Ae=e)}}else{if(ja(e))throw Error(z(418));e.flags=e.flags&-4097|2,Y=!1,Ae=e}}}function Oo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function Xr(e){if(e!==Ae)return!1;if(!Y)return Oo(e),Y=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ka(e.type,e.memoizedProps)),n&&(n=Pe)){if(ja(e))throw Id(),Error(z(418));for(;n;)Ad(e,n),n=En(n.nextSibling)}if(Oo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Pe=En(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Pe=null}}else Pe=Ae?En(e.stateNode.nextSibling):null;return!0}function Id(){for(var e=Pe;e;)e=En(e.nextSibling)}function St(){Pe=Ae=null,Y=!1}function xs(e){Xe===null?Xe=[e]:Xe.push(e)}var gf=xn.ReactCurrentBatchConfig;function Ot(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(z(309));var r=t.stateNode}if(!r)throw Error(z(147,e));var l=r,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(s){var o=l.refs;s===null?delete o[a]:o[a]=s},n._stringRef=a,n)}if(typeof e!="string")throw Error(z(284));if(!t._owner)throw Error(z(290,e))}return e}function Zr(e,n){throw e=Object.prototype.toString.call(n),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Bo(e){var n=e._init;return n(e._payload)}function Rd(e){function n(p,u){if(e){var m=p.deletions;m===null?(p.deletions=[u],p.flags|=16):m.push(u)}}function t(p,u){if(!e)return null;for(;u!==null;)n(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function l(p,u){return p=Tn(p,u),p.index=0,p.sibling=null,p}function a(p,u,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<u?(p.flags|=2,u):m):(p.flags|=2,u)):(p.flags|=1048576,u)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,u,m,k){return u===null||u.tag!==6?(u=Bl(m,p.mode,k),u.return=p,u):(u=l(u,m),u.return=p,u)}function c(p,u,m,k){var N=m.type;return N===rt?f(p,u,m.props.children,k,m.key):u!==null&&(u.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===kn&&Bo(N)===u.type)?(k=l(u,m.props),k.ref=Ot(p,u,m),k.return=p,k):(k=vi(m.type,m.key,m.props,null,p.mode,k),k.ref=Ot(p,u,m),k.return=p,k)}function d(p,u,m,k){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=Hl(m,p.mode,k),u.return=p,u):(u=l(u,m.children||[]),u.return=p,u)}function f(p,u,m,k,N){return u===null||u.tag!==7?(u=Vn(m,p.mode,k,N),u.return=p,u):(u=l(u,m),u.return=p,u)}function h(p,u,m){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Bl(""+u,p.mode,m),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Br:return m=vi(u.type,u.key,u.props,null,p.mode,m),m.ref=Ot(p,null,u),m.return=p,m;case tt:return u=Hl(u,p.mode,m),u.return=p,u;case kn:var k=u._init;return h(p,k(u._payload),m)}if(qt(u)||At(u))return u=Vn(u,p.mode,m,null),u.return=p,u;Zr(p,u)}return null}function g(p,u,m,k){var N=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return N!==null?null:o(p,u,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Br:return m.key===N?c(p,u,m,k):null;case tt:return m.key===N?d(p,u,m,k):null;case kn:return N=m._init,g(p,u,N(m._payload),k)}if(qt(m)||At(m))return N!==null?null:f(p,u,m,k,null);Zr(p,m)}return null}function _(p,u,m,k,N){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(m)||null,o(u,p,""+k,N);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Br:return p=p.get(k.key===null?m:k.key)||null,c(u,p,k,N);case tt:return p=p.get(k.key===null?m:k.key)||null,d(u,p,k,N);case kn:var y=k._init;return _(p,u,m,y(k._payload),N)}if(qt(k)||At(k))return p=p.get(m)||null,f(u,p,k,N,null);Zr(u,k)}return null}function v(p,u,m,k){for(var N=null,y=null,C=u,$=u=0,S=null;C!==null&&$<m.length;$++){C.index>$?(S=C,C=null):S=C.sibling;var E=g(p,C,m[$],k);if(E===null){C===null&&(C=S);break}e&&C&&E.alternate===null&&n(p,C),u=a(E,u,$),y===null?N=E:y.sibling=E,y=E,C=S}if($===m.length)return t(p,C),Y&&Dn(p,$),N;if(C===null){for(;$<m.length;$++)C=h(p,m[$],k),C!==null&&(u=a(C,u,$),y===null?N=C:y.sibling=C,y=C);return Y&&Dn(p,$),N}for(C=r(p,C);$<m.length;$++)S=_(C,p,$,m[$],k),S!==null&&(e&&S.alternate!==null&&C.delete(S.key===null?$:S.key),u=a(S,u,$),y===null?N=S:y.sibling=S,y=S);return e&&C.forEach(function(P){return n(p,P)}),Y&&Dn(p,$),N}function b(p,u,m,k){var N=At(m);if(typeof N!="function")throw Error(z(150));if(m=N.call(m),m==null)throw Error(z(151));for(var y=N=null,C=u,$=u=0,S=null,E=m.next();C!==null&&!E.done;$++,E=m.next()){C.index>$?(S=C,C=null):S=C.sibling;var P=g(p,C,E.value,k);if(P===null){C===null&&(C=S);break}e&&C&&P.alternate===null&&n(p,C),u=a(P,u,$),y===null?N=P:y.sibling=P,y=P,C=S}if(E.done)return t(p,C),Y&&Dn(p,$),N;if(C===null){for(;!E.done;$++,E=m.next())E=h(p,E.value,k),E!==null&&(u=a(E,u,$),y===null?N=E:y.sibling=E,y=E);return Y&&Dn(p,$),N}for(C=r(p,C);!E.done;$++,E=m.next())E=_(C,p,$,E.value,k),E!==null&&(e&&E.alternate!==null&&C.delete(E.key===null?$:E.key),u=a(E,u,$),y===null?N=E:y.sibling=E,y=E);return e&&C.forEach(function(H){return n(p,H)}),Y&&Dn(p,$),N}function j(p,u,m,k){if(typeof m=="object"&&m!==null&&m.type===rt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Br:e:{for(var N=m.key,y=u;y!==null;){if(y.key===N){if(N=m.type,N===rt){if(y.tag===7){t(p,y.sibling),u=l(y,m.props.children),u.return=p,p=u;break e}}else if(y.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===kn&&Bo(N)===y.type){t(p,y.sibling),u=l(y,m.props),u.ref=Ot(p,y,m),u.return=p,p=u;break e}t(p,y);break}else n(p,y);y=y.sibling}m.type===rt?(u=Vn(m.props.children,p.mode,k,m.key),u.return=p,p=u):(k=vi(m.type,m.key,m.props,null,p.mode,k),k.ref=Ot(p,u,m),k.return=p,p=k)}return s(p);case tt:e:{for(y=m.key;u!==null;){if(u.key===y)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){t(p,u.sibling),u=l(u,m.children||[]),u.return=p,p=u;break e}else{t(p,u);break}else n(p,u);u=u.sibling}u=Hl(m,p.mode,k),u.return=p,p=u}return s(p);case kn:return y=m._init,j(p,u,y(m._payload),k)}if(qt(m))return v(p,u,m,k);if(At(m))return b(p,u,m,k);Zr(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,u!==null&&u.tag===6?(t(p,u.sibling),u=l(u,m),u.return=p,p=u):(t(p,u),u=Bl(m,p.mode,k),u.return=p,p=u),s(p)):t(p,u)}return j}var Ct=Rd(!0),Fd=Rd(!1),Pi=Rn(null),Ai=null,ut=null,ys=null;function vs(){ys=ut=Ai=null}function ks(e){var n=Pi.current;G(Pi),e._currentValue=n}function Sa(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function yt(e,n){Ai=e,ys=ut=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ee=!0),e.firstContext=null)}function Ve(e){var n=e._currentValue;if(ys!==e)if(e={context:e,memoizedValue:n,next:null},ut===null){if(Ai===null)throw Error(z(308));ut=e,Ai.dependencies={lanes:0,firstContext:e}}else ut=ut.next=e;return n}var Hn=null;function _s(e){Hn===null?Hn=[e]:Hn.push(e)}function Dd(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,_s(n)):(t.next=l.next,l.next=t),n.interleaved=t,mn(e,r)}function mn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var _n=!1;function ws(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Od(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Mn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,mn(e,t)}return l=r.interleaved,l===null?(n.next=n,_s(r)):(n.next=l.next,l.next=n),r.interleaved=n,mn(e,t)}function hi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ss(e,t)}}function Ho(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?l=a=s:a=a.next=s,t=t.next}while(t!==null);a===null?l=a=n:a=a.next=n}else l=a=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ii(e,n,t,r){var l=e.updateQueue;_n=!1;var a=l.firstBaseUpdate,s=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var c=o,d=c.next;c.next=null,s===null?a=d:s.next=d,s=c;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==s&&(o===null?f.firstBaseUpdate=d:o.next=d,f.lastBaseUpdate=c))}if(a!==null){var h=l.baseState;s=0,f=d=c=null,o=a;do{var g=o.lane,_=o.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:_,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=e,b=o;switch(g=n,_=t,b.tag){case 1:if(v=b.payload,typeof v=="function"){h=v.call(_,h,g);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,g=typeof v=="function"?v.call(_,h,g):v,g==null)break e;h=ee({},h,g);break e;case 2:_n=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[o]:g.push(o))}else _={eventTime:_,lane:g,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(d=f=_,c=h):f=f.next=_,s|=g;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;g=o,o=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(f===null&&(c=h),l.baseState=c,l.firstBaseUpdate=d,l.lastBaseUpdate=f,n=l.shared.interleaved,n!==null){l=n;do s|=l.lane,l=l.next;while(l!==n)}else a===null&&(l.shared.lanes=0);Gn|=s,e.lanes=s,e.memoizedState=h}}function Wo(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(z(191,l));l.call(r)}}}var Ir={},an=Rn(Ir),kr=Rn(Ir),_r=Rn(Ir);function Wn(e){if(e===Ir)throw Error(z(174));return e}function bs(e,n){switch(q(_r,n),q(kr,e),q(an,Ir),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:aa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=aa(n,e)}G(an),q(an,n)}function zt(){G(an),G(kr),G(_r)}function Bd(e){Wn(_r.current);var n=Wn(an.current),t=aa(n,e.type);n!==t&&(q(kr,e),q(an,t))}function js(e){kr.current===e&&(G(an),G(kr))}var Z=Rn(0);function Ri(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Al=[];function Ns(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var fi=xn.ReactCurrentDispatcher,Il=xn.ReactCurrentBatchConfig,Kn=0,J=null,oe=null,ue=null,Fi=!1,tr=!1,wr=0,xf=0;function ye(){throw Error(z(321))}function Ss(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!en(e[t],n[t]))return!1;return!0}function Cs(e,n,t,r,l,a){if(Kn=a,J=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,fi.current=e===null||e.memoizedState===null?_f:wf,e=t(r,l),tr){a=0;do{if(tr=!1,wr=0,25<=a)throw Error(z(301));a+=1,ue=oe=null,n.updateQueue=null,fi.current=bf,e=t(r,l)}while(tr)}if(fi.current=Di,n=oe!==null&&oe.next!==null,Kn=0,ue=oe=J=null,Fi=!1,n)throw Error(z(300));return e}function zs(){var e=wr!==0;return wr=0,e}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?J.memoizedState=ue=e:ue=ue.next=e,ue}function Qe(){if(oe===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var n=ue===null?J.memoizedState:ue.next;if(n!==null)ue=n,oe=e;else{if(e===null)throw Error(z(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?J.memoizedState=ue=e:ue=ue.next=e}return ue}function br(e,n){return typeof n=="function"?n(e):n}function Rl(e){var n=Qe(),t=n.queue;if(t===null)throw Error(z(311));t.lastRenderedReducer=e;var r=oe,l=r.baseQueue,a=t.pending;if(a!==null){if(l!==null){var s=l.next;l.next=a.next,a.next=s}r.baseQueue=l=a,t.pending=null}if(l!==null){a=l.next,r=r.baseState;var o=s=null,c=null,d=a;do{var f=d.lane;if((Kn&f)===f)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(o=c=h,s=r):c=c.next=h,J.lanes|=f,Gn|=f}d=d.next}while(d!==null&&d!==a);c===null?s=r:c.next=o,en(r,n.memoizedState)||(Ee=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=c,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do a=l.lane,J.lanes|=a,Gn|=a,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Fl(e){var n=Qe(),t=n.queue;if(t===null)throw Error(z(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,a=n.memoizedState;if(l!==null){t.pending=null;var s=l=l.next;do a=e(a,s.action),s=s.next;while(s!==l);en(a,n.memoizedState)||(Ee=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,r]}function Hd(){}function Wd(e,n){var t=J,r=Qe(),l=n(),a=!en(r.memoizedState,l);if(a&&(r.memoizedState=l,Ee=!0),r=r.queue,Es(Qd.bind(null,t,r,e),[e]),r.getSnapshot!==n||a||ue!==null&&ue.memoizedState.tag&1){if(t.flags|=2048,jr(9,Vd.bind(null,t,r,l,n),void 0,null),pe===null)throw Error(z(349));Kn&30||Ud(t,n,l)}return l}function Ud(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=J.updateQueue,n===null?(n={lastEffect:null,stores:null},J.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Vd(e,n,t,r){n.value=t,n.getSnapshot=r,qd(n)&&Kd(e)}function Qd(e,n,t){return t(function(){qd(n)&&Kd(e)})}function qd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!en(e,t)}catch{return!0}}function Kd(e){var n=mn(e,1);n!==null&&Je(n,e,1,-1)}function Uo(e){var n=tn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},n.queue=e,e=e.dispatch=kf.bind(null,J,e),[n.memoizedState,e]}function jr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=J.updateQueue,n===null?(n={lastEffect:null,stores:null},J.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Gd(){return Qe().memoizedState}function mi(e,n,t,r){var l=tn();J.flags|=e,l.memoizedState=jr(1|n,t,void 0,r===void 0?null:r)}function il(e,n,t,r){var l=Qe();r=r===void 0?null:r;var a=void 0;if(oe!==null){var s=oe.memoizedState;if(a=s.destroy,r!==null&&Ss(r,s.deps)){l.memoizedState=jr(n,t,a,r);return}}J.flags|=e,l.memoizedState=jr(1|n,t,a,r)}function Vo(e,n){return mi(8390656,8,e,n)}function Es(e,n){return il(2048,8,e,n)}function Yd(e,n){return il(4,2,e,n)}function Xd(e,n){return il(4,4,e,n)}function Zd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Jd(e,n,t){return t=t!=null?t.concat([e]):null,il(4,4,Zd.bind(null,n,e),t)}function Ms(){}function eu(e,n){var t=Qe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ss(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function nu(e,n){var t=Qe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ss(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function tu(e,n,t){return Kn&21?(en(t,n)||(t=sd(),J.lanes|=t,Gn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=t)}function yf(e,n){var t=Q;Q=t!==0&&4>t?t:4,e(!0);var r=Il.transition;Il.transition={};try{e(!1),n()}finally{Q=t,Il.transition=r}}function ru(){return Qe().memoizedState}function vf(e,n,t){var r=Ln(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},iu(e))lu(n,t);else if(t=Dd(e,n,t,r),t!==null){var l=Ne();Je(t,e,r,l),au(t,n,r)}}function kf(e,n,t){var r=Ln(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(iu(e))lu(n,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var s=n.lastRenderedState,o=a(s,t);if(l.hasEagerState=!0,l.eagerState=o,en(o,s)){var c=n.interleaved;c===null?(l.next=l,_s(n)):(l.next=c.next,c.next=l),n.interleaved=l;return}}catch{}finally{}t=Dd(e,n,l,r),t!==null&&(l=Ne(),Je(t,e,r,l),au(t,n,r))}}function iu(e){var n=e.alternate;return e===J||n!==null&&n===J}function lu(e,n){tr=Fi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function au(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ss(e,t)}}var Di={readContext:Ve,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},_f={readContext:Ve,useCallback:function(e,n){return tn().memoizedState=[e,n===void 0?null:n],e},useContext:Ve,useEffect:Vo,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,mi(4194308,4,Zd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return mi(4194308,4,e,n)},useInsertionEffect:function(e,n){return mi(4,2,e,n)},useMemo:function(e,n){var t=tn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=tn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=vf.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var n=tn();return e={current:e},n.memoizedState=e},useState:Uo,useDebugValue:Ms,useDeferredValue:function(e){return tn().memoizedState=e},useTransition:function(){var e=Uo(!1),n=e[0];return e=yf.bind(null,e[1]),tn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=J,l=tn();if(Y){if(t===void 0)throw Error(z(407));t=t()}else{if(t=n(),pe===null)throw Error(z(349));Kn&30||Ud(r,n,t)}l.memoizedState=t;var a={value:t,getSnapshot:n};return l.queue=a,Vo(Qd.bind(null,r,a,e),[e]),r.flags|=2048,jr(9,Vd.bind(null,r,a,t,n),void 0,null),t},useId:function(){var e=tn(),n=pe.identifierPrefix;if(Y){var t=un,r=dn;t=(r&~(1<<32-Ze(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=wr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=xf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},wf={readContext:Ve,useCallback:eu,useContext:Ve,useEffect:Es,useImperativeHandle:Jd,useInsertionEffect:Yd,useLayoutEffect:Xd,useMemo:nu,useReducer:Rl,useRef:Gd,useState:function(){return Rl(br)},useDebugValue:Ms,useDeferredValue:function(e){var n=Qe();return tu(n,oe.memoizedState,e)},useTransition:function(){var e=Rl(br)[0],n=Qe().memoizedState;return[e,n]},useMutableSource:Hd,useSyncExternalStore:Wd,useId:ru,unstable_isNewReconciler:!1},bf={readContext:Ve,useCallback:eu,useContext:Ve,useEffect:Es,useImperativeHandle:Jd,useInsertionEffect:Yd,useLayoutEffect:Xd,useMemo:nu,useReducer:Fl,useRef:Gd,useState:function(){return Fl(br)},useDebugValue:Ms,useDeferredValue:function(e){var n=Qe();return oe===null?n.memoizedState=e:tu(n,oe.memoizedState,e)},useTransition:function(){var e=Fl(br)[0],n=Qe().memoizedState;return[e,n]},useMutableSource:Hd,useSyncExternalStore:Wd,useId:ru,unstable_isNewReconciler:!1};function Ge(e,n){if(e&&e.defaultProps){n=ee({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ca(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ee({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ll={isMounted:function(e){return(e=e._reactInternals)?Jn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ne(),l=Ln(e),a=pn(r,l);a.payload=n,t!=null&&(a.callback=t),n=Mn(e,a,l),n!==null&&(Je(n,e,l,r),hi(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ne(),l=Ln(e),a=pn(r,l);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=Mn(e,a,l),n!==null&&(Je(n,e,l,r),hi(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ne(),r=Ln(e),l=pn(t,r);l.tag=2,n!=null&&(l.callback=n),n=Mn(e,l,r),n!==null&&(Je(n,e,r,t),hi(n,e,r))}};function Qo(e,n,t,r,l,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):n.prototype&&n.prototype.isPureReactComponent?!gr(t,r)||!gr(l,a):!0}function su(e,n,t){var r=!1,l=An,a=n.contextType;return typeof a=="object"&&a!==null?a=Ve(a):(l=$e(n)?Qn:we.current,r=n.contextTypes,a=(r=r!=null)?Nt(e,l):An),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ll,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),n}function qo(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ll.enqueueReplaceState(n,n.state,null)}function za(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},ws(e);var a=n.contextType;typeof a=="object"&&a!==null?l.context=Ve(a):(a=$e(n)?Qn:we.current,l.context=Nt(e,a)),l.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Ca(e,n,a,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&ll.enqueueReplaceState(l,l.state,null),Ii(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Et(e,n){try{var t="",r=n;do t+=Yp(r),r=r.return;while(r);var l=t}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:l,digest:null}}function Dl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ea(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var jf=typeof WeakMap=="function"?WeakMap:Map;function ou(e,n,t){t=pn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Bi||(Bi=!0,Da=r),Ea(e,n)},t}function cu(e,n,t){t=pn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Ea(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){Ea(e,n),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function Ko(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new jf;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Ff.bind(null,e,n,t),n.then(e,e))}function Go(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Yo(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=pn(-1,1),n.tag=2,Mn(t,n,1))),t.lanes|=1),e)}var Nf=xn.ReactCurrentOwner,Ee=!1;function je(e,n,t,r){n.child=e===null?Fd(n,null,t,r):Ct(n,e.child,t,r)}function Xo(e,n,t,r,l){t=t.render;var a=n.ref;return yt(n,l),r=Cs(e,n,t,r,a,l),t=zs(),e!==null&&!Ee?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,gn(e,n,l)):(Y&&t&&ms(n),n.flags|=1,je(e,n,r,l),n.child)}function Zo(e,n,t,r,l){if(e===null){var a=t.type;return typeof a=="function"&&!Fs(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,du(e,n,a,r,l)):(e=vi(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&l)){var s=a.memoizedProps;if(t=t.compare,t=t!==null?t:gr,t(s,r)&&e.ref===n.ref)return gn(e,n,l)}return n.flags|=1,e=Tn(a,r),e.ref=n.ref,e.return=n,n.child=e}function du(e,n,t,r,l){if(e!==null){var a=e.memoizedProps;if(gr(a,r)&&e.ref===n.ref)if(Ee=!1,n.pendingProps=r=a,(e.lanes&l)!==0)e.flags&131072&&(Ee=!0);else return n.lanes=e.lanes,gn(e,n,l)}return Ma(e,n,t,r,l)}function uu(e,n,t){var r=n.pendingProps,l=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(ht,Te),Te|=t;else{if(!(t&1073741824))return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,q(ht,Te),Te|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:t,q(ht,Te),Te|=r}else a!==null?(r=a.baseLanes|t,n.memoizedState=null):r=t,q(ht,Te),Te|=r;return je(e,n,l,t),n.child}function pu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ma(e,n,t,r,l){var a=$e(t)?Qn:we.current;return a=Nt(n,a),yt(n,l),t=Cs(e,n,t,r,a,l),r=zs(),e!==null&&!Ee?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,gn(e,n,l)):(Y&&r&&ms(n),n.flags|=1,je(e,n,t,l),n.child)}function Jo(e,n,t,r,l){if($e(t)){var a=!0;$i(n)}else a=!1;if(yt(n,l),n.stateNode===null)gi(e,n),su(n,t,r),za(n,t,r,l),r=!0;else if(e===null){var s=n.stateNode,o=n.memoizedProps;s.props=o;var c=s.context,d=t.contextType;typeof d=="object"&&d!==null?d=Ve(d):(d=$e(t)?Qn:we.current,d=Nt(n,d));var f=t.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==r||c!==d)&&qo(n,s,r,d),_n=!1;var g=n.memoizedState;s.state=g,Ii(n,r,s,l),c=n.memoizedState,o!==r||g!==c||Me.current||_n?(typeof f=="function"&&(Ca(n,t,f,r),c=n.memoizedState),(o=_n||Qo(n,t,o,r,g,c,d))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=c),s.props=r,s.state=c,s.context=d,r=o):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,Od(e,n),o=n.memoizedProps,d=n.type===n.elementType?o:Ge(n.type,o),s.props=d,h=n.pendingProps,g=s.context,c=t.contextType,typeof c=="object"&&c!==null?c=Ve(c):(c=$e(t)?Qn:we.current,c=Nt(n,c));var _=t.getDerivedStateFromProps;(f=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==h||g!==c)&&qo(n,s,r,c),_n=!1,g=n.memoizedState,s.state=g,Ii(n,r,s,l);var v=n.memoizedState;o!==h||g!==v||Me.current||_n?(typeof _=="function"&&(Ca(n,t,_,r),v=n.memoizedState),(d=_n||Qo(n,t,d,r,g,v,c)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,c)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),s.props=r,s.state=v,s.context=c,r=d):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return $a(e,n,t,r,a,l)}function $a(e,n,t,r,l,a){pu(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return l&&Fo(n,t,!1),gn(e,n,a);r=n.stateNode,Nf.current=n;var o=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=Ct(n,e.child,null,a),n.child=Ct(n,null,o,a)):je(e,n,o,a),n.memoizedState=r.state,l&&Fo(n,t,!0),n.child}function hu(e){var n=e.stateNode;n.pendingContext?Ro(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ro(e,n.context,!1),bs(e,n.containerInfo)}function ec(e,n,t,r,l){return St(),xs(l),n.flags|=256,je(e,n,t,r),n.child}var La={dehydrated:null,treeContext:null,retryLane:0};function Ta(e){return{baseLanes:e,cachePool:null,transitions:null}}function fu(e,n,t){var r=n.pendingProps,l=Z.current,a=!1,s=(n.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(l&2)!==0),o?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),q(Z,l&1),e===null)return Na(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=r.children,e=r.fallback,a?(r=n.mode,a=n.child,s={mode:"hidden",children:s},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=ol(s,r,0,null),e=Vn(e,r,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=Ta(t),n.memoizedState=La,e):$s(n,s));if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null))return Sf(e,n,s,r,o,l,t);if(a){a=r.fallback,s=n.mode,l=e.child,o=l.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=c,n.deletions=null):(r=Tn(l,c),r.subtreeFlags=l.subtreeFlags&14680064),o!==null?a=Tn(o,a):(a=Vn(a,s,t,null),a.flags|=2),a.return=n,r.return=n,r.sibling=a,n.child=r,r=a,a=n.child,s=e.child.memoizedState,s=s===null?Ta(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~t,n.memoizedState=La,r}return a=e.child,e=a.sibling,r=Tn(a,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function $s(e,n){return n=ol({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Jr(e,n,t,r){return r!==null&&xs(r),Ct(n,e.child,null,t),e=$s(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Sf(e,n,t,r,l,a,s){if(t)return n.flags&256?(n.flags&=-257,r=Dl(Error(z(422))),Jr(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=r.fallback,l=n.mode,r=ol({mode:"visible",children:r.children},l,0,null),a=Vn(a,l,s,null),a.flags|=2,r.return=n,a.return=n,r.sibling=a,n.child=r,n.mode&1&&Ct(n,e.child,null,s),n.child.memoizedState=Ta(s),n.memoizedState=La,a);if(!(n.mode&1))return Jr(e,n,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var o=r.dgst;return r=o,a=Error(z(419)),r=Dl(a,r,void 0),Jr(e,n,s,r)}if(o=(s&e.childLanes)!==0,Ee||o){if(r=pe,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|s)?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,mn(e,l),Je(r,e,l,-1))}return Rs(),r=Dl(Error(z(421))),Jr(e,n,s,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Df.bind(null,e),l._reactRetry=n,null):(e=a.treeContext,Pe=En(l.nextSibling),Ae=n,Y=!0,Xe=null,e!==null&&(Be[He++]=dn,Be[He++]=un,Be[He++]=qn,dn=e.id,un=e.overflow,qn=n),n=$s(n,r.children),n.flags|=4096,n)}function nc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Sa(e.return,n,t)}function Ol(e,n,t,r,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=t,a.tailMode=l)}function mu(e,n,t){var r=n.pendingProps,l=r.revealOrder,a=r.tail;if(je(e,n,r.children,t),r=Z.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nc(e,t,n);else if(e.tag===19)nc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(Z,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Ri(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Ol(n,!1,l,t,a);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Ri(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Ol(n,!0,t,null,a);break;case"together":Ol(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function gi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function gn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Gn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(z(153));if(n.child!==null){for(e=n.child,t=Tn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Tn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Cf(e,n,t){switch(n.tag){case 3:hu(n),St();break;case 5:Bd(n);break;case 1:$e(n.type)&&$i(n);break;case 4:bs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;q(Pi,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(q(Z,Z.current&1),n.flags|=128,null):t&n.child.childLanes?fu(e,n,t):(q(Z,Z.current&1),e=gn(e,n,t),e!==null?e.sibling:null);q(Z,Z.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return mu(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),q(Z,Z.current),r)break;return null;case 22:case 23:return n.lanes=0,uu(e,n,t)}return gn(e,n,t)}var gu,Pa,xu,yu;gu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Pa=function(){};xu=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Wn(an.current);var a=null;switch(t){case"input":l=ta(e,l),r=ta(e,r),a=[];break;case"select":l=ee({},l,{value:void 0}),r=ee({},r,{value:void 0}),a=[];break;case"textarea":l=la(e,l),r=la(e,r),a=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ei)}sa(t,r);var s;t=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var o=l[d];for(s in o)o.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(cr.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var c=r[d];if(o=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&c!==o&&(c!=null||o!=null))if(d==="style")if(o){for(s in o)!o.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in c)c.hasOwnProperty(s)&&o[s]!==c[s]&&(t||(t={}),t[s]=c[s])}else t||(a||(a=[]),a.push(d,t)),t=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(cr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&K("scroll",e),a||o===c||(a=[])):(a=a||[]).push(d,c))}t&&(a=a||[]).push("style",t);var d=a;(n.updateQueue=d)&&(n.flags|=4)}};yu=function(e,n,t,r){t!==r&&(n.flags|=4)};function Bt(e,n){if(!Y)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function zf(e,n,t){var r=n.pendingProps;switch(gs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(n),null;case 1:return $e(n.type)&&Mi(),ve(n),null;case 3:return r=n.stateNode,zt(),G(Me),G(we),Ns(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Xe!==null&&(Ha(Xe),Xe=null))),Pa(e,n),ve(n),null;case 5:js(n);var l=Wn(_r.current);if(t=n.type,e!==null&&n.stateNode!=null)xu(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(z(166));return ve(n),null}if(e=Wn(an.current),Xr(n)){r=n.stateNode,t=n.type;var a=n.memoizedProps;switch(r[rn]=n,r[vr]=a,e=(n.mode&1)!==0,t){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(l=0;l<Gt.length;l++)K(Gt[l],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":co(r,a),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},K("invalid",r);break;case"textarea":po(r,a),K("invalid",r)}sa(t,a),l=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?r.textContent!==o&&(a.suppressHydrationWarning!==!0&&Yr(r.textContent,o,e),l=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&Yr(r.textContent,o,e),l=["children",""+o]):cr.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&K("scroll",r)}switch(t){case"input":Hr(r),uo(r,a,!0);break;case"textarea":Hr(r),ho(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ei)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[rn]=n,e[vr]=r,gu(e,n,!1,!1),n.stateNode=e;e:{switch(s=oa(t,r),t){case"dialog":K("cancel",e),K("close",e),l=r;break;case"iframe":case"object":case"embed":K("load",e),l=r;break;case"video":case"audio":for(l=0;l<Gt.length;l++)K(Gt[l],e);l=r;break;case"source":K("error",e),l=r;break;case"img":case"image":case"link":K("error",e),K("load",e),l=r;break;case"details":K("toggle",e),l=r;break;case"input":co(e,r),l=ta(e,r),K("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=ee({},r,{value:void 0}),K("invalid",e);break;case"textarea":po(e,r),l=la(e,r),K("invalid",e);break;default:l=r}sa(t,l),o=l;for(a in o)if(o.hasOwnProperty(a)){var c=o[a];a==="style"?Gc(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&qc(e,c)):a==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&dr(e,c):typeof c=="number"&&dr(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(cr.hasOwnProperty(a)?c!=null&&a==="onScroll"&&K("scroll",e):c!=null&&ns(e,a,c,s))}switch(t){case"input":Hr(e),uo(e,r,!1);break;case"textarea":Hr(e),ho(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?ft(e,!!r.multiple,a,!1):r.defaultValue!=null&&ft(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ei)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ve(n),null;case 6:if(e&&n.stateNode!=null)yu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(z(166));if(t=Wn(_r.current),Wn(an.current),Xr(n)){if(r=n.stateNode,t=n.memoizedProps,r[rn]=n,(a=r.nodeValue!==t)&&(e=Ae,e!==null))switch(e.tag){case 3:Yr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yr(r.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[rn]=n,n.stateNode=r}return ve(n),null;case 13:if(G(Z),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Pe!==null&&n.mode&1&&!(n.flags&128))Id(),St(),n.flags|=98560,a=!1;else if(a=Xr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(z(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(z(317));a[rn]=n}else St(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ve(n),a=!1}else Xe!==null&&(Ha(Xe),Xe=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Z.current&1?ce===0&&(ce=3):Rs())),n.updateQueue!==null&&(n.flags|=4),ve(n),null);case 4:return zt(),Pa(e,n),e===null&&xr(n.stateNode.containerInfo),ve(n),null;case 10:return ks(n.type._context),ve(n),null;case 17:return $e(n.type)&&Mi(),ve(n),null;case 19:if(G(Z),a=n.memoizedState,a===null)return ve(n),null;if(r=(n.flags&128)!==0,s=a.rendering,s===null)if(r)Bt(a,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=Ri(e),s!==null){for(n.flags|=128,Bt(a,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)a=t,e=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return q(Z,Z.current&1|2),n.child}e=e.sibling}a.tail!==null&&ie()>Mt&&(n.flags|=128,r=!0,Bt(a,!1),n.lanes=4194304)}else{if(!r)if(e=Ri(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Bt(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Y)return ve(n),null}else 2*ie()-a.renderingStartTime>Mt&&t!==1073741824&&(n.flags|=128,r=!0,Bt(a,!1),n.lanes=4194304);a.isBackwards?(s.sibling=n.child,n.child=s):(t=a.last,t!==null?t.sibling=s:n.child=s,a.last=s)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=ie(),n.sibling=null,t=Z.current,q(Z,r?t&1|2:t&1),n):(ve(n),null);case 22:case 23:return Is(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Te&1073741824&&(ve(n),n.subtreeFlags&6&&(n.flags|=8192)):ve(n),null;case 24:return null;case 25:return null}throw Error(z(156,n.tag))}function Ef(e,n){switch(gs(n),n.tag){case 1:return $e(n.type)&&Mi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return zt(),G(Me),G(we),Ns(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return js(n),null;case 13:if(G(Z),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(z(340));St()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(Z),null;case 4:return zt(),null;case 10:return ks(n.type._context),null;case 22:case 23:return Is(),null;case 24:return null;default:return null}}var ei=!1,_e=!1,Mf=typeof WeakSet=="function"?WeakSet:Set,A=null;function pt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){te(e,n,r)}else t.current=null}function Aa(e,n,t){try{t()}catch(r){te(e,n,r)}}var tc=!1;function $f(e,n){if(ya=Si,e=bd(),fs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var s=0,o=-1,c=-1,d=0,f=0,h=e,g=null;n:for(;;){for(var _;h!==t||l!==0&&h.nodeType!==3||(o=s+l),h!==a||r!==0&&h.nodeType!==3||(c=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(_=h.firstChild)!==null;)g=h,h=_;for(;;){if(h===e)break n;if(g===t&&++d===l&&(o=s),g===a&&++f===r&&(c=s),(_=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=_}t=o===-1||c===-1?null:{start:o,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(va={focusedElem:e,selectionRange:t},Si=!1,A=n;A!==null;)if(n=A,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,A=e;else for(;A!==null;){n=A;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,j=v.memoizedState,p=n.stateNode,u=p.getSnapshotBeforeUpdate(n.elementType===n.type?b:Ge(n.type,b),j);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(k){te(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,A=e;break}A=n.return}return v=tc,tc=!1,v}function rr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&Aa(n,t,a)}l=l.next}while(l!==r)}}function al(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ia(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function vu(e){var n=e.alternate;n!==null&&(e.alternate=null,vu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[rn],delete n[vr],delete n[wa],delete n[hf],delete n[ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ku(e){return e.tag===5||e.tag===3||e.tag===4}function rc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ku(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ra(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ei));else if(r!==4&&(e=e.child,e!==null))for(Ra(e,n,t),e=e.sibling;e!==null;)Ra(e,n,t),e=e.sibling}function Fa(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fa(e,n,t),e=e.sibling;e!==null;)Fa(e,n,t),e=e.sibling}var fe=null,Ye=!1;function vn(e,n,t){for(t=t.child;t!==null;)_u(e,n,t),t=t.sibling}function _u(e,n,t){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Zi,t)}catch{}switch(t.tag){case 5:_e||pt(t,n);case 6:var r=fe,l=Ye;fe=null,vn(e,n,t),fe=r,Ye=l,fe!==null&&(Ye?(e=fe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):fe.removeChild(t.stateNode));break;case 18:fe!==null&&(Ye?(e=fe,t=t.stateNode,e.nodeType===8?Tl(e.parentNode,t):e.nodeType===1&&Tl(e,t),fr(e)):Tl(fe,t.stateNode));break;case 4:r=fe,l=Ye,fe=t.stateNode.containerInfo,Ye=!0,vn(e,n,t),fe=r,Ye=l;break;case 0:case 11:case 14:case 15:if(!_e&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var a=l,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&Aa(t,n,s),l=l.next}while(l!==r)}vn(e,n,t);break;case 1:if(!_e&&(pt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(o){te(t,n,o)}vn(e,n,t);break;case 21:vn(e,n,t);break;case 22:t.mode&1?(_e=(r=_e)||t.memoizedState!==null,vn(e,n,t),_e=r):vn(e,n,t);break;default:vn(e,n,t)}}function ic(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Mf),n.forEach(function(r){var l=Of.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function qe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var a=e,s=n,o=s;e:for(;o!==null;){switch(o.tag){case 5:fe=o.stateNode,Ye=!1;break e;case 3:fe=o.stateNode.containerInfo,Ye=!0;break e;case 4:fe=o.stateNode.containerInfo,Ye=!0;break e}o=o.return}if(fe===null)throw Error(z(160));_u(a,s,l),fe=null,Ye=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(d){te(l,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)wu(n,e),n=n.sibling}function wu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(n,e),nn(e),r&4){try{rr(3,e,e.return),al(3,e)}catch(b){te(e,e.return,b)}try{rr(5,e,e.return)}catch(b){te(e,e.return,b)}}break;case 1:qe(n,e),nn(e),r&512&&t!==null&&pt(t,t.return);break;case 5:if(qe(n,e),nn(e),r&512&&t!==null&&pt(t,t.return),e.flags&32){var l=e.stateNode;try{dr(l,"")}catch(b){te(e,e.return,b)}}if(r&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,s=t!==null?t.memoizedProps:a,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Uc(l,a),oa(o,s);var d=oa(o,a);for(s=0;s<c.length;s+=2){var f=c[s],h=c[s+1];f==="style"?Gc(l,h):f==="dangerouslySetInnerHTML"?qc(l,h):f==="children"?dr(l,h):ns(l,f,h,d)}switch(o){case"input":ra(l,a);break;case"textarea":Vc(l,a);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var _=a.value;_!=null?ft(l,!!a.multiple,_,!1):g!==!!a.multiple&&(a.defaultValue!=null?ft(l,!!a.multiple,a.defaultValue,!0):ft(l,!!a.multiple,a.multiple?[]:"",!1))}l[vr]=a}catch(b){te(e,e.return,b)}}break;case 6:if(qe(n,e),nn(e),r&4){if(e.stateNode===null)throw Error(z(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(b){te(e,e.return,b)}}break;case 3:if(qe(n,e),nn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{fr(n.containerInfo)}catch(b){te(e,e.return,b)}break;case 4:qe(n,e),nn(e);break;case 13:qe(n,e),nn(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(Ps=ie())),r&4&&ic(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(_e=(d=_e)||f,qe(n,e),_e=d):qe(n,e),nn(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(A=e,f=e.child;f!==null;){for(h=A=f;A!==null;){switch(g=A,_=g.child,g.tag){case 0:case 11:case 14:case 15:rr(4,g,g.return);break;case 1:pt(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(b){te(r,t,b)}}break;case 5:pt(g,g.return);break;case 22:if(g.memoizedState!==null){ac(h);continue}}_!==null?(_.return=g,A=_):ac(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{l=h.stateNode,d?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Kc("display",s))}catch(b){te(e,e.return,b)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(b){te(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:qe(n,e),nn(e),r&4&&ic(e);break;case 21:break;default:qe(n,e),nn(e)}}function nn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(ku(t)){var r=t;break e}t=t.return}throw Error(z(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(dr(l,""),r.flags&=-33);var a=rc(e);Fa(e,a,l);break;case 3:case 4:var s=r.stateNode.containerInfo,o=rc(e);Ra(e,o,s);break;default:throw Error(z(161))}}catch(c){te(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Lf(e,n,t){A=e,bu(e)}function bu(e,n,t){for(var r=(e.mode&1)!==0;A!==null;){var l=A,a=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||ei;if(!s){var o=l.alternate,c=o!==null&&o.memoizedState!==null||_e;o=ei;var d=_e;if(ei=s,(_e=c)&&!d)for(A=l;A!==null;)s=A,c=s.child,s.tag===22&&s.memoizedState!==null?sc(l):c!==null?(c.return=s,A=c):sc(l);for(;a!==null;)A=a,bu(a),a=a.sibling;A=l,ei=o,_e=d}lc(e)}else l.subtreeFlags&8772&&a!==null?(a.return=l,A=a):lc(e)}}function lc(e){for(;A!==null;){var n=A;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:_e||al(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!_e)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Ge(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&Wo(n,a,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Wo(n,s,t)}break;case 5:var o=n.stateNode;if(t===null&&n.flags&4){t=o;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&fr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}_e||n.flags&512&&Ia(n)}catch(g){te(n,n.return,g)}}if(n===e){A=null;break}if(t=n.sibling,t!==null){t.return=n.return,A=t;break}A=n.return}}function ac(e){for(;A!==null;){var n=A;if(n===e){A=null;break}var t=n.sibling;if(t!==null){t.return=n.return,A=t;break}A=n.return}}function sc(e){for(;A!==null;){var n=A;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{al(4,n)}catch(c){te(n,t,c)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(c){te(n,l,c)}}var a=n.return;try{Ia(n)}catch(c){te(n,a,c)}break;case 5:var s=n.return;try{Ia(n)}catch(c){te(n,s,c)}}}catch(c){te(n,n.return,c)}if(n===e){A=null;break}var o=n.sibling;if(o!==null){o.return=n.return,A=o;break}A=n.return}}var Tf=Math.ceil,Oi=xn.ReactCurrentDispatcher,Ls=xn.ReactCurrentOwner,Ue=xn.ReactCurrentBatchConfig,W=0,pe=null,ae=null,me=0,Te=0,ht=Rn(0),ce=0,Nr=null,Gn=0,sl=0,Ts=0,ir=null,ze=null,Ps=0,Mt=1/0,on=null,Bi=!1,Da=null,$n=null,ni=!1,Nn=null,Hi=0,lr=0,Oa=null,xi=-1,yi=0;function Ne(){return W&6?ie():xi!==-1?xi:xi=ie()}function Ln(e){return e.mode&1?W&2&&me!==0?me&-me:gf.transition!==null?(yi===0&&(yi=sd()),yi):(e=Q,e!==0||(e=window.event,e=e===void 0?16:fd(e.type)),e):1}function Je(e,n,t,r){if(50<lr)throw lr=0,Oa=null,Error(z(185));Tr(e,t,r),(!(W&2)||e!==pe)&&(e===pe&&(!(W&2)&&(sl|=t),ce===4&&bn(e,me)),Le(e,r),t===1&&W===0&&!(n.mode&1)&&(Mt=ie()+500,rl&&Fn()))}function Le(e,n){var t=e.callbackNode;mh(e,n);var r=Ni(e,e===pe?me:0);if(r===0)t!==null&&go(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&go(t),n===1)e.tag===0?mf(oc.bind(null,e)):Td(oc.bind(null,e)),uf(function(){!(W&6)&&Fn()}),t=null;else{switch(od(r)){case 1:t=as;break;case 4:t=ld;break;case 16:t=ji;break;case 536870912:t=ad;break;default:t=ji}t=$u(t,ju.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function ju(e,n){if(xi=-1,yi=0,W&6)throw Error(z(327));var t=e.callbackNode;if(vt()&&e.callbackNode!==t)return null;var r=Ni(e,e===pe?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Wi(e,r);else{n=r;var l=W;W|=2;var a=Su();(pe!==e||me!==n)&&(on=null,Mt=ie()+500,Un(e,n));do try{If();break}catch(o){Nu(e,o)}while(!0);vs(),Oi.current=a,W=l,ae!==null?n=0:(pe=null,me=0,n=ce)}if(n!==0){if(n===2&&(l=ha(e),l!==0&&(r=l,n=Ba(e,l))),n===1)throw t=Nr,Un(e,0),bn(e,r),Le(e,ie()),t;if(n===6)bn(e,r);else{if(l=e.current.alternate,!(r&30)&&!Pf(l)&&(n=Wi(e,r),n===2&&(a=ha(e),a!==0&&(r=a,n=Ba(e,a))),n===1))throw t=Nr,Un(e,0),bn(e,r),Le(e,ie()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(z(345));case 2:On(e,ze,on);break;case 3:if(bn(e,r),(r&130023424)===r&&(n=Ps+500-ie(),10<n)){if(Ni(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=_a(On.bind(null,e,ze,on),n);break}On(e,ze,on);break;case 4:if(bn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var s=31-Ze(r);a=1<<s,s=n[s],s>l&&(l=s),r&=~a}if(r=l,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tf(r/1960))-r,10<r){e.timeoutHandle=_a(On.bind(null,e,ze,on),r);break}On(e,ze,on);break;case 5:On(e,ze,on);break;default:throw Error(z(329))}}}return Le(e,ie()),e.callbackNode===t?ju.bind(null,e):null}function Ba(e,n){var t=ir;return e.current.memoizedState.isDehydrated&&(Un(e,n).flags|=256),e=Wi(e,n),e!==2&&(n=ze,ze=t,n!==null&&Ha(n)),e}function Ha(e){ze===null?ze=e:ze.push.apply(ze,e)}function Pf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],a=l.getSnapshot;l=l.value;try{if(!en(a(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function bn(e,n){for(n&=~Ts,n&=~sl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ze(n),r=1<<t;e[t]=-1,n&=~r}}function oc(e){if(W&6)throw Error(z(327));vt();var n=Ni(e,0);if(!(n&1))return Le(e,ie()),null;var t=Wi(e,n);if(e.tag!==0&&t===2){var r=ha(e);r!==0&&(n=r,t=Ba(e,r))}if(t===1)throw t=Nr,Un(e,0),bn(e,n),Le(e,ie()),t;if(t===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,On(e,ze,on),Le(e,ie()),null}function As(e,n){var t=W;W|=1;try{return e(n)}finally{W=t,W===0&&(Mt=ie()+500,rl&&Fn())}}function Yn(e){Nn!==null&&Nn.tag===0&&!(W&6)&&vt();var n=W;W|=1;var t=Ue.transition,r=Q;try{if(Ue.transition=null,Q=1,e)return e()}finally{Q=r,Ue.transition=t,W=n,!(W&6)&&Fn()}}function Is(){Te=ht.current,G(ht)}function Un(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,df(t)),ae!==null)for(t=ae.return;t!==null;){var r=t;switch(gs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Mi();break;case 3:zt(),G(Me),G(we),Ns();break;case 5:js(r);break;case 4:zt();break;case 13:G(Z);break;case 19:G(Z);break;case 10:ks(r.type._context);break;case 22:case 23:Is()}t=t.return}if(pe=e,ae=e=Tn(e.current,null),me=Te=n,ce=0,Nr=null,Ts=sl=Gn=0,ze=ir=null,Hn!==null){for(n=0;n<Hn.length;n++)if(t=Hn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,a=t.pending;if(a!==null){var s=a.next;a.next=l,r.next=s}t.pending=r}Hn=null}return e}function Nu(e,n){do{var t=ae;try{if(vs(),fi.current=Di,Fi){for(var r=J.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Fi=!1}if(Kn=0,ue=oe=J=null,tr=!1,wr=0,Ls.current=null,t===null||t.return===null){ce=1,Nr=n,ae=null;break}e:{var a=e,s=t.return,o=t,c=n;if(n=me,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=Go(s);if(_!==null){_.flags&=-257,Yo(_,s,o,a,n),_.mode&1&&Ko(a,d,n),n=_,c=d;var v=n.updateQueue;if(v===null){var b=new Set;b.add(c),n.updateQueue=b}else v.add(c);break e}else{if(!(n&1)){Ko(a,d,n),Rs();break e}c=Error(z(426))}}else if(Y&&o.mode&1){var j=Go(s);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Yo(j,s,o,a,n),xs(Et(c,o));break e}}a=c=Et(c,o),ce!==4&&(ce=2),ir===null?ir=[a]:ir.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var p=ou(a,c,n);Ho(a,p);break e;case 1:o=c;var u=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof u.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&($n===null||!$n.has(m)))){a.flags|=65536,n&=-n,a.lanes|=n;var k=cu(a,o,n);Ho(a,k);break e}}a=a.return}while(a!==null)}zu(t)}catch(N){n=N,ae===t&&t!==null&&(ae=t=t.return);continue}break}while(!0)}function Su(){var e=Oi.current;return Oi.current=Di,e===null?Di:e}function Rs(){(ce===0||ce===3||ce===2)&&(ce=4),pe===null||!(Gn&268435455)&&!(sl&268435455)||bn(pe,me)}function Wi(e,n){var t=W;W|=2;var r=Su();(pe!==e||me!==n)&&(on=null,Un(e,n));do try{Af();break}catch(l){Nu(e,l)}while(!0);if(vs(),W=t,Oi.current=r,ae!==null)throw Error(z(261));return pe=null,me=0,ce}function Af(){for(;ae!==null;)Cu(ae)}function If(){for(;ae!==null&&!ah();)Cu(ae)}function Cu(e){var n=Mu(e.alternate,e,Te);e.memoizedProps=e.pendingProps,n===null?zu(e):ae=n,Ls.current=null}function zu(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Ef(t,n),t!==null){t.flags&=32767,ae=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,ae=null;return}}else if(t=zf(t,n,Te),t!==null){ae=t;return}if(n=n.sibling,n!==null){ae=n;return}ae=n=e}while(n!==null);ce===0&&(ce=5)}function On(e,n,t){var r=Q,l=Ue.transition;try{Ue.transition=null,Q=1,Rf(e,n,t,r)}finally{Ue.transition=l,Q=r}return null}function Rf(e,n,t,r){do vt();while(Nn!==null);if(W&6)throw Error(z(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(gh(e,a),e===pe&&(ae=pe=null,me=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ni||(ni=!0,$u(ji,function(){return vt(),null})),a=(t.flags&15990)!==0,t.subtreeFlags&15990||a){a=Ue.transition,Ue.transition=null;var s=Q;Q=1;var o=W;W|=4,Ls.current=null,$f(e,t),wu(t,e),tf(va),Si=!!ya,va=ya=null,e.current=t,Lf(t),sh(),W=o,Q=s,Ue.transition=a}else e.current=t;if(ni&&(ni=!1,Nn=e,Hi=l),a=e.pendingLanes,a===0&&($n=null),dh(t.stateNode),Le(e,ie()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Bi)throw Bi=!1,e=Da,Da=null,e;return Hi&1&&e.tag!==0&&vt(),a=e.pendingLanes,a&1?e===Oa?lr++:(lr=0,Oa=e):lr=0,Fn(),null}function vt(){if(Nn!==null){var e=od(Hi),n=Ue.transition,t=Q;try{if(Ue.transition=null,Q=16>e?16:e,Nn===null)var r=!1;else{if(e=Nn,Nn=null,Hi=0,W&6)throw Error(z(331));var l=W;for(W|=4,A=e.current;A!==null;){var a=A,s=a.child;if(A.flags&16){var o=a.deletions;if(o!==null){for(var c=0;c<o.length;c++){var d=o[c];for(A=d;A!==null;){var f=A;switch(f.tag){case 0:case 11:case 15:rr(8,f,a)}var h=f.child;if(h!==null)h.return=f,A=h;else for(;A!==null;){f=A;var g=f.sibling,_=f.return;if(vu(f),f===d){A=null;break}if(g!==null){g.return=_,A=g;break}A=_}}}var v=a.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var j=b.sibling;b.sibling=null,b=j}while(b!==null)}}A=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,A=s;else e:for(;A!==null;){if(a=A,a.flags&2048)switch(a.tag){case 0:case 11:case 15:rr(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,A=p;break e}A=a.return}}var u=e.current;for(A=u;A!==null;){s=A;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,A=m;else e:for(s=u;A!==null;){if(o=A,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:al(9,o)}}catch(N){te(o,o.return,N)}if(o===s){A=null;break e}var k=o.sibling;if(k!==null){k.return=o.return,A=k;break e}A=o.return}}if(W=l,Fn(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Zi,e)}catch{}r=!0}return r}finally{Q=t,Ue.transition=n}}return!1}function cc(e,n,t){n=Et(t,n),n=ou(e,n,1),e=Mn(e,n,1),n=Ne(),e!==null&&(Tr(e,1,n),Le(e,n))}function te(e,n,t){if(e.tag===3)cc(e,e,t);else for(;n!==null;){if(n.tag===3){cc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){e=Et(t,e),e=cu(n,e,1),n=Mn(n,e,1),e=Ne(),n!==null&&(Tr(n,1,e),Le(n,e));break}}n=n.return}}function Ff(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ne(),e.pingedLanes|=e.suspendedLanes&t,pe===e&&(me&t)===t&&(ce===4||ce===3&&(me&130023424)===me&&500>ie()-Ps?Un(e,0):Ts|=t),Le(e,n)}function Eu(e,n){n===0&&(e.mode&1?(n=Vr,Vr<<=1,!(Vr&130023424)&&(Vr=4194304)):n=1);var t=Ne();e=mn(e,n),e!==null&&(Tr(e,n,t),Le(e,t))}function Df(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Eu(e,t)}function Of(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(n),Eu(e,t)}var Mu;Mu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Me.current)Ee=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ee=!1,Cf(e,n,t);Ee=!!(e.flags&131072)}else Ee=!1,Y&&n.flags&1048576&&Pd(n,Ti,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;gi(e,n),e=n.pendingProps;var l=Nt(n,we.current);yt(n,t),l=Cs(null,n,r,e,l,t);var a=zs();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,$e(r)?(a=!0,$i(n)):a=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ws(n),l.updater=ll,n.stateNode=l,l._reactInternals=n,za(n,r,e,t),n=$a(null,n,r,!0,a,t)):(n.tag=0,Y&&a&&ms(n),je(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(gi(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Hf(r),e=Ge(r,e),l){case 0:n=Ma(null,n,r,e,t);break e;case 1:n=Jo(null,n,r,e,t);break e;case 11:n=Xo(null,n,r,e,t);break e;case 14:n=Zo(null,n,r,Ge(r.type,e),t);break e}throw Error(z(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ge(r,l),Ma(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ge(r,l),Jo(e,n,r,l,t);case 3:e:{if(hu(n),e===null)throw Error(z(387));r=n.pendingProps,a=n.memoizedState,l=a.element,Od(e,n),Ii(n,r,null,t);var s=n.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){l=Et(Error(z(423)),n),n=ec(e,n,r,t,l);break e}else if(r!==l){l=Et(Error(z(424)),n),n=ec(e,n,r,t,l);break e}else for(Pe=En(n.stateNode.containerInfo.firstChild),Ae=n,Y=!0,Xe=null,t=Fd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(St(),r===l){n=gn(e,n,t);break e}je(e,n,r,t)}n=n.child}return n;case 5:return Bd(n),e===null&&Na(n),r=n.type,l=n.pendingProps,a=e!==null?e.memoizedProps:null,s=l.children,ka(r,l)?s=null:a!==null&&ka(r,a)&&(n.flags|=32),pu(e,n),je(e,n,s,t),n.child;case 6:return e===null&&Na(n),null;case 13:return fu(e,n,t);case 4:return bs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ct(n,null,r,t):je(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ge(r,l),Xo(e,n,r,l,t);case 7:return je(e,n,n.pendingProps,t),n.child;case 8:return je(e,n,n.pendingProps.children,t),n.child;case 12:return je(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,a=n.memoizedProps,s=l.value,q(Pi,r._currentValue),r._currentValue=s,a!==null)if(en(a.value,s)){if(a.children===l.children&&!Me.current){n=gn(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var c=o.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=pn(-1,t&-t),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?c.next=c:(c.next=f.next,f.next=c),d.pending=c}}a.lanes|=t,c=a.alternate,c!==null&&(c.lanes|=t),Sa(a.return,t,n),o.lanes|=t;break}c=c.next}}else if(a.tag===10)s=a.type===n.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(z(341));s.lanes|=t,o=s.alternate,o!==null&&(o.lanes|=t),Sa(s,t,n),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===n){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}je(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,yt(n,t),l=Ve(l),r=r(l),n.flags|=1,je(e,n,r,t),n.child;case 14:return r=n.type,l=Ge(r,n.pendingProps),l=Ge(r.type,l),Zo(e,n,r,l,t);case 15:return du(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ge(r,l),gi(e,n),n.tag=1,$e(r)?(e=!0,$i(n)):e=!1,yt(n,t),su(n,r,l),za(n,r,l,t),$a(null,n,r,!0,e,t);case 19:return mu(e,n,t);case 22:return uu(e,n,t)}throw Error(z(156,n.tag))};function $u(e,n){return id(e,n)}function Bf(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,n,t,r){return new Bf(e,n,t,r)}function Fs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hf(e){if(typeof e=="function")return Fs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rs)return 11;if(e===is)return 14}return 2}function Tn(e,n){var t=e.alternate;return t===null?(t=We(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function vi(e,n,t,r,l,a){var s=2;if(r=e,typeof e=="function")Fs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case rt:return Vn(t.children,l,a,n);case ts:s=8,l|=8;break;case Zl:return e=We(12,t,n,l|2),e.elementType=Zl,e.lanes=a,e;case Jl:return e=We(13,t,n,l),e.elementType=Jl,e.lanes=a,e;case ea:return e=We(19,t,n,l),e.elementType=ea,e.lanes=a,e;case Bc:return ol(t,l,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dc:s=10;break e;case Oc:s=9;break e;case rs:s=11;break e;case is:s=14;break e;case kn:s=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return n=We(s,t,n,l),n.elementType=e,n.type=r,n.lanes=a,n}function Vn(e,n,t,r){return e=We(7,e,r,n),e.lanes=t,e}function ol(e,n,t,r){return e=We(22,e,r,n),e.elementType=Bc,e.lanes=t,e.stateNode={isHidden:!1},e}function Bl(e,n,t){return e=We(6,e,null,n),e.lanes=t,e}function Hl(e,n,t){return n=We(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Wf(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wl(0),this.expirationTimes=wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ds(e,n,t,r,l,a,s,o,c){return e=new Wf(e,n,t,o,c),n===1?(n=1,a===!0&&(n|=8)):n=0,a=We(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ws(a),e}function Uf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Lu(e){if(!e)return An;e=e._reactInternals;e:{if(Jn(e)!==e||e.tag!==1)throw Error(z(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if($e(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(z(171))}if(e.tag===1){var t=e.type;if($e(t))return Ld(e,t,n)}return n}function Tu(e,n,t,r,l,a,s,o,c){return e=Ds(t,r,!0,e,l,a,s,o,c),e.context=Lu(null),t=e.current,r=Ne(),l=Ln(t),a=pn(r,l),a.callback=n??null,Mn(t,a,l),e.current.lanes=l,Tr(e,l,r),Le(e,r),e}function cl(e,n,t,r){var l=n.current,a=Ne(),s=Ln(l);return t=Lu(t),n.context===null?n.context=t:n.pendingContext=t,n=pn(a,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Mn(l,n,s),e!==null&&(Je(e,l,s,a),hi(e,l,s)),s}function Ui(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Os(e,n){dc(e,n),(e=e.alternate)&&dc(e,n)}function Vf(){return null}var Pu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bs(e){this._internalRoot=e}dl.prototype.render=Bs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(z(409));cl(e,n,null,null)};dl.prototype.unmount=Bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yn(function(){cl(null,e,null,null)}),n[fn]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var n=ud();e={blockedOn:null,target:e,priority:n};for(var t=0;t<wn.length&&n!==0&&n<wn[t].priority;t++);wn.splice(t,0,e),t===0&&hd(e)}};function Hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uc(){}function Qf(e,n,t,r,l){if(l){if(typeof r=="function"){var a=r;r=function(){var d=Ui(s);a.call(d)}}var s=Tu(n,r,e,0,null,!1,!1,"",uc);return e._reactRootContainer=s,e[fn]=s.current,xr(e.nodeType===8?e.parentNode:e),Yn(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var o=r;r=function(){var d=Ui(c);o.call(d)}}var c=Ds(e,0,!1,null,null,!1,!1,"",uc);return e._reactRootContainer=c,e[fn]=c.current,xr(e.nodeType===8?e.parentNode:e),Yn(function(){cl(n,c,t,r)}),c}function pl(e,n,t,r,l){var a=t._reactRootContainer;if(a){var s=a;if(typeof l=="function"){var o=l;l=function(){var c=Ui(s);o.call(c)}}cl(n,s,e,l)}else s=Qf(t,n,e,l,r);return Ui(s)}cd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Kt(n.pendingLanes);t!==0&&(ss(n,t|1),Le(n,ie()),!(W&6)&&(Mt=ie()+500,Fn()))}break;case 13:Yn(function(){var r=mn(e,1);if(r!==null){var l=Ne();Je(r,e,1,l)}}),Os(e,1)}};os=function(e){if(e.tag===13){var n=mn(e,134217728);if(n!==null){var t=Ne();Je(n,e,134217728,t)}Os(e,134217728)}};dd=function(e){if(e.tag===13){var n=Ln(e),t=mn(e,n);if(t!==null){var r=Ne();Je(t,e,n,r)}Os(e,n)}};ud=function(){return Q};pd=function(e,n){var t=Q;try{return Q=e,n()}finally{Q=t}};da=function(e,n,t){switch(n){case"input":if(ra(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=tl(r);if(!l)throw Error(z(90));Wc(r),ra(r,l)}}}break;case"textarea":Vc(e,t);break;case"select":n=t.value,n!=null&&ft(e,!!t.multiple,n,!1)}};Zc=As;Jc=Yn;var qf={usingClientEntryPoint:!1,Events:[Ar,st,tl,Yc,Xc,As]},Ht={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kf={bundleType:Ht.bundleType,version:Ht.version,rendererPackageName:Ht.rendererPackageName,rendererConfig:Ht.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=td(e),e===null?null:e.stateNode},findFiberByHostInstance:Ht.findFiberByHostInstance||Vf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ti.isDisabled&&ti.supportsFiber)try{Zi=ti.inject(Kf),ln=ti}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qf;Fe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hs(n))throw Error(z(200));return Uf(e,n,null,t)};Fe.createRoot=function(e,n){if(!Hs(e))throw Error(z(299));var t=!1,r="",l=Pu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Ds(e,1,!1,null,null,t,!1,r,l),e[fn]=n.current,xr(e.nodeType===8?e.parentNode:e),new Bs(n)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=td(n),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return Yn(e)};Fe.hydrate=function(e,n,t){if(!ul(n))throw Error(z(200));return pl(null,e,n,!0,t)};Fe.hydrateRoot=function(e,n,t){if(!Hs(e))throw Error(z(405));var r=t!=null&&t.hydratedSources||null,l=!1,a="",s=Pu;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=Tu(n,null,e,1,t??null,l,!1,a,s),e[fn]=n.current,xr(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new dl(n)};Fe.render=function(e,n,t){if(!ul(n))throw Error(z(200));return pl(null,e,n,!1,t)};Fe.unmountComponentAtNode=function(e){if(!ul(e))throw Error(z(40));return e._reactRootContainer?(Yn(function(){pl(null,null,e,!1,function(){e._reactRootContainer=null,e[fn]=null})}),!0):!1};Fe.unstable_batchedUpdates=As;Fe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ul(t))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return pl(e,n,t,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function Au(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Au)}catch(e){console.error(e)}}Au(),Ac.exports=Fe;var Gf=Ac.exports,Iu,pc=Gf;Iu=pc.createRoot,pc.hydrateRoot;/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ru=(...e)=>e.filter((n,t,r)=>!!n&&r.indexOf(n)===t).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=w.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:l="",children:a,iconNode:s,...o},c)=>w.createElement("svg",{ref:c,...Xf,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:Ru("lucide",l),...o},[...s.map(([d,f])=>w.createElement(d,f)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=(e,n)=>{const t=w.forwardRef(({className:r,...l},a)=>w.createElement(Zf,{ref:a,iconNode:n,className:Ru(`lucide-${Yf(e)}`,r),...l}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=L("AlignCenter",[["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 18H5",key:"18s9l3"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=L("AlignLeft",[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=L("AlignRight",[["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 18H7",key:"1ygte8"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=L("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=L("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=L("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=L("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=L("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=L("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=L("Bold",[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=L("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=L("BotMessageSquare",[["path",{d:"M12 6V2H8",key:"1155em"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",key:"w2lp3e"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M9 11v2",key:"1ueba0"}],["path",{d:"M15 11v2",key:"i11awn"}],["path",{d:"M20 12h2",key:"1q8mjw"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=L("CaseUpper",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4",key:"1sqfas"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=L("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=L("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=L("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=L("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=L("CircleDashed",[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=L("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=L("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=L("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=L("CornerUpLeft",[["polyline",{points:"9 14 4 9 9 4",key:"881910"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=L("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=L("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=L("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=L("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=L("FileCode2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=L("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=L("FileType",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M11 18h2",key:"12mj7e"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=L("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=L("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=L("Frame",[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=L("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=L("Heading",[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=L("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=L("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=L("Keyboard",[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=L("LayoutPanelTop",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=L("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=L("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=L("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=L("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=L("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=L("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=L("MessagesSquare",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",key:"p1xzt8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=L("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=L("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=L("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=L("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=L("MousePointerClick",[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=L("MoveHorizontal",[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=L("MoveVertical",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m8 18 4 4 4-4",key:"bh5tu3"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=L("PaintBucket",[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",key:"irua1i"}],["path",{d:"m5 2 5 5",key:"1lls2c"}],["path",{d:"M2 13h15",key:"1hkzvu"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",key:"xk76lq"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=L("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=L("Pipette",[["path",{d:"m2 22 1-1h3l9-9",key:"1sre89"}],["path",{d:"M3 21v-3l9-9",key:"hpe2y6"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",key:"196du1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=L("Plug",[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=L("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=L("RectangleHorizontal",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=L("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=L("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=L("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=L("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=L("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=L("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=L("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=L("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=L("SquareDashed",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=L("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=L("Table2",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=L("Tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=L("ThumbsDown",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=L("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=L("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=L("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=L("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=L("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=L("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Zu="bolt-visual-design:v2",Wm=1200;function Um(){try{const e=localStorage.getItem(Zu);if(e){const n=JSON.parse(e);return{doc:n.doc??{},compiled:n.compiled??{}}}}catch{}return{doc:{},compiled:{}}}function Vm(e){const n={...e};if(n.style){const t={};for(const[r,l]of Object.entries(n.style))l!==""&&l!=null&&(t[r]=l);Object.keys(t).length?n.style=t:delete n.style}return n.text===void 0&&delete n.text,n.href||delete n.href,n.target||delete n.target,n.hidden||delete n.hidden,Object.keys(n).length?n:void 0}function Wt(e,n,t){const r=e[n]??{},l=Vm(t(r)),a={...e};return l?a[n]=l:delete a[n],a}function Qm(e,n){switch(n.type){case"update":{const t=n.fn(e.doc);return t===e.doc||JSON.stringify(t)===JSON.stringify(e.doc)?e:{doc:t,past:n.push?[...e.past,e.doc].slice(-150):e.past,future:[]}}case"undo":return e.past.length?{doc:e.past[e.past.length-1],past:e.past.slice(0,-1),future:[e.doc,...e.future]}:e;case"redo":return e.future.length?{doc:e.future[0],past:[...e.past,e.doc],future:e.future.slice(1)}:e;case"reset":return{doc:{},past:[...e.past,e.doc],future:[]}}}const Ju=w.createContext(null),ep=w.createContext(null);function qm({children:e}){const n=w.useMemo(Um,[]),[t,r]=w.useReducer(Qm,{doc:n.doc,past:[],future:[]}),[l,a]=w.useState(n.compiled),[s,o]=w.useState(!1),[c,d]=w.useState(()=>Date.now()),f=w.useRef({t:0}),h=w.useRef(t.doc);h.current=t.doc;const g=w.useCallback((j,p)=>{const u=Date.now(),m=!!p&&f.current.key===p&&u-f.current.t<Wm;f.current={key:p,t:u},r({type:"update",fn:j,push:!m})},[]),_=w.useMemo(()=>({setStyle:(j,p,u)=>g(m=>Wt(m,j,k=>({...k,style:{...k.style??{},...p}})),u),setText:(j,p,u)=>g(m=>Wt(m,j,k=>({...k,text:p})),u),setLink:(j,p,u)=>g(m=>Wt(m,j,k=>({...k,...p})),u),setHidden:(j,p)=>g(u=>Wt(u,j,m=>({...m,hidden:p}))),resetNode:j=>g(p=>Wt(p,j,()=>({}))),resetAll:()=>{r({type:"reset"}),a({})},undo:()=>{f.current={t:0},r({type:"undo"})},redo:()=>{f.current={t:0},r({type:"redo"})},markCompiled:()=>a(h.current)}),[g]),v=w.useRef(!0);w.useEffect(()=>{if(v.current){v.current=!1;return}o(!0);const j=setTimeout(()=>{try{localStorage.setItem(Zu,JSON.stringify({doc:t.doc,compiled:l}))}catch{}o(!1),d(Date.now())},450);return()=>clearTimeout(j)},[t.doc,l]);const b=w.useMemo(()=>({doc:t.doc,compiled:l,canUndo:t.past.length>0,canRedo:t.future.length>0,saving:s,savedAt:c}),[t,l,s,c]);return i.jsx(ep.Provider,{value:_,children:i.jsx(Ju.Provider,{value:b,children:e})})}function et(){const e=w.useContext(Ju);if(!e)throw new Error("useDoc outside DocProvider");return e}function yn(){const e=w.useContext(ep);if(!e)throw new Error("useDocApi outside DocProvider");return e}const np=w.createContext({editingId:null,animatingId:null,mode:"preview",stopEdit:()=>{}}),tp=w.createContext(null);function Km({children:e,mode:n,setMode:t}){const[r,l]=w.useState("desktop"),[a,s]=w.useState(null),[o,c]=w.useState(null),[d,f]=w.useState(null),[h,g]=w.useState(null),[_,v]=w.useState(null),b=w.useRef(null),j=w.useRef(null),p=w.useCallback(y=>!y||!b.current?null:b.current.querySelector(`[data-vid="${CSS.escape(y)}"]`),[]),u=w.useCallback(y=>{s(y),f(C=>C===y?C:null),v(C=>C&&C.id!==y&&C.phase!=="applying"&&C.phase!=="thinking"?null:C)},[]);w.useEffect(()=>{n!=="design"&&(s(null),c(null),f(null),v(null))},[n]);const m=w.useCallback(()=>f(null),[]),k=w.useMemo(()=>({editingId:d,animatingId:h,mode:n,stopEdit:m}),[d,h,n,m]),N=w.useMemo(()=>({mode:n,setMode:t,device:r,setDevice:l,selectedId:a,select:u,hoverId:o,setHover:c,editingId:d,startEdit:y=>{s(y),f(y)},stopEdit:m,animatingId:h,setAnimating:g,ai:_,setAi:v,rootRef:b,viewportRef:j,getEl:p}),[n,t,r,a,u,o,d,m,h,_,p]);return i.jsx(tp.Provider,{value:N,children:i.jsx(np.Provider,{value:k,children:e})})}function Oe(){const e=w.useContext(tp);if(!e)throw new Error("useEditor outside EditorProvider");return e}function fl(){return w.useContext(np)}const rp=w.createContext(()=>{});let Gm=0;function Ym({children:e}){const[n,t]=w.useState([]),r=w.useCallback((l,a)=>{const s=++Gm;t(o=>[...o.slice(-2),{id:s,text:l,action:a}]),setTimeout(()=>t(o=>o.filter(c=>c.id!==s)),3600)},[]);return i.jsxs(rp.Provider,{value:r,children:[e,i.jsx("div",{className:"toasts","aria-live":"polite",children:n.map(l=>i.jsxs("div",{className:"toast",children:[i.jsx("span",{children:l.text}),l.action&&i.jsx("button",{onClick:()=>{l.action.run(),t(a=>a.filter(s=>s.id!==l.id))},children:l.action.label})]},l.id))})]})}const Rr=()=>w.useContext(rp),Xm=[[/\{\/\*.*?\*\/\}|\/\/.*$/,"cm"],[/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`[^`]*`/,"str"],[/<\/?[A-Za-z][\w.]*|\/?>/,e=>/^<\/?[A-Z]/.test(e)?"cmp":"tag"],[/\b(import|from|export|default|function|return|const|let|type|interface|as)\b/,"kw"],[/\b[a-zA-Z-]+(?==)/,"attr"],[/\b\d+(\.\d+)?\b/,"num"],[/[{}()[\],;:.!]/,"pun"]],Zm=[[/\/\*.*?\*\/|^\s*\*.*$|^\s*\/\*.*$/,"cm"],[/@[\w-]+/,"kw"],[/^\s*[\w-]+(?=\s*:(?!\w*\)))/,"attr"],[/'[^']*'|"[^"]*"/,"str"],[/#[0-9a-fA-F]{3,8}\b/,"num"],[/-?\d*\.?\d+(px|em|rem|%|deg|s|fr|cqi)?\b/,"num"],[/[.#][\w-]+|::?[\w-]+|\[[^\]]+\]/,"sel"],[/[{}();:,>]/,"pun"]],Jm=[[/"(?:[^"\\]|\\.)*"(?=\s*:)/,"attr"],[/"(?:[^"\\]|\\.)*"/,"str"],[/\b(true|false|null)\b|-?\d+(\.\d+)?/,"num"],[/[{}[\],:]/,"pun"]],eg=[[/<!--.*?-->/,"cm"],[/"[^"]*"/,"str"],[/<\/?[\w!-]+|\/?>/,"tag"],[/\b[\w-]+(?==)/,"attr"]],ng={tsx:Xm,css:Zm,json:Jm,html:eg};function ip(e,n){const t=ng[n],r=[];let l=0,a="";const s=()=>{a&&r.push({t:a}),a=""};for(;l<e.length;){let o=null;const c=e.slice(l);for(const[d,f]of t){const h=d.exec(c);if(h&&h[0].length&&(o===null||h.index<o.idx)&&(o={idx:h.index,m:h[0],c:typeof f=="string"?f:f(h[0])},h.index===0))break}if(!o){a+=c;break}a+=c.slice(0,o.idx),s(),r.push({t:o.m,c:o.c}),l+=o.idx+o.m.length}return s(),r}const tg=`/* Alfred Chang — refined neo-brutalism
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

.fit {
  display: grid;
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.fit__row {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  background: var(--paper);
  border: var(--border);
  box-shadow: var(--shadow-lg);
}
.fit__asks {
  padding: 22px 26px 24px;
  border-right: var(--border);
}
.fit__num {
  display: inline-grid;
  place-items: center;
  min-width: 44px;
  height: 36px;
  margin-bottom: 14px;
  padding: 0 6px;
  background: var(--ink);
  color: var(--paper);
  font-family: var(--display);
  font-size: 16px;
}
.fit__title {
  font-family: var(--display);
  font-weight: 400;
  font-size: clamp(1.25rem, 2.2vw, 1.75rem);
  line-height: 1.05;
  text-transform: uppercase;
  text-wrap: balance;
}
.fit__done {
  padding: 22px 26px 24px;
}
.fit__done .mono-label {
  margin-bottom: 12px;
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

/* ---------------- responsive ---------------- */

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
  .fit__row,
  .plan {
    grid-template-columns: minmax(0, 1fr);
  }
  .fit__asks {
    border-right: 0;
    border-bottom: var(--border);
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
  .fit__asks,
  .fit__done {
    padding: 18px 18px 20px;
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
  .featured__actions .btn {
    flex: 1 1 100%;
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
`,rg=new Set(["class","style","contenteditable","spellcheck"]),ig={"stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","fill-rule":"fillRule","clip-rule":"clipRule",viewbox:"viewBox"},lg=e=>e.split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""),mc=e=>e.replace(/[{}<>]/g,n=>`{"${n}"}`);function ag(e){if(!e)return null;const n=Object.entries(e).filter(([r])=>r!=="transition");return n.length?`{{ ${n.map(([r,l])=>`${r.startsWith("--")?JSON.stringify(r):r}: ${JSON.stringify(l)}`).join(", ")} }}`:null}function lp(e,n){var s,o;const t=[],r=(s=e.dataset)==null?void 0:s.vid,l=Array.from(e.classList).join(" ");l&&t.push(`className="${l}"`);for(const c of Array.from(e.attributes)){if(rg.has(c.name)||c.name.startsWith("data-"))continue;const d=e instanceof SVGElement?ig[c.name]??c.name:c.name;t.push(`${d}="${c.value.replace(/"/g,"&quot;")}"`)}const a=ag(r?(o=n.doc[r])==null?void 0:o.style:void 0);return a&&t.push(`style=${a}`),t}function sg(e){if(e.tagName.toLowerCase()!=="svg")return null;const n=Array.from(e.classList).find(t=>t.startsWith("lucide-"));return n?lg(n.replace(/^lucide-/,"").replace(/-icon$/,"")):null}function ap(e,n,t){var v,b,j;const r="  ".repeat(n),l=(v=e.dataset)==null?void 0:v.vid;if(l&&((b=t.doc[l])!=null&&b.hidden)){t.lines.push(`${r}{/* “${e.dataset.label??l}” hidden in Visual Design */}`),t.changed.has(l)&&t.marks.add(t.lines.length);return}const a=()=>l&&t.changed.has(l)&&t.marks.add(t.lines.length),s=sg(e);if(s){t.icons.add(s);const p=e.getAttribute("width"),u=e.getAttribute("stroke-width");t.lines.push(`${r}<${s} size={${p}}${u&&u!=="2"?` strokeWidth={${u}}`:""} />`);return}const o=e.tagName.toLowerCase(),c=lp(e,t),d=Array.from(e.childNodes).filter(p=>p.nodeType===1||p.nodeType===3&&p.textContent.trim()),f=d.length===1&&d[0].nodeType===3,h=c.length?` ${c.join(" ")}`:"",g=h.length+r.length+o.length>96,_=p=>{if(!g){t.lines.push(`${r}<${o}${h}${p}`),a();return}t.lines.push(`${r}<${o}`),a();for(const u of c)t.lines.push(`${r}  ${u}`),a();t.lines.push(`${r}${p.trim()==="/>"?"/>":">"}`)};if(!d.length){_(" />");return}if(f){const p=mc(d[0].textContent.replace(/\s+/g," ").trim());if(!g&&r.length+o.length*2+h.length+p.length<110&&!p.includes(`
`)){t.lines.push(`${r}<${o}${h}>${p}</${o}>`),a();return}}_(">");for(const p of d)if(p.nodeType===3){const u=p.textContent,m=u.includes(`
`)&&o==="code"?u.split(`
`):[u.replace(/\s+/g," ").trim()];for(const k of m)t.lines.push(o==="code"?`${r}  {${JSON.stringify(k)}}`:`${r}  ${mc(k)}`),l&&t.changed.has(l)&&((j=t.doc[l])==null?void 0:j.text)!==void 0&&t.marks.add(t.lines.length)}else ap(p,n+1,t);t.lines.push(`${r}</${o}>`)}function og(e,n){const r=lp(e,{doc:n});return`<${e.tagName.toLowerCase()}${r.length?` ${r.join(" ")}`:""}>`}const cg=`{
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
}`,dg=`<!doctype html>
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
</html>`,ug=`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);`,pg=new Set(["Header","Footer"]);function hg(e,n,t){const r=Array.from(e.querySelectorAll("[data-file]")),l=[];for(const o of r){const c=o.dataset.file,d={doc:n,changed:t,icons:new Set,lines:[],marks:new Set};ap(o,2,d);const f=[];d.icons.size&&f.push(`import { ${[...d.icons].sort().join(", ")} } from "lucide-react";`,""),f.push(`export function ${c}() {`,"  return (");const h=f.length,g=[...f,...d.lines,"  );","}",""].join(`
`);l.push({path:`src/components/${c}.tsx`,content:g,changedLines:new Set([...d.marks].map(_=>_+h)),lang:"tsx"})}const a=r.map(o=>o.dataset.file),s=[...a.map(o=>`import { ${o} } from "./components/${o}";`),"","export default function App() {","  return (","    <>",...a.filter(o=>o==="Header").map(o=>`      <${o} />`),'      <main id="main" tabIndex={-1}>',...a.filter(o=>!pg.has(o)).map(o=>`        <${o} />`),"      </main>",...a.filter(o=>o==="Footer").map(o=>`      <${o} />`),"    </>","  );","}",""].join(`
`);return[{path:"index.html",content:dg,changedLines:new Set,lang:"html"},{path:"package.json",content:cg,changedLines:new Set,lang:"json"},{path:"src/main.tsx",content:ug,changedLines:new Set,lang:"tsx"},{path:"src/App.tsx",content:s,changedLines:new Set,lang:"tsx"},{path:"src/styles.css",content:tg,changedLines:new Set,lang:"css"},...l]}function gc({path:e}){return e.endsWith(".json")?i.jsx(cm,{size:14,className:"fi fi--json"}):e.endsWith(".css")?i.jsx(dm,{size:14,className:"fi fi--css"}):e.endsWith(".html")?i.jsx(Cr,{size:14,className:"fi fi--html"}):i.jsx(Cr,{size:14,className:"fi fi--tsx"})}function fg({sync:e}){const{rootRef:n}=Oe(),{doc:t}=et(),r=Rr(),l=w.useMemo(()=>n.current?hg(n.current,t,new Set((e==null?void 0:e.ids)??[])):[],[n,t,e]),a=l.filter(S=>S.changedLines.size>0),[s,o]=w.useState(()=>{var S;return(e==null?void 0:e.focusFile)??((S=a[0])==null?void 0:S.path)??"src/components/Hero.tsx"}),[c,d]=w.useState(()=>[...new Set([s,"src/App.tsx"])]),[f,h]=w.useState(!0),[g,_]=w.useState(!0),[v,b]=w.useState(!0),j=w.useRef(null),p=l.find(S=>S.path===s)??l[0],u=S=>{o(S),d(E=>E.includes(S)?E:[...E,S])};if(w.useEffect(()=>{const S=p&&[...p.changedLines].sort((P,H)=>P-H)[0],E=j.current;if(E)if(S){const P=E.querySelector(`[data-line="${S}"]`);P&&E.scrollTo({top:Math.max(0,P.offsetTop-120),behavior:"smooth"})}else E.scrollTo({top:0})},[p]),!p)return null;const m=p.content.split(`
`),k=l.filter(S=>!S.path.startsWith("src/")),N=l.filter(S=>S.path.startsWith("src/")&&!S.path.startsWith("src/components/")),y=l.filter(S=>S.path.startsWith("src/components/")),C=S=>{var E;return(E=l.find(P=>P.path===S))==null?void 0:E.changedLines.size},$=(S,E)=>i.jsxs("button",{className:`tree__row ${s===S.path?"is-active":""}`,style:{paddingLeft:10+E*14},onClick:()=>u(S.path),children:[i.jsx(gc,{path:S.path}),i.jsx("span",{children:S.path.split("/").pop()}),S.changedLines.size>0&&i.jsx("em",{className:"tree__badge",children:"M"})]},S.path);return i.jsxs("div",{className:"code",children:[i.jsxs("aside",{className:"tree",children:[i.jsx("div",{className:"tree__head",children:"Files"}),i.jsxs("button",{className:"tree__row",onClick:()=>h(S=>!S),children:[f?i.jsx(Sr,{size:12}):i.jsx(kt,{size:12}),f?i.jsx(hc,{size:14,className:"fi fi--dir"}):i.jsx(fc,{size:14,className:"fi fi--dir"}),i.jsx("span",{children:"src"})]}),f&&i.jsxs(i.Fragment,{children:[i.jsxs("button",{className:"tree__row",style:{paddingLeft:24},onClick:()=>_(S=>!S),children:[g?i.jsx(Sr,{size:12}):i.jsx(kt,{size:12}),g?i.jsx(hc,{size:14,className:"fi fi--dir"}):i.jsx(fc,{size:14,className:"fi fi--dir"}),i.jsx("span",{children:"components"}),y.some(S=>S.changedLines.size)&&i.jsx("i",{className:"tree__dot"})]}),g&&y.map(S=>$(S,3)),N.map(S=>$(S,2))]}),k.map(S=>$(S,0))]}),i.jsxs("div",{className:"code__main",children:[i.jsx("div",{className:"code__tabs",children:c.map(S=>i.jsxs("div",{className:`code__tab ${S===s?"is-active":""}`,onClick:()=>o(S),children:[i.jsx(gc,{path:S}),i.jsx("span",{children:S.split("/").pop()}),C(S)?i.jsx("i",{className:"tree__dot"}):null,c.length>1&&i.jsx("button",{className:"code__tab-x","aria-label":"Close tab",onClick:E=>{E.stopPropagation();const P=c.filter(H=>H!==S);d(P),S===s&&o(P[P.length-1])},children:i.jsx(Qi,{size:12})})]},S))}),e&&v&&a.length>0&&i.jsxs("div",{className:"code__banner",children:[i.jsx(Er,{size:14}),i.jsxs("span",{children:["Synced ",i.jsx("b",{children:e.ids.length})," visual ",e.ids.length===1?"edit":"edits"," into"," ",a.map((S,E)=>i.jsxs("button",{onClick:()=>u(S.path),children:[S.path.split("/").pop(),E<a.length-1?", ":""]},S.path))]}),i.jsx("button",{className:"icon-btn","aria-label":"Dismiss",onClick:()=>b(!1),children:i.jsx(Qi,{size:13})})]}),i.jsxs("div",{className:"code__crumbs",children:[p.path.split("/").map((S,E,P)=>i.jsxs("span",{children:[S,E<P.length-1&&i.jsx(kt,{size:11})]},E)),i.jsxs("button",{className:"code__copy",onClick:()=>{var S;(S=navigator.clipboard)==null||S.writeText(p.content),r("Copied to clipboard")},children:[i.jsx(Qs,{size:12})," Copy"]})]}),i.jsx("div",{className:"code__editor",ref:j,children:i.jsx("div",{className:"code__lines",children:m.map((S,E)=>{const P=E+1,H=p.changedLines.has(P);return i.jsxs("div",{className:`code__line ${H?"is-changed":""}`,"data-line":P,children:[i.jsx("span",{className:"code__ln",children:P}),i.jsxs("span",{className:"code__src",children:[ip(S,p.lang).map((U,F)=>U.c?i.jsx("span",{className:`tk-${U.c}`,children:U.t},F):U.t),S===""&&"​"]})]},E)})})})]})]})}const Ys=[{name:"Sky",hex:"#87CEEB"},{name:"Lime",hex:"#D7FF28"},{name:"Coral",hex:"#FF6E6C"},{name:"Blue",hex:"#0EA5E9"},{name:"Orange",hex:"#F16122"},{name:"Purple",hex:"#B79CFF"},{name:"Turquoise",hex:"#40E0D0"},{name:"Yellow",hex:"#FFD23F"},{name:"Black",hex:"#000000"},{name:"White",hex:"#FFFFFF"}],Wl=[{label:"Archivo Black",value:"'Archivo Black', sans-serif"},{label:"Space Grotesk",value:"'Space Grotesk', sans-serif"},{label:"JetBrains Mono",value:"'JetBrains Mono', monospace"},{label:"Inter",value:"'Inter', sans-serif"},{label:"Courier Prime",value:"'Courier Prime', monospace"},{label:"DM Serif Display",value:"'DM Serif Display', serif"}];function ar(e){const n=e.match(/rgba?\(([^)]+)\)/);if(!n)return e.startsWith("#")?{hex:e.toUpperCase(),alpha:1}:{hex:"#000000",alpha:e==="transparent"?0:1};const t=n[1].split(/[\s,/]+/).filter(Boolean).map(Number),[r,l,a]=t,s=t.length>3?t[3]:1,o=c=>Math.round(c).toString(16).padStart(2,"0");return{hex:`#${o(r)}${o(l)}${o(a)}`.toUpperCase(),alpha:s}}function _t(e){let n=e.trim().replace(/^#/,"");return/^[0-9a-f]{3}$/i.test(n)&&(n=n.split("").map(t=>t+t).join("")),/^[0-9a-f]{6}$/i.test(n)?`#${n.toUpperCase()}`:null}function xc(e){const n=_t(e);if(!n)return"#000000";const t=[1,3,5].map(l=>{const a=parseInt(n.slice(l,l+2),16)/255;return a<=.03928?a/12.92:((a+.055)/1.055)**2.4});return .2126*t[0]+.7152*t[1]+.0722*t[2]>.4?"#000000":"#FFFFFF"}function mg(e){var r,l;if(!e||e==="none")return{on:!1,x:6,y:6,blur:0,color:"#000000"};const n=((r=e.match(/rgba?\([^)]+\)|#[0-9a-f]{3,8}/i))==null?void 0:r[0])??"#000",t=((l=e.replace(n,"").match(/-?\d+(\.\d+)?px/g))==null?void 0:l.map(a=>parseFloat(a)))??[0,0,0];return{on:!0,x:t[0]??0,y:t[1]??0,blur:t[2]??0,color:ar(n).hex}}function gg(e){return e.on?`${e.x}px ${e.y}px ${e.blur}px ${e.color}`:"none"}function xg(e){const n=getComputedStyle(e),t=e.getBoundingClientRect(),r=parseFloat(n.fontSize)||16,l=n.lineHeight==="normal"?"Auto":(parseFloat(n.lineHeight)/r).toFixed(2).replace(/\.?0+$/,""),a=n.fontFamily.split(",")[0].replace(/["']/g,"").trim();return{kind:e.dataset.kind??"container",label:e.dataset.label??"",tag:e.tagName.toLowerCase(),width:Math.round(t.width),height:Math.round(t.height),display:n.display,flexDirection:n.flexDirection,gap:parseFloat(n.columnGap)||0,alignItems:n.alignItems,justifyContent:n.justifyContent,padX:parseFloat(n.paddingLeft)||0,padY:parseFloat(n.paddingTop)||0,rotate:n.rotate&&n.rotate!=="none"?parseFloat(n.rotate):0,opacity:Math.round(parseFloat(n.opacity)*100),radius:parseFloat(n.borderTopLeftRadius)||0,fill:ar(n.backgroundColor),color:ar(n.color).hex,strokeWidth:n.borderTopStyle==="none"?0:parseFloat(n.borderTopWidth)||0,strokeColor:ar(n.borderTopColor).hex,shadow:mg(n.boxShadow),fontFamily:a,fontSize:Math.round(r),fontWeight:parseInt(n.fontWeight,10)||400,lineHeight:l,letterSpacing:Math.round((parseFloat(n.letterSpacing)||0)/r*1e3)/10,textAlign:n.textAlign==="start"?"left":n.textAlign,textTransform:n.textTransform,href:e.getAttribute("href"),target:e.getAttribute("target"),text:e.textContent??"",isLeafText:Wa(e)}}function Wa(e){const n=e.dataset.kind;return(n==="text"||n==="heading"||n==="link"||n==="button")&&e.children.length===0}function sp(e){const{getEl:n,device:t}=Oe(),{doc:r}=et(),[l,a]=w.useState(null);return w.useLayoutEffect(()=>{const s=n(e);if(!s){a(null);return}const o=()=>a(xg(s));o();const c=setTimeout(o,700),d=new ResizeObserver(o);return d.observe(s),s.addEventListener("transitionend",o),()=>{clearTimeout(c),d.disconnect(),s.removeEventListener("transitionend",o)}},[e,r,t,n]),l}function Fr(e){const n=e.dataset.kind;if((n==="text"||n==="heading")&&e.children.length===0){const t=e.innerText.replace(/\s+/g," ").trim();if(t)return t.length>28?`${t.slice(0,28)}…`:t}return e.dataset.label??n??"Layer"}function Ua(e){var t;const n=[];for(const r of Array.from(e.children)){const l=r;(t=l.dataset)!=null&&t.vid?n.push({id:l.dataset.vid,kind:l.dataset.kind,name:Fr(l),hidden:l.style.display==="none",children:Ua(l)}):l instanceof SVGElement||n.push(...Ua(l))}return n}function yg(e){var r;const n=[];let t=e;for(;t&&((r=t.dataset)!=null&&r.vid&&n.unshift(t),t=t.parentElement,!(t!=null&&t.classList.contains("site"))););return n}const Mr={section:"Section",container:"Container",heading:"Heading",text:"Text",button:"Button",link:"Link",icon:"Icon",graphic:"Graphic"},op=["heading","text","button","link"];function x({id:e,htmlId:n,kind:t,as:r="div",label:l,file:a,className:s,style:o,href:c,target:d,children:f,...h}){const{doc:g}=et(),_=yn(),{editingId:v,animatingId:b,stopEdit:j}=fl(),p=g[e],u=v===e,m=w.useRef(null),k=w.useRef(null);let N=(p==null?void 0:p.text)??f;u?(k.current===null&&(k.current=N),N=k.current):k.current=null,w.useLayoutEffect(()=>{const E=m.current;if(!u||!E)return;E.focus({preventScroll:!0});const P=document.createRange();P.selectNodeContents(E);const H=window.getSelection();H==null||H.removeAllRanges(),H==null||H.addRange(P)},[u]);const y={...o,...p==null?void 0:p.style};p!=null&&p.hidden&&(y.display="none"),b===e&&(y.transition="all 620ms cubic-bezier(.2,.8,.2,1)");const C={...h,id:n,ref:m,key:u?"editing":"view",className:s,style:y,"data-vid":e,"data-kind":t,"data-label":l,"data-file":a},$=(p==null?void 0:p.href)??c;$!==void 0&&(C.href=$);const S=(p==null?void 0:p.target)??d;return S&&(C.target=S,S==="_blank"&&(C.rel="noreferrer")),u&&Object.assign(C,{contentEditable:"plaintext-only",suppressContentEditableWarning:!0,spellCheck:!1,onInput:E=>_.setText(e,E.currentTarget.textContent??"",`text:${e}`),onBlur:()=>j(),onKeyDown:E=>{(E.key==="Enter"&&!E.shiftKey||E.key==="Escape")&&(E.preventDefault(),E.currentTarget.blur())},onPaste:E=>{E.preventDefault(),document.execCommand("insertText",!1,E.clipboardData.getData("text/plain"))}}),w.createElement(r,C,N)}function Xs({kind:e,size:n=14}){const t={size:n,strokeWidth:1.9};switch(e){case"section":return i.jsx(xm,{...t});case"heading":return i.jsx(hm,{...t});case"text":return i.jsx(Xu,{...t});case"button":return i.jsx(Mm,{...t});case"link":return i.jsx(Ks,{...t});case"icon":return i.jsx(Am,{...t});case"graphic":return i.jsx(mm,{...t});default:return i.jsx(um,{...t})}}function vg(){const{rootRef:e,selectedId:n,hoverId:t,select:r,setHover:l,getEl:a,viewportRef:s}=Oe(),{doc:o}=et(),[c,d]=w.useState([]),[f,h]=w.useState(()=>new Set(["hero","hero.layout","hero.copy"])),g=w.useRef(null);w.useLayoutEffect(()=>{e.current&&d(Ua(e.current))},[o,e]),w.useEffect(()=>{var p,u;const v=a(n);if(!v)return;const b=[];let j=(p=v.parentElement)==null?void 0:p.closest("[data-vid]");for(;j;)b.push(j.dataset.vid),j=(u=j.parentElement)==null?void 0:u.closest("[data-vid]");h(m=>b.every(k=>m.has(k))?m:new Set([...m,...b])),requestAnimationFrame(()=>{var m,k;(k=(m=g.current)==null?void 0:m.querySelector(`[data-row="${CSS.escape(n)}"]`))==null||k.scrollIntoView({block:"nearest"})})},[n,a]);const _=v=>{const b=a(v),j=s.current;if(!b||!j)return;const p=b.getBoundingClientRect(),u=j.getBoundingClientRect();(p.top<u.top+40||p.bottom>u.bottom-40)&&j.scrollTo({top:j.scrollTop+p.top-u.top-120,behavior:"smooth"})};return i.jsxs("div",{className:"layers",ref:g,onPointerLeave:()=>l(null),children:[i.jsxs("div",{className:"layers__page",children:[i.jsx(kt,{size:12,className:"is-open"}),i.jsx("span",{children:"Home"}),i.jsx("em",{children:"/"})]}),c.map(v=>i.jsx(cp,{node:v,depth:0,open:f,setOpen:h,selectedId:n,hoverId:t,onSelect:b=>{r(b),_(b)},onHover:l},v.id))]})}function cp({node:e,depth:n,open:t,setOpen:r,selectedId:l,hoverId:a,onSelect:s,onHover:o}){const c=yn(),d=t.has(e.id),f=e.children.length>0,h=l===e.id;return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:`layer ${h?"is-selected":""} ${a===e.id&&!h?"is-hover":""} ${e.hidden?"is-hidden":""} layer--${e.kind}`,style:{paddingLeft:8+n*14},"data-row":e.id,onPointerEnter:()=>o(e.id),onClick:()=>s(e.id),children:[i.jsx("button",{className:`layer__caret ${f?"":"is-empty"} ${d?"is-open":""}`,onClick:g=>{g.stopPropagation(),r(_=>{const v=new Set(_);return v.has(e.id)?v.delete(e.id):v.add(e.id),v})},tabIndex:-1,"aria-label":d?"Collapse":"Expand",children:f&&i.jsx(kt,{size:12})}),i.jsx("span",{className:"layer__icon",children:i.jsx(Xs,{kind:e.kind,size:13})}),i.jsx("span",{className:"layer__name",children:e.name}),i.jsx("button",{className:"layer__eye","aria-label":e.hidden?"Show":"Hide",onClick:g=>{g.stopPropagation(),c.setHidden(e.id,!e.hidden)},children:e.hidden?i.jsx(qs,{size:13}):i.jsx(hl,{size:13})})]}),f&&d&&e.children.map(g=>i.jsx(cp,{node:g,depth:n+1,open:t,setOpen:r,selectedId:l,hoverId:a,onSelect:s,onHover:o},g.id))]})}const qi=(e,n=22)=>e===void 0?void 0:e.length>n?`${e.slice(0,n)}…`:e;function kg(e,n,t){var a,s;const r=[...new Set([...Object.keys(e),...Object.keys(n)])],l=[];for(const o of r){const c=e[o]??{},d=n[o]??{};if(JSON.stringify(c)===JSON.stringify(d))continue;const f=t(o);if(!f)continue;const h=[],g=new Set([...Object.keys(c.style??{}),...Object.keys(d.style??{})]);for(const v of g){const b=(a=c.style)==null?void 0:a[v],j=(s=d.style)==null?void 0:s[v];b!==j&&h.push({key:v,from:b,to:j??"default"})}c.text!==d.text&&h.push({key:"text",from:qi(c.text),to:`“${qi(d.text??"original")??""}”`}),c.href!==d.href&&h.push({key:"href",from:c.href,to:d.href??"original"}),c.target!==d.target&&h.push({key:"target",from:c.target,to:d.target??"original"}),!!c.hidden!=!!d.hidden&&h.push({key:"visible",to:d.hidden?"false":"true"});const _=f.closest("[data-file]");l.push({id:o,name:Fr(f),kind:f.dataset.kind??"container",file:`src/components/${(_==null?void 0:_.dataset.file)??"App"}.tsx`,props:h,code:d.hidden?`{/* “${f.dataset.label??o}” hidden */}`:og(f,n)})}return l}function _g({changes:e,onDone:n}){const r=w.useMemo(()=>{var k;return(k=window.matchMedia)==null?void 0:k.call(window,"(prefers-reduced-motion: reduce)").matches},[])?.35:1,l=e.length,a=Math.max(420,Math.min(760,3e3/l))*r,s=900*r,o=1700*r,c=o+l*a,d=c+650*r,f=d+750*r,[h,g]=w.useState(0),_=w.useRef(!1),v=w.useRef(null);w.useEffect(()=>{const k=performance.now();let N=0;const y=C=>{const $=C-k;if(g($),$>=f){_.current||(_.current=!0,n());return}N=requestAnimationFrame(y)};return N=requestAnimationFrame(y),()=>cancelAnimationFrame(N)},[f,n]),w.useEffect(()=>{const k=v.current;k&&(k.scrollTop=k.scrollHeight)});const b=[...new Set(e.map(k=>k.file))],j=h<o?-1:Math.min(l-1,Math.floor((h-o)/a)),p=j>=0?e[j].file:b[0],u=Math.min(1,h/d),m=[{label:`Collecting ${l} visual ${l===1?"edit":"edits"}`,at:0,end:s},{label:`Mapping to ${b.length} ${b.length===1?"component":"components"}`,at:s,end:o},{label:"Writing JSX & styles",at:o,end:c},{label:"Formatting & hot reload",at:c,end:d}];return i.jsxs("div",{className:"xf",role:"dialog","aria-modal":"true","aria-label":"Converting visual edits to code",children:[i.jsx("div",{className:"xf__backdrop"}),i.jsxs("div",{className:`xf__card ${h>=d?"is-done":""}`,children:[i.jsx("div",{className:"xf__glow"}),i.jsxs("header",{className:"xf__head",children:[i.jsx("span",{className:"xf__bolt",children:i.jsx(Hm,{size:18,fill:"currentColor"})}),i.jsxs("div",{children:[i.jsx("h3",{children:h>=d?"Your code is in sync":"Turning visual edits into code"}),i.jsx("p",{children:"Live edits from Visual Design are being written back to your React components."})]}),i.jsx("button",{className:"xf__skip",onClick:n,children:"Skip"})]}),i.jsxs("div",{className:"xf__body",children:[i.jsxs("div",{className:"xf__edits",children:[i.jsx("div",{className:"xf__col-title",children:"Visual edits"}),e.slice(0,7).map((k,N)=>{const y=h>N*90*r,C=h>s+N*60*r,$=j>N||h>=c,S=j===N&&h<c;return i.jsxs("div",{className:`xf__chip ${y?"is-in":""} ${S?"is-writing":""} ${$?"is-written":""}`,children:[i.jsx("span",{className:"xf__chip-icon",children:i.jsx(Xs,{kind:k.kind,size:13})}),i.jsxs("div",{className:"xf__chip-body",children:[i.jsxs("strong",{children:[k.name,i.jsx("em",{children:Mr[k.kind]})]}),i.jsxs("span",{className:"xf__props",children:[k.props.slice(0,3).map(E=>i.jsxs("span",{children:[E.key,": ",E.from&&i.jsx("s",{children:qi(E.from,10)})," ",qi(E.to,16)]},E.key)),k.props.length>3&&i.jsxs("span",{children:["+",k.props.length-3," more"]})]}),i.jsxs("span",{className:`xf__file ${C?"is-in":""}`,children:[i.jsx(Cr,{size:11})," ",k.file.split("/").pop()]})]}),i.jsx("span",{className:"xf__chip-state",children:$?i.jsx(Xn,{size:13,strokeWidth:3}):S?i.jsx(zr,{size:13,className:"spin"}):null})]},k.id)}),l>7&&i.jsxs("div",{className:"xf__more",children:["+",l-7," more edits"]})]}),i.jsxs("div",{className:"xf__beam","data-active":h>s&&h<c,children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]}),i.jsxs("div",{className:"xf__code",children:[i.jsxs("div",{className:"xf__code-tab",children:[i.jsx(Cr,{size:12}),p]}),i.jsxs("div",{className:"xf__code-body",ref:v,children:[e.map((k,N)=>{if(j<N)return null;const y=N===j&&h<c,C=y?Math.min(1,(h-o-N*a)/(a*.85)):1,$=k.code.slice(0,Math.ceil(k.code.length*C));return i.jsxs("div",{className:"xf__block",children:[i.jsx("div",{className:"xf__cm",children:`// ${k.name} · ${k.file.split("/").pop()}`}),i.jsxs("div",{className:"xf__ln",children:[ip($,"tsx").map((S,E)=>i.jsx("span",{className:S.c?`tk-${S.c}`:void 0,children:S.t},E)),y&&i.jsx("i",{className:"xf__caret"})]})]},k.id)}),j<0&&i.jsx("div",{className:"xf__cm xf__wait",children:h<s?"// reading canvas…":"// resolving components…"})]})]})]}),i.jsxs("footer",{className:"xf__foot",children:[i.jsx("ol",{className:"xf__steps",children:m.map(k=>{const N=h>=k.end?"done":h>=k.at?"run":"wait";return i.jsxs("li",{className:`is-${N}`,children:[i.jsx("span",{children:N==="done"?i.jsx(Xn,{size:11,strokeWidth:3}):N==="run"?i.jsx(zr,{size:11,className:"spin"}):null}),k.label]},k.label)})}),i.jsx("div",{className:"xf__bar",children:i.jsx("i",{style:{transform:`scaleX(${u})`}})})]})]})]})}const Ie={name:"Alfred Chang",role:"Staff Product Manager",company:"Shutterfly",email:"Alfred_chang@outlook.com",linkedinUrl:"https://www.linkedin.com/in/alfred-karken-chang/",linkedinHandle:"in/alfred-karken-chang",resumeUrl:null,prototypeUrl:"/prototype/index.html"},dp=[{id:"journey",label:"My journey"},{id:"beyond-work",label:"Beyond work"},{id:"how-i-think",label:"How I think"},{id:"work",label:"Work"},{id:"contact",label:"Contact"}],ke={hello:["Hi, I’m","Alfred."],highlight:"Alfred.",lead:"Staff Product Manager driving AI-powered product growth and platform modernization for Creation, Photos.",wins:[{value:"$20M",unit:"ARR",label:"AI commerce",icon:"chat",accent:"lime",detail:"Conversational AI that helps customers find products, get answers, and manage their orders."},{value:"$40M",unit:"ARR",label:"AI photo augmentation",icon:"wand",accent:"sky",detail:"Integrated Google Gemini tools for photo expansion, filters, and magic eraser."},{value:"$146M",unit:"ARR",label:"Replatforming",icon:"blocks",accent:"coral",detail:"Rebuilt a 20-year-old platform that drives $2B in revenue. A/B testing at launch showed a 13.9% revenue lift."}],photo:{alt:"Alfred Chang, smiling, wearing glasses and a dark patterned shirt",width:640,height:800},current:"Currently building at Shutterfly",tagline:"Problem-first. Prioritize. Built for impact.",primaryCta:{label:"Explore my journey",href:"#journey"},secondaryCta:{label:"See what I’m building",href:"#work"}},wt={heading:"Before the solution, find the real problem.",body:["A feature request is a starting point—not a diagnosis. I want to understand what someone is trying to accomplish, where the experience breaks down, and why that friction exists before deciding what to build.","Problem-first doesn’t mean slow. It means reducing the chance that we move quickly in the wrong direction. I use prototypes and experiments to test the framing as well as the solution."],lens:[{region:"person",question:"What is the person trying to do?",gist:"The outcome behind the request.",detail:"A request often arrives already shaped as a solution. I try to name the outcome underneath it—what “done” looks like for the person—so we can judge any solution against that."},{region:"experience",question:"Where does the experience break?",gist:"The exact step where people struggle.",detail:"I look for the moment people hesitate, drop off, or work around the product. Funnel data shows where it happens; talking with customers and watching real usage helps explain why."},{region:"system",question:"What is causing it across the system?",gist:"The cause, not just the symptom.",detail:"The visible problem is often produced somewhere else—a platform constraint, a data gap, a handoff between teams, or a policy. Fixing only the surface tends to bring the problem back."},{region:"test",question:"What is the smallest useful thing we can test?",gist:"A fast, honest check before a big bet.",detail:"Before committing a roadmap, I look for the cheapest way to learn whether the framing is right—an experiment, a prototype, or a narrow release—and decide up front what result would change my mind."}],principles:[{label:"Evidence",text:"Evidence tells me what is happening.",accent:"sky"},{label:"Judgment",text:"Judgment helps me choose what to do next.",accent:"lime"},{label:"Building",text:"Building helps me find out whether I’m right.",accent:"coral"}]},sr={heading:"The path that shaped my product judgment.",intro:"7+ years of identifying problems.",milestones:[{id:"paradox",company:"Paradox AI",short:"Paradox AI",accent:"sky",roles:[{title:"Product Management Intern",short:"Intern",start:"2019-03",end:"2019-09",highlights:[]}],context:"Paradox builds an AI assistant for recruiters. In 2019, NLP was the main technology behind conversational AI.",theme:"AI assistant for Recruiters, before LLM",workedOn:"Decision-mapping trees and reinforcement learning for the assistant, and client onboarding for McHire, McDonald’s AI hiring assistant, so hiring managers could ask any HR-related question.",perspective:"I fell in love with building. AI is cool.",accomplishments:["Enabled 13k McDonald’s locations to hire with an AI solution, and onboarded those users with AI too."]},{id:"benq",company:"BenQ America Corp.",short:"BenQ",accent:"purple",roles:[{title:"Associate Product Manager – Google Jamboard",short:"Associate PM",start:"2019-09",end:"2020-09",highlights:["Managed a high-profile partnership product with Google, contributing to $5M in hardware revenue and more than $1M in ARR.","Executed go-to-market and localization strategy for 9 new products in the North American market."]}],context:"BenQ’s B2B team partners with Google’s Jamboard to provide a digital whiteboard experience for corporate offices.",theme:"Google Jamboard - Meeting room solutions",workedOn:"The Jamboard partnership product with Google, plus go-to-market and localization for 9 new products in North America.",perspective:"Gathering Feedback through sales, fulfillment and support channels.",accomplishments:["Executed the go-to-market and localization strategy for 9 new product launches in North America, opening new segments of the business."]},{id:"eyesbox",company:"Eyesbox AI",short:"Eyesbox AI",accent:"coral",roles:[{title:"Founder/CEO",short:"Founder",start:"2020-03",end:"2021-08",highlights:["Took a smart IoT camera for refrigerators from concept to a launched mobile app on the Apple App Store and Google Play.","Led a cross-functional team of 8 engineers across mobile, hardware, and AI.","Pitched to more than 50 investors and secured a $10,000 grant."]}],context:"Eyesbox AI built a smart IoT camera for refrigerators, designed to reduce food waste by improving everyday refrigerator use.",theme:"Smart Camera for Refrigerator",workedOn:"Founded the company and took it from concept to a launched app across hardware, AI, and mobile.",perspective:"Startups are hardwork, talent makes or breaks your journey.",accomplishments:["Led and mentored a team of 8 engineers across app development, hardware, and AI image recognition."]},{id:"smartrent",company:"SmartRent",short:"SmartRent",accent:"turquoise",roles:[{title:"Associate Product Manager II – Self-guided tour",short:"Associate PM II",start:"2021-08",end:"2022-12",highlights:["Drove a 400% increase in user engagement for the Self-Guided Tour product, scaling it to more than 1 million users within 6 months.","Generated $1.5M in new revenue with a scalable API service integrated with key industry platforms, adding 100,000+ new properties in six months.","Turned features built for rapid growth into scalable solutions, resulting in $500,000 in monthly operational savings."]}],context:"SmartRent provides smart home automation, enabling remote control of IoT devices in homes and buildings.",theme:"Self-guided Tour, Smart Home as a Service Platform",workedOn:"The Self-Guided Tour product: new-market adaptation features, an API service for industry platforms, and hardening growth-era features.",perspective:"Good product solves a problem. Product led growth happens when the solution you provided is wanted by others.",accomplishments:["Grew from 250k to 1 million users within 6 months.","Launched an API-as-a-service business yielding $1.5M in ARR."]},{id:"brightfi",company:"BrightFi",short:"BrightFi",accent:"yellow",roles:[{title:"Founding Product Manager",short:"1st PM Hired",start:"2022-12",end:"2023-03",highlights:["Grew product adoption by 300% with a strategy focused on product-market fit for an Employee Retention Credit (ERC) tax product.","Identified a critical usability bottleneck in form intake through a targeted product experiment; the solution was projected to accelerate customer adoption by 4 weeks.","Partnered daily with the COO and CRO to keep product vision and execution aligned with business and revenue goals."]}],context:"BrightFi provides fintech solutions to community banks and credit unions.",theme:"BaaS for Community bank and Credit union",workedOn:"Product strategy for an Employee Retention Credit (ERC) tax product, working daily with the COO and CRO.",perspective:"How to do more with less? By solving the right problems.",accomplishments:["300% growth in product adoption and lead generation."]},{id:"shutterfly",company:"Shutterfly",short:"Shutterfly",accent:"orange",roles:[{title:"Staff Product Manager - Creation, Photo, AI Commerce",short:"Staff PM",start:"2026-02",end:null,highlights:["Built and released specialized AI agents for shopping personalization, promotions, help, and order management in the conversational chat experience, delivering $20M in incremental ARR with responsible AI guardrails developed alongside Security and Legal.","Launched AI photo augmentation and editing (Google Nano Banana) that enables prints of AI-generated products: a $40M ARR increase and a 4% improvement in cart conversion.","Grew an in-house AI product team of 2 PMs, 2 principal engineers, and 3 engineers across Desktop, mWeb, iOS, and Android.","Improved CSAT by 21% through user-centric AI solutions across the design ecosystem.","Built internal AI agents for release notes and design-to-story breakdowns, accelerating feature-to-release timelines by 10 days for quarter-long initiatives.","Partnered with BCG X on the 2026–2027 product roadmap and AI product strategy."]},{title:"Senior Product Manager II - Creation, Photo",short:"Senior PM II",start:"2023-08",end:"2026-01",highlights:["Led the 2-year, end-to-end replatforming of core design and photo tooling: 400+ strategic initiatives and $400M in incremental ARR.","Aligned a cross-functional organization of 80+ people across design, engineering, and data science on a multi-year replatforming of a $2B platform.","Seeded and executed the roadmap for an AI-powered photobook creator: a $4M ARR increase and creation time reduced from hours to seconds.","Architected a new data-tracking funnel with 12 A/B-testable user touchpoints.","Mentored a team of 4 product managers."]}],context:"Shutterfly brings memories to life by printing photos on physical products. I’m the product lead for Shutterfly’s design tools.",theme:"CREATION tool to help customize anything with your photo",workedOn:"A two-year replatforming of core design and photo tooling, an AI photobook creator, and now AI shopping agents and photo editing across Desktop, mWeb, iOS, and Android.",perspective:"AB testing streamlines decision making. AI can do a lot, builder needs to spend more time understanding the problems.",accomplishments:["Replatformed a $2B business across 400 initiatives: a 10.9% AOV lift and a 2.03% total sales lift, adding $146M in revenue.","Launched an AI commerce service for our users: $20M in incremental ARR."]}]},Ki={heading:"Where the thinking becomes tangible.",cases:[{id:"creation",letter:"A",kicker:"Shutterfly · 2023 – present",title:"Creation experiences at Shutterfly",summary:"Helping customers turn their photos into books, prints, and gifts they’re proud of.",accent:"lime",problem:"People arrive with a camera roll and an occasion. Getting from those photos to a finished book or gift could take hours of placing, cropping, and arranging.",role:"Senior Product Manager II, then Staff Product Manager and product lead for Shutterfly’s design tools.",complexity:"A 2-year replatforming of core design and photo tooling on a $2B platform: 400+ initiatives, with an 80+ person organization across design, engineering, and data science.",changed:["$400M in incremental ARR from the replatforming.","AI photobook creator: creation time from hours to seconds, and a $4M ARR increase.","A new tracking funnel with 12 A/B-testable touchpoints to guide decisions."],shows:"Automation should take on the tedious work without taking creative decisions away from the customer, and a platform rebuild earns its cost by making improvements like that easier to ship.",tags:["Customer control + automation","Creation UX","Platform modernization","Experimentation","Cross-functional alignment"]},{id:"ai",letter:"B",kicker:"Shutterfly · 2026 – present",title:"AI customer experiences",summary:"Conversational shopping help and AI photo enhancement across Desktop, mWeb, iOS, and Android.",accent:"sky",problem:"Customers want help finding the right product, deal, or order, and they want their photos to look their best. AI can help with both, but only if it is relevant, accurate, and safe.",role:"Staff Product Manager leading the AI Product team, which I grew to 2 PMs, 2 principal engineers, and 3 engineers.",complexity:"Specialized agents for shopping personalization, promotions, help, and order management, orchestrated with Amazon Bedrock, across four surfaces, with guardrails defined alongside Security and Legal.",changed:["$20M in incremental ARR from the conversational chat experience.","AI photo augmentation and editing: a $40M ARR increase and a 4% lift in cart conversion.","CSAT up 21% through user-centric AI across the design ecosystem."],shows:"A capability becomes customer value when the experience sets the right expectations and earns trust. Guardrails and quality after the demo are product work, not a launch checklist.",tags:["Capability → customer value","Expectations + trust","Responsible AI","Cross-surface"]}],builder:{letter:"C",kicker:"Founder → hands-on builder",title:"I like to make ideas tangible.",then:{label:"Then · 2020 – 2021",title:"Founder/CEO, Eyesbox AI",text:"Took a smart refrigerator camera from concept to a launched app on the App Store and Google Play, across hardware, AI, and mobile, with a team of 8 engineers. Pitched 50+ investors and secured a $10,000 grant."},atWork:{label:"At work · now",title:"Prototypes and internal agents",text:"I use AI-assisted prototyping to align leadership on high-fidelity experiences and give engineering precise requirements. I also built internal AI agents, one that drafts release notes from Jira and one that turns designs into epics and stories."},now:{label:"Now · personal projects",title:"Building in my own time",text:"Outside work, I design and build small web and mobile products to keep my instincts sharp.",projects:[{name:"OurFamilyBook",text:"Invite the people who love your child to answer a few questions; their words and photos become a book your family can keep.",url:"https://www.ourfamilybook.org"},{name:"Rumbly",text:"An AI kitchen companion that turns recipes, videos, and receipts into meal plans and a smart pantry.",url:"https://rumbly.ai"}],tools:["React Native","Supabase","Stripe","Claude Code"]},shows:"Building things myself keeps me honest about what’s hard, and makes conversations with design and engineering more concrete."},featured:{label:"Independent product exploration",title:"Making the next edit feel as good as the first build.",description:"After building with Bolt, I explored how visual refinement could feel more direct, predictable, and trustworthy.",insight:"Precise visual changes should not feel like starting the conversation again.",steps:[{label:"Noticed friction",text:"Small visual changes, like a color, a label, or some spacing, meant describing them in words and hoping the next generation got them right."},{label:"Framed a hypothesis",text:"If people can select what they see and change it directly, refinement will feel more predictable, and the code should still reflect those edits."},{label:"Built a prototype",text:"A clickable Visual Design mode: select any element, edit text in place, adjust it in an inspector, and review how edits map back to code."},{label:"Still to validate",text:"Which changes people prefer to make directly versus by prompt, whether direct edits stay trustworthy when code is regenerated, and how it holds up on real projects."}],implemented:["Selecting any element on a live page, with breadcrumbs and a layers panel","Editing text in place and adjusting layout, fill, stroke, and shadow in an inspector","Undo/redo, plus desktop, tablet, and mobile widths","Edits saved in your browser so they survive a reload"],simulated:["The AI box in the toolbar: prompts are matched to a few keywords, and no model is called","The chat history and version entries","The “visual edits → code” view, which generates illustrative code and doesn’t write to real source files"],disclosure:"Independent concept. Not affiliated with Bolt. Some prototype behaviors are simulated."}},be={reached:4e7,goal:1e9,reachedLabel:"~40M",goalLabel:"1B",headingReached:"40 million reached.",headingGoal:"One billion in sight.",body:"Through products I’ve managed, I’ve helped reach approximately 40 million users. My long-term ambition is to help build products that reach one billion.",standard:"Scale is the ambition. Usefulness is the standard.",figureLabel:"Approximate career reach · self-reported",definition:"My own estimate across products I’ve managed over my career. Not a daily or monthly active user count, not paying customers, and people may be counted in more than one product."},Ut={heading:["Competitive + strategy","= fun for me."],badminton:{title:"Badminton",line:"Competitive badminton player."},tft:{title:"Teamfight Tactics",line:"Top 1% of players base."},pickleball:{title:"Pickleball",line:"Another reason to get on a court."},personal:"I enjoy the mix of practice, strategy, and competition—and the fact that there is always another way to get better.",alsoInto:["Writing AI guides","Medium contributor","Notion template creator","Baldur’s Gate geek"]},yc={heading:"Let’s find something worth solving.",body:"Hiring for a product role, building something ambitious, or just want to compare notes on a hard problem? I’d like to hear from you."},Ul={hash:"bolt",footerLabel:"For the Bolt.new team"},up=[["#top","Top"],...dp.map(e=>[`#${e.id}`,e.label])],vc=[{id:"v2",role:"version",title:"Hi, I’m Alfred: new hero with photo",subtitle:"Version 2 at Oct 15 12:47 AM"},{id:"u1",role:"user",text:"Make the hero punchier. Replace the intro paragraph with my top three results as stat tiles: AI commerce $20M ARR, AI photo augmentation $40M ARR, replatforming $146M ARR. Give each tile an icon and a short detail that opens on hover, or on tap on phones."},{id:"a1",role:"assistant",text:"I'll swap the intro paragraph for three stat tiles under the hello. Each gets an icon and a detail card that opens on hover, keyboard focus, or tap. The figures and details live in content.ts so you can edit them in one place.",actions:["Read src/content.ts","Read src/components/Hero.tsx","Edited src/content.ts — hero.wins","Edited src/components/Hero.tsx — stat tiles","Edited src/styles.css — tile detail cards","Ran npm run build"]},{id:"v3",role:"version",title:"Hero stat tiles with detail cards",subtitle:"Version 3 at Oct 15 2:05 AM",current:!0}],kc="bolt-visual-design:chat:v2",pp=w.createContext(null);let wg=0;const bg=(e="m")=>`${e}${Date.now().toString(36)}${(wg++).toString(36)}`;function jg({children:e}){const[n,t]=w.useState(()=>{try{const o=localStorage.getItem(kc);if(o)return JSON.parse(o)}catch{}return vc});w.useEffect(()=>{try{localStorage.setItem(kc,JSON.stringify(n.filter(o=>o.role!=="typing")))}catch{}},[n]);const r=w.useCallback(o=>{const c="id"in o&&o.id?o.id:bg(),d={...o,id:c};return t(f=>{let h=f;return d.role==="version"&&(h=f.map(g=>g.role==="version"?{...g,current:!1}:g)),[...h,d]}),c},[]),l=w.useCallback(o=>t(c=>c.filter(d=>d.id!==o)),[]),a=w.useCallback(()=>t(vc),[]),s=w.useMemo(()=>({messages:n,add:r,remove:l,reset:a}),[n,r,l,a]);return i.jsx(pp.Provider,{value:s,children:e})}function Zs(){const e=w.useContext(pp);if(!e)throw new Error("useChat outside ChatProvider");return e}function Ng(e=new Date){const n=e.toLocaleString("en-US",{month:"short"}),t=String(e.getDate()).padStart(2,"0"),r=e.toLocaleString("en-US",{hour:"numeric",minute:"2-digit"});return`${n} ${t} ${r}`}const Sg=[[/sky|light blue|baby blue/,"#87CEEB","sky blue"],[/lime|neon|green/,"#D7FF28","lime"],[/yellow|gold/,"#FFD23F","yellow"],[/orange/,"#F16122","orange"],[/coral|salmon|red|pink/,"#FF6E6C","coral"],[/purple|violet|lavender/,"#B79CFF","purple"],[/turquoise|teal|aqua|cyan/,"#40E0D0","turquoise"],[/\bblue\b/,"#0EA5E9","blue"],[/black|ink/,"#000000","black"],[/white/,"#FFFFFF","white"]];function Cg(e,n){const t=e.toLowerCase(),r=getComputedStyle(n),l=ar(r.backgroundColor).hex,a=parseFloat(r.borderTopLeftRadius)||0,s=[];let o=null;/pill|capsule|fully round|super round/.test(t)?o="999px":/sharp|square|hard corner|no radius|brutal/.test(t)?o="0px":/round|soft|curv|corner|radius/.test(t)&&(o="14px");const c=/secondary|non[- ]?cta|ghost|outline|subtle|less (prominent|loud)|tone (it )?down|quiet|neutral/.test(t),d=!c&&/\bprimary\b|\bcta\b|prominent|stand out|main action/.test(t);let f=null;for(const[b,j,p]of Sg)if(b.test(t)){f={hex:j,name:p};break}const h=t.match(/#?\b([0-9a-f]{6}|[0-9a-f]{3})\b/i);h&&_t(h[1])&&(f={hex:_t(h[1]),name:_t(h[1])});let g=null;/no shadow|flat|remove (the )?shadow/.test(t)?g="none":/(big|bigg|more|deep)\w* shadow|pop/.test(t)&&(g="10px 10px 0px #000000");let _=null;/bigger|larger|increase|grow/.test(t)&&!/shadow/.test(t)&&(_="up"),/smaller|compact|shrink|decrease/.test(t)&&(_="down");const v=!o&&!c&&!d&&!f&&!g&&!_;if(v&&(o=a>0?"999px":"14px"),o&&s.push({label:`Corners ${Math.round(a)}px → ${o==="999px"?"pill":o}`,style:{borderRadius:o}}),c||v){const j=xc(l)==="#000000"&&l!=="#87CEEB"?"#87CEEB":"#FFFFFF";s.push({label:`Fill ${l} → ${j} (secondary)`,style:{backgroundColor:j,color:"#000000",borderColor:"#000000"}}),s.push({label:"Shadow softened to 4px",style:{boxShadow:"4px 4px 0px #000000"}})}else d&&s.push({label:`Fill ${l} → #000000 (primary CTA)`,style:{backgroundColor:"#000000",color:"#FFFFFF"}});if(f&&s.push({label:`Fill → ${f.name}`,style:{backgroundColor:f.hex,color:xc(f.hex)}}),g&&s.push({label:g==="none"?"Shadow removed":"Shadow deepened to 10px",style:{boxShadow:g}}),_){const b=parseFloat(r.fontSize),j=parseFloat(r.paddingLeft),p=parseFloat(r.paddingTop),u=_==="up"?1.18:.85;s.push({label:_==="up"?"Scaled up 18%":"Made more compact",style:{fontSize:`${Math.round(b*u)}px`,paddingLeft:`${Math.round(j*u)}px`,paddingRight:`${Math.round(j*u)}px`,paddingTop:`${Math.round(p*u)}px`,paddingBottom:`${Math.round(p*u)}px`}})}return s}const Vl=e=>new Promise(n=>setTimeout(n,e));function zg(){const e=yn(),n=Zs(),{getEl:t,setAi:r,setAnimating:l,select:a}=Oe();return w.useCallback(async(s,o)=>{var _;const c=((_=t(s))==null?void 0:_.closest('[data-kind="button"]'))??t(s);if(!c)return;const d=c.dataset.vid;if(d!==s&&a(d),c.dataset.kind!=="button"){r({id:d,prompt:o,phase:"unsupported",steps:[]});return}const f=Fr(c),h=Cg(o,c);r({id:d,prompt:o,phase:"thinking",steps:h.map(v=>({label:v.label,done:!1}))}),await Vl(1100),l(d),r(v=>v&&{...v,phase:"applying"});const g=`ai:${d}:${Date.now()}`;for(let v=0;v<h.length;v++)await Vl(v===0?150:520),e.setStyle(d,h[v].style,g),r(b=>b&&{...b,steps:b.steps.map((j,p)=>p===v?{...j,done:!0}:j)});await Vl(700),l(null),r(v=>v&&{...v,phase:"done"}),n.add({role:"assistant",badge:"Visual Design · AI edit",text:`Updated the “${f}” button from your prompt “${o.trim()||"make it rounded & secondary"}”:
${h.map(v=>`• ${v.label}`).join(`
`)}
Changes are live and saved — they'll be written to code next time you open Code.`})},[e,n,t,r,l,a])}function Js(e,n,t=!0){w.useEffect(()=>{if(!t)return;const r=l=>{e.current&&!e.current.contains(l.target)&&n()};return document.addEventListener("pointerdown",r,!0),()=>document.removeEventListener("pointerdown",r,!0)},[e,n,t])}function he({prefix:e,value:n,onChange:t,min:r=-1/0,max:l=1/0,step:a=1,suffix:s,title:o,disabled:c,display:d}){const[f,h]=w.useState(null),g=j=>Math.min(l,Math.max(r,Math.round(j/a)*a)),_=j=>Math.round(j*100)/100,v=j=>{if(c)return;j.preventDefault();const p=j.clientX,u=n,m=N=>{const y=N.shiftKey?10:1;t(_(g(u+Math.round((N.clientX-p)/2)*a*y)))},k=()=>{window.removeEventListener("pointermove",m),window.removeEventListener("pointerup",k),document.body.classList.remove("is-scrubbing")};document.body.classList.add("is-scrubbing"),window.addEventListener("pointermove",m),window.addEventListener("pointerup",k)},b=()=>{if(f===null)return;const j=parseFloat(f);Number.isNaN(j)||t(_(g(j))),h(null)};return i.jsxs("label",{className:`scrub ${c?"is-disabled":""}`,title:o,children:[i.jsx("span",{className:"scrub__prefix",onPointerDown:v,children:e}),i.jsx("input",{value:f??d??String(_(n)),disabled:c,onFocus:j=>j.currentTarget.select(),onChange:j=>h(j.target.value),onBlur:b,onKeyDown:j=>{if(j.key==="Enter"&&(b(),j.currentTarget.blur()),j.key==="ArrowUp"||j.key==="ArrowDown"){j.preventDefault();const p=(j.key==="ArrowUp"?1:-1)*a*(j.shiftKey?10:1);h(null),t(_(g(n+p)))}}}),s&&i.jsx("span",{className:"scrub__suffix",children:s})]})}function Yt({value:e,options:n,onChange:t,size:r="md"}){return i.jsx("div",{className:`seg seg--${r}`,children:n.map(l=>i.jsxs("button",{className:`seg__btn ${e===l.value?"is-active":""}`,title:l.title??l.label,onClick:()=>t(l.value),type:"button",children:[l.icon,l.label&&i.jsx("span",{children:l.label})]},l.value))})}function Va({on:e,onChange:n,label:t}){return i.jsxs("button",{type:"button",className:`toggle ${e?"is-on":""}`,onClick:()=>n(!e),"aria-pressed":e,children:[i.jsx("span",{className:"toggle__track",children:i.jsx("span",{className:"toggle__thumb"})}),t&&i.jsx("span",{children:t})]})}function Gi({title:e,value:n,onChange:t,allowNone:r}){const[l,a]=w.useState(n??"");w.useEffect(()=>a(n??""),[n]);const s=(n==null?void 0:n.toUpperCase())??null,o=async()=>{const c=window.EyeDropper;if(c)try{const d=await new c().open(),f=_t(d.sRGBHex);f&&t(f)}catch{}};return i.jsxs("div",{className:"colorpanel",onPointerDown:c=>c.stopPropagation(),children:[i.jsxs("div",{className:"colorpanel__head",children:[i.jsx("span",{children:e}),i.jsx("span",{className:"colorpanel__sub",children:"Theme colors"})]}),i.jsxs("div",{className:"colorpanel__grid",children:[r&&i.jsx("button",{className:`swatch swatch--none ${s===null?"is-active":""}`,title:"None",onClick:()=>t(null),children:i.jsx(Jf,{size:14})}),Ys.map(c=>i.jsx("button",{className:`swatch ${s===c.hex?"is-active":""}`,style:{background:c.hex},title:`${c.name} ${c.hex}`,onClick:()=>t(c.hex),children:s===c.hex&&i.jsx(Xn,{size:12,strokeWidth:3,color:c.hex==="#000000"||c.hex==="#1E1E1E"?"#fff":"#000"})},c.hex))]}),i.jsxs("div",{className:"colorpanel__custom",children:[i.jsx("label",{className:"colorpanel__native",style:{background:s??"transparent"},title:"Custom color",children:i.jsx("input",{type:"color",value:s??"#000000",onChange:c=>t(c.target.value.toUpperCase())})}),i.jsx("input",{className:"colorpanel__hex",value:l,placeholder:"None",spellCheck:!1,onChange:c=>{a(c.target.value);const d=_t(c.target.value);d&&t(d)},onBlur:()=>a(n??"")}),"EyeDropper"in window&&i.jsx("button",{className:"icon-btn",title:"Pick from screen",onClick:o,children:i.jsx(zm,{size:14})})]})]})}function Vt({value:e,onChange:n,title:t,allowNone:r}){const[l,a]=w.useState(!1),s=w.useRef(null);return Js(s,()=>a(!1),l),i.jsxs("div",{className:"colorfield",ref:s,children:[i.jsxs("button",{className:"colorfield__btn",onClick:()=>a(o=>!o),children:[i.jsx("span",{className:`colorfield__chip ${e?"":"is-none"}`,style:{background:e??void 0}}),i.jsx("span",{className:"colorfield__hex",children:e?e.replace("#",""):"None"})]}),l&&i.jsx("div",{className:"colorfield__pop",children:i.jsx(Gi,{title:t,value:e,onChange:n,allowNone:r})})]})}const Eg=["Round the corners & make it secondary","Make it a pill","Make it sky blue","Back to a sharp primary CTA"];function sn({title:e,active:n,onClick:t,children:r,disabled:l}){return i.jsx("button",{type:"button",className:`ctb__btn ${n?"is-active":""}`,"data-tip":e,"aria-label":e,onClick:t,disabled:l,children:r})}function Mg({id:e,onGrip:n}){const t=sp(e),r=yn(),l=Rr(),{select:a,ai:s,setAi:o}=Oe(),c=zg(),[d,f]=w.useState(null),[h,g]=w.useState(""),[_,v]=w.useState(!1),b=w.useRef(null);if(Js(b,()=>f(null),d!==null),w.useEffect(()=>{f(null),g("")},[e]),!t)return null;const j=t.kind,p=op.includes(j)||j==="container"||j==="section",u=j==="icon"||j==="graphic",m=j==="button"||j==="link",k=s&&s.id===e?s:null,N=(k==null?void 0:k.phase)==="thinking"||(k==null?void 0:k.phase)==="applying",y=(P,H)=>r.setStyle(e,P,`${e}:${H}`),C=P=>f(H=>H===P?null:P),$=(P=h)=>{N||(v(!1),g(""),c(e,P))},S=u?$g(e):0,E=t.textAlign==="center"?Fu:t.textAlign==="right"?Ou:Du;return i.jsxs("div",{className:"ctb",ref:b,children:[i.jsxs("div",{className:"ctb__bar",children:[i.jsx("span",{className:"ctb__grip",onPointerDown:n,title:"Drag toolbar",children:i.jsx(pm,{size:16})}),p&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"ctb__stepper",children:[i.jsx("button",{type:"button","aria-label":"Decrease font size",onClick:()=>y({fontSize:`${Math.max(8,t.fontSize-1)}px`},"fs"),children:i.jsx(Vi,{size:14})}),i.jsx("input",{"aria-label":"Font size",value:t.fontSize,onChange:P=>{const H=parseInt(P.target.value,10);H>0&&y({fontSize:`${H}px`},"fs")}}),i.jsx("button",{type:"button","aria-label":"Increase font size",onClick:()=>y({fontSize:`${t.fontSize+1}px`},"fs"),children:i.jsx($t,{size:14})})]}),i.jsx(sn,{title:"Bold",active:t.fontWeight>=600,onClick:()=>y({fontWeight:t.fontWeight>=600?"400":"700"},"fw"),children:i.jsx(nm,{size:16})}),i.jsx(sn,{title:`Align ${t.textAlign}`,onClick:()=>{const P=["left","center","right"],H=P[(P.indexOf(t.textAlign)+1)%3]??"left";y({textAlign:H},"ta")},children:i.jsx(E,{size:16})}),i.jsx(sn,{title:t.textTransform==="uppercase"?"Sentence case":"Uppercase",active:t.textTransform==="uppercase",onClick:()=>y({textTransform:t.textTransform==="uppercase"?"none":"uppercase"},"tt"),children:i.jsx(im,{size:17})})]}),u&&i.jsxs("div",{className:"ctb__stepper",children:[i.jsx("button",{type:"button","aria-label":"Smaller icon",onClick:()=>y({"--icon-size":`${Math.max(8,S-2)}px`},"is"),children:i.jsx(Vi,{size:14})}),i.jsx("input",{"aria-label":"Icon size",value:S,readOnly:!0}),i.jsx("button",{type:"button","aria-label":"Larger icon",onClick:()=>y({"--icon-size":`${S+2}px`},"is"),children:i.jsx($t,{size:14})})]}),m&&i.jsx(sn,{title:"Link",active:d==="link",onClick:()=>C("link"),children:i.jsx(Ks,{size:16})}),i.jsx("span",{className:"ctb__sep"}),!u&&i.jsx(sn,{title:"Corner radius",active:d==="radius",onClick:()=>C("radius"),children:i.jsx(hp,{})}),i.jsx(sn,{title:u?"Icon color":"Text color",active:d==="text",onClick:()=>C("text"),children:i.jsxs("span",{className:"ctb__aa",children:["Aa",i.jsx("i",{style:{background:t.color}})]})}),!u&&i.jsxs(i.Fragment,{children:[i.jsx(sn,{title:"Fill",active:d==="fill",onClick:()=>C("fill"),children:i.jsxs("span",{className:"ctb__aa",children:[i.jsx(Sm,{size:16}),i.jsx("i",{className:t.fill.alpha===0?"is-none":"",style:{background:t.fill.alpha===0?void 0:t.fill.hex}})]})}),i.jsx(sn,{title:"Stroke",active:d==="stroke",onClick:()=>C("stroke"),children:t.strokeWidth?i.jsx(Rm,{size:16,strokeWidth:2.6}):i.jsx(Im,{size:16})})]}),i.jsx("span",{className:"ctb__sep"}),i.jsx(sn,{title:"Hide element",onClick:()=>{r.setHidden(e,!0),a(null),l(`Hidden “${t.label||j}”`,{label:"Undo",run:()=>r.setHidden(e,!1)})},children:i.jsx(qs,{size:16})}),i.jsxs("form",{className:`ctb__ai ${_?"is-focus":""} ${N?"is-busy":""}`,onSubmit:P=>{P.preventDefault(),$()},children:[i.jsx(Er,{size:15,className:"ctb__ai-icon"}),i.jsx("input",{value:h,disabled:N,placeholder:N?"Bolt is editing…":j==="button"?"Ask AI to edit this button…":"Ask AI to edit…",onChange:P=>g(P.target.value),onFocus:()=>v(!0),onBlur:()=>setTimeout(()=>v(!1),150),onKeyDown:P=>P.stopPropagation()}),i.jsx("button",{type:"submit",className:"ctb__send","aria-label":"Send to AI",disabled:N,children:N?i.jsx(zr,{size:14,className:"spin"}):i.jsx(Vs,{size:14,strokeWidth:2.5})})]})]}),_&&!h&&!k&&j==="button"&&i.jsxs("div",{className:"ctb__panel ctb__suggest",children:[i.jsxs("span",{className:"ctb__panel-title",children:[i.jsx(Er,{size:12})," Try"]}),Eg.map(P=>i.jsx("button",{type:"button",onMouseDown:H=>H.preventDefault(),onClick:()=>$(P),children:P},P))]}),k&&i.jsx(Lg,{run:k,onUndo:()=>{r.undo(),o(null)},onClose:()=>o(null)}),d&&i.jsxs("div",{className:"ctb__pop",children:[d==="text"&&i.jsx(Gi,{title:u?"Icon color":"Text color",value:t.color,onChange:P=>y({color:P??void 0},"color")}),d==="fill"&&i.jsx(Gi,{title:"Fill",allowNone:!0,value:t.fill.alpha===0?null:t.fill.hex,onChange:P=>y({backgroundColor:P??"transparent"},"bg")}),d==="radius"&&i.jsx(Tg,{snap:t,onChange:P=>y({borderRadius:`${P}px`},"radius")}),d==="stroke"&&i.jsx(Pg,{snap:t,set:y}),d==="link"&&i.jsx(Ag,{id:e,snap:t})]})]})}function $g(e){const n=document.querySelector(`[data-vid="${CSS.escape(e)}"] svg`);return n?Math.round(n.getBoundingClientRect().width):24}function hp(){return i.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[i.jsx("path",{d:"M4 20V11a7 7 0 0 1 7-7h9"}),i.jsx("path",{d:"M4 20h2M20 4v2",opacity:".5"})]})}function Lg({run:e,onUndo:n,onClose:t}){return e.phase==="unsupported"?i.jsxs("div",{className:"ctb__panel ctb__ai-panel",children:[i.jsxs("div",{className:"ctb__ai-head",children:[i.jsx(Er,{size:14}),i.jsx("span",{children:"AI edits are wired to buttons in this prototype."}),i.jsx("button",{className:"icon-btn",onClick:t,"aria-label":"Dismiss",children:i.jsx(Qi,{size:14})})]}),i.jsx("p",{className:"ctb__ai-note",children:"Select a button such as “See my work” and ask again — or use the controls above."})]}):i.jsxs("div",{className:`ctb__panel ctb__ai-panel is-${e.phase}`,children:[i.jsxs("div",{className:"ctb__ai-head",children:[e.phase==="done"?i.jsx(Xn,{size:14,className:"ok"}):i.jsx(Er,{size:14,className:"pulse"}),i.jsxs("span",{children:[e.phase==="thinking"&&"Reading the button styles…",e.phase==="applying"&&"Applying edits live…",e.phase==="done"&&"Done · saved"]}),e.phase==="done"&&i.jsxs("span",{className:"ctb__ai-actions",children:[i.jsxs("button",{onClick:n,children:[i.jsx(Gs,{size:13})," Undo"]}),i.jsx("button",{className:"is-primary",onClick:t,children:"Keep"})]})]}),i.jsxs("div",{className:"ctb__ai-prompt",children:[i.jsx(om,{size:12})," “",e.prompt||"Round the corners & make it secondary","”"]}),i.jsx("ul",{className:"ctb__steps",children:e.steps.map((r,l)=>i.jsxs("li",{className:r.done?"is-done":"",style:{animationDelay:`${l*90}ms`},children:[i.jsx("span",{className:"ctb__step-dot",children:r.done?i.jsx(Xn,{size:11,strokeWidth:3}):i.jsx(zr,{size:11,className:e.phase==="thinking"?"":"spin"})}),r.label]},l))})]})}function Tg({snap:e,onChange:n}){const t=[["Sharp",0],["Soft",6],["Round",14],["Pill",999]],r=Math.min(e.radius,999);return i.jsxs("div",{className:"minipanel",children:[i.jsx("div",{className:"minipanel__head",children:"Corner radius"}),i.jsx("div",{className:"minipanel__chips",children:t.map(([l,a])=>i.jsxs("button",{className:r===a?"is-active":"",onClick:()=>n(a),children:[i.jsx("span",{className:"radius-demo",style:{borderRadius:Math.min(a,9)}}),l]},l))}),i.jsxs("div",{className:"minipanel__row",children:[i.jsx("input",{type:"range",min:0,max:48,value:Math.min(r,48),onChange:l=>n(+l.target.value)}),i.jsx(he,{prefix:i.jsx(hp,{}),value:r,min:0,max:999,onChange:n})]})]})}function Pg({snap:e,set:n}){return i.jsxs("div",{className:"minipanel minipanel--wide",children:[i.jsxs("div",{className:"minipanel__row",children:[i.jsx("span",{className:"minipanel__head",children:"Stroke"}),i.jsx(he,{prefix:"W",value:e.strokeWidth,min:0,max:12,onChange:t=>n({borderWidth:`${t}px`,borderStyle:t?"solid":"none"},"bw")})]}),i.jsx(Gi,{title:"Stroke color",value:e.strokeColor,onChange:t=>n({borderColor:t??void 0,borderStyle:"solid"},"bc")})]})}function Ag({id:e,snap:n}){const t=yn(),[r,l]=w.useState(n.href??"");w.useEffect(()=>l(n.href??""),[n.href]);const a=n.target==="_blank";return i.jsxs("div",{className:"minipanel minipanel--wide",children:[i.jsx("div",{className:"minipanel__head",children:"Link"}),i.jsx("input",{className:"field",value:r,placeholder:"https:// or #section",spellCheck:!1,onChange:s=>{l(s.target.value),t.setLink(e,{href:s.target.value},`${e}:href`)},onKeyDown:s=>s.stopPropagation()}),i.jsx("div",{className:"minipanel__chips",children:up.map(([s,o])=>i.jsx("button",{className:n.href===s?"is-active":"",onClick:()=>t.setLink(e,{href:s,target:"_self"},`${e}:href`),children:o},s))}),i.jsxs("div",{className:"minipanel__row",children:[i.jsx(Va,{on:a,onChange:s=>t.setLink(e,{target:s?"_blank":"_self"}),label:"Open in new tab"}),n.href&&/^https?:/.test(n.href)&&i.jsx("a",{className:"minipanel__test",href:n.href,target:"_blank",rel:"noreferrer",children:"Test ↗"})]})]})}const Ig=["nw","n","ne","e","se","s","sw","w"];function _c(e){return Wa(e)?e:Array.from(e.querySelectorAll("[data-vid]")).find(Wa)??null}function Rg(){const{mode:e,rootRef:n,selectedId:t,hoverId:r,setHover:l,select:a,editingId:s,startEdit:o,getEl:c,ai:d}=Oe(),f=yn(),h=Rr(),g=e==="design",_=w.useRef(null),v=w.useRef(null),b=w.useRef(null),j=w.useRef(null),p=w.useRef(null),u=w.useRef(null),m=w.useRef(null),k=w.useRef(null),N=w.useRef(t);N.current=t;const y=w.useRef(r);y.current=r,w.useEffect(()=>{k.current=null},[t]),w.useEffect(()=>{const F=n.current;if(!g||!F)return;const ne=T=>{var se,le;const D=(se=T==null?void 0:T.closest)==null?void 0:se.call(T,"[data-vid]");if(!D||!F.contains(D))return null;const B=(le=D.parentElement)==null?void 0:le.closest('[data-kind="button"],[data-kind="link"]');if(B&&F.contains(B)){const V=c(N.current);if(!(V&&(V===B||B.contains(V))))return B}return D},re=T=>{var B;const D=((B=ne(T.target))==null?void 0:B.dataset.vid)??null;D!==y.current&&l(D)},X=()=>l(null),M=T=>{var B;const D=c(s);D&&D.contains(T.target)||(T.preventDefault(),T.stopPropagation(),a(((B=ne(T.target))==null?void 0:B.dataset.vid)??null))},R=T=>{T.preventDefault();const D=T.target.closest("[data-vid]"),B=D&&_c(D);B!=null&&B.dataset.vid&&o(B.dataset.vid)},I=T=>{var xe;if(T.target.closest("input, textarea, select, [contenteditable]"))return;const B=T.metaKey||T.ctrlKey,se=T.key.toLowerCase();if(B&&se==="z"){T.preventDefault(),T.shiftKey?f.redo():f.undo();return}if(B&&se==="y"){T.preventDefault(),f.redo();return}const le=N.current;if(!le)return;const V=c(le);if(T.key==="Escape"){const de=(xe=V==null?void 0:V.parentElement)==null?void 0:xe.closest("[data-vid]");a(de&&F.contains(de)?de.dataset.vid:null)}else if(T.key==="Delete"||T.key==="Backspace"){T.preventDefault();const de=V?Fr(V):"element";f.setHidden(le,!0),a(null),h(`Hidden “${de}”`,{label:"Undo",run:()=>f.setHidden(le,!1)})}else if(T.key==="Enter"&&V){T.preventDefault();const de=_c(V);de!=null&&de.dataset.vid&&o(de.dataset.vid)}};return F.addEventListener("pointermove",re),F.addEventListener("pointerleave",X),F.addEventListener("click",M,!0),F.addEventListener("dblclick",R,!0),window.addEventListener("keydown",I),()=>{F.removeEventListener("pointermove",re),F.removeEventListener("pointerleave",X),F.removeEventListener("click",M,!0),F.removeEventListener("dblclick",R,!0),window.removeEventListener("keydown",I)}},[g,n,c,a,l,o,s,f,h]);const C=!!d&&d.id===t&&(d.phase==="thinking"||d.phase==="applying");if(w.useEffect(()=>{if(!g)return;let F=0;const ne=(X,M,R)=>{if(!X)return null;const I=M&&M.style.display!=="none"?M.getBoundingClientRect():null;if(!I||I.width===0&&I.height===0)return X.style.visibility="hidden",null;const T=I.left-R.left,D=I.top-R.top;return X.style.visibility="visible",X.style.transform=`translate(${T}px, ${D}px)`,X.style.width=`${I.width}px`,X.style.height=`${I.height}px`,X.dataset.edgeTop=D<26?"1":"",{x:T,y:D,w:I.width,h:I.height}},re=()=>{const X=_.current;if(X){const M=X.getBoundingClientRect(),R=c(t),I=ne(j.current,R,M);I&&p.current&&R&&(p.current.textContent=`${R.offsetWidth||Math.round(I.w)} × ${R.offsetHeight||Math.round(I.h)}`),ne(u.current,C?R:null,M),ne(v.current,r&&r!==t?c(r):null,M);const T=m.current;if(T&&I){const D=T.querySelector(".ctb__bar"),B=(D==null?void 0:D.offsetHeight)??52,se=(D==null?void 0:D.offsetWidth)??T.offsetWidth;let le,V,xe;if(k.current)({x:le,y:V}=k.current),xe=V>M.height/2?"above":"below";else{const to=I.y+I.h+34;xe=to+B+8<M.height?"below":"above",V=xe==="below"?to:I.y-14-B,le=I.x+I.w/2-se/2}le=Math.max(8,Math.min(le,M.width-se-8)),V=Math.max(8,Math.min(V,M.height-B-8)),T.style.transform=`translate(${le}px, ${V}px)`,T.style.visibility="visible",T.dataset.place=xe;const de=M.height-(V+B);T.dataset.pop=de>300||V<de?"down":"up"}else T&&(T.style.visibility="hidden")}F=requestAnimationFrame(re)};return F=requestAnimationFrame(re),()=>cancelAnimationFrame(F)},[g,t,r,c,C]),!g)return null;const $=c(t),S=c(r),E=($==null?void 0:$.dataset.kind)??"container",P=!!s&&s===t,H=F=>ne=>{const re=c(t);if(!re||!t)return;ne.preventDefault(),ne.stopPropagation();const X=t,M=ne.clientX,R=ne.clientY,I=re.offsetWidth,T=re.offsetHeight,D=`resize:${X}:${Date.now()}`;getComputedStyle(re).display==="inline"&&f.setStyle(X,{display:"inline-block"},D);const B=le=>{const V=le.clientX-M,xe=le.clientY-R,de={};(F.includes("e")||F.includes("w"))&&(de.width=`${Math.max(8,Math.round(I+(F.includes("w")?-V:V)))}px`,de.maxWidth="none"),(F.includes("s")||F.includes("n"))&&(de.height=`${Math.max(8,Math.round(T+(F.includes("n")?-xe:xe)))}px`),f.setStyle(X,de,D)},se=()=>{window.removeEventListener("pointermove",B),window.removeEventListener("pointerup",se),document.body.classList.remove("is-resizing")};document.body.classList.add("is-resizing"),window.addEventListener("pointermove",B),window.addEventListener("pointerup",se)},U=F=>{F.preventDefault();const ne=m.current;if(!ne)return;const re=ne.style.transform.match(/translate\((-?[\d.]+)px, (-?[\d.]+)px\)/),X=re?parseFloat(re[1]):0,M=re?parseFloat(re[2]):0,R=F.clientX,I=F.clientY,T=B=>{k.current={x:X+B.clientX-R,y:M+B.clientY-I}},D=()=>{window.removeEventListener("pointermove",T),window.removeEventListener("pointerup",D)};window.addEventListener("pointermove",T),window.addEventListener("pointerup",D)};return i.jsxs("div",{className:"dl",ref:_,children:[i.jsx("div",{className:"dl__hover",ref:v,children:i.jsx("span",{className:"dl__chip dl__chip--ghost",ref:b,children:S?Mr[S.dataset.kind??"container"]:""})}),i.jsx("div",{className:"dl__ai",ref:u,children:i.jsx("span",{className:"dl__ai-sweep"})}),i.jsx("div",{className:`dl__sel ${P?"is-editing":""}`,ref:j,children:$&&i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"dl__chip",children:P?"Editing text":Mr[E]}),!P&&Ig.map(F=>i.jsx("span",{className:`dl__handle dl__handle--${F}`,onPointerDown:H(F)},F)),i.jsx("span",{className:"dl__size",ref:p})]})}),t&&!P&&i.jsx("div",{className:"dl__tb",ref:m,children:i.jsx(Mg,{id:t,onGrip:U})})]})}function Fg({onDone:e,editCount:n}){const{selectedId:t,getEl:r,select:l,setHover:a,device:s,setDevice:o}=Oe(),{canUndo:c,canRedo:d,saving:f}=et(),h=yn(),g=yg(r(t));return i.jsxs("div",{className:"strip",children:[i.jsx("div",{className:"strip__left",children:i.jsx("div",{className:"strip__crumbs",children:g.length===0?i.jsx("span",{className:"strip__hint",children:"Click any element to select it · double-click text to edit"}):g.map((_,v)=>i.jsxs(w.Fragment,{children:[v>0&&i.jsx(kt,{size:12,className:"strip__sep"}),i.jsx("button",{className:v===g.length-1?"is-current":"",onClick:()=>l(_.dataset.vid),onPointerEnter:()=>a(_.dataset.vid),onPointerLeave:()=>a(null),children:Fr(_)})]},_.dataset.vid))})}),i.jsxs("div",{className:"strip__right",children:[i.jsx("button",{className:"icon-btn","data-tip":"Undo  ⌘Z",disabled:!c,onClick:h.undo,children:i.jsx(Gs,{size:15})}),i.jsx("button",{className:"icon-btn","data-tip":"Redo  ⇧⌘Z",disabled:!d,onClick:h.redo,children:i.jsx($m,{size:15})}),i.jsx("span",{className:"strip__div"}),i.jsx(Yt,{size:"sm",value:s,onChange:o,options:[{value:"desktop",icon:i.jsx(Qu,{size:14}),title:"Desktop"},{value:"tablet",icon:i.jsx(Yu,{size:14}),title:"Tablet · 834"},{value:"mobile",icon:i.jsx(Gu,{size:14}),title:"Mobile · 390"}]}),i.jsx("span",{className:"strip__div"}),i.jsxs("span",{className:`sync ${f?"is-saving":""}`,"data-tip":"Live sync: every change is saved automatically",children:[f?i.jsx(zr,{size:13,className:"spin"}):i.jsx(am,{size:14}),f?"Saving…":n?i.jsxs(i.Fragment,{children:["Saved ",i.jsx(Xn,{size:12,strokeWidth:3})]}):"Live"]}),i.jsx("button",{className:"btn btn--blue btn--sm",onClick:e,children:"Done"})]})]})}function Ke({title:e,children:n,action:t}){return i.jsxs("section",{className:"insp__sec",children:[i.jsxs("header",{children:[i.jsx("h4",{children:e}),t]}),n]})}function Dg(){var u,m,k,N;const{selectedId:e,getEl:n,select:t}=Oe(),{doc:r}=et(),l=yn(),a=sp(e),[s,o]=w.useState("");if(w.useEffect(()=>{a!=null&&a.isLeafText&&o(a.text)},[a==null?void 0:a.text,a==null?void 0:a.isLeafText,e]),!e||!a)return i.jsx(Og,{});const c=e,d=r[c],f=a.kind,h=op.includes(f)||f==="container"||f==="section",g=f==="button"||f==="link",_=a.display.includes("flex"),v=(y,C)=>l.setStyle(c,y,`${c}:${C}`),b=y=>v({boxShadow:gg({...a.shadow,...y})},"shadow"),j=y=>{var $;const C=($=d==null?void 0:d.style)==null?void 0:$[y];return C?C==="fit-content"?"hug":C==="100%"?"fill":"fixed":"auto"},p=(m=(u=n(c))==null?void 0:u.parentElement)==null?void 0:m.closest("[data-vid]");return i.jsxs("aside",{className:"insp",children:[i.jsxs("div",{className:"insp__head",children:[i.jsx("span",{className:"insp__kind",children:i.jsx(Xs,{kind:f})}),i.jsxs("div",{className:"insp__title",children:[i.jsx("strong",{children:a.label||Mr[f]}),i.jsxs("span",{children:[Mr[f]," · <",a.tag,">"]})]}),i.jsxs("div",{className:"insp__head-actions",children:[p&&i.jsx("button",{className:"icon-btn","data-tip":"Select parent (Esc)",onClick:()=>t(p.dataset.vid),children:i.jsx(Qg,{})}),i.jsx("button",{className:"icon-btn","data-tip":d!=null&&d.hidden?"Show":"Hide",onClick:()=>l.setHidden(c,!(d!=null&&d.hidden)),children:d!=null&&d.hidden?i.jsx(qs,{size:15}):i.jsx(hl,{size:15})}),i.jsx("button",{className:"icon-btn","data-tip":"Reset to original",disabled:!d,onClick:()=>l.resetNode(c),children:i.jsx(Lm,{size:15})})]})]}),i.jsxs("div",{className:"insp__body",children:[a.isLeafText&&i.jsx(Ke,{title:"Content",children:i.jsx("textarea",{className:"field field--area",value:s,rows:Math.min(5,Math.max(2,Math.ceil(s.length/30))),onChange:y=>{o(y.target.value),l.setText(c,y.target.value,`text:${c}`)}})}),g&&i.jsxs(Ke,{title:"Link",children:[i.jsxs("div",{className:"field-icon",children:[i.jsx(Ks,{size:14}),i.jsx("input",{className:"field",value:(d==null?void 0:d.href)??a.href??"",placeholder:"https:// or #section",spellCheck:!1,onChange:y=>l.setLink(c,{href:y.target.value},`${c}:href`)})]}),i.jsx("div",{className:"insp__row",children:i.jsxs("select",{className:"field field--select",value:(k=a.href)!=null&&k.startsWith("#")?a.href:"",onChange:y=>y.target.value&&l.setLink(c,{href:y.target.value,target:"_self"}),children:[i.jsx("option",{value:"",children:"Jump to section…"}),up.map(([y,C])=>i.jsx("option",{value:y,children:C},y))]})}),i.jsx(Va,{on:a.target==="_blank",onChange:y=>l.setLink(c,{target:y?"_blank":"_self"}),label:"Open in new tab"})]}),i.jsxs(Ke,{title:"Layout",children:[i.jsxs("div",{className:"insp__grid2",children:[i.jsx(he,{prefix:"W",value:a.width,min:0,onChange:y=>v({width:`${y}px`,maxWidth:"none"},"w")}),i.jsx(he,{prefix:"H",value:a.height,min:0,onChange:y=>v({height:`${y}px`},"h")}),i.jsxs("select",{className:"field field--select field--sm",value:j("width"),onChange:y=>{const C=y.target.value;v({width:C==="hug"?"fit-content":C==="fill"?"100%":C==="fixed"?`${a.width}px`:void 0},"wm")},children:[i.jsx("option",{value:"auto",children:"Auto width"}),i.jsx("option",{value:"hug",children:"Hug contents"}),i.jsx("option",{value:"fill",children:"Fill container"}),i.jsx("option",{value:"fixed",children:"Fixed"})]}),i.jsxs("select",{className:"field field--select field--sm",value:j("height"),onChange:y=>{const C=y.target.value;v({height:C==="hug"?"fit-content":C==="fill"?"100%":C==="fixed"?`${a.height}px`:void 0},"hm")},children:[i.jsx("option",{value:"auto",children:"Auto height"}),i.jsx("option",{value:"hug",children:"Hug contents"}),i.jsx("option",{value:"fill",children:"Fill container"}),i.jsx("option",{value:"fixed",children:"Fixed"})]})]}),i.jsxs("div",{className:"insp__grid2",children:[i.jsx(he,{prefix:i.jsx(jm,{size:13}),title:"Horizontal padding",value:a.padX,min:0,onChange:y=>v({paddingLeft:`${y}px`,paddingRight:`${y}px`},"px")}),i.jsx(he,{prefix:i.jsx(Nm,{size:13}),title:"Vertical padding",value:a.padY,min:0,onChange:y=>v({paddingTop:`${y}px`,paddingBottom:`${y}px`},"py")})]}),_&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"insp__row",children:[i.jsx(Yt,{size:"sm",value:a.flexDirection.startsWith("column")?"column":"row",onChange:y=>v({flexDirection:y},"dir"),options:[{value:"row",icon:i.jsx(Bu,{size:13}),title:"Horizontal"},{value:"column",icon:i.jsx(Ws,{size:13}),title:"Vertical"}]}),i.jsx(he,{prefix:"Gap",value:a.gap,min:0,onChange:y=>v({gap:`${y}px`},"gap")})]}),i.jsx("div",{className:"insp__row",children:i.jsx(Yt,{size:"sm",value:["flex-start","center","flex-end"].includes(a.alignItems)?a.alignItems:"normal",onChange:y=>v({alignItems:y},"ai"),options:[{value:"flex-start",label:"Start",title:"Align start"},{value:"center",label:"Center",title:"Align center"},{value:"flex-end",label:"End",title:"Align end"}]})})]})]}),i.jsx(Ke,{title:"Appearance",children:i.jsxs("div",{className:"insp__grid2",children:[i.jsx(he,{prefix:i.jsx(Hg,{}),title:"Opacity",value:a.opacity,min:0,max:100,suffix:"%",onChange:y=>v({opacity:String(y/100)},"op")}),i.jsx(he,{prefix:i.jsx(Bg,{}),title:"Corner radius",value:Math.min(a.radius,999),min:0,max:999,onChange:y=>v({borderRadius:`${y}px`},"radius")}),i.jsx(he,{prefix:i.jsx(Ku,{size:13}),title:"Rotation",value:a.rotate,step:.5,suffix:"°",onChange:y=>v({rotate:`${y}deg`},"rot")})]})}),i.jsx(Ke,{title:"Fill",action:a.fill.alpha===0?i.jsx("button",{className:"icon-btn","data-tip":"Add fill",onClick:()=>v({backgroundColor:Ys[0].hex},"bg"),children:i.jsx($t,{size:14})}):i.jsx("button",{className:"icon-btn","data-tip":"Remove fill",onClick:()=>v({backgroundColor:"transparent"},"bg"),children:i.jsx(Vi,{size:14})}),children:a.fill.alpha>0?i.jsx(Vt,{title:"Fill",allowNone:!0,value:a.fill.hex,onChange:y=>v({backgroundColor:y??"transparent"},"bg")}):i.jsx("p",{className:"insp__muted",children:"No fill"})}),i.jsx(Ke,{title:"Stroke",action:a.strokeWidth?i.jsx("button",{className:"icon-btn","data-tip":"Remove stroke",onClick:()=>v({borderWidth:"0px",borderStyle:"none"},"bw"),children:i.jsx(Vi,{size:14})}):i.jsx("button",{className:"icon-btn","data-tip":"Add stroke",onClick:()=>v({borderWidth:"3px",borderStyle:"solid",borderColor:"#000000"},"bw"),children:i.jsx($t,{size:14})}),children:a.strokeWidth?i.jsxs("div",{className:"insp__grid2",children:[i.jsx(Vt,{title:"Stroke",value:a.strokeColor,onChange:y=>v({borderColor:y??void 0,borderStyle:"solid"},"bc")}),i.jsx(he,{prefix:i.jsx(Wg,{}),title:"Stroke width",value:a.strokeWidth,min:0,max:16,onChange:y=>v({borderWidth:`${y}px`,borderStyle:y?"solid":"none"},"bw")})]}):i.jsx("p",{className:"insp__muted",children:"No stroke"})}),i.jsx(Ke,{title:"Effects",action:i.jsx(Va,{on:a.shadow.on,onChange:y=>b({on:y,x:a.shadow.x||6,y:a.shadow.y||6})}),children:a.shadow.on?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"insp__grid3",children:[i.jsx(he,{prefix:"X",value:a.shadow.x,onChange:y=>b({x:y})}),i.jsx(he,{prefix:"Y",value:a.shadow.y,onChange:y=>b({y})}),i.jsx(he,{prefix:"B",title:"Blur",value:a.shadow.blur,min:0,onChange:y=>b({blur:y})})]}),i.jsx(Vt,{title:"Shadow",value:a.shadow.color,onChange:y=>y&&b({color:y})})]}):i.jsx("p",{className:"insp__muted",children:"Drop shadow off"})}),h&&i.jsxs(Ke,{title:"Typography",children:[i.jsxs("select",{className:"field field--select",value:((N=Wl.find(y=>y.label===a.fontFamily))==null?void 0:N.value)??"",onChange:y=>v({fontFamily:y.target.value||void 0},"ff"),children:[!Wl.some(y=>y.label===a.fontFamily)&&i.jsx("option",{value:"",children:a.fontFamily}),Wl.map(y=>i.jsx("option",{value:y.value,children:y.label},y.label))]}),i.jsxs("div",{className:"insp__grid2",children:[i.jsx("select",{className:"field field--select",value:String(Math.round(a.fontWeight/100)*100),onChange:y=>v({fontWeight:y.target.value},"fw"),children:[400,500,600,700,800,900].map(y=>i.jsx("option",{value:y,children:{400:"Regular",500:"Medium",600:"Semibold",700:"Bold",800:"Extra bold",900:"Black"}[y]},y))}),i.jsx(he,{prefix:i.jsx(Xu,{size:13}),title:"Font size",value:a.fontSize,min:6,max:400,onChange:y=>v({fontSize:`${y}px`},"fs")}),i.jsx(he,{prefix:i.jsx(Ug,{}),title:"Line height",value:a.lineHeight==="Auto"?1.2:parseFloat(a.lineHeight),display:a.lineHeight,step:.05,min:.5,max:4,onChange:y=>v({lineHeight:String(y)},"lh")}),i.jsx(he,{prefix:i.jsx(Vg,{}),title:"Letter spacing",value:a.letterSpacing,step:.5,suffix:"%",onChange:y=>v({letterSpacing:`${y/100}em`},"ls")})]}),i.jsxs("div",{className:"insp__row",children:[i.jsx(Yt,{size:"sm",value:a.textAlign,onChange:y=>v({textAlign:y},"ta"),options:[{value:"left",icon:i.jsx(Du,{size:14}),title:"Align left"},{value:"center",icon:i.jsx(Fu,{size:14}),title:"Align center"},{value:"right",icon:i.jsx(Ou,{size:14}),title:"Align right"}]}),i.jsx(Yt,{size:"sm",value:a.textTransform==="uppercase"?"uppercase":a.textTransform==="lowercase"?"lowercase":"none",onChange:y=>v({textTransform:y},"tt"),options:[{value:"none",label:"Aa",title:"As typed"},{value:"uppercase",label:"AA",title:"Uppercase"},{value:"lowercase",label:"aa",title:"Lowercase"}]})]}),i.jsx(Vt,{title:"Text color",value:a.color,onChange:y=>v({color:y??void 0},"color")})]}),f==="icon"&&i.jsx(Ke,{title:"Icon",children:i.jsx(Vt,{title:"Icon color",value:a.color,onChange:y=>v({color:y??void 0},"color")})})]})]})}function Og(){return i.jsxs("aside",{className:"insp insp--empty",children:[i.jsxs("div",{className:"insp__empty-hero",children:[i.jsx("span",{className:"insp__empty-icon",children:i.jsx(bm,{size:20})}),i.jsx("strong",{children:"Select anything on the page"}),i.jsx("p",{children:"Click to select, double-click to edit text. Every change is live and saved automatically."})]}),i.jsx(Ke,{title:"Palette",children:i.jsx("div",{className:"insp__palette",children:Ys.map(e=>i.jsxs("span",{title:e.hex,children:[i.jsx("i",{style:{background:e.hex}}),e.name]},e.hex))})}),i.jsx(Ke,{title:"Shortcuts",action:i.jsx(gm,{size:14,className:"insp__muted-icon"}),children:i.jsx("dl",{className:"insp__keys",children:[["Click","Select"],["Click again","Select inside a button"],["Double-click / ↵","Edit text"],["Esc","Select parent"],["⌫","Hide element"],["⌘ Z / ⇧⌘ Z","Undo / Redo"],["Drag W/H labels","Scrub values"]].map(([e,n])=>i.jsxs("div",{children:[i.jsx("dt",{children:e}),i.jsx("dd",{children:n})]},e))})})]})}const Dr=({children:e})=>i.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:e}),Bg=()=>i.jsx(Dr,{children:i.jsx("path",{d:"M4 20V11a7 7 0 0 1 7-7h9"})}),Hg=()=>i.jsxs(Dr,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"8"}),i.jsx("path",{d:"M12 4a8 8 0 0 1 0 16z",fill:"currentColor"})]}),Wg=()=>i.jsxs(Dr,{children:[i.jsx("path",{d:"M4 6h16",strokeWidth:"1.5"}),i.jsx("path",{d:"M4 12h16",strokeWidth:"2.5"}),i.jsx("path",{d:"M4 18h16",strokeWidth:"4"})]}),Ug=()=>i.jsx(Dr,{children:i.jsx("path",{d:"M4 4h16M4 20h16M9 16l3-8 3 8M10 13.5h4"})}),Vg=()=>i.jsx(Dr,{children:i.jsx("path",{d:"M3 4v16M21 4v16M8 16l4-9 4 9M9.5 13h5"})}),Qg=()=>i.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M9 14 4 9l5-5"}),i.jsx("path",{d:"M4 9h10.5a5.5 5.5 0 0 1 0 11H11"})]});function ml(){const{mode:e,selectedId:n}=Oe();return e==="design"?n:null}const $r=(e,n)=>!!e&&(e===n||e.startsWith(`${n}.`));function eo({id:e,num:n,children:t}){return i.jsxs(x,{id:`${e}.label`,kind:"text",as:"p",className:"section-label",label:"Eyebrow",children:[i.jsx(x,{id:`${e}.label.num`,kind:"text",as:"span",className:"section-label__num",label:"Number",children:n}),i.jsx(x,{id:`${e}.label.text`,kind:"text",as:"span",label:"Eyebrow text",children:t})]})}function gl({id:e,num:n,label:t,title:r,titleId:l}){return i.jsx(x,{id:`${e}.head`,kind:"container",className:"section-head",label:"Section heading",children:i.jsxs("div",{children:[i.jsx(eo,{id:e,num:n,children:t}),i.jsx(x,{id:`${e}.title`,htmlId:l,kind:"heading",as:"h2",className:"display h2",label:"Heading",children:r})]})})}function qg({id:e,lines:n}){return i.jsx(i.Fragment,{children:n.map((t,r)=>i.jsxs(w.Fragment,{children:[i.jsx(x,{id:`${e}.${r}`,kind:"text",as:"span",className:"line",label:`Line ${r+1}`,children:t}),r<n.length-1?" ":""]},r))})}function Kg({facing:e}){return i.jsxs("g",{className:"shuttle-flip",style:{transform:`scaleX(${e})`},children:[i.jsx("path",{d:"M-4 -6 L-34 -17 L-34 17 L-4 6 Z",fill:"#fff",stroke:"#000",strokeWidth:"3",strokeLinejoin:"round"}),i.jsx("path",{d:"M-34 -8 L-6 -2 M-34 8 L-6 2 M-34 0 H-6",stroke:"#000",strokeWidth:"2"}),i.jsx("circle",{cx:"2",cy:"0",r:"8",fill:"#ff6e6c",stroke:"#000",strokeWidth:"3"})]})}function Gg({hits:e}){const n=e%2===1,t=e===0||n?1:-1;return i.jsxs("svg",{viewBox:"0 0 320 200","aria-hidden":"true",className:"art-svg",children:[i.jsx("rect",{x:"18",y:"34",width:"284",height:"136",fill:"#fff",stroke:"#000",strokeWidth:"3"}),i.jsx("path",{d:"M18 46 H302 M18 158 H302 M34 34 V170 M286 34 V170 M118 34 V170 M202 34 V170 M18 102 H118 M202 102 H302",stroke:"#000",strokeWidth:"2",fill:"none"}),i.jsx("rect",{x:"157",y:"22",width:"6",height:"160",fill:"#000"}),i.jsx("path",{d:"M154 34 V170 M166 34 V170",stroke:"#000",strokeWidth:"1",strokeDasharray:"3 3"}),i.jsx("g",{transform:"translate(84 96)",children:i.jsx("g",{className:"fly-x",style:{transform:`translateX(${n?152:0}px)`},children:i.jsx("g",{className:e?"fly-hop fly-hop--high":void 0,children:i.jsx("g",{className:"shuttle-wobble",children:i.jsx(Kg,{facing:t})})},e)})})]})}const bt=17,or=Math.sqrt(3)*bt,fp=4,mp=7,Yg=(320-(mp*or+or/2))/2+or/2,Xg=(200-((fp-1)*bt*1.5+bt*2))/2+bt,wc=(e,n)=>({x:Yg+n*or+(e%2?or/2:0),y:Xg+e*bt*1.5}),Zg=(e,n,t)=>Array.from({length:6},(r,l)=>{const a=Math.PI/180*(60*l-90);return`${(e+t*Math.cos(a)).toFixed(1)},${(n+t*Math.sin(a)).toFixed(1)}`}).join(" "),Qa=[[[0,2],[0,3],[0,4],[2,1],[3,5]],[[3,0],[3,1],[2,0],[2,1],[3,2]],[[0,0],[1,3],[3,6],[2,4],[0,6]]],Jg=["circle","square","diamond","triangle","ring"],e0=["#d7ff28","#ff6e6c","#87ceeb","#0ea5e9","#fff"];function n0({kind:e,fill:n}){const t={fill:n,stroke:"#000",strokeWidth:3};switch(e){case"circle":return i.jsx("circle",{r:"9",...t});case"square":return i.jsx("rect",{x:"-8",y:"-8",width:"16",height:"16",...t});case"diamond":return i.jsx("rect",{x:"-7",y:"-7",width:"14",height:"14",transform:"rotate(45)",...t});case"triangle":return i.jsx("path",{d:"M0 -10 L9 7 L-9 7 Z",strokeLinejoin:"round",...t});default:return i.jsxs("g",{children:[i.jsx("circle",{r:"9",...t}),i.jsx("circle",{r:"3",fill:"#000"})]})}}function t0({formation:e}){return i.jsxs("svg",{viewBox:"0 0 320 200","aria-hidden":"true",className:"art-svg",children:[Array.from({length:fp},(n,t)=>Array.from({length:mp},(r,l)=>{const{x:a,y:s}=wc(t,l);return i.jsx("polygon",{points:Zg(a,s,bt-1.5),fill:"#fff",stroke:"#000",strokeWidth:"2"},`${t}-${l}`)})),Jg.map((n,t)=>{const[r,l]=Qa[e][t],{x:a,y:s}=wc(r,l);return i.jsx("g",{className:"piece",style:{transform:`translate(${a}px, ${s}px)`},children:i.jsx("g",{className:"piece-lift",children:i.jsx(n0,{kind:n,fill:e0[t]})})},n)})]})}function r0({hits:e}){const n=e%2===1;return i.jsxs("svg",{viewBox:"0 0 320 200","aria-hidden":"true",className:"art-svg",children:[i.jsx("rect",{x:"10",y:"168",width:"300",height:"6",fill:"#000"}),i.jsx("path",{d:"M100 168 V174 M220 168 V174",stroke:"#fff",strokeWidth:"3"}),i.jsx("rect",{x:"156",y:"128",width:"8",height:"42",fill:"#000"}),i.jsx("rect",{x:"132",y:"130",width:"56",height:"34",fill:"none",stroke:"#000",strokeWidth:"2"}),i.jsx("path",{d:"M132 138 H188 M132 146 H188 M132 154 H188 M146 130 V164 M160 130 V164 M174 130 V164",stroke:"#000",strokeWidth:"1"}),i.jsx("rect",{x:"132",y:"126",width:"56",height:"6",fill:"#fff",stroke:"#000",strokeWidth:"2"}),i.jsxs("g",{transform:"translate(52 112) rotate(-18)",children:[i.jsx("rect",{x:"-6",y:"30",width:"12",height:"34",fill:"#000"}),i.jsx("rect",{x:"-24",y:"-30",width:"48",height:"62",rx:"16",fill:"#fff",stroke:"#000",strokeWidth:"3"}),i.jsx("rect",{x:"-15",y:"-21",width:"30",height:"44",rx:"10",fill:"#87ceeb",stroke:"#000",strokeWidth:"2"})]}),i.jsx("g",{transform:"translate(96 96)",children:i.jsx("g",{className:"fly-x",style:{transform:n?"translate(152px, 61px)":"translate(0px, 0px)"},children:i.jsx("g",{className:e?"fly-hop":void 0,children:i.jsxs("g",{className:"ball-nudge",children:[i.jsx("circle",{r:"11",fill:"#d7ff28",stroke:"#000",strokeWidth:"3"}),[0,72,144,216,288].map(t=>i.jsx("circle",{cx:(5.5*Math.cos((t-90)*Math.PI/180)).toFixed(2),cy:(5.5*Math.sin((t-90)*Math.PI/180)).toFixed(2),r:"1.6",fill:"#000"},t))]})},e)})})]})}function Ql({id:e,n,title:t,line:r,children:l}){return i.jsxs(x,{id:e,kind:"container",as:"li",className:`beyond-card beyond-card--${n}`,label:`${t} card`,children:[l,i.jsxs("div",{className:"beyond__text",children:[i.jsx(x,{id:`${e}.title`,kind:"heading",as:"h3",className:"beyond__title",label:"Title",children:t}),i.jsx(x,{id:`${e}.line`,kind:"text",as:"p",className:"beyond__line",label:"Line",children:r})]})]})}function i0(){const[e,n]=w.useState(0),[t,r]=w.useState(0),[l,a]=w.useState(0),{badminton:s,tft:o,pickleball:c}=Ut;return i.jsx(x,{id:"beyond",htmlId:"beyond-work",kind:"section",as:"section",className:"section section--paper grid-paper","aria-labelledby":"beyond-title",file:"Beyond",label:"Beyond work",children:i.jsxs("div",{className:"wrap",children:[i.jsx(gl,{id:"beyond",num:"03",label:"Beyond the roadmap",titleId:"beyond-title",title:i.jsx(qg,{id:"beyond.title",lines:Ut.heading})}),i.jsxs(x,{id:"beyond.cards",kind:"container",as:"ul",className:"beyond",label:"Cards",children:[i.jsx(Ql,{id:"beyond.badminton",n:1,title:s.title,line:s.line,children:i.jsxs(x,{id:"beyond.badminton.art",kind:"container",as:"button",className:"beyond__art surface-sky","aria-label":"Play: send the shuttlecock over the net",onClick:()=>n(d=>d+1),label:"Illustration",children:[i.jsx(Gg,{hits:e}),i.jsx("span",{className:"beyond__hint mono","aria-hidden":"true",children:"Tap to rally"})]})}),i.jsx(Ql,{id:"beyond.tft",n:2,title:o.title,line:o.line,children:i.jsxs(x,{id:"beyond.tft.art",kind:"container",as:"button",className:"beyond__art surface-lime","aria-label":"Play: rearrange the strategy board",onClick:()=>r(d=>(d+1)%Qa.length),label:"Illustration",children:[i.jsx(t0,{formation:t}),i.jsxs("span",{className:"beyond__hint mono","aria-hidden":"true",children:["Tap to reposition · ",t+1,"/",Qa.length]})]})}),i.jsx(Ql,{id:"beyond.pickleball",n:3,title:c.title,line:c.line,children:i.jsxs(x,{id:"beyond.pickleball.art",kind:"container",as:"button",className:"beyond__art surface-coral","aria-label":"Play: hit the pickleball over the net",onClick:()=>a(d=>d+1),label:"Illustration",children:[i.jsx(r0,{hits:l}),i.jsx("span",{className:"beyond__hint mono","aria-hidden":"true",children:"Tap to dink"})]})})]}),i.jsxs(x,{id:"beyond.footer",kind:"container",className:"beyond__footer",label:"Footer",children:[i.jsx(x,{id:"beyond.personal",kind:"text",as:"p",className:"beyond__personal",label:"Personal note",children:Ut.personal}),Ut.alsoInto.length>0&&i.jsxs(x,{id:"beyond.also",kind:"text",as:"p",className:"beyond__also",label:"Also into",children:[i.jsx(x,{id:"beyond.also.label",kind:"text",as:"span",className:"mono-label",label:"Label",children:"Also into"}),i.jsx(x,{id:"beyond.also.list",kind:"text",as:"span",label:"Interests",children:Ut.alsoInto.join(" · ")})]})]})]})})}function gp({id:e}){return i.jsxs(x,{id:e,kind:"link",as:"a",className:"brand",href:"#top",label:"Brand",children:[i.jsx(x,{id:`${e}.mark`,kind:"text",as:"span",className:"brand__mark","aria-hidden":"true",label:"Monogram",children:"AC"}),i.jsx(x,{id:`${e}.name`,kind:"text",as:"span",className:"brand__name",label:"Name",children:Ie.name})]})}function l0(){return i.jsxs(x,{id:"header",kind:"section",as:"header",className:"header",file:"Header",label:"Header",children:[i.jsx(gp,{id:"header.brand"}),i.jsxs(x,{id:"header.nav",kind:"container",as:"nav",className:"nav","aria-label":"Primary",label:"Navigation",children:[i.jsx(x,{id:"header.links",kind:"container",as:"ul",className:"nav__links",label:"Nav links",children:dp.map(e=>i.jsx("li",{children:i.jsx(x,{id:`header.link.${e.id}`,kind:"link",as:"a",href:`#${e.id}`,label:`${e.label} link`,children:e.label})},e.id))}),i.jsxs(x,{id:"header.linkedin",kind:"button",as:"a",className:"nav__linkedin",href:Ie.linkedinUrl,target:"_blank",label:"LinkedIn button",children:[i.jsx(Vu,{size:16,strokeWidth:2.5,"aria-hidden":"true"}),i.jsx(x,{id:"header.linkedin.label",kind:"text",as:"span",label:"Label",children:"LinkedIn"})]}),Ie.resumeUrl]}),i.jsxs(x,{id:"header.menu",kind:"button",as:"button",type:"button",className:"menu-toggle","aria-expanded":!1,label:"Menu button",children:[i.jsx(km,{size:18,strokeWidth:2.75,"aria-hidden":"true"}),i.jsx(x,{id:"header.menu.label",kind:"text",as:"span",label:"Label",children:"Menu"})]})]})}const no=[{key:"email",href:`mailto:${Ie.email}`,icon:i.jsx(vm,{size:22,strokeWidth:2.25}),label:"Email",detail:Ie.email,external:!1}];no.push({key:"linkedin",href:Ie.linkedinUrl,icon:i.jsx(Vu,{size:22,strokeWidth:2.25}),label:"LinkedIn",detail:Ie.linkedinHandle,external:!0});no.push({key:"prototype",href:Ie.prototypeUrl,icon:i.jsx(qu,{size:22,strokeWidth:2.25}),label:"Prototype",detail:"Visual Design concept",external:!0});function a0(){const[e,n]=w.useState(!1);w.useEffect(()=>{if(!e)return;const r=setTimeout(()=>n(!1),2200);return()=>clearTimeout(r)},[e]);const t=async()=>{try{await navigator.clipboard.writeText(Ie.email),n(!0)}catch{}};return i.jsxs(x,{id:"contact",htmlId:"contact",kind:"section",as:"section",className:"contact","aria-labelledby":"contact-title",file:"Contact",label:"Contact",children:[i.jsxs(x,{id:"contact.left",kind:"container",className:"contact__left grid-paper",label:"Pitch",children:[i.jsx(eo,{id:"contact",num:"06",children:"Contact"}),i.jsx(x,{id:"contact.title",htmlId:"contact-title",kind:"heading",as:"h2",className:"display h2 contact__title",label:"Heading",children:yc.heading}),i.jsx(x,{id:"contact.body",kind:"text",as:"p",className:"contact__body",label:"Body",children:yc.body}),i.jsxs(x,{id:"contact.email",kind:"container",className:"contact__email",label:"Email row",children:[i.jsx(x,{id:"contact.email.link",kind:"link",as:"a",className:"contact__email-link",href:`mailto:${Ie.email}`,label:"Email link",children:Ie.email}),i.jsxs(x,{id:"contact.copy",kind:"button",as:"button",type:"button",className:"btn btn--sm",onClick:t,label:"Copy email",children:[e?i.jsx(Xn,{size:16,strokeWidth:3,"aria-hidden":"true"}):i.jsx(Qs,{size:16,strokeWidth:2.5,"aria-hidden":"true"}),i.jsx(x,{id:"contact.copy.label",kind:"text",as:"span",label:"Label",children:e?"Copied":"Copy email"})]})]})]}),i.jsx(x,{id:"contact.right",kind:"container",className:"contact__right",label:"Links",children:i.jsx("ul",{className:"contact__rows",children:no.map(r=>i.jsx("li",{children:i.jsxs(x,{id:`contact.row.${r.key}`,kind:"link",as:"a",className:"contact__row",href:r.href,target:r.external?"_blank":void 0,label:`${r.label} row`,children:[i.jsx(x,{id:`contact.row.${r.key}.icon`,kind:"icon",as:"span",className:"contact__icon","aria-hidden":"true",label:"Icon",children:r.icon}),i.jsx(x,{id:`contact.row.${r.key}.label`,kind:"text",as:"span",className:"contact__label",label:"Label",children:r.label}),i.jsx(x,{id:`contact.row.${r.key}.detail`,kind:"text",as:"span",className:"contact__detail",label:"Detail",children:r.detail}),i.jsx(Us,{className:"contact__arrow",size:22,strokeWidth:2.75,"aria-hidden":"true"})]})},r.key))})})]})}function s0(){return i.jsxs(x,{id:"footer",kind:"section",as:"footer",className:"footer",file:"Footer",label:"Footer",children:[i.jsx(gp,{id:"footer.brand"}),i.jsx(x,{id:"footer.copy",kind:"text",as:"p",className:"footer__copy mono",label:"Copyright",children:`© ${new Date().getFullYear()} ${Ie.name} · Built with React + TypeScript`}),i.jsxs("div",{className:"footer__links",children:[i.jsxs(x,{id:"footer.bolt",kind:"link",as:"a",className:"footer__for mono",href:`#${Ul.hash}`,label:Ul.footerLabel,children:[i.jsx(x,{id:"footer.bolt.label",kind:"text",as:"span",label:"Label",children:Ul.footerLabel}),i.jsx(Bu,{size:16,strokeWidth:2.75,"aria-hidden":"true"})]}),i.jsxs(x,{id:"footer.top",kind:"link",as:"a",className:"footer__top mono",href:"#top",label:"Back to top",children:[i.jsx(x,{id:"footer.top.label",kind:"text",as:"span",label:"Label",children:"Back to top"}),i.jsx(Vs,{size:16,strokeWidth:2.75,"aria-hidden":"true"})]})]})]})}const o0="/prototype/assets/alfred-chang-Bsx9eZ18.jpg",c0={chat:rm,wand:Bm,blocks:em};function d0(){const{mode:e}=fl(),n=ml(),[t,r]=w.useState(null),l=w.useRef(!1),a=e!=="design";return i.jsx(x,{id:"hero.wins",kind:"container",as:"ul",className:"hero__wins","aria-label":"Top results",label:"Stat tiles",children:ke.wins.map((s,o)=>{const c=c0[s.icon],d=`hero.win.${o}`,f=a?t===o:$r(n,d);return i.jsxs(x,{id:d,kind:"container",as:"li",className:`hero__win surface-${s.accent}`,"data-open":f||void 0,onPointerEnter:h=>a&&h.pointerType==="mouse"&&r(o),onPointerLeave:h=>a&&h.pointerType==="mouse"&&r(g=>g===o?null:g),label:`${s.label} tile`,children:[i.jsxs("button",{type:"button",className:"hero__win-trigger","aria-expanded":f,onPointerDown:h=>l.current=h.pointerType==="mouse",onClick:()=>{l.current?l.current=!1:r(f?null:o)},children:[i.jsx(x,{id:`${d}.icon`,kind:"icon",as:"span",className:"hero__win-icon",label:"Icon",children:i.jsx(c,{size:20,strokeWidth:2.5,"aria-hidden":"true"})}),i.jsxs(x,{id:`${d}.value`,kind:"heading",as:"span",className:"hero__win-value",label:"Value",children:[i.jsx(x,{id:`${d}.amount`,kind:"text",as:"span",label:"Amount",children:s.value})," ",i.jsx(x,{id:`${d}.unit`,kind:"text",as:"span",className:"hero__win-unit",label:"Unit",children:s.unit})]}),i.jsx(x,{id:`${d}.label`,kind:"text",as:"span",className:"hero__win-label",label:"Label",children:s.label}),i.jsx(Sr,{className:"hero__win-chevron",size:18,strokeWidth:3,"aria-hidden":"true"})]}),i.jsx(x,{id:`${d}.detail`,kind:"text",as:"p",className:"hero__win-detail",hidden:!f,label:"Detail",children:s.detail})]},s.label)})})}function u0(){return i.jsx(x,{id:"hero",htmlId:"top",kind:"section",as:"section",className:"hero grid-paper","aria-labelledby":"hero-title",file:"Hero",label:"Hero",children:i.jsxs(x,{id:"hero.layout",kind:"container",className:"wrap hero__layout",label:"Hero layout",children:[i.jsxs(x,{id:"hero.copy",kind:"container",className:"hero__copy",label:"Hero copy",children:[i.jsx(x,{id:"hero.title",htmlId:"hero-title",kind:"heading",as:"h1",className:"display hero__title",label:"Hello",children:ke.hello.map((e,n)=>i.jsxs(w.Fragment,{children:[e===ke.highlight?i.jsx("span",{className:"line",children:i.jsx(x,{id:"hero.title.mark",kind:"text",as:"mark",className:"hero__mark",label:"Highlight",children:e})}):i.jsx(x,{id:`hero.title.${n}`,kind:"text",as:"span",className:"line",label:`Line ${n+1}`,children:e}),n<ke.hello.length-1?" ":""]},e))}),i.jsx(x,{id:"hero.lead",kind:"text",as:"p",className:"hero__lead",label:"Intro",children:ke.lead}),i.jsx(d0,{}),i.jsx(x,{id:"hero.tagline",kind:"text",as:"p",className:"hero__tagline mono",label:"Tagline",children:ke.tagline}),i.jsxs(x,{id:"hero.ctas",kind:"container",className:"btn-row",label:"Buttons",children:[i.jsxs(x,{id:"hero.cta.primary",kind:"button",as:"a",className:"btn btn--ink",href:ke.primaryCta.href,label:ke.primaryCta.label,children:[i.jsx(x,{id:"hero.cta.primary.label",kind:"text",as:"span",label:"Label",children:ke.primaryCta.label}),i.jsx(Ws,{size:18,strokeWidth:2.75,"aria-hidden":"true"})]}),i.jsxs(x,{id:"hero.cta.secondary",kind:"button",as:"a",className:"btn",href:ke.secondaryCta.href,label:ke.secondaryCta.label,children:[i.jsx(x,{id:"hero.cta.secondary.label",kind:"text",as:"span",label:"Label",children:ke.secondaryCta.label}),i.jsx(Us,{size:18,strokeWidth:2.75,"aria-hidden":"true"})]})]})]}),i.jsxs(x,{id:"hero.photo",kind:"container",as:"figure",className:"hero__photo",label:"Photo",children:[i.jsx(x,{id:"hero.photo.img",kind:"graphic",as:"img",src:o0,alt:ke.photo.alt,width:ke.photo.width,height:ke.photo.height,label:"Portrait"}),i.jsxs(x,{id:"hero.current",kind:"container",as:"figcaption",className:"sticker surface-orange hero__current",label:"Status sticker",children:[i.jsx("span",{className:"status-dot","aria-hidden":"true"}),i.jsx(x,{id:"hero.current.text",kind:"text",as:"span",label:"Status",children:ke.current})]})]})]})})}function ri({x:e,y:n,n:t}){return i.jsxs("g",{className:"lz-badge",children:[i.jsx("rect",{x:e-11,y:n-11,width:"22",height:"22"}),i.jsx("text",{x:e,y:n+5,textAnchor:"middle",children:t})]})}function p0({on:e}){const n=t=>`lz-region${e===t?" is-on":""}`;return i.jsxs("svg",{className:"lens-svg",viewBox:"0 0 480 372",role:"img","aria-label":`Diagram: a person, a break in their path, the system underneath, and a small test. Highlighted: ${e}.`,children:[i.jsxs("g",{className:n("system"),"data-region":"system",children:[i.jsx("rect",{className:"lz-system-box",x:"20",y:"206",width:"440",height:"152"}),i.jsx("text",{className:"lz-label",x:"38",y:"234",children:"SYSTEM"}),["PLATFORM","DATA","TEAMS","POLICY"].map((t,r)=>i.jsxs("g",{children:[i.jsx("rect",{className:"lz-node",x:36+r*104,y:"272",width:"88",height:"40"}),i.jsx("text",{className:"lz-node-text",x:80+r*104,y:"297",textAnchor:"middle",children:t})]},t)),i.jsx("path",{className:"lz-wire",d:"M124 292 H140 M228 292 H244 M332 292 H348"}),i.jsx("path",{className:"lz-cause",d:"M184 272 V250 H288 V272 M260 250 V166"}),i.jsx(ri,{x:444,y:232,n:3})]}),i.jsxs("g",{className:n("person"),"data-region":"person",children:[i.jsx("circle",{className:"lz-fill",cx:"52",cy:"80",r:"14"}),i.jsx("path",{className:"lz-fill",d:"M30 132 Q30 100 52 100 Q74 100 74 132 Z"}),i.jsx("line",{className:"lz-stroke",x1:"436",y1:"66",x2:"436",y2:"132"}),i.jsx("path",{className:"lz-fill",d:"M436 68 L468 79 L436 92 Z"}),i.jsx("text",{className:"lz-label",x:"52",y:"160",textAnchor:"middle",children:"PERSON"}),i.jsx("text",{className:"lz-label",x:"436",y:"160",textAnchor:"middle",children:"GOAL"}),i.jsx(ri,{x:22,y:44,n:1})]}),i.jsxs("g",{className:n("experience"),"data-region":"experience",children:[i.jsx("polygon",{className:"lz-road",points:"84,108 236,108 228,112 238,116 230,120 236,124 84,124"}),i.jsx("polygon",{className:"lz-road",points:"410,108 284,108 292,112 282,116 290,120 284,124 410,124"}),[110,150,190,320,362].map(t=>i.jsx("rect",{className:"lz-step",x:t,y:"113",width:"6",height:"6"},t)),i.jsx("rect",{className:"lz-tag lz-tag--break",x:"190",y:"140",width:"140",height:"26"}),i.jsx("text",{className:"lz-label",x:"260",y:"158",textAnchor:"middle",children:"IT BREAKS HERE"}),i.jsx(ri,{x:176,y:153,n:2})]}),i.jsxs("g",{className:n("test"),"data-region":"test",children:[i.jsx("rect",{className:"lz-bridge",x:"220",y:"100",width:"80",height:"10"}),i.jsx("line",{className:"lz-pointer",x1:"260",y1:"72",x2:"260",y2:"96"}),i.jsx("rect",{className:"lz-tag lz-tag--test",x:"196",y:"44",width:"128",height:"26"}),i.jsx("text",{className:"lz-label",x:"260",y:"62",textAnchor:"middle",children:"SMALLEST TEST"}),i.jsx(ri,{x:340,y:57,n:4})]})]})}function h0(){const{mode:e}=fl(),n=ml(),[t,r]=w.useState(0),[l,a]=w.useState(null),s=e!=="design",o=wt.lens.findIndex((f,h)=>$r(n,`think.lens.${h}`)),c=s||o<0?t:o,d=wt.lens[(s?l:null)??c].region;return i.jsxs(x,{id:"think.lens",kind:"container",className:"lens",label:"Problem lens",children:[i.jsxs("div",{className:"lens__intro",children:[i.jsx(x,{id:"think.lens.label",kind:"text",as:"p",className:"mono-label",label:"Label",children:"The problem lens"}),i.jsx(x,{id:"think.lens.hint",kind:"text",as:"p",className:"lens__hint",label:"Hint",children:"Four questions I ask before deciding what to build. Pick one to see where it points."})]}),i.jsxs("div",{className:"lens__body",children:[i.jsx("ol",{className:"lens__list",onPointerLeave:()=>a(null),children:wt.lens.map((f,h)=>i.jsxs(x,{id:`think.lens.${h}`,kind:"container",as:"li",className:`lens__item${c===h?" is-active":""}`,onPointerEnter:()=>s&&a(h),label:`Question ${h+1}`,children:[i.jsxs("button",{type:"button",className:"lens__btn","aria-expanded":c===h,onClick:()=>r(h),children:[i.jsx("span",{className:"lens__num","aria-hidden":"true",children:h+1}),i.jsx(x,{id:`think.lens.${h}.q`,kind:"text",as:"span",className:"lens__q",label:"Question",children:f.question})]}),i.jsx(x,{id:`think.lens.${h}.gist`,kind:"text",as:"p",className:"lens__gist",label:"Gist",children:f.gist}),i.jsx(x,{id:`think.lens.${h}.detail`,kind:"text",as:"p",className:"lens__detail",hidden:c!==h,label:"Detail",children:f.detail})]},f.region))}),i.jsx(x,{id:"think.lens.figure",kind:"graphic",className:"lens__figure",label:"Diagram",children:i.jsx(p0,{on:d})})]})]})}function f0(){return i.jsx(x,{id:"think",htmlId:"how-i-think",kind:"section",as:"section",className:"section section--paper","aria-labelledby":"how-title",file:"HowIThink",label:"How I think",children:i.jsxs("div",{className:"wrap",children:[i.jsx(gl,{id:"think",num:"04",label:"How I think",titleId:"how-title",title:wt.heading}),i.jsxs(x,{id:"think.intro",kind:"container",className:"think__intro",label:"Intro",children:[i.jsx(x,{id:"think.prose",kind:"container",className:"prose",label:"Prose",children:wt.body.map((e,n)=>i.jsx(x,{id:`think.prose.${n}`,kind:"text",as:"p",label:`Paragraph ${n+1}`,children:e},e.slice(0,20)))}),i.jsx(x,{id:"think.principles",kind:"container",as:"ul",className:"principles","aria-label":"How evidence, judgment, and building fit together",label:"Principles",children:wt.principles.map((e,n)=>i.jsxs(x,{id:`think.principle.${n}`,kind:"container",as:"li",className:`principle surface-${e.accent}`,label:`${e.label} card`,children:[i.jsx(x,{id:`think.principle.${n}.label`,kind:"text",as:"span",className:"principle__label mono",label:"Label",children:e.label}),i.jsx(x,{id:`think.principle.${n}.text`,kind:"text",as:"span",className:"principle__text",label:"Text",children:e.text})]},e.label))})]}),i.jsx(h0,{})]})})}const m0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],qa=new Date,ql=qa.getFullYear()*12+qa.getMonth(),ii=e=>{const[n,t]=e.split("-").map(Number);return n*12+(t-1)},bc=e=>{if(!e)return"Present";const[n,t]=e.split("-").map(Number);return`${m0[t-1]} ${n}`},g0=e=>`${bc(e.start)} – ${bc(e.end)}`,xp=sr.milestones.flatMap(e=>e.roles),Ka=Math.min(...xp.map(e=>Number(e.start.slice(0,4)))),yp=Math.max(qa.getFullYear(),...xp.map(e=>Number((e.end??e.start).slice(0,4))))+1,Yi=Ka*12,ki=yp*12-Yi,li=e=>`${(e-Yi)/ki*100}%`,x0=Array.from({length:yp-Ka},(e,n)=>Ka+n);function y0(){const e=w.useRef(null),[n,t]=w.useState({});return w.useLayoutEffect(()=>{var s;const r=e.current;if(!r)return;const l=()=>{const o={};r.querySelectorAll("[data-row]").forEach(c=>{const d=[...c.querySelectorAll(".spans__bar")];o[c.dataset.row]=d.every(f=>{const h=f.querySelector(".spans__bar-label");return!!h&&h.offsetWidth<=f.clientWidth})}),t(c=>Object.keys(o).every(d=>c[d]===o[d])?c:o)};l();const a=new ResizeObserver(l);return a.observe(r),(s=document.fonts)==null||s.ready.then(l),()=>a.disconnect()},[]),[e,n]}function v0(){const[e,n]=y0();return i.jsxs(x,{id:"journey.chart",kind:"container",as:"figure",className:"spans","aria-labelledby":"spans-caption",label:"Career chart",children:[i.jsxs(x,{id:"journey.chart.caption",htmlId:"spans-caption",kind:"container",as:"figcaption",className:"spans__caption",label:"Chart caption",children:[i.jsx(x,{id:"journey.chart.caption.label",kind:"text",as:"span",className:"mono-label",label:"Label",children:"At a glance"}),i.jsx(x,{id:"journey.chart.caption.text",kind:"text",as:"span",label:"Caption",children:"Title by title, month by month. Some roles overlap."})]}),i.jsxs("div",{className:"spans__chart",children:[i.jsxs("div",{className:"spans__grid","aria-hidden":"true",children:[x0.map(t=>i.jsxs("span",{className:"spans__year",style:{left:li(t*12)},children:[i.jsx("span",{className:"spans__year-full",children:t}),i.jsxs("span",{className:"spans__year-short",children:["’",String(t).slice(2)]})]},t)),i.jsx("span",{className:"spans__now",style:{left:li(ql+1)},children:i.jsx("span",{children:"Now"})})]}),i.jsx("ul",{ref:e,className:"spans__rows",children:sr.milestones.map(t=>{const r=[...t.roles].reverse(),l=ii(r[0].start),a=Math.max(...r.map(d=>d.end?ii(d.end):ql))+1,s=(a-Yi)/ki<.62,o=n[t.id]??!0,c=`journey.chart.${t.id}`;return i.jsx("li",{children:i.jsxs(x,{id:c,kind:"link",as:"a",className:"spans__row",href:`#role-${t.id}`,"data-row":t.id,"data-inside":o,label:`${t.short} row`,children:[i.jsx(x,{id:`${c}.label`,kind:"text",as:"span",className:"spans__label",label:"Company",children:t.short}),i.jsxs("span",{className:"spans__track","aria-hidden":"true",children:[r.map((d,f)=>{const h=ii(d.start),g=d.end?ii(d.end):ql;return i.jsx(x,{id:`${c}.bar.${f}`,kind:"container",as:"span",className:`spans__bar surface-${t.accent}`,style:{left:li(h),width:`${(g+1-h)/ki*100}%`},label:"Bar",children:i.jsx(x,{id:`${c}.bar.${f}.label`,kind:"text",as:"span",className:"spans__bar-label",label:"Title",children:d.short??d.title})},d.title)}),!o&&i.jsx("span",{className:`spans__title spans__title--${s?"after":"before"}`,style:s?{left:li(a)}:{right:`${100-(l-Yi)/ki*100}%`},children:r.map(d=>d.short??d.title).join(" → ")})]})]})},t.id)})})]})]})}function k0({id:e,children:n}){const t=ml();return i.jsx(x,{id:e,kind:"container",as:"details",className:"milestone__more",open:$r(t,e)||void 0,label:"More about this role",children:n})}function _0({m:e,i:n}){const t=`journey.${e.id}`,r=e.roles.filter(l=>l.highlights.length>0);return i.jsxs(x,{id:t,htmlId:`role-${e.id}`,kind:"container",as:"li",className:"milestone",label:e.company,children:[i.jsx(x,{id:`${t}.marker`,kind:"text",as:"span",className:`milestone__marker surface-${e.accent}`,"aria-hidden":"true",label:"Marker",children:String(n+1).padStart(2,"0")}),i.jsxs(x,{id:`${t}.card`,kind:"container",as:"article",className:"milestone__card","aria-labelledby":`role-${e.id}-name`,label:"Card",children:[i.jsxs(x,{id:`${t}.head`,kind:"container",as:"header",className:"milestone__head",label:"Card header",children:[i.jsx(x,{id:`${t}.theme`,kind:"text",as:"p",className:"milestone__theme mono",label:"Theme",children:e.theme}),i.jsx(x,{id:`${t}.company`,htmlId:`role-${e.id}-name`,kind:"heading",as:"h3",className:"milestone__company",label:"Company",children:e.company}),i.jsx("ul",{className:"milestone__roles",children:e.roles.map((l,a)=>i.jsxs("li",{children:[i.jsx(x,{id:`${t}.role.${a}`,kind:"text",as:"span",className:"milestone__role",label:"Role",children:l.title}),i.jsx(x,{id:`${t}.role.${a}.dates`,kind:"text",as:"span",className:"milestone__dates mono",label:"Dates",children:g0(l)})]},l.title))})]}),i.jsxs("div",{className:"milestone__body",children:[i.jsxs(x,{id:`${t}.perspective`,kind:"container",className:"milestone__perspective",label:"Perspective",children:[i.jsx(x,{id:`${t}.perspective.label`,kind:"text",as:"h4",className:"mono-label",label:"Label",children:"Perspective I gained"}),i.jsx(x,{id:`${t}.perspective.text`,kind:"text",as:"p",label:"Perspective",children:e.perspective})]}),i.jsxs(x,{id:`${t}.win`,kind:"container",className:"milestone__win",label:"Accomplishment",children:[i.jsx(x,{id:`${t}.win.label`,kind:"text",as:"h4",className:"mono-label",label:"Label",children:e.accomplishments.length>1?"Main accomplishments":"Main accomplishment"}),i.jsx("ul",{className:"arrow-list",children:e.accomplishments.map((l,a)=>i.jsx(x,{id:`${t}.win.${a}`,kind:"text",as:"li",label:`Accomplishment ${a+1}`,children:l},l.slice(0,32)))})]})]}),i.jsxs(k0,{id:`${t}.more`,children:[i.jsxs("summary",{children:[i.jsx(x,{id:`${t}.more.label`,kind:"text",as:"span",label:"Label",children:"More about this role"}),i.jsx($t,{className:"milestone__plus",size:18,strokeWidth:3,"aria-hidden":"true"})]}),i.jsxs("div",{className:"milestone__highlights",children:[i.jsx(x,{id:`${t}.more.context`,kind:"text",as:"p",className:"milestone__context",label:"Context",children:e.context}),i.jsx(x,{id:`${t}.more.workedOnLabel`,kind:"text",as:"p",className:"mono-label",label:"Label",children:"What I worked on"}),i.jsx(x,{id:`${t}.more.workedOn`,kind:"text",as:"p",label:"What I worked on",children:e.workedOn})]}),r.map((l,a)=>i.jsxs("div",{className:"milestone__highlights",children:[i.jsx(x,{id:`${t}.more.highlights.${a}.label`,kind:"text",as:"p",className:"mono-label",label:"Label",children:e.roles.length>1?`Résumé highlights · ${l.title}`:"Résumé highlights"}),i.jsx("ul",{children:l.highlights.map((s,o)=>i.jsx(x,{id:`${t}.more.highlights.${a}.${o}`,kind:"text",as:"li",label:`Highlight ${o+1}`,children:s},s.slice(0,32)))})]},l.title))]})]})]})}function w0(){return i.jsx(x,{id:"journey",htmlId:"journey",kind:"section",as:"section",className:"section section--sky grid-paper","aria-labelledby":"journey-title",file:"Journey",label:"My journey",children:i.jsxs("div",{className:"wrap",children:[i.jsx(gl,{id:"journey",num:"01",label:"My journey",titleId:"journey-title",title:sr.heading}),i.jsx(x,{id:"journey.intro",kind:"text",as:"p",className:"section-intro",label:"Intro",children:sr.intro}),i.jsx(v0,{}),i.jsx(x,{id:"journey.timeline",kind:"container",as:"ol",className:"timeline",label:"Timeline",children:sr.milestones.map((e,n)=>i.jsx(_0,{m:e,i:n},e.id))})]})})}const Kl=100;function b0(){const e=be.reached/be.goal,n=be.goal/Kl,t=e*Kl,r=Math.round(e*1e3)/10;return i.jsxs(x,{id:"reach.figure",kind:"container",as:"figure",className:"reach__figure","aria-labelledby":"reach-fig-caption",label:"Reach figure",children:[i.jsx(x,{id:"reach.sticker",kind:"text",as:"p",className:"sticker surface-coral reach__sticker",label:"Sticker",children:be.figureLabel}),i.jsxs(x,{id:"reach.stats",kind:"container",className:"reach__stats",label:"Stats",children:[i.jsxs(x,{id:"reach.stat.reached",kind:"container",label:"Reached",children:[i.jsx(x,{id:"reach.stat.reached.num",kind:"heading",as:"span",className:"reach__num",label:"Number",children:be.reachedLabel}),i.jsx(x,{id:"reach.stat.reached.label",kind:"text",as:"span",className:"mono-label",label:"Label",children:"Reached, approx."})]}),i.jsxs(x,{id:"reach.stat.goal",kind:"container",label:"Goal",children:[i.jsx(x,{id:"reach.stat.goal.num",kind:"heading",as:"span",className:"reach__num reach__num--goal",label:"Number",children:be.goalLabel}),i.jsx(x,{id:"reach.stat.goal.label",kind:"text",as:"span",className:"mono-label",label:"Label",children:"Long-term goal"})]})]}),i.jsx(x,{id:"reach.grid",kind:"graphic",className:"reach__grid",role:"img","aria-label":`About ${be.reachedLabel.replace("~","")} of a ${be.goalLabel} goal, roughly ${r} percent.`,label:"Square grid",children:Array.from({length:Kl},(l,a)=>{const s=Math.max(0,Math.min(1,t-a));return i.jsx("span",{className:`reach__cell${s>=1?" is-filled":""}`,children:s>0&&s<1&&i.jsx("span",{className:"reach__partial",style:{width:`${s*100}%`}})},a)})}),i.jsx(x,{id:"reach.bar",kind:"graphic",className:"reach__bar","aria-hidden":"true",label:"Progress bar",children:i.jsx("span",{className:"reach__bar-fill",style:{width:`${e*100}%`}})}),i.jsxs("div",{className:"reach__scale mono","aria-hidden":"true",children:[i.jsx(x,{id:"reach.marker",kind:"text",as:"span",className:"reach__marker",style:{left:`${e*100}%`},label:"Marker",children:`▲ ${be.reachedLabel} ≈ ${r}%`}),i.jsx(x,{id:"reach.scaleGoal",kind:"text",as:"span",className:"reach__scale-goal",label:"Goal",children:be.goalLabel})]}),i.jsxs(x,{id:"reach.caption",htmlId:"reach-fig-caption",kind:"container",as:"figcaption",className:"reach__caption",label:"Caption",children:[i.jsx(x,{id:"reach.caption.unit",kind:"text",as:"span",className:"mono-label",label:"Unit",children:`1 square = ${n/1e6}M users`}),i.jsx(x,{id:"reach.caption.definition",kind:"text",as:"span",className:"reach__definition",label:"Definition",children:be.definition})]})]})}function j0(){return i.jsx(x,{id:"reach",htmlId:"ambition",kind:"section",as:"section",className:"section section--ink","aria-labelledby":"reach-title",file:"Reach",label:"Reach",children:i.jsxs("div",{className:"wrap reach",children:[i.jsxs(x,{id:"reach.copy",kind:"container",className:"reach__copy",label:"Copy",children:[i.jsx(eo,{id:"reach",num:"02",children:"The billion-user journey"}),i.jsxs(x,{id:"reach.title",htmlId:"reach-title",kind:"heading",as:"h2",className:"display h2",label:"Heading",children:[i.jsx(x,{id:"reach.title.reached",kind:"text",as:"span",className:"line",label:"Line 1",children:be.headingReached})," ",i.jsx(x,{id:"reach.title.goal",kind:"text",as:"span",className:"line reach__goal-line",label:"Line 2",children:be.headingGoal})]}),i.jsx(x,{id:"reach.body",kind:"text",as:"p",className:"reach__body",label:"Body",children:be.body}),i.jsx(x,{id:"reach.standard",kind:"text",as:"p",className:"reach__standard",label:"Standard",children:be.standard})]}),i.jsx(b0,{})]})})}function vp({id:e,accent:n,letter:t,kicker:r}){return i.jsxs(x,{id:`${e}.band`,kind:"container",className:`case__band surface-${n}`,label:"Band",children:[i.jsx(x,{id:`${e}.letter`,kind:"text",as:"span",className:"case__letter","aria-hidden":"true",label:"Letter",children:t}),i.jsx(x,{id:`${e}.kicker`,kind:"text",as:"span",className:"mono",label:"Kicker",children:r})]})}function ai({id:e,term:n,children:t}){return i.jsxs(i.Fragment,{children:[i.jsx(x,{id:`${e}.label`,kind:"text",as:"dt",label:"Label",children:n}),i.jsx(x,{id:e,kind:"text",as:"dd",label:n,children:t})]})}function N0({c:e}){const n=`work.${e.id}`;return i.jsxs(x,{id:n,kind:"container",as:"article",className:"case","aria-labelledby":`case-${e.id}`,label:e.title,children:[i.jsx(vp,{id:n,accent:e.accent,letter:e.letter,kicker:e.kicker}),i.jsxs("div",{className:"case__body",children:[i.jsxs("div",{className:"case__intro",children:[i.jsx(x,{id:`${n}.title`,htmlId:`case-${e.id}`,kind:"heading",as:"h3",className:"case__title",label:"Title",children:e.title}),i.jsx(x,{id:`${n}.summary`,kind:"text",as:"p",className:"case__summary",label:"Summary",children:e.summary}),i.jsx(x,{id:`${n}.tags`,kind:"container",as:"ul",className:"chips","aria-label":"Themes",label:"Tags",children:e.tags.map((t,r)=>i.jsx(x,{id:`${n}.tag.${r}`,kind:"text",as:"li",label:"Tag",children:t},t))})]}),i.jsxs("dl",{className:"case__fields",children:[i.jsx("div",{children:i.jsx(ai,{id:`${n}.problem`,term:"Customer problem",children:e.problem})}),i.jsx("div",{children:i.jsx(ai,{id:`${n}.role`,term:"My role",children:e.role})}),i.jsx("div",{children:i.jsx(ai,{id:`${n}.complexity`,term:"Complexity",children:e.complexity})}),i.jsxs("div",{children:[i.jsx(x,{id:`${n}.changed.label`,kind:"text",as:"dt",label:"Label",children:"What changed"}),i.jsx("dd",{children:i.jsx("ul",{className:"arrow-list",children:e.changed.map((t,r)=>i.jsx(x,{id:`${n}.changed.${r}`,kind:"text",as:"li",label:`Result ${r+1}`,children:t},t))})})]}),i.jsx("div",{className:"case__shows",children:i.jsx(ai,{id:`${n}.shows`,term:"What it shows about how I work",children:e.shows})})]})]})]})}function Gl({id:e,label:n,title:t,text:r,className:l="builder__col",children:a}){return i.jsxs(x,{id:`work.builder.${e}`,kind:"container",as:"section",className:l,"aria-labelledby":`builder-${e}`,label:t,children:[i.jsx(x,{id:`work.builder.${e}.label`,kind:"text",as:"p",className:"mono-label",label:"Label",children:n}),i.jsx(x,{id:`work.builder.${e}.title`,htmlId:`builder-${e}`,kind:"heading",as:"h4",label:"Title",children:t}),i.jsx(x,{id:`work.builder.${e}.text`,kind:"text",as:"p",label:"Text",children:r}),a]})}function S0(){const e=Ki.builder;return i.jsxs(x,{id:"work.builder",kind:"container",as:"article",className:"case builder","aria-labelledby":"case-builder",label:"Builder card",children:[i.jsx(vp,{id:"work.builder",accent:"coral",letter:e.letter,kicker:e.kicker}),i.jsxs("div",{className:"builder__body",children:[i.jsx(x,{id:"work.builder.title",htmlId:"case-builder",kind:"heading",as:"h3",className:"case__title builder__title",label:"Title",children:e.title}),i.jsxs("div",{className:"builder__cols",children:[i.jsx(Gl,{id:"then",...e.then}),i.jsx(Gl,{id:"work",...e.atWork}),i.jsxs(Gl,{id:"now",...e.now,className:"builder__col builder__col--now",children:[e.now.projects.length>0&&i.jsx(x,{id:"work.builder.projects",kind:"container",as:"ul",className:"projects",label:"Projects",children:e.now.projects.map((n,t)=>i.jsxs("li",{children:[n.url?i.jsxs(x,{id:`work.builder.project.${t}`,kind:"link",as:"a",href:n.url,target:"_blank",className:"projects__name",label:`${n.name} link`,children:[i.jsx(x,{id:`work.builder.project.${t}.name`,kind:"text",as:"span",label:"Name",children:n.name}),i.jsx(Us,{size:16,strokeWidth:2.75,"aria-hidden":"true"})]}):i.jsx(x,{id:`work.builder.project.${t}.name`,kind:"text",as:"span",className:"projects__name",label:"Name",children:n.name}),i.jsx(x,{id:`work.builder.project.${t}.text`,kind:"text",as:"span",className:"projects__text",label:"Description",children:n.text})]},n.name))}),e.now.tools.length>0&&i.jsxs(x,{id:"work.builder.toolkit",kind:"container",className:"toolkit",label:"Toolkit",children:[i.jsx(x,{id:"work.builder.toolkit.label",kind:"text",as:"span",className:"mono-label",label:"Label",children:"Toolkit for personal builds"}),i.jsx("ul",{className:"chips chips--small",children:e.now.tools.map((n,t)=>i.jsx(x,{id:`work.builder.tool.${t}`,kind:"text",as:"li",label:"Tool",children:n},n))})]})]})]}),i.jsxs(x,{id:"work.builder.shows",kind:"text",as:"p",className:"builder__shows",label:"What it shows",children:[i.jsx(x,{id:"work.builder.shows.label",kind:"text",as:"span",className:"mono-label",label:"Label",children:"What it shows"})," ",i.jsx(x,{id:"work.builder.shows.text",kind:"text",as:"span",label:"Text",children:e.shows})]})]})]})}function C0(){return i.jsxs("svg",{className:"vd-illo",viewBox:"0 0 520 360",role:"img","aria-label":"Illustration: a web page with one button selected for direct editing, a floating toolbar, and an inspector panel.",children:[i.jsx("rect",{x:"18",y:"18",width:"494",height:"334",fill:"#000"}),i.jsx("rect",{x:"10",y:"10",width:"494",height:"334",fill:"#fff",stroke:"#000",strokeWidth:"3"}),i.jsx("rect",{x:"10",y:"10",width:"494",height:"28",fill:"#000"}),[0,1,2].map(e=>i.jsx("rect",{x:22+e*16,y:"19",width:"10",height:"10",fill:["#ff6e6c","#d7ff28","#87ceeb"][e]},e)),i.jsx("rect",{x:"34",y:"62",width:"220",height:"18",fill:"#000"}),i.jsx("rect",{x:"34",y:"88",width:"168",height:"18",fill:"#000"}),i.jsx("rect",{x:"34",y:"122",width:"250",height:"6",fill:"#9aa3ab"}),i.jsx("rect",{x:"34",y:"136",width:"226",height:"6",fill:"#9aa3ab"}),i.jsx("rect",{x:"34",y:"150",width:"196",height:"6",fill:"#9aa3ab"}),i.jsx("rect",{className:"vd-illo__btn",x:"34",y:"184",width:"124",height:"34",fill:"#d7ff28",stroke:"#000",strokeWidth:"3"}),i.jsx("rect",{x:"54",y:"198",width:"60",height:"6",fill:"#000"}),i.jsx("rect",{x:"168",y:"184",width:"96",height:"34",fill:"#fff",stroke:"#000",strokeWidth:"3"}),i.jsx("rect",{x:"27",y:"177",width:"138",height:"48",fill:"none",stroke:"#0369a1",strokeWidth:"2.5",strokeDasharray:"6 4"}),[[27,177],[165,177],[27,225],[165,225]].map(([e,n])=>i.jsx("rect",{x:e-5,y:n-5,width:"10",height:"10",fill:"#fff",stroke:"#0369a1",strokeWidth:"2.5"},`${e}-${n}`)),i.jsx("rect",{x:"27",y:"157",width:"58",height:"16",fill:"#0369a1"}),i.jsx("text",{x:"56",y:"169",fill:"#fff",fontFamily:"JetBrains Mono, monospace",fontSize:"10",fontWeight:"700",textAnchor:"middle",children:"BUTTON"}),i.jsx("rect",{x:"40",y:"250",width:"250",height:"42",fill:"#000"}),i.jsx("rect",{x:"34",y:"244",width:"250",height:"42",fill:"#fff",stroke:"#000",strokeWidth:"3"}),i.jsx("text",{x:"56",y:"271",fontFamily:"Archivo Black, sans-serif",fontSize:"15",children:"Aa"}),i.jsx("rect",{x:"92",y:"256",width:"18",height:"18",fill:"#d7ff28",stroke:"#000",strokeWidth:"2.5"}),i.jsx("path",{d:"M126 274 V264 Q126 256 134 256 H142",fill:"none",stroke:"#000",strokeWidth:"2.5"}),i.jsx("rect",{x:"156",y:"256",width:"18",height:"18",fill:"#fff",stroke:"#000",strokeWidth:"2.5"}),i.jsx("rect",{x:"160",y:"260",width:"18",height:"18",fill:"none",stroke:"#000",strokeWidth:"2.5"}),i.jsx("line",{x1:"190",y1:"254",x2:"190",y2:"276",stroke:"#000",strokeWidth:"2"}),i.jsx("rect",{x:"200",y:"256",width:"72",height:"18",fill:"#eef9fd",stroke:"#000",strokeWidth:"2"}),i.jsx("rect",{x:"207",y:"263",width:"44",height:"4",fill:"#9aa3ab"}),i.jsx("rect",{x:"372",y:"38",width:"132",height:"306",fill:"#87ceeb",stroke:"#000",strokeWidth:"3"}),["FILL","RADIUS","SHADOW","TEXT"].map((e,n)=>i.jsxs("g",{children:[i.jsx("text",{x:"386",y:70+n*66,fontFamily:"JetBrains Mono, monospace",fontSize:"10",fontWeight:"700",children:e}),i.jsx("rect",{x:"386",y:78+n*66,width:"104",height:"24",fill:"#fff",stroke:"#000",strokeWidth:"2.5"}),n===0&&i.jsx("rect",{x:"392",y:"84",width:"12",height:"12",fill:"#d7ff28",stroke:"#000",strokeWidth:"2"}),i.jsx("rect",{x:n===0?410:394,y:88+n*66,width:n===0?50:40+n*8,height:"4",fill:"#000"})]},e))]})}function z0(){const e=Ki.featured,{mode:n}=fl(),t=ml(),[r,l]=w.useState(!1),a=n==="design"?$r(t,"work.featured.thinking")||$r(t,"work.featured.notes"):r,s=e.implemented.length>0||e.simulated.length>0;return i.jsxs(x,{id:"work.featured",htmlId:"prototype-case",kind:"container",as:"article",className:"featured grid-paper","aria-labelledby":"featured-title",label:"Featured prototype",children:[i.jsxs("div",{className:"featured__top",children:[i.jsx(x,{id:"work.featured.label",kind:"text",as:"p",className:"sticker surface-coral featured__label",label:"Sticker",children:e.label}),i.jsx(x,{id:"work.featured.letter",kind:"text",as:"span",className:"case__letter featured__letter","aria-hidden":"true",label:"Letter",children:"D"})]}),i.jsxs("div",{className:"featured__grid",children:[i.jsxs("div",{className:"featured__copy",children:[i.jsx(x,{id:"work.featured.title",htmlId:"featured-title",kind:"heading",as:"h3",className:"display featured__title",label:"Title",children:e.title}),i.jsx(x,{id:"work.featured.desc",kind:"text",as:"p",className:"featured__desc",label:"Description",children:e.description}),i.jsx(x,{id:"work.featured.insight",kind:"container",as:"blockquote",className:"featured__insight",label:"Insight",children:i.jsx(x,{id:"work.featured.insight.text",kind:"text",as:"p",label:"Quote",children:e.insight})})]}),i.jsx(x,{id:"work.featured.visual",kind:"graphic",className:"featured__visual",label:"Illustration",children:i.jsx(C0,{})})]}),i.jsx(x,{id:"work.featured.steps",kind:"container",as:"ol",className:"steps",label:"Steps",children:e.steps.map((o,c)=>i.jsxs(x,{id:`work.featured.step.${c}`,kind:"container",as:"li",className:"step",label:`Step ${c+1}`,children:[i.jsx(x,{id:`work.featured.step.${c}.num`,kind:"text",as:"span",className:"step__num","aria-hidden":"true",label:"Number",children:String(c+1)}),i.jsx(x,{id:`work.featured.step.${c}.label`,kind:"heading",as:"h4",className:"step__label",label:"Label",children:o.label}),i.jsx(x,{id:`work.featured.step.${c}.text`,kind:"text",as:"p",label:"Text",children:o.text})]},o.label))}),i.jsxs(x,{id:"work.featured.actions",kind:"container",className:"featured__actions",label:"Buttons",children:[i.jsxs(x,{id:"work.featured.open",kind:"button",as:"a",className:"btn btn--ink",href:Ie.prototypeUrl,target:"_blank",label:"Open the prototype",children:[i.jsx(x,{id:"work.featured.open.label",kind:"text",as:"span",label:"Label",children:"Open the prototype"}),i.jsx("span",{"aria-hidden":"true",children:"↗"})]}),s&&i.jsxs(x,{id:"work.featured.thinking",kind:"button",as:"button",type:"button",className:"btn","aria-expanded":a,onClick:()=>l(o=>!o),label:"Explore the thinking",children:[i.jsx(x,{id:"work.featured.thinking.label",kind:"text",as:"span",label:"Label",children:"Explore the thinking"}),i.jsx(Sr,{className:"btn__chev",size:18,strokeWidth:2.75,"aria-hidden":"true"})]})]}),s&&i.jsxs(x,{id:"work.featured.notes",kind:"container",className:"thinking",hidden:!a,label:"Thinking",children:[i.jsxs("div",{className:"thinking__col",children:[i.jsx(x,{id:"work.featured.notes.implemented.label",kind:"text",as:"h4",className:"mono-label",label:"Label",children:"Working in the prototype"}),i.jsx("ul",{className:"arrow-list",children:e.implemented.map((o,c)=>i.jsx(x,{id:`work.featured.notes.implemented.${c}`,kind:"text",as:"li",label:`Item ${c+1}`,children:o},o))})]}),i.jsxs("div",{className:"thinking__col",children:[i.jsx(x,{id:"work.featured.notes.simulated.label",kind:"text",as:"h4",className:"mono-label",label:"Label",children:"Simulated"}),i.jsx("ul",{className:"arrow-list",children:e.simulated.map((o,c)=>i.jsx(x,{id:`work.featured.notes.simulated.${c}`,kind:"text",as:"li",label:`Item ${c+1}`,children:o},o))})]})]}),i.jsx(x,{id:"work.featured.disclosure",kind:"text",as:"p",className:"featured__disclosure mono",label:"Disclosure",children:e.disclosure})]})}function E0(){return i.jsx(x,{id:"work",htmlId:"work",kind:"section",as:"section",className:"section section--paper","aria-labelledby":"work-title",file:"Work",label:"Selected work",children:i.jsxs("div",{className:"wrap",children:[i.jsx(gl,{id:"work",num:"05",label:"Selected work",titleId:"work-title",title:Ki.heading}),i.jsxs("div",{className:"cases",children:[Ki.cases.map(e=>i.jsx(N0,{c:e},e.id)),i.jsx(S0,{}),i.jsx(z0,{})]})]})})}const M0=w.memo(function(){return i.jsxs(i.Fragment,{children:[i.jsx(l0,{}),i.jsx(u0,{}),i.jsx(w0,{}),i.jsx(j0,{}),i.jsx(i0,{}),i.jsx(f0,{}),i.jsx(E0,{}),i.jsx(a0,{}),i.jsx(s0,{})]})});function $0(){const{mode:e,rootRef:n,viewportRef:t}=Oe(),r=l=>{var g;if(e==="design")return;const a=l.target.closest("a"),s=a==null?void 0:a.getAttribute("href");if(!a||!(s!=null&&s.startsWith("#")))return;l.preventDefault();const o=n.current,c=t.current,d=s==="#"?o:o==null?void 0:o.querySelector(`#${CSS.escape(s.slice(1))}`);if(!o||!c||!d)return;const f=((g=o.querySelector(".header"))==null?void 0:g.offsetHeight)??0,h=d.getBoundingClientRect().top-c.getBoundingClientRect().top+c.scrollTop;c.scrollTo({top:Math.max(0,h-f-16),behavior:"smooth"})};return i.jsx("div",{className:"site","data-mode":e,ref:n,onClick:r,children:i.jsx(M0,{})})}function kp({size:e=22}){return i.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24","aria-label":"bolt",children:i.jsx("path",{d:"M7.2 2.5h3.9l-1.3 6.1c.9-.9 2.1-1.4 3.5-1.4 3 0 5 2.2 5 5.5 0 4-2.8 7-6.9 7-1.8 0-3.2-.6-4-1.6l-.3 1.3H3.3L7.2 2.5Zm4.1 15.1c1.9 0 3.2-1.5 3.2-3.5 0-1.6-1-2.6-2.5-2.6-1.9 0-3.2 1.5-3.2 3.5 0 1.6 1 2.6 2.5 2.6Z",fill:"currentColor"})})}function _p({size:e=18,active:n=!1}){return i.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,children:[i.jsx("path",{d:"M4.6 3.9 11.5 20l2.1-6.4 6.4-2.1L4.6 3.9Z",stroke:n?"#1A8CFF":"currentColor",fill:n?"#1A8CFF":"none",fillOpacity:n?.22:0,strokeWidth:"1.8",strokeLinejoin:"round"}),i.jsx("path",{d:"M18.2 2.2l.55 1.45 1.45.55-1.45.55-.55 1.45-.55-1.45-1.45-.55 1.45-.55.55-1.45Z",fill:n?"#1A8CFF":"currentColor",stroke:n?"#1A8CFF":"currentColor",strokeWidth:"1",strokeLinejoin:"round"}),i.jsx("path",{d:"M14.2 14.2 19 19",stroke:n?"#1A8CFF":"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})}function L0({size:e=18}){return i.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:i.jsx("path",{d:"M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"})})}function wp(){return i.jsxs("div",{className:"msg__feedback",children:[i.jsx("button",{"aria-label":"Copy",children:i.jsx(Qs,{size:15})}),i.jsx("button",{"aria-label":"Good response",children:i.jsx(Om,{size:15})}),i.jsx("button",{"aria-label":"Bad response",children:i.jsx(Dm,{size:15})}),i.jsx("button",{"aria-label":"More",children:i.jsx(Uu,{size:15})})]})}function T0({m:e}){const[n,t]=w.useState(!1);return e.role==="version"?i.jsxs("div",{className:`vcard ${e.current?"is-current":""}`,children:[i.jsxs("div",{children:[i.jsx("strong",{children:e.title}),i.jsx("span",{children:e.subtitle})]}),i.jsxs("div",{className:"vcard__actions",children:[i.jsx(tm,{size:17,className:e.current?"is-blue":""}),!e.current&&i.jsxs(i.Fragment,{children:[i.jsx(hl,{size:17}),i.jsx(Gs,{size:17})]})]})]}):e.role==="user"?i.jsx("div",{className:"msg msg--user",children:e.text}):e.role==="typing"?i.jsxs("div",{className:"msg msg--bot",children:[i.jsx("div",{className:"msg__brand",children:"bolt"}),i.jsxs("div",{className:"typing",children:[i.jsx("i",{}),i.jsx("i",{}),i.jsx("i",{})]})]}):i.jsxs("div",{className:"msg msg--bot",children:[i.jsx("div",{className:"msg__brand",children:"bolt"}),e.badge&&i.jsxs("div",{className:"msg__badge",children:[i.jsx(_p,{size:14,active:!0})," ",e.badge]}),e.skill&&i.jsxs("div",{className:"msg__skill",children:[i.jsx(Tm,{size:15})," Skill ",i.jsx("code",{children:e.skill})]}),i.jsx("p",{className:"msg__text",children:e.text}),e.actions&&i.jsxs("div",{className:`actions ${n?"is-open":""}`,children:[i.jsxs("button",{className:"actions__head",onClick:()=>t(r=>!r),children:[i.jsx(lm,{size:15}),i.jsxs("span",{children:[e.actions.length," actions taken"]}),i.jsx(Sr,{size:16})]}),n&&i.jsx("ul",{children:e.actions.map(r=>i.jsxs("li",{children:[i.jsx(Cr,{size:13})," ",r]},r))})]}),i.jsx(wp,{})]})}function P0({onMode:e}){const{mode:n}=Oe(),{messages:t,add:r,remove:l}=Zs(),[a,s]=w.useState("chat"),[o,c]=w.useState(""),[d,f]=w.useState(!0),h=w.useRef(null);w.useEffect(()=>s(n==="design"?"layers":"chat"),[n]),w.useEffect(()=>{const _=h.current;_&&a==="chat"&&_.scrollTo({top:_.scrollHeight,behavior:"smooth"})},[t.length,a]);const g=()=>{const _=o.trim();if(!_)return;c(""),r({role:"user",text:_});const v=r({role:"typing"});setTimeout(()=>{l(v),r({role:"assistant",text:"This is a prototype, so chat replies are simulated. To change the page yourself, open ✦ Visual Design (left of Preview): click any element to restyle it, double-click text to edit, or ask the AI box in the toolbar to restyle a button."})},1300)};return i.jsxs("aside",{className:"left",children:[n==="design"&&i.jsxs("div",{className:"left__tabs",children:[i.jsx("button",{className:a==="chat"?"is-active":"",onClick:()=>s("chat"),children:"Chat"}),i.jsx("button",{className:a==="layers"?"is-active":"",onClick:()=>s("layers"),children:"Layers"})]}),a==="layers"&&n==="design"?i.jsx(vg,{}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"chat",ref:h,onScroll:_=>{const v=_.currentTarget;f(v.scrollHeight-v.scrollTop-v.clientHeight<40)},children:[i.jsx(wp,{}),t.map(_=>i.jsx(T0,{m:_},_.id))]}),!d&&i.jsx("button",{className:"chat__down","aria-label":"Scroll to bottom",onClick:()=>{var _;return(_=h.current)==null?void 0:_.scrollTo({top:1e6,behavior:"smooth"})},children:i.jsx(Ws,{size:16})}),i.jsxs("div",{className:"composer",children:[i.jsx("textarea",{value:o,placeholder:"How can Bolt help you today? (or /command)",onChange:_=>c(_.target.value),onKeyDown:_=>{_.key==="Enter"&&!_.shiftKey&&(_.preventDefault(),g())}}),i.jsxs("div",{className:"composer__bar",children:[i.jsx("button",{className:"composer__plus","aria-label":"Attach",children:i.jsx($t,{size:18})}),i.jsxs("button",{className:"composer__pill",children:["Standard ",i.jsx(Hu,{size:13})]}),i.jsx("span",{className:"composer__spacer"}),i.jsxs("button",{className:`composer__pill ${n==="design"?"is-on":""}`,"data-tip":"Select an element to edit visually",onClick:()=>e(n==="design"?"preview":"design"),children:[i.jsx(qu,{size:15})," Select"]}),i.jsxs("button",{className:"composer__pill",children:[i.jsx(ym,{size:15})," Plan"]}),i.jsx("button",{className:"composer__icon","aria-label":"Voice",children:i.jsx(wm,{size:16})}),i.jsx("button",{className:"composer__send","aria-label":"Send",disabled:!o.trim(),onClick:g,children:i.jsx(Vs,{size:16,strokeWidth:2.5})})]})]})]})]})}const si=[{d:"desktop",icon:Qu,label:"Desktop"},{d:"tablet",icon:Yu,label:"Tablet"},{d:"mobile",icon:Gu,label:"Mobile"}];function A0({onMode:e,onToggleLeft:n,pending:t,onReload:r,onReset:l}){const{mode:a,device:s,setDevice:o}=Oe(),c=Rr(),[d,f]=w.useState(!1),h=w.useRef(null);Js(h,()=>f(!1),d);const g=si.find(b=>b.d===s),_=g.icon,v=[{m:"design",label:"Visual Design",tip:"Visual Design",icon:i.jsx(_p,{size:17,active:a==="design"})},{m:"preview",label:"Preview",tip:"Preview",icon:i.jsx(hl,{size:17})},{m:"code",label:"Code",tip:"Code",icon:i.jsx(sm,{size:17})},{m:"database",label:"Database",tip:"Database",icon:i.jsx(Wu,{size:16})}];return i.jsxs("header",{className:"top",children:[i.jsxs("div",{className:"top__left",children:[i.jsx("span",{className:"top__logo",children:i.jsx(kp,{size:24})}),i.jsx("span",{className:"top__slash",children:"/"}),i.jsx("span",{className:"top__avatar",children:"A"}),i.jsx(Hu,{size:13,className:"top__muted"}),i.jsx("span",{className:"top__project",title:"Alfred Chang · Personal Site",children:"Alfred Chang · Personal Site"}),i.jsx("button",{className:"top__icon","data-tip":"Discussion",children:i.jsx(_m,{size:17})}),i.jsx("button",{className:"top__icon","data-tip":"Version history",children:i.jsx(fm,{size:17})}),i.jsx("button",{className:"top__icon","data-tip":"Toggle sidebar",onClick:n,children:i.jsx(Cm,{size:17})}),i.jsx("nav",{className:"modes","aria-label":"Workspace view",children:v.map(b=>i.jsxs("button",{className:`modes__btn ${a===b.m?"is-active":""} ${b.m==="design"?"modes__btn--design":""}`,"data-tip":a===b.m?void 0:b.tip,"data-tip-kbd":b.m==="design"?"D":void 0,"aria-label":b.tip,"aria-pressed":a===b.m,onClick:()=>e(a===b.m&&b.m==="design"?"preview":b.m),children:[b.icon,a===b.m&&i.jsx("span",{children:b.label}),b.m==="code"&&t>0&&a!=="code"&&i.jsx("i",{className:"modes__dot",title:`${t} edits not yet in code`})]},b.m))}),i.jsxs("div",{className:"top__menu",ref:h,children:[i.jsx("button",{className:"top__icon","data-tip":"Project settings",onClick:()=>f(b=>!b),children:i.jsx(Pm,{size:17})}),d&&i.jsx("div",{className:"menu",children:i.jsx("button",{onClick:()=>{f(!1),l()},children:"Reset prototype to original"})})]})]}),i.jsxs("div",{className:"urlbar",children:[i.jsx("span",{className:"urlbar__path",children:"/"}),i.jsx("button",{className:"top__icon","data-tip":"Reload preview",onClick:r,children:i.jsx(Ku,{size:15})}),i.jsx("button",{className:"top__icon","data-tip":`${g.label} — click to switch`,onClick:()=>o(si[(si.indexOf(g)+1)%si.length].d),children:i.jsx(_,{size:15})}),i.jsx("button",{className:"top__icon","data-tip":"More",children:i.jsx(Uu,{size:15})})]}),i.jsxs("div",{className:"top__right",children:[i.jsx("button",{className:"top__icon","data-tip":"GitHub",children:i.jsx(L0,{size:19})}),i.jsx("button",{className:"btn btn--light",onClick:()=>c("Upgrade is not part of this prototype"),children:"Upgrade"}),i.jsx("button",{className:"btn btn--ghost",onClick:()=>c("Share link copied (prototype)"),children:"Share"}),i.jsx("button",{className:"btn btn--blue",onClick:()=>c("Publishing is disabled in this prototype"),children:"Publish"})]})]})}const I0={desktop:"100%",tablet:"834px",mobile:"390px"};function R0(){const[e,n]=w.useState("preview");return i.jsx(Ym,{children:i.jsx(qm,{children:i.jsx(jg,{children:i.jsx(Km,{mode:e,setMode:n,children:i.jsx(F0,{})})})})})}function Yl(e,n){return[...new Set([...Object.keys(e),...Object.keys(n)])].filter(t=>JSON.stringify(e[t])!==JSON.stringify(n[t]))}function F0(){const{mode:e,setMode:n,device:t,getEl:r,viewportRef:l,select:a}=Oe(),{doc:s,compiled:o}=et(),c=yn(),d=Zs(),f=Rr(),[h,g]=w.useState(!0),[_,v]=w.useState(null),[b,j]=w.useState(null),[p,u]=w.useState(0),[m,k]=w.useState(!0),N=w.useRef(null),y=w.useMemo(()=>Yl(o,s).length,[o,s]),C=N.current?Yl(N.current,s).length:0,$=w.useCallback(()=>{const U=N.current;if(N.current=null,!U)return;const F=Yl(U,s).length;if(F>0){const ne=d.messages.filter(re=>re.role==="version").length;d.add({role:"version",title:`Visual Design edits · ${F} ${F===1?"element":"elements"}`,subtitle:`Version ${ne+2} at ${Ng()}`,current:!0})}},[d,s]),S=w.useCallback(U=>{if(U!==e){if(e==="design"&&$(),U==="design"&&(N.current=s),U==="code"){const F=kg(o,s,r);if(F.length){v(F);return}}n(U)}},[e,$,s,o,r,n]),E=w.useRef(_);E.current=_;const P=w.useCallback(()=>{var F;const U=E.current;U&&j({ids:U.map(ne=>ne.id),at:Date.now(),focusFile:(F=U[0])==null?void 0:F.file}),v(null),c.markCompiled(),n("code")},[c,n]);w.useEffect(()=>{const U=F=>{const ne=F.target;F.metaKey||F.ctrlKey||F.altKey||ne.closest("input, textarea, select, [contenteditable]")||(F.key==="d"||F.key==="D")&&S(e==="design"?"preview":"design")};return window.addEventListener("keydown",U),()=>window.removeEventListener("keydown",U)},[e,S]);const H=e==="design"||e==="preview";return i.jsxs("div",{className:`app mode-${e}`,children:[i.jsx(A0,{onMode:S,onToggleLeft:()=>g(U=>!U),pending:y,onReload:()=>u(U=>U+1),onReset:()=>{c.resetAll(),d.reset(),j(null),a(null),f("Prototype reset to the original design")}}),i.jsxs("div",{className:"body",children:[h&&i.jsx(P0,{onMode:S}),i.jsx("main",{className:"main",children:i.jsxs("div",{className:"workspace",children:[e==="code"&&i.jsx(fg,{sync:b}),e==="database"&&i.jsx(D0,{}),i.jsxs("div",{className:"canvas-area",style:{display:H?void 0:"none"},children:[e==="design"&&i.jsx(Fg,{onDone:()=>S("preview"),editCount:C}),i.jsxs("div",{className:"canvas-row",children:[i.jsxs("div",{className:`canvas ${e==="design"?"is-design":""} device-${t}`,children:[i.jsx("div",{className:"canvas__scroll",ref:l,children:i.jsx("div",{className:"canvas__device",style:{width:I0[t]},children:i.jsx($0,{})},p)}),i.jsx(Rg,{}),e==="preview"&&m&&i.jsxs("div",{className:"made-in",children:[i.jsx(kp,{size:16}),i.jsx("span",{children:"Made in Bolt"}),i.jsx("button",{"aria-label":"Hide badge",onClick:()=>k(!1),children:i.jsx(Qi,{size:13})})]})]}),e==="design"&&i.jsx(Dg,{})]})]})]})})]}),_&&i.jsx(_g,{changes:_,onDone:P})]})}function D0(){return i.jsx("div",{className:"db",children:i.jsxs("div",{className:"db__card",children:[i.jsx("span",{className:"db__icon",children:i.jsx(Wu,{size:22})}),i.jsx("h3",{children:"No database connected"}),i.jsx("p",{children:"This portfolio is a static site. Connect a database to store contact form submissions or project analytics."}),i.jsxs("button",{className:"btn btn--blue",children:[i.jsx(Em,{size:15})," Connect Supabase"]}),i.jsx("div",{className:"db__ghost",children:["contacts","projects","page_views"].map(e=>i.jsxs("div",{children:[i.jsx(Fm,{size:14})," ",e,i.jsx("em",{children:"suggested"})]},e))})]})})}Iu(document.getElementById("root")).render(i.jsx(w.StrictMode,{children:i.jsx(R0,{})}));
