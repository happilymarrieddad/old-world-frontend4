import{f as v,u as k,s as A,r as l,F as i,a as e,m as d,n as E,d as a,U as T,p as N,g as D,o as I,c as K,w as s,b as m,h as R,i as B,j as U,e as V,E as G,k as H,l as S,v as F}from"./index-BQqGihlM.js";/* empty css                   *//* empty css                    *//* empty css                     *//* empty css                           *//* empty css                */import{u as z}from"./userArmies-DetI65OZ.js";import"./timestamp_pb-CTfFuloM.js";const C={class:"user-armies-list"},L=m("br",null,null,-1),M={style:{height:"1000px"}},Y=v({__name:"IndexView",setup($){const c=k(),u=z(),{loading:_}=A(c),o=l([]),p=l([{key:"name",dataKey:"name",width:300,title:"Name"},{key:"gameName",dataKey:"gameName",width:200,title:"Game"},{key:"armyTypeName",dataKey:"armyTypeName",width:200,title:"Army Type"},{key:"id",dataKey:"id",width:280,fixed:i.RIGHT,title:"ID"},{key:"points",dataKey:"points",width:80,fixed:i.RIGHT,title:"Points"},{dataKey:"id",width:200,fixed:i.RIGHT,title:"Options",cellRenderer:t=>e(N,null,[e(d,{underline:!1,icon:E,href:`/user-armies/edit/${t.cellData}`},{default:()=>[a("Edit")]}),e(d,{class:"btn-padding-left",underline:!1,icon:T,href:`/user-armies/detroy/${t.cellData}`,disabled:!0},{default:()=>[a("Delete")]})])}]);async function f(){const[t,,r]=await u.getUserArmies(999,0);if(r){U.error(r);return}o.value=t}return D(async()=>{await f()}),(t,r)=>{const n=V,h=G,y=H,g=S,w=F;return I(),K("div",C,[e(h,{separator:"/"},{default:s(()=>[e(n,{to:{path:"/"}},{default:s(()=>[a("Homepage")]),_:1}),e(n,null,{default:s(()=>[a("User Armies")]),_:1})]),_:1}),L,m("div",M,[e(g,null,{default:s(({height:b,width:x})=>[R(e(y,{columns:p.value,data:o.value,width:x,height:b,fixed:""},null,8,["columns","data","width","height"]),[[w,B(_)]])]),_:1})])])}}});export{Y as default};
