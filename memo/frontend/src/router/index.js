import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/todo',
    name: 'Todo',
    component: () => import('@/views/TodoView.vue'),
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: () => import('@/views/MYPAGE.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
