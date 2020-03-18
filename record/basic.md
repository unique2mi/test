#### Basic Usage

##### 1.how to use [slice,splice,concat,split,join] ?

* slice()

  用途：从已有的数组中返回选定的元素

  参数：start,end [-1表示倒数第一位的元素，以此类推]

  使用：

  ```javascript
  // 该方法并不会修改数组，而是返回一个子数组
  var a = [1,2,3,4,5];
  a.slice(0); // [1,2,3,4,5]
  a.slice(0,1); // [1]
  a.slice(-1); // 5
  console.log(a); // [1,2,3,4,5]
  ```

  

* splice()

  用途：数组中添加/删除元素，返回被删除的项目

  参数：index(删除元素位置),howmany（删除元素数量）,item（插入元素） [-1表示倒数第一位的元素，以此类推]

  使用：

  ```javascript
  // 会直接对数组进行了修改
  var b = [1,2,3,4,5,6,'Afdsa'];
  b.splice(0,1); // [1] 
  b.splice(0,3,'blue'); // [2,3,4]
  console.log(b); // ['blue',5,6,'Afsda']
  ```

  

  

* concat()

  用途：用于连接两个或多个数组

  参数：arrayX[可以是具体的值，或者是数组对象]

  使用：

  ```javascript
  //不会改变元素自身，
  var c1 = [1,2,3,4,5,6];
  var c2 = ['a','b','c','d','e'];
  var c3 = 1;
  c1.concat(c2); // [1,2,3,4,5,6,'a','b','c','d','e']
  c2.concat(1); // [1,2,3,4,5,6,1]
  c3.concat(1); //VM1586:1 Uncaught TypeError: a.concat is not a function
  console.log(c1,c2); // c1:[1,2,3,4,5,6]; c2:['a','b','c','d','e'];
  ```

  

  

* split()

  用途：把一个字符串分割成字符串数组

  参数：separator[字符串或正则表达式]，howmany[指定返回的数组的最大长度]

  使用：

  ```javascript
  //不会改变原来字符串，与join()作用相反
  var d = 'helloWorld';
  d.split(''); // ["h", "e", "l", "l", "o", "W", "o", "r", "l", "d"]
  d.split('',3); // ['h','e','l']
  d.split('W'); // ['hello','orld']
  d.split('p'); // ['helloWorld']
  console.log(); // helloWorld
  ```

  

  

* join()

  用途：把数组中的所有元素放入一个字符串

  参数：separator[指定要使用的分隔符,默认是逗号]

  使用：

  ```javascript
  //不会改变原来数组，与split()作用相反
  var e = [1,2,3,5,6,{'message':'hello'}];
  e.join(); // '1,2,3,5,6,[Object Object]'
  e.join(''); //'12356[Object Object]'
  e.join('-'); //'1-2-3-5-6-[Object Object]'
  console.log(e); // [1,2,3,5,6,{'message':'hello'}];
  ```

  

##### 2.变量提升和函数提升 ?

* var, const, let?

  * 块级作用域

    * ES5只有全局作用域和函数作用域

      ```javascript
      // 内层变量会覆盖外层变量，不构成单独作用域
      var tmp = new Date();
      function f() {
        console.log(tmp); // 想打印外层的时间作用域,但实际打印出来的是undefined
        if (false) {
          var tmp = 'hello world'; // 这里声明的作用域为整个函数
        }
      }
      f(); // undefined
      
      // 计算的循环变量会泄露为全局变量
      var s = 'hello';
      for (var i = 0; i < s.length; i++) {
        console.log(s[i]); // i应该为此次for循环使用的变量
      }
      console.log(i); // 5 i实际变成全局变量
      
      ```

    - 块级作用域

      ```javascript
      // 作用域
      function test() {
        let n = 1;
        if (true) {
          let n = 2;
          console.log(n); // 2 内层的n
        }
        console.log(n); // 1 当前层的n
      }
      
      // 任意嵌套：外层变量不会被内层覆盖
      {{{{
        {let insane = 'Hello World'}
        console.log(insane); // 报错 读不到子作用域的变量
      }}}};
      
      // 代码分隔成块：可以避免重名，也可以避免被覆盖互相影响
      let tmp = new Date();
      function f() {
        console.log(tmp); // 打印外层的时间作用域get
        if (false) {
          let tmp = 'hello world'; // 这里声明的作用域在块内
        }
      }
      f(); // 3
      ```

    - 块级函数作用域？

      

  * 不存在变量提升【减少运行错误，防止声明前使用该变量导致错误】

    * 变量提升：同一作用域下，变量可以先于声明使用，值为undefined

       ```javascript
    // var
    console.log(a); // undefined
    var a = '23';
    
    // let
    console.log(b); // Cannot access 'b' before initialization
    let b = 'sdf';
    
    // const
    console.log(c);// Cannot access 'c' before initialization
    const c =  12; 
       ```

    

  * 暂时性死区【减少运行错误，防止声明前使用该变量导致错误】

    * 当前作用域中存在该变量但无法获取，需要等到变量声明后才能使用

    ```javascript
    var a = 12;
    if(true){
      a = '345'; // Cannot access 'a' before initialization
      let a; // 声明之前不能使用该变量
    }
    ```

    

  * 不可重复声明

    ```javascript
    // let、const不允许相同作用域里重复声明同一个变量
    function func(arg) {
      let arg; // Identifier 'arg' has already been declared
    }
    ```

    

  * let、const声明的全局变量不会挂在顶层对象下面

    ```javascript
    // 浏览器顶层对象：window，node环境顶层对象：global
    // var声明的全局变量会挂在顶层对象下，但let、const不会
    var mi = 'blue';
    window.mi; // 'blue', 亦等同于this.mi
    let bi = 'blue';
    window.bi; //undefined
    ```

    

  ```javascript
  // const: 【es6新增】
  // 使用场景： 常量、声明匿名函数、箭头函数...
  // 1.声明后必须马上赋值，否则会报错
  const a; // Uncaught SyntaxError: Missing initializer in const declaration
  const a = 1; // 1
  // 2.一旦声明就不能再更改，复杂类型(数组、对象等[函数、正则？])指针指向的地址不能更改，内部数据可以更改
  const b = [1,2,3,4,5]; 
  b = [1,2,3,4,4]; // Uncaught TypeError: Assignment to constant variable.
  b.push(1); // [1, 2, 3, 4, 5, 1] 可以用数组方法：pop，push，shift，unshift
  const c = {a:1}; // {a:1}
  c = {b:2}; // Uncaught TypeError: Assignment to constant variable.
  c.a = 2; //{a:2}
  c.name = 'hello'; //{a:2,name:"hello"}
  
  // let: 【es6新增】
  ```

  ```javascript
  // 补充：Object.freeze与const的区别：----------------------
  // const:行为像let，具有块级作用域（阻止变量重新分配）
  // Object.freeze()接收一个对象作为参数，并返回一个相同不可变的对象[完全不能更改]
  var d = [1,2,3,4,5];
  Object.freeze(d); 
  d.push(3); // Uncaught TypeError: Cannot add property 5, object is not extensible
  var e = {a: 1};
  Object.freeze(e); 
  e.name = 'hello'; //不报错，但是不起作用
  console.log(e); // {a: 1}
  // Object.freeze()只做层浅冻结，具有嵌套属性的对象实际上并未冻结
  var f = {
    name: 'hello',
    id: '1234',
    more: {
      address: 'szns',
      tel: '1234567',
    }
  }
  f.name = 'miki'; //不报错，但是不起作用
  console.log(f); 
  //{ name: 'hello', id: '1234', more: { address: 'szns', tel: '1234567', } }
  f.more.tel = '2222';
  //{ name: 'hello', id: '1234', more: { address: 'szns', tel: '2222', } }
  ```



##### 3.switch

* 采用的是严格相等运算符（`===`），而不是相等运算符（`==`）



##### 4.break & continue

- 都有跳转作用，可以让代码不按既有顺序执行。
- break：跳出代码块或循环
- continue：用于立即终止本轮循环，返回循环结构的头部，开始下一轮循环



##### 5.bind,call,apply

 * 核心理念：借用方法【借助已有的方法，通过改变其this指向进行使用，减少代码的重复以达到节省内存的作用    】

 * 语法

   ```javascript
   fun.call(thisArg, param1, param2, ...)
   fun.apply(thisArg, [param1,param2,...])
   fun.bind(thisArg, param1, param2, ...)
   ```

 * 要点：

   	* 调用的**fun**必须是函数
   	* apply传给函数的参数是**Array**

 * 参数说明：

    * **`fun`的`this`指向`thisArg`对象**
    * 非严格模式下：thisArg指定为null，undefined，fun中的this指向window对象.
    * 严格模式下：`fun`的`this`为`undefined`
    * 值为原始值(数字，字符串，布尔值)的this会指向该原始值的自动包装对象，如 String、Number、Boolean

 * 区别：

   	* apply传给函数的参数是Array
   	* call/apply改变了函数的this上下文后马上**执行该函数**，bind只是拷贝了函数，并拥有（改变上下文）指定的this值和初始参数，但**不执行**
   	* call/apply返回函数执行结果，bind只是返回函数指定了this值的拷贝

 * 使用场景

    * 判断数据类型

      	* 使用 **`Object.prototype.toString()`** 检测对象类型

      ```javascript
      function detect(data,type){
        let toString = Object.prototype.toString;
        let typeName = toString.call(data); 
        return typeName.toString().indexOf(type)>-1 ? true : false;
      }
      
      detect([],'Array');// true
      
      //这么写如果检测object就会错误，因为所有的都是[object xxxx]这个形式的
      //可以改进一下
      function detect(data,type){
        const typeObj = {
          '[object String]': 'string',
          '[object Number]': 'number',
          '[object Boolean]': 'boolean',
          '[object Undefined]': 'undefined',
          '[object Null]': 'null',
          '[object Object]': 'object',
          '[object Array]': 'array',
          '[object Function]': 'function',
          '[object Date]': 'date', // Object.prototype.toString.call(new Date())
          '[object RegExp]': 'regExp',
          '[object Map]': 'map',
          '[object Set]': 'set',
          '[object HTMLDivElement]': 'dom', // document.querySelector('#app')
          '[object WeakMap]': 'weakMap',
          '[object Window]': 'window',  // Object.prototype.toString.call(window)
          '[object Error]': 'error', // new Error('1')
          '[object Arguments]': 'arguments',
        }
        let toString = Object.prototype.toString;
        let name = toString.call(data); 
        let typeName = typeObj[name] || '未知类型';
        return typeName === type.toLowerCase();
      }
      detect([],'Array');// true 
      ```

      

   * 类数组借用数组的方法

     ```javascript
     var alist = {
       0:'hello',
       'name': 'miki',
       length: 2,
     }
     Array.prototype.push.call(alist,'a01','a02');
     console.log(alist); // {"0":"hello","1":"a02","2":"a03","name":"miki","length":4}
     ```

     

   * apply获取数组最大值最小值

     * apply后面传递的是数组，因此更适合用在数组相关操作，例如：Math.max、Math.min（获取数组中最大值/最小值）

     ```javascript
     const arr =[1,34,23,123,83,21];
     const max = Math.max.apply(Math,arr);//123
     const min = Math.min.apply(Math,arr);//1
     ```

     

   * 继承

     * ES5的继承也是通过借用父类的构造方法来实现父类方法/属性的继承

     ```javascript
     //父类
     function father(name){
       this.name = name;
       this.colors = ['blue', 'red', 'gray'];
     }
     
     father.prototype.getName = function(age){
       this.age = age;
     }
     
     //子类
     function son(name,age){
       father.call(this,name);
       this.age = age;
     }
     ```

     

     ```javascript
     // 父类
     function supFather(name) {
         this.name = name;
         this.colors = ['red', 'blue', 'green']; // 复杂类型
     }
     supFather.prototype.sayName = function (age) {
         console.log(this.name, 'age');
     };
     // 子类
     function sub(name, age) {
         // 借用父类的方法：修改它的this指向,赋值父类的构造函数里面方法、属性到子类上
         supFather.call(this, name);
         this.age = age;
     }
     // 重写子类的prototype，修正constructor指向
     function inheritPrototype(sonFn, fatherFn) {
         sonFn.prototype = Object.create(fatherFn.prototype); // 继承父类的属性以及方法
         sonFn.prototype.constructor = sonFn; // 修正constructor指向到继承的那个函数上
     }
     inheritPrototype(sub, supFather);
     sub.prototype.sayAge = function () {
         console.log(this.age, 'foo');
     };
     // 实例化子类，可以在实例上找到属性、方法
     const instance1 = new sub("OBKoro1", 24);
     const instance2 = new sub("小明", 18);
     instance1.colors.push('black')
     console.log(instance1) // {"name":"OBKoro1","colors":["red","blue","green","black"],"age":24}
     console.log(instance2) // {"name":"小明","colors":["red","blue","green"],"age":18} 
     ```

     

##### 6.类数组



##### 7.prototype

##### 8.严格模式 & 非严格模式





