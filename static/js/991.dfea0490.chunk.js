"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[991],{4991:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(885),c=n(2791),a=n(7689),u=n(4390),o="Reviews_container__rhKnN",s=n(184),i=function(){var e=(0,c.useState)(),t=(0,r.Z)(e,2),n=t[0],i=t[1],p=(0,a.UO)().movieId;return(0,c.useEffect)((function(){u.h.fetchMovieDetailsReviews(p).then((function(e){var t=e.data;try{i(t.results)}catch(n){console.log(n)}}))}),[p]),(0,s.jsx)("ul",{className:o,children:n&&n.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:e.author}),(0,s.jsx)("p",{children:e.content})]})}))})}},4390:function(e,t,n){n.d(t,{h:function(){return h}});var r=n(5861),c=n(7757),a=n.n(c),u=n(4569),o=n.n(u);o().defaults.baseURL="https://api.themoviedb.org/3";var s="4126216689337915d73a8e90fb5db117",i=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="/trending/movie/day?api_key=".concat(s),e.next=4,o().get(t);case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="/search/movie?api_key=".concat(s,"&query=").concat(t),e.next=4,o().get(n);case 4:return r=e.sent,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="/movie/".concat(t,"?api_key=").concat(s),e.next=4,o().get(n);case 4:return r=e.sent,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="/movie/".concat(t,"/credits?api_key=").concat(s),e.next=4,o().get(n);case 4:return r=e.sent,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="/movie/".concat(t,"/reviews?api_key=").concat(s),e.next=4,o().get(n);case 4:return r=e.sent,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),h={fetchTrendingMovies:i,fetchMovie:p,fetchMovieDetails:v,fetchMovieDetailsActors:f,fetchMovieDetailsReviews:l}}}]);
//# sourceMappingURL=991.dfea0490.chunk.js.map