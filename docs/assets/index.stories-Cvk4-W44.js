import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./iframe-CVqW8VMx.js";import"./preload-helper-Dp1pzeXC.js";const u=({placeholder:t,type:e="text",value:a,onChange:r,disabled:T=!1,autoFocus:b=!1,autoComplete:y,required:q=!1,minLength:E})=>{const C=e==="password";return l.jsx("input",{autoFocus:b,autoComplete:y,required:q,type:e,disabled:T,value:a,onChange:r,placeholder:t,minLength:E,className:`w-full rounded-lg outline-1 outline-slate-400 text-slate-200 placeholder-slate-400 focus:outline-2 focus:outline-blue-400 hover:outline-blue-400 text-xs sm:text-sm h-10 px-3 py-2 ${C?"placeholder:font-hubot":"font-hubot"}`})};u.__docgenInfo={description:"",methods:[],displayName:"Input",props:{placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoComplete:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},minLength:{required:!1,tsType:{name:"number"},description:""}}};const j={title:"Shared/Input",component:u,args:{placeholder:"Enter text here",type:"text"},parameters:{layout:"centered"}},s={render:t=>{const[e,a]=v.useState("");return l.jsx(u,{...t,value:e,onChange:r=>a(r.target.value)})}},n={render:t=>{const[e,a]=v.useState("");return l.jsx(u,{...t,value:e,autoFocus:!0,onChange:r=>a(r.target.value)})}},o={args:{disabled:!0,placeholder:"Disabled"}};var d,p,i;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [text, setText] = useState('');
    return <Input {...args} value={text} onChange={e => setText(e.target.value)} />;
  }
}`,...(i=(p=s.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var c,m,f;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [text, setText] = useState('');
    return <Input {...args} value={text} autoFocus={true} onChange={e => setText(e.target.value)} />;
  }
}`,...(f=(m=n.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,x,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled'
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const w=["Default","AutoFocus","Disabled"];export{n as AutoFocus,s as Default,o as Disabled,w as __namedExportsOrder,j as default};
