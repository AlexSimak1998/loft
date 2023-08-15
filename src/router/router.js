import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/routes';

const router = createRouter({
  history: createWebHistory(),
  routes: Object.values(routes),
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' };
  }
});

export default router;