<template>
    <div class="h-ui-sidebar-item-outter">
        <div v-if="itemHasList"
            class="h-ui-item">
            <div class="h-ui-item-text"
                @click="handleListShow">
                {{ value.name }}
            </div>
        </div>
        <div v-else
            class="h-ui-item_no-list">
            <router-link class="h-ui-item-text"
                :to="value.link">
                {{ value.name }}
            </router-link>
        </div>
        <template v-if="itemHasList">
            <div v-show="listShow"
                class="h-ui-item_second"
                :key="item.toString()"
                v-for="item in value.linkList">
                <router-link :to="item.link">
                    {{ item.name }}
                </router-link>
            </div>
        </template>
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
    .h-ui-sidebar-item-outter {
        width: auto;
    }

    .h-ui-item_no-list,
    .h-ui-item {
        padding-left: 3rem;
        border-bottom: 1px solid #e1e1e1;
    }
    .h-ui-item_no-list:hover,
    .h-ui-item:hover {
        background-color: #d3dce6;
        cursor: pointer;
    }

    .h-ui-item_second {
        padding-left: 4rem;
        background-color: #e5e9f2;
    }
    .h-ui-item_second:hover {
        background-color: #d3dce6;
    }

    .h-ui-item-text {
        color: #333;
        text-decoration: none;
    }
    .h-ui-item_second-text {
        color: #666;
        text-decoration: none;
    }

</style>
