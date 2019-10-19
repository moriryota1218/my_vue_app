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
      },
      purge: function () {
        if (!confirm('一括削除しますか?')) {
          return;
        }
        // this.todos = this.todos.filter(function(todo){
        //   return !todo.isDone;
        // });
        this.todos = this.remaining;
      }
    },
    // todoの残数を表示(算出プロパティ)
    computed: {
      remaining: function(){
        // let items = this.todos.filter(function(todo){
        //   return !todo.isDone;
        // });
        // return items.length;
        return this.todos.filter(function(todo){
          return !todo.isDone;
        });
      }
    }
  });
})();