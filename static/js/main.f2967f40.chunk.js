(this["webpackJsonptreebank-template"]=this["webpackJsonptreebank-template"]||[]).push([[0],{10:function(t,e,a){t.exports={dropdownButton:"ControlPanel_dropdownButton__1o6TV",dropdownScroll:"ControlPanel_dropdownScroll__17rgQ",dummyIcon:"ControlPanel_dummyIcon__3Nk3N",link:"ControlPanel_link__OEqVs"}},138:function(t,e,a){},148:function(t,e,a){"use strict";a.r(e);var s=a(0),l=a.n(s),o=a(43),r=a.n(o),n=(a(53),a(54),a(55),a(7)),c=a(11),i=a(28),h=a(15),g=a(1);const m=Object(g.shape)({start:g.number,end:g.number,numbers:Object(g.arrayOf)(Object(g.oneOfType)([g.string]))}),p=Object(g.shape)({locus:g.string.isRequired,path:g.string.isRequired,xml:g.string.isRequired,link:g.string,notes:g.string,chunks:m.isRequired}),u=Object(g.shape)({path:g.string.isRequired,author:g.string.isRequired,work:g.string.isRequired,editors:Object(g.oneOfType)([g.string,Object(g.arrayOf)(g.string)]).isRequired,sections:Object(g.arrayOf)(p).isRequired}),d=Object(g.shape)({title:Object(g.oneOfType)([g.string,g.element]).isRequired,publications:Object(g.arrayOf)(u),text:g.string}),x=(Object(g.shape)({logo:g.string,link:g.string,title:Object(g.oneOfType)([g.string,g.element]).isRequired,subtitle:g.string.isRequired,copyright:g.string,report:g.string,github:g.string,twitter:g.string,collections:Object(g.arrayOf)(d).isRequired}),Object(g.shape)({search:g.string.isRequired}),Object(g.shape)({params:Object(g.shape)({chunk:g.string.isRequired}).isRequired}),Object(g.shape)({params:Object(g.shape)({publication:g.string.isRequired}).isRequired}),Object(g.shape)({w:Object(g.arrayOf)(g.string),config:g.string}),({logo:t,link:e,children:a})=>void 0!==e?l.a.createElement(h.PerseidsHeader,{logo:t,props:{href:e}},a):l.a.createElement(h.PerseidsHeader,{logo:t},a));x.defaultProps={logo:void 0,link:void 0};var b=x,k=a(44),E=a.n(k),v=a(29),f=a.n(v);const w=t=>Object(v.uriTransformer)("/"===t[0]?"".concat("/alpheios-trees").concat(t):t);var y=t=>l.a.createElement(f.a,Object.assign({},t,{transformLinkUri:w}));var N=({title:t,subtitle:e})=>l.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-dark ".concat(E.a.jumbotronSmall)},l.a.createElement("div",{className:"container text-light"},l.a.createElement("h1",{className:"display-4"},t),e&&(t=>l.a.createElement(y,{source:t}))(e)));const O=t=>{const e=t.path,a=t.author,o=t.work,r=t.editors,n=t.sections;return l.a.createElement("tr",{className:"d-flex",key:e},l.a.createElement("th",{className:"col-md-3 d-none d-md-block",scope:"row"},a),l.a.createElement("td",{className:"col-md-4 d-none d-md-block"},o),l.a.createElement("td",{className:"col-8 col-sm-7 d-block d-md-none"},l.a.createElement("strong",null,a),","," ",l.a.createElement("em",null,o)),l.a.createElement("td",{className:"col-md-3 col-lg-3 d-none d-md-block"},(t=>Array.isArray(t)?l.a.createElement("ul",{className:"pl-1"},t.map(t=>l.a.createElement("li",{key:t},t))):t)(r)),l.a.createElement("td",{className:"col-4 col-sm-5 col-md-2 col-lg-2 text-right"},n.map(t=>(t=>{const e=t.locus,a=t.path,o=(t=>{const e=t.start,a=t.numbers;return e||a[0]})(t.chunks);return l.a.createElement(s.Fragment,{key:a},l.a.createElement("a",{href:"".concat(a,"/").concat(o)},e),l.a.createElement("br",null))})(t))))},L=({title:t,publications:e,text:a})=>l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row pb-3"},l.a.createElement("div",{className:"col-12"},t&&l.a.createElement("h2",null,t),a&&l.a.createElement(y,{source:a}),l.a.createElement("table",{className:"table"},e&&l.a.createElement(l.a.Fragment,null,l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",{className:"d-flex"},l.a.createElement("th",{className:"col-md-3 d-none d-md-block",scope:"col"},"Author"),l.a.createElement("th",{className:"col-8 col-sm-7 col-md-4",scope:"col"},"Work"),l.a.createElement("th",{className:"col-md-3 col-lg-3 d-none d-md-block",scope:"col"},"Editors"),l.a.createElement("th",{className:"col-4 col-sm-5 col-md-2 col-lg-2",scope:"col"},"Locus"))),l.a.createElement("tbody",null,e.map(t=>O(t))))))));L.defaultProps={publications:void 0,text:void 0};var B=L;var S=({config:t})=>{const e=t.logo,a=t.link,s=t.title,o=t.subtitle,r=t.collections;return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{logo:e,link:a},s),l.a.createElement(N,{title:s,subtitle:o}),r.map(t=>(t=>{const e=t.title,a=t.text,s=t.publications;return l.a.createElement(B,{key:e,title:e,text:a,publications:s})})(t)))},j=a(16),A=a.n(j);const _={main:{debug:!1,showKeys:!1,chunkParam:"chunk",auxConfPath:"".concat("/alpheios-trees","/arethusa/configs"),retrievers:{TreebankRetriever:{resource:"Gardener",docIdentifier:"treebank",preselector:"w"}},plugins:["text","morph","relation","depTree","search"],layouts:[{name:"widget",template:"js/templates/widget.html"}]},notifier:{disable:!0},navigator:{chunkSize:1},navbar:!1,resources:{Gardener:{route:"".concat("/alpheios-trees","/xml/:doc"),params:["doc"]},lexInvFusekiEndpoint:{route:"https://fuseki.perseids.org/fuseki/ds/query?format=json"},morphologyServiceLat:{route:"https://services.perseids.org/bsp/morphologyservice/analysis/word?lang=lat&engine=morpheuslat"},newMorphologyServiceLat:{route:"https://morph.perseids.org/analysis/word?lang=lat&engine=morpheuslat"},morphologyServiceGrc:{route:"https://services.perseids.org/bsp/morphologyservice/analysis/word?lang=grc&engine=morpheusgrc"},newMorphologyServiceGrc:{route:"https://morph.perseids.org/analysis/word?lang=grc&engine=morpheusgrc"},morphologyServicePer:{route:"https://localhost/extapi/morphologyservice/analysis/word?lang=per&engine=hazm"},citeMapper:{route:"https://services.perseids.org/cite_mapper/find_cite"},sgGrammar:{route:"https://services.perseids.org/sg/:doc.html"}},plugins:{text:{main:!0,template:"js/templates/text_with_context.html"},depTree:{main:!0,contextMenu:!1,contextMenuTemplate:"js/arethusa.dep_tree/templates/context_menu.html",template:"js/templates/dep_tree.html"},morph:{retrievers:{BspMorphRetriever:{resource:"morphologyServiceLat"}},template:"js/templates/morph3.html",contextMenu:!0,contextMenuTemplate:"js/arethusa.morph/templates/context_menu.html",lexicalInventory:{retriever:{LexicalInventoryRetriever:{resource:"lexInvFusekiEndpoint"}}},matchAll:!0,"@include":"js/arethusa.morph/configs/morph/lat_attributes.json"},search:{template:"js/templates/search.html",regex:!0},relation:{advancedMode:!0,relations:{}}},keyCapture:{regex:{greek:{"\u03b1":"[\u03b1\u1f01\u1f05\u1f03\u1f07\u1f00\u1f04\u1f02\u1f06\u03ac\u1f70\u1fb6\u1f81\u1f85\u1f83\u1f87\u1f80\u1f84\u1f82\u1f86\u1fb4\u1fb2\u1fb7\u1fb3]","\u03b5":"[\u03b5\u03ad\u1f72\u1f10\u1f11\u1f14\u1f12\u1f15\u1f13]","\u03b7":"[\u03b7\u1f21\u1f25\u1f23\u1f27\u1f20\u1f24\u1f22\u1f26\u03ae\u1f74\u1fc6\u1f91\u1f95\u1f93\u1f97\u1f90\u1f94\u1f92\u1f96\u1fc4\u1fc2\u1fc7\u1fc3]","\u03b9":"[\u03b9\u1f31\u1f35\u1f33\u1f37\u1f30\u1f34\u1f32\u1f36\u03af\u1f76\u1fd6]","\u03bf":"[\u03bf\u03cc\u1f78\u1f40\u1f41\u1f44\u1f42\u1f45\u1f43]","\u03c5":"[\u03c5\u1f51\u1f55\u1f53\u1f57\u1f50\u1f54\u1f52\u1f56\u03cd\u1f7a\u1fe6]","\u03c9":"[\u03c9\u1f61\u1f65\u1f63\u1f67\u1f60\u1f64\u1f62\u1f66\u03ce\u1f7c\u1ff6\u1fa1\u1fa5\u1fa3\u1fa7\u1fa0\u1fa4\u1fa2\u1fa6\u1ff4\u1ff2\u1ff7\u1ff3]"}},keys:{}}},R=JSON.parse(JSON.stringify(_));R.main.layouts=[{name:"main_with_sidepanel",template:"js/templates/main_with_sidepanel.html"}];a(138);const M="".concat("/alpheios-trees","/arethusa/");var I=class{constructor(){this.render=this.render.bind(this)}render(t,e,{config:a,w:s}){s&&[].push(...s);const l=window,o=l.Arethusa,r=l.$;var n,c;this.widget?this.doc!==t||this.chunk===e&&(n=this.w,c=s,n.sort().join(",")===c.sort().join(","))||(this.gotoSentence(e,s),(t=>{t("#toast-container").remove()})(r)):(this.widget=new o,this.widget.on("treebank_container").from(M).with((t=>"sidepanel"===t?R:_)(a)).start({doc:t,chunk:e,w:s}),this.api=this.widget.api()),this.doc=t,this.chunk=e,this.w=s}gotoSentence(t,e){return this.api.gotoSentence(t,e)}getSubdoc(){return this.api.getSubdoc()}getMorph(t,e){return this.api.getMorph(t,e)}refreshView(){return this.api.refreshView()}findWord(t,e,a,s){return this.api.findWord(t,e,a,s)}findWord(t,e,a,s){return console.info("Find ".concat(e," ").concat(a," ").concat(s)),this.widget.api().findWord(t,e,a,s)}},C=a(45),F=a.n(C),P=a(19),T=a(20),W=a(30),q=a(14),H=a.n(q),D=a(10),Q=a.n(D);const U=(t,e)=>t<e?t:e,V=(t,e)=>t>e?t:e;class G extends s.Component{constructor(t){super(t),this.state={refIsOpen:!1,settingsIsOpen:!1},this.getLines=this.getLines.bind(this),this.getFbcnl=this.getFbcnl.bind(this),this.createLink=this.createLink.bind(this),this.toggleRefOpen=this.toggleRefOpen.bind(this),this.toggleSettingsOpen=this.toggleSettingsOpen.bind(this),this.renderSettingsLinks=this.renderSettingsLinks.bind(this)}getLines(){const t=this.props.chunks,e=t.start,a=t.end,s=t.numbers;if(s)return s;const l=[];for(let o=e;o<=a;o+=1)l.push(o);return l}getFbcnl(){const t=this.props,e=t.chunks,a=e.start,s=e.end,l=e.numbers,o=t.match.params.chunk,r=Number(o);return l?((t,e)=>{const a=e.indexOf(t);return[e[0],e[V(0,a-1)],t,e[U(e.length-1,a+1)],e[e.length-1]]})(o,l):[a,V(a,r-1),o,U(s,r+1),s]}createLink(t){const e=this.props.linkQuery,a="./".concat(t);if(Object.entries(e).length>0){const t=H.a.stringify(e);return"".concat(a,"?").concat(t)}return a}toggleRefOpen(){this.setState(({refIsOpen:t})=>({refIsOpen:!t}))}toggleSettingsOpen(){this.setState(({settingsIsOpen:t})=>({settingsIsOpen:!t}))}renderSettingsLinks(){const t=this.props.fullQuery,e=t.config,a="sidepanel"===e?"default":"sidepanel",s="sidepanel"===e?"Hide morphology":"Show morphology";return l.a.createElement("a",{href:"?".concat(H.a.stringify(Object(T.a)({},t,{config:a}))),className:"dropdown-item"},s)}render(){const t=this.state,e=t.refIsOpen,a=t.settingsIsOpen,s=this.getFbcnl(),o=Object(P.a)(s,5),r=o[0],c=o[1],i=o[2],h=o[3],g=o[4],m=this.getLines();return l.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},l.a.createElement("div",{className:"collapse navbar-collapse",id:"controlPanel"},l.a.createElement("ul",{className:"navbar-nav mr-auto ".concat(Q.a.dummyIcon)}),l.a.createElement("ul",{className:"navbar-nav mx-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(n.b,{className:"nav-link text-light ".concat(Q.a.link),to:this.createLink(r)},"\xab First")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(n.b,{className:"nav-link text-light ".concat(Q.a.link),to:this.createLink(c)},"\u2039 Back")),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("button",{className:"btn btn-link nav-link text-light dropdown-toggle ".concat(Q.a.dropdownButton),type:"button","aria-haspopup":"true","aria-expanded":e,onClick:this.toggleRefOpen},i),l.a.createElement("div",{className:"dropdown-menu ".concat(Q.a.dropdownScroll," ").concat(e?"show":"")},m.map(t=>l.a.createElement(n.b,{className:"dropdown-item",key:t,to:this.createLink(t),onClick:this.toggleRefOpen},t)))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(n.b,{className:"nav-link text-light ".concat(Q.a.link),to:this.createLink(h)},"Next \u203a")),l.a.createElement("li",null,l.a.createElement(n.b,{className:"nav-link text-light ".concat(Q.a.link),to:this.createLink(g)},"Last \xbb"))),l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item dropdown dropleft"},l.a.createElement("button",{className:"btn btn-link nav-link text-light",type:"button","aria-haspopup":"true","aria-expanded":a,onClick:this.toggleSettingsOpen},l.a.createElement(W.b,{icon:W.a})),l.a.createElement("div",{className:"dropdown-menu ".concat(Q.a.dropdownScroll," ").concat(a?"show":"")},this.renderSettingsLinks())))))}}var J=G;const K=[{name:"w",type:"array"},{name:"config",type:"string",link:!0}],z=(t,e)=>"array"!==e||Array.isArray(t)?t:[t],X=t=>{const e=H.a.parse(t,{arrayFormat:"comma"}),a={};return K.forEach(({name:t,type:s})=>{Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=z(e[t],s))}),a};class Y extends s.Component{constructor(t){super(t),this.additionalArgs=this.additionalArgs.bind(this),this.linkQuery=this.linkQuery.bind(this),this.renderArethusa=this.renderArethusa.bind(this)}componentDidMount(){this.renderArethusa()}componentDidUpdate(){this.renderArethusa()}additionalArgs(){const t=this.props.location.search;return X(t)}linkQuery(){return(t=>{const e=X(t),a={};return K.forEach(({name:t,type:s,link:l})=>{l&&Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=z(e[t],s))}),a})(this.props.location.search)}renderArethusa(){const t=this.props,e=t.xml,a=t.match.params.chunk;(0,t.arethusa.render)(e,a,this.additionalArgs())}render(){const t=this.props,e=t.chunks,a=t.match,s=this.linkQuery(),o=this.additionalArgs();return l.a.createElement(l.a.Fragment,null,l.a.createElement(J,{match:a,chunks:e,fullQuery:o,linkQuery:s}),l.a.createElement("div",{className:"__artsa"},l.a.createElement("div",{id:"treebank_container",className:F.a.treebankContainer})))}}var $=Y;const Z=(t,e)=>l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},t),l.a.createElement("td",{className:A.a.publicationRow},(t=>Array.isArray(t)?l.a.createElement("div",null,t.map(t=>l.a.createElement("span",{key:t},t,l.a.createElement("br",null)))):t)(e)));class tt extends s.Component{constructor(t){super(t),this.state={arethusaLoaded:!1,subDoc:""},this.setSubdoc=this.setSubdoc.bind(this),this.setArethusaLoaded=this.setArethusaLoaded.bind(this),this.arethusa=new I}componentDidMount(){window.document.body.addEventListener("ArethusaLoaded",this.setSubdoc)}componentDidUpdate(t){const e=this.state.arethusaLoaded,a=this.props.location,s=t.location;e&&a!==s&&this.setSubdoc()}componentWillUnmount(){window.document.body.removeEventListener("ArethusaLoaded",this.setSubdoc)}setArethusaLoaded(){document.body.removeEventListener("ArethusaLoaded"),this.setSubdoc()}setSubdoc(){const t=this.arethusa.getSubdoc();this.setState({subDoc:t,arethusaLoaded:!0})}render(){const t=this.props,e=t.logo,a=t.link,s=t.publicationPath,o=t.author,r=t.work,n=t.editors,c=t.locus,i=t.publicationLink,h=t.notes,g=t.xml,m=t.chunks,p=t.match,u=t.location,d=this.state.subDoc;return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{logo:e,link:a},l.a.createElement("span",null,l.a.createElement("i",null,r)),l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"".concat("/alpheios-trees","/")},"Home")))),l.a.createElement("div",{className:"container pt-3"},l.a.createElement("h2",null,l.a.createElement("span",null,o,",",l.a.createElement("i",null," ",r," "),c)),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,!!o&&Z("Author",o),!!r&&Z("Work",r),!!c&&((t,e,a)=>l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},t),l.a.createElement("td",{className:A.a.publicationRow},e," ",l.a.createElement("a",{href:"../".concat(a)},"(See all)"))))("Locus",c,s),!!d&&Z("Reference",d),!!n&&Z("Editors",n),!!i&&((t,e)=>l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},t),l.a.createElement("td",null,l.a.createElement("a",{href:e},e))))("Link",i),!!h&&(x="Notes",k=h,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},x),l.a.createElement("td",{className:A.a.publicationRow},l.a.createElement(y,{source:k})))))),l.a.createElement("div",{className:A.a.treebankWrapper},l.a.createElement($,{xml:g,chunks:m,location:u,match:p,arethusa:this.arethusa})),l.a.createElement("div",{className:"pt-1 pb-4 text-right"},l.a.createElement("a",{href:"".concat("/alpheios-trees","/xml/").concat(g),target:"_blank",rel:"noopener noreferrer"},"View XML"))));var x,k}}tt.defaultProps={logo:void 0,link:void 0,publicationLink:void 0,notes:void 0};var et=tt;var at=({config:{logo:t,link:e}})=>l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{logo:t,link:e},l.a.createElement("span",null,"Not Found"),l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"".concat("/alpheios-trees","/")},"Home")))),l.a.createElement("div",{className:"container pt-5"},l.a.createElement("div",{className:"row col-12 pt-5 pb-3"},l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("h1",null,"Error 404"))),l.a.createElement("div",{className:"row col-12 pb-3"},l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("h2",null,"Publication not found"))),l.a.createElement("div",{className:"row col-12 pb-3"},l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("h2",null,l.a.createElement("a",{href:"".concat("/alpheios-trees","/")},"Return to homepage"))))));class st extends s.Component{constructor(t){super(t);const e=t.config,a={},s=e.logo,l=e.link;e.collections.forEach(t=>{(t.publications||[]).forEach(t=>{const e=t.author,o=t.work,r=t.editors,n=t.path;t.sections.forEach(t=>{const c=t.path,i=t.locus,h=t.link,g=t.notes,m=t.xml,p=t.chunks;a[c]={logo:s,link:l,publicationPath:n,author:e,work:o,editors:r,locus:i,publicationLink:h,notes:g,xml:m,chunks:p}})})}),this.argsLookup=a}render(){const t=this.props,e=t.config,a=t.match,s=t.location,o=a.params.publication,r=this.argsLookup[o];return void 0===r?l.a.createElement(at,{config:e}):l.a.createElement(et,Object.assign({},r,{match:a,location:s}))}}var lt=st;var ot=({config:{logo:t,link:e,title:a,subtitle:s,collections:o}})=>l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{logo:t,link:e},a,l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"".concat("/alpheios-trees","/")},"Home")))),l.a.createElement(N,{title:a,subtitle:s}),o.map(t=>(t=>{const e=t.title,a=t.publications;return l.a.createElement(B,{key:e,title:e,publications:a})})(t)));class rt extends s.Component{constructor(t){super(t);const e=t.config,a={},s=e.logo,o=e.link,r=e.title,n=e.subtitle,c=e.report,i=e.github,h=e.twitter;e.collections.forEach(t=>{(t.publications||[]).forEach(t=>{const e=t.path,g=t.author,m=t.work;a[e]={logo:s,link:o,title:r,subtitle:n,report:c,github:i,twitter:h,collections:[{title:l.a.createElement(l.a.Fragment,null,g,","," ",l.a.createElement("i",null,m)),publications:[t]}]}})}),this.argsLookup=a}render(){const t=this.props,e=t.config,a=t.match.params.publication,s=this.argsLookup[a];return void 0===s?l.a.createElement(at,{config:e}):l.a.createElement(ot,{config:s})}}var nt=rt;var ct=({config:t,config:{copyright:e,report:a,github:s,twitter:o}})=>l.a.createElement(l.a.Fragment,null,l.a.createElement(c.d,null,l.a.createElement(c.b,{exact:!0,path:"/",component:()=>l.a.createElement(S,{config:t})}),l.a.createElement(c.b,{exact:!0,path:"/:publication/",render:e=>l.a.createElement(nt,Object.assign({},e,{config:t}))}),l.a.createElement(c.b,{exact:!0,path:"/:publication/:chunk",render:e=>l.a.createElement(lt,Object.assign({},e,{config:t}))}),l.a.createElement(c.b,{path:"/",component:()=>l.a.createElement(at,{config:t})})),l.a.createElement(h.PerseidsFooter,{copyright:e,report:a,github:s,twitter:o})),it=a(33),ht=a.n(it),gt=a(4);const mt={name:"treebank",targetIframeID:"string-not-used",targetURL:"string-not-used",commModes:[gt.WindowIframeDestination.commModes.RECEIVE]},pt=(t,e,a)=>gt.ResponseMessage.Error(t,new Error(e),a),ut=({wordIds:t,config:e,sentenceId:a})=>{const s=(l={w:t,config:e},H.a.stringify(l,{arrayFormat:"comma"}));var l;return""===s?a:"".concat(a,"?").concat(s)};class dt extends s.Component{constructor(t){super(t),this.state={arethusaLoaded:!1,redirectTo:null},this.messageHandler=this.messageHandler.bind(this),this.setArethusaLoaded=this.setArethusaLoaded.bind(this)}componentDidMount(){this.destination=new gt.WindowIframeDestination(Object(T.a)({},mt,{receiverCB:this.messageHandler})),this.service=new gt.MessagingService("treebank-service",this.destination),window.document.body.addEventListener("ArethusaLoaded",this.setArethusaLoaded)}componentWillUnmount(){this.destination.deregister(),window.document.body.removeEventListener("ArethusaLoaded",this.setArethusaLoaded)}setArethusaLoaded(){this.setState({arethusaLoaded:!0})}messageHandler(t,e){const a=this.props.arethusa,s=this.state.arethusaLoaded,l=t.body,o=Object.keys(l),r=Object(P.a)(o,1)[0];if(s)try{switch(r){case"gotoSentence":this.setState({redirectTo:ut(l.gotoSentence)}),e(gt.ResponseMessage.Success(t,{status:"success"}));break;case"getMorph":e(gt.ResponseMessage.Success(t,a.getMorph(l.getMorph.sentenceId,l.getMorph.wordId)));break;case"refreshView":e(gt.ResponseMessage.Success(t,a.refreshView()));break;case"findWord":e(gt.ResponseMessage.Success(t,a.findWord(l.findWord.sentenceId,l.findWord.word,l.findWord.prefix,l.findWord.suffix)));break;default:e(pt(t,"Unsupported request: ".concat(r),gt.ResponseMessage.errorCodes.UNKNOWN_REQUEST))}}catch(n){e(gt.ResponseMessage.Error(t,n,gt.ResponseMessage.errorCodes.INTERNAL_ERROR))}else e(pt(t,"Arethusa is Not Loaded",gt.ResponseMessage.errorCodes.SERVICE_UNINITIALIZED))}render(){const t=this.state.redirectTo;return t&&l.a.createElement(c.a,{to:t})}}var xt=dt;class bt extends s.Component{componentDidMount(){this.renderArethusa()}componentDidUpdate(){this.renderArethusa()}renderArethusa(){const t=this.props,e=t.xml,a=t.match.params.chunk,s=t.arethusa.render,l=t.location.search;s(e,a,X(l))}render(){const t=this.props,e=t.match,a=t.arethusa,s=e.params,o=s.publication,r=s.chunk;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"__artsa"},l.a.createElement("div",{id:"treebank_container",className:ht.a.treebankContainer})),l.a.createElement("div",{className:ht.a.links},l.a.createElement("a",{href:"".concat("/alpheios-trees","/").concat(o,"/").concat(r),target:"_blank",rel:"noopener noreferrer"},"Credits and more information")),l.a.createElement(xt,{arethusa:a}))}}var kt=bt;class Et extends s.Component{constructor(t){super(t),this.arethusa=new I}render(){const t=this.props,e=t.xml,a=t.match,s=t.location;return l.a.createElement("div",null,l.a.createElement(kt,{xml:e,location:s,match:a,arethusa:this.arethusa}))}}var vt=Et;var ft=()=>l.a.createElement("div",{className:"container pt-5"},l.a.createElement("div",{className:"row col-12 pt-5 pb-3"},l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("h1",null,"Error 404"))),l.a.createElement("div",{className:"row col-12 pb-3"},l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("h2",null,"Publication not found"))));class wt extends s.Component{constructor(t){super(t);const e=t.config,a={};e.collections.forEach(t=>{(t.publications||[]).forEach(t=>{t.sections.forEach(t=>{const e=t.path,s=t.xml;a[e]={xml:s}})})}),this.argsLookup=a}render(){const t=this.props,e=t.config,a=t.match,s=t.location,o=a.params.publication,r=this.argsLookup[o];if(void 0===r)return l.a.createElement(ft,{config:e});const n=r.xml;return l.a.createElement(vt,{xml:n,match:a,location:s})}}var yt=wt;var Nt=({config:t})=>l.a.createElement(c.d,null,l.a.createElement(c.b,{exact:!0,path:"/embed/:publication/:chunk",render:e=>l.a.createElement(yt,Object.assign({},e,{config:t}))}),l.a.createElement(c.b,{path:"/",component:()=>l.a.createElement(ft,{config:t})}));var Ot=()=>l.a.createElement(n.a,{basename:"/alpheios-trees"},l.a.createElement(c.d,null,l.a.createElement(c.b,{path:"/embed/",component:()=>l.a.createElement(Nt,{config:i})}),l.a.createElement(c.b,{path:"/",component:()=>l.a.createElement(ct,{config:i})})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(Ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(t=>{t.unregister()})},16:function(t,e,a){t.exports={publicationRow:"Publication_publicationRow__3taiJ",treebankWrapper:"Publication_treebankWrapper__2KYz-"}},28:function(t){t.exports=JSON.parse('{"title":"Alpheios Treebank Files","subtitle":"Treebank Files for Alpheios Texts","copyright":"\xa9 The Perseids Project 2019, The Alpheios Project, LTd. 2020","report":"https://github.com/alpheios-project/alpheios-trees/issues","github":"https://github.com/alpheios-project/alpheios-trees","twitter":"https://twitter.com/Alpheios","collections":[{"title":"Information","text":"To learn more visit [our homepage](https://alpheios.net)."},{"title":"Latin Collection","publications":[{"path":"phi0474.phi052.perseus-lat1","author":"Cicero","work":"De Amicitia","editors":"Bob Gorman","sections":[{"locus":"1.1-27.104","path":"phi0474.phi052.perseus-lat1","xml":"phi0474.phi052.perseus-lat1.tb.xml","chunks":{"start":1,"end":518}}]},{"path":"phi0620.phi001","author":"Sextus Propertius","work":"Elegies","editors":"various","sections":[{"locus":"Book 1","path":"phi0620.phi001.alpheios-text-lat1","xml":"phi0620.phi001.alpheios-text-lat1.tb.xml","chunks":{"start":1,"end":361}},{"locus":"Book 1 (AE1)","path":"1999.02.0066","xml":"1999.02.0066.tb.xml","chunks":{"start":1,"end":361}}]},{"path":"phi0959.phi006","author":"Ovid","work":"Metamorphoses","editors":"various","sections":[{"locus":"various","path":"phi0959.phi006.alpheios-text-lat1","xml":"phi0959.phi006.alpheios-text-lat1.tb.xml","chunks":{"start":1,"end":316}}]}]},{"title":"Greek Collection","publications":[{"path":"1999.01.0021","author":"Apollodorus","work":"Library and Epitome","editors":"various","sections":[{"locus":"selections","path":"1999.01.0021","xml":"1999.01.0021.tb.xml","chunks":{"start":1,"end":36}}]},{"path":"aesop","author":"Babrius","work":"Fables from Aesop","editors":"various","sections":[{"locus":"Selections","path":"aesop","xml":"aesop.tb.xml","chunks":{"start":1,"end":18}}]},{"path":"tlg0011.tlg003","author":"Sophocles","work":"Ajax","editors":"Daniel Lim Libatique","sections":[{"locus":"1-1376","path":"tlg0011.tlg003.alpheios-text-grc1","xml":"tlg0011.tlg003.alpheios-text-grc1.tb.xml","chunks":{"start":2383098,"end":2383882}}]},{"path":"tlg0020.tlg001","author":"Hesiod","work":"Theogeny","editors":"various","sections":[{"locus":"1-1022","path":"tlg0020.tlg001.alpheios-text-grc1","xml":"tlg0020.tlg001.alpheios-text-grc1.tb.xml","chunks":{"start":2273668,"end":2274105}}]},{"path":"tlg0020.tlg002","author":"Hesiod","work":"Works and Days","editors":"various","sections":[{"locus":"1-828","path":"tlg0020.tlg002.alpheios-text-grc1","xml":"tlg0020.tlg002.alpheios-text-grc1.tb.xml","chunks":{"start":1715891,"end":1716381}}]},{"path":"tlg0020.tlg003","author":"Hesiod","work":"Shield of Heracles","editors":"various","sections":[{"locus":"1-480","path":"tlg0020.tlg003.alpheios-text-grc1","xml":"tlg0020.tlg003.alpheios-text-grc1.tb.xml","chunks":{"start":2273413,"end":2273667}}]},{"path":"tlg0032.tlg001","author":"Xenophon","work":"Hellenica","editors":"Vanessa Gorman","sections":[{"locus":"1.1-1.4","path":"tlg0032.tlg001.perseus-grc2.1.1-1.4","xml":"tlg0032.tlg001.perseus-grc2.1.1-1.4.tb.xml","chunks":{"start":1,"end":184}},{"locus":"1.5-1.7","path":"tlg0032.tlg001.perseus-grc2.1.5-1.7","xml":"tlg0032.tlg001.perseus-grc2.1.5-1.7.tb.xml","chunks":{"start":1,"end":193}},{"locus":"2","path":"tlg0032.tlg001.perseus-grc2.2","xml":"tlg0032.tlg001.perseus-grc2.2.tb.xml","chunks":{"start":1,"end":412}},{"locus":"3","path":"tlg0032.tlg001.perseus-grc2.3","xml":"tlg0032.tlg001.perseus-grc2.3.tb.xml","chunks":{"start":1,"end":459}}]},{"path":"tlg0085.tlg001","author":"Aeschylus","work":"Suppliant Women","editors":"Francesco Mambrini","sections":[{"locus":"1-1073","path":"tlg0085.tlg001.alpheios-text-grc1","xml":"tlg0085.tlg001.alpheios-text-grc1.tb.xml","chunks":{"start":2198018,"end":2198551}}]},{"path":"tlg0085.tlg002","author":"Aeschylus","work":"Persians","editors":"Francesco Mambrini","sections":[{"locus":"1-1076","path":"tlg0085.tlg002.alpheios-text-grc1","xml":"tlg0085.tlg002.alpheios-text-grc1.tb.xml","chunks":{"start":2197011,"end":2197494}}]},{"path":"tlg0085.tlg003","author":"Aeschylus","work":"Prometheus Bound","editors":"Francesco Mambrini","sections":[{"locus":"1-1093","path":"tlg0085.tlg003.alpheios-text-grc1","xml":"tlg0085.tlg003.alpheios-text-grc1.tb.xml","chunks":{"start":2196419,"end":2197010}}]},{"path":"tlg0085.tlg004","author":"Aeschylus","work":"Seven Against Thebes","editors":"Francesco Mambrini","sections":[{"locus":"1-1084","path":"tlg0085.tlg005.alpheios-text-grc1","xml":"tlg0085.tlg005.alpheios-text-grc1.tb.xml","chunks":{"start":2197495,"end":2198017}}]},{"path":"tlg0085.tlg005","author":"Aeschylus","work":"Agamemnon","editors":"Francesco Mambrini","sections":[{"locus":"1-1673","path":"tlg0085.tlg005.alpheios-text-grc1","xml":"tlg0085.tlg005.alpheios-text-grc1.tb.xml","chunks":{"start":2185285,"end":2195321}}]},{"path":"tlg0085.tlg006","author":"Aeschylus","work":"Libation Bearers","editors":"Francesco Mambrini","sections":[{"locus":"1-1076","path":"tlg0085.tlg007.alpheios-text-grc1","xml":"tlg0085.tlg006.alpheios-text-grc1.tb.xml","chunks":{"start":2195845,"end":2196418}}]},{"path":"tlg0012.tlg001","author":"Homer","work":"Iliad","editors":"various","sections":[{"locus":"Book 1","path":"tlg0012.tlg001.alpheios-text-grc1.1","xml":"tlg0012.tlg001.alpheios-text-grc1.1.tb.xml","chunks":{"start":2274106,"end":2274454}},{"locus":"Book 2","path":"tlg0012.tlg001.alpheios-text-grc1.2","xml":"tlg0012.tlg001.alpheios-text-grc1.2.tb.xml","chunks":{"start":2274455,"end":2274873}},{"locus":"Book 3","path":"tlg0012.tlg001.alpheios-text-grc1.3","xml":"tlg0012.tlg001.alpheios-text-grc1.3.tb.xml","chunks":{"start":2274874,"end":2275122}},{"locus":"Book 4","path":"tlg0012.tlg001.alpheios-text-grc1.4","xml":"tlg0012.tlg001.alpheios-text-grc1.4.tb.xml","chunks":{"start":2275123,"end":2275428}},{"locus":"Book 5","path":"tlg0012.tlg001.alpheios-text-grc1.5","xml":"tlg0012.tlg001.alpheios-text-grc1.5.tb.xml","chunks":{"start":2275429,"end":2275919}},{"locus":"Book 6","path":"tlg0012.tlg001.alpheios-text-grc1.6","xml":"tlg0012.tlg001.alpheios-text-grc1.6.tb.xml","chunks":{"start":2275920,"end":2276192}},{"locus":"Book 7","path":"tlg0012.tlg001.alpheios-text-grc1.7","xml":"tlg0012.tlg001.alpheios-text-grc1.7.tb.xml","chunks":{"start":2276193,"end":2276455}},{"locus":"Book 8","path":"tlg0012.tlg001.alpheios-text-grc1.8","xml":"tlg0012.tlg001.alpheios-text-grc1.8.tb.xml","chunks":{"start":2276456,"end":2276746}},{"locus":"Book 9","path":"tlg0012.tlg001.alpheios-text-grc1.9","xml":"tlg0012.tlg001.alpheios-text-grc1.9.tb.xml","chunks":{"start":2276747,"end":2277119}},{"locus":"Book 10","path":"tlg0012.tlg001.alpheios-text-grc1.10","xml":"tlg0012.tlg001.alpheios-text-grc1.10.tb.xml","chunks":{"start":2277120,"end":2277453}},{"locus":"Book 11","path":"tlg0012.tlg001.alpheios-text-grc1.11","xml":"tlg0012.tlg001.alpheios-text-grc1.11.tb.xml","chunks":{"start":2277454,"end":2277902}},{"locus":"Book 12","path":"tlg0012.tlg001.alpheios-text-grc1.12","xml":"tlg0012.tlg001.alpheios-text-grc1.12.tb.xml","chunks":{"start":2277903,"end":2278121}},{"locus":"Book 13","path":"tlg0012.tlg001.alpheios-text-grc1.13","xml":"tlg0012.tlg001.alpheios-text-grc1.13.tb.xml","chunks":{"start":2278122,"end":2278564}},{"locus":"Book 14","path":"tlg0012.tlg001.alpheios-text-grc1.14","xml":"tlg0012.tlg001.alpheios-text-grc1.14.tb.xml","chunks":{"start":2278565,"end":2278843}},{"locus":"Book 15","path":"tlg0012.tlg001.alpheios-text-grc1.15","xml":"tlg0012.tlg001.alpheios-text-grc1.15.tb.xml","chunks":{"start":2278844,"end":2279223}},{"locus":"Book 16","path":"tlg0012.tlg001.alpheios-text-grc1.16","xml":"tlg0012.tlg001.alpheios-text-grc1.16.tb.xml","chunks":{"start":2279224,"end":2279681}},{"locus":"Book 17","path":"tlg0012.tlg001.alpheios-text-grc1.17","xml":"tlg0012.tlg001.alpheios-text-grc1.17.tb.xml","chunks":{"start":2279682,"end":2280079}},{"locus":"Book 18","path":"tlg0012.tlg001.alpheios-text-grc1.18","xml":"tlg0012.tlg001.alpheios-text-grc1.18.tb.xml","chunks":{"start":2280080,"end":2280430}},{"locus":"Book 19","path":"tlg0012.tlg001.alpheios-text-grc1.19","xml":"tlg0012.tlg001.alpheios-text-grc1.19.tb.xml","chunks":{"start":2280431,"end":2280661}},{"locus":"Book 20","path":"tlg0012.tlg001.alpheios-text-grc1.20","xml":"tlg0012.tlg001.alpheios-text-grc1.20.tb.xml","chunks":{"start":2280662,"end":2280927}},{"locus":"Book 21","path":"tlg0012.tlg001.alpheios-text-grc1.21","xml":"tlg0012.tlg001.alpheios-text-grc1.21.tb.xml","chunks":{"start":2280928,"end":2281276}},{"locus":"Book 22","path":"tlg0012.tlg001.alpheios-text-grc1.22","xml":"tlg0012.tlg001.alpheios-text-grc1.22.tb.xml","chunks":{"start":2281277,"end":2281557}},{"locus":"Book 23","path":"tlg0012.tlg001.alpheios-text-grc1.23","xml":"tlg0012.tlg001.alpheios-text-grc1.23.tb.xml","chunks":{"start":2281558,"end":2282089}},{"locus":"Book 24","path":"tlg0012.tlg001.alpheios-text-grc1.24","xml":"tlg0012.tlg001.alpheios-text-grc1.24.tb.xml","chunks":{"start":2282090,"end":2282520}}]},{"path":"tlg0012.tlg002","author":"Homer","work":"Odyssey","editors":"various","sections":[{"locus":"Book 1 (AE1)","path":"1999.01.0135","xml":"1999.01.0135.tb.xml","chunks":{"start":227,"end":459}},{"locus":"Book 1","path":"tlg0012.tlg002.alpheios-text-grc1.1","xml":"tlg0012.tlg002.alpheios-text-grc1.1.tb.xml","chunks":{"start":2185541,"end":2185773}},{"locus":"Book 2","path":"tlg0012.tlg002.alpheios-text-grc1.2","xml":"tlg0012.tlg002.alpheios-text-grc1.2.tb.xml","chunks":{"start":2185774,"end":2186018}},{"locus":"Book 3","path":"tlg0012.tlg002.alpheios-text-grc1.3","xml":"tlg0012.tlg002.alpheios-text-grc1.3.tb.xml","chunks":{"start":2186019,"end":2186287}},{"locus":"Book 4","path":"tlg0012.tlg002.alpheios-text-grc1.4","xml":"tlg0012.tlg002.alpheios-text-grc1.4.tb.xml","chunks":{"start":2186288,"end":2186755}},{"locus":"Book 5","path":"tlg0012.tlg002.alpheios-text-grc1.5","xml":"tlg0012.tlg002.alpheios-text-grc1.5.tb.xml","chunks":{"start":2186756,"end":2187022}},{"locus":"Book 6","path":"tlg0012.tlg002.alpheios-text-grc1.6","xml":"tlg0012.tlg002.alpheios-text-grc1.6.tb.xml","chunks":{"start":2187023,"end":2187218}},{"locus":"Book 7","path":"tlg0012.tlg002.alpheios-text-grc1.7","xml":"tlg0012.tlg002.alpheios-text-grc1.7.tb.xml","chunks":{"start":2187219,"end":2187399}},{"locus":"Book 8","path":"tlg0012.tlg002.alpheios-text-grc1.8","xml":"tlg0012.tlg002.alpheios-text-grc1.8.tb.xml","chunks":{"start":2187400,"end":2187720}},{"locus":"Book 9","path":"tlg0012.tlg002.alpheios-text-grc1.9","xml":"tlg0012.tlg002.alpheios-text-grc1.9.tb.xml","chunks":{"start":2187721,"end":2188024}},{"locus":"Book 10","path":"tlg0012.tlg002.alpheios-text-grc1.10","xml":"tlg0012.tlg002.alpheios-text-grc1.10.tb.xml","chunks":{"start":2188025,"end":2188364}},{"locus":"Book 11","path":"tlg0012.tlg002.alpheios-text-grc1.11","xml":"tlg0012.tlg002.alpheios-text-grc1.11.tb.xml","chunks":{"start":2188365,"end":2188695}},{"locus":"Book 12","path":"tlg0012.tlg002.alpheios-text-grc1.12","xml":"tlg0012.tlg002.alpheios-text-grc1.12.tb.xml","chunks":{"start":2188696,"end":2188936}},{"locus":"Book 13","path":"tlg0012.tlg002.alpheios-text-grc1.13","xml":"tlg0012.tlg002.alpheios-text-grc1.13.tb.xml","chunks":{"start":2188937,"end":2189171}},{"locus":"Book 14","path":"tlg0012.tlg002.alpheios-text-grc1.14","xml":"tlg0012.tlg002.alpheios-text-grc1.14.tb.xml","chunks":{"start":2189172,"end":2189470}},{"locus":"Book 15","path":"tlg0012.tlg002.alpheios-text-grc1.15","xml":"tlg0012.tlg002.alpheios-text-grc1.15.tb.xml","chunks":{"start":2189471,"end":2189794}},{"locus":"Book 16","path":"tlg0012.tlg002.alpheios-text-grc1.16","xml":"tlg0012.tlg002.alpheios-text-grc1.16.tb.xml","chunks":{"start":2189795,"end":2190075}},{"locus":"Book 17","path":"tlg0012.tlg002.alpheios-text-grc1.17","xml":"tlg0012.tlg002.alpheios-text-grc1.17.tb.xml","chunks":{"start":2190076,"end":2190447}},{"locus":"Book 18","path":"tlg0012.tlg002.alpheios-text-grc1.18","xml":"tlg0012.tlg002.alpheios-text-grc1.18.tb.xml","chunks":{"start":2190448,"end":2190702}},{"locus":"Book 19","path":"tlg0012.tlg002.alpheios-text-grc1.19","xml":"tlg0012.tlg002.alpheios-text-grc1.19.tb.xml","chunks":{"start":2190703,"end":2191049}},{"locus":"Book 20","path":"tlg0012.tlg022.alpheios-text-grc1.20","xml":"tlg0012.tlg002.alpheios-text-grc1.20.tb.xml","chunks":{"start":2191050,"end":2191287}},{"locus":"Book 21","path":"tlg0012.tlg002.alpheios-text-grc1.21","xml":"tlg0012.tlg002.alpheios-text-grc1.21.tb.xml","chunks":{"start":2191288,"end":2191530}},{"locus":"Book 22","path":"tlg0012.tlg002.alpheios-text-grc1.22","xml":"tlg0012.tlg002.alpheios-text-grc1.22.tb.xml","chunks":{"start":2191531,"end":2191807}},{"locus":"Book 23","path":"tlg0012.tlg002.alpheios-text-grc1.23","xml":"tlg0012.tlg002.alpheios-text-grc1.23.tb.xml","chunks":{"start":2191808,"end":2192000}},{"locus":"Book 24","path":"tlg0012.tlg002.alpheios-text-grc1.24","xml":"tlg0012.tlg002.alpheios-text-grc1.24.tb.xml","chunks":{"start":2192001,"end":2192300}}]}]}]}')},33:function(t,e,a){t.exports={treebankContainer:"EmbeddedTreebank_treebankContainer__2X6pS",links:"EmbeddedTreebank_links__1ndYN"}},44:function(t,e,a){t.exports={jumbotronSmall:"Hero_jumbotronSmall__IN8kP"}},45:function(t,e,a){t.exports={treebankContainer:"Treebank_treebankContainer__sQn_K"}},48:function(t,e,a){t.exports=a(148)},55:function(t,e,a){}},[[48,1,2]]]);
//# sourceMappingURL=main.f2967f40.chunk.js.map