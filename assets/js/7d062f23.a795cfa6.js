"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3739],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=u(r),p=o,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||i;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},51431:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=["components"],a={id:"intro",title:"Introduction"},l=void 0,u={unversionedId:"ci_cd/intro",id:"version-0.24.0/ci_cd/intro",isDocsHomePage:!1,title:"Introduction",description:"driftctl can be viewed as a drift monitoring tool, and thus, it needs to run continuously to detect new drifts.",source:"@site/versioned_docs/version-0.24.0/ci_cd/intro.mdx",sourceDirName:"ci_cd",slug:"/ci_cd/intro",permalink:"/0.24.0/ci_cd/intro",editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.24.0/ci_cd/intro.mdx",tags:[],version:"0.24.0",frontMatter:{id:"intro",title:"Introduction"},sidebar:"version-0.24.0/docs",previous:{title:"Supported Resources",permalink:"/0.24.0/providers/azure/resources"},next:{title:"CircleCI",permalink:"/0.24.0/ci_cd/guides/circleci"}},s=[{value:"Scheduled run",id:"scheduled-run",children:[],level:2},{value:"GitOps workflow",id:"gitops-workflow",children:[],level:2}],d={toc:s};function f(e){var t=e.components,a=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"driftctl can be viewed as a drift monitoring tool, and thus, it needs to run continuously to detect new drifts.\nWe have identified two main workflows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A scheduled execution of driftctl to actively monitor drifts as they happen"),(0,i.kt)("li",{parentName:"ul"},"An integrated driftctl to secure GitOps workflow")),(0,i.kt)("h2",{id:"scheduled-run"},"Scheduled run"),(0,i.kt)("p",null,'One of the biggest problem with drifts in an IaC managed infrastructure is to be able to know where do these drifts come from and from whom.\nIt can be someone that has updated a parameter and forgot to report it to IaC code, a script that has messed up something, etc ...\nAlthough driftctl cannot identify precisely the initiator, you can catch the "when" by scheduling regularly driftctl.\nSome CI/CD systems can allow you to run scheduled jobs, driftctl team strongly advises you to run driftctl regularly to identify your drifts ASAP.'),(0,i.kt)("h2",{id:"gitops-workflow"},"GitOps workflow"),(0,i.kt)("p",null,"driftctl can be integrated in your existing GitOps flow to secure terraform operations against uncontrolled drifts.\nYou can find below an example of a typical GitOps workflow with driftctl integrated."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gitops_flow",src:r(19629).Z})))}f.isMDXComponent=!0},19629:function(e,t,r){t.Z=r.p+"assets/images/gitops_flow-5b65947feca098ed877f9103e336664a.svg"}}]);