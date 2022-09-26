import {createApp} from 'vue';
import App from './App.vue';
import './scss/reset.scss';
import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Switch from './components/doc/Switch.vue';
import Button from './components/doc/Button.vue';
import Dialog from './components/doc/Dialog.vue';
import Tabs from './components/doc/Tabs.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc}
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');

