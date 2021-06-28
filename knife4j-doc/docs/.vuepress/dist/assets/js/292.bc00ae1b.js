(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{387:function(t,e,s){"use strict";s.r(e);var a=s(42),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_1-3-cloud模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-cloud模式"}},[t._v("#")]),t._v(" 1.3 Cloud模式")]),t._v(" "),s("p",[t._v("更加详细的实战demo请参考"),s("RouterLink",{attrs:{to:"/action/aggregation-cloud.html"}},[t._v("基于Cloud模式聚合OpenAPI")])],1),t._v(" "),s("blockquote",[s("p",[t._v("取名Cloud模式代表的是开发者的OpenAPI规范是以HTTP接口的形式存在，开发者可以配置通过调用HTTP接口来获取OpenAPI规范")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("knife4j")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableAggregation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 用户体系\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 192.168.0.152"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8999")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /v2/api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("docs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("group=2.X版本\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("swaggerVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servicePath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /abbb/ffe\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routeAuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test3\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("66666")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routeAuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12313")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("knife4j.cloud.enable")]),t._v(":将该属性设置为true，则代表启用Cloud模式")]),t._v(" "),s("li",[s("code",[t._v("knife4j.cloud.routeAuth")]),t._v(":该属性是一个公共Basic验证属性(可选)，如果开发者提供的OpenAPI规范的HTTP接口需要以Basic验证进行鉴权访问，那么可以配置该属性，如果配置该属性，则该模式下所有配置的Routes节点接口都会以Basic验证信息访问接口")]),t._v(" "),s("li",[s("code",[t._v("knife4j.cloud.routeAuth.enable")]),t._v(":是否启用Basic验证")]),t._v(" "),s("li",[s("code",[t._v("knife4j.cloud.routeAuth.usernae")]),t._v(":Basic用户名")]),t._v(" "),s("li",[s("code",[t._v("knife4j.cloud.routeAuth.password")]),t._v(":Basic密码")]),t._v(" "),s("li",[s("code",[t._v("knife4j.cloud.routes")]),t._v(":需要聚合的服务集合(必选)，可以配置多个")]),t._v(" "),s("li",[s("code",[t._v("knife4j.cloud.routes.name")]),t._v(":服务名称(显示名称，最终在Ui的左上角下拉框进行显示)")]),t._v(" "),s("li",[s("code",[t._v("knife4j.cloud.routes.uri")]),t._v(":该服务的接口URI资源，如果是HTTPS，则需要完整配置")]),t._v(" "),s("li",[s("code",[t._v("knife4j.cloud.routes.location:")]),t._v(":具体资源接口地址，最终Knife4j是通过uri+location的组合路径进行访问")]),t._v(" "),s("li",[s("code",[t._v("knife4j.cloud.routes.swaggerVersion")]),t._v(":版本号，默认是"),s("code",[t._v("2.0")]),t._v("，可选配置")]),t._v(" "),s("li",[s("code",[t._v("knife4j.cloud.routes.servicePath")]),t._v(":该属性是最终在Ui中展示的接口前缀属性，提供该属性的目的也是因为通常开发者在以Gateway等方式聚合时，需要一个前缀路径来进行转发，而最终这个前缀路径会在每个接口中进行追加")]),t._v(" "),s("li",[s("code",[t._v("knife4j.cloud.routes.routeAuth")]),t._v(":如果该Route节点的接口开启了Basic，并且和公共配置的Basic不一样，需要单独配置")]),t._v(" "),s("li",[s("code",[t._v("knife4j.cloud.routes.routeAuth.enable")]),t._v(":是否启用Basic验证")]),t._v(" "),s("li",[s("code",[t._v("knife4j.cloud.routes.routeAuth.usernae")]),t._v(":Basic用户名")]),t._v(" "),s("li",[s("code",[t._v("knife4j.cloud.routes.routeAuth.password")]),t._v(":Basic密码")])]),t._v(" "),s("comment-comment")],1)}),[],!1,null,null,null);e.default=n.exports}}]);