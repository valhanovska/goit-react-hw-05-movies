"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[442],{6442:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(885),c=r(2791),a=r(7689),o=r(4390),s="Cast_container__oPPtb",u="Cast_image__ELqru",i=r(184),p=function(){var e=(0,c.useState)(),t=(0,n.Z)(e,2),r=t[0],p=t[1],f=(0,a.UO)().movieId;return(0,c.useEffect)((function(){o.h.fetchMovieDetailsActors(f).then((function(e){var t=e.data;try{p(t.cast)}catch(r){console.log(r)}}))}),[f]),(0,i.jsx)("ul",{className:s,children:r&&r.map((function(e){return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{className:u,src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path),alt:e.name}),(0,i.jsx)("h3",{children:e.name}),(0,i.jsxs)("p",{children:["Character: ",e.character]})]})}))})}},4390:function(e,t,r){r.d(t,{h:function(){return h}});var n=r(5861),c=r(7757),a=r.n(c),o=r(4569),s=r.n(o);s().defaults.baseURL="https://api.themoviedb.org/3";var u="4126216689337915d73a8e90fb5db117",i=function(){var e=(0,n.Z)(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="/trending/movie/day?api_key=".concat(u),e.next=4,s().get(t);case 4:return r=e.sent,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="/search/movie?api_key=".concat(u,"&query=").concat(t),e.next=4,s().get(r);case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="/movie/".concat(t,"?api_key=").concat(u),e.next=4,s().get(r);case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="/movie/".concat(t,"/credits?api_key=").concat(u),e.next=4,s().get(r);case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="/movie/".concat(t,"/reviews?api_key=").concat(u),e.next=4,s().get(r);case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),h={fetchTrendingMovies:i,fetchMovie:p,fetchMovieDetails:f,fetchMovieDetailsActors:v,fetchMovieDetailsReviews:l}}}]);
//# sourceMappingURL=442.90e5ea1b.chunk.js.map