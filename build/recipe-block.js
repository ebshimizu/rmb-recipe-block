!function(e){var t={};function r(c){if(t[c])return t[c].exports;var i=t[c]={i:c,l:!1,exports:{}};return e[c].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(c,i,function(t){return e[t]}.bind(null,i));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=14)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){var c=r(12);e.exports=function(e,t){if(null==e)return{};var r,i,n=c(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.lodash}()},function(e){e.exports=JSON.parse('{"name":"ryelle/recipe-meta","title":"Information","icon":"info","category":"widgets","parent":["ryelle/recipe"],"attributes":{"difficulty":{"type":"string","source":"html","selector":".rmb-recipe__meta-item-difficulty .rmb-recipe__meta-item-value","default":""},"serving":{"type":"string","source":"html","selector":".rmb-recipe__meta-item-serving .rmb-recipe__meta-item-value","default":""},"showDifficulty":{"type":"boolean","default":true},"showServing":{"type":"boolean","default":true},"showTime":{"type":"boolean","default":true},"time":{"type":"string","source":"html","selector":".rmb-recipe__meta-item-time .rmb-recipe__meta-item-value","default":""}},"editorScript":"file:../../../../build/recipe-block.js","style":"file:../../../../build/recipe-block.css"}')},function(e){e.exports=JSON.parse('{"name":"ryelle/recipe-ingredients","title":"Ingredients","icon":"editor-ul","category":"widgets","parent":["ryelle/recipe"],"attributes":{"ingredients":{"type":"string","source":"html","selector":"ul","multiline":"li","default":""},"level":{"type":"number","default":3}},"editorScript":"file:../../../../build/recipe-block.js","style":"file:../../../../build/recipe-block.css"}')},function(e){e.exports=JSON.parse('{"name":"ryelle/recipe-directions","title":"Directions","icon":"editor-ol","category":"widgets","parent":["ryelle/recipe"],"attributes":{"directions":{"type":"string","source":"html","selector":"ol","multiline":"li","default":""},"level":{"type":"number","default":3}},"editorScript":"file:../../../../build/recipe-block.js","style":"file:../../../../build/recipe-block.css"}')},function(e){e.exports=JSON.parse('{"name":"ryelle/recipe","title":"Recipe","category":"widgets","supports":{"align":["wide","full"]},"editorScript":"file:../../build/recipe-block.js","style":"file:../../build/recipe-block.css"}')},function(e,t){e.exports=function(e,t){if(null==e)return{};var r,c,i={},n=Object.keys(e);for(c=0;c<n.length;c++)r=n[c],t.indexOf(r)>=0||(i[r]=e[r]);return i}},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var c=r(4),i=r.n(c),n=r(5),l=r.n(n),o=r(0),a=r(1),s=r(2),b=r(6),m=r(3),u=(r(13),r(8));function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=u.name,O=l()(u,["name"]);Object(m.registerBlockType)(d,f(f({},O),{},{title:Object(a.__)("Information","rmb-recipe-block"),edit:function(e){var t=e.attributes,r=e.setAttributes,c=t.difficulty,i=t.serving,n=t.showDifficulty,l=t.showServing,m=t.showTime,u=t.time,p=n||l||m;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(s.InspectorControls,null,Object(o.createElement)(b.PanelBody,{title:Object(a.__)("Fields","rmb-recipe-block")},Object(o.createElement)(b.ToggleControl,{label:"Show serving size",checked:l,onChange:function(){return r({showServing:!l})}}),Object(o.createElement)(b.ToggleControl,{label:"Show time",checked:m,onChange:function(){return r({showTime:!m})}}),Object(o.createElement)(b.ToggleControl,{label:"Show difficulty",checked:n,onChange:function(){return r({showDifficulty:!n})}}))),p?Object(o.createElement)("div",{className:"rmb-recipe__meta-list"},l&&Object(o.createElement)("div",{className:"rmb-recipe__meta-item rmb-recipe__meta-item-serving"},Object(o.createElement)("span",{className:"rmb-recipe__meta-item-label"},Object(a.__)("Serving Size:","rmb-recipe-block")),Object(o.createElement)(s.RichText,{placeholder:Object(a.__)("Write serving…","rmb-recipe-block"),className:"rmb-recipe__meta-item-value",onChange:function(e){return r({serving:e})},value:i})),m&&Object(o.createElement)("div",{className:"rmb-recipe__meta-item rmb-recipe__meta-item-time"},Object(o.createElement)("span",{className:"rmb-recipe__meta-item-label"},Object(a.__)("Time:","rmb-recipe-block")),Object(o.createElement)(s.RichText,{placeholder:Object(a.__)("Write time…","rmb-recipe-block"),className:"rmb-recipe__meta-item-value",onChange:function(e){return r({time:e})},value:u})),n&&Object(o.createElement)("div",{className:"rmb-recipe__meta-item rmb-recipe__meta-item-difficulty"},Object(o.createElement)("span",{className:"rmb-recipe__meta-item-label"},Object(a.__)("Difficulty:","rmb-recipe-block")),Object(o.createElement)(s.RichText,{placeholder:Object(a.__)("Write difficulty…","rmb-recipe-block"),className:"rmb-recipe__meta-item-value",onChange:function(e){return r({difficulty:e})},value:c}))):Object(o.createElement)("div",{className:"rmb-recipe__meta-list rmb-recipe__meta-list-empty"},Object(o.createElement)("em",null,Object(a.__)("Nothing to show. Turn on a meta field, or remove this block.","rmb-recipe-block"))))},save:function(e){var t=e.attributes,r=t.difficulty,c=t.serving,i=t.showDifficulty,n=t.showServing,l=t.showTime,b=t.time;return i||n||l?Object(o.createElement)("div",{className:"rmb-recipe__meta-list"},n&&Object(o.createElement)("div",{className:"rmb-recipe__meta-item rmb-recipe__meta-item-serving"},Object(o.createElement)("span",{className:"rmb-recipe__meta-item-label"},Object(a.__)("Serving Size:","rmb-recipe-block")),Object(o.createElement)(s.RichText.Content,{tagName:"div",value:c,className:"rmb-recipe__meta-item-value"})),l&&Object(o.createElement)("div",{className:"rmb-recipe__meta-item rmb-recipe__meta-item-time"},Object(o.createElement)("span",{className:"rmb-recipe__meta-item-label"},Object(a.__)("Time:","rmb-recipe-block")),Object(o.createElement)(s.RichText.Content,{tagName:"div",value:b,className:"rmb-recipe__meta-item-value"})),i&&Object(o.createElement)("div",{className:"rmb-recipe__meta-item rmb-recipe__meta-item-difficulty"},Object(o.createElement)("span",{className:"rmb-recipe__meta-item-label"},Object(a.__)("Difficulty:","rmb-recipe-block")),Object(o.createElement)(s.RichText.Content,{tagName:"div",value:r,className:"rmb-recipe__meta-item-value"}))):null}}));var j=r(7),g=r(9);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=g.name,h=l()(g,["name"]);Object(m.registerBlockType)(y,v(v({},h),{},{title:Object(a.__)("Ingredients","rmb-recipe-block"),transforms:{to:[{type:"block",blocks:["core/list"],transform:function(e){var t=e.ingredients;return Object(m.createBlock)("core/list",{values:t,ordered:!1})}},{type:"block",blocks:["ryelle/recipe-directions"],transform:function(e,t){var r=e.ingredients,c=Object(j.find)(t,{name:"core/heading"},{});return Object(m.createBlock)("ryelle/recipe-directions",{directions:r},[c])}}]},edit:function(e){var t=e.attributes,r=e.setAttributes,c=t.ingredients;return Object(o.createElement)("div",{className:"rmb-recipe-block__ingredients"},Object(o.createElement)(s.InnerBlocks,{template:[["core/heading",{content:Object(a.__)("Ingredients","rmb-recipe-block"),level:3}]],templateLock:"all"}),Object(o.createElement)(s.RichText,{multiline:"li",tagName:"ul",onChange:function(e){return r({ingredients:e})},value:c,placeholder:Object(a.__)("Add your ingredients…","rmb-recipe-block")}))},save:function(e){var t=e.attributes.ingredients;return Object(o.createElement)("div",{className:"rmb-recipe-block__ingredients"},Object(o.createElement)(s.InnerBlocks.Content,null),Object(o.createElement)(s.RichText.Content,{tagName:"ul",value:t,multiline:"li"}))},deprecated:[{attributes:{ingredients:{type:"string",source:"html",selector:"ul",multiline:"li",default:""},level:{type:"number",default:3},title:{type:"string",source:"html",selector:".rmb-recipe-block__ingredients-header",default:Object(a.__)("Ingredients","rmb-recipe-block")}},save:function(e){var t=e.attributes,r=t.ingredients,c=t.level,i=t.title;return Object(o.createElement)("div",{className:"rmb-recipe-block__ingredients"},Object(o.createElement)(s.RichText.Content,{tagName:"h".concat(c),className:"rmb-recipe-block__ingredients-header",value:i}),Object(o.createElement)(s.RichText.Content,{tagName:"ul",value:r,multiline:"li"}))},migrate:function(e){return[{ingredients:e.ingredients},[Object(m.createBlock)("core/heading",{content:e.title,level:e.level})]]}}]}));var k=r(10);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=k.name,P=l()(k,["name"]);Object(m.registerBlockType)(N,w(w({},P),{},{title:Object(a.__)("Directions","rmb-recipe-block"),transforms:{to:[{type:"block",blocks:["core/list"],transform:function(e){var t=e.directions;return Object(m.createBlock)("core/list",{values:t,ordered:!0})}},{type:"block",blocks:["ryelle/recipe-ingredients"],transform:function(e,t){var r=e.directions,c=Object(j.find)(t,{name:"core/heading"},{});return Object(m.createBlock)("ryelle/recipe-ingredients",{ingredients:r},[c])}}]},edit:function(e){var t=e.attributes,r=e.setAttributes,c=t.directions;return Object(o.createElement)("div",{className:"rmb-recipe-block__directions"},Object(o.createElement)(s.InnerBlocks,{template:[["core/heading",{content:Object(a.__)("Directions","rmb-recipe-block"),level:3}]],templateLock:"all"}),Object(o.createElement)(s.RichText,{multiline:"li",tagName:"ol",onChange:function(e){return r({directions:e})},value:c,placeholder:Object(a.__)("Add your directions…","rmb-recipe-block")}))},save:function(e){var t=e.attributes.directions;return Object(o.createElement)("div",{className:"rmb-recipe-block__directions"},Object(o.createElement)(s.InnerBlocks.Content,null),Object(o.createElement)(s.RichText.Content,{tagName:"ol",value:t,multiline:"li"}))},deprecated:[{attributes:{directions:{type:"string",source:"html",selector:"ol",multiline:"li",default:""},level:{type:"number",default:3},title:{type:"string",source:"html",selector:".rmb-recipe-block__directions-header",default:Object(a.__)("Directions","rmb-recipe-block")}},save:function(e){var t=e.attributes,r=t.directions,c=t.level,i=t.title;return Object(o.createElement)("div",{className:"rmb-recipe-block__directions"},Object(o.createElement)(s.RichText.Content,{tagName:"h".concat(c),className:"rmb-recipe-block__directions-header",value:i}),Object(o.createElement)(s.RichText.Content,{tagName:"ol",value:r,multiline:"li"}))},migrate:function(e){return[{directions:e.directions},[Object(m.createBlock)("core/heading",{content:e.title,level:e.level})]]}}]}));var x=r(11);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=x.name,C=l()(x,["name"]),B=[["core/image",{}],["core/heading",{placeholder:Object(a.__)("Recipe Title","rmb-recipe-block")}],["ryelle/recipe-meta"],["ryelle/recipe-ingredients"],["ryelle/recipe-directions"]],R=["core/audio","core/buttons","core/cover","core/gallery","core/heading","core/image","core/list","core/paragraph","core/separator","core/spacer","core/table","core/video","ryelle/recipe-meta","ryelle/recipe-ingredients","ryelle/recipe-directions"],I=Object(o.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},Object(o.createElement)("path",{d:"M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"}),Object(o.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}));Object(m.registerBlockType)(D,T(T({},C),{},{title:Object(a.__)("Recipe","rmb-recipe-block"),icon:Object(o.createElement)(b.Icon,{icon:I}),description:Object(a.__)("A recipe block with ingredients, directions, and more.","rmb-recipe-block"),keywords:[Object(a.__)("food","rmb-recipe-block"),Object(a.__)("cooking","rmb-recipe-block"),Object(a.__)("ingredients","rmb-recipe-block"),Object(a.__)("directions","rmb-recipe-block")],edit:function(e){var t=[e.className,"rmb-recipe-block"];return Object(o.createElement)("div",{className:t.join(" ")},Object(o.createElement)(s.InnerBlocks,{template:B,templateLock:!1,allowedBlocks:R}))},save:function(e){var t=e.attributes.align;return Object(o.createElement)("div",{className:t?"align".concat(t):""},Object(o.createElement)(s.InnerBlocks.Content,null))}}))}]);