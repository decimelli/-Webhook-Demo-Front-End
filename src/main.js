// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import People from "@/components/People";
import About from "@/components/About";
import Add from "@/components/Add";

Vue.use(vueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: People},
    {path: '/about', component: About},
    {path: '/add', component: Add}
  ]
});

Vue.config.productionTip = false;

/*
  https://getbootstrap.com/docs/4.3/examples/navbars/
*/
new Vue({
  router,
  template: `
    <div id="app">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <router-link class="navbar-brand" to="/">People</router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      
          <div class="collapse navbar-collapse" id="navbarsExample07">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <router-link class="nav-link" to="/">Home<span class="sr-only">(current)</span></router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
            </ul>
          </div>
          <div>
            <ul class="navbar-nav mr-auto navbar-right">
                <li class="nav-item active">
                  <router-link class="nav-link" to="/add">Add Person</router-link>
                </li>
<!--                <li class="nav-item">-->
<!--                  <form class="form-inline my-2 my-md-0">-->
<!--                    <input class="form-control" type="text" placeholder="Search" aria-label="Search">-->
<!--                  </form>-->
<!--                </li>-->
              </ul>
          </div>
        </div>
      </nav>
      <router-view />
    </div>
  `
}).$mount('#app');
