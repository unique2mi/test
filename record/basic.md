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

  