import{g as A,u as v,s as E,i as l,F as d,a as e,j as m,k,d as a,Y as N,l as T,m as D,o as B,c as K,w as s,b as c,q as R,n as V,t as I,e as S,E as U,y as z,z as F,A as G}from"./index-J7TsvYTq.js";/* empty css                   *//* empty css                *//* empty css                     *//* empty css                           */import{u as H}from"./userArmies-QQdmKWLS.js";import"./types_pb-DdFPuZq9.js";import"./timestamp_pb-Lo3uUtcO.js";const C={class:"user-armies-list"},L=c("br",null,null,-1),M={style:{height:"1000px"}},X=A({__name:"IndexView",setup($){const r=v(),u=H(),{loading:_}=E(r),o=l([]),p=l([{key:"name",dataKey:"name",width:300,title:"Name"},{key:"gameName",dataKey:"gameName",width:200,title:"Game"},{key:"armyTypeName",dataKey:"armyTypeName",width:200,title:"Army Type"},{key:"points",dataKey:"points",width:80,fixed:d.RIGHT,title:"Points"},{dataKey:"id",width:200,fixed:d.RIGHT,title:"Options",cellRenderer:t=>e(T,null,[e(m,{underline:!1,icon:k,href:`/user-armies/edit/${t.cellData}`},{default:()=>[a("Edit")]}),e(m,{class:"btn-padding-left",underline:!1,icon:N,href:`/user-armies/detroy/${t.cellData}`,disabled:!0},{default:()=>[a("Delete")]})])}]);async function f(){r.loading=!0;const[t,,i]=await u.getUserArmies(999,0);if(i){I.error(i);return}o.value=t,r.loading=!1}return D(async()=>{await f()}),(t,i)=>{const n=S,h=U,y=z,g=F,w=G;return B(),K("div",C,[e(h,{separator:"/"},{default:s(()=>[e(n,{to:{path:"/"}},{default:s(()=>[a("Homepage")]),_:1}),e(n,null,{default:s(()=>[a("User Armies")]),_:1})]),_:1}),L,c("div",M,[e(g,null,{default:s(({height:b,width:x})=>[R(e(y,{columns:p.value,data:o.value,width:x,height:b,fixed:""},null,8,["columns","data","width","height"]),[[w,V(_)]])]),_:1})])])}}});export{X as default};
