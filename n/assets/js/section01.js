
Vue.component('components-motion',{
  props: ['post'],
  template: `
  <div class="three_section_block">
  <ul class="list">
  <li class="item">
    <h3 class="motion_section_h2_inner">{{ title }}</h3>
    <p class="motion_section_h2_text">{{ text }}</p>
    <div class="item_sub_wrap">
      <h3 class="motion_section_h2_inner">{{ title }}</h3>
      <p class="motion_section_h2_text">{{ text }}</p>
    </div> 
  </li>
  <li class="item">
    <h3 class="motion_section_h2_inner">{{ title }}</h3>
    <p class="motion_section_h2_text">{{ text }}</p>
    <div class="item_sub_wrap">
      <h3 class="motion_section_h2_inner">{{ title }}</h3>
      <p class="motion_section_h2_text">{{ text }}</p>
    </div> 
  </li>
  <li class="item">
    <h3 class="motion_section_h2_inner">{{ title }}</h3>
    <p class="motion_section_h2_text">{{ text }}</p>
    <div class="item_sub_wrap">
      <h3 class="motion_section_h2_inner">{{ title }}</h3>
      <p class="motion_section_h2_text">{{ text }}</p>
    </div> 
  </li>
</ul>  
  <div class="motion_section_h2_inner">{{ title }}</div>
  <p class="motion_section_h2_text">{{ text }}</p>
  </div>
  `,
  data:function(){
    return {
      title:'N-design', classnum:'section01',text:'GOOD life GOOD design GOOD life GOOD design GOOD life GOOD design' 
    }
  },
});

var appfooter = new Vue({
  el:'#topmotion',
  data:  {
    posts : [
    { id:1 ,title:'N-design', classnum:'section01',text:'' },
    ]
  },
  components: {
    // 'components-header' : headerCompornent,
  },
  methods: {
  gg : function(e){
    console.log('good choice');
  },
  }
});