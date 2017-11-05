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
        width: 200px;
        height: 100%;
        background-color: #eee;
    }
</style>
