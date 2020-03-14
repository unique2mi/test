#### Notes for Vue.js

##### 1.what is Vue?

* 渐进式框架
* 与其他框架之间的对比[后续]
* 声明式渲染
* 编写关注逻辑层面，DOM操作由Vue处理【v-model实现双向绑定】



##### 2.how to use?

* 直接引入vue.js
* webpack构建
* vue-cli
* 插值表达式:{{}}【v-once：一次性插值】
* **不推荐**同时使用 `v-if` 和 `v-for`



##### 3.Question for mi?

* vue 2 defineProperty 的不足
* 为什么 vue 3 proxy 变秃了也变强了
* Object.freeze vs const
* 不要在选项属性或回调上使用箭头函数[没有this]
* 事件修饰符：
  - `.stop`
  - `.prevent`
  - `.capture`
  - `.self`
  - `.once`
  - `.passive`

