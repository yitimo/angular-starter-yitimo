# angular-starter-yitimo
Mainly refer to AngularClass/angular-starter, but remove the hmr part and test part.
For study purpose I added my own comment through the whole starter, but the version may not always be the latest.
To get the best powerful starter you can go to [angular-starter](https://github.com/AngularClass/angular-starter "AngularClass/angular-starter"), and it will have a lot more to study.

/**
* 使用npm进行项目的依赖管理
* 主要分为两部分：
* 【脚本部分】在scripts中添加npm命令 以进行一些快捷操作，常用的有
*   开发模式本地调试: npm run server:dev
*   生产模式预编译打包: npm run build:aot:prod
* 【依赖部分】
*   【webpack】webpack与webpack插件相关依赖(dev-server以及大量loader和plugin)
*   【angular】angular全家桶(@angular/*系列)
*   【必要依赖】主要是zone.js 和 rxjs, angular内部依赖了这俩包, 但他们本身不属于angular框架，此外还有一些shim
*   【typescript】包括ts本身, tslint, 大量types
*   【其他依赖】除去以上还有少数其他的依赖，使用到时自然会知道做什么用
*/