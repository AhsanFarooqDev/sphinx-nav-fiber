import{s as h,c as f,u as L,r as m,j as e,F as t,T as w,b as N,x as U,o as V,af as G,ae as C,d as q,a2 as J}from"./index-89a3f7cf.js";import{am as Y,B as j,an as H,l as K,u as Q,F as W}from"./react-toastify.esm-2901fbc8.js";import{B as X}from"./index-373f5dda.js";import{n as Z}from"./toastMessage-81d7d28d.js";import{u as ee}from"./index-06055e2a.js";import{h as te}from"./index.esm-fe20163c.js";import{C as oe}from"./CheckIcon-ae5ce382.js";import{C as ne}from"./ClipLoader-60d11628.js";import{T as B}from"./index-d03f8245.js";import{A as se}from"./index-7dc6833c.js";import{i as E,O as z}from"./constants-84edb5fc.js";import"./InfoIcon-e27207b6.js";import"./index-7091aae1.js";import"./Popover-6da4c580.js";import"./useSlotProps-bf7ea326.js";import"./Select-ca7cd13c.js";import"./Stack-e941519e.js";import"./Popper-502aa738.js";const ie=({onClick:n,loading:a,error:c})=>{const l=L(i=>i.budget),[p,s]=m.useState(10),d="node";return m.useEffect(()=>{(async()=>{try{const o=await H(d);s(o.data.price)}catch(o){console.error("cannot fetch",o)}})()},[d]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ce,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(re,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[p," sats"]})]}),e.jsxs(ae,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[Y(l)," sats"]})]})]}),e.jsx(t,{children:e.jsx(j,{color:"secondary","data-testid":"check-icon",disabled:a||!!c,onClick:n,size:"large",startIcon:a?e.jsx(ne,{size:24}):e.jsx(oe,{}),type:"submit",variant:"contained",children:"Approve"})}),c?e.jsxs(de,{role:"tooltip",children:[e.jsxs(le,{children:[e.jsx(te,{fontSize:13}),e.jsx("span",{children:c})]}),e.jsx("div",{className:"tooltip",children:c})]}):null]})},re=h(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${f.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${f.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${f.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,ae=h(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${f.secondaryText4};
  .title {
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`,ce=h(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,le=h(t)`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  letter-spacing: 0.2px;
  cursor: pointer;
  padding-left: 4px;
  font-size: 13px;
  font-family: Barlow;
  line-height: 18px;
  justify-content: center;

  span {
    margin-left: 4px;
  }
`,de=h(t)`
  display: flex;
  align-items: center;
  color: ${f.primaryRed};
  position: relative;
  margin-top: 20px;

  .tooltip {
    position: absolute;
    background-color: ${f.black};
    opacity: 0.8;
    border-radius: 4px;
    color: ${f.white};
    top: -10px;
    left: 335px;
    padding: 4px 8px;
    font-size: 13px;
    font-family: Barlow;
    visibility: hidden;
    width: 175px;
    z-index: 1;
  }

  &:hover .tooltip {
    visibility: visible;
  }

  &:focus .tooltip {
    visibility: visible;
  }
`,pe=({type:n,onNextStep:a,onPrevStep:c,name:l,sourceLink:p})=>{const s=n==="Image"?l&&p:l;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(me,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(w,{children:[n," name"]})}),e.jsx(t,{mb:12,children:e.jsx(B,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...N}})}),n==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(w,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(B,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...N}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(j,{color:"secondary",onClick:c,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(j,{color:"secondary",disabled:!s,onClick:a,size:"large",variant:"contained",children:"Next"})})]})]})},me=h(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,xe=({onNextStep:n,allowNextStep:a,onSelectType:c,selectedType:l})=>{const[p,s]=m.useState(E);m.useEffect(()=>{s(i=>i.value===l?i:z.find(o=>o.value===l)||E)},[l]);const d=i=>{c((i==null?void 0:i.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ue,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(se,{autoFocus:!0,onSelect:d,options:z,selectedValue:p})}),e.jsx(t,{children:e.jsx(j,{color:"secondary",disabled:!a,onClick:n,size:"large",type:"button",variant:"contained",children:"Next"})})]})},ue=h(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,fe=async(n,a,c,l)=>{var i;const p="node",s={};s.node_type=n.nodeType,s.name=n.name,n.nodeType==="Image"&&(s.node_data={source_link:n.sourceLink});let d="";await U(async()=>{const o=await q.enable();s.pubkey=o==null?void 0:o.pubkey,d=await J()});try{const o=await V.post(`/${p}`,JSON.stringify(s),{Authorization:d});if(o.error){const{message:x}=o.error;throw new Error(x)}l(n,(i=o==null?void 0:o.data)==null?void 0:i.ref_id),Z(G),a()}catch(o){let x=C;if(o.status===400){const u=await o.json();x=u.errorCode||(u==null?void 0:u.status)||C}else o instanceof Error&&(x=o.message);throw new Error(x)}},Pe=()=>{const[n,a]=m.useState(0),{close:c,visible:l}=ee("addItem"),[p]=L(r=>[r.setBudget]),s=K({mode:"onChange"}),{watch:d,setValue:i,reset:o}=s,[x,u]=m.useState(!1),[I,g]=m.useState(""),[O,P]=Q(r=>[r.addNewNode,r.setSelectedNode]);m.useEffect(()=>()=>{g(""),a(0),o()},[l,o]);const b=d("nodeType"),_=d("name"),$=d("sourceLink"),A=()=>{c()},S=()=>{a(n+1)},D=()=>{a(n-1)},F=(r,y)=>{const k=y||`new-id-${Math.random()}`,v=r.nodeType.toLocaleLowerCase(),T={name:r.name,type:v,label:r.name,node_type:v,id:k,ref_id:k,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...r.sourceLink?{source_link:r.sourceLink}:{}};O(T),P(T)},M=s.handleSubmit(async r=>{u(!0);try{await fe(r,A,p,F)}catch(y){y instanceof Error&&g(y.message),g(String(y))}finally{u(!1)}}),R=r=>i("nodeType",r);return e.jsx(X,{id:"addItem",kind:"small",onClose:c,preventOutsideClose:!0,children:e.jsx(W,{...s,children:e.jsxs("form",{id:"add-node-form",onSubmit:M,children:[n===0&&e.jsx(xe,{allowNextStep:!!b,onNextStep:S,onSelectType:R,selectedType:b}),n===1&&e.jsx(pe,{name:_,onNextStep:S,onPrevStep:D,sourceLink:$||"",type:b}),n===2&&e.jsx(ie,{error:I,loading:x,onClick:()=>null})]})})})};export{Pe as AddItemModal};