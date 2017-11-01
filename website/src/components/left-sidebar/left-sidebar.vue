<template>
    <div class="left-sidebar">
        <ul class="">
            <li v-for="item in listData"
            class="">
                <router-link :to="item.router">
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                listData: [
                    {
                        name: 'work',
                        router: '/work',
                    },
                    {
                        name: 'live',
                        router: '/live',
                    },
                ],
            };
        },
    };
</script>

<style scoped>
    .left-sidebar {
        float: left;
        width: 200px;
        height: 100%;
    }
</style>
