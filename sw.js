if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let t={};const o=e=>s(e,c),a={module:{uri:c},exports:t,require:o};i[c]=Promise.all(n.map((e=>a[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-FF4BGD2K.css",revision:null},{url:"assets/index-yB_ETrf3.js",revision:null},{url:"index.html",revision:"2ae67f3670fab55546560ecb366ab302"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"pwa-192x192.png",revision:"b954a169c7741521efdcbf692b1a599b"},{url:"pwa-512x512.png",revision:"10b9006fd053c8db3db9fcfcecfd0ddc"},{url:"pwa-maskable-192x192.png",revision:"495ea949b23ea5b089fce9d0c57d423c"},{url:"pwa-maskable-512x512.png",revision:"d71ba63b5ea6eefa13a1befe1a41c8bc"},{url:"manifest.webmanifest",revision:"955dc2443ea0fe2cc952ae0d2a7f902c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
