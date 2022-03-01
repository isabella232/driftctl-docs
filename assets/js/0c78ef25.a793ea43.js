"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4247],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8171:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={id:"scan-usage",title:"Scan"},s=void 0,d={unversionedId:"usage/cmd/scan-usage",id:"version-0.22.0/usage/cmd/scan-usage",isDocsHomePage:!1,title:"Scan",description:"Description",source:"@site/versioned_docs/version-0.22.0/usage/cmd/scan.mdx",sourceDirName:"usage/cmd",slug:"/usage/cmd/scan-usage",permalink:"/0.22.0/usage/cmd/scan-usage",editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.22.0/usage/cmd/scan.mdx",tags:[],version:"0.22.0",frontMatter:{id:"scan-usage",title:"Scan"},sidebar:"version-0.22.0/docs",previous:{title:"Limitations",permalink:"/0.22.0/limitations"},next:{title:"Completion",permalink:"/0.22.0/usage/cmd/completion-usage"}},c=[{value:"Description",id:"description",children:[],level:2},{value:"Options",id:"options",children:[{value:"--from",id:"--from",children:[{value:"Supported IaC sources",id:"supported-iac-sources",children:[{value:"S3",id:"s3",children:[],level:5},{value:"HTTP + GitLab",id:"http--gitlab",children:[],level:5},{value:"Azure blob storage",id:"azure-blob-storage",children:[],level:5}],level:4}],level:3},{value:"--output",id:"--output",children:[{value:"Console",id:"console",children:[{value:"Usage",id:"usage",children:[],level:5},{value:"Structure",id:"structure",children:[],level:5}],level:4},{value:"JSON",id:"json",children:[{value:"Usage",id:"usage-1",children:[],level:5},{value:"Structure",id:"structure-1",children:[],level:5}],level:4},{value:"HTML",id:"html",children:[{value:"Usage",id:"usage-2",children:[],level:5},{value:"Screenshots",id:"screenshots",children:[],level:5}],level:4},{value:"Computed Fields",id:"computed-fields",children:[],level:4}],level:3},{value:"--to",id:"--to",children:[{value:"Usage",id:"usage-3",children:[],level:4},{value:"Supported Providers",id:"supported-providers",children:[],level:4}],level:3},{value:"--quiet",id:"--quiet",children:[],level:3},{value:"--strict",id:"--strict",children:[{value:"Usage",id:"usage-4",children:[],level:4}],level:3},{value:"--deep",id:"--deep",children:[{value:"Usage",id:"usage-5",children:[],level:4}],level:3},{value:"--tf-provider-version",id:"--tf-provider-version",children:[{value:"Usage",id:"usage-6",children:[],level:4}],level:3},{value:"--driftignore",id:"--driftignore",children:[{value:"Usage",id:"usage-7",children:[],level:4}],level:3},{value:"--config-dir",id:"--config-dir",children:[{value:"Usage",id:"usage-8",children:[],level:4}],level:3},{value:"--tf-lockfile",id:"--tf-lockfile",children:[{value:"Usage",id:"usage-9",children:[],level:4}],level:3}],level:2},{value:"Exit codes",id:"exit-codes",children:[],level:2}],u={toc:c};function p(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ driftctl scan [OPTIONS]\n$ driftctl scan --from tfstate+s3://terraform.tfstate  --to github+tf --output console://\n")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Scan resources from the input Terraform statefile and compare it to your current profile infrastructure."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Flag"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Environment"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#--from",title:"iac source"},(0,i.kt)("inlineCode",{parentName:"a"},"--from"))),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"DCTL_FROM")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"tfstate://terraform.tfstate"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#--output",title:"output"},(0,i.kt)("inlineCode",{parentName:"a"},"--output"))),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"DCTL_OUTPUT")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"console://"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#--to",title:"to"},(0,i.kt)("inlineCode",{parentName:"a"},"--to"))),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"DCTL_TO")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"aws+tf"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#--quiet",title:"quiet"},(0,i.kt)("inlineCode",{parentName:"a"},"--quiet"))),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"DCTL_QUIET")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#--strict",title:"strict"},(0,i.kt)("inlineCode",{parentName:"a"},"--strict"))),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"DCTL_STRICT")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#--deep",title:"deep"},(0,i.kt)("inlineCode",{parentName:"a"},"--deep"))),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"DCTL_DEEP")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#--tf-provider-version",title:"tf-provider-version"},(0,i.kt)("inlineCode",{parentName:"a"},"--tf-provider-version"))),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"DCTL_TF_PROVIDER_VERSION")),(0,i.kt)("td",{parentName:"tr",align:"right"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#--driftignore",title:"driftignore"},(0,i.kt)("inlineCode",{parentName:"a"},"--driftignore"))),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"DCTL_DRIFTIGNORE")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},".driftignore"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#--config-dir",title:"config-dir"},(0,i.kt)("inlineCode",{parentName:"a"},"--config-dir"))),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"DCTL_CONFIG_DIR")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"$HOME"))))),(0,i.kt)("h3",{id:"--from"},"--from"),(0,i.kt)("p",null,"Currently, driftctl only supports reading IaC from a Terraform state.\nWe are investigating to support the Terraform code as well, as a state does not represent an intention."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Multiple states can be read by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"--from")," flags. You can also use glob patterns to match multiple state files at once."))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# I want to read a local state and a state stored in an S3 bucket:\n$ driftctl scan \\\n  --from tfstate+s3://statebucketdriftctl/terraform.tfstate \\\n  --from tfstate://terraform_toto.tfstate\n\n# You can also read all files under a given prefix for S3\n$ driftctl scan --from tfstate+s3://statebucketdriftctl/states\n\n# In a given local folder\n# driftctl will recursively use all files under this folder.\n#\n# N.B. Symlinks under the root folder will be ignored.\n#      If the folder itself is a symlink it will be followed.\n$ driftctl scan --from tfstate://my-states/directory\n# Only match state files in that directory\n$ driftctl scan --from tfstate://my-states/directory/*.tfstate\n\n# Using glob pattern to recursively use any *.tfstate file.\n$ driftctl scan --from tfstate://path/to/**/*.tfstate\n$ driftctl scan --from tfstate+s3://path/to/**/*.tfstate\n\n# We also support HTTP(s) URLs with authentication\n# the tool will fetch the file from the given URL\n#\n# You can use the --headers option if you need to add extra headers to the request (e.g: for authentication purposes)\n$ driftctl scan --from tfstate+https://example.com/terraform.tfstate --headers 'Authorization=Basic ...; X-Custom-Header=value'\n\n# You can also read the current state for a given workspace from Terraform Cloud\n# Don't forget to provide your Terraform Cloud API token\n# The Terraform Cloud integration supports both workspace ids, and workspace names\n\n$ driftctl scan --from tfstate+tfcloud://$WORKSPACE_ID --tfc-token $TFC_TOKEN\n$ driftctl scan --from tfstate+tfcloud://$ORGANIZATION_NAME/$WORKSPACE_NAME --tfc-token $TFC_TOKEN\n\n# You can also read the current state for a given workspace from Terraform Enterprise by passing the tfc-endpoint value\n# that's specific to your Org's Terraform Enterprise installation\n# You can obtain your workspace id from the General Settings of the workspace\n# Don't forget to provide your Terraform Enterprise API token\n#\n$ driftctl scan --from tfstate+tfcloud://$WORKSPACE_ID --tfc-token $TFC_TOKEN --tfc-endpoint 'https://tfe.example.com/api/v2'\n\n# You can use azure blob storage too\n# See below how to setup authentication for that backend\n$ driftctl scan --to azure+tf --from tfstate+azurerm://my-container/terraform.tfstate\n# Blob patterns are also supported\n$ driftctl scan --to azure+tf --from tfstate+azurerm://my-container/states/**\n")),(0,i.kt)("h4",{id:"supported-iac-sources"},"Supported IaC sources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Terraform state"),(0,i.kt)("li",{parentName:"ul"},"Local: ",(0,i.kt)("inlineCode",{parentName:"li"},"--from tfstate://terraform.tfstate")),(0,i.kt)("li",{parentName:"ul"},"S3: ",(0,i.kt)("inlineCode",{parentName:"li"},"--from tfstate+s3://my-bucket/path/to/state.tfstate")),(0,i.kt)("li",{parentName:"ul"},"GCS: ",(0,i.kt)("inlineCode",{parentName:"li"},"--from tfstate+gs://my-bucket/path/to/state.tfstate")),(0,i.kt)("li",{parentName:"ul"},"HTTPS: ",(0,i.kt)("inlineCode",{parentName:"li"},"--from tfstate+https://my-url/state.tfstate")),(0,i.kt)("li",{parentName:"ul"},"Terraform Cloud / Terraform Enterprise: ",(0,i.kt)("inlineCode",{parentName:"li"},"--from tfstate+tfcloud://WORKSPACE_ID")),(0,i.kt)("li",{parentName:"ul"},"Azure blob storage: ",(0,i.kt)("inlineCode",{parentName:"li"},"--from tfstate+azurerm://container-name/path/to/state.tfstate"))),(0,i.kt)("p",null,"You can use any unsupported backend by using ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform")," to pipe your state in a file and then use this file with driftctl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ terraform state pull > state.tfstate\n$ driftctl scan --from tfstate://state.tfstate\n")),(0,i.kt)("h5",{id:"s3"},"S3"),(0,i.kt)("p",null,"driftctl needs read-only access so you could use the policy below to ensure minimal access to your state file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": "s3:ListBucket",\n      "Resource": "arn:aws:s3:::mybucket"\n    },\n    {\n      "Effect": "Allow",\n      "Action": "s3:GetObject",\n      "Resource": "arn:aws:s3:::mybucket/path/to/my/key"\n    }\n  ]\n}\n')),(0,i.kt)("h5",{id:"http--gitlab"},"HTTP + GitLab"),(0,i.kt)("p",null,"The HTTP backend supports the GitLab managed Terraform State using their API."),(0,i.kt)("p",null,"All you need is a GitLab repository that contains a Terraform state and an access token with the ",(0,i.kt)("inlineCode",{parentName:"p"},"read_api")," scope."),(0,i.kt)("p",null,"Here's what the command looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ GITLAB_TOKEN=<access_token> \\\ndriftctl scan \\\n--from tfstate+https://gitlab.com/api/v4/projects/<project_id>/terraform/state/<path_to_state> \\\n--headers "Authorization=Bearer ${GITLAB_TOKEN}"\n')),(0,i.kt)("p",null,"You can find more information about the GitLab managed Terraform State on the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/infrastructure/terraform_state.html"},"GitLab documentation website"),"."),(0,i.kt)("h5",{id:"azure-blob-storage"},"Azure blob storage"),(0,i.kt)("p",null,"To be able to access state from azure blob storage, you have to define these two environment variables"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ export AZURE_STORAGE_ACCOUNT=...\n$ export AZURE_STORAGE_KEY=...\n$ driftctl scan --from tfstate+azurerm://my-container/terraform.tfstate\n\n# You can also use inline flags\n$ driftctl scan --azurerm-storage-account 'storageaccountname' --azurerm-account-key 'key' --from tfstate+azurerm://my-container/terraform.tfstate\n")),(0,i.kt)("p",null,"You can find theses values in your Azure console here:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"azure_storage_account_keys",src:a(5411).Z})),(0,i.kt)("h3",{id:"--output"},"--output"),(0,i.kt)("p",null,"driftctl supports multiple kinds of output formats and by default uses the standard output (console)."),(0,i.kt)("p",null,"Environment: ",(0,i.kt)("inlineCode",{parentName:"p"},"DCTL_OUTPUT")),(0,i.kt)("h4",{id:"console"},"Console"),(0,i.kt)("h5",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ driftctl scan\n$ driftctl scan --output console://\n$ DCTL_OUTPUT=console:// driftctl scan\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"driftctl can write to multiple outputs at once by passing multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"--output")," flags."))),(0,i.kt)("h5",{id:"structure"},"Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"Found missing resources:\n  aws_s3_bucket:\n    - driftctl-bucket-test-2\nFound resources not covered by IaC:\n  aws_s3_bucket:\n    - driftctl-bucket-test-3\nFound changed resources:\n  - driftctl-bucket-test-1 (aws_s3_bucket):\n    ~ Versioning.0.Enabled: false => true\nFound 3 resource(s)\n - 33% coverage\n - 1 covered by IaC\n - 1 not covered by IaC\n - 1 missing on cloud provider\n - 1/1 changed outside of IaC\n")),(0,i.kt)("h4",{id:"json"},"JSON"),(0,i.kt)("h5",{id:"usage-1"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ driftctl scan --output json:///tmp/result.json # Will output results to /tmp/result.json\n$ driftctl scan --output json://result.json # Will output results to ./result.json\n$ driftctl scan --output json://stdout # Will output results in json to stdout directly\n$ DCTL_OUTPUT=json://result.json driftctl scan\n")),(0,i.kt)("h5",{id:"structure-1"},"Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "summary": {\n    "total_resources": 3,\n    "total_changed": 1,\n    "total_unmanaged": 1,\n    "total_missing": 1,\n    "total_managed": 1\n  },\n  "managed": [\n    // list of resources found in IaC and in sync with remote\n    {\n      "id": "driftctl-bucket-test-1",\n      "type": "aws_s3_bucket",\n      "source": { // Source encapsulates metadata explaining where the resource is coming from within an IaC\n        "source": "tfstate://terraform.tfstate", // Represents the Terraform state file\n        "namespace": "module", // If you use Terraform module, it will be displayed here\n        "internal_name": "my_name" // Represents the internal Terraform resource\'s name\n      }\n    }\n  ],\n  "unmanaged": [\n    // list of resources found in remote but not in IaC\n    {\n      "id": "driftctl-bucket-test-3",\n      "type": "aws_s3_bucket"\n    }\n  ],\n  "missing": [\n    // list of resources found in IaC but not on remote\n    {\n      "id": "driftctl-bucket-test-2",\n      "type": "aws_s3_bucket"\n    },\n  ],\n  "differences": [\n    // A list of changes on managed resources\n    {\n      "res": {\n        "id": "driftctl-bucket-test-1",\n        "type": "aws_s3_bucket"\n      },\n      "changelog": [\n        {\n          "type": "update", // Kind of change, could be one of update, create, delete\n          "path": [\n            // Path of the change, sorted from root to leaf\n            "Versioning",\n            "0",\n            "Enabled"\n          ],\n          "from": false, // Mixed type\n          "to": true // Mixed type\n        }\n      ]\n    }\n  ],\n  "coverage": 33\n}\n')),(0,i.kt)("h4",{id:"html"},"HTML"),(0,i.kt)("h5",{id:"usage-2"},"Usage"),(0,i.kt)("p",null,"You can now visualize your scan results in your browser with the HTML output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ driftctl scan --output html://output.html # Will output results to ./output.html\n$ DCTL_OUTPUT=html://output.html driftctl scan\n")),(0,i.kt)("h5",{id:"screenshots"},"Screenshots"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Output HTML With Drifts",src:a(904).Z}),"\n",(0,i.kt)("img",{alt:"Output HTML Without Drifts",src:a(2267).Z})),(0,i.kt)("h4",{id:"computed-fields"},"Computed Fields"),(0,i.kt)("p",null,"From Terraform documentation, a ",(0,i.kt)("inlineCode",{parentName:"p"},"computed")," field is often used to represent values that are not user configurable or can not be known at time of ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform plan")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"apply"),"."),(0,i.kt)("p",null,"Since those values are not known ahead of time from terraform point of view, it is obviously possible that the values displayed in a terraform state file are not up-to-date and may require a ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform refresh"),"."),(0,i.kt)("p",null,"Thus, it could be possible that driftctl finds drifts that are considered false positives because of those outdated values."),(0,i.kt)("p",null,"We decided to output computed fields and to display a message at the end of the scan to remind you of this behavior."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'Found changed resources:\n  - eipalloc-0e2894d8ea42851df (aws_eip):\n    ~ AssociationId: "" => "eipassoc-0ee67e1ca759733a2" (computed)\n    ~ Instance: "" => "i-004611704837fd09a" (computed)\n    ~ NetworkInterface: "" => "eni-0a62972b0471447f6" (computed)\n    ~ PrivateDns: <nil> => "ip-172-31-40-4.eu-west-3.compute.internal" (computed)\n    ~ PrivateIp: "" => "172.31.40.4" (computed)\nFound 1 resource(s)\n - 100% coverage\n - 1 covered by IaC\n - 0 not covered by IaC\n - 0 missing on cloud provider\n - 1/1 changed outside of IaC\nYou have diffs on computed fields, check the documentation for potential false positive drifts\n')),(0,i.kt)("h3",{id:"--to"},"--to"),(0,i.kt)("p",null,"driftctl supports multiple providers. By default it will scan against AWS, but you can change this using ",(0,i.kt)("inlineCode",{parentName:"p"},"--to"),"."),(0,i.kt)("h4",{id:"usage-3"},"Usage"),(0,i.kt)("p",null,"Environment: ",(0,i.kt)("inlineCode",{parentName:"p"},"DCTL_TO")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ driftctl scan --to PROVIDER+TYPE\n\n# examples:\n$ driftctl scan --to aws+tf\n$ DCTL_TO=github+tf driftctl scan\n")),(0,i.kt)("h4",{id:"supported-providers"},"Supported Providers"),(0,i.kt)("p",null,"driftctl supports these providers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"github+tf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aws+tf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gcp+tf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"azure+tf"))),(0,i.kt)("h3",{id:"--quiet"},"--quiet"),(0,i.kt)("p",null,"This flag prevents stdout to be use for anything but the scan result."),(0,i.kt)("h3",{id:"--strict"},"--strict"),(0,i.kt)("p",null,"When running driftctl against an AWS account, you may experience unnecessary noises with resources that don't belong to you. It can be the case if you have an organization account in which you will by default have a service-linked role associated to your account (e.g. AWSServiceRoleForOrganizations). For now, driftctl ignores those service-linked resources by default."),(0,i.kt)("p",null,"If you still want to include those resources in the report anyway, you can enable the strict mode."),(0,i.kt)("p",null,"For now, resources include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Service-linked AWS IAM roles, including their policies and policy attachments")),(0,i.kt)("h4",{id:"usage-4"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Enable the strict mode\n$ driftctl scan --strict\n")),(0,i.kt)("h3",{id:"--deep"},"--deep"),(0,i.kt)("p",null,"\u26a0\ufe0f This is ",(0,i.kt)("strong",{parentName:"p"},"EXPERIMENTAL")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Enabling deep mode while using a Terraform state as IaC source can lead to unexpected behaviors: false positive drifts, undetected drifts."))),(0,i.kt)("p",null,"Deep mode enables resources details retrieval. It was the original driftctl behavior."),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"deep")," mode we compare resources details to expected ones (like a terraform plan).\nIn ",(0,i.kt)("strong",{parentName:"p"},"non-deep")," mode (the default one) we only enumerate resources and display which ones are out of IaC scope."),(0,i.kt)("p",null,"Since it overlaps the new ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform plan")," behavior (as of Terraform 0.15 it shows diffs between your state and the remote) we moved the original behavior under the ",(0,i.kt)("inlineCode",{parentName:"p"},"--deep")," ",(0,i.kt)("strong",{parentName:"p"},"experimental")," flag."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you use a version of driftctl prior to 0.13, the deep mode was the default behavior. If you want to keep the old behavior in a newer version you have to enable the deep mode flag."))),(0,i.kt)("h4",{id:"usage-5"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Enable the deep mode\n$ driftctl scan --deep\n")),(0,i.kt)("h3",{id:"--tf-provider-version"},"--tf-provider-version"),(0,i.kt)("p",null,"You can specify a terraform provider version to use. If none, driftctl uses defaults from the table below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"provider"),(0,i.kt)("th",{parentName:"tr",align:"center"},"version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"aws"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3.19.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"github"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4.4.0")))),(0,i.kt)("h4",{id:"usage-6"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# I use terraform provider 3.43.0 so I can use this provider with driftctl to avoid scan errors\n# driftctl will scan with an AWS terraform provider v3.43.0\n$ DCTL_TF_PROVIDER_VERSION=3.43.0 driftctl scan\n\n# Same parameter is used for every cloud provider\n# driftctl will scan with a GitHub terraform provider v4.10.1\n$ DCTL_TF_PROVIDER_VERSION=4.10.1 driftctl scan --to github+tf\n")),(0,i.kt)("h3",{id:"--driftignore"},"--driftignore"),(0,i.kt)("p",null,"The default name for a driftignore file is ",(0,i.kt)("inlineCode",{parentName:"p"},".driftignore"),". If for some reason you want to use a custom filename, you can do so using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--driftignore")," flag. This is especially useful when you have multiple driftignore files, where each of them represents a particular use case."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can use only one driftignore file at once."))),(0,i.kt)("h4",{id:"usage-7"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Apply ignore directives from the /path/to/driftignore file\n$ driftctl scan --driftignore /path/to/driftignore\n")),(0,i.kt)("h3",{id:"--config-dir"},"--config-dir"),(0,i.kt)("p",null,"You can change the directory path that driftctl uses for configuration. By default, it is the ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME")," directory."),(0,i.kt)("p",null,"This can be useful, for example, if you want to invoke driftctl in an AWS Lambda function where you can only use the ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp")," folder."),(0,i.kt)("h4",{id:"usage-8"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ driftctl scan --config-dir path_to_driftctl_config_dir\n$ DCTL_CONFIG_DIR=path_to_driftctl_config_dir driftctl scan\n")),(0,i.kt)("h3",{id:"--tf-lockfile"},"--tf-lockfile"),(0,i.kt)("p",null,"By default, driftctl tries to read a Terraform lock file (",(0,i.kt)("inlineCode",{parentName:"p"},".terraform.lock.hcl"),") in the current directory, so driftctl can automatically detect which provider to use, according to the ",(0,i.kt)("inlineCode",{parentName:"p"},"--to")," flag. You can specify a custom path for that file using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--tf-lockfile")," flag. If parsing the lockfile fails for some reason, errors will be logged and scan will continue."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note that when using both ",(0,i.kt)("inlineCode",{parentName:"p"},"--tf-lockfile")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--tf-provider-version")," flags together, ",(0,i.kt)("inlineCode",{parentName:"p"},"--tf-provider-version")," will simply take precedence overall."))),(0,i.kt)("h4",{id:"usage-9"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ driftctl scan --to aws+tf --tf-lockfile path/to/.terraform.lock.hcl\n")),(0,i.kt)("h2",{id:"exit-codes"},"Exit codes"),(0,i.kt)("p",null,"If no drift is found and all infrastructure is in sync with the\ninfrastructure-as-code state (after accounting for filters and driftignore),\n",(0,i.kt)("inlineCode",{parentName:"p"},"driftctl")," will exit with status 0."),(0,i.kt)("p",null,"If drift is found, ",(0,i.kt)("inlineCode",{parentName:"p"},"driftctl")," will exit with status 1."),(0,i.kt)("p",null,"If any other error occurs, ",(0,i.kt)("inlineCode",{parentName:"p"},"driftctl")," will exit with status 2."))}p.isMDXComponent=!0},5411:function(e,t,a){t.Z=a.p+"assets/images/azure_storage_account_keys-ccb38d8792616d4376050fc6b715a6ef.png"},904:function(e,t,a){t.Z=a.p+"assets/images/output_html_1-b8c8ce70a1cda9dac849d341bdadcdf5.png"},2267:function(e,t,a){t.Z=a.p+"assets/images/output_html_2-836fad71065e57d10a2355ced78dc8ca.png"}}]);