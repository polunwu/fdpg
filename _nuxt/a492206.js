(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{287:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS41MDUiIGhlaWdodD0iMTUuNTA1IiB2aWV3Qm94PSIwIDAgMTUuNTA1IDE1LjUwNSI+PHBhdGggZD0iTTIxLjUwNSwxMi43ODNIOS43MTJsNS40MTctNS40MTdMMTMuNzUzLDYsNiwxMy43NTNsNy43NTMsNy43NTMsMS4zNjYtMS4zNjZMOS43MTIsMTQuNzIySDIxLjUwNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02IC02KSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="},331:function(t,n,r){t.exports=r.p+"img/home-white.5fd39bb.svg"},332:function(t,n,r){t.exports=r.p+"img/floating_bg@2x.c501500.png"},333:function(t,n,r){t.exports=r.p+"img/intro_1.4e96f3e.gif"},334:function(t,n,r){t.exports=r.p+"img/intro_2.145fa68.gif"},335:function(t,n,r){t.exports=r.p+"img/intro_3.388e638.gif"},363:function(t,n,r){"use strict";r.r(n);var e=r(326),o={layout:"dashboard",data:function(){return{swiperOption:{slidesPerView:1,pagination:{el:".swiper-pagination"},navigation:{nextEl:".next"}}}},mounted:function(){var t,n;t=this.$refs,n=t.floatingBg,e.a.timeline().to(n,{x:"random(-150, 150)",y:"random(-100, 200)",duration:5,ease:"power1.inOut",repeat:-1,repeatRefresh:!0})},computed:{swiper:function(){return this.$refs.introSwiper.$swiper}},methods:{handleNext:function(){this.swiper.isEnd&&(console.log("end"),window.location.href=window.location.origin+"/ar-character.html")}}},c=r(22),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"page-ar-intro"}},[e("nav",{attrs:{id:"ar-intro-nav"}},[e("a",{staticClass:"back-link",on:{click:function(n){return n.preventDefault(),t.$router.back()}}},[e("img",{attrs:{src:r(287),alt:"back"}})]),t._v(" "),e("NuxtLink",{staticClass:"home-link",attrs:{to:"/"}},[e("img",{attrs:{src:r(331),alt:"home"}})]),t._v(" "),e("div",{staticClass:"spacer"})],1),t._v(" "),e("div",{ref:"bg",staticClass:"bg"}),t._v(" "),e("img",{ref:"floatingBg",staticClass:"floating-bg",attrs:{src:r(332),alt:"floating_bg"}}),t._v(" "),e("swiper",{ref:"introSwiper",staticClass:"swiper",attrs:{options:t.swiperOption}},[e("swiper-slide",[e("img",{staticClass:"intro-graph",attrs:{src:r(333),alt:"intro_1"}}),t._v(" "),e("p",{staticClass:"describe"},[t._v("\n        這是解鎖的色的第 1 步，首先找到玩心盒當中的神聖印記 ...\n      ")])]),t._v(" "),e("swiper-slide",[e("img",{staticClass:"intro-graph",attrs:{src:r(334),alt:"intro_2"}}),t._v(" "),e("p",{staticClass:"describe"},[t._v("\n        接著，授權相機，對準印記，系統就會開始辨識分析...\n      ")])]),t._v(" "),e("swiper-slide",[e("img",{staticClass:"intro-graph",attrs:{src:r(335),alt:"intro_3"}}),t._v(" "),e("p",{staticClass:"describe"},[t._v("\n        分析完成！查看你專屬角色的各項數值和技能，還能將分析結果拍照分享到\n        IG！\n      ")])]),t._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1),t._v(" "),e("div",{staticClass:"bottom-btns"},[e("a",{staticClass:"skip",attrs:{href:"ar-character.html"}},[t._v(" 略過 ")]),t._v(" "),e("div",{staticClass:"next",on:{click:t.handleNext}},[t._v("我知道了")])])],1)}),[],!1,null,null,null);n.default=component.exports}}]);