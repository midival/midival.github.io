"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:a,i[1]=r;for(var c=2;c<l;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const l={slug:"midival-0-0-16-with-midi-clock-support",title:"MIDIVal 0.0.16: now with MIDI Clock support",authors:["kulak"],tags:["midival","release","midi clock"]},i=void 0,r={permalink:"/blog/midival-0-0-16-with-midi-clock-support",source:"@site/blog/2022-04-26/index.md",title:"MIDIVal 0.0.16: now with MIDI Clock support",description:"MIDIVal Cover",date:"2022-04-26T00:00:00.000Z",formattedDate:"April 26, 2022",tags:[{label:"midival",permalink:"/blog/tags/midival"},{label:"release",permalink:"/blog/tags/release"},{label:"midi clock",permalink:"/blog/tags/midi-clock"}],readingTime:2.63,hasTruncateMarker:!0,authors:[{name:"Kacper Kula",title:"Author and Maintainer of MIDIVal",url:"https://github.com/kulak-at",imageURL:"https://avatars.githubusercontent.com/u/2923943?v=4",key:"kulak"}],frontMatter:{slug:"midival-0-0-16-with-midi-clock-support",title:"MIDIVal 0.0.16: now with MIDI Clock support",authors:["kulak"],tags:["midival","release","midi clock"]},prevItem:{title:"New MIDIVal releases: core 0.0.17, node 0.0.2 and react-native!",permalink:"/blog/midival-0-0-17-released"},nextItem:{title:"MIDIVal release 0.0.14",permalink:"/blog/midival-0-0-14"}},s={authorsImageUrls:[void 0]},c=[{value:"Listening to MIDI Clock Messages",id:"listening-to-midi-clock-messages",level:2},{value:"Sending MIDI Clock Messages",id:"sending-midi-clock-messages",level:2},{value:"Other Changes",id:"other-changes",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...l}=e;return(0,a.kt)(p,(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MIDIVal Cover",src:n(7551).Z,width:"3000",height:"1687"})),(0,a.kt)("p",null,"The new version of MIDIVal just landed bringing an easier way to use MIDI Clock in your app."),(0,a.kt)("p",null,"If you didn\u2019t come across MIDIVal before, it is a library that simplifies communication with MIDI devices from your JavaScript / TypeScript code by providing a high-level interface. It allows you to communicate with synthesizers (or any other MIDI devices) in an idiomatic way. You can read more about library itself in my initial post here."),(0,a.kt)("p",null,"// CARD LINK"),(0,a.kt)("h2",{id:"listening-to-midi-clock-messages"},"Listening to MIDI Clock Messages"),(0,a.kt)("p",null,"Now you can listen to all MIDI Clock messages like Clock Start, Stop and Continue as well as to individual pulse messages (sent 24 times every quarter note). This allows you to synchronize your Web-based music with an external clock from your synthesizer (or your DAW), create real-time applications based on the clock, or even send it over the web (or whatever else you can imagine)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"midivalInputObject.onClockStart(() => {\n    console.log('MIDI Clock Started');\n});\n\nmidivalInputObject.onClockStop(() => {\n    console.log('MIDI Clock Stoped');\n});\n\nmidivalInputObject.onClockContinue(() => {\n    console.log('MIDI Clock Continued');\n});\n\nmidivalInputObject.onClockPulse(() => {\n    console.log('Pulse');\n});\n")),(0,a.kt)("p",null,"Moreover, if you want to compute and use tempo (beats per minute) in which your MIDI device is sending those messages, you can use MIDIVal to automatically compute that for you. Then you can access it anytime:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const midivalInputObject = new MIDIValInput(input, {\n    computeClockTempo: true, // needs to be set on initialisation to make sure MIDIVal computes it.\n});\n\n// Whenever you want to use it\nconsole.log(`Current Tempo is ${midivalInputObject.tempo}BPM`);\n")),(0,a.kt)("p",null,"If you forget to set ",(0,a.kt)("inlineCode",{parentName:"p"},"computeClockTempo")," option, getting tempo will throw ",(0,a.kt)("inlineCode",{parentName:"p"},"MIDIValConfigurationError")," on access attempt."),(0,a.kt)("h2",{id:"sending-midi-clock-messages"},"Sending MIDI Clock Messages"),(0,a.kt)("p",null,"You can also send MIDI Messages to your MIDI Output device now. The following new methods are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sendClockStart()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sendClockStop()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sendClockContinue()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sendClockPulse()"))),(0,a.kt)("p",null,"These allow you to manually control the clock. This can be a great tool when you don\u2019t have any physical MIDI device with a built-in clock/sequencer or when you want to have full control over the clock from your JavaScript / TypeScript code. Remember that you have to send pulse messages manually 24 times every quarter note, for example like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'let clockHandle = null;\nconst BPM = 120;\n\nmidiStartButton.addEventListener("click", () => {\n    console.log("START");\n    midiOut.sendClockStart();\n    clockHandle = setInterval(() => {\n        midiOut.sendClockPulse();\n    }, 60 * 1000 / (BPM * 24));\n});\n\nmidiStopButton.addEventListener("click", () => {\n    console.log("STOP");\n    midiOut.sendClockStop();\n    clearInterval(clockHandle);\n});\n')),(0,a.kt)("h2",{id:"other-changes"},"Other Changes"),(0,a.kt)("p",null,"Besides adding MIDI Clock messages extended support, new versions of MIDIVal have been reworked from the ground up to incorporate my other project, Omnibus \u2014 a simple implementation of platform-agnostic Event Bus. The initial implementation of the event bus in MIDIVal was a direct inspiration for this library and I decided to make it reusable in different projects."),(0,a.kt)("p",null,"// OMNI LINK"),(0,a.kt)("p",null,"In addition, MIDI Callbacks are not much nicely typed and Note On/Off, CC and Program Change messages get the parameters nicely mapped to logical names:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// before\nmidiInput.onNoteOn(message => {\n    console.log("Note", message.data1);\n    console.log("Velocity", message.data2);\n});\n\n// now\nmidiInput.onNoteon(message => {\n    console.log("Note", message.note);\n    console.log("Velocity", message.velocity);\n});\n')),(0,a.kt)("p",null,"This can allow for tidier code without having to bother about MIDI message internals even more."))}m.isMDXComponent=!0},7551:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cover-b426c6cea58f18301f2165282e409a32.webp"}}]);