(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[236],{6894:(e,t,r)=>{"use strict";r.r(t),r.d(t,{CharacterPreview:()=>u});var a=r(7437),c=r(3581),n=r(5601),o=r.n(n);function i(e){return(0,a.jsx)("div",{className:"character-icon",children:(0,a.jsx)(o(),{src:c.fc.getCharacterIconUrlByGameId(c.bj,e.id,e.gameId),alt:e.id,width:e.width||100,height:e.height||100,unoptimized:!0})})}var l=r(7138);function s(e){return(0,a.jsx)(l.default,{href:"/characters/".concat(e.character.id),passHref:!0,children:(0,a.jsx)("div",{className:"character-horizontal-card",style:{backgroundImage:"url('".concat(c.fc.getCharacterNamecardBarUrlByGameId(c.bj,e.character.id,e.character.gameId),"')")},children:(0,a.jsxs)("div",{className:"character-horizontal-card__image-container",children:[(0,a.jsx)(i,{id:e.character.id,gameId:e.character.gameId,width:100,height:100}),(0,a.jsx)("h1",{children:e.character.name}),(0,a.jsx)("span",{children:"Currently saved Loadouts: 0"})]})})})}function d(e){return(0,a.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:e.condition&&(0,a.jsx)("div",{className:"loader"})})}var m=r(8312),h=r(2265),g=r(1942);function u(){let[e,t]=(0,h.useState)(!1),[r,c]=(0,h.useState)([]),[n,o]=(0,h.useState)([]),[i,l]=(0,h.useState)([]),[u,f]=(0,h.useState)([]),[y,p]=(0,h.useState)(""),[b,v]=(0,h.useState)([]),[I,j]=(0,h.useState)([]),[C,U]=(0,h.useState)([]),x=["4★","5★"];(0,h.useEffect)(()=>{fetch("/gi-tc/data/characterList.json").then(e=>e.json()).then(e=>{c(e);let t=new Set(e.map(e=>e.element)),r=new Set(e.map(e=>e.weapon));U(e),v(Array.from(t)),j(Array.from(r)),o(Array.from(t)),l(Array.from(r)),f(x)}).catch(e=>console.error(e)).finally(()=>t(!0))},[]);let w=e=>""===y||e.name.toLowerCase().includes(y.toLowerCase()),P=e=>0===n.length&&0===i.length&&0===u.length||n.includes(e.element)&&i.includes(e.weapon)&&u.includes(e.rarity.toString()+"★");return(0,h.useEffect)(()=>{console.log(n,i)},[n,i]),(0,a.jsxs)("div",{className:"generic-shadow-container",id:"character-preview-container",children:[(0,a.jsxs)("div",{id:"filters-top-menu",children:[(0,a.jsx)("h1",{className:"container-title",children:"Character Preview"}),(0,a.jsxs)("div",{id:"filters-and-search",children:[(0,a.jsxs)("div",{className:"filter-container",children:[(0,a.jsx)("div",{className:"filter-icon-container",children:(0,a.jsx)(g.ulB,{size:20})}),(0,a.jsx)("div",{className:"filter-group",children:(0,a.jsx)(m.TogglableList,{title:"Element",allItems:b,filteredItems:n,toggleItem:e=>{if(n.length==b.length){o([e]);return}if(n.includes(e)){if(0==n.filter(t=>t!==e).length){o(b);return}o(n.filter(t=>t!==e))}else o([...n,e]);0==n.length&&o(b)}})}),(0,a.jsx)("div",{className:"filter-group",children:(0,a.jsx)(m.TogglableList,{title:"Weapon",allItems:I,filteredItems:i,toggleItem:e=>{if(i.length==I.length){l([e]);return}if(i.includes(e)){if(0==i.filter(t=>t!==e).length){l(I);return}l(i.filter(t=>t!==e))}else l([...i,e])}})}),(0,a.jsx)("div",{className:"filter-group",children:(0,a.jsx)(m.TogglableList,{title:"Rarity",allItems:x,filteredItems:u,toggleItem:e=>{if(u.includes(e)){if(0==u.filter(t=>t!==e).length){f(x);return}f(u.filter(t=>t!==e))}else f([...u,e])}})})]}),(0,a.jsx)("input",{type:"text",placeholder:"Search",value:y,onChange:e=>p(e.target.value)})]}),(0,a.jsx)("hr",{})]}),(0,a.jsxs)("div",{id:"character-list",children:[(0,a.jsx)(d,{condition:!e}),C.map(e=>w(e)&&P(e)&&(0,a.jsx)(s,{character:e},e.name.toLowerCase()))]})]},"character-container")}},8312:(e,t,r)=>{"use strict";r.r(t),r.d(t,{TogglableList:()=>n});var a=r(7437),c=r(2265);function n(e){var t;let[r,n]=(0,c.useState)(!1),o=(0,c.useRef)(null);return t=()=>n(!1),(0,c.useEffect)(()=>{function e(e){o.current&&!o.current.contains(e.target)&&t()}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[o]),(0,a.jsxs)("div",{className:"togglable-list-container",ref:o,children:[(0,a.jsx)("button",{className:"togglable-list-title",onClick:()=>n(!r),children:e.title}),(0,a.jsx)("ul",{className:"togglable-list-items"+(r?"-active":""),children:e.allItems.map(t=>(0,a.jsxs)("li",{className:"togglable-list-items__item",children:[(0,a.jsx)("span",{children:t}),(0,a.jsx)("input",{type:"checkbox",checked:e.filteredItems.includes(t),onChange:()=>e.toggleItem(t)})]},t))})]})}r(731)},7138:(e,t,r)=>{"use strict";r.d(t,{default:()=>c.a});var a=r(231),c=r.n(a)},5601:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return i}});let a=r(9920),c=r(497),n=r(8173),o=a._(r(1241));function i(e){let{props:t}=(0,c.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/gi-tc/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=n.Image},60:(e,t,r)=>{"use strict";var a;r.d(t,{W:()=>a}),function(e){e.Pyro="Pyro",e.Hydro="Hydro",e.Dendro="Dendro",e.Anemo="Anemo",e.Electro="Electro",e.Cryo="Cryo",e.Geo="Geo"}(a||(a={}))},3581:(e,t,r)=>{"use strict";r.d(t,{fq:()=>o,bj:()=>n,fc:()=>a,aF:()=>l});class a{static getCharacterIconUrlByGameId(e,t,r){return e.getCharacterIconUrlByGameId(t,r)}static getCharacterNamecardUrlByGameId(e,t,r){return e.getCharacterNamecardUrlByGameId(t,r)}static getCharacterSideIconUrlByGameId(e,t,r){return e.getCharacterSideIconUrlByGameId(t,r)}static getCharacterNamecardBarUrlByGameId(e,t,r){return e.getCharacterNamecardBarUrlByGameId(t,r)}static getCharacterSplashUrlByFilename(e,t,r){return e.getCharacterSplashUrlByFilename(t,r)}static async getCharacterDataFromId(e,t){return e.getCharacterDataFromId(t)}}class c{static getCharacterIconUrlByGameId(e,t){throw Error("Method not implemented! Use a concrete implementation of ImageProvider.")}static getCharacterSideIconUrlByGameId(e,t){throw Error("Method not implemented! Use a concrete implementation of ImageProvider.")}static getCharacterNamecardUrlByGameId(e,t){throw Error("Method not implemented! Use a concrete implementation of ImageProvider.")}static getCharacterNamecardBarUrlByGameId(e,t){throw Error("Method not implemented! Use a concrete implementation of ImageProvider.")}static getCharacterSplashUrlByGameId(e,t){throw Error("Method not implemented! Use a concrete implementation of ImageProvider.")}static getCharacterIconUrlByFilename(e,t){throw Error("Method not implemented! Use a concrete implementation of ImageProvider.")}static getCharacterSideIconUrlByFilename(e,t){throw Error("Method not implemented! Use a concrete implementation of ImageProvider.")}static getCharacterNamecardUrlByFilename(e,t){throw Error("Method not implemented! Use a concrete implementation of ImageProvider.")}static getCharacterNamecardBarUrlByFilename(e,t){throw Error("Method not implemented! Use a concrete implementation of ImageProvider.")}static getCharacterSplashUrlByFilename(e,t){throw Error("Method not implemented! Use a concrete implementation of ImageProvider.")}}class n extends c{static getCharacterIconUrlByFilename(e,t){return"".concat(n.baseUrl,"/images/characters/").concat(e,"/").concat(t,".png")}static getCharacterSideIconUrlByFilename(e,t){return"".concat(n.baseUrl,"/images/characters/").concat(e,"/").concat(t,".png")}static getCharacterNamecardUrlByFilename(e,t){return"".concat(n.baseUrl,"/images/characters/").concat(e,"/").concat(t,".png")}static getCharacterNamecardBarUrlByFilename(e,t){return"".concat(n.baseUrl,"/images/characters/").concat(e,"/").concat(t,".png")}static getCharacterIconUrlByGameId(e,t){return"".concat(n.baseUrl,"/images/characters/").concat(e,"/UI_AvatarIcon_").concat(t,".png")}static getCharacterSideIconUrlByGameId(e,t){return"".concat(n.baseUrl,"/images/characters/").concat(e,"/UI_AvatarIcon_Side_").concat(t,".png")}static getCharacterNamecardUrlByGameId(e,t){return"".concat(n.baseUrl,"/images/characters/").concat(e,"/UI_NameCardPic_").concat(t,"_P.png")}static getCharacterNamecardBarUrlByGameId(e,t){return"".concat(n.baseUrl,"/images/characters/").concat(e,"/UI_NameCardPic_").concat(t,"_Alpha.png")}static getCharacterSplashUrlByFilename(e,t){return"".concat(n.baseUrl,"/images/splashes/").concat(e,"/").concat(t,".png")}}n.baseUrl="/gi-tc";class o{static async getCharacterDataFromId(e){let t=await fetch("/gi-tc/data/characterDetails/".concat(e,".json"));return await t.json()}}var i=r(60);function l(e){e===i.W.Pyro?s({primaryDark:"#520f07",primaryLight:"#c78844",secondaryDark:"#873a31",secondaryLight:"#bf6d63",borderDark:"#520f07",borderLight:"#ffffff",textDark:"#777777",textLight:"#ffffff"}):s({primaryDark:"#2d3250",primaryLight:"#f9b17a",secondaryDark:"#424769",secondaryLight:"#676f9d",borderDark:"#1b2140",borderLight:"#2d3250",textDark:"#333333",textLight:"#ffffff"})}function s(e){document.body.style.setProperty("--color-primary-dark",e.primaryDark),document.body.style.setProperty("--color-primary-light",e.primaryLight),document.body.style.setProperty("--color-secondary-dark",e.secondaryDark),document.body.style.setProperty("--color-secondary-light",e.secondaryLight),document.body.style.setProperty("--color-border-dark",e.borderDark),document.body.style.setProperty("--color-border-light",e.borderLight),document.body.style.setProperty("--color-text-dark",e.textDark),document.body.style.setProperty("--color-text",e.textLight)}},731:()=>{},8568:()=>{},8521:()=>{},1810:(e,t,r)=>{"use strict";r.d(t,{w_:()=>d});var a=r(2265),c={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(c),o=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var a,c;a=t,c=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in e?Object.defineProperty(e,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[a]=c}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e){return t=>a.createElement(m,i({attr:s({},e.attr)},t),function e(t){return t&&t.map((t,r)=>a.createElement(t.tag,s({key:r},t.attr),e(t.child)))}(e.child))}function m(e){var t=t=>{var r,{attr:c,size:n,title:l}=e,d=function(e,t){if(null==e)return{};var r,a,c=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}(e,o),m=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,c,d,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),l&&a.createElement("title",null,l),e.children)};return void 0!==n?a.createElement(n.Consumer,null,e=>t(e)):t(c)}}}]);