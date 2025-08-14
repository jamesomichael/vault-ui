import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-Tpun563n.js";import{F as t}from"./Field-DyxFJOzd.js";import"./preload-helper-Dp1pzeXC.js";import"./PasswordGenerator-BYvMhYJP.js";import"./index-Cx4OSf9n.js";import"./index-DRXdYiCI.js";import"./index-D9Gf7a3-.js";import"./iconBase-CA661TZV.js";const i=({className:s,children:l})=>e.jsx("div",{className:`w-full bg-slate-700 rounded flex flex-col divide-y-[1px] divide-slate-500 ${s}`,children:l});i.__docgenInfo={description:"",methods:[],displayName:"FieldGroup",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const O={title:"Shared/FieldGroup",component:i,args:{},parameters:{layout:"centered"}},d={render:s=>{const[l,p]=r.useState("p455w0rd123");return e.jsxs(i,{...s,children:[e.jsx(t,{type:"text",label:"Text Field Label",value:"Sample text",isEditable:!1}),e.jsx(t,{type:"text",label:"Password Field Label",value:l,isPassword:!0,isEditable:!1,shouldMask:!0,canCopy:!0,onPasswordGeneration:n=>p(n)}),e.jsx(t,{type:"text",label:"Link Field Label",value:"https://jamesmichael.dev/projects/vault",isEditable:!1,canCopy:!0,isUri:!0}),e.jsx(t,{type:"checkbox",label:"Checkbox Field Label",value:!1,isEditable:!1}),e.jsx(t,{type:"dropdown",label:"Dropdown Field Label",dropdownOptions:[{id:"1",label:"Option 1"}],isEditable:!1})]})}},o={render:s=>{const[l,p]=r.useState("Sample text"),[n,F]=r.useState("p455w0rd123"),[h,v]=r.useState("https://jamesmichael.dev/projects/vault"),[y,k]=r.useState(!1);return e.jsxs(i,{...s,children:[e.jsx(t,{type:"text",label:"Text Field Label",value:l,isEditable:!0,onChange:a=>p(a.target.value)}),e.jsx(t,{type:"text",label:"Password Field Label",value:n,isPassword:!0,isEditable:!1,shouldMask:!0,onPasswordGeneration:a=>F(a)}),e.jsx(t,{type:"text",label:"Link Field Label",value:h,isEditable:!0,onChange:a=>v(a.target.value),isUri:!0}),e.jsx(t,{type:"checkbox",label:"Checkbox Field Label",value:y,isEditable:!0,onChange:()=>k(a=>!a)}),e.jsx(t,{type:"dropdown",label:"Dropdown Field Label",dropdownOptions:[{id:"1",label:"Option 1"}],isEditable:!0})]})}};var u,c,b;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const [password, setPassword] = useState('p455w0rd123');
    return <FieldGroup {...args}>
                <Field type="text" label="Text Field Label" value="Sample text" isEditable={false} />
                <Field type="text" label="Password Field Label" value={password} isPassword={true} isEditable={false} shouldMask={true} canCopy={true} onPasswordGeneration={value => setPassword(value)} />
                <Field type="text" label="Link Field Label" value="https://jamesmichael.dev/projects/vault" isEditable={false} canCopy={true} isUri={true} />
                <Field type="checkbox" label="Checkbox Field Label" value={false} isEditable={false} />
                <Field type="dropdown" label="Dropdown Field Label" dropdownOptions={[{
        id: '1',
        label: 'Option 1'
      }]} isEditable={false} />
            </FieldGroup>;
  }
}`,...(b=(c=d.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var x,m,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [text, setText] = useState('Sample text');
    const [password, setPassword] = useState('p455w0rd123');
    const [link, setLink] = useState('https://jamesmichael.dev/projects/vault');
    const [checked, setChecked] = useState(false);
    return <FieldGroup {...args}>
                <Field type="text" label="Text Field Label" value={text} isEditable={true} onChange={e => setText(e.target.value)} />
                <Field type="text" label="Password Field Label" value={password} isPassword={true} isEditable={false} shouldMask={true} onPasswordGeneration={value => setPassword(value)} />
                <Field type="text" label="Link Field Label" value={link} isEditable={true} onChange={e => setLink(e.target.value)} isUri={true} />
                <Field type="checkbox" label="Checkbox Field Label" value={checked} isEditable={true} onChange={() => setChecked(prev => !prev)} />
                <Field type="dropdown" label="Dropdown Field Label" dropdownOptions={[{
        id: '1',
        label: 'Option 1'
      }]} isEditable={true} />
            </FieldGroup>;
  }
}`,...(w=(m=o.parameters)==null?void 0:m.docs)==null?void 0:w.source}}};const T=["Default","Editable"];export{d as Default,o as Editable,T as __namedExportsOrder,O as default};
