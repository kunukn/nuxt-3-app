import{j as f,r as d,S}from"./vue.esm-bundler-31bd7b2c.js";const{sanitizeStoryContextUpdate:v}=__STORYBOOK_MODULE_PREVIEW_API__;var M=Object.create,j=Object.defineProperty,m=Object.getOwnPropertyDescriptor,P=Object.getOwnPropertyNames,U=Object.getPrototypeOf,z=Object.prototype.hasOwnProperty,I=(e,r)=>function(){return r||(0,e[P(e)[0]])((r={exports:{}}).exports,r),r.exports},A=(e,r,t,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of P(r))!z.call(e,a)&&a!==t&&j(e,a,{get:()=>r[a],enumerable:!(o=m(r,a))||o.enumerable});return e},N=(e,r,t)=>(t=e!=null?M(U(e)):{},A(r||!e||!e.__esModule?j(t,"default",{value:e,enumerable:!0}):t,e));function D(e){return typeof e=="function"?{render:e,name:e.name}:e}function y(e,r){let t=e;return t==null?null:r?{...D(t),components:{...t.components||{},story:r}}:{render(){return f(t)}}}function B(e,r){return r.reduce((t,o)=>a=>{let n,p=o(s=>{let u=v(s);return s&&(u.args=Object.assign(a.args,u.args)),n=t({...a,...u}),n},a);return n||(n=t(a)),p===n?n:y(p,f(n))},t=>y(e(t)))}var H=(e,r)=>{let{id:t,component:o}=r;if(!o)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);return()=>f(o,e,T(e,r))},w=e=>{},J=e=>{w=e},_=new Map,b=new Map;function K({storyFn:e,forceRemount:r,showMain:t,showException:o,storyContext:a},n){var g;a.args=d(a.args);let p=e();b.set(n,p);let s=(g=p.render)==null?void 0:g.call(p).props,u=s?d(s):a.args,i=_.get(n);if(i&&!r)return C(i.reactiveArgs,u),()=>{O(i.vueApp,n)};i&&r&&O(i.vueApp,n);let c=S({render(){let l=b.get(n),h=l&&l.template?l:p;return _.set(n,{vueApp:c,reactiveArgs:u}),f(h)}});return c.config.errorHandler=l=>o(l),w(c),c.mount(n),t(),()=>{O(c,n)}}function T(e,r){let{argTypes:t}=r,o=Object.entries(e).filter(([a,n])=>{var p,s;return((s=(p=t[a])==null?void 0:p.table)==null?void 0:s.category)==="slots"}).map(([a,n])=>[a,typeof n=="function"?n:()=>n]);return Object.fromEntries(o)}function C(e,r){r&&(Object.keys(e).forEach(t=>{delete e[t]}),Object.assign(e,r))}function O(e,r){e==null||e.unmount(),_.has(r)&&_.delete(r)}export{N as _,I as a,K as b,B as d,H as r,J as s};
//# sourceMappingURL=chunk-KSYMO6G6-6fe3f883.js.map
