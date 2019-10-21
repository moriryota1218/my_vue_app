(function () {
  'use strict';
  // 双方向データバインディング
  const vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: []
    },
    // localStorageを使用したデータの永続化
    watch: {
      todos: {
        handler: function () {
          localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        deep: true
      }
    },
    // localStorageに保存したデータを読み出す
    mounted: function () {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
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

        this.todos = this.remaining;
      }
    },
    // todoの残数を表示(算出プロパティ)
    computed: {
      remaining: function () {
        return this.todos.filter(function (todo) {
          return !todo.isDone;
        });
      }
    }
  });
})();