<template>
    <div class="h-ui-sidebar-item-outter">
        <div v-if="itemHasList"
            class="h-ui-item">
            <div class=""
                @click="handleListShow">
                {{ value.name }}
            </div>
        </div>
        <div v-else
            class="h-ui-item_no-list">
            <router-link :to="value.link">
                {{ value.name }}
            </router-link>
        </div>
        <div v-if="itemHasList"
            v-show="listShow"
            class="h-ui-item_second"
            v-for="item in value.linkList">
            <router-link :to="item.link">
                {{ item.name }}
            </router-link>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            value: {
                required: true,
            },
        },
        data() {
            return {
                listShow: false,
            };
        },
        computed: {
            itemHasList() {
                return this.value.linkList;
            },
        },
        methods: {
            handleListShow() {
                this.listShow = !this.listShow;
            },
        },
    };
</script>

<style scoped>
</style>
