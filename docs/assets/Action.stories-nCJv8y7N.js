import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as q}from"./iframe-Tpun563n.js";import{C as E}from"./ConfirmationModal-C144KIB9.js";import{F as M,a as w,b as A}from"./index-D9Gf7a3-.js";import{G as O}from"./iconBase-CA661TZV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cx4OSf9n.js";import"./index-DRXdYiCI.js";import"./Button-DWWBYly0.js";const I=({title:i,isDestructive:u=!1,onClick:c,className:N,modalHeading:_="Are you sure?",modalText:b,Icon:j})=>{const[F,l]=q.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:u?()=>l(!0):c,title:i,className:`hover:cursor-pointer hover:bg-slate-800 hover:outline-slate-800 bg-slate-800 transition-colors duration-200 h-full rounded outline-1 outline-slate-500 flex justify-center items-center w-16 ${u?"text-red-300":"text-blue-400"} ${N}`,children:e.jsx(j,{})}),F&&c&&e.jsx(E,{onCancel:()=>l(!1),onClose:()=>l(!1),onConfirm:c,heading:_,text:b})]})};I.__docgenInfo={description:"",methods:[],displayName:"Action",props:{title:{required:!0,tsType:{name:"string"},description:""},isDestructive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},modalHeading:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Are you sure?'",computed:!1}},modalText:{required:!1,tsType:{name:"string"},description:""},Icon:{required:!0,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""}}};function L(i){return O({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.06 13a9 9 0 1 0 .49 -4.087"},child:[]},{tag:"path",attr:{d:"M3 4.001v5h5"},child:[]},{tag:"path",attr:{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]}]})(i)}const{fn:n}=__STORYBOOK_MODULE_TEST__,Y={title:"Shared/Action",component:I,args:{title:"Save",isDestructive:!1,onClick:n(),className:"text-2xl py-2.5",Icon:M},parameters:{layout:"centered"}},t={},r={},s={args:{title:"Close",onClick:n(),className:"text-2xl text-slate-400 py-2.5",Icon:w}},a={args:{title:"Restore",onClick:n(),className:"text-2xl py-2.5",Icon:L}},o={args:{title:"Delete",isDestructive:!0,onClick:n(),className:"text-lg py-3.25",Icon:A}};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var f,g,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,y,C;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Close',
    onClick: fn(),
    className: 'text-2xl text-slate-400 py-2.5',
    Icon: FaXmark
  }
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var v,T,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Restore',
    onClick: fn(),
    className: 'text-2xl py-2.5',
    Icon: TbRestore
  }
}`,...(S=(T=a.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var k,R,D;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Delete',
    isDestructive: true,
    onClick: fn(),
    className: 'text-lg py-3.25',
    Icon: FaRegTrashCan
  }
}`,...(D=(R=o.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};const z=["Default","Save","Close","Restore","Destructive"];export{s as Close,t as Default,o as Destructive,a as Restore,r as Save,z as __namedExportsOrder,Y as default};
