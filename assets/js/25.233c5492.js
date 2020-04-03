(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{294:function(t,s,a){"use strict";a.r(s);var n=a(38),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"use-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-typescript","aria-hidden":"true"}},[t._v("#")]),t._v(" Use TypeScript")]),t._v(" "),a("p",[a("code",[t._v("@vapper/core")]),t._v(" supports "),a("code",[t._v("TypeScript")]),t._v(" since version "),a("code",[t._v("0.10.0")]),t._v(". In fact, since Vapper uses "),a("code",[t._v("Vue-CLI3+")]),t._v(" or "),a("code",[t._v("Poi")]),t._v(" to manage the webpack configuration, you can use the "),a("code",[t._v("TypeScript")]),t._v(" plugin provided by "),a("code",[t._v("Vue-CLI3+")]),t._v(" or "),a("code",[t._v("Poi")]),t._v(" directly. Let's use "),a("code",[t._v("Vue-CLI3")]),t._v(" and "),a("code",[t._v("@vue/cli-plugin-typescript")]),t._v(" as an example to demonstrate how to use "),a("code",[t._v("TypeScript")]),t._v(" in your project.")]),t._v(" "),a("h2",{attrs:{id:"initialize-a-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialize-a-project","aria-hidden":"true"}},[t._v("#")]),t._v(" Initialize a project")]),t._v(" "),a("p",[t._v("First, initialize a new project as described in "),a("router-link",{attrs:{to:"/usage.html#integrated-into-the-vue-cli-3-project"}},[t._v("Usage - Integrating to Vue CLI 3 Projects")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"install-vue-cli-plugin-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-vue-cli-plugin-typescript","aria-hidden":"true"}},[t._v("#")]),t._v(" Install @vue/cli-plugin-typescript")]),t._v(" "),a("p",[t._v("Next, execute the following command to install the "),a("a",{attrs:{href:"https://cli.vuejs.org/core-plugins/typescript.html#vue-cli-plugin-typescript",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vue/cli-plugin-typescript"),a("OutboundLink")],1),t._v(" plugin:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("vue add typescript\n")])])]),a("h2",{attrs:{id:"add-type-declaration-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-type-declaration-file","aria-hidden":"true"}},[t._v("#")]),t._v(" Add type declaration file")]),t._v(" "),a("p",[t._v("Add the "),a("code",[t._v("global.d.ts")]),t._v(" file to the project root and copy the following code to it:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ComponentOptions "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" MetaInfo"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" VueMetaPlugin "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue-meta'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue/types/vue'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $$"),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'server'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'client'")]),t._v("\n    error"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Error\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue/types/options'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ComponentOptions")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token constant"}},[t._v("V")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    head"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MetaInfo\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Finally modify the "),a("code",[t._v("include")]),t._v(" field in "),a("code",[t._v("tsconfig.json")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  // Other configurations......\n  "),a("span",{attrs:{class:"token property"}},[t._v('"include"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"src/**/*.ts"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"src/**/*.tsx"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"src/**/*.vue"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"tests/**/*.ts"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"tests/**/*.tsx"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"global.d.ts"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("If nothing else, you can already develop your project using "),a("code",[t._v("TypeScript")]),t._v(".")])])},[],!1,null,null,null);s.default=e.exports}}]);