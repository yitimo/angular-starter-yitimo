# angular-starter-yitimo
Mainly refer to AngularClass/angular-starter, but remove the hmr part and test part.
For study purpose I added my own comment through the whole starter, but the version may not always be the latest.
To get the best powerful starter you can go to [angular-starter](https://github.com/gdi2290/angular-starter "angular-starter"), and it will have a lot more to study.

## 运行项目
    git clone
    cd angular-starter-yitimo
    npm install
    npm run server
you may need to have python installed for the node-sass package

## 打包项目(生产模式)
    npm run build:aot:prod
对项目进行生产环境的aot模式打包，输出成dist目录，可将此目录直接部署包web服务器上

## 使用npm进行项目的依赖管理
package.json主要分为两部分：
* 【脚本部分】在scripts中添加npm命令 以进行一些快捷操作，常用的有: 

    开发模式本地调试: npm run server:dev

    生产模式预编译打包: npm run build:aot:prod
* 【依赖部分】dependencies以及devDependencies中包含的包，是本项目所有要用到的依赖

    webpack与webpack插件相关依赖(dev-server以及大量loader和plugin)

    angular全家桶(@angular/*系列)

    还有一些其他的必要依赖，主要是zone.js 和 rxjs, angular内部依赖了这俩包, 但他们本身不属于angular框架，此外还有一些shim
* 【typescript】包括ts本身, tslint, 大量types
* 【其他依赖】除去以上还有少数其他的依赖，使用到时自然会知道做什么用

## 使用webpack进行项目的包管理
angular推荐使用模块化编程，导致开发angular将得到一个app目录，里面分为根模块以及许多子模块，以及组件、服务、管道等一系列庞大的代码，使用webpack并制定合适的规则可以在运行时将这些繁杂的代码统一打包输出到单一文件中，再将输出的文件加载到html下。
webpack配置在/config目录下，主要包括以下流程：
1. 输入规则
2. 加载规则
3. 可选插件
4. 输出规则

详细可以查看/config目录下的配置，更推荐直接到webpack的[官方文档](https://doc.webpack-china.org/)进行学习。