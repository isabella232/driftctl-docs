"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6185],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88781:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={id:"authentication",title:"Authentication"},u=void 0,s={unversionedId:"providers/azure/authentication",id:"version-0.26.0/providers/azure/authentication",title:"Authentication",description:"To use driftctl, we need credentials to make authenticated requests to your Azure account.",source:"@site/versioned_docs/version-0.26.0/providers/azure/authentication.mdx",sourceDirName:"providers/azure",slug:"/providers/azure/authentication",permalink:"/0.26.0/providers/azure/authentication",editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.26.0/providers/azure/authentication.mdx",tags:[],version:"0.26.0",frontMatter:{id:"authentication",title:"Authentication"},sidebar:"version-0.26.0/docs",previous:{title:"Supported Resources",permalink:"/0.26.0/providers/google/resources"},next:{title:"Supported Resources",permalink:"/0.26.0/providers/azure/resources"}},l={},p=[{value:"Least privileged policy",id:"least-privileged-policy",level:2}],d={toc:p};function f(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To use driftctl, we need credentials to make authenticated requests to your Azure account.\nWe retrieve configuration from ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/developer/go/azure-sdk-authorization#use-environment-based-authentication"},"environment variables"),"."),(0,a.kt)("p",null,"You can check the ",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs#authenticating-to-azure"},"Terraform documentation")," for a guide to configure Azure authentication."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Here we use a service principal account with a client secret\n$ AZURE_SUBSCRIPTION_ID=00000000-0000-0000-0000-000000000000\\\n  AZURE_TENANT_ID=00000000-0000-0000-0000-000000000000\\\n  AZURE_CLIENT_ID=00000000-0000-0000-0000-000000000000\\\n  AZURE_CLIENT_SECRET=password\\\n  driftctl scan --to azure+tf\n")),(0,a.kt)("p",null,"You can also authenticate using ",(0,a.kt)("strong",{parentName:"p"},"az CLI"),". In that case you will only have ",(0,a.kt)("inlineCode",{parentName:"p"},"AZURE_SUBSCRIPTION_ID")," to specify:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ AZURE_SUBSCRIPTION_ID=00000000-0000-0000-0000-000000000000\\\n  driftctl scan --to azure+tf\n")),(0,a.kt)("h2",{id:"least-privileged-policy"},"Least privileged policy"),(0,a.kt)("p",null,"driftctl needs to have read only access to your account, if you want to scan your whole Azure account you can set up the ",(0,a.kt)("strong",{parentName:"p"},"Reader")," role on your subscription."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"auth",src:r(70127).Z,width:"1214",height:"604"})),(0,a.kt)("p",null,"You may want to scan only a resource group, you can assign ",(0,a.kt)("strong",{parentName:"p"},"Reader")," role only on some restricted resources groups too."))}f.isMDXComponent=!0},70127:function(e,t,r){t.Z=r.p+"assets/images/auth-d38df6fe7a4318ec9ebf82d0e5f9edae.png"}}]);