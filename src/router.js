import Vue from 'vue';
import Router from 'vue-router';
// import store from './store/index';

Vue.use(Router);


let router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'authentication',
            path: '/authentication',
            component: () => import('@/views/AuthenticationWindow'),
            meta: {
                guestOnly: true
            }
        },
        {
            name: 'userList',
            path: '/userlist',
            component: () => import('@/views/UserList'),
            meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    const auth = !!localStorage.getItem('user');
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (auth != true) {
            next({
                path: '/authentication',
                params: {nextUrl: to.fullPath}
            })
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.guestOnly)) {
        if (auth == true) {
            next({
                path: '/userList',
                params: {nextUrl: to.fullPath}
            });
        } else {
            next();
        }
    } else {
        next({
            path: '/authentication',
            params: {nextUrl: to.fullPath}
        })
    }
});

export default router;
