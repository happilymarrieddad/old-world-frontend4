import{g as R,u as q,h as F,s as N,i as U,J as _,o as f,c as k,a as e,w as r,q as B,n as L,H as A,d as g,t as u,L as M,M as S,N as I,x as T,O as $,P as j,Q as D,A as H,a1 as J}from"./index-BaqprB8Q.js";/* empty css                   *//* empty css               *//* empty css                *//* empty css                  *//* empty css                 */const O={class:"register-new-user"},Z=R({__name:"RegisterView",setup(Q){const m=q(),c=F(),{loading:w}=N(m),d=U(),a=_({first_name:"",last_name:"",email:"",password:"",password_confirm:""}),b=_({first_name:[{required:!0,message:"Please provide a first name",trigger:"blur"},{min:2,max:50,message:"First name must at least be 2 chars long",trigger:"blur"}],last_name:[{required:!0,message:"Please provide a last name",trigger:"blur"},{min:2,max:50,message:"Last name must at least be 2 chars long",trigger:"blur"}],email:[{type:"email",required:!0,message:"Please provide an email",trigger:"blur"},{min:3,max:100,message:"Must be a valid email",trigger:"blur"}],password:[{required:!0,message:"Please provide a password",trigger:"blur"}],password_confirm:[{required:!0,message:"Please provide a password confirm",trigger:"blur"}]});async function V(){u.info("Attempting to register new user..."),m.loading=!0;const l=await m.createUser(new J({firstName:a.first_name,lastName:a.last_name,email:a.email,password:a.password,passwordConfirm:a.password_confirm}));if(l){m.loading=!1,u.error(l);return}m.loading=!1,u.success("Successfully registered new user. Please login."),c.push("/login")}const v=async l=>{l&&await l.validate((s,t)=>{s?(t==null?void 0:t.password)!=(t==null?void 0:t.password_confirm)?u.error("passwords must match"):V():(console.log(t),u.error("invalid form"))})},y=l=>{l&&l.resetFields()};return(l,s)=>{const t=M,i=S,n=I,p=T,x=$,C=j,P=D,E=H;return f(),k("div",O,[e(P,{class:"row-bg",justify:"space-between"},{default:r(()=>[e(t,{span:4}),e(t,{span:10},{default:r(()=>[e(C,null,{default:r(()=>[B((f(),A(x,{ref_key:"formRef",ref:d,rules:b,model:a,"label-width":"auto",style:{"max-height":"600px"},"status-icon":""},{default:r(()=>[e(n,{label:"First Name",prop:"first_name"},{default:r(()=>[e(i,{modelValue:a.first_name,"onUpdate:modelValue":s[0]||(s[0]=o=>a.first_name=o)},null,8,["modelValue"])]),_:1}),e(n,{label:"Last Name",prop:"last_name"},{default:r(()=>[e(i,{modelValue:a.last_name,"onUpdate:modelValue":s[1]||(s[1]=o=>a.last_name=o)},null,8,["modelValue"])]),_:1}),e(n,{label:"Email",prop:"email"},{default:r(()=>[e(i,{modelValue:a.email,"onUpdate:modelValue":s[2]||(s[2]=o=>a.email=o),type:"email"},null,8,["modelValue"])]),_:1}),e(n,{label:"Password",prop:"password"},{default:r(()=>[e(i,{modelValue:a.password,"onUpdate:modelValue":s[3]||(s[3]=o=>a.password=o),type:"password"},null,8,["modelValue"])]),_:1}),e(n,{label:"Password Confirm",prop:"password_confirm"},{default:r(()=>[e(i,{modelValue:a.password_confirm,"onUpdate:modelValue":s[4]||(s[4]=o=>a.password_confirm=o),type:"password"},null,8,["modelValue"])]),_:1}),e(n,null,{default:r(()=>[e(p,{type:"primary",onClick:s[5]||(s[5]=o=>v(d.value))},{default:r(()=>[g("Create")]),_:1}),e(p,{onClick:s[6]||(s[6]=o=>y(d.value))},{default:r(()=>[g("Reset")]),_:1})]),_:1})]),_:1},8,["rules","model"])),[[E,L(w)]])]),_:1})]),_:1}),e(t,{span:4})]),_:1})])}}});export{Z as default};