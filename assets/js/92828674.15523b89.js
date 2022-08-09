"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3921],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},752:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:4},i="Schema and Document Validation Rules",l={unversionedId:"leto_schema/schema-and-document-validation-rules",id:"leto_schema/schema-and-document-validation-rules",title:"Schema and Document Validation Rules",description:"GraphQL schemas and documents can be validated for potential errors, misconfigurations, bad practices or perhaps",source:"@site/docs/leto_schema/schema-and-document-validation-rules.md",sourceDirName:"leto_schema",slug:"/leto_schema/schema-and-document-validation-rules",permalink:"/leto/docs/leto_schema/schema-and-document-validation-rules",draft:!1,editUrl:"https://github.com/juancastillo0/leto/edit/main/leto_schema/README.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"GraphQL Types",permalink:"/leto/docs/leto_schema/graphql-types"},next:{title:"GraphQLException and GraphQLError",permalink:"/leto/docs/leto_schema/graphqlexception-and-graphqlerror"}},c={},s=[{value:"Custom Validations",id:"custom-validations",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"schema-and-document-validation-rules"},"Schema and Document Validation Rules"),(0,n.kt)("p",null,"GraphQL schemas and documents can be validated for potential errors, misconfigurations, bad practices or perhaps\nrestrictions, such as restricting the complexity (how nested and how many fields) of a query.\nWe perform all the document and schema validations in the ",(0,n.kt)("a",{parentName:"p",href:"https://spec.graphql.org/draft/#sec-Validation"},"specification"),". Most of the code was ported from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphql-js"},"graphql-js"),"."),(0,n.kt)("p",null,"You can find the implementation for all the rules in the ",(0,n.kt)("inlineCode",{parentName:"p"},"lib/src/validate/rules")," directory."),(0,n.kt)("p",null,"We also provide a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/juancastillo0/leto/tree/main/README.md#query-complexity"},"QueryComplexity")," validation rule."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"List<GraphQLError> validateDocument()"),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"List<GraphQLError> validateSDL()")),(0,n.kt)("h2",{id:"custom-validations"},"Custom Validations"),(0,n.kt)("p",null,"You can provide custom validations, they are a function that receives a ",(0,n.kt)("inlineCode",{parentName:"p"},"ValidationCtx")," and returns a visitor that reports errors thought the context."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:gql/language.dart' as gql; \n\n// or `SDLValidationCtx context` for documents\ngql.Visitor validation(ValidationCtx context) {\n  // report errors\n  context.reportError(\n    GraphQLError(\n      'Error message',\n\n    )\n  );\n}\n")))}u.isMDXComponent=!0}}]);