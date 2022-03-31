"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5644],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return p}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(t),p=i,g=f["".concat(u,".").concat(p)]||f[p]||d[p]||o;return t?n.createElement(g,a(a({ref:r},s),{},{components:t})):n.createElement(g,a({ref:r},s))}));function p(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},16206:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],l={id:"driftignore",title:".driftignore"},u=void 0,c={unversionedId:"usage/filtering/driftignore",id:"version-0.26.0/usage/filtering/driftignore",isDocsHomePage:!1,title:".driftignore",description:".driftignore is a simple way to ignore resources, you put resources in a .driftignore file like a .gitignore.",source:"@site/versioned_docs/version-0.26.0/usage/filtering/driftignore.mdx",sourceDirName:"usage/filtering",slug:"/usage/filtering/driftignore",permalink:"/0.26.0/usage/filtering/driftignore",editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.26.0/usage/filtering/driftignore.mdx",tags:[],version:"0.26.0",frontMatter:{id:"driftignore",title:".driftignore"},sidebar:"version-0.26.0/docs",previous:{title:"Disable telemetry",permalink:"/0.26.0/usage/flags/disable-telemetry"},next:{title:"Filter Rules",permalink:"/0.26.0/usage/filtering/rules"}},s=[{value:"Examples",id:"examples",children:[],level:3},{value:"Precedence over filter rules",id:"precedence-over-filter-rules",children:[],level:2},{value:"Automatically generate a driftignore file",id:"automatically-generate-a-driftignore-file",children:[],level:2}],d={toc:s};function f(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},".driftignore")," is a simple way to ignore resources, you put resources in a ",(0,o.kt)("inlineCode",{parentName:"p"},".driftignore")," file like a ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore"),"."),(0,o.kt)("p",null,"If you need only to exclude a set of resources you should use .driftignore, if you need something more advanced, check filter rules."),(0,o.kt)("p",null,"Create the .driftignore file where you launch driftctl (usually the root of your IaC repo)."),(0,o.kt)("p",null,"Each line must be of kind"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resource_type.resource_id"),", resource_id could be a wildcard to exclude all resources of a given type."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resource_type.resource_id.path.to.field_name"),", resource_id can be wildcard to ignore a drift on given field for a given type, path could also contain wildcards.")),(0,o.kt)("p",null,"The .driftignore file also supports negation of rules. This way you could ignore everything except certain types."),(0,o.kt)("p",null,"For example, if you want to ignore everything but IAM drifts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ignore"},"*\n!aws_iam_*\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ignore"},"# Will ignore S3 bucket called my-bucket\naws_s3_bucket.my-bucket\n# Will ignore every aws_instance resource\naws_instance.*\n# Will ignore environment for all lambda functions\naws_lambda_function.*.environment\n# Will ignore resources like aws_iam_role.AmazonSSMRoleForInstances and aws_iam_role.AWSServiceRoleForAmazonSSM\n*role.*Amazon*\n# Will ignore lastModified for my-lambda-name lambda function\naws_lambda_function.my-lambda-name.last_modified\n")),(0,o.kt)("h2",{id:"precedence-over-filter-rules"},"Precedence over filter rules"),(0,o.kt)("p",null,"The above mechanism to ignore resources can be used in combination with filter rules. Bear in mind that if the same resource is included by a filter rule and excluded inside the .driftignore file, driftctl will just ignore this resource."),(0,o.kt)("h2",{id:"automatically-generate-a-driftignore-file"},"Automatically generate a driftignore file"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"../cmd/gen-driftignore-usage"},"driftignore generator command"),"."))}f.isMDXComponent=!0}}]);