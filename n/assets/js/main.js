
window.onload = function(){

// MAIN SECTION AREA

// const about = {template:'<div class="about">about</div>'};
// const contact = {template:'<div class="contact">contact</div>'};

// const routes = [
//   {path: '/about', comment:about },
// ]

var app = new Vue({
    el: '#main',
    data:  {
      todos : [
        { id: 1, text:'There is always light behind the clouds.', classnum:'section01 l-section',tit:'Change before you have to.', src:"./assets/img/img-section-01.jpg" },
        { id: 2, text:'Love the life you live. Live the life you love.', classnum:'section02 l-section',tit:'Change before you have to.', src:"./assets/img/img-section-02.jpg"},
        { id: 3, text:'There is more to life than increasing its speed.', classnum:'section03 l-section',tit:'Change before you have to.', src:"./assets/img/img-section-03.jpg"},
        { id: 4, text:'There is more to life than increasing its speed.', classnum:'section03 l-section',tit:'Change before you have to.', src:"./assets/img/img-section-03.jpg"},
        { id: 5, text:'next filed.', classnum:'section03 l-section',tit:'今は現時点', src:"./assets/img/img-section-03.jpg"},
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

  var urlNmae = '//tkweb-next.work/vue/js/';

  // var appheader = new Vue({
  //   el:'#header',
  //   data:  {
  //     posts : [
  //     { id:1 ,title:'N-design', classnum:'section01',text:'GOOD life GOOD design' },
  //     ]
  //   },
  //   components: {
  //     // 'components-header' : headerCompornent,
  //   },
  //   methods: {
  //   gg : function(e){
  //     console.log('ごわす');
  //   },
  //   }
  // });

  // // var header = new Vue({
  // //   el: '#header',
  // //   mixins : [mixin.ajax],
  // //   data:  {
  // //     request:{
  // //       url: urlNmae + 't.json',
  // //       data:{
  // //         data:'20180210'
  // //       }
  // //     }
  // //     //-todos : []
  // //   }
  // //  });

  // var footer = new Vue({
  //   el: '#footer',
  //   mixins : [mixin.ajax],
  //   data:  {
  //     request:{
  //       url: urlNmae + 't.json',
  //       data:{
  //         data:'20180210'
  //       }
  //     }
  //     //-todos : []
  //   }
  //  });

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

};
