import T from"./taskRelationLine.c8720a4a.js";import{a as A,j as k,r as D,o as h,l as p,h as _,u as n,Q as B,R,F as C,S as E,c as M}from"./entry.cee4e10b.js";const F={key:0},I=["x","y","width"],j={key:1},N=["x","y","width"],S=["x","y","width"],P=["x","y"],Q={__name:"TaskRect",props:["taskD","taskList","bWidth"],setup(X){const o=X,e=o.taskD,g=k({get:()=>o.taskD.duration*o.bWidth-18+u.value}),W=k({get:()=>(o.taskD.duration*o.bWidth-18+u.value)*(100-e.progress)/100}),L=k({get:()=>(o.taskD.duration*o.bWidth-18+u.value)*e.progress/100}),d=D(0),u=D(0),v=k({get:()=>(o.taskD.date-1)*o.bWidth+9+d.value}),f=D(o.taskD.index*50),w=(r,t)=>{if(!e.selected){document.onmouseup=null,r.target.onmousedown=null;let i=document.getElementsByClassName("selected");i.length>0&&i[0].classList.remove("selected"),t.taskList.tasks.filter(c=>c.selected).forEach(c=>{c.selected=!1}),e.selected=!0,r.target.classList.add("selected"),r.target.onmousedown=s}function m(i){i+e.date<1?e.dependency instanceof Array&&t.taskList.calculatorCoordT(e):t.taskList.changeDateTask(e,i+e.date)}function s(){let i=event.clientX,c=d.value;function y(l){d.value=l-i,t.taskList.moveCoord(e,d.value)}function a(l){y(l.pageX)}document.onmousemove=a,document.onmouseup=()=>{document.onmousemove=null;let l=d.value-c,x=parseInt((l>0?l+9:l-41)/o.bWidth);(x>0||x<0)&&m(x),d.value=c,t.taskList.reArrangeCoord(e),e.selected=!1,document.onmouseup=null}}},b=(r,t)=>{let m=event.clientX,s=u.value;function i(a){a+e.duration<1?e.dependency instanceof Array&&t.taskList.calculatorCoordT(e):t.taskList.changeDurationTask(e,a+e.duration)}function c(a){u.value=a-m,t.taskList.moveCoord2(e,u.value)}function y(a){c(a.pageX)}document.onmousemove=y,document.onmouseup=()=>{document.onmousemove=null;let a=u.value-s,l=parseInt((a>0?a+9:a-41)/o.bWidth);(l>0||l<0)&&i(l),u.value=s,t.taskList.reArrangeCoord(e),document.onmouseup=null}};return(r,t)=>{const m=T;return h(),p(C,null,[o.taskD.progress==100?(h(),p("g",F,[_("rect",{x:n(v),y:n(f)+9,width:n(g),height:33,fill:"#3B82F6",onClick:t[0]||(t[0]=s=>w(s,this))},null,8,I)])):(h(),p("g",j,[_("rect",{x:n(v)+n(L),y:n(f)+9,width:n(W),height:33,fill:"green",onClick:t[1]||(t[1]=s=>w(s,this))},null,8,N),_("rect",{x:n(v),y:n(f)+9,width:n(L),height:33,fill:"yellow",onClick:t[2]||(t[2]=s=>w(s,this))},null,8,S)])),B(_("rect",{x:n(v)+n(g),y:n(f)+9,width:10,height:33,onMousedown:t[3]||(t[3]=s=>b(s,this))},null,40,P),[[R,o.taskD.selected]]),(h(!0),p(C,null,E(o.taskD.dependency,s=>(h(),M(m,{width:n(g),next:s,bWidth:o.bWidth,moveX:n(d)},null,8,["width","next","bWidth","moveX"]))),256))],64)}}},$=A(Q,[["__scopeId","data-v-08afe169"]]);export{$ as default};
