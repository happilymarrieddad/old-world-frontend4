import{f as W,u as $,A as z,s as Q,r as c,B as X,g as Y,o as n,c as i,a as o,w as l,d as f,h as Z,i as ee,y as d,p as T,q as _,W as te,b as k,j as m,e as ae,E as oe,D as le,t as ne,x as re,H as se,G as pe,I as de,J as ue,K as ie,L as me,v as ye}from"./index-CuHrO1UT.js";/* empty css                   *//* empty css               *//* empty css                *//* empty css                 *//* empty css                  *//* empty css                     *//* empty css                           */import{u as ce}from"./games-C5MyWv6x.js";import{u as fe}from"./armyTypes-DYqyAicj.js";import{u as Te,C as _e}from"./unitTypes-bP-PZcfW.js";import{u as ge}from"./troopTypes-koCoEWjd.js";import{u as Ie}from"./compositionTypes-fR5ialL-.js";import"./timestamp_pb-B3iL3wgR.js";import"./types_pb-D0t3hVCi.js";const be={class:"unit-type-create"},ve=k("br",null,null,-1),Ve=k("br",null,null,-1),Ue={key:0},qe=W({__name:"CreateView",setup(we){const s=$(),h=ce(),B=fe(),M=Te(),P=ge(),A=Ie(),D=z(),{loading:G}=Q(s),g=c([]),I=c([]),b=c([]),v=c([]),C=c([]),e=X({name:"",gameId:"",armyTypeId:"",troopTypeId:"",compositionTypeId:"",parentUnitTypeId:"",pointsPerModel:0,minModels:1,maxModels:1});async function N(){e.parentUnitTypeId.length>0&&(e.minModels=1,e.maxModels=1,e.pointsPerModel=0);const r=new _e({name:e.name,gameId:e.gameId,armyTypeId:e.armyTypeId,troopTypeId:e.troopTypeId,compositionTypeId:e.compositionTypeId,pointsPerModel:BigInt(e.pointsPerModel),minModels:BigInt(e.minModels),maxModels:BigInt(e.maxModels),unitTypeId:e.parentUnitTypeId}),a=await M.createUnitType(r);if(a){m.error(a);return}m.success("Successfully created unit type"),D.push(`/unit-types${e.parentUnitTypeId.length>0?"/edit/"+e.parentUnitTypeId:""}`)}async function R(){s.loading=!0;const[r,,a]=await h.getGames(1e3,0);if(a){m.error(a);return}g.value=r,g.value.length>0&&(e.gameId=g.value[0].id),s.loading=!1}async function F(){s.loading=!0;const[r,,a]=await B.getArmyTypes(e.gameId,1e3,0);if(a){m.error(a);return}I.value=r,I.value.length>0&&(e.armyTypeId=I.value[0].id),s.loading=!1}async function q(){s.loading=!0;const[r,,a]=await P.getTroopTypes(e.gameId,1e3,0);if(a){m.error(a);return}b.value=r,b.value.length>0&&(e.troopTypeId=b.value[0].id),s.loading=!1}async function L(){s.loading=!0;const[r,,a]=await A.getCompositionTypes(e.gameId,1e3,0);if(a){m.error(a);return}v.value=r,v.value.length>0&&(e.troopTypeId=v.value[0].id),s.loading=!1}async function x(){s.loading=!0;const[r,a]=await M.getUnitTypeNamesFromArmyTypeId(e.armyTypeId);if(a){m.error(a);return}C.value=r,s.loading=!1}async function E(){await F(),await q(),await L(),await x()}return Y(async()=>{await R(),await E()}),(r,a)=>{const U=ae,j=oe,w=le,u=ne,y=re,p=se,V=pe,S=de,H=ue,J=ie,K=me,O=ye;return n(),i("div",be,[o(j,{separator:"/"},{default:l(()=>[o(U,{to:{path:"/"}},{default:l(()=>[f("Homepage")]),_:1}),o(U,{to:{path:"/unit-types"}},{default:l(()=>[f("Unit Types")]),_:1}),o(U,null,{default:l(()=>[f("Create new army unit type")]),_:1})]),_:1}),ve,Ve,o(K,{class:"row-bg",justify:"space-between"},{default:l(()=>[o(w,{span:4}),o(w,{span:10},{default:l(()=>[o(J,null,{default:l(()=>[Z((n(),d(H,{model:e,"label-width":"auto",style:{"max-height":"600px"}},{default:l(()=>[o(p,{label:"Game"},{default:l(()=>[o(y,{modelValue:e.gameId,"onUpdate:modelValue":a[0]||(a[0]=t=>e.gameId=t),placeholder:"please select a game",onChange:E},{default:l(()=>[(n(!0),i(T,null,_(g.value,t=>(n(),d(u,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(p,{label:"Army Type"},{default:l(()=>[o(y,{modelValue:e.armyTypeId,"onUpdate:modelValue":a[1]||(a[1]=t=>e.armyTypeId=t),placeholder:"please select an army type",onChange:x},{default:l(()=>[(n(!0),i(T,null,_(I.value,t=>(n(),d(u,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(p,{label:"Troop Type"},{default:l(()=>[o(y,{modelValue:e.troopTypeId,"onUpdate:modelValue":a[2]||(a[2]=t=>e.troopTypeId=t),placeholder:"please select a troop type"},{default:l(()=>[(n(),d(u,{key:"",label:"-- Please select a Troop Tyoe --",value:""})),(n(!0),i(T,null,_(b.value,t=>(n(),d(u,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(p,{label:"Composition Type"},{default:l(()=>[o(y,{modelValue:e.compositionTypeId,"onUpdate:modelValue":a[3]||(a[3]=t=>e.compositionTypeId=t),placeholder:"please select a composition type"},{default:l(()=>[(n(),d(u,{key:"",label:"-- Please select a Composition Tyoe --",value:""})),(n(!0),i(T,null,_(v.value,t=>(n(),d(u,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(p,{label:"Parent Unit Type (optional - only if you want to add this as a leader or mount for a unit)"},{default:l(()=>[o(y,{modelValue:e.parentUnitTypeId,"onUpdate:modelValue":a[4]||(a[4]=t=>e.parentUnitTypeId=t),placeholder:"please select a parent unit type"},{default:l(()=>[(n(),d(u,{key:"",label:"-- Select a parent unit if this is for example a leader of a unit--",value:""})),(n(!0),i(T,null,_(C.value,t=>(n(),d(u,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(p,{label:"Unit Type Name"},{default:l(()=>[o(V,{modelValue:e.name,"onUpdate:modelValue":a[5]||(a[5]=t=>e.name=t),placeholder:"Empire Greatswords"},null,8,["modelValue"])]),_:1}),e.parentUnitTypeId==""?(n(),i("div",Ue,[o(p,{label:"Points per model"},{default:l(()=>[o(V,{modelValue:e.pointsPerModel,"onUpdate:modelValue":a[6]||(a[6]=t=>e.pointsPerModel=t),type:"number",min:"0"},null,8,["modelValue"])]),_:1}),o(p,{label:"Min Models"},{default:l(()=>[o(V,{modelValue:e.minModels,"onUpdate:modelValue":a[7]||(a[7]=t=>e.minModels=t),type:"number",min:"1"},null,8,["modelValue"])]),_:1}),o(p,{label:"Max Models"},{default:l(()=>[o(V,{modelValue:e.maxModels,"onUpdate:modelValue":a[8]||(a[8]=t=>e.maxModels=t),type:"number",min:"1"},null,8,["modelValue"])]),_:1})])):te("",!0),o(p,null,{default:l(()=>[o(S,{type:"primary",onClick:N},{default:l(()=>[f("Create")]),_:1}),o(S,null,{default:l(()=>[f("Cancel")]),_:1})]),_:1})]),_:1},8,["model"])),[[O,ee(G)]])]),_:1})]),_:1}),o(w,{span:4})]),_:1})])}}});export{qe as default};
