(function(t){function e(e){for(var n,s,l=e[0],c=e[1],o=e[2],d=0,u=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(u.length)u.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,l=1;l<a.length;l++){var c=a[l];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={index:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/RelLink/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var h=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0167":function(t,e,a){"use strict";var n=a("94df"),r=a.n(n);r.a},"1a7f":function(t,e,a){"use strict";var n=a("2beb"),r=a.n(n);r.a},2396:function(t,e,a){"use strict";var n=a("d334"),r=a.n(n);r.a},"2beb":function(t,e,a){},"2fbc":function(t,e,a){"use strict";var n=a("a777"),r=a.n(n);r.a},"3cf2":function(t,e,a){"use strict";var n=a("c788"),r=a.n(n);r.a},"42bf":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar"),t._m(0),a("section",{attrs:{id:"advStat"}},[a("div",{attrs:{id:"lkShrtnr"}},[a("LinkShortener"),t._m(1),a("div",{attrs:{id:"cardChain"}},[a("CardChain")],1)],1)]),t._m(2),a("Foot")],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"intro"}},[n("div",{attrs:{id:"text"}},[n("div",[n("h1",[t._v("More than just shorter links")]),n("p",[t._v("Build your brand's reputation on how your links are performing.")]),n("a",{staticClass:"btn",attrs:{id:"getStartedBtn"}},[t._v("Get Started")])])]),n("div",{attrs:{id:"workingIllu"}},[n("img",{attrs:{src:a("5a7f")}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"textWrap"},[a("h2",[t._v("Advanced Statistics")]),a("p",[t._v(" Track how your links are performing across the web with our advanced statistics dashboard. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"boost"}},[a("h2",[t._v("Boost your links today")]),a("a",{staticClass:"btn"},[t._v("Get Started")])])}],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar"},[a("img",{staticClass:"logo",attrs:{src:"https://raw.githubusercontent.com/BerylBucket/RelLink/main/assets/logo.svg"}}),t.menuActive?a("div",{staticClass:"links"},[a("a",[t._v("Features")]),a("a",[t._v("Pricing")]),a("a",[t._v("Resources")]),t._m(0)]):t._e(),a("div",{staticClass:"menuBtn",on:{click:function(e){t.menuActive=!t.menuActive}}},[t.menuActive?[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"21"}},[a("path",{attrs:{fill:"hsl(257, 7%, 63%)","fill-rule":"evenodd",d:"M17.425.954l2.12 2.121-7.424 7.425 7.425 7.425-2.121 2.12L10 12.622l-7.425 7.425-2.12-2.121L7.878 10.5.454 3.075 2.575.955 10 8.378 17.425.954z"}})])]:[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"17"}},[a("g",{attrs:{fill:"hsl(257, 7%, 63%)","fill-rule":"evenodd"}},[a("path",{attrs:{d:"M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"}})])])]],2)])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navEnd"},[a("a",{staticClass:"loginLink"},[t._v("Login")]),a("a",{staticClass:"signupBtn"},[t._v("Sign Up")])])}],c={data(){return{menuActive:!1}},created(){window.innerWidth>1023&&(this.menuActive=!0),window.addEventListener("resize",()=>{window.innerWidth>1023&&(this.menuActive=!0)})}},o=c,h=(a("1a7f"),a("2877")),d=Object(h["a"])(o,s,l,!1,null,"6e93588c",null),u=d.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"foot"},[a("div",{staticClass:"logo"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"121",height:"33"}},[a("path",{attrs:{fill:"#f5f5f5",d:"M16.715 7.932c-.068-.09-.306-.26-.714-.51s-.918-.51-1.53-.782-1.281-.51-2.006-.714a8.005 8.005 0 00-2.176-.306c-1.995 0-2.992.669-2.992 2.006 0 .408.107.748.323 1.02.215.272.532.516.952.731.419.215.946.414 1.58.595l1.406.393.805.219c1.156.317 2.198.663 3.128 1.037.929.374 1.717.839 2.363 1.394a5.647 5.647 0 011.496 2.023c.35.793.527 1.745.527 2.856 0 1.36-.255 2.51-.765 3.451-.51.94-1.185 1.7-2.023 2.278-.84.578-1.802.997-2.89 1.258-1.088.26-2.21.391-3.366.391a19.68 19.68 0 01-5.44-.799c-.884-.26-1.74-.572-2.567-.935A14.358 14.358 0 01.53 22.28l2.448-4.862c.09.113.385.329.884.646.498.317 1.116.635 1.853.952.736.317 1.558.6 2.465.85.906.25 1.824.374 2.754.374 1.972 0 2.958-.6 2.958-1.802 0-.453-.148-.827-.442-1.122-.295-.295-.703-.561-1.224-.799a12.455 12.455 0 00-1.504-.56l-1.702-.495-.976-.288c-1.111-.34-2.074-.708-2.89-1.105-.816-.397-1.49-.856-2.023-1.377a5.003 5.003 0 01-1.19-1.802c-.261-.68-.391-1.473-.391-2.38 0-1.27.238-2.391.714-3.366a7.266 7.266 0 011.938-2.465 8.435 8.435 0 012.839-1.513c1.076-.34 2.215-.51 3.417-.51.838 0 1.666.08 2.482.238.816.159 1.598.363 2.346.612.748.25 1.445.533 2.09.85.647.317 1.242.635 1.786.952l-2.448 4.624zM40.139 25h-5.44V14.97c0-1.156-.227-2.006-.68-2.55-.454-.544-1.077-.816-1.87-.816-.318 0-.663.074-1.037.221a4.173 4.173 0 00-1.088.646 5.827 5.827 0 00-.97 1.003 4.4 4.4 0 00-.68 1.292V25h-5.44V.18h5.44v9.962a6.786 6.786 0 012.602-2.465c1.076-.578 2.26-.867 3.553-.867 1.201 0 2.17.21 2.907.629.736.42 1.303.952 1.7 1.598.396.646.663 1.371.799 2.176.136.805.204 1.592.204 2.363V25zm12.34.34c-1.519 0-2.873-.25-4.063-.748-1.19-.499-2.193-1.173-3.01-2.023a8.54 8.54 0 01-1.852-2.958 9.97 9.97 0 01-.63-3.519c0-1.224.21-2.397.63-3.519a8.54 8.54 0 011.853-2.958c.816-.85 1.819-1.53 3.009-2.04s2.544-.765 4.063-.765c1.519 0 2.867.255 4.046.765 1.179.51 2.176 1.19 2.992 2.04a8.754 8.754 0 011.87 2.958 9.736 9.736 0 01.646 3.519 9.97 9.97 0 01-.63 3.519 8.54 8.54 0 01-1.852 2.958c-.816.85-1.82 1.524-3.01 2.023-1.19.499-2.543.748-4.062.748zM48.5 16.092c0 1.405.374 2.533 1.122 3.383.748.85 1.7 1.275 2.856 1.275a3.59 3.59 0 001.564-.34c.476-.227.89-.544 1.24-.952a4.57 4.57 0 00.834-1.479 5.632 5.632 0 00.306-1.887c0-1.405-.374-2.533-1.122-3.383-.748-.85-1.689-1.275-2.822-1.275a3.702 3.702 0 00-2.84 1.292 4.57 4.57 0 00-.832 1.479 5.632 5.632 0 00-.306 1.887zm27.776-4.284c-1.315.023-2.505.238-3.57.646-1.065.408-1.836 1.02-2.312 1.836V25h-5.44V7.15h4.998v3.604c.612-1.201 1.4-2.142 2.363-2.822.963-.68 1.989-1.031 3.077-1.054h.544c.113 0 .227.011.34.034v4.896zm14.074 12.24a21.71 21.71 0 01-2.567.884c-.963.272-1.932.408-2.907.408-.68 0-1.32-.085-1.92-.255a4.286 4.286 0 01-1.582-.816c-.453-.374-.81-.867-1.07-1.479-.262-.612-.392-1.349-.392-2.21v-9.316h-2.278V7.15h2.278V1.472h5.44V7.15h3.638v4.114h-3.638v7.446c0 .59.147 1.014.442 1.275.295.26.669.391 1.122.391.408 0 .827-.068 1.258-.204.43-.136.805-.283 1.122-.442l1.054 4.318zM92.627.18h5.44v18.462c0 1.36.578 2.04 1.734 2.04.272 0 .572-.04.901-.119.329-.08.63-.198.901-.357l.714 4.08c-.68.317-1.462.567-2.346.748-.884.181-1.711.272-2.482.272-1.564 0-2.765-.408-3.604-1.224-.839-.816-1.258-1.995-1.258-3.536V.18zm11.456 27.506c.454.159.879.272 1.275.34a6.4 6.4 0 001.071.102c.658 0 1.168-.227 1.53-.68.363-.453.692-1.27.986-2.448l-6.8-17.85h5.61l4.148 13.192 3.57-13.192h5.1l-6.8 20.74a7.106 7.106 0 01-2.55 3.587c-1.224.918-2.674 1.377-4.352 1.377a8.17 8.17 0 01-1.377-.119 7.516 7.516 0 01-1.41-.391v-4.658z"}})])]),t._m(0)])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footEnd"},[a("div",{staticClass:"links"},[a("table",[a("tr",[a("th",[a("h4",[t._v("Features")])])]),a("tr",[a("td",[a("a",[t._v("Link Shortening")])])]),a("tr",[a("td",[a("a",[t._v("Branded Links")])])]),a("tr",[a("td",[a("a",[t._v("Analytics")])])])]),a("table",[a("tr",[a("th",[a("h4",[t._v("Resources")])])]),a("tr",[a("td",[a("a",[t._v("Blog")])])]),a("tr",[a("td",[a("a",[t._v("Developers")])])]),a("tr",[a("td",[a("a",[t._v("Support")])])])]),a("table",[a("tr",[a("th",[a("h4",[t._v("Company")])])]),a("tr",[a("td",[a("a",[t._v("About")])])]),a("tr",[a("td",[a("a",[t._v("Our Team")])])]),a("tr",[a("td",[a("a",[t._v("Careers")])])]),a("tr",[a("td",[a("a",[t._v("Contact")])])])]),a("div",{staticClass:"socMedia"},[a("i",{staticClass:"fab fa-facebook-square",staticStyle:{margin:"0"}}),a("i",{staticClass:"fab fa-twitter"}),a("i",{staticClass:"fab fa-pinterest"}),a("i",{staticClass:"fab fa-instagram"})])])])}],p=a("ecee"),m=a("f2d1");p["a"].watch(),p["b"].add(m["a"],m["d"],m["c"],m["b"]);var g={},w=g,_=(a("2396"),Object(h["a"])(w,v,f,!1,null,"31efff78",null)),b=_.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lkShtnr",style:t.style},[a("div",{ref:"linkInputBox",staticClass:"linkInputBox"},[a("div",{staticStyle:{display:"inline"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.link,expression:"link"}],class:{error:t.error},attrs:{placeholder:"Shorten a link here…"},domProps:{value:t.link},on:{input:function(e){e.target.composing||(t.link=e.target.value)}}}),a("br"),a("br"),a("span",{staticClass:"errMes"},[t._v(t._s(t.errMes))])]),a("a",{on:{click:t.validate}},[t._v("Shorten It!")])]),t._l(t.short,(function(e){return[a("div",{staticClass:"linkCard"},[a("div",{staticClass:"oriLink"},[t._v(" "+t._s(e.ori)+" ")]),a("div",{staticClass:"linkCardEnd"},[a("CopyBtn",{attrs:{link:e.link}}),a("span",{staticClass:"sLink"},[t._v(t._s(e.link))])],1)])]}))],2)},C=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{class:{clicked:t.clicked},on:{click:function(e){return t.copyToClipboard()}}},[t._v(t._s(t.text))])},z=[],x={props:{link:String},data(){return{text:"Copy",clicked:!1}},methods:{copyToClipboard(){var t=this;navigator.clipboard.writeText(t.link).then((function(){console.log("Async: Copying to clipboard was successful!"),t.text="Copied!",t.clicked=!t.clicked}),(function(t){console.error("Async: Could not copy text: ",t)}))}}},S=x,B=(a("2fbc"),Object(h["a"])(S,y,z,!1,null,"4948a88b",null)),M=B.exports,L={components:{CopyBtn:M},data(){return{short:[],link:"",linkInputBoxHeight:0,error:!1,errMes:""}},watch:{short(t){window.localStorage.setItem("links",JSON.stringify(this.short))}},methods:{remDup(t){return t.filter((t,e,a)=>a.findIndex(e=>e.ori===t.ori)===e)},addHttps(t){var e=t;return t.includes("https://")||(e="https://"+t),e},validate(){""===this.link?this.throwError("Please add a link."):(this.clearError(),this.shortenLink())},shortenLink(){var t="e26abcf25fc774a193088e518f0ccdc5f0e9379d";fetch("https://api-ssl.bitly.com/v4/shorten",{method:"POST",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"},body:JSON.stringify({long_url:this.addHttps(this.link),domain:"bit.ly"})}).then(t=>t.json()).then(t=>{var e=t.description;"undefined"===typeof e||null===e?(this.clearError(),this.short.push({ori:t.long_url,link:t.link}),this.short=this.remDup(this.short)):this.throwError("Invalid link.")})},throwError(t){this.error=!0,this.errMes=t},clearError(){this.error=!1,this.errMes=""},getLinkInputBoxHeight(){this.linkInputBoxHeight=this.$refs.linkInputBox.clientHeight}},mounted(){window.addEventListener("load",()=>{this.getLinkInputBoxHeight()});var t=JSON.parse(window.localStorage.getItem("links"));"undefined"===typeof t||null===t||""===t?window.localStorage.setItem("links","[]"):this.short=t},computed:{style(){return"transform: translateY(-"+this.linkInputBoxHeight/2+"px)"}}},E=L,O=(a("9792"),Object(h["a"])(E,k,C,!1,null,"f2e230c0",null)),V=O.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"adCards"},[a("div",{staticClass:"adCard"},[a("div",{staticClass:"iconCircle"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40"}},[a("path",{attrs:{fill:"#2BD0D0",d:"M36.406 11.719c.648 0 1.172.524 1.172 1.172v24.765h1.25a1.172 1.172 0 110 2.344H1.172a1.172 1.172 0 110-2.344h1.25V24.61c0-.647.524-1.172 1.172-1.172H8.28c.648 0 1.172.525 1.172 1.172v13.047h2.344v-8.36c0-.646.524-1.171 1.172-1.171h4.687c.648 0 1.172.525 1.172 1.172v8.36h2.344V19.921c0-.647.524-1.172 1.172-1.172h4.687c.648 0 1.172.525 1.172 1.172v17.734h2.344V12.891c0-.648.524-1.172 1.172-1.172zm-1.172 2.344h-2.343v23.593h2.343V14.063zm-9.375 7.03h-2.343v16.563h2.343V21.094zm-9.375 9.376h-2.343v7.187h2.343V30.47zM7.11 25.78H4.766v11.875h2.343V25.781zM34.062 0a3.52 3.52 0 013.516 3.516 3.52 3.52 0 01-3.516 3.515c-.72 0-1.389-.217-1.947-.59l-4.073 3.055a3.52 3.52 0 01-3.355 4.567 3.496 3.496 0 01-1.514-.344l-4.689 4.688c.22.459.344.973.344 1.515a3.52 3.52 0 01-3.515 3.515 3.52 3.52 0 01-3.488-3.949l-3.45-1.724a3.503 3.503 0 01-2.438.986 3.52 3.52 0 01-3.515-3.516 3.52 3.52 0 013.515-3.515 3.52 3.52 0 013.488 3.949l3.45 1.725a3.503 3.503 0 013.952-.643l4.689-4.688a3.496 3.496 0 01-.344-1.515 3.52 3.52 0 013.515-3.516c.72 0 1.39.218 1.948.59l4.073-3.054A3.52 3.52 0 0134.063 0zm-18.75 18.75c-.646 0-1.171.526-1.171 1.172 0 .646.525 1.172 1.171 1.172.647 0 1.172-.526 1.172-1.172 0-.646-.525-1.172-1.172-1.172zm-9.374-4.688c-.647 0-1.172.526-1.172 1.172 0 .646.525 1.172 1.171 1.172.647 0 1.172-.526 1.172-1.172 0-.646-.525-1.171-1.171-1.171zm18.75-4.687c-.647 0-1.172.526-1.172 1.172 0 .646.525 1.172 1.172 1.172.646 0 1.171-.526 1.171-1.172 0-.646-.525-1.172-1.172-1.172zm9.375-7.031c-.647 0-1.172.526-1.172 1.172 0 .646.525 1.171 1.172 1.171.646 0 1.171-.525 1.171-1.171s-.525-1.172-1.172-1.172z"}})])]),a("h3",[t._v("Brand Recognition")]),a("p",[t._v(" Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content. ")])]),a("div",{staticClass:"adCard"},[a("div",{staticClass:"iconCircle"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40"}},[a("path",{attrs:{fill:"#2BD0D0",d:"M19.968 0c11.01 0 19.969 8.958 19.969 19.968s-8.958 19.969-19.969 19.969C8.958 39.937 0 30.979 0 19.968 0 8.958 8.958 0 19.968 0zm7.805 35.579c-4.863-2.402-10.746-2.402-15.609 0a17.339 17.339 0 007.804 1.862 17.34 17.34 0 007.805-1.862zm-6.556-33.02V6.24H18.72V2.56a17.362 17.362 0 00-9.492 3.656l2.798 2.797-1.765 1.765L7.373 7.89a17.41 17.41 0 00-4.678 9.582h4.793v2.497H2.496c0 5.805 2.857 10.943 7.227 14.122 6.217-3.714 14.274-3.714 20.49 0 4.37-3.179 7.228-8.317 7.228-14.123h-4.992v-2.496h4.793a17.41 17.41 0 00-4.678-9.582l-2.888 2.888-1.765-1.765 2.798-2.797a17.362 17.362 0 00-9.492-3.657zm-2.437 8.292c.332-1.034 2.045-1.034 2.377 0 .635 1.978 3.804 11.955 3.804 14.11a4.997 4.997 0 01-4.993 4.992 4.997 4.997 0 01-4.992-4.992c0-2.155 3.17-12.132 3.804-14.11zm1.188 4.567c-1.233 4.047-2.496 8.522-2.496 9.543a2.5 2.5 0 002.496 2.496 2.5 2.5 0 002.497-2.496c0-1.02-1.263-5.496-2.497-9.543z"}})])]),a("h3",[t._v("Detailed Records")]),a("p",[t._v(" Gain insights into who is clicking your content. Knowing when and where people engage with your content helps inform better decisions. ")])]),a("div",{staticClass:"adCard"},[a("div",{staticClass:"iconCircle"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48"}},[a("path",{attrs:{fill:"#2BD0D0",d:"M46.608 6.02a.975.975 0 00-.927-.047l-7.624 3.591a8.283 8.283 0 00-4.728 6.837l-.196 2.436-3.95 6.561v-2.801c0-.01-.006-.017-.006-.027a.974.974 0 00-.046-.284l-1.838-5.514 3.753-7.504a.984.984 0 00-.099-1.03l-5.9-7.867a1.019 1.019 0 00-1.573 0L17.573 8.24a.984.984 0 00-.093 1.03l3.753 7.503-1.838 5.514a.974.974 0 00-.047.284v3.951l-6.127-9.299c-.007-.01-.02-.017-.026-.026a.995.995 0 00-.211-.215c-.02-.013-.036-.03-.056-.042-.02-.013-.022-.02-.035-.027l-3.605-2.085-1.497-2.271L5.628 9.27a.983.983 0 00-1.147-.386L.654 10.227a.983.983 0 00-.491 1.468l2.705 4.107 1.492 2.27.492 4.137a.36.36 0 00.01.04c.004.02.009.041.015.061a.973.973 0 00.116.295c.007.01.007.023.014.033.007.01 14.624 22.165 14.695 22.225A4.87 4.87 0 0024.255 48c.4 0 .8-.05 1.19-.145a4.886 4.886 0 003.028-2.235l13.08-21.698 2.065-1.307a8.343 8.343 0 002.66-2.721 8.259 8.259 0 001.18-4.651l-.383-8.42a.984.984 0 00-.467-.803zm-7.122 17.524l-1.522 2.527-5.054-3.048 1.524-2.527 5.052 3.048zM21.315 38.446V23.58h5.9v5.08l-5.9 9.786zm1.693-20.766h2.515l1.31 3.933h-5.136l1.31-3.933zm1.257-6.885a.983.983 0 110-1.966.983.983 0 010 1.966zm0-8.194l4.75 6.331-3.39 6.78h-.377v-3.13a2.95 2.95 0 10-1.966 0v3.13h-.376l-3.39-6.78 4.75-6.331zM10.53 17.818l-.29.19-3.621 2.387-.333-2.787a.982.982 0 00-.156-.424l-1.081-1.642L6.69 14.46l1.081 1.642a.988.988 0 00.329.31l2.429 1.406zm-6.122-6.826l1.2 1.822-1.642 1.082-1.475-2.232 1.917-.672zm5.249 9.755l2.458-1.624 7.233 10.972v10.726L7.193 22.371l2.464-1.624zm17.135 23.851a2.95 2.95 0 11-5.052-3.048l7.425-12.315h.017v-.027l2.712-4.499 2.527 1.526 2.53 1.52-10.16 16.843zm17.807-25.724a6.353 6.353 0 01-2.028 2.073l-1.747 1.107-2.852-1.717-2.852-1.717.162-2.065a6.318 6.318 0 013.604-5.213L45.18 8.38l.125 2.74a.973.973 0 00-.295.014l-2.382.59a5.986 5.986 0 00-4.425 4.524.983.983 0 001.919.43 4.032 4.032 0 012.977-3.043l2.297-.57.103 2.262a6.304 6.304 0 01-.9 3.548z"}})])]),a("h3",[t._v("Fully Customizable")]),a("p",[t._v(" Improve brand awareness and content discoverability through customizable links, supercharging audience engagement. ")])])])},I=[],A={},H=A,$=(a("3cf2"),Object(h["a"])(H,j,I,!1,null,"9ce8c520",null)),P=$.exports,D={components:{Navbar:u,Foot:b,LinkShortener:V,CardChain:P}},T=D,N=(a("0167"),Object(h["a"])(T,r,i,!1,null,"5abea37d",null)),R=N.exports;n["a"].config.productionTip=!1,new n["a"]({render:t=>t(R)}).$mount("#app")},"5a7f":function(t,e,a){t.exports=a.p+"img/workIllu.56bd1e27.svg"},"94df":function(t,e,a){},9792:function(t,e,a){"use strict";var n=a("42bf"),r=a.n(n);r.a},a777:function(t,e,a){},c788:function(t,e,a){},d334:function(t,e,a){}});
//# sourceMappingURL=index.41b83cc6.js.map