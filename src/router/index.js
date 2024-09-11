import { createRouter, createWebHistory } from 'vue-router';
import searchTable from '../views/searchTable.vue';
import buttonTest from '../views/buttonTest.vue';
import borderTest from '@/views/borderTest.vue';
import linkIcon from '../views/linkIcon.vue'; 
import formTest from '@/views/formTest.vue';
import traceIDtoPlum from '@/views/traceIDtoPlum.vue';
import AITesting from '@/views/AITesting.vue';

const routes = [
  { path: '/buttonTest', component: buttonTest },
  { path: '/borderTest', component: borderTest },
  { path: '/searchTable', component: searchTable },
  { path: '/linkIcon', component: linkIcon },
  { path: '/formTest', component: formTest },
  { path: '/traceIDtoPlum', component: traceIDtoPlum },
  {
    path: '/ai-testing',
    name: 'AITesting',
    component: AITesting
  },
];

const router = createRouter({
    history: createWebHistory(), // 使用 createWebHistory for Vue 3
    routes,
});
export default router;