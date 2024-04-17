import{g as z,I as W,h as X,u as Y,s as Z,i as E,J as $,m as ee,o as s,c as m,a as t,w as l,d as _,K as k,q as te,n as oe,H as f,l as v,C as w,b as c,p as B,t as y,e as ae,E as le,L as ne,M as se,N as re,D as pe,G as ie,x as ue,O as de,P as me,Q as ye,A as ce}from"./index-NHNacFVT.js";/* empty css                   *//* empty css               *//* empty css                *//* empty css                  *//* empty css                 *//* empty css                  *//* empty css                     *//* empty css                           */import{u as Te}from"./armyTypes-D85Hwbun.js";import{u as _e,U as fe}from"./unitTypes-Ba72F2s1.js";import{u as ge}from"./troopTypes-CNlxKM23.js";import{u as be}from"./compositionTypes-a1q-sEXp.js";import"./timestamp_pb-DpX4yl5v.js";import"./types_pb-CjsPfOES.js";const Ie={class:"unit-type-edit"},Me=c("br",null,null,-1),Ve=c("br",null,null,-1),Le=z({__name:"EditView",setup(ve){const S=W(),A=X(),p=Y(),h=Te(),U=_e(),D=ge(),R=be(),{loading:g}=Z(p),b=E([]),I=E([]),F=E([]),e=$({name:"",gameId:"",armyTypeId:"",armyTypeName:"",troopTypeId:"",compositionTypeId:"",parentUnitTypeId:"",pointsPerModel:0,minModels:1,maxModels:1,stats:[]});async function N(){p.loading=!0;const[r,o]=await U.getUnitType(S.params.id);if(o){y.error(o);return}const n=r,[x,T]=await h.getArmyType(n.armyTypeId);if(T){y.error(T);return}const u=x;e.name=n.name,e.gameId=n.gameId,e.armyTypeId=n.armyTypeId,e.armyTypeName=u.name,e.troopTypeId=n.troopTypeId,e.compositionTypeId=n.compositionTypeId,e.pointsPerModel=Number(n.pointsPerModel),e.minModels=Number(n.minModels),e.maxModels=Number(n.maxModels),e.stats=n.statistics,p.loading=!1}async function L(){p.loading=!0;const[r,,o]=await D.getTroopTypes(e.gameId,1e3,0);if(o){y.error(o);return}b.value=r,b.value.length>0&&(e.troopTypeId=b.value[0].id),p.loading=!1}async function q(){p.loading=!0;const[r,,o]=await R.getCompositionTypes(e.gameId,1e3,0);if(o){y.error(o);return}I.value=r,I.value.length>0&&(e.troopTypeId=I.value[0].id),p.loading=!1}async function H(){p.loading=!0;const[r,o]=await U.getUnitTypeNamesFromArmyTypeId(e.armyTypeId);if(o){y.error(o);return}F.value=r,p.loading=!1}async function O(){g.value=!0,await N(),g.value=!1}async function j(){g.value=!0;const r=await U.updateUnitType(new fe({id:S.params.id,name:e.name,pointsPerModel:BigInt(e.pointsPerModel),minModels:BigInt(e.minModels),maxModels:BigInt(e.maxModels),troopTypeId:e.troopTypeId,compositionTypeId:e.compositionTypeId,statistics:e.stats}));if(r){y.error(r);return}y.success("Successfully updated unit type"),A.push("/unit-types")}return ee(async()=>{await N(),await L(),await q(),await H()}),(r,o)=>{const n=ae,x=le,T=ne,u=se,i=re,M=pe,P=ie,C=ue,G=de,J=me,K=ye,Q=ce;return s(),m("div",Ie,[t(x,{separator:"/"},{default:l(()=>[t(n,{to:{path:"/"}},{default:l(()=>[_("Homepage")]),_:1}),t(n,{to:{path:"/user-armies"}},{default:l(()=>[_("User Armies")]),_:1}),t(n,null,{default:l(()=>[_("Edit "+k(e.name),1)]),_:1})]),_:1}),Me,Ve,t(K,{class:"row-bg",justify:"space-between"},{default:l(()=>[t(T,{span:4}),t(T,{span:10},{default:l(()=>[t(J,null,{default:l(()=>[te((s(),f(G,{model:e,"label-width":"auto",style:{"max-height":"600px"}},{default:l(()=>[t(i,{label:"Army Name"},{default:l(()=>[t(u,{modelValue:e.name,"onUpdate:modelValue":o[0]||(o[0]=a=>e.name=a)},null,8,["modelValue"])]),_:1}),t(i,{label:"Army Type"},{default:l(()=>[t(u,{modelValue:e.armyTypeName,"onUpdate:modelValue":o[1]||(o[1]=a=>e.armyTypeName=a),disabled:""},null,8,["modelValue"])]),_:1}),t(i,{label:"Troop Type"},{default:l(()=>[t(P,{modelValue:e.troopTypeId,"onUpdate:modelValue":o[2]||(o[2]=a=>e.troopTypeId=a),placeholder:"please select a troop type"},{default:l(()=>[(s(),f(M,{key:"",label:"-- Please select a Troop Tyoe --",value:""})),(s(!0),m(v,null,w(b.value,(a,d)=>(s(),f(M,{key:d,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(i,{label:"Composition Type"},{default:l(()=>[t(P,{modelValue:e.compositionTypeId,"onUpdate:modelValue":o[3]||(o[3]=a=>e.compositionTypeId=a),placeholder:"please select a composition type"},{default:l(()=>[(s(),f(M,{key:"",label:"-- Please select a Composition Tyoe --",value:""})),(s(!0),m(v,null,w(I.value,(a,d)=>(s(),f(M,{key:d,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(i,{label:"Points Per Model"},{default:l(()=>[t(u,{modelValue:e.pointsPerModel,"onUpdate:modelValue":o[4]||(o[4]=a=>e.pointsPerModel=a),type:"number"},null,8,["modelValue"])]),_:1}),t(i,{label:"Min Models"},{default:l(()=>[t(u,{modelValue:e.minModels,"onUpdate:modelValue":o[5]||(o[5]=a=>e.minModels=a),type:"number",min:"1"},null,8,["modelValue"])]),_:1}),t(i,{label:"Max Models"},{default:l(()=>[t(u,{modelValue:e.maxModels,"onUpdate:modelValue":o[6]||(o[6]=a=>e.maxModels=a),type:"number",min:"1"},null,8,["modelValue"])]),_:1}),t(i,{label:"Statistics"},{default:l(()=>[c("table",null,[c("thead",null,[c("tr",null,[(s(!0),m(v,null,w(e.stats,(a,d)=>{var V;return s(),m("th",{key:d},k((V=a.statistic)==null?void 0:V.display),1)}),128))])]),c("tbody",null,[c("tr",null,[(s(!0),m(v,null,w(e.stats,(a,d)=>(s(),m("th",{key:d},[t(u,{modelValue:a.value,"onUpdate:modelValue":V=>a.value=V},null,8,["modelValue","onUpdate:modelValue"])]))),128))])])])]),_:1}),t(i,null,{default:l(()=>[t(C,{type:"primary",onClick:B(j,["prevent"])},{default:l(()=>[_("Save")]),_:1}),t(C,{type:"warning",onClick:B(O,["prevent"])},{default:l(()=>[_("Reset")]),_:1})]),_:1})]),_:1},8,["model"])),[[Q,oe(g)]])]),_:1})]),_:1}),t(T,{span:4})]),_:1})])}}});export{Le as default};
