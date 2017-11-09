<template>
    <div class="h-ui-sidebar">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        data() {
            return {
            };
        },
    };
</script>

<style scoped>
    .h-ui-sidebar {
        float: left;
        height: 100%;
        width: 15rem;
        background-color: #eff2f7;
        color: #475669;
        font-size: 1.2rem;
        line-height: 3.3rem;
    }
</style>
