import{f as F,C as R,u as D,D as L,s as j,g as _,G as H,k as O,n,o as d,c as A,a as e,w as t,d as l,l as h,H as z,m as G,B as w,j as K,y as P,b as E,e as q,E as J,I as Q,A as W,K as X,L as Y,M as Z,N as ee,O as te,v as ae,z as oe}from"./index-Bo4L7-t_.js";/* empty css                   *//* empty css               *//* empty css                *//* empty css                 *//* empty css                  *//* empty css                     *//* empty css                           */import{u as se}from"./unitTypes-sI2a_SDX.js";import{u as re}from"./userArmies-C8TETVPB.js";import"./types_pb-DoulQPha.js";import"./timestamp_pb-CFeAd6Js.js";const ne={class:"user-armies-add-unit"},le=E("br",null,null,-1),ie=E("br",null,null,-1),we=F({__name:"AddUnitView",setup(ue){const i=R(),u=D(),T=se(),y=re(),U=L(),{loading:p}=j(u),f=_([]),g=_(""),b=_(""),m=H({unit_type_id:""});async function S(){n.info("Attempting to add a unit to an army..."),p.value=!0;const s=await y.addUnitToUserArmy(i.params.id,m.unit_type_id);if(p.value=!1,s){n.error(s);return}n.success("Successfully added unit to army"),U.push({path:`/user-armies/edit/${i.params.id}`})}async function x(){u.loading=!0;const[s,o]=await T.getUnitTypeNamesFromArmyTypeId(b.value);if(o){n.error(o);return}f.value=s,u.loading=!1}return O(async()=>{u.loading=!0;const[s,o]=await y.getUserArmy(i.params.id);if(o){n.error(o);return}const r=s;g.value=r.name,b.value=r.armyTypeId,await x()}),(s,o)=>{const r=q,B=J,c=Q,N=oe,V=W,v=X,k=Y,C=Z,I=ee,M=te,$=ae;return d(),A("div",ne,[e(B,{separator:"/"},{default:t(()=>[e(r,{to:{path:"/"}},{default:t(()=>[l("Homepage")]),_:1}),e(r,{to:{path:"/user-armies"}},{default:t(()=>[l("User Armies")]),_:1}),e(r,{to:{path:`/user-armies/edit/${h(i).params.id}`}},{default:t(()=>[l(z(g.value),1)]),_:1},8,["to"]),e(r,null,{default:t(()=>[l("Add Unit")]),_:1})]),_:1}),le,ie,e(M,{class:"row-bg",justify:"space-between"},{default:t(()=>[e(c,{span:4}),e(c,{span:10},{default:t(()=>[e(I,null,{default:t(()=>[G((d(),w(C,{model:m,"label-width":"auto",style:{"max-height":"600px"}},{default:t(()=>[e(v,{label:"Unit Type"},{default:t(()=>[e(V,{modelValue:m.unit_type_id,"onUpdate:modelValue":o[0]||(o[0]=a=>m.unit_type_id=a),placeholder:"please select your unit type"},{default:t(()=>[(d(!0),A(K,null,P(f.value,a=>(d(),w(N,{key:a.id,label:`${a.compositionTypeName} - ${a.name} - (${a.pointsPerModel}pts${a.maxModels>1?" per model (min:"+a.minModels+")":""})`,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(v,null,{default:t(()=>[e(k,{type:"primary",onClick:S},{default:t(()=>[l("Add")]),_:1})]),_:1})]),_:1},8,["model"])),[[$,h(p)]])]),_:1})]),_:1}),e(c,{span:4})]),_:1})])}}});export{we as default};