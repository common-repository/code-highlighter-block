!function(e){function t(n){if(l[n])return l[n].exports;var a=l[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var l={};t.m=e,t.c=l,t.d=function(e,l,n){t.o(e,l)||Object.defineProperty(e,l,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(l,"a",l),l},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=wp.blockEditor},function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});l(2)},function(e,t,l){"use strict";var n=l(3),a=(l.n(n),l(4)),o=(l.n(a),l(0)),r=(l.n(o),l(5)),__=(l.n(r),wp.i18n.__),c=[{label:"HTML",value:"html"},{label:"CSS",value:"css"},{label:"Javascript",value:"javascript"},{label:"ASP.NET",value:"ASP.NET"},{label:"C",value:"c"},{label:"C++",value:"c++"},{label:"C#",value:"c#"},{label:"CoffeeScript",value:"CoffeeScript"},{label:"Django",value:"Django"},{label:"Git",value:"git"},{label:"GraphQL",value:"GraphQL"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Perl",value:"perl"},{label:"Python",value:"python"},{label:"React JSX",value:"ReactJSX"},{label:"Sass",value:"Sass"},{label:"Scss",value:"Scss"},{label:"SQL",value:"SQL"}];(0,wp.blocks.registerBlockType)("cgb/block-code-highlighter-block",{title:__("Code Highlighter Block"),icon:"editor-code",description:__("Highlight Code Syntax of Different Languages"),category:"common",keywords:[__("Code Highlighter"),__("Code"),__("Syntax Highlighter")],attributes:{code:{type:"string"},lang:{type:"string",default:"php"},fontSize:{type:"number",default:16}},edit:function(e){var t=e.setAttributes,l=e.attributes,n=l.code,a=l.lang,i=l.fontSize;return wp.element.createElement("div",null,wp.element.createElement(o.InspectorControls,null,wp.element.createElement(r.PanelBody,{title:__("Select Language"),initialOpen:!0},wp.element.createElement(r.SelectControl,{value:a,options:c,onChange:function(e){t({lang:e})},formattingControls:[]})),wp.element.createElement(r.PanelBody,{title:__("Set Font Size"),initialOpen:!1},wp.element.createElement(r.RangeControl,{value:i,onChange:function(e){return t({fontSize:e})},min:1,max:50}))),wp.element.createElement("div",{className:"cbg-block-container no-line-numbers"},wp.element.createElement("pre",{"data-start":"1",style:{fontSize:i}},wp.element.createElement(o.RichText,{tagName:"code",className:"language-"+a,value:n,onChange:function(e){return t({code:e})},allowedFormats:[]}))))},save:function(e){var t=e.attributes,l=t.code,n=t.lang,a=t.fontSize;return wp.element.createElement("div",{className:"cbg-block-container no-line-numbers"},wp.element.createElement("pre",{"data-start":"1",style:{fontSize:a}},wp.element.createElement(o.RichText.Content,{tagName:"code",className:"language-"+n,value:l})))}})},function(e,t){},function(e,t){},function(e,t){e.exports=wp.components}]);