import{f as v,u as k,s as A,g as d,F as o,a as e,h as m,i as E,d as a,X as T,j as N,k as D,o as I,c as K,w as s,b as c,m as R,l as B,n as V,e as G,E as H,q as S,t as U,v as F}from"./index-Bk083lMD.js";/* empty css                   *//* empty css                *//* empty css                     *//* empty css                           */import{u as z}from"./userArmies-B6Jglb9k.js";import"./types_pb-D0QqgM2K.js";import"./timestamp_pb-DFz3gxdW.js";const C={class:"user-armies-list"},L=c("br",null,null,-1),M={style:{height:"1000px"}},Y=v({__name:"IndexView",setup($){const i=k(),u=z(),{loading:_}=A(i),n=d([]),p=d([{key:"name",dataKey:"name",width:300,title:"Name"},{key:"gameName",dataKey:"gameName",width:200,title:"Game"},{key:"armyTypeName",dataKey:"armyTypeName",width:200,title:"Army Type"},{key:"id",dataKey:"id",width:280,fixed:o.RIGHT,title:"ID"},{key:"points",dataKey:"points",width:80,fixed:o.RIGHT,title:"Points"},{dataKey:"id",width:200,fixed:o.RIGHT,title:"Options",cellRenderer:t=>e(N,null,[e(m,{underline:!1,icon:E,href:`/user-armies/edit/${t.cellData}`},{default:()=>[a("Edit")]}),e(m,{class:"btn-padding-left",underline:!1,icon:T,href:`/user-armies/detroy/${t.cellData}`,disabled:!0},{default:()=>[a("Delete")]})])}]);async function f(){i.loading=!0;const[t,,r]=await u.getUserArmies(999,0);if(r){V.error(r);return}n.value=t,i.loading=!1}return D(async()=>{await f()}),(t,r)=>{const l=G,h=H,y=S,g=U,w=F;return I(),K("div",C,[e(h,{separator:"/"},{default:s(()=>[e(l,{to:{path:"/"}},{default:s(()=>[a("Homepage")]),_:1}),e(l,null,{default:s(()=>[a("User Armies")]),_:1})]),_:1}),L,c("div",M,[e(g,null,{default:s(({height:b,width:x})=>[R(e(y,{columns:p.value,data:n.value,width:x,height:b,fixed:""},null,8,["columns","data","width","height"]),[[w,B(_)]])]),_:1})])])}}});export{Y as default};
