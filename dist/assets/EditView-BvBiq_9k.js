import{f as V,u as x,z as S,A as k,s as I,B as N,g as R,j as i,o as d,c as D,a as e,w as o,d as l,C as j,h as A,i as F,y as H,b as f,e as L,E as M,D as z,G,H as J,I as K,J as U,K as q,L as O,v as P}from"./index-YON7duyJ.js";/* empty css                   *//* empty css               *//* empty css                *//* empty css                 *//* empty css                           */import{u as Q}from"./compositionTypes-DG1jcbIb.js";import"./timestamp_pb-CBs1K3Pj.js";const W={class:"composition-types-edit"},X=f("br",null,null,-1),Y=f("br",null,null,-1),re=V({__name:"EditView",setup(Z){const r=x(),p=Q(),m=S(),y=k(),{loading:b}=I(r),t=N({name:""}),E=async function(){const s=await p.updateCompositionType(m.params.id,t.name);if(s){i.error(s);return}i.success("successfully updated composition type"),y.push("/composition-types")};return R(async()=>{r.loading=!0;const[s,a]=await p.getCompositionType(m.params.id);if(a){i.error(a);return}const n=s;t.name=n.name,r.loading=!1}),(s,a)=>{const n=L,g=M,c=z,C=G,u=J,_=K,h=U,w=q,T=O,v=P;return d(),D("div",W,[e(g,{separator:"/"},{default:o(()=>[e(n,{to:{path:"/"}},{default:o(()=>[l("Homepage")]),_:1}),e(n,{to:{path:"/composition-types"}},{default:o(()=>[l("Composition Types")]),_:1}),e(n,null,{default:o(()=>[l(j(t.name),1)]),_:1})]),_:1}),X,Y,e(T,{class:"row-bg",justify:"space-between"},{default:o(()=>[e(c,{span:4}),e(c,{span:10},{default:o(()=>[e(w,null,{default:o(()=>[A((d(),H(h,{model:t,"label-width":"auto",style:{"max-height":"600px"}},{default:o(()=>[e(u,{label:"Composition Type Name"},{default:o(()=>[e(C,{modelValue:t.name,"onUpdate:modelValue":a[0]||(a[0]=B=>t.name=B)},null,8,["modelValue"])]),_:1}),e(u,null,{default:o(()=>[e(_,{type:"primary",onClick:E},{default:o(()=>[l("Save")]),_:1}),e(_,null,{default:o(()=>[l("Cancel")]),_:1})]),_:1})]),_:1},8,["model"])),[[v,F(b)]])]),_:1})]),_:1}),e(c,{span:4})]),_:1})])}}});export{re as default};