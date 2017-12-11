## babel-node转译后的代码逻辑
    main1.js/lib1.js的ES6模块语法通过babel-node转译生成main2.js/lib2.js的CJS模块语法，保持了ES6模块的动态引用。
注：
+ 1、值类型数据转译后，通过exports.counter进行更新。
+ 2、逗号语法的目的改变当前作用域。
+ 3、__esModule属性区分是否第三方模块。