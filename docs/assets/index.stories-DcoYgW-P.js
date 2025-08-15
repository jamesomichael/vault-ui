import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as q}from"./iframe-CVqW8VMx.js";import{C as E}from"./index-BQ3whIiS.js";import{a as F,b as M,c as w}from"./index-CcZXiyJG.js";import{G as A}from"./iconBase-DnTq6LQx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D4gg8Lg9.js";import"./index-HuNf0_pR.js";import"./index-DWWBYly0.js";const D=({title:t,isDestructive:c=!1,onClick:i,className:j,modalHeading:I="Are you sure?",modalText:_,Icon:b})=>{const[k,l]=q.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:c?()=>l(!0):i,title:t,className:`hover:cursor-pointer hover:bg-slate-800 hover:outline-slate-800 bg-slate-800 transition-colors duration-200 h-full rounded outline-1 outline-slate-500 flex justify-center items-center w-16 ${c?"text-red-300":"text-blue-400"} ${j}`,children:e.jsx(b,{})}),k&&i&&e.jsx(E,{onCancel:()=>l(!1),onClose:()=>l(!1),onConfirm:i,heading:I,text:_})]})};D.__docgenInfo={description:"",methods:[],displayName:"Action",props:{title:{required:!0,tsType:{name:"string"},description:""},isDestructive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},modalHeading:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Are you sure?'",computed:!1}},modalText:{required:!1,tsType:{name:"string"},description:""},Icon:{required:!0,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""}}};function O(t){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.06 13a9 9 0 1 0 .49 -4.087"},child:[]},{tag:"path",attr:{d:"M3 4.001v5h5"},child:[]},{tag:"path",attr:{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]}]})(t)}const{fn:L}=__STORYBOOK_MODULE_TEST__,Y={title:"Shared/Action",component:D,args:{title:"Action",isDestructive:!1,onClick:L(),Icon:F},parameters:{layout:"centered"},decorators:[t=>e.jsx("div",{className:"h-12",children:e.jsx(t,{})})]},r={args:{title:"Save",className:"text-2xl"}},s={args:{title:"Save",className:"text-2xl"}},a={args:{title:"Close",className:"text-2xl text-slate-400",Icon:M}},o={args:{title:"Restore",className:"text-2xl",Icon:O}},n={args:{title:"Delete",className:"text-lg",isDestructive:!0,Icon:w}};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Save',
    className: 'text-2xl'
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,g,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Save',
    className: 'text-2xl'
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,h,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Close',
    className: 'text-2xl text-slate-400',
    Icon: FaXmark
  }
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var S,T,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Restore',
    className: 'text-2xl',
    Icon: TbRestore
  }
}`,...(y=(T=o.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var N,C,R;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Delete',
    className: 'text-lg',
    isDestructive: true,
    Icon: FaRegTrashCan
  }
}`,...(R=(C=n.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const z=["Default","Save","Close","Restore","Destructive"];export{a as Close,r as Default,n as Destructive,o as Restore,s as Save,z as __namedExportsOrder,Y as default};
