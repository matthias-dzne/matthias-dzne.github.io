import{s as k,n as h,o as w}from"../chunks/scheduler.CtbWrGNo.js";import{S as P,i as E,e as d,s as y,o as b,c as m,g as x,a as C,j as p,f as c,t as H,b as $,d as L,l as M,n as j}from"../chunks/index.BJcfm0F_.js";function q(r){let t,l="Loading...";return{c(){t=d("p"),t.textContent=l},l(a){t=m(a,"P",{"data-svelte-h":!0}),x(t)!=="svelte-qdsr2u"&&(t.textContent=l)},m(a,n){p(a,t,n)},p:h,d(a){a&&c(t)}}}function D(r){let t,l=r[0].data+"",a;return{c(){t=d("p"),a=H(l)},l(n){t=m(n,"P",{});var o=$(t);a=L(o,l),o.forEach(c)},m(n,o){p(n,t,o),M(t,a)},p(n,o){o&1&&l!==(l=n[0].data+"")&&j(a,l)},d(n){n&&c(t)}}}function S(r){let t,l="API call example",a,n,o='Visit <a href="/">Home</a>',u,f;function v(e,i){return e[0]?D:q}let _=v(r),s=_(r);return{c(){t=d("h1"),t.textContent=l,a=y(),n=d("p"),n.innerHTML=o,u=y(),s.c(),f=b()},l(e){t=m(e,"H1",{"data-svelte-h":!0}),x(t)!=="svelte-1lb5w0y"&&(t.textContent=l),a=C(e),n=m(e,"P",{"data-svelte-h":!0}),x(n)!=="svelte-155i0u8"&&(n.innerHTML=o),u=C(e),s.l(e),f=b()},m(e,i){p(e,t,i),p(e,a,i),p(e,n,i),p(e,u,i),s.m(e,i),p(e,f,i)},p(e,[i]){_===(_=v(e))&&s?s.p(e,i):(s.d(1),s=_(e),s&&(s.c(),s.m(f.parentNode,f)))},i:h,o:h,d(e){e&&(c(t),c(a),c(n),c(u),c(f)),s.d(e)}}}async function T(){try{const r=await fetch("/api/example");if(!r.ok)throw new Error("Error");return await r.json()}catch(r){return console.error("Error fetching data",r),null}}function A(r,t,l){let a=null;return w(async()=>{l(0,a=await T())}),[a]}class V extends P{constructor(t){super(),E(this,t,A,S,k,{})}}export{V as component};
