import Vue from 'vue';
import Router from 'vue-router';
import Work from '@/components/work/work.vue';
import Live from '@/components/live/live.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Work,
        },
        {
            path: '/work',
            component: Work,
        },
        {
            path: '/live',
            component: Live,
        },
    ]
});
