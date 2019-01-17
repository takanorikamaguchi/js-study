
// MAIN SECTION AREA

var Rcontents = {
  template: `
  <div class="l-section contentsInner">
  <h2 class="contents_title">{{ $route.params.id }}</h2>
  <router-view></router-view>
  </div>`
};

const RcontentsHome = {template:`<div class="home">
<div class="_inner">
<div class="top_section">just do it</div>
<div class="middle_section">世界は違う</div>
<div class="bottom_section">事実は小説よりも奇なり</div>
</div>
</div>`};
const RcontentsAbout = {template:`<div class="about">
<div class="_inner">
<div class="top_section">DDDDDDDDDDDDD</div>
<div class="middle_section">DDDDDDDDDDDDD</div>
<div class="bottom_section">DDDDDDDDDDDDD</div>
</div>
</div>`};
const RcontentsContact = {template:`<div class="contact">
<div class="form_wrap">
<form>
  <input type="text" value="" placeholder="PPPPP" >
  <input type="button" value="GO">
</form>
</div>
</div>`};

const routes = [
  {path: '/home', comment:RcontentsHome },
  {path: '/about', comment:RcontentsAbout },
  {path: '/contact', comment:RcontentsContact },
];

const router = new VueRouter({
  routes: [
    {path: '/user/:id', component: Rcontents,
    children:[
      {path: 'home', component: RcontentsHome },
      {path: 'about', component: RcontentsAbout },
      {path: 'contact', component: RcontentsContact },
    ]

    }
  ]
});

var appindex = new Vue({
  router
}).$mount('#indexMain');

