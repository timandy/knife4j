(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{397:function(a,t,s){"use strict";s.r(t);var n=s(42),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"自定义文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义文档"}},[a._v("#")]),a._v(" 自定义文档")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("自定义文档是"),s("code",[a._v("knife4j")]),a._v("提供的增强功能,开发者要想使用"),s("code",[a._v("knife4j")]),a._v("提供的增强功能,必须在Swagger的配置文件中引入增强注解,各个版本的增强注解区别如下表:"),s("br")])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("软件")]),a._v(" "),s("th",[a._v("版本")]),a._v(" "),s("th",[a._v("增强注解")]),a._v(" "),s("th",[a._v("说明")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("knife4j")]),a._v(" "),s("td",[a._v("<="),s("code",[a._v("2.0.0")])]),a._v(" "),s("td",[s("code",[a._v("@EnableSwaggerBootstrapUi")])]),a._v(" "),s("td")]),a._v(" "),s("tr",[s("td",[a._v("knife4j")]),a._v(" "),s("td",[a._v(">="),s("code",[a._v("2.0.1")])]),a._v(" "),s("td",[s("code",[a._v("@EnableKnife4j")])]),a._v(" "),s("td",[a._v("后续版本不会再更改")])])])]),a._v(" "),s("ul",[s("li",[a._v("在使用"),s("code",[a._v("knife4j")]),a._v("的<="),s("code",[a._v("2.0.0")]),a._v("版本之前的代码方式,代码示例如下：")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Configuration")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@EnableSwagger2")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@EnableSwaggerBootstrapUi")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeanValidatorPluginsConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SwaggerConfiguration")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    \n "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//more..")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("ul",[s("li",[a._v("在使用"),s("code",[a._v("knife4j")]),a._v("的>="),s("code",[a._v("2.0.1")]),a._v("版本之后的代码方式,代码示例如下：")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Configuration")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@EnableSwagger2")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@EnableKnife4j")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeanValidatorPluginsConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SwaggerConfiguration")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    \n "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//more..")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("后端开启增强注解后,还需要再前端个性化配置中勾选启用增强,整个配置才生效，如下图：")]),a._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/knife4j/enableknife4j.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"效果说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#效果说明"}},[a._v("#")]),a._v(" 效果说明")]),a._v(" "),s("p",[s("code",[a._v("knife4j")]),a._v("为了满足文档的个性化配置,添加了自定义文档功能")]),a._v(" "),s("p",[a._v("开发者可自定义"),s("code",[a._v("md")]),a._v("文件扩展补充整个系统的文档说明")]),a._v(" "),s("p",[a._v("开发者可以在当前项目中添加一个文件夹，文件夹中存放"),s("code",[a._v(".md")]),a._v("格式的markdown文件,每个"),s("code",[a._v(".md")]),a._v("文档代表一份自定义文档说明")]),a._v(" "),s("p",[s("strong",[a._v("注意")]),a._v("：自定义文档说明必须以"),s("code",[a._v(".md")]),a._v("结尾的文件,其他格式文件会被忽略")]),a._v(" "),s("p",[a._v("例如项目结构如下：")]),a._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/1-9-3/construct.png",alt:""}})]),a._v(" "),s("p",[a._v("每个"),s("code",[a._v(".md")]),a._v("文件中，"),s("code",[a._v("swagger-bootstrap-ui")]),a._v("允许一级(h1)、二级(h2)、三级(h3)标题作为最终的文档标题")]),a._v(" "),s("p",[a._v("比如"),s("code",[a._v("api.md")]),a._v("文档：")]),a._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("#")]),a._v(" 自定义文档说明")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("##")]),a._v(" 效果说明")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[a._v("`knife4j`")]),a._v("为了满足文档的个性化配置,添加了自定义文档功能\n\n开发者可自定义"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[a._v("`md`")]),a._v("文件扩展补充整个系统的文档说明\n\n开发者可以在当前项目中添加一个文件夹，文件夹中存放"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[a._v("`.md`")]),a._v("格式的markdown文件,每个"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[a._v("`.md`")]),a._v("文档代表一份自定义文档说明\n\n"),s("span",{pre:!0,attrs:{class:"token bold"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("**")]),s("span",{pre:!0,attrs:{class:"token content"}},[a._v("注意")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("**")])]),a._v("：自定义文档说明必须以"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[a._v("`.md`")]),a._v("结尾的文件,其他格式文件会被忽略\n")])])]),s("p",[a._v("最终在"),s("code",[a._v("knife4j")]),a._v("的界面中,"),s("code",[a._v("api.md")]),a._v("的文档标题会是"),s("code",[a._v("自定义文档说明")])]),a._v(" "),s("p",[a._v("整个文档效果如下：")]),a._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/knife4j/self-doc1.png",alt:""}})]),a._v(" "),s("p",[a._v("如果没有按照一级(h1)、二级(h2)、三级(h3)来设置标题,默认标题会是文件名称，如图上的"),s("code",[a._v("api2.md")])]),a._v(" "),s("h2",{attrs:{id:"如何使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[a._v("#")]),a._v(" 如何使用")]),a._v(" "),s("h3",{attrs:{id:"spring-boot环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot环境"}},[a._v("#")]),a._v(" Spring Boot环境")]),a._v(" "),s("p",[a._v("在SpringBoot环境中,首先需要在"),s("code",[a._v("application.yml")]),a._v("或者"),s("code",[a._v("application.properties")]),a._v("配置文件中配置自定义文档目录")]),a._v(" "),s("p",[a._v("如下：")]),a._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("knife4j")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("markdowns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" classpath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("markdown/*\n")])])]),s("p",[a._v("然后在Swagger的配置文件中启用"),s("code",[a._v("@EnableKnife4j")]),a._v("注解")]),a._v(" "),s("p",[a._v("如下代码：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Configuration")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@EnableSwagger2")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@EnableKnife4j")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SwaggerConfiguration")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//more...")]),a._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"demo示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo示例"}},[a._v("#")]),a._v(" demo示例")]),a._v(" "),s("p",[a._v("以上两种不同环境的demo示例可参考"),s("a",{attrs:{href:"https://gitee.com/xiaoym/swagger-bootstrap-ui-demo",target:"_blank",rel:"noopener noreferrer"}},[a._v("swagger-bootstrap-ui-demo"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);