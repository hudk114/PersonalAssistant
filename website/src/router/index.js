import Vue from 'vue';
import Router from 'vue-router';
import Work from '@/components/work/work.vue';
import LiveCharge from '@/components/live/charge.vue';
import LiveProject from '@/components/live/project.vue';
import Manage from '@/components/manage/manage.vue';

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
            path: '/live/charge',
            component: LiveCharge,
        },
        {
            path: '/live/project',
            component: LiveProject,
        },
        {
            path: '/manage',
            component: Manage,
        },
    ]
});
