import Vue from 'vue';
import Router from 'vue-router';
import Time from '@com/work/time.vue';
import Task from '@com/work/task.vue';
import LiveCharge from '@com/live/charge.vue';
import LiveProject from '@com/live/project.vue';
import Manage from '@com/manage/manage.vue';

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
