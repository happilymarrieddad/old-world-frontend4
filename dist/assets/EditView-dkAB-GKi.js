import{f as u,z as _,r as d,g as l,j as i,o as y,c as f,a as t,w as a,d as s,A as b,e as E,E as T}from"./index-DuBop9t4.js";/* empty css                           */import{u as g}from"./armyTypes-XZXiAt3J.js";import"./timestamp_pb-DtOAgJG7.js";const h={class:"army-types-edit"},S=u({__name:"EditView",setup(w){const m=g(),c=_(),o=d("");return l(async()=>{const[n,r]=await m.getArmyType(c.params.id);if(r){i.error(r);return}const e=n;o.value=e.name}),(n,r)=>{const e=E,p=T;return y(),f("div",h,[t(p,{separator:"/"},{default:a(()=>[t(e,{to:{path:"/"}},{default:a(()=>[s("Homepage")]),_:1}),t(e,{to:{path:"/army-types"}},{default:a(()=>[s("Army Types")]),_:1}),t(e,null,{default:a(()=>[s(b(o.value),1)]),_:1})]),_:1})])}}});export{S as default};