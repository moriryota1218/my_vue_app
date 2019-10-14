(function() {
  'use strict';
  // 双方向データバインディング
  const vm = new Vue({
    el: '#app',
    data: {
     todos: [
       'task1',
       'task2',
       'task3'
     ]
    }
  });
})();