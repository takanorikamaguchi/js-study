
Vue.component('components-header',{
  props: ['post'],
  template: '<div class="headerInner">'+
  '<div class="headerInner_logoBody">' +
  '<a href="/n/" class="headerInner_logo_link"><h1 class="headerInner_logo">{{ title }}</h1></a>' +
  '<p class="headerInner_logoBody_text">{{ text }}</p>' +
  '<p class="headerInner_logoBody_text">{{ textSub }}</p>' +
  '</div>' +
  '</div>',
  data:function(){
    return {
      title:'N-design', classnum:'section01',text:'GOOD life GOOD design',textSub: "今ここにないを設計しよう"
    }
  },
});


var appheader = new Vue({
  el:'#header',
  data:  {
    posts : [
    { id:1 ,title:'N-design', classnum:'section01',text:'GOOD life GOOD design' },
    ]
  },
  components: {
    // 'components-header' : headerCompornent,
  }
});