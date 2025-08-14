import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe--ID2iXmk.js";import{F as s}from"./index-aQohiLUw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Be8fuw75.js";import"./index-CX9yEnfg.js";import"./index-Du4TtU2l.js";import"./index-VFYaCa8S.js";import"./iconBase-Bf38eJjr.js";const ae={title:"Shared/Field",component:s,args:{type:"text",label:"Field"},parameters:{layout:"centered"}},n={},d={args:{type:"text",label:"Text Field Label",value:"Sample text",isEditable:!1}},i={render:e=>{const[t,a]=l.useState("Sample text");return o.jsx(s,{...e,type:"text",label:"Text Field Label",value:t,isEditable:!0,onChange:r=>a(r.target.value)})}},u={render:e=>{const[t,a]=l.useState("Sample text");return o.jsx(s,{...e,type:"text",label:"Text Field Label",value:t,isEditable:!0,canCopy:!0,onChange:r=>a(r.target.value)})}},p={args:{type:"text",label:"Text Field Label",value:"Sample text",isEditable:!1,shouldMask:!0}},c={render:e=>{const[t,a]=l.useState("p455w0rd123");return o.jsx(s,{...e,type:"text",label:"Password Field Label",value:t,isEditable:!1,isPassword:!0,shouldMask:!0,onPasswordGeneration:r=>a(r)})}},x={render:e=>{const[t,a]=l.useState("p455w0rd123");return o.jsx(s,{...e,type:"text",label:"Password Field Label",value:t,isEditable:!1,isPassword:!0,shouldMask:!0,canCopy:!0,onPasswordGeneration:r=>a(r)})}},m={args:{type:"text",label:"Link Field Label",value:"https://jamesmichael.dev/projects/vault",isEditable:!1,canCopy:!0,isUri:!0}},b={render:e=>{const[t,a]=l.useState(!0);return o.jsx(s,{...e,type:"checkbox",label:"Checkbox Field Label",value:t,isEditable:!0,onChange:()=>a(r=>!r)})}},g={args:{type:"dropdown",dropdownOptions:[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"}],isEditable:!0}};var h,v,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var S,w,T;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'text',
    label: 'Text Field Label',
    value: 'Sample text',
    isEditable: false
  }
}`,...(T=(w=d.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var E,F,k;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    const [text, setText] = useState('Sample text');
    return <Field {...args} type="text" label="Text Field Label" value={text} isEditable={true} onChange={e => setText(e.target.value)} />;
  }
}`,...(k=(F=i.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var C,L,f;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [text, setText] = useState('Sample text');
    return <Field {...args} type="text" label="Text Field Label" value={text} isEditable={true} canCopy={true} onChange={e => setText(e.target.value)} />;
  }
}`,...(f=(L=u.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var P,j,M;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    type: 'text',
    label: 'Text Field Label',
    value: 'Sample text',
    isEditable: false,
    shouldMask: true
  }
}`,...(M=(j=p.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var O,D,G;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const [text, setText] = useState('p455w0rd123');
    return <Field {...args} type="text" label="Password Field Label" value={text} isEditable={false} isPassword={true} shouldMask={true} onPasswordGeneration={value => setText(value)} />;
  }
}`,...(G=(D=c.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var W,U,_;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    const [text, setText] = useState('p455w0rd123');
    return <Field {...args} type="text" label="Password Field Label" value={text} isEditable={false} isPassword={true} shouldMask={true} canCopy={true} onPasswordGeneration={value => setText(value)} />;
  }
}`,...(_=(U=x.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var R,q,z;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: 'text',
    label: 'Link Field Label',
    value: 'https://jamesmichael.dev/projects/vault',
    isEditable: false,
    canCopy: true,
    isUri: true
  }
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var A,B,H;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(true);
    return <Field {...args} type="checkbox" label="Checkbox Field Label" value={checked} isEditable={true} onChange={() => setChecked(prev => !prev)} />;
  }
}`,...(H=(B=b.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var I,J,K;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: 'dropdown',
    dropdownOptions: [{
      id: '1',
      label: 'Option 1'
    }, {
      id: '2',
      label: 'Option 2'
    }],
    isEditable: true
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const re=["Default","Text","EditableText","EditableTextWithCopy","Masked","Password","PasswordWithCopy","Link","Checkbox","Dropdown"];export{b as Checkbox,n as Default,g as Dropdown,i as EditableText,u as EditableTextWithCopy,m as Link,p as Masked,c as Password,x as PasswordWithCopy,d as Text,re as __namedExportsOrder,ae as default};
