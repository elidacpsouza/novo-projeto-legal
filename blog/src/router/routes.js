
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Dashboard.vue') },
      { path: 'dashboard', component: () => import('pages/Dashboard.vue') },
      { path: 'posts', component: () => import('pages/Posts.vue') },
      { path: 'artigo/:id', component: () => import('pages/Artigo.vue') }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
