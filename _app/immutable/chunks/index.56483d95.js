function y(){}function U(t,e){for(const n in e)t[n]=e[n];return t}function D(t){return t()}function L(){return Object.create(null)}function x(t){t.forEach(D)}function S(t){return typeof t=="function"}function mt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function V(t){return Object.keys(t).length===0}function B(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function pt(t){let e;return B(t,n=>e=n)(),e}function yt(t,e,n){t.$$.on_destroy.push(B(e,n))}function gt(t,e,n,i){if(t){const s=G(t,e,n,i);return t[0](s)}}function G(t,e,n,i){return t[1]&&i?U(n.ctx.slice(),t[1](i(e))):n.ctx}function xt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function bt(t,e,n,i,s,o){if(s){const r=G(e,n,i,o);t.p(r,s)}}function $t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Et(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function vt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function wt(t){const e={};for(const n in t)e[n]=!0;return e}function Tt(t,e,n){return t.set(n),e}function Nt(t){return t&&S(t.destroy)?t.destroy:y}let w=!1;function X(){w=!0}function Y(){w=!1}function Z(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function tt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=u?s+1:Z(1,s,$=>e[n[$]].claim_order,u))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,s=Math.max(a,s)}const o=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<o.length&&r[c].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(r[c],f)}}function et(t,e){if(w){for(tt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function nt(t,e,n){t.insertBefore(e,n||null)}function it(t,e,n){w&&!n?et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function At(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function R(t){return document.createElement(t)}function q(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function C(t){return document.createTextNode(t)}function kt(){return C(" ")}function St(){return C("")}function Ct(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function z(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const st=["width","height"];function Mt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&st.indexOf(i)===-1?t[i]=e[i]:z(t,i,e[i])}function jt(t,e){for(const n in e)z(t,n,e[n])}function Lt(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function rt(t){return Array.from(t.childNodes)}function F(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function W(t,e,n,i,s=!1){F(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function I(t,e,n,i){return W(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Ht(t,e,n){return I(t,e,n,R)}function Ot(t,e,n){return I(t,e,n,q)}function ct(t,e){return W(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>C(e),!0)}function Pt(t){return ct(t," ")}function H(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Dt(t,e){const n=H(t,"HTML_TAG_START",0),i=H(t,"HTML_TAG_END",n);if(n===i)return new O(void 0,e);F(t);const s=t.splice(n,i-n+1);v(s[0]),v(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new O(o,e)}function Bt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Gt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Rt(t,e,n){t.classList[n?"add":"remove"](e)}function ot(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function qt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class lt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=q(n.nodeName):this.e=R(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)nt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}class O extends lt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)it(this.t,this.n[n],e)}}function zt(t,e){return new t(e)}let g;function p(t){g=t}function b(){if(!g)throw new Error("Function called outside component initialization");return g}function Ft(t){b().$$.on_mount.push(t)}function Wt(t){b().$$.after_update.push(t)}function It(){const t=b();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=ot(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function Jt(t,e){return b().$$.context.set(t,e),e}function Kt(t){return b().$$.context.get(t)}function Qt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const h=[],P=[];let m=[];const N=[],J=Promise.resolve();let A=!1;function K(){A||(A=!0,J.then(Q))}function Ut(){return K(),J}function k(t){m.push(t)}function Vt(t){N.push(t)}const T=new Set;let d=0;function Q(){if(d!==0)return;const t=g;do{try{for(;d<h.length;){const e=h[d];d++,p(e),ut(e.$$)}}catch(e){throw h.length=0,d=0,e}for(p(null),h.length=0,d=0;P.length;)P.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];T.has(n)||(T.add(n),n())}m.length=0}while(h.length);for(;N.length;)N.pop()();A=!1,T.clear(),p(t)}function ut(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}function at(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const E=new Set;let _;function Xt(){_={r:0,c:[],p:_}}function Yt(){_.r||x(_.c),_=_.p}function ft(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Zt(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function te(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],l=e[o];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[o]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function ee(t){return typeof t=="object"&&t!==null?t:{}}function ne(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ie(t){t&&t.c()}function se(t,e){t&&t.l(e)}function _t(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||k(()=>{const r=t.$$.on_mount.map(D).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...r):x(r),t.$$.on_mount=[]}),o.forEach(k)}function dt(t,e){const n=t.$$;n.fragment!==null&&(at(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ht(t,e){t.$$.dirty[0]===-1&&(h.push(t),K(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function re(t,e,n,i,s,o,r,l=[-1]){const c=g;p(t);const u=t.$$={fragment:null,ctx:[],props:o,update:y,not_equal:s,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:L(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,$,...M)=>{const j=M.length?M[0]:$;return u.ctx&&s(u.ctx[a],u.ctx[a]=j)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](j),f&&ht(t,a)),$}):[],u.update(),f=!0,x(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){X();const a=rt(e.target);u.fragment&&u.fragment.l(a),a.forEach(v)}else u.fragment&&u.fragment.c();e.intro&&ft(t.$$.fragment),_t(t,e.target,e.anchor,e.customElement),Y(),Q()}p(c)}class ce{$destroy(){dt(this,1),this.$destroy=y}$on(e,n){if(!S(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!V(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Nt as $,_t as A,dt as B,gt as C,et as D,bt as E,$t as F,xt as G,wt as H,U as I,Et as J,Ct as K,Qt as L,O as M,q as N,qt as O,Dt as P,Ot as Q,y as R,ce as S,x as T,yt as U,Tt as V,te as W,ee as X,At as Y,It as Z,Rt as _,kt as a,Jt as a0,Lt as a1,Mt as a2,vt as a3,Kt as a4,ne as a5,Vt as a6,pt as a7,jt as a8,it as b,Pt as c,Zt as d,St as e,Yt as f,ft as g,v as h,re as i,Wt as j,R as k,Ht as l,rt as m,z as n,Ft as o,Gt as p,C as q,ct as r,mt as s,Ut as t,Bt as u,Xt as v,P as w,zt as x,ie as y,se as z};