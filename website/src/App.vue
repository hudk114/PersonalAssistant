<template>
    <div id="app"
        class="app">
        <header class="header">
            Personal Assistant
        </header>
        <div class="content">
            <left-sidebar>
            </left-sidebar>
            <router-view></router-view>
        </div>
        <footer class="footer">
            <span>
                copyright: hudk
            </span>
        </footer>
    </div>
</template>

<script>
    import LeftSideBar from '@/components/left-sidebar/left-sidebar';

    export default {
        components: {
            'left-sidebar': LeftSideBar,
        },
        data() {
            return {

            };
        },
        name: 'index',
    };
</script>

<style scoped>
    .app {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .header {
        width: 100%;
        font-size: 1.5rem;
        line-height: 3rem;
        height: 2rem;
        border-bottom: 1px solid black;
    }

    .footer {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        font-size: 1rem;
        line-height: 2rem;
        border-top: 1px solid black;
    }
</style>

<style>
    html {
        font-size: 14px;
    }

    body {
        padding: 0;
        margin: 0;
    }
</style>
