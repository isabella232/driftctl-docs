"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83358],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},81784:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"disable-telemetry",title:"Disable telemetry"},s=void 0,c={unversionedId:"usage/flags/disable-telemetry",id:"version-0.33.0/usage/flags/disable-telemetry",title:"Disable telemetry",description:"By default, driftctl sends telemetry data to help us improve the product.",source:"@site/versioned_docs/version-0.33.0/usage/flags/disable-telemetry.mdx",sourceDirName:"usage/flags",slug:"/usage/flags/disable-telemetry",permalink:"/0.33.0/usage/flags/disable-telemetry",editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.33.0/usage/flags/disable-telemetry.mdx",tags:[],version:"0.33.0",frontMatter:{id:"disable-telemetry",title:"Disable telemetry"},sidebar:"docs",previous:{title:"Version Check",permalink:"/0.33.0/usage/flags/version-check"},next:{title:".driftignore",permalink:"/0.33.0/usage/filtering/driftignore"}},u={},p=[],f={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, driftctl sends telemetry data to help us improve the product.\nYou can find below a sample of what data are collected by driftctl."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "version": "0.7.1",\n    "os": "linux",\n    "arch": "amd64",\n    "total_resources": 100,\n    "total_managed": 10,\n    "duration": 300, // analysis time in seconds\n    "provider_name": "aws"\n}\n')),(0,o.kt)("p",null,"To disable this behavior, either use the flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--disable-telemetry")," or define the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"DCTL_DISABLE_TELEMETRY=true"),"."))}d.isMDXComponent=!0}}]);