import{g as T,u as A,h as F,s as H,i,F as L,a as e,j as M,k as O,d as r,l as h,m as P,o as m,c as v,b as u,w as a,C as j,n as g,p as q,q as U,t as y,e as $,D as J,G as Q,E as W,v as X,x as Y,y as Z,z as ee,A as te,H as ae,B as se}from"./index-J7TsvYTq.js";/* empty css                   *//* empty css                *//* empty css                     *//* empty css                  *//* empty css                           *//* empty css                 *//* empty css                  */import{u as oe}from"./games-D45vqApO.js";import{u as le}from"./statistics-1dhNe-IN.js";import"./timestamp_pb-Lo3uUtcO.js";const ne={class:"statistics-index"},ie={class:"statistics"},ce=u("br",null,null,-1),re=u("br",null,null,-1),ue={style:{height:"1000px"}},xe=T({__name:"IndexView",setup(de){const l=A(),w=oe(),b=le(),E=F(),{loading:x}=H(l),n=i([]),_=i([]),c=i(""),S=i(""),k=i([{key:"name",dataKey:"name",width:500,title:"Name"},{key:"display",dataKey:"display",width:200,title:"Display"},{key:"position",dataKey:"position",width:50,title:"Position"},{dataKey:"id",width:200,fixed:L.RIGHT,title:"Options",cellRenderer:o=>e(h,null,[e(M,{underline:!1,icon:O,href:`/statistics/${o.cellData}`},{default:()=>[r("Edit")]})])}]);async function B(){l.loading=!0;const[o,,t]=await w.getGames(500,0);if(t){y.error(t);return}n.value=o,n.value.length>0&&(c.value=n.value[0].id,S.value=n.value[0].name),l.loading=!1}async function p(){l.loading=!0;const[o,t]=await b.getStatistics(c.value,500,0);if(t){y.error(t);return}_.value=o,l.loading=!1}async function V(){E.push("/statistics/create")}return P(async()=>{await B(),await p()}),(o,t)=>{const d=$,f=J,D=Q,G=W,C=X,N=Y,I=Z,R=ee,z=te;return m(),v("div",ne,[u("div",ie,[e(G,{separator:"/"},{default:a(()=>[e(d,{to:{path:"/"}},{default:a(()=>[r("Homepage")]),_:1}),e(d,{to:{path:"/games"}},{default:a(()=>[e(D,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=s=>c.value=s),placeholder:"Select",size:"small",style:{"min-width":"200px"},onChange:p},{default:a(()=>[e(f,{key:"",label:"",value:"-- Please select a game --"}),(m(!0),v(h,null,j(n.value,s=>(m(),ae(f,{key:s.id,label:s.name,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,null,{default:a(()=>[r("Statistics")]),_:1})]),_:1})]),ce,e(N,{type:"success",onClick:q(V,["prevent"])},{default:a(()=>[e(C,null,{default:a(()=>[e(g(se))]),_:1}),r(" Create New")]),_:1}),re,u("div",ue,[e(R,null,{default:a(({height:s,width:K})=>[U(e(I,{columns:k.value,data:_.value,width:K,height:s,fixed:""},null,8,["columns","data","width","height"]),[[z,g(x)]])]),_:1})])])}}});export{xe as default};
