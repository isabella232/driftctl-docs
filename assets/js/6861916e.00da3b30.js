"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9654],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},21332:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},15051:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(87462),a=n(67294),l=n(72389),i=n(18578);var o=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(76419),u=n(86010),c="tabItem_4B5k";function d(e){var t,n,r,l=e.lazy,i=e.block,d=e.defaultValue,p=e.values,f=e.groupId,m=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:k.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,s.lx)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=k[0])?void 0:r.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=o(),b=h.tabGroupChoices,C=h.setTabGroupChoices,w=(0,a.useState)(y),S=w[0],A=w[1],E=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var N=b[f];null!=N&&N!==S&&g.some((function(e){return e.value===N}))&&A(N)}var X=function(e){var t=e.currentTarget,n=E.indexOf(t),r=g[n].value;r!==S&&(x(t),A(r),null!=f&&C(f,r))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},m)},g.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":S===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:T,onFocus:X,onClick:X},null!=n?n:t)}))),l?(0,a.cloneElement)(k.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function p(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},18578:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},50491:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=n(15051),o=n(21332),s=["components"],u={id:"installation",title:"Installation"},c=void 0,d={unversionedId:"installation",id:"version-0.25.0/installation",isDocsHomePage:!1,title:"Installation",description:"driftctl is available on Linux, macOS and Windows.",source:"@site/versioned_docs/version-0.25.0/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/0.25.0/installation",editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.25.0/installation.mdx",tags:[],version:"0.25.0",frontMatter:{id:"installation",title:"Installation"},sidebar:"version-0.25.0/docs",previous:{title:"What is driftctl?",permalink:"/0.25.0/"},next:{title:"Usage",permalink:"/0.25.0/usage"}},p=[{value:"Verify digital signatures",id:"verify-digital-signatures",children:[],level:2},{value:"driftctl Current PGP Public Key",id:"driftctl-current-pgp-public-key",children:[],level:2},{value:"Usage examples",id:"usage-examples",children:[],level:2}],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"driftctl is available on Linux, macOS and Windows."),(0,l.kt)("p",null,"Binaries are available in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/snyk/driftctl/releases"},"release page"),"."),(0,l.kt)(i.Z,{defaultValue:"manual",values:[{label:"Manual",value:"manual"},{label:"Docker",value:"docker"},{label:"Homebrew",value:"homebrew"},{label:"Macports",value:"macports"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"manual",mdxType:"TabItem"},(0,l.kt)(i.Z,{defaultValue:"linux-macos",values:[{label:"Linux / macOS",value:"linux-macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"linux-macos",mdxType:"TabItem"},(0,l.kt)("p",null,"This is an example using ",(0,l.kt)("inlineCode",{parentName:"p"},"curl"),". If you don't have ",(0,l.kt)("inlineCode",{parentName:"p"},"curl"),", install it, or use ",(0,l.kt)("inlineCode",{parentName:"p"},"wget"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Linux\n# x64\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_linux_amd64 -o driftctl\n\n# x86\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_linux_386 -o driftctl\n\n# macOS\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_darwin_amd64 -o driftctl\n")),(0,l.kt)("p",null,"Make the binary executable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ chmod +x driftctl\n")),(0,l.kt)("p",null,"Optionally install driftctl to a central location in your ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# use any path that suits you, this is just a standard example. Install sudo if needed.\n$ sudo mv driftctl /usr/local/bin/\n")),(0,l.kt)("h2",{id:"verify-digital-signatures"},"Verify digital signatures"),(0,l.kt)("p",null,"driftctl releases are signed using PGP key (ed25519) with ID ",(0,l.kt)("inlineCode",{parentName:"p"},"ACC776A79C824EBD")," and fingerprint ",(0,l.kt)("inlineCode",{parentName:"p"},"2776 6600 5A7F 01D4 84F6 376D ACC7 76A7 9C82 4EBD"),". Our key can be retrieved from common keyservers."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# Download binary, checksums and signature\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_linux_amd64 -o driftctl_linux_amd64\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_SHA256SUMS -o driftctl_SHA256SUMS\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_SHA256SUMS.gpg -o driftctl_SHA256SUMS.gpg\n\n# Import key\n$ gpg --keyserver hkps://keys.openpgp.org --recv-keys 0xACC776A79C824EBD\ngpg: key ACC776A79C824EBD: public key "Cloudskiff <security@cloudskiff.com>" imported\ngpg: Total number processed: 1\ngpg:               imported: 1\n\n# Verify signature (optionally trust the key from gnupg to avoid any warning)\n$ gpg --verify driftctl_SHA256SUMS.gpg driftctl_SHA256SUMS\ngpg: Signature made jeu. 04 f\xe9vr. 2021 14:58:06 CET\ngpg:                using EDDSA key 277666005A7F01D484F6376DACC776A79C824EBD\ngpg:                issuer "security@cloudskiff.com"\ngpg: Good signature from "Cloudskiff <security@cloudskiff.com>" [ultimate]\n\n# Verify checksum\n$ sha256sum --ignore-missing -c driftctl_SHA256SUMS\ndriftctl_linux_amd64: OK\n')),(0,l.kt)("h2",{id:"driftctl-current-pgp-public-key"},"driftctl Current PGP Public Key"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-----BEGIN PGP PUBLIC KEY BLOCK-----\n\nxjMEYBv2ABYJKwYBBAHaRw8BAQdAstkQggX4bNXmfdiy+Cn6XrQLk0GNx+s4hbvuOi6DBS7NJENs\nb3Vkc2tpZmYgPHNlY3VyaXR5QGNsb3Vkc2tpZmYuY29tPsKQBBMWCAA4FiEEJ3ZmAFp/AdSE9jdt\nrMd2p5yCTr0FAmAb9gACGwMFCwkIBwIGFQoJCAsCBBYCAwECHgECF4AACgkQrMd2p5yCTr3CCgEA\n5kYdx5TMTHUJXwVs64QpQB5neN41y7EEnD7zWoZUMxcBAOeZxVsR6VZQENhpBpFcSJDSHAK6KDdr\nBYc2FpRDXQ4GwsFcBBABCgAGBQJgHBbYAAoJEDma9pCSxye2z4MQALniFM6VuVuDvP8wjpUixIFl\nH+Z702+VZU01hfQu27C0jR3WFDPlmRf4biqLD6NV4jfcWIUcAh19uRnHH31if2u4Ij4ZLB6uhm1C\nfcI0NLxyCvTorriA6Bf8rtt+iZ7K6nlolc2ZKJsQe6l2O3E0zC5WQlawjKKjjbjjA6C2CxFwcYib\ncmGobqIhTFHwta4sL9icFpEdt30XnVrJ1JHzEdYxK2YUoAJXyuPRH9Z9MbjJXL+uT98cigtOLdM2\nG/KCrWCrMS7lUznAvsJJ8Pova3dyT4d1AoVXPnKhOp0t4GPX5x4SRIe2QexvNEIoScXfQrxsONWL\nPkAVttALmfrveCgTESyBIw57Xe1wHOJmYrIkrMXNljBO2cC8DHkRKgo6xDOFmGfvBhQdUIiSe3/8\nbXbVnWjpjWhhIAoSMJBpPFWnFs+AlOk+BjYf/CMKf5eLuCSBF+JIGaulGDxhVdVcyBjp2FFw9FBs\n0tELKfds8OmXi2JzVT+K4oXNjRca9UwCmqhntkTOdOKMls/q9fCkVGxSiLKLGNr+fuU/1q9MISHi\nHqAiERT0cBjBFgr15Fn+hkpiSoDitaTZWoAfAQynnlh7WFXXPD2LQwk5lg3SkC0czSkacaaAoRCW\npSVXbMUWB0hD0lSaoPcDNsNyVfzEwMXqWWLBkKZbTki+GanHkb+J\n=dbR5\n-----END PGP PUBLIC KEY BLOCK-----\n"))),(0,l.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# x64\n$ curl https://github.com/snyk/driftctl/releases/latest/download/driftctl_windows_amd64.exe -o driftctl.exe\n# x86\n$ curl https://github.com/snyk/driftctl/releases/latest/download/driftctl_windows_386.exe -o driftctl.exe\n"))))),(0,l.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,l.kt)("p",null,"You can use also our official Docker image from the terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run -t --rm \\\n  -v ~/.aws:/root/.aws:ro \\\n  -v $(pwd):/app:ro \\\n  -v ~/.driftctl:/root/.driftctl \\\n  -e AWS_PROFILE=non-default-profile \\\n  snyk/driftctl scan\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-v ~/.aws:/root/.aws:ro")," (optionally) mounts your ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.aws")," containing AWS credentials and profile"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-v $(pwd):/app:ro")," (optionally) mounts your working dir containing the terraform state"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-v ~/.driftctl:/root/.driftctl")," (optionally) prevents driftctl to download the provider at each run"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-e AWS_PROFILE=your_profile")," (optionally) exports the non-default AWS profile name to use"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"snyk/driftctl:<VERSION_TAG>")," run a specific driftctl tagged release"),(0,l.kt)("h2",{id:"usage-examples"},"Usage examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# With a local state\n$ docker run -t --rm \\\n  -v $(pwd):/app:ro \\\n  -v ~/.driftctl:/root/.driftctl \\\n  -e AWS_ACCESS_KEY_ID=XXXXXXXX \\\n  -e AWS_SECRET_ACCESS_KEY=XXXX \\\n  snyk/driftctl scan\n\n# With state stored on a s3 backend\n$ docker run -t --rm \\\n  -v $(pwd):/app:ro \\\n  -v ~/.driftctl:/root/.driftctl \\\n  -e AWS_ACCESS_KEY_ID=XXXXXXXX \\\n  -e AWS_SECRET_ACCESS_KEY=XXXX \\\n  snyk/driftctl scan --from tfstate+s3://my-bucket/path/to/state.tfstate\n\n# With multiple states\n$ docker run -t --rm \\\n    -v $(pwd):/app:ro \\\n    -v ~/.driftctl:/root/.driftctl \\\n    -e AWS_ACCESS_KEY_ID=XXXXXXXX \\\n    -e AWS_SECRET_ACCESS_KEY=XXXX \\\n    snyk/driftctl scan --from tfstate://terraform_S3.tfstate --from tfstate://terraform_VPC.tfstate\n\n# Using a named profile\n$ docker run -t --rm \\\n    -v ~/.aws:/root/.aws:ro \\ # mount your aws config folder\n    -v $(pwd):/app:ro \\\n    -v ~/.driftctl:/root/.driftctl \\\n    -e AWS_PROFILE=your-profile \\\n    snyk/driftctl scan\n"))),(0,l.kt)(o.Z,{value:"homebrew",mdxType:"TabItem"},(0,l.kt)("p",null,"Homebrew is a free and open-source package management system for Mac OS X. Install the official driftctl formula from the terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew install driftctl\n"))),(0,l.kt)(o.Z,{value:"macports",mdxType:"TabItem"},(0,l.kt)("p",null,"MacPorts is an easy to use system for compiling, installing, and managing open source software. Install the community port from the terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo port install driftctl\n")))))}m.isMDXComponent=!0}}]);