import{f as L,u as R,D as j,s as O,g as E,G as $,k as z,o as s,c as f,a as e,w as l,d,m as H,l as J,B as g,j as T,y as A,b as h,n as i,e as K,E as P,I as q,A as Q,K as W,J as X,L as Y,M as Z,N as ee,O as ae,v as te,z as le}from"./index-Bk083lMD.js";/* empty css                   *//* empty css               *//* empty css                *//* empty css                 *//* empty css                  *//* empty css                     *//* empty css                           */import{u as oe}from"./userArmies-B6Jglb9k.js";import{u as re}from"./games-DAlUTQAr.js";import{u as ne}from"./armyTypes-NK_Ei02c.js";import"./types_pb-D0QqgM2K.js";import"./timestamp_pb-DFz3gxdW.js";const se={class:"user-armies-create"},me=h("br",null,null,-1),ue=h("br",null,null,-1),Te=L({__name:"CreateView",setup(de){const m=R(),C=re(),S=ne(),B=oe(),k=j(),{loading:_}=O(m),p=E([]),c=E([]),a=$({gameId:"",armyTypeId:"",name:"",points:0});async function x(){i.info("Attempting to create an army..."),_.value=!0;const[r,t]=await B.createUserArmy(a.name,a.gameId,a.armyTypeId,a.points);if(_.value=!1,t){i.error(t);return}const n=r;i.success(`Successfully created army '${n.name}'. Navigating to army edit page`),k.push({path:`/user-armies/edit/${n.id}`})}async function U(){m.loading=!0;const[r,,t]=await C.getGames(500,0);if(t){i.error(t);return}p.value=r,p.value.length>0&&(a.gameId=p.value[0].id),m.loading=!1}async function b(){m.loading=!0,a.armyTypeId="";const[r,,t]=await S.getArmyTypes(a.gameId,500,0);if(t){i.error(t);return}c.value=r,c.value.length>0&&(a.armyTypeId=c.value[0].id),m.loading=!1}return z(async()=>{await U(),await b()}),(r,t)=>{const n=K,N=P,y=q,v=le,I=Q,u=W,V=X,w=Y,G=Z,D=ee,M=ae,F=te;return s(),f("div",se,[e(N,{separator:"/"},{default:l(()=>[e(n,{to:{path:"/"}},{default:l(()=>[d("Homepage")]),_:1}),e(n,{to:{path:"/user-armies"}},{default:l(()=>[d("User Armies")]),_:1}),e(n,null,{default:l(()=>[d("Create new army")]),_:1})]),_:1}),me,ue,e(M,{class:"row-bg",justify:"space-between"},{default:l(()=>[e(y,{span:4}),e(y,{span:10},{default:l(()=>[e(D,null,{default:l(()=>[H((s(),g(G,{model:a,"label-width":"auto",style:{"max-height":"600px"}},{default:l(()=>[e(u,{label:"Game"},{default:l(()=>[e(I,{modelValue:a.gameId,"onUpdate:modelValue":t[0]||(t[0]=o=>a.gameId=o),placeholder:"please select your game",onChange:b},{default:l(()=>[(s(!0),f(T,null,A(p.value,o=>(s(),g(v,{key:o.id,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(u,{label:"Army Type"},{default:l(()=>[e(I,{modelValue:a.armyTypeId,"onUpdate:modelValue":t[1]||(t[1]=o=>a.armyTypeId=o),placeholder:"please select your army type"},{default:l(()=>[(s(!0),f(T,null,A(c.value,o=>(s(),g(v,{key:o.id,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(u,{label:"Army Name"},{default:l(()=>[e(V,{modelValue:a.name,"onUpdate:modelValue":t[2]||(t[2]=o=>a.name=o)},null,8,["modelValue"])]),_:1}),e(u,{label:"Max Points"},{default:l(()=>[e(V,{modelValue:a.points,"onUpdate:modelValue":t[3]||(t[3]=o=>a.points=o),type:"number"},null,8,["modelValue"])]),_:1}),e(u,null,{default:l(()=>[e(w,{type:"primary",onClick:x},{default:l(()=>[d("Create")]),_:1}),e(w,null,{default:l(()=>[d("Cancel")]),_:1})]),_:1})]),_:1},8,["model"])),[[F,J(_)]])]),_:1})]),_:1}),e(y,{span:4})]),_:1})])}}});export{Te as default};
