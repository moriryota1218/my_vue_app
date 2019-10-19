(function () {
  'use strict';
  // 双方向データバインディング
  const vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      // todos: [{
      //   title: 'task 1',
      //   isDone: false
      // }, {
      //   title: 'task 2',
      //   isDone: false
      // }, {
      //   title: 'task 3',
      //   isDone: true
      // }]
      todos: []
    },
    methods: {
      addItem: function () {
        let item = {
          title: this.newItem,
          isDone: false
        };
        this.todos.push(item);
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