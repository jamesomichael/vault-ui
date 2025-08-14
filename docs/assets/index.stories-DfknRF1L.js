import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as q}from"./iframe--ID2iXmk.js";import{F as E,a as w,b as M}from"./index-VFYaCa8S.js";import{G as A}from"./iconBase-Bf38eJjr.js";import"./preload-helper-Dp1pzeXC.js";const u=({title:c,isDestructive:d=!1,onClick:i,className:N,modalHeading:_="Are you sure?",modalText:b,Icon:j})=>{const[F,l]=q.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:d?()=>l(!0):i,title:c,className:`hover:cursor-pointer hover:bg-slate-800 hover:outline-slate-800 bg-slate-800 transition-colors duration-200 h-full rounded outline-1 outline-slate-500 flex justify-center items-center w-16 ${d?"text-red-300":"text-blue-400"} ${N}`,children:e.jsx(j,{})}),F&&i&&e.jsx(u,{onCancel:()=>l(!1),onClose:()=>l(!1),onConfirm:i,heading:_,text:b})]})};u.__docgenInfo={description:"",methods:[],displayName:"Action",props:{title:{required:!0,tsType:{name:"string"},description:""},isDestructive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},modalHeading:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Are you sure?'",computed:!1}},modalText:{required:!1,tsType:{name:"string"},description:""},Icon:{required:!0,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""}}};function O(c){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.06 13a9 9 0 1 0 .49 -4.087"},child:[]},{tag:"path",attr:{d:"M3 4.001v5h5"},child:[]},{tag:"path",attr:{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]}]})(c)}const{fn:n}=__STORYBOOK_MODULE_TEST__,$={title:"Shared/Action",component:u,args:{title:"Save",isDestructive:!1,onClick:n(),className:"text-2xl py-2.5",Icon:E},parameters:{layout:"centered"}},t={},r={},s={args:{title:"Close",onClick:n(),className:"text-2xl text-slate-400 py-2.5",Icon:w}},a={args:{title:"Restore",onClick:n(),className:"text-2xl py-2.5",Icon:O}},o={args:{title:"Delete",isDestructive:!0,onClick:n(),className:"text-lg py-3.25",Icon:M}};var p,m,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,x,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,v,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Close',
    onClick: fn(),
    className: 'text-2xl text-slate-400 py-2.5',
    Icon: FaXmark
  }
}`,...(C=(v=s.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var T,S,k;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Restore',
    onClick: fn(),
    className: 'text-2xl py-2.5',
    Icon: TbRestore
  }
}`,...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var R,D,I;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Delete',
    isDestructive: true,
    onClick: fn(),
    className: 'text-lg py-3.25',
    Icon: FaRegTrashCan
  }
}`,...(I=(D=o.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const H=["Default","Save","Close","Restore","Destructive"];export{s as Close,t as Default,o as Destructive,a as Restore,r as Save,H as __namedExportsOrder,$ as default};
