
Vue.component('components-footer',{
  props: ['post'],
  template: '<div class="footerInner"> <a href="/n/">service</a>'+
  '<div class="footerInner_logoBody">' +
  '<h2 class="footerInner_logo">{{ title }}</h2>' +
  '<p class="footerInner_logoBody_text">{{ text }}</p>' +
  '</div>' +
  '</div>',
  data:function(){
    return {
      title:'N-design', classnum:'section01',text:'今ここからをデザインする' 
    }
  },
});

var appfooter = new Vue({
  el:'#footer',
  data:  {
    posts : [
    { id:1 ,title:'N-design', classnum:'section01',text:'GOOD life GOOD design' },
    ]
  },
  components: {
    // 'components-header' : headerCompornent,
  },
  methods: {
  gg : function(e){
    console.log('ごわす');
  },
  }
});