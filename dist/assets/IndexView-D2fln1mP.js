import{f as G,u as I,s as N,r as n,F as R,a as e,m as z,n as F,d as c,p as _,g as K,o as d,c as f,b as v,w as s,q as L,h as A,i as H,j as h,e as M,t as O,x as j,E as q,k as P,l as U,v as $,y as J}from"./index-BQqGihlM.js";/* empty css                   *//* empty css                    *//* empty css                     *//* empty css                           *//* empty css                 *//* empty css                  */import{u as Q}from"./games-DP7faEik.js";import{u as W}from"./compositionTypes-D6TpYssy.js";/* empty css                */import"./timestamp_pb-CTfFuloM.js";const X={class:"composition-types-index"},Y={class:"composition-types"},Z={style:{height:"1000px"}},ue=G({__name:"IndexView",setup(ee){const y=I(),g=Q(),w=W(),{loading:b}=N(y),l=n([]),m=n([]),i=n(""),x=n(""),E=n([{key:"id",dataKey:"id",width:300,title:"ID"},{key:"name",dataKey:"name",width:500,title:"Name"},{dataKey:"id",width:200,fixed:R.RIGHT,title:"Options",cellRenderer:o=>e(_,null,[e(z,{underline:!1,icon:F,href:`/composition-types/${o.cellData}`},{default:()=>[c("Edit")]})])}]);async function T(){const[o,,t]=await g.getGames(500,0);if(t){h.error(t);return}l.value=o,l.value.length>0&&(i.value=l.value[0].id,x.value=l.value[0].name)}async function u(){const[o,,t]=await w.getCompositionTypes(i.value,500,0);if(t){h.error(t);return}m.value=o}return K(async()=>{await T(),await u()}),(o,t)=>{const r=M,p=O,k=j,S=q,V=P,C=U,B=$;return d(),f("div",X,[v("div",Y,[e(S,{separator:"/"},{default:s(()=>[e(r,{to:{path:"/"}},{default:s(()=>[c("Homepage")]),_:1}),e(r,{to:{path:"/games"}},{default:s(()=>[e(k,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=a=>i.value=a),placeholder:"Select",size:"small",style:{"min-width":"200px"},onChange:u},{default:s(()=>[e(p,{key:"",label:"",value:"-- Please select a game --"}),(d(!0),f(_,null,L(l.value,a=>(d(),J(p,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,null,{default:s(()=>[c("Composition Types")]),_:1})]),_:1})]),v("div",Z,[e(C,null,{default:s(({height:a,width:D})=>[A(e(V,{columns:E.value,data:m.value,width:D,height:a,fixed:""},null,8,["columns","data","width","height"]),[[B,H(b)]])]),_:1})])])}}});export{ue as default};