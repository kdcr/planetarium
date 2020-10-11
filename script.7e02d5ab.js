parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"L4bL":[function(require,module,exports) {
function e(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function o(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}ringColors=["#000","#cc6600","#994d00","#994d00","#994d00","#994d00","#4d2e00"];var a=function a(){e(this,a),o(this,"lifeSpan",0),o(this,"currentLifeSpan",0),o(this,"pos",[]),o(this,"element",{})};function t(){pe.sol=new Zdog.Shape({addTo:he,stroke:190,color:"#993d10"}),pe.solSur=new Zdog.Shape({addTo:he,stroke:200,color:"#ff660050"}),pe.solSur2=new Zdog.Shape({addTo:he,stroke:210,color:"#ffa36650"}),pe.solSur3=new Zdog.Shape({addTo:he,stroke:220,color:"#ffa36650"})}function r(){pe.mercury=new Zdog.Shape({addTo:he,stroke:5,translate:{x:200},color:"#8E8E8E"})}function n(){pe.venus=new Zdog.Shape({addTo:he,stroke:11,translate:{x:250},color:"#C9C97B"})}function s(){pe.earth=new Zdog.Shape({addTo:he,stroke:12,translate:{x:300},color:"#000090"}),pe.moon=new Zdog.Shape({addTo:he,stroke:2,translate:{x:310},color:"#808080"})}function d(){pe.mars=new Zdog.Shape({addTo:he,stroke:8,translate:{x:360},color:"#993d10"}),pe.deimos=new Zdog.Shape({addTo:he,stroke:1,translate:{x:365},color:"#808080"}),pe.phobos=new Zdog.Shape({addTo:he,stroke:1,translate:{x:370},color:"#808080"})}function l(){}function i(){pe.jupiter=new Zdog.Shape({addTo:he,stroke:30,translate:{x:400},color:"#993d10"}),pe.io=new Zdog.Shape({addTo:he,stroke:2,translate:{x:400},color:"#993d10"}),pe.europa=new Zdog.Shape({addTo:he,stroke:2,translate:{x:400},color:"#993d10"}),pe.ganymede=new Zdog.Shape({addTo:he,stroke:2,translate:{x:400},color:"#993d10"}),pe.callisto=new Zdog.Shape({addTo:he,stroke:2,translate:{x:400},color:"#993d10"})}function u(){pe.saturnRings=[],pe.saturn=new Zdog.Shape({addTo:he,stroke:28,color:"#993d10"}),pe.mimas=new Zdog.Shape({addTo:he,stroke:2,color:"#993d10"}),pe.enceladus=new Zdog.Shape({addTo:he,stroke:2,color:"#993d10"}),pe.tethys=new Zdog.Shape({addTo:he,stroke:2,color:"#993d10"}),pe.dione=new Zdog.Shape({addTo:he,stroke:2,color:"#993d10"}),pe.rhea=new Zdog.Shape({addTo:he,stroke:2,color:"#993d10"}),pe.titan=new Zdog.Shape({addTo:he,stroke:2,color:"#993d10"}),pe.hyperion=new Zdog.Shape({addTo:he,stroke:2,color:"#993d10"}),pe.iapetus=new Zdog.Shape({addTo:he,stroke:2,color:"#993d10"});for(var e=0;e<30;e+=3){var o=ringColors[Math.round(Math.random()*ringColors.length)];pe.saturnRings.push(new Zdog.Ellipse({addTo:he,diameter:35+e,stroke:1,color:o,quarters:1})),pe.saturnRings.push(new Zdog.Ellipse({addTo:he,diameter:35+e,stroke:1,rotate:{x:Math.PI},color:o,quarters:1})),pe.saturnRings.push(new Zdog.Ellipse({addTo:he,diameter:35+e,stroke:1,rotate:{y:Math.PI},color:o,quarters:1})),pe.saturnRings.push(new Zdog.Ellipse({addTo:he,diameter:35+e,stroke:1,rotate:{z:Math.PI},color:o,quarters:1}))}}function c(){pe.uranus=new Zdog.Shape({addTo:he,stroke:15,color:"#993d10"}),pe.miranda=new Zdog.Shape({addTo:he,stroke:2,color:"#993d10"}),pe.ariel=new Zdog.Shape({addTo:he,stroke:2,color:"#993d10"}),pe.umbriel=new Zdog.Shape({addTo:he,stroke:2,color:"#993d10"}),pe.titania=new Zdog.Shape({addTo:he,stroke:2,color:"#993d10"}),pe.oberon=new Zdog.Shape({addTo:he,stroke:2,color:"#993d10"})}function h(){t(),r(),n(),s(),d(),i(),u(),c()}function p(){var e=new a;e.pos=[Math.random()*te.clientWidth,Math.random()*te.clientHeight],e.element=document.createElement("div"),e.element.classList.add("star"),e.element.style.left=e.pos[0]+"px",e.element.style.top=e.pos[1]+"px",e.lifeSpan=2e3*Math.random();var o=Math.round(100*Math.random());return o<=75?e.element.classList.add("starWhite"):o<=90?e.element.classList.add("starRed"):o<=98?e.element.classList.add("starYellow"):o<=100&&e.element.classList.add("starBlue"),e.element.classList.add("starShine"),re.style.setProperty("--shineSize",120*Math.random()+"%"),te.appendChild(e.element),ae.push(e),e}function m(){ae.forEach(function(e){e.lifeSpan=e.lifeSpan-100,e.lifeSpan<0&&e.element.remove()}),p()}function g(e){ie-=e.translate.x,ue-=e.translate.y}function S(e,o,a,t,r){var n=o+t*Math.cos(r),s=a+t*Math.sin(r);n+=ie,s+=ue,e.translate={x:n,y:s}}function f(e,o,a,t){var r=o.translate.x+a*Math.cos(t),n=o.translate.y+a*Math.sin(t);e.translate={x:r,y:n}}var w,T,k,Z,y,v,x,b,M,E,R,j,q,z,C,L,I,P,B,D,O,W,A,F,G,H,Y,J,K,N,Q,U,V,X,$,_,ee,oe,ae=[],te=document.querySelector(".spaceContainer"),re=document.documentElement,ne=document.querySelector(".zdog-canvas"),se=document.querySelector("#zoomRange"),de=document.querySelector("#bodySearch"),le=document.querySelector("#bodySearchBtn"),ie=0,ue=0,ce=function(e){return Object.keys(e)[0]};le.addEventListener("click",function(){me=pe[de.value]});var he=new Zdog.Illustration({element:".zdog-canvas",dragRotate:!0,resize:!0,zoom:.3}),pe={sol:w,solSur:T,solSur2:k,solSur3:Z,mercury:y,venus:v,earth:x,moon:b,mars:M,phobos:E,deimos:R,pallas:j,ceres:q,juno:z,vesta:C,jupiter:L,io:I,europa:P,ganymede:B,callisto:D,saturn:O,mimas:W,enceladus:A,tethys:F,dione:G,rhea:H,titan:Y,hyperion:J,iapetus:K,saturnRings:N,uranus:Q,miranda:U,ariel:V,umbriel:X,titania:$,oberon:_,neptune:ee,triton:oe};h();var me=pe.sol;function ge(){he.updateRenderGraph(),requestAnimationFrame(ge)}ge(),setInterval(function(){var e=(new Date).getTime();S(pe.sol,0,0,0,0),S(pe.solSur,0,0,0,0),S(pe.solSur2,0,0,0,0),S(pe.solSur3,0,0,0,0),S(pe.mercury,0,0,200,8e-4*e),S(pe.venus,0,0,250,-4e-4*e),S(pe.earth,0,0,300,3e-4*(new Date).getTime()),f(pe.moon,pe.earth,10,.002*e),S(pe.mars,0,0,360,2e-4*(new Date).getTime()),f(pe.deimos,pe.mars,9,.001*e),f(pe.phobos,pe.mars,5,.001*e),S(pe.jupiter,0,0,550,1e-4*e),f(pe.io,pe.jupiter,15,.001*e),f(pe.europa,pe.jupiter,25,.001*e),f(pe.ganymede,pe.jupiter,30,.001*e),f(pe.callisto,pe.jupiter,50,.001*e),S(pe.saturn,0,0,750,1e-4*e),pe.saturnRings.forEach(function(e){f(e,pe.saturn,0,0)}),f(pe.mimas,pe.saturn,45,.001*e),f(pe.enceladus,pe.saturn,50,.001*e),f(pe.tethys,pe.saturn,53,.001*e),f(pe.dione,pe.saturn,58,.001*e),f(pe.rhea,pe.saturn,61,.001*e),f(pe.titan,pe.saturn,65,.001*e),f(pe.hyperion,pe.saturn,70,.001*e),f(pe.iapetus,pe.saturn,72,.001*e),S(pe.uranus,0,0,950,1e-4*e),f(pe.miranda,pe.uranus,10,.001*e),f(pe.ariel,pe.uranus,15,.001*e),f(pe.umbriel,pe.uranus,20,.001*e),f(pe.titania,pe.uranus,25,.001*e),f(pe.oberon,pe.uranus,30,.001*e),he.zoom=.1*se.value,g(me)},1);
},{}]},{},["L4bL"], null)
//# sourceMappingURL=/eoi-space/script.7e02d5ab.js.map