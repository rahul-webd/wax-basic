if(!self.define){let e,t={};const s=(s,o)=>(s=new URL(s+".js",o).href,t[s]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=t,document.head.appendChild(e)}else e=s,importScripts(s),t()})).then((()=>{let e=t[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(o,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(t[n])return;let r={};const l=e=>s(e,n),u={module:{uri:n},exports:r,require:l};t[n]=Promise.all(o.map((e=>u[e]||l(e)))).then((e=>(i(...e),r)))}}define(["./workbox-791ba835"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"main.js",revision:"56d2f5b7061e53413392f1b49e90ebeb"}],{})}));