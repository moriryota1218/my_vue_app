(function () {
  'use strict';
  // 双方向データバインディング
  const vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [
        'task 1',
        'task 2',
        'task 3'
      ]
    },
    methods: {
      addItem: function () {
        this.todos.push(this.newItem);
        this.newItem = '';
      },
      // 引数にindexを渡す
      deleteItem: function (index) {
        if (confirm('削除しますか?')) {
          this.todos.splice(index, 1);
        }


      }
    }
  });
})();