import{f as F,r as S,D as p,u as G,C as I,s as A,o as f,c as j,a as e,w as t,d as n,i as D,h as H,A as L,b as g,j as l,e as M,E as T,H as $,I as q,J,K,L as P,M as U,N as W,v as z}from"./index-BPptFwra.js";/* empty css                   *//* empty css               *//* empty css                *//* empty css                 *//* empty css                           */import{u as O}from"./games-2tesK-Co.js";import"./timestamp_pb-YH_wUWDP.js";const Q={class:"games-create"},X=g("br",null,null,-1),Y=g("br",null,null,-1),me=F({__name:"CreateView",setup(Z){const m=S(),s=p({name:""}),b=p({name:[{required:!0,message:"Please input a name",trigger:"blur"},{min:3,max:100,message:"Name length should at least be 3 chars long",trigger:"blur"}]}),w=async a=>{a&&await a.validate((o,r)=>{o?y():(console.log(r),l.error("invalid form"))})},h=a=>{a&&a.resetFields()},u=G(),v=O(),E=I(),{loading:C}=A(u);async function y(){l.info("Attempting to add new game..."),u.loading=!0;const a=await v.createGame(s.name);if(a){l.error(a);return}u.loading=!1,l.success("Successfully created game"),E.push("/games")}return(a,o)=>{const r=M,k=T,c=$,x=q,d=J,_=K,B=P,N=U,V=W,R=z;return f(),j("div",Q,[e(k,{separator:"/"},{default:t(()=>[e(r,{to:{path:"/"}},{default:t(()=>[n("Homepage")]),_:1}),e(r,{to:{path:"/games"}},{default:t(()=>[n("Games")]),_:1})]),_:1}),X,Y,e(V,{class:"row-bg",justify:"space-between"},{default:t(()=>[e(c,{span:4}),e(c,{span:10},{default:t(()=>[e(N,null,{default:t(()=>[D((f(),L(B,{ref_key:"formRef",ref:m,rules:b,model:s,"label-width":"auto",style:{"max-height":"600px"},"status-icon":""},{default:t(()=>[e(d,{label:"New Game Name",prop:"name"},{default:t(()=>[e(x,{modelValue:s.name,"onUpdate:modelValue":o[0]||(o[0]=i=>s.name=i),placeholder:"Warhammer 40k 3rd Edition"},null,8,["modelValue"])]),_:1}),e(d,null,{default:t(()=>[e(_,{type:"primary",onClick:o[1]||(o[1]=i=>w(m.value))},{default:t(()=>[n("Create")]),_:1}),e(_,{onClick:o[2]||(o[2]=i=>h(m.value))},{default:t(()=>[n("Reset")]),_:1})]),_:1})]),_:1},8,["rules","model"])),[[R,H(C)]])]),_:1})]),_:1}),e(c,{span:4})]),_:1})])}}});export{me as default};