<template>
    <div>
        time
        <div class="input_content">
            <el-time-picker
                is-range
                v-model="todayTime"
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                placeholder="选择时间范围">
            </el-time-picker>
            <el-button type="primary"
                @click="save"
                plain>保存
            </el-button>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
            };
        },
        methods: {
            save() {

            },
        },
        computed: {
            todayTime() {
                const d = new Date();
                const year = d.getFullYear();
                const month = d.getMonth();
                const date = d.getDate();
                return [new Date(year, month, date, 0, 0), new Date(year, month, date, 23, 59)];
            },
        },
    };
</script>

<style scoped>

</style>
