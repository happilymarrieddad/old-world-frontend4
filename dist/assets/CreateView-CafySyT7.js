import{g as A,i as b,J as v,u as L,h as U,s as H,m as O,o as c,c as y,a as e,w as a,d,q as T,n as $,H as h,l as j,C as J,b as w,t as r,e as Q,E as z,L as K,M as W,N as X,G as Y,x as Z,O as ee,P as te,Q as ae,A as se,D as oe}from"./index-NHNacFVT.js";/* empty css                   *//* empty css               *//* empty css                *//* empty css                  *//* empty css                 *//* empty css                  *//* empty css                     *//* empty css                           */import{u as le}from"./games-CajSAPuA.js";import{u as ne}from"./statistics-iwFOdJHg.js";import"./timestamp_pb-DpX4yl5v.js";const re={class:"statistics-create"},ie=w("br",null,null,-1),me=w("br",null,null,-1),Se=A({__name:"CreateView",setup(ue){const p=b(),s=v({name:"",display:"",gameId:""}),V=v({name:[{required:!0,message:"Please input a name",trigger:"change"},{min:3,max:100,message:"Name length should at least be 3 chars long",trigger:"change"}],display:[{required:!0,message:"Please input a display value",trigger:"change"},{min:1,max:100,message:"Name length should at least be 1 chars long",trigger:"change"}],gameId:[{required:!0,message:"Please select a game",trigger:"change"}]}),S=async o=>{o&&await o.validate((t,m)=>{t?k():(console.log(m),r.error("invalid form"))})},E=o=>{o&&o.resetFields()},n=L(),x=le(),C=ne(),I=U(),{loading:N}=H(n),i=b([]);async function k(){r.info("Attempting to add new statistic..."),n.loading=!0;const o=await C.createStatistic(s.name,s.display,s.gameId);if(o){r.error(o);return}n.loading=!1,r.success("Successfully created statistic"),I.push("/games/statistics")}async function B(){n.loading=!0;const[o,,t]=await x.getGames(1e3,0);if(t){r.error(t);return}i.value=o,i.value.length>0&&(s.gameId=i.value[0].id),n.loading=!1}return O(async()=>{await B()}),(o,t)=>{const m=Q,F=z,_=K,g=W,u=X,R=oe,G=Y,f=Z,M=ee,q=te,D=ae,P=se;return c(),y("div",re,[e(F,{separator:"/"},{default:a(()=>[e(m,{to:{path:"/"}},{default:a(()=>[d("Homepage")]),_:1}),e(m,{to:{path:"/statistics"}},{default:a(()=>[d("Statistics")]),_:1})]),_:1}),ie,me,e(D,{class:"row-bg",justify:"space-between"},{default:a(()=>[e(_,{span:4}),e(_,{span:10},{default:a(()=>[e(q,null,{default:a(()=>[T((c(),h(M,{ref_key:"formRef",ref:p,rules:V,model:s,"label-width":"auto",style:{"max-height":"600px"},"status-icon":""},{default:a(()=>[e(u,{label:"New Statistic Name",prop:"name"},{default:a(()=>[e(g,{modelValue:s.name,"onUpdate:modelValue":t[0]||(t[0]=l=>s.name=l),placeholder:"Movement"},null,8,["modelValue"])]),_:1}),e(u,{label:"New Statistic Display Value",prop:"display"},{default:a(()=>[e(g,{modelValue:s.display,"onUpdate:modelValue":t[1]||(t[1]=l=>s.display=l),placeholder:"M"},null,8,["modelValue"])]),_:1}),e(u,{label:"Game"},{default:a(()=>[e(G,{modelValue:s.gameId,"onUpdate:modelValue":t[2]||(t[2]=l=>s.gameId=l),placeholder:"please select a game"},{default:a(()=>[(c(!0),y(j,null,J(i.value,l=>(c(),h(R,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(u,null,{default:a(()=>[e(f,{type:"primary",onClick:t[3]||(t[3]=l=>S(p.value))},{default:a(()=>[d("Create")]),_:1}),e(f,{onClick:t[4]||(t[4]=l=>E(p.value))},{default:a(()=>[d("Reset")]),_:1})]),_:1})]),_:1},8,["rules","model"])),[[P,$(N)]])]),_:1})]),_:1}),e(_,{span:4})]),_:1})])}}});export{Se as default};
