_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{UlpH:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n("q1tI"),a=n.n(r),o=n("YFqc"),l=n.n(o),c=a.a.createElement,u="Neo's Blog";t.a=function(e){var t=e.children,n=e.home;return c("div",{className:"max-w-xxl px-4 py-0 mt-12 mx-auto mb-24"},c("header",{className:"flex flex-col items-center"},n?c(a.a.Fragment,null,c("div",{className:"flex justify-center"},c("img",{src:"/images/profile.jpg",className:"w-32 h-32 rounded-full",alt:"Neo Holk"})),c("h1",{className:"flex justify-center text-xl"},"Neo Holk")):null),c("main",null,t),!n&&c("div",{className:"mt-12"},c(l.a,{href:"/",as:"/"},c("a",null,"\u2190 Back to home"))))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,l=a(n("q1tI")),c=n("elyg"),u=(n("g/15"),n("nOHt")),s=new Map,i=window.IntersectionObserver,f={};var p=function(e,t){var n=o||(i?o=new i((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function d(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=l.default.useState(),a=r(n,2),o=a[0],s=a[1],m=(0,u.useRouter)(),h=m&&m.pathname||"/",v=l.default.useMemo((function(){var t=(0,c.resolveHref)(h,e.href);return{href:t,as:e.as?(0,c.resolveHref)(h,e.as):t}}),[h,e.href,e.as]),g=v.href,y=v.as;l.default.useEffect((function(){if(t&&i&&o&&o.tagName&&(0,c.isLocalURL)(g)&&!f[g+"%"+y])return p(o,(function(){d(m,g,y)}))}),[t,o,g,y,m]);var w=e.children,x=e.replace,N=e.shallow,_=e.scroll;"string"===typeof w&&(w=l.default.createElement("a",null,w));var E=l.Children.only(w),b={ref:function(e){e&&s(e),E&&"object"===typeof E&&E.ref&&("function"===typeof E.ref?E.ref(e):"object"===typeof E.ref&&(E.ref.current=e))},onClick:function(e){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==l&&(l=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,g,y,x,N,_)}};return t&&(b.onMouseEnter=function(e){(0,c.isLocalURL)(g)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),d(m,g,y,{priority:!0}))}),!e.passHref&&("a"!==E.type||"href"in E.props)||(b.href=(0,c.addBasePath)(y)),l.default.cloneElement(E,b)};t.default=m},u7QL:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return s})),n.d(t,"default",(function(){return i}));var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),l=n.n(o),c=n("UlpH"),u=a.a.createElement,s=!0;function i(e){var t=e.postData;return u(c.a,null,u(a.a.Fragment,null,u(l.a,null,u("title",null,t.title)),u("article",{className:""},u("h1",{className:"text-sm sm:text-3xl font-extrabold my-4 leading-tight"},t.title),u("div",{className:"text-sm text-gray-500"},"\u7f16\u8f91\u4e8e:",t.date),u("br",null),u("div",{dangerouslySetInnerHTML:{__html:t.content}}))))}},wyEa:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return n("u7QL")}])}},[["wyEa",0,2,1]]]);