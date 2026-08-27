import{d as g,c,r as f,n as A,o,a as H,t as k,b as $,w as h,T as de,e as m,_ as P,u as ve,i as Fe,f as Oe,g as fe,h as y,j as d,k as u,l as q,m as ie,p as I,q as E,s as Z,v as O,x as he,y as me,z as Ge,A as je,F as T,B as x,C as z,D as Q,E as b,G as Te,H as D,I as Ie,J as R,K as U,L as X,M as Ue,N as Ae,O as ze,P as pe,Q as we,R as ee,S as qe,U as xe,V as Me,W as We,X as Re,Y as Ke,Z as le,$ as Je,a0 as Ye,a1 as ae}from"./framework.Caz7a20Z.js";const Ze=g({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(t,n)=>(o(),c("span",{class:A(["VPBadge",e.type])},[f(t.$slots,"default",{},()=>[H(k(e.text),1)])],2))}}),Qe={key:0,class:"VPBackdrop"},Xe=g({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,n)=>(o(),$(de,{name:"fade"},{default:h(()=>[e.show?(o(),c("div",Qe)):m("",!0)]),_:1}))}}),et=P(Xe,[["__scopeId","data-v-54a304ca"]]),V=ve;function tt(e,t){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(e,t):(e(),(s=!0)&&setTimeout(()=>s=!1,t))}}function re(e){return e.startsWith("/")?e:`/${e}`}function _e(e){const{pathname:t,search:n,hash:s,protocol:a}=new URL(e,"http://a.com");if(Fe(e)||e.startsWith("#")||!a.startsWith("http")||!Oe(t))return e;const{site:r}=V(),i=t.endsWith("/")||t.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,r.value.cleanUrls?"":".html")}${n}${s}`);return fe(i)}function K({correspondingLink:e=!1}={}){const{site:t,localeIndex:n,page:s,theme:a,hash:r}=V(),i=y(()=>{var l,p;return{label:(l=t.value.locales[n.value])==null?void 0:l.label,link:((p=t.value.locales[n.value])==null?void 0:p.link)||(n.value==="root"?"/":`/${n.value}/`)}});return{localeLinks:y(()=>Object.entries(t.value.locales).flatMap(([l,p])=>i.value.label===p.label?[]:{text:p.label,link:nt(p.link||(l==="root"?"/":`/${l}/`),a.value.i18nRouting!==!1&&e,s.value.relativePath.slice(i.value.link.length-1),!t.value.cleanUrls)+r.value})),currentLang:i}}function nt(e,t,n,s){return t?e.replace(/\/$/,"")+re(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,s?".html":"")):e}const st={class:"NotFound"},at={class:"code"},ot={class:"title"},it={class:"quote"},lt={class:"action"},rt=["href","aria-label"],ct=g({__name:"NotFound",setup(e){const{theme:t}=V(),{currentLang:n}=K();return(s,a)=>{var r,i,v,l,p;return o(),c("div",st,[d("p",at,k(((r=u(t).notFound)==null?void 0:r.code)??"404"),1),d("h1",ot,k(((i=u(t).notFound)==null?void 0:i.title)??"PAGE NOT FOUND"),1),a[0]||(a[0]=d("div",{class:"divider"},null,-1)),d("blockquote",it,k(((v=u(t).notFound)==null?void 0:v.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),d("div",lt,[d("a",{class:"link",href:u(fe)(u(n).link),"aria-label":((l=u(t).notFound)==null?void 0:l.linkLabel)??"go to home"},k(((p=u(t).notFound)==null?void 0:p.linkText)??"Take me home"),9,rt)])])}}}),ut=P(ct,[["__scopeId","data-v-6ff51ddd"]]);function Ne(e,t){if(Array.isArray(e))return J(e);if(e==null)return[];t=re(t);const n=Object.keys(e).sort((a,r)=>r.split("/").length-a.split("/").length).find(a=>t.startsWith(re(a))),s=n?e[n]:[];return Array.isArray(s)?J(s):J(s.items,s.base)}function dt(e){const t=[];let n=0;for(const s in e){const a=e[s];if(a.items){n=t.push(a);continue}t[n]||t.push({items:[]}),t[n].items.push(a)}return t}function vt(e){const t=[];function n(s){for(const a of s)a.text&&a.link&&t.push({text:a.text,link:a.link,docFooterText:a.docFooterText}),a.items&&n(a.items)}return n(e),t}function ce(e,t){return Array.isArray(t)?t.some(n=>ce(e,n)):q(e,t.link)?!0:t.items?ce(e,t.items):!1}function J(e,t){return[...e].map(n=>{const s={...n},a=s.base||t;return a&&s.link&&(s.link=a+s.link),s.items&&(s.items=J(s.items,a)),s})}function G(){const{frontmatter:e,page:t,theme:n}=V(),s=ie("(min-width: 960px)"),a=I(!1),r=y(()=>{const N=n.value.sidebar,C=t.value.relativePath;return N?Ne(N,C):[]}),i=I(r.value);E(r,(N,C)=>{JSON.stringify(N)!==JSON.stringify(C)&&(i.value=r.value)});const v=y(()=>e.value.sidebar!==!1&&i.value.length>0&&e.value.layout!=="home"),l=y(()=>p?e.value.aside==null?n.value.aside==="left":e.value.aside==="left":!1),p=y(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:n.value.aside!==!1),L=y(()=>v.value&&s.value),_=y(()=>v.value?dt(i.value):[]);function S(){a.value=!0}function w(){a.value=!1}function M(){a.value?w():S()}return{isOpen:a,sidebar:i,sidebarGroups:_,hasSidebar:v,hasAside:p,leftAside:l,isSidebarEnabled:L,open:S,close:w,toggle:M}}function ft(e,t){let n;Z(()=>{n=e.value?document.activeElement:void 0}),O(()=>{window.addEventListener("keyup",s)}),he(()=>{window.removeEventListener("keyup",s)});function s(a){a.key==="Escape"&&e.value&&(t(),n==null||n.focus())}}function ht(e){const{page:t,hash:n}=V(),s=I(!1),a=y(()=>e.value.collapsed!=null),r=y(()=>!!e.value.link),i=I(!1),v=()=>{i.value=q(t.value.relativePath,e.value.link)};E([t,e,n],v),O(v);const l=y(()=>i.value?!0:e.value.items?ce(t.value.relativePath,e.value.items):!1),p=y(()=>!!(e.value.items&&e.value.items.length));Z(()=>{s.value=!!(a.value&&e.value.collapsed)}),me(()=>{(i.value||l.value)&&(s.value=!1)});function L(){a.value&&(s.value=!s.value)}return{collapsed:s,collapsible:a,isLink:r,isActiveLink:i,hasActiveLink:l,hasChildren:p,toggle:L}}function mt(){const{hasSidebar:e}=G(),t=ie("(min-width: 960px)"),n=ie("(min-width: 1280px)");return{isAsideEnabled:y(()=>!n.value&&!t.value?!1:e.value?n.value:t.value)}}const pt=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,ue=[];function He(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function ge(e){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const s=Number(n.tagName[1]);return{element:n,title:_t(n),link:"#"+n.id,level:s}});return gt(t,e)}function _t(e){let t="";for(const n of e.childNodes)if(n.nodeType===1){if(pt.test(n.className))continue;t+=n.textContent}else n.nodeType===3&&(t+=n.textContent);return t.trim()}function gt(e,t){if(t===!1)return[];const n=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[s,a]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;return $t(e,s,a)}function bt(e,t){const{isAsideEnabled:n}=mt(),s=tt(r,100);let a=null;O(()=>{requestAnimationFrame(r),window.addEventListener("scroll",s)}),Ge(()=>{i(location.hash)}),he(()=>{window.removeEventListener("scroll",s)});function r(){if(!n.value)return;const v=window.scrollY,l=window.innerHeight,p=document.body.offsetHeight,L=Math.abs(v+l-p)<1,_=ue.map(({element:w,link:M})=>({link:M,top:kt(w)})).filter(({top:w})=>!Number.isNaN(w)).sort((w,M)=>w.top-M.top);if(!_.length){i(null);return}if(v<1){i(null);return}if(L){i(_[_.length-1].link);return}let S=null;for(const{link:w,top:M}of _){if(M>v+je()+4)break;S=w}i(S)}function i(v){a&&a.classList.remove("active"),v==null?a=null:a=e.value.querySelector(`a[href="${decodeURIComponent(v)}"]`);const l=a;l?(l.classList.add("active"),t.value.style.top=l.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function kt(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}function $t(e,t,n){ue.length=0;const s=[],a=[];return e.forEach(r=>{const i={...r,children:[]};let v=a[a.length-1];for(;v&&v.level>=i.level;)a.pop(),v=a[a.length-1];if(i.element.classList.contains("ignore-header")||v&&"shouldIgnore"in v){a.push({level:i.level,shouldIgnore:!0});return}i.level>n||i.level<t||(ue.push({element:i.element,link:i.link}),v?v.children.push(i):s.push(i),a.push(i))}),s}const yt=["href","title"],Pt=g({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function t({target:n}){const s=n.href.split("#")[1],a=document.getElementById(decodeURIComponent(s));a==null||a.focus({preventScroll:!0})}return(n,s)=>{const a=z("VPDocOutlineItem",!0);return o(),c("ul",{class:A(["VPDocOutlineItem",e.root?"root":"nested"])},[(o(!0),c(T,null,x(e.headers,({children:r,link:i,title:v})=>(o(),c("li",null,[d("a",{class:"outline-link",href:i,onClick:t,title:v},k(v),9,yt),r!=null&&r.length?(o(),$(a,{key:0,headers:r},null,8,["headers"])):m("",!0)]))),256))],2)}}}),Ce=P(Pt,[["__scopeId","data-v-53c99d69"]]),Lt={class:"content"},Vt={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},St=g({__name:"VPDocAsideOutline",setup(e){const{frontmatter:t,theme:n}=V(),s=Te([]);Q(()=>{s.value=ge(t.value.outline??n.value.outline)});const a=I(),r=I();return bt(a,r),(i,v)=>(o(),c("nav",{"aria-labelledby":"doc-outline-aria-label",class:A(["VPDocAsideOutline",{"has-outline":s.value.length>0}]),ref_key:"container",ref:a},[d("div",Lt,[d("div",{class:"outline-marker",ref_key:"marker",ref:r},null,512),d("div",Vt,k(u(He)(u(n))),1),b(Ce,{headers:s.value,root:!0},null,8,["headers"])])],2))}}),Tt=P(St,[["__scopeId","data-v-f610f197"]]),It={class:"VPDocAsideCarbonAds"},At=g({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const t=()=>null;return(n,s)=>(o(),c("div",It,[b(u(t),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),wt={class:"VPDocAside"},xt=g({__name:"VPDocAside",setup(e){const{theme:t}=V();return(n,s)=>(o(),c("div",wt,[f(n.$slots,"aside-top",{},void 0,!0),f(n.$slots,"aside-outline-before",{},void 0,!0),b(Tt),f(n.$slots,"aside-outline-after",{},void 0,!0),s[0]||(s[0]=d("div",{class:"spacer"},null,-1)),f(n.$slots,"aside-ads-before",{},void 0,!0),u(t).carbonAds?(o(),$(At,{key:0,"carbon-ads":u(t).carbonAds},null,8,["carbon-ads"])):m("",!0),f(n.$slots,"aside-ads-after",{},void 0,!0),f(n.$slots,"aside-bottom",{},void 0,!0)]))}}),Mt=P(xt,[["__scopeId","data-v-cb998dce"]]);function Nt(){const{theme:e,page:t}=V();return y(()=>{const{text:n="Edit this page",pattern:s=""}=e.value.editLink||{};let a;return typeof s=="function"?a=s(t.value):a=s.replace(/:path/g,t.value.filePath),{url:a,text:n}})}function Ht(){const{page:e,theme:t,frontmatter:n}=V();return y(()=>{var p,L,_,S,w,M,N,C;const s=Ne(t.value.sidebar,e.value.relativePath),a=vt(s),r=Ct(a,B=>B.link.replace(/[?#].*$/,"")),i=r.findIndex(B=>q(e.value.relativePath,B.link)),v=((p=t.value.docFooter)==null?void 0:p.prev)===!1&&!n.value.prev||n.value.prev===!1,l=((L=t.value.docFooter)==null?void 0:L.next)===!1&&!n.value.next||n.value.next===!1;return{prev:v?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((_=r[i-1])==null?void 0:_.docFooterText)??((S=r[i-1])==null?void 0:S.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((w=r[i-1])==null?void 0:w.link)},next:l?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((M=r[i+1])==null?void 0:M.docFooterText)??((N=r[i+1])==null?void 0:N.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((C=r[i+1])==null?void 0:C.link)}}})}function Ct(e,t){const n=new Set;return e.filter(s=>{const a=t(s);return n.has(a)?!1:n.add(a)})}const F=g({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const t=e,n=y(()=>t.tag??(t.href?"a":"span")),s=y(()=>t.href&&Ie.test(t.href)||t.target==="_blank");return(a,r)=>(o(),$(D(n.value),{class:A(["VPLink",{link:e.href,"vp-external-link-icon":s.value,"no-icon":e.noIcon}]),href:e.href?u(_e)(e.href):void 0,target:e.target??(s.value?"_blank":void 0),rel:e.rel??(s.value?"noreferrer":void 0)},{default:h(()=>[f(a.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Bt={class:"VPLastUpdated"},Et=["datetime"],Dt=g({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:n,lang:s}=V(),a=y(()=>new Date(n.value.lastUpdated)),r=y(()=>a.value.toISOString()),i=I("");return O(()=>{Z(()=>{var v,l,p;i.value=new Intl.DateTimeFormat((l=(v=t.value.lastUpdated)==null?void 0:v.formatOptions)!=null&&l.forceLocale?s.value:void 0,((p=t.value.lastUpdated)==null?void 0:p.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(a.value)})}),(v,l)=>{var p;return o(),c("p",Bt,[H(k(((p=u(t).lastUpdated)==null?void 0:p.text)||u(t).lastUpdatedText||"Last updated")+": ",1),d("time",{datetime:r.value},k(i.value),9,Et)])}}}),Ft=P(Dt,[["__scopeId","data-v-1bb0c8a8"]]),Ot={key:0,class:"VPDocFooter"},Gt={key:0,class:"edit-info"},jt={key:0,class:"edit-link"},Ut={key:1,class:"last-updated"},zt={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},qt={class:"pager"},Wt=["innerHTML"],Rt=["innerHTML"],Kt={class:"pager"},Jt=["innerHTML"],Yt=["innerHTML"],Zt=g({__name:"VPDocFooter",setup(e){const{theme:t,page:n,frontmatter:s}=V(),a=Nt(),r=Ht(),i=y(()=>t.value.editLink&&s.value.editLink!==!1),v=y(()=>n.value.lastUpdated),l=y(()=>i.value||v.value||r.value.prev||r.value.next);return(p,L)=>{var _,S,w,M;return l.value?(o(),c("footer",Ot,[f(p.$slots,"doc-footer-before",{},void 0,!0),i.value||v.value?(o(),c("div",Gt,[i.value?(o(),c("div",jt,[b(F,{class:"edit-link-button",href:u(a).url,"no-icon":!0},{default:h(()=>[L[0]||(L[0]=d("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),H(" "+k(u(a).text),1)]),_:1},8,["href"])])):m("",!0),v.value?(o(),c("div",Ut,[b(Ft)])):m("",!0)])):m("",!0),(_=u(r).prev)!=null&&_.link||(S=u(r).next)!=null&&S.link?(o(),c("nav",zt,[L[1]||(L[1]=d("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),d("div",qt,[(w=u(r).prev)!=null&&w.link?(o(),$(F,{key:0,class:"pager-link prev",href:u(r).prev.link},{default:h(()=>{var N;return[d("span",{class:"desc",innerHTML:((N=u(t).docFooter)==null?void 0:N.prev)||"Previous page"},null,8,Wt),d("span",{class:"title",innerHTML:u(r).prev.text},null,8,Rt)]}),_:1},8,["href"])):m("",!0)]),d("div",Kt,[(M=u(r).next)!=null&&M.link?(o(),$(F,{key:0,class:"pager-link next",href:u(r).next.link},{default:h(()=>{var N;return[d("span",{class:"desc",innerHTML:((N=u(t).docFooter)==null?void 0:N.next)||"Next page"},null,8,Jt),d("span",{class:"title",innerHTML:u(r).next.text},null,8,Yt)]}),_:1},8,["href"])):m("",!0)])])):m("",!0)])):m("",!0)}}}),Qt=P(Zt,[["__scopeId","data-v-1bcd8184"]]),Xt={class:"container"},en={class:"aside-container"},tn={class:"aside-content"},nn={class:"content"},sn={class:"content-container"},an={class:"main"},on=g({__name:"VPDoc",setup(e){const{theme:t}=V(),n=R(),{hasSidebar:s,hasAside:a,leftAside:r}=G(),i=y(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(v,l)=>{const p=z("Content");return o(),c("div",{class:A(["VPDoc",{"has-sidebar":u(s),"has-aside":u(a)}])},[f(v.$slots,"doc-top",{},void 0,!0),d("div",Xt,[u(a)?(o(),c("div",{key:0,class:A(["aside",{"left-aside":u(r)}])},[l[0]||(l[0]=d("div",{class:"aside-curtain"},null,-1)),d("div",en,[d("div",tn,[b(Mt,null,{"aside-top":h(()=>[f(v.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[f(v.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[f(v.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[f(v.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[f(v.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[f(v.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):m("",!0),d("div",nn,[d("div",sn,[f(v.$slots,"doc-before",{},void 0,!0),d("main",an,[b(p,{class:A(["vp-doc",[i.value,u(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),b(Qt,null,{"doc-footer-before":h(()=>[f(v.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),f(v.$slots,"doc-after",{},void 0,!0)])])]),f(v.$slots,"doc-bottom",{},void 0,!0)],2)}}}),ln=P(on,[["__scopeId","data-v-e6f2a212"]]),rn=g({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const t=e,n=y(()=>t.href&&Ie.test(t.href)),s=y(()=>t.tag||(t.href?"a":"button"));return(a,r)=>(o(),$(D(s.value),{class:A(["VPButton",[e.size,e.theme]]),href:e.href?u(_e)(e.href):void 0,target:t.target??(n.value?"_blank":void 0),rel:t.rel??(n.value?"noreferrer":void 0)},{default:h(()=>[H(k(e.text),1)]),_:1},8,["class","href","target","rel"]))}}),cn=P(rn,[["__scopeId","data-v-93dc4167"]]),un=["src","alt"],dn=g({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(t,n)=>{const s=z("VPImage",!0);return e.image?(o(),c(T,{key:0},[typeof e.image=="string"||"src"in e.image?(o(),c("img",U({key:0,class:"VPImage"},typeof e.image=="string"?t.$attrs:{...e.image,...t.$attrs},{src:u(fe)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,un)):(o(),c(T,{key:1},[b(s,U({class:"dark",image:e.image.dark,alt:e.image.alt},t.$attrs),null,16,["image","alt"]),b(s,U({class:"light",image:e.image.light,alt:e.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):m("",!0)}}}),Y=P(dn,[["__scopeId","data-v-ab19afbb"]]),vn={class:"container"},fn={class:"main"},hn={class:"heading"},mn=["innerHTML"],pn=["innerHTML"],_n=["innerHTML"],gn={key:0,class:"actions"},bn={key:0,class:"image"},kn={class:"image-container"},$n=g({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const t=X("hero-image-slot-exists");return(n,s)=>(o(),c("div",{class:A(["VPHero",{"has-image":e.image||u(t)}])},[d("div",vn,[d("div",fn,[f(n.$slots,"home-hero-info-before",{},void 0,!0),f(n.$slots,"home-hero-info",{},()=>[d("h1",hn,[e.name?(o(),c("span",{key:0,innerHTML:e.name,class:"name clip"},null,8,mn)):m("",!0),e.text?(o(),c("span",{key:1,innerHTML:e.text,class:"text"},null,8,pn)):m("",!0)]),e.tagline?(o(),c("p",{key:0,innerHTML:e.tagline,class:"tagline"},null,8,_n)):m("",!0)],!0),f(n.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(o(),c("div",gn,[(o(!0),c(T,null,x(e.actions,a=>(o(),c("div",{key:a.link,class:"action"},[b(cn,{tag:"a",size:"medium",theme:a.theme,text:a.text,href:a.link,target:a.target,rel:a.rel},null,8,["theme","text","href","target","rel"])]))),128))])):m("",!0),f(n.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||u(t)?(o(),c("div",bn,[d("div",kn,[s[0]||(s[0]=d("div",{class:"image-bg"},null,-1)),f(n.$slots,"home-hero-image",{},()=>[e.image?(o(),$(Y,{key:0,class:"image-src",image:e.image},null,8,["image"])):m("",!0)],!0)])])):m("",!0)])],2))}}),yn=P($n,[["__scopeId","data-v-dd8814ff"]]),Pn=g({__name:"VPHomeHero",setup(e){const{frontmatter:t}=V();return(n,s)=>u(t).hero?(o(),$(yn,{key:0,class:"VPHomeHero",name:u(t).hero.name,text:u(t).hero.text,tagline:u(t).hero.tagline,image:u(t).hero.image,actions:u(t).hero.actions},{"home-hero-info-before":h(()=>[f(n.$slots,"home-hero-info-before")]),"home-hero-info":h(()=>[f(n.$slots,"home-hero-info")]),"home-hero-info-after":h(()=>[f(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":h(()=>[f(n.$slots,"home-hero-actions-after")]),"home-hero-image":h(()=>[f(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):m("",!0)}}),Ln={class:"box"},Vn={key:0,class:"icon"},Sn=["innerHTML"],Tn=["innerHTML"],In=["innerHTML"],An={key:4,class:"link-text"},wn={class:"link-text-value"},xn=g({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,n)=>(o(),$(F,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:h(()=>[d("article",Ln,[typeof e.icon=="object"&&e.icon.wrap?(o(),c("div",Vn,[b(Y,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(o(),$(Y,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(o(),c("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Sn)):m("",!0),d("h2",{class:"title",innerHTML:e.title},null,8,Tn),e.details?(o(),c("p",{key:3,class:"details",innerHTML:e.details},null,8,In)):m("",!0),e.linkText?(o(),c("div",An,[d("p",wn,[H(k(e.linkText)+" ",1),n[0]||(n[0]=d("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):m("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Mn=P(xn,[["__scopeId","data-v-bd37d1a2"]]),Nn={key:0,class:"VPFeatures"},Hn={class:"container"},Cn={class:"items"},Bn=g({__name:"VPFeatures",props:{features:{}},setup(e){const t=e,n=y(()=>{const s=t.features.length;if(s){if(s===2)return"grid-2";if(s===3)return"grid-3";if(s%3===0)return"grid-6";if(s>3)return"grid-4"}else return});return(s,a)=>e.features?(o(),c("div",Nn,[d("div",Hn,[d("div",Cn,[(o(!0),c(T,null,x(e.features,r=>(o(),c("div",{key:r.title,class:A(["item",[n.value]])},[b(Mn,{icon:r.icon,title:r.title,details:r.details,link:r.link,"link-text":r.linkText,rel:r.rel,target:r.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):m("",!0)}}),En=P(Bn,[["__scopeId","data-v-b1eea84a"]]),Dn=g({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=V();return(n,s)=>u(t).features?(o(),$(En,{key:0,class:"VPHomeFeatures",features:u(t).features},null,8,["features"])):m("",!0)}}),Fn=g({__name:"VPHomeContent",setup(e){const{width:t}=Ue({initialWidth:0,includeScrollbar:!1});return(n,s)=>(o(),c("div",{class:"vp-doc container",style:Ae(u(t)?{"--vp-offset":`calc(50% - ${u(t)/2}px)`}:{})},[f(n.$slots,"default",{},void 0,!0)],4))}}),On=P(Fn,[["__scopeId","data-v-c141a4bd"]]),Gn=g({__name:"VPHome",setup(e){const{frontmatter:t,theme:n}=V();return(s,a)=>{const r=z("Content");return o(),c("div",{class:A(["VPHome",{"external-link-icon-enabled":u(n).externalLinkIcon}])},[f(s.$slots,"home-hero-before",{},void 0,!0),b(Pn,null,{"home-hero-info-before":h(()=>[f(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[f(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[f(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[f(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[f(s.$slots,"home-hero-image",{},void 0,!0)]),_:3}),f(s.$slots,"home-hero-after",{},void 0,!0),f(s.$slots,"home-features-before",{},void 0,!0),b(Dn),f(s.$slots,"home-features-after",{},void 0,!0),u(t).markdownStyles!==!1?(o(),$(On,{key:0},{default:h(()=>[b(r)]),_:1})):(o(),$(r,{key:1}))],2)}}}),jn=P(Gn,[["__scopeId","data-v-e07eaea7"]]),Un={},zn={class:"VPPage"};function qn(e,t){const n=z("Content");return o(),c("div",zn,[f(e.$slots,"page-top"),b(n),f(e.$slots,"page-bottom")])}const Wn=P(Un,[["render",qn]]),Rn=g({__name:"VPContent",setup(e){const{page:t,frontmatter:n}=V(),{hasSidebar:s}=G();return(a,r)=>(o(),c("div",{class:A(["VPContent",{"has-sidebar":u(s),"is-home":u(n).layout==="home"}]),id:"VPContent"},[u(t).isNotFound?f(a.$slots,"not-found",{},()=>[b(ut)],!0,0):u(n).layout==="page"?(o(),$(Wn,{key:1},{"page-top":h(()=>[f(a.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[f(a.$slots,"page-bottom",{},void 0,!0)]),_:3})):u(n).layout==="home"?(o(),$(jn,{key:2},{"home-hero-before":h(()=>[f(a.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[f(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[f(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[f(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[f(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[f(a.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[f(a.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[f(a.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[f(a.$slots,"home-features-after",{},void 0,!0)]),_:3})):u(n).layout&&u(n).layout!=="doc"?(o(),$(D(u(n).layout),{key:3})):(o(),$(ln,{key:4},{"doc-top":h(()=>[f(a.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[f(a.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":h(()=>[f(a.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[f(a.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[f(a.$slots,"doc-after",{},void 0,!0)]),"aside-top":h(()=>[f(a.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":h(()=>[f(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[f(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[f(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[f(a.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":h(()=>[f(a.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Kn=P(Rn,[["__scopeId","data-v-9a6c75ad"]]),Jn={class:"container"},Yn=["innerHTML"],Zn=["innerHTML"],Qn=g({__name:"VPFooter",setup(e){const{theme:t,frontmatter:n}=V(),{hasSidebar:s}=G();return(a,r)=>u(t).footer&&u(n).footer!==!1?(o(),c("footer",{key:0,class:A(["VPFooter",{"has-sidebar":u(s)}])},[d("div",Jn,[u(t).footer.message?(o(),c("p",{key:0,class:"message",innerHTML:u(t).footer.message},null,8,Yn)):m("",!0),u(t).footer.copyright?(o(),c("p",{key:1,class:"copyright",innerHTML:u(t).footer.copyright},null,8,Zn)):m("",!0)])],2)):m("",!0)}}),Xn=P(Qn,[["__scopeId","data-v-566314d4"]]);function es(){const{theme:e,frontmatter:t}=V(),n=Te([]),s=y(()=>n.value.length>0);return Q(()=>{n.value=ge(t.value.outline??e.value.outline)}),{headers:n,hasLocalNav:s}}const ts={class:"menu-text"},ns={class:"header"},ss={class:"outline"},as=g({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const t=e,{theme:n}=V(),s=I(!1),a=I(0),r=I(),i=I();function v(_){var S;(S=r.value)!=null&&S.contains(_.target)||(s.value=!1)}E(s,_=>{if(_){document.addEventListener("click",v);return}document.removeEventListener("click",v)}),ze("Escape",()=>{s.value=!1}),Q(()=>{s.value=!1});function l(){s.value=!s.value,a.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function p(_){_.target.classList.contains("outline-link")&&(i.value&&(i.value.style.transition="none"),pe(()=>{s.value=!1}))}function L(){s.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(_,S)=>(o(),c("div",{class:"VPLocalNavOutlineDropdown",style:Ae({"--vp-vh":a.value+"px"}),ref_key:"main",ref:r},[e.headers.length>0?(o(),c("button",{key:0,onClick:l,class:A({open:s.value})},[d("span",ts,k(u(He)(u(n))),1),S[0]||(S[0]=d("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(o(),c("button",{key:1,onClick:L},k(u(n).returnToTopLabel||"Return to top"),1)),b(de,{name:"flyout"},{default:h(()=>[s.value?(o(),c("div",{key:0,ref_key:"items",ref:i,class:"items",onClick:p},[d("div",ns,[d("a",{class:"top-link",href:"#",onClick:L},k(u(n).returnToTopLabel||"Return to top"),1)]),d("div",ss,[b(Ce,{headers:e.headers},null,8,["headers"])])],512)):m("",!0)]),_:1})],4))}}),os=P(as,[["__scopeId","data-v-6b867909"]]),is={class:"container"},ls=["aria-expanded"],rs={class:"menu-text"},cs=g({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:t,frontmatter:n}=V(),{hasSidebar:s}=G(),{headers:a}=es(),{y:r}=we(),i=I(0);O(()=>{i.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Q(()=>{a.value=ge(n.value.outline??t.value.outline)});const v=y(()=>a.value.length===0),l=y(()=>v.value&&!s.value),p=y(()=>({VPLocalNav:!0,"has-sidebar":s.value,empty:v.value,fixed:l.value}));return(L,_)=>u(n).layout!=="home"&&(!l.value||u(r)>=i.value)?(o(),c("div",{key:0,class:A(p.value)},[d("div",is,[u(s)?(o(),c("button",{key:0,class:"menu","aria-expanded":e.open,"aria-controls":"VPSidebarNav",onClick:_[0]||(_[0]=S=>L.$emit("open-menu"))},[_[1]||(_[1]=d("span",{class:"vpi-align-left menu-icon"},null,-1)),d("span",rs,k(u(t).sidebarMenuLabel||"Menu"),1)],8,ls)):m("",!0),b(os,{headers:u(a),navHeight:i.value},null,8,["headers","navHeight"])])],2)):m("",!0)}}),us=P(cs,[["__scopeId","data-v-2488c25a"]]);function ds(){const e=I(!1);function t(){e.value=!0,window.addEventListener("resize",a)}function n(){e.value=!1,window.removeEventListener("resize",a)}function s(){e.value?n():t()}function a(){window.outerWidth>=768&&n()}const r=R();return E(()=>r.path,n),{isScreenOpen:e,openScreen:t,closeScreen:n,toggleScreen:s}}const vs={},fs={class:"VPSwitch",type:"button",role:"switch"},hs={class:"check"},ms={key:0,class:"icon"};function ps(e,t){return o(),c("button",fs,[d("span",hs,[e.$slots.default?(o(),c("span",ms,[f(e.$slots,"default",{},void 0,!0)])):m("",!0)])])}const _s=P(vs,[["render",ps],["__scopeId","data-v-b4ccac88"]]),gs=g({__name:"VPSwitchAppearance",setup(e){const{isDark:t,theme:n}=V(),s=X("toggle-appearance",()=>{t.value=!t.value}),a=I("");return me(()=>{a.value=t.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme"}),(r,i)=>(o(),$(_s,{title:a.value,class:"VPSwitchAppearance","aria-checked":u(t),onClick:u(s)},{default:h(()=>[...i[0]||(i[0]=[d("span",{class:"vpi-sun sun"},null,-1),d("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),be=P(gs,[["__scopeId","data-v-be9742d9"]]),bs={key:0,class:"VPNavBarAppearance"},ks=g({__name:"VPNavBarAppearance",setup(e){const{site:t}=V();return(n,s)=>u(t).appearance&&u(t).appearance!=="force-dark"&&u(t).appearance!=="force-auto"?(o(),c("div",bs,[b(be)])):m("",!0)}}),$s=P(ks,[["__scopeId","data-v-3f90c1a5"]]),ke=I();let Be=!1,oe=0;function ys(e){const t=I(!1);if(ee){!Be&&Ps(),oe++;const n=E(ke,s=>{var a,r,i;s===e.el.value||(a=e.el.value)!=null&&a.contains(s)?(t.value=!0,(r=e.onFocus)==null||r.call(e)):(t.value=!1,(i=e.onBlur)==null||i.call(e))});he(()=>{n(),oe--,oe||Ls()})}return qe(t)}function Ps(){document.addEventListener("focusin",Ee),Be=!0,ke.value=document.activeElement}function Ls(){document.removeEventListener("focusin",Ee)}function Ee(){ke.value=document.activeElement}const Vs={class:"VPMenuLink"},Ss=["innerHTML"],Ts=g({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:t}=V();return(n,s)=>(o(),c("div",Vs,[b(F,{class:A({active:u(q)(u(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon},{default:h(()=>[d("span",{innerHTML:e.item.text},null,8,Ss)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),te=P(Ts,[["__scopeId","data-v-7eeeb2dc"]]),Is={class:"VPMenuGroup"},As={key:0,class:"title"},ws=g({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(t,n)=>(o(),c("div",Is,[e.text?(o(),c("p",As,k(e.text),1)):m("",!0),(o(!0),c(T,null,x(e.items,s=>(o(),c(T,null,["link"in s?(o(),$(te,{key:0,item:s},null,8,["item"])):m("",!0)],64))),256))]))}}),xs=P(ws,[["__scopeId","data-v-a6b0397c"]]),Ms={class:"VPMenu"},Ns={key:0,class:"items"},Hs=g({__name:"VPMenu",props:{items:{}},setup(e){return(t,n)=>(o(),c("div",Ms,[e.items?(o(),c("div",Ns,[(o(!0),c(T,null,x(e.items,s=>(o(),c(T,{key:JSON.stringify(s)},["link"in s?(o(),$(te,{key:0,item:s},null,8,["item"])):"component"in s?(o(),$(D(s.component),U({key:1,ref_for:!0},s.props),null,16)):(o(),$(xs,{key:2,text:s.text,items:s.items},null,8,["text","items"]))],64))),128))])):m("",!0),f(t.$slots,"default",{},void 0,!0)]))}}),Cs=P(Hs,[["__scopeId","data-v-20ed86d6"]]),Bs=["aria-expanded","aria-label"],Es={key:0,class:"text"},Ds=["innerHTML"],Fs={key:1,class:"vpi-more-horizontal icon"},Os={class:"menu"},Gs=g({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const t=I(!1),n=I();ys({el:n,onBlur:s});function s(){t.value=!1}return(a,r)=>(o(),c("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:r[1]||(r[1]=i=>t.value=!0),onMouseleave:r[2]||(r[2]=i=>t.value=!1)},[d("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":e.label,onClick:r[0]||(r[0]=i=>t.value=!t.value)},[e.button||e.icon?(o(),c("span",Es,[e.icon?(o(),c("span",{key:0,class:A([e.icon,"option-icon"])},null,2)):m("",!0),e.button?(o(),c("span",{key:1,innerHTML:e.button},null,8,Ds)):m("",!0),r[3]||(r[3]=d("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(o(),c("span",Fs))],8,Bs),d("div",Os,[b(Cs,{items:e.items},{default:h(()=>[f(a.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),$e=P(Gs,[["__scopeId","data-v-bfe7971f"]]),js=["href","aria-label","innerHTML"],Us=g({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const t=e,n=I();O(async()=>{var r;await pe();const a=(r=n.value)==null?void 0:r.children[0];a instanceof HTMLElement&&a.className.startsWith("vpi-social-")&&(getComputedStyle(a).maskImage||getComputedStyle(a).webkitMaskImage)==="none"&&a.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const s=y(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(a,r)=>(o(),c("a",{ref_key:"el",ref:n,class:"VPSocialLink no-icon",href:e.link,"aria-label":e.ariaLabel??(typeof e.icon=="string"?e.icon:""),target:"_blank",rel:"noopener",innerHTML:s.value},null,8,js))}}),zs=P(Us,[["__scopeId","data-v-60a9a2d3"]]),qs={class:"VPSocialLinks"},Ws=g({__name:"VPSocialLinks",props:{links:{}},setup(e){return(t,n)=>(o(),c("div",qs,[(o(!0),c(T,null,x(e.links,({link:s,icon:a,ariaLabel:r})=>(o(),$(zs,{key:s,icon:a,link:s,ariaLabel:r},null,8,["icon","link","ariaLabel"]))),128))]))}}),ye=P(Ws,[["__scopeId","data-v-e71e869c"]]),Rs={key:0,class:"group translations"},Ks={class:"trans-title"},Js={key:1,class:"group"},Ys={class:"item appearance"},Zs={class:"label"},Qs={class:"appearance-action"},Xs={key:2,class:"group"},ea={class:"item social-links"},ta=g({__name:"VPNavBarExtra",setup(e){const{site:t,theme:n}=V(),{localeLinks:s,currentLang:a}=K({correspondingLink:!0}),r=y(()=>s.value.length&&a.value.label||t.value.appearance||n.value.socialLinks);return(i,v)=>r.value?(o(),$($e,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:h(()=>[u(s).length&&u(a).label?(o(),c("div",Rs,[d("p",Ks,k(u(a).label),1),(o(!0),c(T,null,x(u(s),l=>(o(),$(te,{key:l.link,item:l},null,8,["item"]))),128))])):m("",!0),u(t).appearance&&u(t).appearance!=="force-dark"&&u(t).appearance!=="force-auto"?(o(),c("div",Js,[d("div",Ys,[d("p",Zs,k(u(n).darkModeSwitchLabel||"Appearance"),1),d("div",Qs,[b(be)])])])):m("",!0),u(n).socialLinks?(o(),c("div",Xs,[d("div",ea,[b(ye,{class:"social-links-list",links:u(n).socialLinks},null,8,["links"])])])):m("",!0)]),_:1})):m("",!0)}}),na=P(ta,[["__scopeId","data-v-f953d92f"]]),sa=["aria-expanded"],aa=g({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,n)=>(o(),c("button",{type:"button",class:A(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=s=>t.$emit("click"))},[...n[1]||(n[1]=[d("span",{class:"container"},[d("span",{class:"top"}),d("span",{class:"middle"}),d("span",{class:"bottom"})],-1)])],10,sa))}}),oa=P(aa,[["__scopeId","data-v-6bee1efd"]]),ia=["innerHTML"],la=g({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:t}=V();return(n,s)=>(o(),$(F,{class:A({VPNavBarMenuLink:!0,active:u(q)(u(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,tabindex:"0"},{default:h(()=>[d("span",{innerHTML:e.item.text},null,8,ia)]),_:1},8,["class","href","target","rel","no-icon"]))}}),ra=P(la,[["__scopeId","data-v-815115f5"]]),ca=g({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const t=e,{page:n}=V(),s=r=>"component"in r?!1:"link"in r?q(n.value.relativePath,r.link,!!t.item.activeMatch):r.items.some(s),a=y(()=>s(t.item));return(r,i)=>(o(),$($e,{class:A({VPNavBarMenuGroup:!0,active:u(q)(u(n).relativePath,e.item.activeMatch,!!e.item.activeMatch)||a.value}),button:e.item.text,items:e.item.items},null,8,["class","button","items"]))}}),ua={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},da=g({__name:"VPNavBarMenu",setup(e){const{theme:t}=V();return(n,s)=>u(t).nav?(o(),c("nav",ua,[s[0]||(s[0]=d("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(o(!0),c(T,null,x(u(t).nav,a=>(o(),c(T,{key:JSON.stringify(a)},["link"in a?(o(),$(ra,{key:0,item:a},null,8,["item"])):"component"in a?(o(),$(D(a.component),U({key:1,ref_for:!0},a.props),null,16)):(o(),$(ca,{key:2,item:a},null,8,["item"]))],64))),128))])):m("",!0)}}),va=P(da,[["__scopeId","data-v-afb2845e"]]);function fa(e){const{localeIndex:t,theme:n}=V();function s(a){var M,N,C;const r=a.split("."),i=(M=n.value.search)==null?void 0:M.options,v=i&&typeof i=="object",l=v&&((C=(N=i.locales)==null?void 0:N[t.value])==null?void 0:C.translations)||null,p=v&&i.translations||null;let L=l,_=p,S=e;const w=r.pop();for(const B of r){let j=null;const W=S==null?void 0:S[B];W&&(j=S=W);const ne=_==null?void 0:_[B];ne&&(j=_=ne);const se=L==null?void 0:L[B];se&&(j=L=se),W||(S=j),ne||(_=j),se||(L=j)}return(L==null?void 0:L[w])??(_==null?void 0:_[w])??(S==null?void 0:S[w])??""}return s}const ha=["aria-label"],ma={class:"DocSearch-Button-Container"},pa={class:"DocSearch-Button-Placeholder"},Le=g({__name:"VPNavBarSearchButton",setup(e){const n=fa({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(s,a)=>(o(),c("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":u(n)("button.buttonAriaLabel")},[d("span",ma,[a[0]||(a[0]=d("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),d("span",pa,k(u(n)("button.buttonText")),1)]),a[1]||(a[1]=d("span",{class:"DocSearch-Button-Keys"},[d("kbd",{class:"DocSearch-Button-Key"}),d("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,ha))}}),_a={class:"VPNavBarSearch"},ga={id:"local-search"},ba={key:1,id:"docsearch"},ka=g({__name:"VPNavBarSearch",setup(e){const t=()=>null,n=()=>null,{theme:s}=V(),a=I(!1),r=I(!1);O(()=>{});function i(){a.value||(a.value=!0,setTimeout(v,16))}function v(){const L=new Event("keydown");L.key="k",L.metaKey=!0,window.dispatchEvent(L),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||v()},16)}const l=I(!1),p="";return(L,_)=>{var S;return o(),c("div",_a,[u(p)==="local"?(o(),c(T,{key:0},[l.value?(o(),$(u(t),{key:0,onClose:_[0]||(_[0]=w=>l.value=!1)})):m("",!0),d("div",ga,[b(Le,{onClick:_[1]||(_[1]=w=>l.value=!0)})])],64)):u(p)==="algolia"?(o(),c(T,{key:1},[a.value?(o(),$(u(n),{key:0,algolia:((S=u(s).search)==null?void 0:S.options)??u(s).algolia,onVnodeBeforeMount:_[2]||(_[2]=w=>r.value=!0)},null,8,["algolia"])):m("",!0),r.value?m("",!0):(o(),c("div",ba,[b(Le,{onClick:i})]))],64)):m("",!0)])}}}),$a=g({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=V();return(n,s)=>u(t).socialLinks?(o(),$(ye,{key:0,class:"VPNavBarSocialLinks",links:u(t).socialLinks},null,8,["links"])):m("",!0)}}),ya=P($a,[["__scopeId","data-v-ef6192dc"]]),Pa=["href","rel","target"],La=["innerHTML"],Va={key:2},Sa=g({__name:"VPNavBarTitle",setup(e){const{site:t,theme:n}=V(),{hasSidebar:s}=G(),{currentLang:a}=K(),r=y(()=>{var l;return typeof n.value.logoLink=="string"?n.value.logoLink:(l=n.value.logoLink)==null?void 0:l.link}),i=y(()=>{var l;return typeof n.value.logoLink=="string"||(l=n.value.logoLink)==null?void 0:l.rel}),v=y(()=>{var l;return typeof n.value.logoLink=="string"||(l=n.value.logoLink)==null?void 0:l.target});return(l,p)=>(o(),c("div",{class:A(["VPNavBarTitle",{"has-sidebar":u(s)}])},[d("a",{class:"title",href:r.value??u(_e)(u(a).link),rel:i.value,target:v.value},[f(l.$slots,"nav-bar-title-before",{},void 0,!0),u(n).logo?(o(),$(Y,{key:0,class:"logo",image:u(n).logo},null,8,["image"])):m("",!0),u(n).siteTitle?(o(),c("span",{key:1,innerHTML:u(n).siteTitle},null,8,La)):u(n).siteTitle===void 0?(o(),c("span",Va,k(u(t).title),1)):m("",!0),f(l.$slots,"nav-bar-title-after",{},void 0,!0)],8,Pa)],2))}}),Ta=P(Sa,[["__scopeId","data-v-9f43907a"]]),Ia={class:"items"},Aa={class:"title"},wa=g({__name:"VPNavBarTranslations",setup(e){const{theme:t}=V(),{localeLinks:n,currentLang:s}=K({correspondingLink:!0});return(a,r)=>u(n).length&&u(s).label?(o(),$($e,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:u(t).langMenuLabel||"Change language"},{default:h(()=>[d("div",Ia,[d("p",Aa,k(u(s).label),1),(o(!0),c(T,null,x(u(n),i=>(o(),$(te,{key:i.link,item:i},null,8,["item"]))),128))])]),_:1},8,["label"])):m("",!0)}}),xa=P(wa,[["__scopeId","data-v-acee064b"]]),Ma={class:"wrapper"},Na={class:"container"},Ha={class:"title"},Ca={class:"content"},Ba={class:"content-body"},Ea=g({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const t=e,{y:n}=we(),{hasSidebar:s}=G(),{frontmatter:a}=V(),r=I({});return me(()=>{r.value={"has-sidebar":s.value,home:a.value.layout==="home",top:n.value===0,"screen-open":t.isScreenOpen}}),(i,v)=>(o(),c("div",{class:A(["VPNavBar",r.value])},[d("div",Ma,[d("div",Na,[d("div",Ha,[b(Ta,null,{"nav-bar-title-before":h(()=>[f(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[f(i.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),d("div",Ca,[d("div",Ba,[f(i.$slots,"nav-bar-content-before",{},void 0,!0),b(ka,{class:"search"}),b(va,{class:"menu"}),b(xa,{class:"translations"}),b($s,{class:"appearance"}),b(ya,{class:"social-links"}),b(na,{class:"extra"}),f(i.$slots,"nav-bar-content-after",{},void 0,!0),b(oa,{class:"hamburger",active:e.isScreenOpen,onClick:v[0]||(v[0]=l=>i.$emit("toggle-screen"))},null,8,["active"])])])])]),v[1]||(v[1]=d("div",{class:"divider"},[d("div",{class:"divider-line"})],-1))],2))}}),Da=P(Ea,[["__scopeId","data-v-9fd4d1dd"]]),Fa={key:0,class:"VPNavScreenAppearance"},Oa={class:"text"},Ga=g({__name:"VPNavScreenAppearance",setup(e){const{site:t,theme:n}=V();return(s,a)=>u(t).appearance&&u(t).appearance!=="force-dark"&&u(t).appearance!=="force-auto"?(o(),c("div",Fa,[d("p",Oa,k(u(n).darkModeSwitchLabel||"Appearance"),1),b(be)])):m("",!0)}}),ja=P(Ga,[["__scopeId","data-v-a3e2920d"]]),Ua=["innerHTML"],za=g({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const t=X("close-screen");return(n,s)=>(o(),$(F,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:u(t)},{default:h(()=>[d("span",{innerHTML:e.item.text},null,8,Ua)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),qa=P(za,[["__scopeId","data-v-fa963d97"]]),Wa=["innerHTML"],Ra=g({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const t=X("close-screen");return(n,s)=>(o(),$(F,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:u(t)},{default:h(()=>[d("span",{innerHTML:e.item.text},null,8,Wa)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),De=P(Ra,[["__scopeId","data-v-e04f3e85"]]),Ka={class:"VPNavScreenMenuGroupSection"},Ja={key:0,class:"title"},Ya=g({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(t,n)=>(o(),c("div",Ka,[e.text?(o(),c("p",Ja,k(e.text),1)):m("",!0),(o(!0),c(T,null,x(e.items,s=>(o(),$(De,{key:s.text,item:s},null,8,["item"]))),128))]))}}),Za=P(Ya,[["__scopeId","data-v-f60dbfa7"]]),Qa=["aria-controls","aria-expanded"],Xa=["innerHTML"],eo=["id"],to={key:0,class:"item"},no={key:1,class:"item"},so={key:2,class:"group"},ao=g({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const t=e,n=I(!1),s=y(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function a(){n.value=!n.value}return(r,i)=>(o(),c("div",{class:A(["VPNavScreenMenuGroup",{open:n.value}])},[d("button",{class:"button","aria-controls":s.value,"aria-expanded":n.value,onClick:a},[d("span",{class:"button-text",innerHTML:e.text},null,8,Xa),i[0]||(i[0]=d("span",{class:"vpi-plus button-icon"},null,-1))],8,Qa),d("div",{id:s.value,class:"items"},[(o(!0),c(T,null,x(e.items,v=>(o(),c(T,{key:JSON.stringify(v)},["link"in v?(o(),c("div",to,[b(De,{item:v},null,8,["item"])])):"component"in v?(o(),c("div",no,[(o(),$(D(v.component),U({ref_for:!0},v.props,{"screen-menu":""}),null,16))])):(o(),c("div",so,[b(Za,{text:v.text,items:v.items},null,8,["text","items"])]))],64))),128))],8,eo)],2))}}),oo=P(ao,[["__scopeId","data-v-d99bfeec"]]),io={key:0,class:"VPNavScreenMenu"},lo=g({__name:"VPNavScreenMenu",setup(e){const{theme:t}=V();return(n,s)=>u(t).nav?(o(),c("nav",io,[(o(!0),c(T,null,x(u(t).nav,a=>(o(),c(T,{key:JSON.stringify(a)},["link"in a?(o(),$(qa,{key:0,item:a},null,8,["item"])):"component"in a?(o(),$(D(a.component),U({key:1,ref_for:!0},a.props,{"screen-menu":""}),null,16)):(o(),$(oo,{key:2,text:a.text||"",items:a.items},null,8,["text","items"]))],64))),128))])):m("",!0)}}),ro=g({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=V();return(n,s)=>u(t).socialLinks?(o(),$(ye,{key:0,class:"VPNavScreenSocialLinks",links:u(t).socialLinks},null,8,["links"])):m("",!0)}}),co={class:"list"},uo=g({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:t,currentLang:n}=K({correspondingLink:!0}),s=I(!1);function a(){s.value=!s.value}return(r,i)=>u(t).length&&u(n).label?(o(),c("div",{key:0,class:A(["VPNavScreenTranslations",{open:s.value}])},[d("button",{class:"title",onClick:a},[i[0]||(i[0]=d("span",{class:"vpi-languages icon lang"},null,-1)),H(" "+k(u(n).label)+" ",1),i[1]||(i[1]=d("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),d("ul",co,[(o(!0),c(T,null,x(u(t),v=>(o(),c("li",{key:v.link,class:"item"},[b(F,{class:"link",href:v.link},{default:h(()=>[H(k(v.text),1)]),_:2},1032,["href"])]))),128))])],2)):m("",!0)}}),vo=P(uo,[["__scopeId","data-v-516e4bc3"]]),fo={class:"container"},ho=g({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=I(null),n=xe(ee?document.body:null);return(s,a)=>(o(),$(de,{name:"fade",onEnter:a[0]||(a[0]=r=>n.value=!0),onAfterLeave:a[1]||(a[1]=r=>n.value=!1)},{default:h(()=>[e.open?(o(),c("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[d("div",fo,[f(s.$slots,"nav-screen-content-before",{},void 0,!0),b(lo,{class:"menu"}),b(vo,{class:"translations"}),b(ja,{class:"appearance"}),b(ro,{class:"social-links"}),f(s.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):m("",!0)]),_:3}))}}),mo=P(ho,[["__scopeId","data-v-2dd6d0c7"]]),po={key:0,class:"VPNav"},_o=g({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:n,toggleScreen:s}=ds(),{frontmatter:a}=V(),r=y(()=>a.value.navbar!==!1);return Me("close-screen",n),Z(()=>{ee&&document.documentElement.classList.toggle("hide-nav",!r.value)}),(i,v)=>r.value?(o(),c("header",po,[b(Da,{"is-screen-open":u(t),onToggleScreen:u(s)},{"nav-bar-title-before":h(()=>[f(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[f(i.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[f(i.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[f(i.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),b(mo,{open:u(t)},{"nav-screen-content-before":h(()=>[f(i.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[f(i.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):m("",!0)}}),go=P(_o,[["__scopeId","data-v-7ad780c2"]]),bo=["role","tabindex"],ko={key:1,class:"items"},$o=g({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const t=e,{collapsed:n,collapsible:s,isLink:a,isActiveLink:r,hasActiveLink:i,hasChildren:v,toggle:l}=ht(y(()=>t.item)),p=y(()=>v.value?"section":"div"),L=y(()=>a.value?"a":"div"),_=y(()=>v.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),S=y(()=>a.value?void 0:"button"),w=y(()=>[[`level-${t.depth}`],{collapsible:s.value},{collapsed:n.value},{"is-link":a.value},{"is-active":r.value},{"has-active":i.value}]);function M(C){"key"in C&&C.key!=="Enter"||!t.item.link&&l()}function N(){t.item.link&&l()}return(C,B)=>{const j=z("VPSidebarItem",!0);return o(),$(D(p.value),{class:A(["VPSidebarItem",w.value])},{default:h(()=>[e.item.text?(o(),c("div",U({key:0,class:"item",role:S.value},We(e.item.items?{click:M,keydown:M}:{},!0),{tabindex:e.item.items&&0}),[B[1]||(B[1]=d("div",{class:"indicator"},null,-1)),e.item.link?(o(),$(F,{key:0,tag:L.value,class:"link",href:e.item.link,rel:e.item.rel,target:e.item.target},{default:h(()=>[(o(),$(D(_.value),{class:"text",innerHTML:e.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(o(),$(D(_.value),{key:1,class:"text",innerHTML:e.item.text},null,8,["innerHTML"])),e.item.collapsed!=null&&e.item.items&&e.item.items.length?(o(),c("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:N,onKeydown:Re(N,["enter"]),tabindex:"0"},[...B[0]||(B[0]=[d("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):m("",!0)],16,bo)):m("",!0),e.item.items&&e.item.items.length?(o(),c("div",ko,[e.depth<5?(o(!0),c(T,{key:0},x(e.item.items,W=>(o(),$(j,{key:W.text,item:W,depth:e.depth+1},null,8,["item","depth"]))),128)):m("",!0)])):m("",!0)]),_:1},8,["class"])}}}),yo=P($o,[["__scopeId","data-v-0009425e"]]),Po=g({__name:"VPSidebarGroup",props:{items:{}},setup(e){const t=I(!0);let n=null;return O(()=>{n=setTimeout(()=>{n=null,t.value=!1},300)}),Ke(()=>{n!=null&&(clearTimeout(n),n=null)}),(s,a)=>(o(!0),c(T,null,x(e.items,r=>(o(),c("div",{key:r.text,class:A(["group",{"no-transition":t.value}])},[b(yo,{item:r,depth:0},null,8,["item"])],2))),128))}}),Lo=P(Po,[["__scopeId","data-v-51288d80"]]),Vo={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},So=g({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:t,hasSidebar:n}=G(),s=e,a=I(null),r=xe(ee?document.body:null);E([s,a],()=>{var v;s.open?(r.value=!0,(v=a.value)==null||v.focus()):r.value=!1},{immediate:!0,flush:"post"});const i=I(0);return E(t,()=>{i.value+=1},{deep:!0}),(v,l)=>u(n)?(o(),c("aside",{key:0,class:A(["VPSidebar",{open:e.open}]),ref_key:"navEl",ref:a,onClick:l[0]||(l[0]=le(()=>{},["stop"]))},[l[2]||(l[2]=d("div",{class:"curtain"},null,-1)),d("nav",Vo,[l[1]||(l[1]=d("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),f(v.$slots,"sidebar-nav-before",{},void 0,!0),(o(),$(Lo,{items:u(t),key:i.value},null,8,["items"])),f(v.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):m("",!0)}}),To=P(So,[["__scopeId","data-v-42c4c606"]]),Io=g({__name:"VPSkipLink",setup(e){const{theme:t}=V(),n=R(),s=I();E(()=>n.path,()=>s.value.focus());function a({target:r}){const i=document.getElementById(decodeURIComponent(r.hash).slice(1));if(i){const v=()=>{i.removeAttribute("tabindex"),i.removeEventListener("blur",v)};i.setAttribute("tabindex","-1"),i.addEventListener("blur",v),i.focus(),window.scrollTo(0,0)}}return(r,i)=>(o(),c(T,null,[d("span",{ref_key:"backToTop",ref:s,tabindex:"-1"},null,512),d("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:a},k(u(t).skipToContentLabel||"Skip to content"),1)],64))}}),Ao=P(Io,[["__scopeId","data-v-fcbfc0e0"]]),wo=g({__name:"Layout",setup(e){const{isOpen:t,open:n,close:s}=G(),a=R();E(()=>a.path,s),ft(t,s);const{frontmatter:r}=V(),i=Je(),v=y(()=>!!i["home-hero-image"]);return Me("hero-image-slot-exists",v),(l,p)=>{const L=z("Content");return u(r).layout!==!1?(o(),c("div",{key:0,class:A(["Layout",u(r).pageClass])},[f(l.$slots,"layout-top",{},void 0,!0),b(Ao),b(et,{class:"backdrop",show:u(t),onClick:u(s)},null,8,["show","onClick"]),b(go,null,{"nav-bar-title-before":h(()=>[f(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[f(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[f(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[f(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":h(()=>[f(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[f(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),b(us,{open:u(t),onOpenMenu:u(n)},null,8,["open","onOpenMenu"]),b(To,{open:u(t)},{"sidebar-nav-before":h(()=>[f(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":h(()=>[f(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),b(Kn,null,{"page-top":h(()=>[f(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[f(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":h(()=>[f(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":h(()=>[f(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[f(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[f(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[f(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[f(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[f(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[f(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[f(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[f(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":h(()=>[f(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[f(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[f(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":h(()=>[f(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[f(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":h(()=>[f(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[f(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[f(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[f(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[f(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[f(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),b(Xn),f(l.$slots,"layout-bottom",{},void 0,!0)],2)):(o(),$(L,{key:1}))}}}),xo=P(wo,[["__scopeId","data-v-d8b57b2d"]]),Ve={Layout:xo,enhanceApp:({app:e})=>{e.component("Badge",Ze)}},Mo=`---
title: 博客上线的第一天
date: 2026-08-19
tags: [日记]
description: 折腾了一整天，博客终于上线了，记一笔流水账。
---

# 博客上线的第一天

折腾了一整天，博客终于上线了。

早上还在纠结用哪个框架，晚上就已经能看到自己的小角落了——这种感觉挺奇妙的。

今天做的事：

- 选了 VitePress，写了主题组件，调了暖橙配色；
- 把「成的小屋」的牌子挂了上去，头像也换成了自己的照片；
- 经历了几轮"主页空白"和"推不上去"的折腾，好在都解决了。

晚上坐在电脑前，看着首页那句 **休息也是工作的一部分**，觉得今天过得挺值。

以后就在这里写写代码、记记生活。第一篇，就这么开始吧。
`,No=`---
title: 改论文改到怀疑人生
date: 2026-08-20
tags: [日记]
description: 修改论文很痛苦，发现自己越来越依赖 AI、越来越懒，心里没底；事太多，不知道该把什么放进主线。
---

# 改论文改到怀疑人生

今天一整天基本都耗在改论文上了，改得我有点怀疑人生。

## 越用 AI 越懒

说实话，我现在干什么都想先问一句 AI：这句话怎么改、这段逻辑怎么顺、这个图怎么画、这个数据怎么解释……它确实快，快到我几乎不用动脑子。

但问题也来了——**我发现自己变懒了**。以前遇到问题会自己先琢磨半天，现在第一反应是"丢给 AI 算了"。省下来的时间并没有用来想更深的问题，反而让我对"自己能不能独立搞定"越来越没底。

最纠结的是：完全让它做，我心里不踏实，总觉得哪里没把握、不知道它给的答案靠不靠谱；可要是自己从头来，又慢得让人烦躁。

## 事太多，不知道主线在哪

除了论文，手头还堆着一堆事：博客要维护、技术要学、实验要做、各种零碎的想法要记录。每次想理一理，都发现**做的内容太多了，整理起来太难**。

哪些该放进主线认真做、哪些只是顺手玩玩的副线，我纠结了很久。这个想留，那个舍不得丢，最后什么都没真正推进。

## 今天的一点想法

写着写着，倒想明白了一点：

- **AI 是加速器，不是代驾**。可以借它提速，但方向盘得在自己手里——至少得能看懂它给的答案、能判断对不对。
- **主线不是选出来的，是做出来的**。与其纠结哪些事"配"进主线，不如先把眼前最重要的一件做完，主线自然就清晰了。

明天先把论文里最卡的一节啃下来，全程自己写一遍，再让 AI 帮我挑毛病。试试这种感觉。

晚安。
`,Ho=`---
title: 论文代码整理过半
date: 2026-08-21
tags: [日记]
description: 今天把论文代码整理了一大半，量实在太大，没 AI 真不敢想这是多大的工程，剩下的明天接着弄。
---

# 论文代码整理过半

今天干了一件挺实在的事——整理论文里用到的代码。

忙活了一整天，总算把**大概一半**整理完了。说是"整理"，其实挺杂的：环境依赖要理顺、脚本要归类、跑出来的结果和图要对应上、注释和命名也得顺一遍，免得以后自己都看不懂。

## 没有 AI 真的不敢想

做到一半真的感慨：这工作量也太吓人了。

如果只是零散几段还好，可论文背后的代码是一整套——数据处理、实验、画图、对比……环环相扣。要是没有 AI 帮着快速读懂旧代码、批量重命名、生成说明和重构建议，光是理清这些、把重复的东西合并掉，估计得耗掉我好几倍的时间，还未必能理得这么清楚。

说真的，**没有 AI 我根本不敢想象这是多大的工作量**。它不是替我做了决定，而是把那些机械、繁琐、容易出错的活儿扛了下来，让我能把精力放在"怎么组织才合理"上面。

## 剩下的留给明天

今天到这儿也差不多了，眼睛和脑子都有点转不动。

剩下那一半不急着今晚硬赶——强行熬夜容易越理越乱，明天状态好点一次性收尾反而快。先记一笔：明天继续把后半部分收掉，争取这周内把整套代码收拾干净。

今天进度过半，算是个还不错的交代。睡了。
`,Co=`---
title: 论文代码整理收尾 · 愈加严谨
date: 2026-08-22
tags: [日记]
description: 今天总算把论文代码整理完了，工作量不小；DeepSeek 网页端中途上下文超限，只能另开窗口接着干，好在论文因此更严谨完善。也和老师讨论了进展，下一步要继续做数据库。
---

# 论文代码整理收尾 · 愈加严谨

今天的一大成果：论文背后的代码，总算**全部整理完了**。

## 工作量确实不小

从上次"过半"到今天彻底收尾，回头看才发现这摊子比想象中更沉。数据、实验、画图、对比那一整套，环环相扣，要把它收拾成能经得起细看的样子，确实费了不少功夫。

中途还踩到一个坎：DeepSeek 网页端**直接给我报了上下文超限**，分析做一半就续不上了，只能另开新窗口、把上下文重新铺一遍接着干。来回折腾挺消耗，但也逼着自己把思路拆得更干净——毕竟每开一个窗口，都得先把来龙去脉交代清楚。

## 严谨与完善

不过绕这一圈的代价是值得的：逼着自己把每一处边界、每一种异常情况都重新核对了一遍，论文因此**更加严谨和完善**了。原来有些含糊的地方，现在都说得清楚了，整体也更站得住脚。

## 聊聊进展

今天也和老师讨论了最近的进展。方向上是被认可的，接下来**数据库那一块得继续做下去**——代码收拾干净了，正好能更顺手地往下铺。

加油加油！把这件大事往前推一步，心里踏实多了。
`,Bo=`---
title: 摸鱼的一天，顺便薅了波羊毛
date: 2026-08-23
tags: [日记]
description: 今天没怎么学习，但用腾讯 CNS 里的免费模型薅了羊毛，完善了自己此前的物种分布模型智能体，还做了个提取渔业信息的智能体，指使 AI 干活的感觉真不错。
---

# 摸鱼的一天，顺便薅了波羊毛

今天坦白讲——没怎么学习嘿嘿。

但也不算白过。起因是发现了腾讯 **CNS（Cloud Native？）里的免费模型**，这羊毛不薅白不薅，太香了。免费额度能跑不少东西，正好拿来折腾我之前攒的几个智能体。

## 完善物种分布模型智能体

之前写的那个**物种分布模型智能体**，一直有些地方没打磨好：输入的数据格式杂、跑出来的结果解释得也不够清楚。今天借着免费模型的算力，把它的流程理顺了不少——数据预处理更稳、输出也更像"能直接用"的样子了。

## 顺手做了个渔业信息提取智能体

还新搞了一个**提取渔业信息的智能体**：把一堆零散的文本、报告丢进去，让它把关键字段（渔区、物种、时间、数量……）规规矩矩抽出来。以前这种活儿得自己吭哧吭哧翻，现在一句话甩过去就出结果。

## 指使 AI 干活，真香

说真的，能来**指使 AI 干活**这种感觉，挺上头的哈哈哈哈哈。

把任务拆清楚、扔给模型、等它吐结果、再挑挑拣拣——高效又省心。一边折腾一边忍不住想：**这感觉自己像一个黑心资本家**，坐那儿动动嘴就把活儿都分出去了，还不用发工资。

不过话说回来，能这么玩的前提，是得先把自己想要什么想明白。工具再好，也得有人把方向定住。今天就到这儿，摸鱼快乐，但明天还是得把正事儿拾起来。
`,Eo=`---
title: 方法正文收尾，结果写了一半
date: 2026-08-24
tags: [日记]
description: 今天写完了论文方法部分的正文，但补充材料里该放的内容还没整理；结果章节写到大半，智能体测试仍有些问题待调，明天接着看。
---

# 方法正文收尾，结果写了一半

今天在论文上推进了一块实打实的内容——**方法（Methods）部分的正文写完了**。

## 方法正文搞定，但补充材料还空着

方法这块正文总算落笔收尾，主线逻辑顺下来了。不过心里有数：很多细枝末节、参数表、额外实验，按规矩是得放进**补充文件（Supplementary）**里的，这些今天**还没整理**。

说白了正文只是"主干"， supplement 才是把论证撑结实的那部分。回头得专门腾一段时间，把那些散布在各处的细节归拢进去，不然审稿人一抠就露怯。

## 结果写了一半

**结果（Results）章节写到了差不多一半**。这部分的难处不在于"写"，而在于得跟图、跟表对齐——哪张图对应哪段结论、数据能不能撑住说法，得反复核对。现在进度过半，剩下那半争取尽快收掉。

## 智能体测试还有坑

折腾智能体的时候，测试跑起来会**出些问题**：有些边界情况没兜住，有些流程跑到一半就卡住。眼下能定位到"需要调整"，但具体怎么改顺，脑子有点转不动了。

这种事硬扛效率不高，先记一笔：**明天再看看**，换个状态再来调，估计比今晚死磕来得快。

今天方法收尾、结果过半，算是稳步往前挪了一步。剩下的 supplement 和智能体调优，明天见。
`,Do=`---
title: 论文基本写完，智能体跑通但还能更香
date: 2026-08-25
tags: [日记]
description: 今天基本把论文写完了，前言重写、方法还要再深改；结果与讨论主要是 AI 写的、偏粗糙；图都画好了很漂亮。物种分布模型智能体跑通了，优化后解决了不少问题，效果仍有提升空间。明天争取改完一遍正文。
---

# 论文基本写完，智能体跑通但还能更香

今天是论文推进很猛的一天——**主体内容基本写完了**。先记一记战果，也记一记还没收口的地方。

## 论文：骨架基本立起来了

整体往前推了一大步，但各块成色不太一样，得拆开说。

### 前言重写了一遍

**前言（Introduction）重写了**。之前那版逻辑有点散，今天重新理了叙事线，把"为什么要做、做了什么、亮点在哪"串得更顺。重写这种事一开始嫌烦，改完回头看确实舒服不少。

### 方法还得再深改

**方法（Methods）部分可能还得深入探讨、再修改一波**。主体有，但有几处的论证深度还不够——现在只是"说清楚了怎么做"，离"说清楚为什么这么做、比别人好在哪"还差口气。这块明天继续抠。

### 结果 & 讨论：AI 写的，偏粗糙

老实说，**结果（Results）和讨论（Discussion）基本是 AI 帮写的**，目前比较粗糙。好处是框架和措辞一下就铺开了，省了我大量时间；坏处是有些表述浮、有些结论跟我的数据贴得不够紧，得我自己逐段打磨。

这部分不能全信 AI，明天得一条条过，把不严谨的地方压下去。

### 图都画好了，很漂亮

**图（Figures）全都画完了，而且很漂亮** ✨。配色、排版、标注都对味，放进去整个论文档次感一下就上来了。图是论文的"门面"，这一步搞定，后面正文修改的底气都足了。

## 物种分布模型智能体：跑通了！

另一个好消息——**物种分布模型智能体终于能跑通了** 🎉。

不过实话实说，**效果还是有点差强人意**。能跑通是第一步，跑得好是另一回事。今天对它做了一轮**优化，解决了不少问题**：之前卡住的点、输出不规范的坑，都清掉了一批。

剩下那些"还不够香"的地方，继续调。记一笔：**明天再优化一下**，看看能不能更稳更准。

## 明天的计划

- **正文修改完成一遍**：方法深改 + 结果讨论逐段打磨，争取整体过一遍；
- 之后**有时间再整理补充材料（Supplementary）**，把那些细节归拢进去；
- 智能体**再优化一轮**，冲更好的效果。

---

今天论文主体收尾、智能体跑通，算是很扎实的一天。剩下的收口活儿明天接着干。

晚安 🌙
`,Fo=`---
title: 论文基本改完，多智能体也差不多了
date: 2026-08-26
tags: [日记]
description: 今天把论文基本都改完了，剩下的就是明天补上敏感性分析，然后找老师汇报；多智能体那边也差不多收尾了。轻松收工的一天。
---

# 论文基本改完，多智能体也差不多了

今天是个"收口"的日子——之前欠的修改债，基本都还上了 😌。

## 论文：改完了

说"基本改完"不是客套，**该改的都改了**：前言、方法、结果、讨论，一轮轮过下来，整体顺了不少。比起前两天那种"这儿还粗、那儿还浅"的心虚，现在心里踏实多了。

剩下的就一件事：**明天再加上敏感性分析（Sensitivity Analysis）**。这步做完，论文正文就算真正齐活了，然后就可以**找老师汇报一下**进度。

想想这一路，从代码整理、到正文、到作图、到一遍遍改，终于快摸到终点线了。明天补完敏感性分析，就能跟老师交差，爽。

## 多智能体：差不多了

另一边，**多智能体（Multi-agent）也差不多收尾了**。之前物种分布模型智能体跑通后又优化了一轮，效果上来了；整体这套多智能体的架子也搭得七七八八。

"差不多"的意思是：核心能跑、能出东西，剩下的是打磨和边角 case，不是伤筋动骨的大改。对一个研究生自己折腾的玩具级智能体来说，这进度我已经很满意了哈哈。

## 就这样吧

今天没有硬磕新东西，主要是把存量收干净。这种"眼看着清单一条条划掉"的感觉，比通宵硬刚舒服太多。

明天：敏感性分析 + 找老师汇报。然后……看老师怎么说，再决定下一波活儿。

就这样吧，哈哈 😄
`,Oo=`---
title: 论文整理完毕，多智能体跑通，数据下载还有坑
date: 2026-08-27
tags: [日记]
description: 今天把论文相关的东西都整理完了，多智能体也终于能跑通了；就是数据下载那块还有点问题，留到明天修。明天还得把论文整体再过一遍收尾。
---

# 论文整理完毕，多智能体跑通，数据下载还有坑

今天算是把论文那一摊子"整理"的活儿给收拾干净了 🎉。

## 论文：能收拾的都收拾了

之前零散的代码、中间产物、补的材料，今天一股脑理清楚、归好位。该归档的归档、该清掉的清掉，整个项目比前两天清爽多了。**论文本身的东西算是整理完毕**——当然，"整理完"和"改完"是两码事，内容还是昨天那一版，没动正文。

## 多智能体：终于跑通了

更开心的是，**多智能体这次真能跑通了** 🚀。前面卡了挺久的环节，今天总算理顺，端到端能走下来、能出结果。虽然离"完美"还有距离，但"能跑"这个坎儿算是迈过去了，爽。

## 但数据下载是个坑

高兴归高兴，还是留了个尾巴：**数据下载这块有问题**。具体是下载环节不太稳，要么是源不对、要么是流程卡壳，反正没能顺下来。这种"差最后一块"的感觉最磨人，但没有今晚硬刚，留到明天专门收拾它。

## 明天的活儿

两件事：

1. **修数据下载**——把下载那块的问题定位、修掉；
2. **论文整体整理**——把整篇再过一遍，从大到小理一遍，争取正式收尾。

今天先到这儿，嘿嘿，能跑通的瞬间还是挺上头的 😄。明天继续，加油！
`,Go=`---
title: 我是怎么把这个博客搭起来的
date: 2026-08-19
tags: [VitePress, 博客, 折腾]
description: 借助 AI 智能体搭建个人博客的全过程——从选型、写码到部署上线，以及让它帮我整理每天的工作。
---

# 我是怎么把这个博客搭起来的

一直想有个地方安放零散的记录和想法，拖了很久。这次终于动手——而且整个过程是**借助 AI 智能体**完成的，从选型到上线只花了大半天，值得写下来。

## 为什么选 VitePress

先让智能体帮我列了几个候选对比：

- **Hexo**：老牌博客框架，主题多，但 Node 依赖链长，改样式要碰 EJS。
- **Hugo**：快，但 Go 模板不是我的主场，主题定制成本高。
- **VitePress**：基于 Vite，写 Markdown 就是写博客，零运行时负担，还能完全用 Vue 组件定制——最终选了它。

VitePress 官方定位是文档站，但拿来做个人博客非常合适：原生 Markdown 渲染、代码高亮、暗色模式都是现成的，需要的东西自己写几个 Vue 组件就能补上。

## 借助智能体搭建

整个搭建过程基本是**我说需求，智能体动手**：

- 我只需要描述想要什么（文章列表、标签分类、关于页、日记归档……），智能体直接生成配置文件、主题组件和页面；
- 遇到问题直接丢给它排查（主页空白、frontmatter 取不到、构建报错、推不上去……），它分析根因后给出修复；
- 最后部署也是它一手包办：建仓库、推分支、开 GitHub Pages、验证上线。

我做的，只是**想清楚自己想要什么、以及确认它做出来的东西对不对**。这种协作方式体验下来最大的感受是：**把"怎么做"交给 AI，把"做什么、好不好"留给自己**。

## 让智能体整理每天的工作

博客搭好之后，我给它加了一个新任务：**每天晚上让它帮我整理当天的工作，做好记录**。

- 白天我做了什么、卡在哪里、有哪些想法，随时丢给它；
- 它会把散乱的信息整理成有条理的记录，存进博客的日记里；
- 这样一段时间后回看，每天的轨迹都清清楚楚，不用自己费力回忆。

这也是这个博客「日记」板块的由来——不只是情绪流水账，更是**工作与生活的整理归档**。

## 站点结构

\`\`\`
H:\\blog
├── index.md              # 主页（hero + 特性卡 + 最新文章）
├── posts.md              # 全部文章
├── tags.md               # 标签分类
├── diary.md              # 日记（按月归档）
├── about.md              # 关于
├── posts/                # 文章都在这里，一篇一个 .md
│   ├── how-i-built-this-blog.md
│   └── ...
├── public/               # 静态资源（头像等）
└── .vitepress/
    ├── config.mjs        # 站点配置
    └── theme/
        ├── index.js      # 主题入口（注册全局组件）
        ├── style.css     # 全局样式
        └── components/   # 自定义组件
\`\`\`

写新文章就是往 \`posts/\` 丢一个 \`.md\`，头部写好 \`title / date / tags / description\`，首页和标签页会自动聚合——这也是选 VitePress 的最大理由：**内容即文件，无需数据库**。

## 部署：GitHub Pages

部署方案用了 **gh-pages 分支**（源码在 \`main\`，构建产物在 \`gh-pages\`），而不是 GitHub Actions：

- Actions 工作流文件需要 token 有 \`workflow\` 权限，我的授权 token 没有，推送会被 GitHub 直接拒绝；
- 改成分支部署后，每次更新就是：本地构建 → 把 \`dist\` 推到 \`gh-pages\` → Pages 自动重新发布。

## 踩过的坑

1. **组件没注册，主页空白**：\`PostList\` / \`TagList\` 写好了但没在主题里注册成全局组件，结果主页只剩两行字——第一版上线后才发现，赶紧补上 \`app.component(...)\`。
2. **取不到 frontmatter**：VitePress 1.x 不给 Markdown 模块导出 \`frontmatter\`，列表显示成了文件名。最后用 \`?raw\` 读原文 + 自己写了个极简 YAML 解析器。
3. **本地构建报 exit 1**：Windows 上 H: 盘没有回收站，构建末尾清理临时目录时删除失败。禁用安全删除拦截后构建就干净了。
4. **上传网络不稳**：推送 \`gh-pages\` 时连接反复被重置，靠"重试 + 校验远程 SHA"的循环才推上去。

## 之后想做的

- 写更多技术笔记（前端为主）；
- 坚持每天让智能体整理工作记录，把日记板块养起来；
- 也许加个留言板（先用评论区服务）。

这里会持续更新，欢迎常来。
`;function jo(e){const t=e&&e.match(/^---\r?\n([\s\S]*?)\r?\n---/);if(!t)return{};const n={},s=t[1].split(/\r?\n/);let a=0;for(;a<s.length;){const r=s[a].match(/^([A-Za-z\u4e00-\u9fa5_-]+):\s*(.*)$/);if(!r){a++;continue}const i=r[1],v=r[2].trim();if(v===""){const p=[];let L=a+1;for(;L<s.length&&/^\s*-\s+/.test(s[L]);)p.push(s[L].replace(/^\s*-\s+/,"").trim()),L++;n[i]=p.length?p:"",a=L;continue}const l=v.match(/^\[(.*)\]$/);l?n[i]=l[1].split(",").map(p=>p.trim()).filter(Boolean):n[i]=v.replace(/^["']|["']$/g,""),a++}return n}function Pe(){return Object.entries(Object.assign({"../../../posts/diary-20260819.md":Mo,"../../../posts/diary-20260820.md":No,"../../../posts/diary-20260821.md":Ho,"../../../posts/diary-20260822.md":Co,"../../../posts/diary-20260823.md":Bo,"../../../posts/diary-20260824.md":Eo,"../../../posts/diary-20260825.md":Do,"../../../posts/diary-20260826.md":Fo,"../../../posts/diary-20260827.md":Oo,"../../../posts/how-i-built-this-blog.md":Go})).map(([t,n])=>{const s=jo(n),a=t.split("/").pop().replace(/\.md$/,""),r=n.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/,"");return{title:s.title||a,date:s.date||"",tags:Array.isArray(s.tags)?s.tags:[],description:s.description||"",url:"/blog/posts/"+a,wordCount:r.replace(/\s/g,"").length}}).sort((t,n)=>t.date<n.date?1:-1)}const Uo={key:0,class:"post-list"},zo={key:0,class:"post-empty"},qo=["href"],Wo={class:"post-meta"},Ro={key:0,class:"post-date"},Ko={class:"post-title"},Jo={key:0,class:"post-desc"},Yo=["href"],Zo={key:1,class:"diary-archive"},Qo={key:0,class:"diary-stats"},Xo={class:"diary-stat-icon"},ei={class:"diary-stat-body"},ti={class:"diary-stat-num"},ni={class:"diary-stat-label"},si={key:1,class:"post-empty"},ai={class:"diary-month-head"},oi={class:"diary-month-title"},ii={class:"diary-year-line"},li={key:0,class:"diary-year"},ri={class:"diary-month-label"},ci={class:"diary-month-count"},ui={class:"diary-month-list"},di={class:"diary-day-badge"},vi={class:"diary-entry-main"},fi=["href"],hi={key:0,class:"diary-desc"},mi={__name:"PostList",props:{tag:{type:String,default:""},excludeTag:{type:String,default:""},limit:{type:Number,default:0},mode:{type:String,default:"list"}},setup(e){const t=e,n=Pe(),s=y(()=>{let i=n.filter(v=>(!t.tag||v.tags.includes(t.tag))&&(!t.excludeTag||!v.tags.includes(t.excludeTag)));return t.limit&&(i=i.slice(0,t.limit)),i}),a=y(()=>{const i={};for(const v of s.value){const l=(v.date||"").slice(0,7)||"未标注日期";i[l]||(i[l]=[]),i[l].push(v)}return Object.keys(i).sort((v,l)=>v<l?1:-1).map(v=>{const[l,p]=v.split("-");return{ym:v,year:v==="未标注日期"?"":l,month:v==="未标注日期"?"?":Number(p),posts:i[v]}})}),r=y(()=>{const i=s.value.length,v=a.value.length,l=s.value.reduce((p,L)=>p+(L.wordCount||0),0);return[{icon:"📔",num:i,label:"篇日记"},{icon:"🗓️",num:v,label:"个月份"},{icon:"✍️",num:l.toLocaleString(),label:"字记录"}]});return(i,v)=>e.mode!=="archive"?(o(),c("div",Uo,[s.value.length?m("",!0):(o(),c("p",zo,"这里还没有内容，敬请期待～")),(o(!0),c(T,null,x(s.value,l=>(o(),c("article",{key:l.url,class:"post-card"},[d("a",{href:l.url,class:"post-card-main"},[d("div",Wo,[l.date?(o(),c("span",Ro,[v[0]||(v[0]=d("span",{class:"post-date-icon"},"📅",-1)),H(k(l.date),1)])):m("",!0),(o(!0),c(T,null,x(l.tags,p=>(o(),c("span",{key:p,class:"post-tag"},"#"+k(p),1))),128))]),d("h3",Ko,k(l.title),1),l.description?(o(),c("p",Jo,k(l.description),1)):m("",!0)],8,qo),d("a",{href:l.url,class:"post-arrow","aria-label":"阅读文章"},"→",8,Yo)]))),128))])):(o(),c("div",Zo,[r.value[0].num?(o(),c("div",Qo,[(o(!0),c(T,null,x(r.value,l=>(o(),c("div",{key:l.label,class:"diary-stat"},[d("span",Xo,k(l.icon),1),d("div",ei,[d("span",ti,k(l.num),1),d("span",ni,k(l.label),1)])]))),128))])):m("",!0),a.value.length?m("",!0):(o(),c("p",si,"日记还是空白的，去写第一篇吧～")),(o(!0),c(T,null,x(a.value,l=>(o(),c("section",{key:l.ym,class:"diary-month-card"},[d("div",ai,[d("div",oi,[v[1]||(v[1]=d("span",{class:"diary-month-emoji"},"📅",-1)),d("div",null,[d("div",ii,[l.year?(o(),c("span",li,k(l.year)+" 年",1)):m("",!0)]),d("h2",ri,k(l.month)+" 月",1)])]),d("span",ci,k(l.posts.length)+" 篇",1)]),d("ul",ui,[(o(!0),c(T,null,x(l.posts,p=>(o(),c("li",{key:p.url,class:"diary-entry"},[d("span",di,k((p.date||"").slice(8,10)||"--"),1),d("div",vi,[d("a",{href:p.url,class:"diary-title"},k(p.title),9,fi),p.description?(o(),c("span",hi,k(p.description),1)):m("",!0)]),v[2]||(v[2]=d("span",{class:"diary-arrow"},"→",-1))]))),128))])]))),128))]))}},pi={class:"tag-page"},_i={key:0,class:"tag-cloud"},gi=["onClick","title"],bi={key:1,class:"post-empty"},ki={key:2,class:"tag-result-title"},$i={class:"count"},yi={class:"count"},Pi={class:"post-list"},Li={key:0,class:"post-empty"},Vi=["href"],Si={class:"post-meta"},Ti={key:0,class:"post-date"},Ii={class:"post-title"},Ai={key:0,class:"post-desc"},wi=["href"],xi={__name:"TagList",setup(e){const t=Pe(),n=I(""),s=y(()=>{const i={};for(const v of t)for(const l of v.tags)i[l]||(i[l]=[]),i[l].push(v);return Object.entries(i).map(([v,l])=>({name:v,count:l.length,posts:l.sort((p,L)=>p.date<L.date?1:-1)})).sort((v,l)=>l.count-v.count)}),a=y(()=>n.value?t.filter(i=>i.tags.includes(n.value)):t);function r(i){return i>=3?"cloud-lg":i===2?"cloud-md":"cloud-sm"}return(i,v)=>(o(),c("div",pi,[s.value.length?(o(),c("div",_i,[d("a",{class:A(["cloud-chip",["cloud-lg",{active:n.value===""}]]),onClick:v[0]||(v[0]=le(l=>n.value="",["prevent"]))},"全部",2),(o(!0),c(T,null,x(s.value,l=>(o(),c("a",{key:l.name,class:A(["cloud-chip",[r(l.count),{active:n.value===l.name}]]),onClick:le(p=>n.value=l.name,["prevent"]),title:`${l.count} 篇`},"# "+k(l.name),11,gi))),128))])):(o(),c("p",bi,"还没有标签，写第一篇文章时记得加上哦～")),a.value.length?(o(),c("h3",ki,[n.value?(o(),c(T,{key:0},[H("# "+k(n.value)+" ",1),d("span",$i,"（"+k(a.value.length)+" 篇）",1)],64)):(o(),c(T,{key:1},[v[1]||(v[1]=H("全部内容 ",-1)),d("span",yi,"（"+k(a.value.length)+" 篇）",1)],64))])):m("",!0),d("div",Pi,[a.value.length?m("",!0):(o(),c("p",Li,"这个标签下还没有内容～")),(o(!0),c(T,null,x(a.value,l=>(o(),c("article",{key:l.url,class:"post-card"},[d("a",{href:l.url,class:"post-card-main"},[d("div",Si,[l.date?(o(),c("span",Ti,[v[2]||(v[2]=d("span",{class:"post-date-icon"},"📅",-1)),H(k(l.date),1)])):m("",!0),(o(!0),c(T,null,x(l.tags,p=>(o(),c("span",{key:p,class:"post-tag"},"#"+k(p),1))),128))]),d("h4",Ii,k(l.title),1),l.description?(o(),c("p",Ai,k(l.description),1)):m("",!0)],8,Vi),d("a",{href:l.url,class:"post-arrow","aria-label":"阅读文章"},"→",8,wi)]))),128))])]))}},Mi={class:"site-stats"},Ni={class:"stat-icon"},Hi={class:"stat-value"},Ci={class:"stat-label"},Bi={__name:"SiteStats",setup(e){const t=Pe(),n=y(()=>{const s=t.filter(i=>!i.tags.includes("日记")).length,a=t.filter(i=>i.tags.includes("日记")).length,r=new Set(t.flatMap(i=>i.tags));return[{icon:"📝",label:"文章",value:s},{icon:"📔",label:"日记",value:a},{icon:"🏷️",label:"标签",value:r.size}]});return(s,a)=>(o(),c("div",Mi,[(o(!0),c(T,null,x(n.value,r=>(o(),c("div",{key:r.label,class:"stat-card"},[d("span",Ni,k(r.icon),1),d("span",Hi,k(r.value),1),d("span",Ci,k(r.label),1)]))),128))]))}},Ei={class:"about-page"},Di={class:"about-hero"},Fi={class:"about-avatar-wrap"},Oi=["src"],Gi={class:"about-actions"},ji=["href"],Ui={__name:"AboutPage",setup(e){const t="/blog/";return(n,s)=>{const a=z("SiteStats");return o(),c("div",Ei,[d("div",Di,[d("div",Fi,[d("img",{class:"about-avatar",src:u(t)+"tx.jpg",alt:"头像"},null,8,Oi)]),s[3]||(s[3]=d("h1",{class:"about-name"},"成",-1)),s[4]||(s[4]=d("p",{class:"about-sign"},"「成的小屋」的主理人 · 写代码，也写生活",-1)),s[5]||(s[5]=d("p",{class:"about-bio"},"相信休息也是工作的一部分，喜欢把零碎的想法变成文字留下来。",-1)),s[6]||(s[6]=d("div",{class:"about-tags"},[d("span",null,"💻 前端"),d("span",null,"📝 VitePress"),d("span",null,"🔧 折腾爱好者"),d("span",null,"📒 记录控")],-1)),d("div",Gi,[s[1]||(s[1]=d("a",{class:"about-btn primary",href:"https://github.com/FC-Han",target:"_blank",rel:"noopener"},[d("span",{class:"btn-icon"},"🐙"),H(" GitHub ")],-1)),d("a",{class:"about-btn",href:u(t)+"diary"},[...s[0]||(s[0]=[d("span",{class:"btn-icon"},"📔",-1),H(" 我的日记 ",-1)])],8,ji),s[2]||(s[2]=d("a",{class:"about-btn",href:"mailto:you@example.com"},[d("span",{class:"btn-icon"},"✉️"),H(" 邮箱 ")],-1))])]),b(a),s[7]||(s[7]=Ye('<div class="about-grid"><div class="about-card"><h2 class="about-card-title">🙋 关于我</h2><p>你好，我是成。平时喜欢折腾各种小工具，把生活里零碎的想法写成文字留下来。这个博客就是我的一个小角落——技术笔记和生活碎片都在这里。</p></div><div class="about-card"><h2 class="about-card-title">🛠️ 这个站点</h2><ul class="about-list"><li>基于 <strong>VitePress</strong> 构建，原生支持 Markdown 与代码高亮。</li><li>部署在 <strong>GitHub Pages</strong>，源码与构建产物分离（main / gh-pages）。</li><li>文章、标签、日记一应俱全，写新内容只需丢一个 <code>.md</code> 文件。</li></ul></div><div class="about-card"><h2 class="about-card-title">🚀 最近在做</h2><ul class="about-list"><li>把博客打磨得更顺手，慢慢沉淀技术笔记。</li><li>坚持写日记，给生活留点痕迹。</li></ul></div><div class="about-card"><h2 class="about-card-title">☕ 一句话</h2><blockquote class="about-quote">慢下来，写下来。<br>休息也是工作的一部分。</blockquote></div></div>',1))])}}},zi={key:0,class:"post-meta-head"},qi={key:0,class:"pm-date"},Wi={class:"pm-tags"},Ri=["href"],Ki={__name:"PostMeta",setup(e){const{frontmatter:t}=ve(),n="/blog/";return(s,a)=>u(t).date||u(t).tags&&u(t).tags.length?(o(),c("div",zi,[u(t).date?(o(),c("span",qi,"🗓 "+k(u(t).date),1)):m("",!0),d("span",Wi,[(o(!0),c(T,null,x(u(t).tags||[],r=>(o(),c("a",{key:r,href:u(n)+"tags#"+r,class:"pm-tag"},"#"+k(r),9,Ri))),128))])])):m("",!0)}},Ji={__name:"Giscus",setup(e){const{isDark:t,frontmatter:n}=ve(),s=R(),a=I(null),r=y(()=>!!n.value&&!!n.value.date),i={repo:"FC-Han/blog",repoId:"R_kgDOT9Z9KA",category:"General",categoryId:"DIC_kwDOT9Z9KM4DD7h3",mapping:"pathname",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",lang:"zh-CN",loading:"lazy"},v=()=>t.value?"dark":"light";function l(){if(!a.value)return;const _=a.value.querySelector("iframe.giscus-frame"),S=a.value.querySelector("script");_&&_.remove(),S&&S.remove()}function p(){if(!r.value||!a.value)return;l();const _=document.createElement("script");_.src="https://giscus.app/client.js",_.async=!0,_.crossOrigin="anonymous",_.setAttribute("data-repo",i.repo),_.setAttribute("data-repo-id",i.repoId),_.setAttribute("data-category",i.category),_.setAttribute("data-category-id",i.categoryId),_.setAttribute("data-mapping",i.mapping),_.setAttribute("data-strict",i.strict),_.setAttribute("data-reactions-enabled",i.reactionsEnabled),_.setAttribute("data-emit-metadata",i.emitMetadata),_.setAttribute("data-input-position",i.inputPosition),_.setAttribute("data-theme",v()),_.setAttribute("data-lang",i.lang),_.setAttribute("data-loading",i.loading),a.value.appendChild(_)}function L(){const _=a.value&&a.value.querySelector("iframe.giscus-frame");_&&_.contentWindow&&_.contentWindow.postMessage({giscus:{setConfig:{theme:v()}}},"https://giscus.app")}return O(()=>p()),E(()=>[s.path,r.value],()=>pe(p)),E(t,()=>L()),(_,S)=>r.value?(o(),c("div",{key:0,ref_key:"container",ref:a,class:"giscus-comments"},[...S[0]||(S[0]=[d("p",{class:"giscus-tip"},"💬 使用 GitHub 账号即可在下方留言",-1)])],512)):m("",!0)}},Se=P(Ji,[["__scopeId","data-v-b78e9755"]]),Zi={extends:Ve,enhanceApp({app:e}){e.component("PostList",mi),e.component("TagList",xi),e.component("SiteStats",Bi),e.component("AboutPage",Ui),e.component("Giscus",Se)},Layout(e){return ae(Ve.Layout,e,{"doc-before":()=>ae(Ki),"doc-after":()=>ae(Se)})}};export{Zi as R};
