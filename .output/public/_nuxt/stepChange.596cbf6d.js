import{a as i,r as u,b as h,s as x,e as b,o as g,l as I,h as p,x as m,u as t,f as B}from"./entry.cee4e10b.js";const C={class:"card",id:"_history"},N={__name:"stepChange",props:["scrollNum"],setup(_){const a=_,l=u(a.scrollNum),c=u(26),n=u(38),f=u([{label:"Personal"},{label:"Seat"},{label:"Payment"},{label:"Confirmation"}]);h(()=>{d(document.getElementById("_history"),a.scrollNum>=c.value&&a.scrollNum<n.value)}),x(()=>a.scrollNum,(e,s)=>{let o=l.value;e!=o&&(l.value=e,e<c.value?y(document.getElementById("_history"),!1):e>n.value?d(document.getElementById("_history"),!1):d(document.getElementById("_history"),!0))});const d=(e,s)=>{s?(e.style.opacity=1,r(e,2,20)):(e.style.opacity=0,r(e,2,-50))},y=(e,s)=>{s?(e.style.opacity=1,r(e,2,20)):(e.style.opacity=0,r(e,2,150))},r=(e,s,o)=>{e.style.left=s+"%",e.style.top=o+"%"};return(e,s)=>{const o=b("Steps");return g(),I("div",C,[p("div",{class:m(["text-900 font-bold text-6xl mb-4 text-center",t(l)>t(c)+2&&t(l)<t(n)?"_fadeIn":"_fadeOut"])}," Passed ",2),p("div",{class:m(["col-12 md:col-12",t(l)>t(c)+3&&t(l)<t(n)?"_fadeIn":"_fadeOut"]),id:"_stepChange"},[B(o,{model:t(f),readonly:!0,exact:!1,pt:{root:{class:"w-12"}}},null,8,["model"])],2)])}}},v=i(N,[["__scopeId","data-v-5e989aac"]]);export{v as default};