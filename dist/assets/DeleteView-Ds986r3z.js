import{u as r}from"./unitTypes-Ba72F2s1.js";import{g as a,I as u,h as c,m as i,t,o as p,c as m,b as _}from"./index-NHNacFVT.js";import"./types_pb-CjsPfOES.js";import"./timestamp_pb-DpX4yl5v.js";const d={class:"unit-type-destroy"},l=_("span",null,"Removing unit type...",-1),y=[l],S=a({__name:"DeleteView",setup(f){const s=u(),o=c(),n=r();return i(async()=>{const e=await n.destroyUnitType(s.params.id);if(e){t.error(e);return}t.success("Successfully removed unit type"),o.push("/unit-types")}),(e,h)=>(p(),m("div",d,y))}});export{S as default};
