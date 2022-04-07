"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7160],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},10792:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"usage",title:"Usage"},c=void 0,l={unversionedId:"usage",id:"version-0.16.0/usage",title:"Usage",description:"Be sure to have configured your AWS credentials.",source:"@site/versioned_docs/version-0.16.0/usage.mdx",sourceDirName:".",slug:"/usage",permalink:"/0.16.0/usage",editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.16.0/usage.mdx",tags:[],version:"0.16.0",frontMatter:{id:"usage",title:"Usage"},sidebar:"version-0.16.0/docs",previous:{title:"Installation",permalink:"/0.16.0/installation"},next:{title:"Limitations",permalink:"/0.16.0/limitations"}},u={},f=[],p={toc:f};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Be sure to have ",(0,o.kt)("a",{parentName:"p",href:"/0.16.0/providers/aws/authentication"},"configured")," your AWS credentials."),(0,o.kt)("p",null,"You will need to assign ",(0,o.kt)("a",{parentName:"p",href:"/0.16.0/providers/aws/authentication#least-privileged-policy"},"proper permissions")," to allow driftctl to scan your account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# With a local state\n$ driftctl scan\n# Same as\n$ driftctl scan --from tfstate://terraform.tfstate\n\n# To specify AWS credentials\n$ AWS_ACCESS_KEY_ID=XXX AWS_SECRET_ACCESS_KEY=XXX driftctl scan\n# or using a named profile\n$ AWS_PROFILE=profile_name driftctl scan\n\n# With state stored on a s3 backend\n$ driftctl scan --from tfstate+s3://my-bucket/path/to/state.tfstate\n\n# With multiple states\n$ driftctl scan --from tfstate://terraform_S3.tfstate --from tfstate://terraform_VPC.tfstate\n\n# Using glob pattern\n$ driftctl scan --from tfstate://path/to/**/*.tfstate\n$ driftctl scan --from tfstate+s3://path/to/**/*.tfstate\n")))}d.isMDXComponent=!0}}]);