import{f as S,C as I,D,u as F,s as M,g as q,G as f,k as L,o as g,c as T,a as e,w as a,d as u,m as U,l as j,B as A,b,n as l,e as H,E as J,I as K,J as O,K as P,L as $,M as z,N as Q,O as W,v as X}from"./index-Bk083lMD.js";/* empty css                   *//* empty css               *//* empty css                *//* empty css                 *//* empty css                           */import{u as Y}from"./games-DAlUTQAr.js";import"./timestamp_pb-DFz3gxdW.js";const Z={class:"games-update-view"},ee=b("br",null,null,-1),ae=b("br",null,null,-1),ie=S({__name:"EditView",setup(te){const c=I(),w=D(),s=F(),i=Y(),{loading:h}=M(s),d=q(),r=f({name:""}),E=f({name:[{required:!0,message:"Please input a name",trigger:"blur"},{min:3,max:100,message:"Name length should at least be 3 chars long",trigger:"blur"}]});async function v(){s.loading=!0;const o=await i.updateGame(c.params.id,r.name);if(o){s.loading=!1,l.error(o);return}s.loading=!1,l.success("Successfully updated the game"),w.push("/games")}const y=async o=>{o&&await o.validate((t,n)=>{t?v():(console.log(n),l.error("invalid form"))})};async function G(){s.loading=!0;const[o,t]=await i.getGame(c.params.id);if(t){s.loading=!1,l.error(t);return}const n=o;r.name=n.name,s.loading=!1}return L(async()=>{await G()}),(o,t)=>{const n=H,x=J,m=K,B=O,p=P,V=$,k=z,C=Q,N=W,R=X;return g(),T("div",Z,[e(x,{separator:"/"},{default:a(()=>[e(n,{to:{path:"/"}},{default:a(()=>[u("Homepage")]),_:1}),e(n,{to:{path:"/games"}},{default:a(()=>[u("Games")]),_:1})]),_:1}),ee,ae,e(N,{class:"row-bg",justify:"space-between"},{default:a(()=>[e(m,{span:4}),e(m,{span:10},{default:a(()=>[e(C,null,{default:a(()=>[U((g(),A(k,{ref_key:"formRef",ref:d,rules:E,model:r,"label-width":"auto",style:{"max-height":"600px"},"status-icon":""},{default:a(()=>[e(p,{label:"Game Name",prop:"name"},{default:a(()=>[e(B,{modelValue:r.name,"onUpdate:modelValue":t[0]||(t[0]=_=>r.name=_),placeholder:"Game requires a name"},null,8,["modelValue"])]),_:1}),e(p,null,{default:a(()=>[e(V,{type:"primary",onClick:t[1]||(t[1]=_=>y(d.value))},{default:a(()=>[u("Update")]),_:1})]),_:1})]),_:1},8,["rules","model"])),[[R,j(h)]])]),_:1})]),_:1}),e(m,{span:4})]),_:1})])}}});export{ie as default};
