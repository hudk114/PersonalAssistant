<template>
    <div id="app"
        class="app"
        :style="{ height: mHeight + 'px' }">
        <header class="header">
            Personal Assistant
        </header>
        <div class="content">
            <sidebar>
                <sidebar-item v-for="item in sidebarData"
                    :key="item.toString()"
                    :value="item">
                </sidebar-item>
            </sidebar>
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
    import SideBar from '@/h-ui/side-bar';
    import SideBarItem from '@/h-ui/side-bar-item';
    // import LeftSideBar from '@/components/left-sidebar/left-sidebar';

    export default {
        components: {
            sidebar: SideBar,
            'sidebar-item': SideBarItem,
        },
        beforeMount() {
            this.bind();
        },
        data() {
            return {
                sidebarData: [
                    {
                        name: '工作',
                        link: '/work',
                    },
                    {
                        name: '生活',
                        linkList: [
                            {
                                name: '记账',
                                link: '/live/charge',
                            },
                            {
                                name: '计划',
                                link: '/live/project',
                            },
                        ],
                    },
                    {
                        name: '管理',
                        link: '/manage',
                    },
                ],
                mHeight: document.documentElement.clientHeight,
            };
        },
        methods: {
            bind() {
                window.onresize = () => {
                    this.mHeight = document.documentElement.clientHeight;
                };
            },
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

    .content {
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
        font-size: 0;
    }
</style>
