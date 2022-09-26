import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import DocIndex from './components/doc/DocIndex.vue';
import ButtonDemo from './components/doc/ButtonDemo.vue';
import SwitchDemo from './components/doc/SwitchDemo.vue';
import DialogDemo from './components/doc/DialogDemo.vue';
import TabsDemo from './components/doc/TabsDemo.vue';

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '', component: DocIndex},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},]
    },
  ]
});