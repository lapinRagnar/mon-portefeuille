
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue')
      }
    ]
  },
  {
    path: '/settings',
    component: () => import('src/layouts/AuthLayout.vue'),
    children: [
      {
        path: 'ajouter-demo',
        name: 'ajouter-demo',
        component: () => import('src/pages/settings/FormAjoutDemo.vue')
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('src/layouts/AuthLayout.vue'),
    children: [
      {
        path: 'register',
        name: 'register',
        component: () => import('src/pages/myfirebase/MyFirebaseRegisterPage.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('src/pages/myfirebase/MyFirebaseLoginPage.vue')
      },
      {
        path: '',
        name: 'settings',
        component: () => import('src/pages/myfirebase/SettingsIndex.vue')
      },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
