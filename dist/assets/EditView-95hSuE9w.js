import{f as $,u as z,z as G,A as H,s as L,r as U,B as P,g as j,F as J,a as e,m as x,n as O,d as i,U as q,p as Q,o as k,c as W,w as a,C as X,h as g,i as p,y as Y,T as h,V as Z,b as c,j as w,e as ee,E as te,D as ae,G as le,H as se,J as ne,K as oe,L as ie,k as re,l as ue,v as de,I as v}from"./index-CUFw-OIo.js";/* empty css                   *//* empty css                    *//* empty css                     *//* empty css               *//* empty css                *//* empty css                 *//* empty css                           */import{u as me}from"./userArmies-ITDP9y9w.js";/* empty css                */import"./timestamp_pb-CZi0KM27.js";const pe={class:"user-armies-edit"},ce=c("br",null,null,-1),_e=c("br",null,null,-1),ye=c("br",null,null,-1),fe=c("br",null,null,-1),be={style:{height:"1000px"}},Ce=$({__name:"EditView",setup(ge){const y=z(),_=G(),N=H(),T=me(),{loading:r}=L(y),f=U(0),t=P({name:"",points:0,gameName:"",armyTypeName:"",units:[]});async function A(){r.value=!0;const o=await T.updateUserArmy(_.params.id,t.name,t.points);if(r.value=!1,o){w.error(o);return}w.success("successfully updated army!"),N.push("/user-armies")}async function C(){r.value=!0,await V(),r.value=!1}async function V(){y.loading=!0;const[o,l]=await T.getUserArmy(_.params.id);if(l){w.error(l);return}const s=o;for(let d=0;d<s.units.length;d++)f.value+=Number(s.units[d].points);t.name=s.name,t.points=Number(s.points),t.gameName=s.gameName,t.armyTypeName=s.armyTypeName,t.units=s.units,y.loading=!1}async function B(){N.push(`/user-armies/edit/${_.params.id}/add-unit`)}j(async()=>{await V()});const D=U([{key:"compositionTypeName",dataKey:"unitType.compositionTypeName",width:300,title:"Type"},{key:"name",dataKey:"unitType.name",width:300,title:"Unit Name"},{key:"points",dataKey:"points",width:80,title:"Points"},{key:"troopTypeName",dataKey:"unitType.troopTypeName",width:300,title:"Troop Type"},{dataKey:"id",width:200,fixed:J.RIGHT,title:"Options",cellRenderer:o=>e(Q,null,[e(x,{underline:!1,icon:O,href:`/user-armies/edit/${_.params.id}/unit/${o.cellData}`},{default:()=>[i("Edit")]}),e(x,{style:"padding-left:10px",underline:!1,icon:q,href:`/user-armies/unit/destroy/${o.cellData}`},{default:()=>[i("Delete")]})])}]);return(o,l)=>{const s=ee,d=te,b=ae,m=le,u=se,R=ne,S=oe,K=ie,F=re,I=ue,E=de;return k(),W("div",pe,[e(d,{separator:"/"},{default:a(()=>[e(s,{to:{path:"/"}},{default:a(()=>[i("Homepage")]),_:1}),e(s,{to:{path:"/user-armies"}},{default:a(()=>[i("User Armies")]),_:1}),e(s,null,{default:a(()=>[i("Edit "+X(t.name),1)]),_:1})]),_:1}),ce,_e,e(K,{class:"row-bg",justify:"space-between"},{default:a(()=>[e(b,{span:4}),e(b,{span:10},{default:a(()=>[e(S,null,{default:a(()=>[g((k(),Y(R,{model:t,"label-width":"auto",style:{"max-height":"600px"}},{default:a(()=>[e(u,{label:"Army Name"},{default:a(()=>[e(m,{modelValue:t.name,"onUpdate:modelValue":l[0]||(l[0]=n=>t.name=n)},null,8,["modelValue"])]),_:1}),e(u,{label:"Game"},{default:a(()=>[e(m,{modelValue:t.gameName,"onUpdate:modelValue":l[1]||(l[1]=n=>t.gameName=n),disabled:""},null,8,["modelValue"])]),_:1}),e(u,{label:"Army Type"},{default:a(()=>[e(m,{modelValue:t.armyTypeName,"onUpdate:modelValue":l[2]||(l[2]=n=>t.armyTypeName=n),disabled:""},null,8,["modelValue"])]),_:1}),e(u,{label:"Max Points"},{default:a(()=>[e(m,{modelValue:t.points,"onUpdate:modelValue":l[3]||(l[3]=n=>t.points=n),type:"number"},null,8,["modelValue"])]),_:1}),e(u,{label:"Used Points"},{default:a(()=>[e(m,{modelValue:f.value,"onUpdate:modelValue":l[4]||(l[4]=n=>f.value=n),type:"number",disabled:""},null,8,["modelValue"])]),_:1}),e(u,null,{default:a(()=>[e(p(v),{type:"primary",onClick:h(A,["prevent"])},{default:a(()=>[i("Save")]),_:1}),e(p(v),{type:"success",onClick:h(B,["prevent"])},{default:a(()=>[i("Add Unit")]),_:1}),e(p(v),{type:"warning",onClick:h(C,["prevent"])},{default:a(()=>[i("Reset")]),_:1})]),_:1})]),_:1},8,["model"])),[[E,p(r)]])]),_:1})]),_:1}),e(b,{span:4})]),_:1}),ye,fe,g(c("div",be,[e(I,null,{default:a(({height:n,width:M})=>[g(e(F,{columns:D.value,data:t.units,width:M,height:n,fixed:""},null,8,["columns","data","width","height"]),[[E,p(r)]])]),_:1})],512),[[Z,t.units.length>0]])])}}});export{Ce as default};