"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:15},i="Contributing",l={unversionedId:"main/contributing",id:"main/contributing",title:"Contributing",description:"Thanks for considering making a contribution! Every issue or question helps!",source:"@site/docs/main/contributing.md",sourceDirName:"main",slug:"/main/contributing",permalink:"/leto/docs/main/contributing",draft:!1,editUrl:"https://github.com/juancastillo0/leto/edit/main/README.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Utilities",permalink:"/leto/docs/main/utilities"},next:{title:"leto",permalink:"/leto/docs/category/leto"}},s={},c=[{value:"Scripts",id:"scripts",level:2},{value:"<code>collect_examples.dart</code>",id:"collect_examplesdart",level:3},{value:"<code>generate_docusaurus.dart</code>",id:"generate_docusaurusdart",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"Thanks for considering making a contribution! Every issue or question helps!"),(0,r.kt)("p",null,"This package uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/invertase/melos"},"melos")," to manage dependencies. To install it run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pub global activate melos\n")),(0,r.kt)("p",null,"Then, to link the local packages run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"melos bootstrap\n")),(0,r.kt)("p",null,"If using fvm, you may need to run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fvm flutter pub global run melos bootstrap\n")),(0,r.kt)("p",null,"You can view most of the commands that you will need in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/juancastillo0/leto/tree/main/melos.yaml"},(0,r.kt)("inlineCode",{parentName:"a"},"melos.yaml")," file"),". However, melos can be used to do other stuff like executing any command you want using ",(0,r.kt)("inlineCode",{parentName:"p"},"melos exec"),", for more information please view the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/invertase/melos"},"melos Github repo"),"."),(0,r.kt)("h2",{id:"scripts"},"Scripts"),(0,r.kt)("p",null,"The following scripts are used in CI and can be used thought development. At the moment, both of them are related to generating documentation."),(0,r.kt)("h3",{id:"collect_examplesdart"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/juancastillo0/leto/tree/main/scripts/collect_examples.dart"},(0,r.kt)("inlineCode",{parentName:"a"},"collect_examples.dart"))),(0,r.kt)("p",null,"This script allows you to include documentation in the README files (or any Markdown file) from comments in Dart code. In the future, we will probably support sharing documentation between Dart files."),(0,r.kt)("p",null,"For example, by placing this comment annotations in a section of a Dart file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// @example-start{name-of-example,extension:graphql,start:1,end:-2}\nconst graphQLTypeSection = '''\ntype ObjectName {\n  objectField: String\n}\n''';\n// @example-end{name-of-example}\n")),(0,r.kt)("p",null,"And adding this comment in the Markdown (",(0,r.kt)("inlineCode",{parentName:"p"},".md"),") file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"\x3c!-- include{name-of-example} --\x3e\n")),(0,r.kt)("p",null,"You can copy the same Dart snippet by executing ",(0,r.kt)("inlineCode",{parentName:"p"},"dart run script/collect_examples.dart"),". The Markdown file will be updated to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"\x3c!-- include{name-of-example} --\x3e\n```graphql\ntype ObjectName {\n  objectField: String\n}\n```\n\x3c!-- include-end{name-of-example} --\x3e\n")),(0,r.kt)("p",null,"You can find many examples in the ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/juancastillo0/leto/main/README.md"},"source code of this README")," with Dart examples annotated through out the repository's Dart files."),(0,r.kt)("p",null,"The scripts has a couple of arguments, in particular ",(0,r.kt)("inlineCode",{parentName:"p"},"--check")," is used in CI to verify the the code snippets are synchronized between the Dart files and Markdown files. ",(0,r.kt)("inlineCode",{parentName:"p"},"--generate-dart-file")," will generate Dart code with the snippet Strings and ",(0,r.kt)("inlineCode",{parentName:"p"},"--generate-md-dir")," will generate one ",(0,r.kt)("inlineCode",{parentName:"p"},".md")," file for each example within the directory passed as argument."),(0,r.kt)("h3",{id:"generate_docusaurusdart"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/juancastillo0/leto/tree/main/scripts/generate_docusaurus.dart"},(0,r.kt)("inlineCode",{parentName:"a"},"generate_docusaurus.dart"))),(0,r.kt)("p",null,"Generates the Docusaurus documentation page. Basically, it copies the README file sections into the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/juancastillo0/leto/tree/main/docusaurus/docs/"},(0,r.kt)("inlineCode",{parentName:"a"},"/docusaurus/docs/"))," directory in a format that Docusaurus understands. This is used in CI to build the ",(0,r.kt)("a",{parentName:"p",href:"https://juancastillo0.github.io/leto"},"documentation page"),"."),(0,r.kt)("p",null,"Small pieces of configuration can be included within the README files. For example, to assign tags to a section (which will be converted to a page, perhaps ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/leto_shelf/section-title")," if it is in ",(0,r.kt)("inlineCode",{parentName:"p"},"leto_shelf"),"'s README) you can use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},'# Section Title \x3c!-- docusaurus{"tags":["tagName1","tagName2"]} --\x3e\n')),(0,r.kt)("p",null,"The content with the brackets should be a JSON string."))}u.isMDXComponent=!0}}]);