import Vue from 'vue';
import Router from 'vue-router';

import App from './components/app';
import routes from './routes/router';

Vue.use(Router)

const router = new Router({
	routes
})
const app = new Vue({
	router,
	render: h=>h(App)
}).$mount("#app");