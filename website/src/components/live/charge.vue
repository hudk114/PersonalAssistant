<template>
    <div>
        <div class="">
            <el-form :model="chargeModel"
                :rules="chargeModelRule"
                ref="chargeModel"
                label-width="110px">
                <el-form-item label="时间"
                    prop="chargeTime">
                    <el-date-picker
                        v-model="chargeModel.chargeTime"
                        align="center"
                        type="date"
                        :clearable="false"
                        placeholder="选择日期"
                        :picker-options="datePickerOptions">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="一级分类"
                    prop="firstType">
                    <el-select v-model="chargeModel.firstType">
                        <el-option v-for="item in firstTypeList"
                            :key="item.key"
                            :label="item.value"
                            :value="item.key">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="二级分类"
                    prop="secondeType">
                    <el-select v-model="chargeModel.secondeType">
                        <el-option v-for="item in secondTypeList"
                            :key="item.key"
                            :label="item.value"
                            :value="item.key">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注"
                    prop="remark">
                    <el-input type="textarea"
                        autosize
                        placeholder="请输入内容"
                        v-model="chargeModel.remark">
                    </el-input>
                </el-form-item>
                <el-form-item label="花销"
                    prop="amount">
                    <el-input v-model="chargeModel.amount"
                        placeholder="请输入内容">
                    </el-input>
                </el-form-item>
            </el-form>

            <el-button type="primary"
                @click="save"
                plain>保存
            </el-button>
        </div>

        <div class="">

        </div>
    </div>
</template>

<script>

    export default {
        data() {
            const datePickerOptions = {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [
                    {
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        },
                    },
                ],
            };

            const validateTime = function validateTime(rule, value, callback) {
                callback();
            };

            return {
                datePickerOptions,
                chargeModel: {
                    chargeTime: '',
                    firstType: '',
                    secondeType: '',
                    remark: '',
                    amount: 0,
                },
                chargeModelRule: {
                    chargeTime: [
                        { required: true, validator: validateTime,  },
                    ],
                },
            };
        },
        methods: {
            save() {
                console.log(this.chargeModel);
            },
        },
        computed: {
            firstTypeList() {
                return [
                    {
                        key: 0,
                        value: '吃药',
                    },
                    {
                        key: 1,
                        value: '吃菜',
                    },
                ];
            },
            secondTypeList() {
                return [
                    {
                        key: 0,
                        value: '吃鸡',
                    },
                ];
            },
        },
    };
</script>

<style scoped>

</style>
