import{f as C,u as V,C as x,D as S,s as k,G as N,k as R,n as c,o as d,c as D,a as e,w as t,d as l,H as M,m as F,l as H,B as L,b as f,e as j,E as A,I as G,J,K,L as O,M as U,N as q,O as z,v as P}from"./index-Bk083lMD.js";/* empty css                   *//* empty css               *//* empty css                *//* empty css                 *//* empty css                           */import{u as Q}from"./itemTypes-Bc59PwSE.js";import"./timestamp_pb-DFz3gxdW.js";const W={class:"item-types-edit"},X=f("br",null,null,-1),Y=f("br",null,null,-1),re=C({__name:"EditView",setup(Z){const r=V(),u=Q(),p=x(),y=S(),{loading:b}=k(r),o=N({name:""}),E=async function(){const a=await u.updateItemType(p.params.id,o.name);if(a){c.error(a);return}c.success("successfully updated item type"),y.push("/item-types")};return R(async()=>{r.loading=!0;const[a,s]=await u.getItemType(p.params.id);if(s){c.error(s);return}const n=a;o.name=n.name,r.loading=!1}),(a,s)=>{const n=j,g=A,m=G,w=J,_=K,i=O,h=U,I=q,T=z,v=P;return d(),D("div",W,[e(g,{separator:"/"},{default:t(()=>[e(n,{to:{path:"/"}},{default:t(()=>[l("Homepage")]),_:1}),e(n,{to:{path:"/item-types"}},{default:t(()=>[l("Item Types")]),_:1}),e(n,null,{default:t(()=>[l(M(o.name),1)]),_:1})]),_:1}),X,Y,e(T,{class:"row-bg",justify:"space-between"},{default:t(()=>[e(m,{span:4}),e(m,{span:10},{default:t(()=>[e(I,null,{default:t(()=>[F((d(),L(h,{model:o,"label-width":"auto",style:{"max-height":"600px"}},{default:t(()=>[e(_,{label:"Item Type Name"},{default:t(()=>[e(w,{modelValue:o.name,"onUpdate:modelValue":s[0]||(s[0]=B=>o.name=B)},null,8,["modelValue"])]),_:1}),e(_,null,{default:t(()=>[e(i,{type:"primary",onClick:E},{default:t(()=>[l("Save")]),_:1}),e(i,null,{default:t(()=>[l("Cancel")]),_:1})]),_:1})]),_:1},8,["model"])),[[v,H(b)]])]),_:1})]),_:1}),e(m,{span:4})]),_:1})])}}});export{re as default};
