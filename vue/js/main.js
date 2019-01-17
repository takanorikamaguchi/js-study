
window.onload = function(){

var app = new Vue({
    el: '#app',
    data:  {
      todos : [
      {text:'あの日みたそれがし', classnum:'section01',tit:'もしくは'},
      {text:'あの日みた夕日', classnum:'section02',tit:'世界が滅びる話。'},
      {text:'あの日みた夕日', classnum:'section03',tit:'ノアと箱舟の話'}
      ]
    },
      methods: {
        addTodo: function() {
          var newTodo = this.todoTxet.trim();
          if(!newTodo) { return; }
          this.todos.push(
            {text:'あの日みた夕日', classnum:'section01',tit:'もしくは'}
            );
          this.todoTxet = '';
        },
        archive: function(){
          var remains = [],todos = this.todos;
          for (var i = 0; i < todos.length; i++) {
            var todo = todos[i];
            if(!todo.done){
              remains.push(todo);
            }
            this.todos = remains;
          }
        },
        removeTodo: function(todo){
          var todos = this.todos,index = todos.indexOf(todo);
          todos.splice(index, 1);
        }
      },
      computed: {
       remaining: function(){
        var count = 0,
            todos = this.todos;
       for (var i = 0; i < todos.length; i++) {
        if(!todos[i].done){
          count ++;
        }
       }
       return count;
      }
     }
   });

var mixin = {
    ajax : {
      data : {
        error : 0,
        loading: true,
        result :{}
    },
    methods:{
     getData:function(){
        var _this = this;
        _this.loading = true;
          console.log('more');
        $.ajax({
          url: _this.request.url,
          type: 'GET',
          dataType:'JSON',
          timeout : 30000,
          data:_this.request.data
        }).done (function(response){
          _this.error = 0;
          _this.loading = false;
          _this.result = response;
        }).fail(function(error){
          if (_this.error <= 5){
            _this.error++;
            _this.getData();
          }else{
            _this.error = true;
            _this.loading = false;
          }
          console.log('erro');
        });
      }
    },
    mounted:function(){
    this.getData();
    }
   }
}

  var urlNmae = '//tkweb-next.work/vue/js/';

  var footer = new Vue({
    el: '#footer',
    mixins : [mixin.ajax],
    data:  {
      request:{
        url: urlNmae + 't.json',
        data:{
          data:'20180210'
        }
      }
      //-todos : []
    }
   });

var mixin = {
  ajax:{
    data:{
      error:0, //エラー状態
      loading:true, //通信状態
      result:{} //取得結果格納用
    },
    methods:{
      getData:function(){
        var _this = this;
        _this.loading = true;
        console.log(_this.request.url);

        $.ajax({
          url: _this.request.url,
          type: 'POST',
          dataType: 'JSON',
          timeout : 30000,
          data:_this.request.data
        })
        .done(function(response) {
          //結果をresultに格納、各種状態管理用の変数を完了ステータスに変更
          _this.error = 0;
          _this.loading = false;
          _this.result = response;
        })
        .fail(function(error) {
          //通信エラー時の再試行。
          //再試行回数が指定数に達した場合は状態管理用の変数を更新しAjaxを停止
          if(_this.error <= 5){
            _this.error++;
            _this.getData();
          }else{
            _this.error = true;
            _this.loading = false;
          }
          console.log(_this.error);
        });

      }
    },
    mounted:function(){
      //Ajaxを実行
      this.getData();
    }
  }
}

var headerCompornent = Vue.extend({
  template: '<header>'+
  '<div class="nnn">' +
  '<h1>Vue.js</h1>' +
  '<p>OO@@@</p>' +
  '</div>' +
  '</header>'
});

var headerCompornentsecond = Vue.extend({
  props: ['headeritem'],
  template: '<li>{{ headeritem.text }}{{ headeritem.url }}{{ headeritem.tel }}</li>'
});

// Vue.component('components-headersecond', {
// props: ['headeritem'],
// template: '<li>{{ headeritem.text }}<li>',
// });

var appheader = new Vue({
  el:'#header',
  mixins: [mixin.ajax],
  data:{
    request:{
      url: urlNmae + 'header.json',
      data:{
        date:'2018'
      }
    }
  },
  components: {
    'components-header' : headerCompornent,
    'components-headersecond' : headerCompornentsecond,
  },
  methods: {
  gg : function(e){
    console.log(request.data);
  },
  }
});

};