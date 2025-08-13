import{g as d}from"./iframe-BwOTLob2.js";import{r as h}from"./index-OnvU-fJQ.js";function y(i){for(var u=[],o=1;o<arguments.length;o++)u[o-1]=arguments[o];var n=Array.from(typeof i=="string"?[i]:i);n[n.length-1]=n[n.length-1].replace(/\r?\n([\t ]*)$/,"");var f=n.reduce(function(t,s){var a=s.match(/\n([\t ]+|(?!\s).)/g);return a?t.concat(a.map(function(g){var r,e;return(e=(r=g.match(/[\t ]/g))===null||r===void 0?void 0:r.length)!==null&&e!==void 0?e:0})):t},[]);if(f.length){var m=new RegExp(`
[	 ]{`+Math.min.apply(Math,f)+"}","g");n=n.map(function(t){return t.replace(m,`
`)})}n[0]=n[0].replace(/^\r?\n/,"");var c=n[0];return u.forEach(function(t,s){var a=c.match(/(?:^|\n)( *)$/),g=a?a[1]:"",r=t;typeof t=="string"&&t.includes(`
`)&&(r=String(t).split(`
`).map(function(e,p){return p===0?e:""+g+e}).join(`
`)),c+=r+n[s+1]}),c}var l=h();const E=d(l);export{E as P,y as d,l as r};
