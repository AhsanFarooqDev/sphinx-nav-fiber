import{f as N,T as B,j as e,F as a,C,r as s,a3 as L,h as v,z as F,D as b}from"./index-4a78cd26.js";import{B as z}from"./index-83dfab66.js";import{u as x}from"./index-999e7802.js";import{c as D,F as k,B as I,C as M}from"./react-toastify.esm-8990f63e.js";import{u as R}from"./index-e86e0b62.js";import{T as _}from"./index-1883a19d.js";import{S as A}from"./Skeleton-fd12a69e.js";import"./index.esm-2d76192c.js";import"./InfoIcon-3a7ceaf1.js";const P=()=>e.jsxs(a,{children:[e.jsx(a,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(a,{align:"center",direction:"row",children:e.jsx(V,{children:"Edit node name"})})}),e.jsx(a,{mb:12,children:e.jsx(_,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Node name",rules:{...C}})})]}),V=N(B)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,q=()=>{const{close:n}=x("editNodeName"),[h]=R(r=>[r.data]),c=D({mode:"onChange"}),{watch:j,setValue:d,reset:l}=c,[m,f]=s.useState(!1),[u,p]=s.useState(!1),[t,y]=s.useState(),o=L();s.useEffect(()=>(t&&d("name",t==null?void 0:t.name),()=>{l()}),[t,d,l]),s.useEffect(()=>{(async()=>{if(o){p(!0);try{const{data:i}=await F({search:o==null?void 0:o.name}),E=i.find(w=>w.name===o.name);y(E)}catch(i){console.error(i)}finally{p(!1)}}})()},[o]);const S=j("name"),g=()=>{n()},T=async()=>{f(!0);try{await b((t==null?void 0:t.ref_id)||"",{name:S.trim()}),g()}catch(r){console.warn(r)}finally{f(!1)}};return e.jsxs(k,{...c,children:[u?e.jsx(a,{my:24,children:e.jsx(A,{})}):e.jsx(P,{}),e.jsxs(I,{color:"secondary",disabled:m||u,onClick:T,size:"large",variant:"contained",children:["Save",m&&e.jsx(M,{color:v.BLUE_PRESS_STATE,size:10})]})]})},Y=()=>{const{close:n}=x("editNodeName");return e.jsx(z,{id:"editNodeName",kind:"regular",onClose:n,preventOutsideClose:!0,children:e.jsx(q,{})})};export{Y as EditNodeNameModal};