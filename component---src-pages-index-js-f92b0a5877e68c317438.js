(self.webpackChunkmidival=self.webpackChunkmidival||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var l,c,s,u;if(Array.isArray(e)){if((l=e.length)!=a.length)return!1;for(c=l;0!=c--;)if(!o(e[c],a[c]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((l=e.length)!=a.length)return!1;for(c=l;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!o(e[s[c]],a[s[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),g.canUseDOM?t(c):n&&(c=n(c))}var g=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(g,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(g,"canUseDOM",l),g}}},8059:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ge}});var r=n(4038),i=n(7294),o=n(7548),a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,l=(0,o.Z)((function(e){return a.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),c=n(8197),s=n(4660),u=n(4418),g=l,d=function(e){return"theme"!==e},p=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?g:d},I=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return"function"!=typeof r&&n&&(r=e.__emotion_forwardProp),r},y=function e(t,n){var o,a,l=t.__emotion_real===t,g=l&&t.__emotion_base||t;void 0!==n&&(o=n.label,a=n.target);var d=I(t,n,l),y=d||p(g),f=!y("as");return function(){var m=arguments,M=l&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==o&&M.push("label:"+o+";"),null==m[0]||void 0===m[0].raw)M.push.apply(M,m);else{0,M.push(m[0][0]);for(var T=m.length,h=1;h<T;h++)M.push(m[h],m[0][h])}var b=(0,c.w)((function(e,t,n){var r=f&&e.as||g,o="",l=[],I=e;if(null==e.theme){for(var m in I={},e)I[m]=e[m];I.theme=(0,i.useContext)(c.T)}"string"==typeof e.className?o=(0,s.f)(t.registered,l,e.className):null!=e.className&&(o=e.className+" ");var T=(0,u.O)(M.concat(l),t.registered,I);(0,s.M)(t,T,"string"==typeof r);o+=t.key+"-"+T.name,void 0!==a&&(o+=" "+a);var h=f&&void 0===d?p(r):y,b={};for(var A in e)f&&"as"===A||h(A)&&(b[A]=e[A]);return b.className=o,b.ref=n,(0,i.createElement)(r,b)}));return b.displayName=void 0!==o?o:"Styled("+("string"==typeof g?g:g.displayName||g.name||"Component")+")",b.defaultProps=t.defaultProps,b.__emotion_real=b,b.__emotion_base=g,b.__emotion_styles=M,b.__emotion_forwardProp=d,Object.defineProperty(b,"toString",{value:function(){return"."+a}}),b.withComponent=function(t,i){return e(t,(0,r.Z)({},n,i,{shouldForwardProp:I(b,i,!0)})).apply(void 0,M)},b}},f=n(3431),m=n.p+"static/midival-logo-transparent-2d38be8cd28d72d991f8ca3595594754.png";var M,T,h,b,A=y("li",{target:"ejn9slg0"})({name:"mlcwud",styles:"img{height:200px;max-width:18vw;}"}),C=function(){return(0,f.tZ)("ul",null,(0,f.tZ)(A,null,(0,f.tZ)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTExcHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iLTM0IDEgNTExIDUxMS45OTk5OSIgd2lkdGg9IjUxMXB0Ij4KPGcgaWQ9InN1cmZhY2UxIj4KPHBhdGggZD0iTSAyMjIuMTU2MjUgNTEyIEwgMC41IDM4My45OTYwOTQgTCAwLjUgMTI4IEwgMjIyLjE1NjI1IDAgTCA0NDMuODA4NTk0IDEyOCBMIDQ0My44MDg1OTQgMzgzLjk5NjA5NCBaIE0gMzAuNTE5NTMxIDM2Ni42Njc5NjkgTCAyMjIuMTU2MjUgNDc3LjMzMjAzMSBMIDQxMy43ODkwNjIgMzY2LjY2Nzk2OSBMIDQxMy43ODkwNjIgMTQ1LjMzMjAzMSBMIDIyMi4xNTYyNSAzNC42Njc5NjkgTCAzMC41MTk1MzEgMTQ1LjMzMjAzMSBaIE0gMzAuNTE5NTMxIDM2Ni42Njc5NjkgIiBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6I0RERERERDtmaWxsLW9wYWNpdHk6MTsiIC8+CjxwYXRoIGQ9Ik0gMTE1LjMzNTkzOCAzMTcuNTc4MTI1IEwgNTMuNzU3ODEyIDI1NiBMIDExNS4zMzU5MzggMTk0LjQxNzk2OSBMIDEzNi41NjY0MDYgMjE1LjY0ODQzOCBMIDk2LjIxMDkzOCAyNTYgTCAxMzYuNTY2NDA2IDI5Ni4zNTE1NjIgWiBNIDExNS4zMzU5MzggMzE3LjU3ODEyNSAiIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDojREREREREO2ZpbGwtb3BhY2l0eToxOyIgLz4KPHBhdGggZD0iTSAzMjguOTcyNjU2IDMxNy41NzgxMjUgTCAzMDcuNzQ2MDk0IDI5Ni4zNTE1NjIgTCAzNDguMDk3NjU2IDI1NiBMIDMwNy43NDYwOTQgMjE1LjY0ODQzOCBMIDMyOC45NzI2NTYgMTk0LjQxNzk2OSBMIDM5MC41NTQ2ODggMjU2IFogTSAzMjguOTcyNjU2IDMxNy41NzgxMjUgIiBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6I0RERERERDtmaWxsLW9wYWNpdHk6MTsiIC8+CjxwYXRoIGQ9Ik0gMjQ0LjA1ODU5NCAxNzguNjE3MTg4IEwgMjcwLjkwNjI1IDE5Mi4wMzkwNjIgTCAyMDAuMjQ2MDk0IDMzMy4zNjMyODEgTCAxNzMuMzk0NTMxIDMxOS45Mzc1IFogTSAyNDQuMDU4NTk0IDE3OC42MTcxODggIiBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6I0RERERERDtmaWxsLW9wYWNpdHk6MTsiIC8+CjwvZz4KPC9zdmc+"}),(0,f.tZ)("h3",null,"Easy Syntax"),(0,f.tZ)("p",null,"Use event-driven interface instead of building and parsing messages by hand!")),(0,f.tZ)(A,null,(0,f.tZ)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDYzMCA2MzAiPgo8IS0tClRoZSBNSVQgTGljZW5zZSAoTUlUKQoKQ29weXJpZ2h0IChjKSAyMDE1IFJlbW8gSC4gSmFuc2VuIDxyZW1vLmphbnNlbkB3b2xrc29mdHdhcmUuY29tPgoKUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weQpvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAiU29mdHdhcmUiKSwgdG8gZGVhbAppbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzCnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwKY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzCmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6CgpUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbgphbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS4KClRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAiQVMgSVMiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SCklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLApGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUKQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUgpMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLApPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOClRIRSBTT0ZUV0FSRS4KLS0+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDYzMC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCmZpbGw9IiNEREREREQiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik0wIDMxNTAgbDAgLTMxNTAgMzE1MCAwIDMxNTAgMCAwIDMxNTAgMCAzMTUwIC0zMTUwIDAgLTMxNTAgMCAwCi0zMTUweiBtNTA3NyAyNTEgYzE2MCAtNDAgMjgyIC0xMTEgMzk0IC0yMjcgNTggLTYyIDE0NCAtMTc1IDE1MSAtMjAyIDIgLTgKLTI3MiAtMTkyIC00MzggLTI5NSAtNiAtNCAtMzAgMjIgLTU3IDYyIC04MSAxMTggLTE2NiAxNjkgLTI5NiAxNzggLTE5MSAxMwotMzE0IC04NyAtMzEzIC0yNTQgMCAtNDkgNyAtNzggMjcgLTExOCA0MiAtODcgMTIwIC0xMzkgMzY1IC0yNDUgNDUxIC0xOTQKNjQ0IC0zMjIgNzY0IC01MDQgMTM0IC0yMDMgMTY0IC01MjcgNzMgLTc2OCAtMTAwIC0yNjIgLTM0OCAtNDQwIC02OTcgLTQ5OQotMTA4IC0xOSAtMzY0IC0xNiAtNDgwIDUgLTI1MyA0NSAtNDkzIDE3MCAtNjQxIDMzNCAtNTggNjQgLTE3MSAyMzEgLTE2NCAyNDMKMyA0IDI5IDIwIDU4IDM3IDI4IDE2IDEzNCA3NyAyMzQgMTM1IGwxODEgMTA1IDM4IC01NiBjNTMgLTgxIDE2OSAtMTkyIDIzOQotMjI5IDIwMSAtMTA2IDQ3NyAtOTEgNjEzIDMxIDU4IDUzIDgyIDEwOCA4MiAxODkgMCA3MyAtOSAxMDUgLTQ3IDE2MCAtNDkgNzAKLTE0OSAxMjkgLTQzMyAyNTIgLTMyNSAxNDAgLTQ2NSAyMjcgLTU5MyAzNjUgLTc0IDgwIC0xNDQgMjA4IC0xNzMgMzE1IC0yNAo4OSAtMzAgMzEyIC0xMSA0MDIgNjcgMzE0IDMwNCA1MzMgNjQ2IDU5OCAxMTEgMjEgMzY5IDEzIDQ3OCAtMTR6IG0tMTQ3OQotMjYzIGwyIC0yNTggLTQxMCAwIC00MTAgMCAwIC0xMTY1IDAgLTExNjUgLTI5MCAwIC0yOTAgMCAwIDExNjUgMCAxMTY1IC00MTAKMCAtNDEwIDAgMCAyNTMgYzAgMTQwIDMgMjU3IDcgMjYwIDMgNCA1MDIgNiAxMTA3IDUgbDExMDEgLTMgMyAtMjU3eiIgLz4KPC9nPgo8L3N2Zz4K"}),(0,f.tZ)("h3",null,"Written in TypeScript"),(0,f.tZ)("p",null,"With included type definitions you can write your code with greater confidence!")),(0,f.tZ)(A,null,(0,f.tZ)("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4wICg0MDM1YTRmLCAyMDIwLTA1LTAxKSIKICAgc29kaXBvZGk6ZG9jbmFtZT0icGx1Zy5zdmciCiAgIHZlcnNpb249IjEuMSIKICAgd2lkdGg9IjUxMiIKICAgdmlld0JveD0iMCAwIDUxMi4wODYgNTEyLjA4NiIKICAgaGVpZ2h0PSI1MTIiCiAgIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMi4wODYgNTEyLjA4NiIKICAgaWQ9IkxheWVyXzEiPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTg0NCI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGRlZnMKICAgICBpZD0iZGVmczg0MiIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyNSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCIKICAgICBpbmtzY2FwZTpjeT0iMjU2IgogICAgIGlua3NjYXBlOmN4PSIyNTQuOTk2MDgiCiAgICAgaW5rc2NhcGU6em9vbT0iMC45OTYwOTM3NSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaWQ9Im5hbWVkdmlldzg0MCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI3ODYiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxNjI2IgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiIC8+CiAgPGcKICAgICBzdHlsZT0iZmlsbDojZGRkZGRkO2ZpbGwtb3BhY2l0eToxIgogICAgIGlkPSJnODM3Ij4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZGRkZGRkO2ZpbGwtb3BhY2l0eToxIgogICAgICAgaWQ9InBhdGg4MzMiCiAgICAgICBkPSJtMjc4Ljc0MSAyNzguNzQxLTQwLjg2IDQwLjg2LTQ1LjM5Ni00NS4zOTYgNDAuODYtNDAuODYtMjEuMjEzLTIxLjIxMy00MC44NiA0MC44Ni0zMS4yNzEtMzEuMjcxLTc3LjYxNyA3Ny42MTZjLTM2LjI5MSAzNi4yOTEtMzcuMzE0IDk0LjY4OC0zLjA4NyAxMzIuMjM3bC01OS4yOTcgNTkuMjk5IDIxLjIxMyAyMS4yMTMgNTkuMjkyLTU5LjI5MmMxNy42NzggMTYuMTMyIDQwLjQxIDI0Ljk2NyA2NC41IDI0Ljk2NyAyNS41OSAwIDQ5LjY0OC05Ljk2NSA2Ny43NDMtMjguMDZsNzcuNjE2LTc3LjYxNy0zMS4yNzEtMzEuMjcxIDQwLjg2LTQwLjg2em0tODcuMjA2IDE0OS43NDdjLTEyLjQyOSAxMi40MjgtMjguOTUzIDE5LjI3My00Ni41MyAxOS4yNzNzLTM0LjEwMS02Ljg0NS00Ni41My0xOS4yNzNsLTE0Ljg3Ny0xNC44NzhjLTI1LjY1Ni0yNS42NTctMjUuNjU2LTY3LjQwMyAwLTkzLjA2bDU2LjQwNC01Ni40MDMgMTA3LjkzNiAxMDcuOTM2eiIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZGRkZGRkO2ZpbGwtb3BhY2l0eToxIgogICAgICAgaWQ9InBhdGg4MzUiCiAgICAgICBkPSJtNTEyLjA4NiAyMS4yMTMtMjEuMjEzLTIxLjIxMy01OS4yOTIgNTkuMjkyYy0xNy42NzgtMTYuMTMyLTQwLjQxLTI0Ljk2Ny02NC41LTI0Ljk2Ny0yNS41OSAwLTQ5LjY0OCA5Ljk2NS02Ny43NDMgMjguMDZsLTc3LjYxNiA3Ny42MTcgMTUwLjM2MiAxNTAuMzYyIDc3LjYxNy03Ny42MTZjMzYuMjkxLTM2LjI5MSAzNy4zMTQtOTQuNjg5IDMuMDg3LTEzMi4yMzd6bS04My41OTggMTcwLjMyMi01Ni40MDQgNTYuNDAzLTEwNy45MzYtMTA3LjkzNiA1Ni40MDMtNTYuNDA0YzEyLjQyOS0xMi40MjggMjguOTUzLTE5LjI3MyA0Ni41My0xOS4yNzNzMzQuMTAxIDYuODQ1IDQ2LjUzIDE5LjI3M2wxNC44NzcgMTQuODc3YzI1LjY1NiAyNS42NTcgMjUuNjU2IDY3LjQwMyAwIDkzLjA2eiIgLz4KICA8L2c+Cjwvc3ZnPgo="}),(0,f.tZ)("h3",null,"Extendability"),(0,f.tZ)("p",null,"You can use the same interface to run code in the browser, node or in the browser.")))},N=n.p+"static/cover-56f9b3f2ffc9ce8db83f958641dd053b.jpg",w=y("div",{target:"eqrgkj80"})("height:60vh;width:100%;background:linear-gradient(to bottom, #0303fb1a, rgba(0, 0, 0, 0.9)),url(",N,");background-size:cover;background-position:center center;"),v=n(5697),S=n.n(v),j=n(4839),x=n.n(j),D=n(2993),k=n.n(D),z=n(6494),Z=n.n(z),E="bodyAttributes",L="htmlAttributes",O="titleAttributes",R={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},U=(Object.keys(R).map((function(e){return R[e]})),"charset"),Y="cssText",B="href",G="http-equiv",P="innerHTML",Q="itemprop",V="name",W="property",F="rel",H="src",J="target",X={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},K="defaultTitle",_="defer",q="encodeSpecialCharacters",$="onChangeClientState",ee="titleTemplate",te=Object.keys(X).reduce((function(e,t){return e[X[t]]=t,e}),{}),ne=[R.NOSCRIPT,R.SCRIPT,R.STYLE],re="data-react-helmet",ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oe=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ae=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ce=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},se=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ue=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ge=function(e){var t=fe(e,R.TITLE),n=fe(e,ee);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=fe(e,K);return t||r||void 0},de=function(e){return fe(e,$)||function(){}},pe=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return le({},e,t)}),{})},Ie=function(e,t){return t.filter((function(e){return void 0!==e[R.BASE]})).map((function(e){return e[R.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},ye=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&be("Helmet: "+e+' should be of type "Array". Instead found type "'+ie(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var l=o[a],c=l.toLowerCase();-1===t.indexOf(c)||n===F&&"canonical"===e[n].toLowerCase()||c===F&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==P&&l!==Y&&l!==Q||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][s]&&(i[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var l=o[a],c=Z()({},r[l],i[l]);r[l]=c}return e}),[]).reverse()},fe=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},me=(M=Date.now(),function(e){var t=Date.now();t-M>16?(M=t,e(t)):setTimeout((function(){me(e)}),0)}),Me=function(e){return clearTimeout(e)},Te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||me:n.g.requestAnimationFrame||me,he="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Me:n.g.cancelAnimationFrame||Me,be=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Ae=null,Ce=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,g=e.title,d=e.titleAttributes;ve(R.BODY,r),ve(R.HTML,i),we(g,d);var p={baseTag:Se(R.BASE,n),linkTags:Se(R.LINK,o),metaTags:Se(R.META,a),noscriptTags:Se(R.NOSCRIPT,l),scriptTags:Se(R.SCRIPT,s),styleTags:Se(R.STYLE,u)},I={},y={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(I[e]=n),r.length&&(y[e]=p[e].oldTags)})),t&&t(),c(e,I,y)},Ne=function(e){return Array.isArray(e)?e.join(""):e},we=function(e,t){void 0!==e&&document.title!==e&&(document.title=Ne(e)),ve(R.TITLE,t)},ve=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(re),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),l=0;l<a.length;l++){var c=a[l],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===i.indexOf(c)&&i.push(c);var u=o.indexOf(c);-1!==u&&o.splice(u,1)}for(var g=o.length-1;g>=0;g--)n.removeAttribute(o[g]);i.length===o.length?n.removeAttribute(re):n.getAttribute(re)!==a.join(",")&&n.setAttribute(re,a.join(","))}},Se=function(e,t){var n=document.head||document.querySelector(R.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===P)n.innerHTML=t.innerHTML;else if(r===Y)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(re,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},je=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},xe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[X[n]||n]=e[n],t}),t)},De=function(e,t,n){switch(e){case R.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[re]=!0,o=xe(n,r),[i.createElement(R.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var i=je(n),o=Ne(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+ue(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+ue(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case E:case L:return{toComponent:function(){return xe(t)},toString:function(){return je(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[re]=!0,r);return Object.keys(t).forEach((function(e){var n=X[e]||e;if(n===P||n===Y){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),i.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===P||e===Y)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+ue(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===ne.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},ke=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,g=void 0===u?"":u,d=e.titleAttributes;return{base:De(R.BASE,t,r),bodyAttributes:De(E,n,r),htmlAttributes:De(L,i,r),link:De(R.LINK,o,r),meta:De(R.META,a,r),noscript:De(R.NOSCRIPT,l,r),script:De(R.SCRIPT,c,r),style:De(R.STYLE,s,r),title:De(R.TITLE,{title:g,titleAttributes:d},r)}},ze=x()((function(e){return{baseTag:Ie([B,J],e),bodyAttributes:pe(E,e),defer:fe(e,_),encode:fe(e,q),htmlAttributes:pe(L,e),linkTags:ye(R.LINK,[F,B],e),metaTags:ye(R.META,[V,U,G,W,Q],e),noscriptTags:ye(R.NOSCRIPT,[P],e),onChangeClientState:de(e),scriptTags:ye(R.SCRIPT,[H,P],e),styleTags:ye(R.STYLE,[Y],e),title:ge(e),titleAttributes:pe(O,e)}}),(function(e){Ae&&he(Ae),e.defer?Ae=Te((function(){Ce(e,(function(){Ae=null}))})):(Ce(e),Ae=null)}),ke)((function(){return null})),Ze=(T=ze,b=h=function(e){function t(){return oe(this,t),se(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!k()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case R.SCRIPT:case R.NOSCRIPT:return{innerHTML:t};case R.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return le({},r,((t={})[n.type]=[].concat(r[n.type]||[],[le({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case R.TITLE:return le({},i,((t={})[r.type]=a,t.titleAttributes=le({},o),t));case R.BODY:return le({},i,{bodyAttributes:le({},o)});case R.HTML:return le({},i,{htmlAttributes:le({},o)})}return le({},i,((n={})[r.type]=le({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=le({},t);return Object.keys(e).forEach((function(t){var r;n=le({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[te[n]||n]=e[n],t}),t)}(ce(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case R.LINK:case R.META:case R.NOSCRIPT:case R.SCRIPT:case R.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=ce(e,["children"]),r=le({},n);return t&&(r=this.mapChildrenToProps(t,r)),i.createElement(T,r)},ae(t,null,[{key:"canUseDOM",set:function(e){T.canUseDOM=e}}]),t}(i.Component),h.propTypes={base:S().object,bodyAttributes:S().object,children:S().oneOfType([S().arrayOf(S().node),S().node]),defaultTitle:S().string,defer:S().bool,encodeSpecialCharacters:S().bool,htmlAttributes:S().object,link:S().arrayOf(S().object),meta:S().arrayOf(S().object),noscript:S().arrayOf(S().object),onChangeClientState:S().func,script:S().arrayOf(S().object),style:S().arrayOf(S().object),title:S().string,titleAttributes:S().object,titleTemplate:S().string},h.defaultProps={defer:!0,encodeSpecialCharacters:!0},h.peek=T.peek,h.rewind=function(){var e=T.rewind();return e||(e=ke({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},b);Ze.renderStatic=Ze.rewind;var Ee={name:"kvtmmk",styles:"html,body{margin:0;padding:0;}"},Le=function(e,t){return void 0===t&&(t=""),function(n){return n[e]||t}},Oe=y("main",{target:"e10exyd26"})({name:"wcmdl",styles:'margin:0 auto;font-family:"Yantramanav";font-weight:300;font-size:22px;h1,h2,h3{font-weight:500;}h1{font-size:64px;font-weight:800;margin:0;padding:0;}h2{font-size:26px;}'}),Re=y("section",{target:"e10exyd25"})({name:"1a0xj95",styles:'min-height:50vh;color:#fff;position:relative;margin-bottom:-20px;font-family:"Yantramanav"!important;h1{font-size:120px;}h3{font-size:50px;text-shadow:3px 3px 0px rgba(0,0,100,0.8);font-weight:800;line-height:1em;text-transform:uppercase;}a{background:#002642;padding:0.5em;border-radius:5px;font-size:22px;color:#fff;text-decoration:none;font-weight:400;&:hover{background:#442642;}}'}),Ue=y("section",{target:"e10exyd24"})({name:"7e8oag",styles:"padding:5em 5em;background:#0f2637;color:#FFF;font-size:20px;h2{font-size:35px;font-weight:800;}h3{font-weight:800;font-size:1.9em;text-transform:uppercase;}ul{list-style:none;display:flex;margin-top:8em;li{flex:1;text-align:center;}}"}),Ye=(y("section",{target:"e10exyd23"})("padding:2em 5em;padding-top:calc(2em + 30px);padding-bottom:calc(2em + 100px);background:",Le("background","#DDD"),";color:",Le("color","#000"),";position:relative;&::after{",(function(e){return e.noSkew?"":"content: ''"}),";display:block;position:absolute;bottom:0;left:0;width:100%;height:100px;background:",Le("background","#DDD"),";z-index:2;transform:skewY(3deg) translate(0, 50%);}",(function(e){return e.comingSoon?"\n    pointer-events: none;\n    background: #AAA;\n    color: #444;\n    code {\n      background: #888 !important;\n      color: inherit !important;\n    }\n    &::after {\n      background: #AAA;\n      border-bottom: 1px solid #333;\n    }\n\n    &::before {\n      content: 'Comming Soon';\n      color: #FFF;\n      display: block;\n      font-size: 60px;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%);\n      font-weight: bold;\n    }\n\n  ":""})," code{margin:0.5em 0;background:#222;color:#eee;padding:0.4em;}"),y("div",{target:"e10exyd22"})({name:"m0ana7",styles:"margin:0 auto;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)"})),Be=(y("header",{target:"e10exyd21"})({name:"1kj6ak7",styles:"position:fixed;top:0;left:0;z-index:1000;width:100%"}),y("ul",{target:"e10exyd20"})({name:"1bkfzxj",styles:'list-style:none;padding:5em 2em;margin:0;background:#091722;color:#FFF;display:grid;grid-template-columns:repeat(3, 1fr);li{padding:1em;border:1px solid #999;background:#122737;margin:1em;display:flex;flex-direction:column;p{flex:1;}a,button{text-align:center;padding:0.2em 0.5em;font-size:25px;border:1px solid #999;border-radius:5px;background:#13222f;font-family:"Yantramanav";color:#FFF;text-decoration:none;width:auto;&:disabled{color:#888;}}}'})),Ge=function(){return(0,f.tZ)(i.Fragment,null,(0,f.tZ)(Ze,null,(0,f.tZ)("meta",{charSet:"utf-8"}),(0,f.tZ)("title",null,"MIDIVal - TypeScript / JavaScript library for all your MIDI needs."),(0,f.tZ)("link",{rel:"canonical",href:"https://midival.github.io/"}),(0,f.tZ)("meta",{name:"description",content:"MIDIVal is TypeScript / JavaScript library for sending and recieving MIDI data using tidly organised API."}),(0,f.tZ)("meta",{property:"og:title",content:"MIDIVal - TS/JS library for MIDI"}),(0,f.tZ)("meta",{property:"og:description",content:"MIDIVal is TypeScript / JavaScript library for sending and recieving MIDI data using tidly organised API."}),(0,f.tZ)("meta",{property:"og:image",content:"https://midival.github.io/thumb.png"}),(0,f.tZ)("meta",{property:"og:url",content:"https://midival.github.io/"}),(0,f.tZ)("meta",{name:"twitter:title",content:"MIDIVal - TS/JS library for MIDI"}),(0,f.tZ)("meta",{name:"twitter:description",content:" MIDIVal is TypeScript / JavaScript library for sending and recieving MIDI data using tidly organised API."}),(0,f.tZ)("meta",{name:"twitter:image",content:"https://midival.github.io/thumb.png"}),(0,f.tZ)("meta",{name:"twitter:card",content:"summary_large_image"})),(0,f.tZ)(Oe,null,(0,f.tZ)(f.xB,{styles:Ee}),(0,f.tZ)(Re,null,(0,f.tZ)(w,null),(0,f.tZ)(Ye,null,(0,f.tZ)("h1",null,(0,f.tZ)("img",{src:m})),(0,f.tZ)("h3",null,"TypeScript / JavaScript library for all your MIDI needs."),(0,f.tZ)("a",{href:"/core"},"Quick Start"))),(0,f.tZ)(Ue,null,(0,f.tZ)("h2",null,"What is MIDIVal?"),(0,f.tZ)("p",null,"MIDIVal is TypeScript / JavaScript library for sending and recieving MIDI data using tidly organised API. It is easily extendable, platform agnostic and built with modern patterns in mind."),(0,f.tZ)(C,null)),(0,f.tZ)(Be,null,(0,f.tZ)("li",null,(0,f.tZ)("h2",null,"@midival/",(0,f.tZ)("b",null,"core")),(0,f.tZ)("code",null,"yarn add @midival/core"),(0,f.tZ)("p",null,"Core libary providing easy to use interface to communicate with both MIDI IN and OUT. Has browser MIDI implementation by default and can be extended with other modules."),(0,f.tZ)("a",{href:"https://midival.github.io/core/","data-button":!0},"Check documentation")),(0,f.tZ)("li",null,(0,f.tZ)("h2",null,"@midival/",(0,f.tZ)("b",null,"node")),(0,f.tZ)("code",null,"yarn add @midival/node"),(0,f.tZ)("p",null,"Implementation of MIDI communication for Node. Provides the same interface as @midival/core."),(0,f.tZ)("a",{href:"https://midival.github.io/core/","data-button":!0},"Check documentation")),(0,f.tZ)("li",null,(0,f.tZ)("h2",null,"@midival/",(0,f.tZ)("b",null,"native")),(0,f.tZ)("code",null,"yarn add @midival/native"),(0,f.tZ)("p",null,"React Native library (bindings with iOS, Android comming in the future). Provides the same interface as @midival/core."),(0,f.tZ)("button",{disabled:!0},"Comming soon")))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-f92b0a5877e68c317438.js.map