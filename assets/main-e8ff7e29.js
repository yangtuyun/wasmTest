(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function f(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=f(o);fetch(o.href,l)}})();const E=new TextEncoder("utf-8"),v=new TextDecoder("utf-8");var b=[];class T{constructor(){this._callbackTimeouts=new Map,this._nextCallbackTimeoutID=1;const s=()=>new DataView(this._inst.exports.memory.buffer),f=(e,t)=>{s().setUint32(e+0,t,!0),s().setUint32(e+4,Math.floor(t/4294967296),!0)},i=e=>{const t=s().getFloat64(e,!0);if(t===0)return;if(!isNaN(t))return t;const r=s().getUint32(e,!0);return this._values[r]},o=(e,t)=>{if(typeof t=="number"){if(isNaN(t)){s().setUint32(e+4,2146959360,!0),s().setUint32(e,0,!0);return}if(t===0){s().setUint32(e+4,2146959360,!0),s().setUint32(e,1,!0);return}s().setFloat64(e,t,!0);return}switch(t){case void 0:s().setFloat64(e,0,!0);return;case null:s().setUint32(e+4,2146959360,!0),s().setUint32(e,2,!0);return;case!0:s().setUint32(e+4,2146959360,!0),s().setUint32(e,3,!0);return;case!1:s().setUint32(e+4,2146959360,!0),s().setUint32(e,4,!0);return}let n=this._ids.get(t);n===void 0&&(n=this._idPool.pop(),n===void 0&&(n=this._values.length),this._values[n]=t,this._goRefCounts[n]=0,this._ids.set(t,n)),this._goRefCounts[n]++;let c=1;switch(typeof t){case"string":c=2;break;case"symbol":c=3;break;case"function":c=4;break}s().setUint32(e+4,2146959360|c,!0),s().setUint32(e,n,!0)},l=(e,t,r)=>new Uint8Array(this._inst.exports.memory.buffer,e,t),p=(e,t,r)=>{const n=new Array(t);for(let c=0;c<t;c++)n[c]=i(e+c*8);return n},w=(e,t)=>v.decode(new DataView(this._inst.exports.memory.buffer,e,t)),U=Date.now()-performance.now();this.importObject={wasi_snapshot_preview1:{fd_write:function(e,t,r,n){let c=0;if(e==1)for(let a=0;a<r;a++){let u=t+a*8,y=s().getUint32(u+0,!0),h=s().getUint32(u+4,!0);c+=h;for(let m=0;m<h;m++){let g=s().getUint8(y+m);if(g!=13)if(g==10){let x=v.decode(new Uint8Array(b));b=[]}else b.push(g)}}else console.error("invalid file descriptor:",e);return s().setUint32(n,c,!0),0},random_get:(e,t)=>(crypto.getRandomValues(l(e,t)),0)},env:{"runtime.ticks":()=>U+performance.now(),"runtime.sleepTicks":e=>{setTimeout(this._inst.exports.go_scheduler,e)},"syscall/js.finalizeRef":e=>{},"syscall/js.stringVal":(e,t,r)=>{const n=w(t,r);o(e,n)},"syscall/js.valueGet":(e,t,r,n)=>{let c=w(r,n),a=i(t),u=Reflect.get(a,c);o(e,u)},"syscall/js.valueSet":(e,t,r,n)=>{const c=i(e),a=w(t,r),u=i(n);Reflect.set(c,a,u)},"syscall/js.valueDelete":(e,t,r)=>{const n=i(e),c=w(t,r);Reflect.deleteProperty(n,c)},"syscall/js.valueIndex":(e,t,r)=>{o(e,Reflect.get(i(t),r))},"syscall/js.valueSetIndex":(e,t,r)=>{Reflect.set(i(e),t,i(r))},"syscall/js.valueCall":(e,t,r,n,c,a,u)=>{const y=i(t),h=w(r,n),m=p(c,a);try{const g=Reflect.get(y,h);o(e,Reflect.apply(g,y,m)),s().setUint8(e+8,1)}catch(g){o(e,g),s().setUint8(e+8,0)}},"syscall/js.valueInvoke":(e,t,r,n,c)=>{try{const a=i(t),u=p(r,n,c);o(e,Reflect.apply(a,void 0,u)),s().setUint8(e+8,1)}catch(a){o(e,a),s().setUint8(e+8,0)}},"syscall/js.valueNew":(e,t,r,n,c)=>{const a=i(t),u=p(r,n);try{o(e,Reflect.construct(a,u)),s().setUint8(e+8,1)}catch(y){o(e,y),s().setUint8(e+8,0)}},"syscall/js.valueLength":e=>i(e).length,"syscall/js.valuePrepareString":(e,t)=>{const r=String(i(t)),n=E.encode(r);o(e,n),f(e+8,n.length)},"syscall/js.valueLoadString":(e,t,r,n)=>{const c=i(e);l(t,r).set(c)},"syscall/js.valueInstanceOf":(e,t)=>i(e)instanceof i(t),"syscall/js.copyBytesToGo":(e,t,r,n,c)=>{let a=e,u=e+4;const y=l(t,r),h=i(c);if(!(h instanceof Uint8Array||h instanceof Uint8ClampedArray)){s().setUint8(u,0);return}const m=h.subarray(0,y.length);y.set(m),f(a,m.length),s().setUint8(u,1)},"syscall/js.copyBytesToJS":(e,t,r,n)=>{let c=e,a=e+4;const u=i(t),y=l(r,n);if(!(u instanceof Uint8Array||u instanceof Uint8ClampedArray)){s().setUint8(a,0);return}const h=y.subarray(0,u.length);u.set(h),f(c,h.length),s().setUint8(a,1)}}}}async run(s){for(this._inst=s,this._values=[NaN,0,null,!0,!1,window,this],this._goRefCounts=[],this._ids=new Map,this._idPool=[],this.exited=!1,new DataView(this._inst.exports.memory.buffer);;){const f=new Promise(i=>{this._resolveCallbackPromise=()=>{if(this.exited)throw new Error("bad callback: Go program has already exited");setTimeout(i,0)}});if(this._inst.exports._start(),this.exited)break;await f}}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(s){const f=this;return function(){const i={id:s,this:this,args:arguments};return f._pendingEvent=i,f._resume(),i.result}}}const j=async(d={},s)=>{let f;if(s.startsWith("data:")){const i=s.replace(/^data:.*?base64,/,"");let o;if(typeof Buffer=="function"&&typeof Buffer.from=="function")o=Buffer.from(i,"base64");else if(typeof atob=="function"){const l=atob(i);o=new Uint8Array(l.length);for(let p=0;p<l.length;p++)o[p]=l.charCodeAt(p)}else throw new Error("Failed to decode base64-encoded data URL, Buffer and atob are not supported");f=await WebAssembly.instantiate(o,d)}else{const i=await fetch(s),o=i.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&o.startsWith("application/wasm"))f=await WebAssembly.instantiateStreaming(i,d);else{const l=await i.arrayBuffer();f=await WebAssembly.instantiate(l,d)}}return f.instance},D=d=>j(d,"/assets/hsuehlyNB-723a112e.wasm?init"),_=new T;D(_.importObject).then(d=>{_.run(d)});const R=document.querySelector("#app");R.innerHTML=`
<div>
<div>欢迎大佬逆向，逆向要求，获取加密方式和key</div>
<div>
  加密：
  <input id="localEncValue" type="text" style="width: 300px;height: 20px;">
  <button id="localEnc">加密</button>
  <div id="localEncText">加密内容：</div>
</div>
<div>
  解密：
  <input id="localDecValue" type="text" style="width: 300px;height: 20px;">
  <button id="localDec">解密</button>
  <div id="localDecText">解密内容：</div>
</div>
<div>
</div>
`;const A=document.getElementById("localDec"),B=document.getElementById("localEnc"),S=document.getElementById("localDecValue"),V=document.getElementById("localEncValue"),C=document.getElementById("localDecText"),I=document.getElementById("localEncText");A.addEventListener("click",()=>{const d=S.value;C.innerText=`解密内容：${window.decrypt(d)}`});B.addEventListener("click",()=>{const d=V.value;I.innerText=`加密内容：${window.encrypt(d)}`});
