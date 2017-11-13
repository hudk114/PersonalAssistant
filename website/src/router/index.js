import Vue from 'vue';
import Router from 'vue-router';
import Time from '@/components/work/time.vue';
import Task from '@/components/work/task.vue';
import LiveCharge from '@/components/live/charge.vue';
import LiveProject from '@/components/live/project.vue';
import Manage from '@/components/manage/manage.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Time,
        },
        {
            path: '/work/time',
            component: Time,
        },
        {
            path: '/work/task',
            component: Task,
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
