<template>
    <div>
        <div class="charge-moder-outter">
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
                @click="addChargeRecord"
                :disabled="saveDisabled"
                plain>保存
            </el-button>
        </div>

        <div class="">
            <ui-mult-task-pro-bar
                :list="list"
                :total="totalNum"
                @click="handleClick"
                label-width="35px"
                name="吃饭">
            </ui-mult-task-pro-bar>
        </div>
    </div>
</template>

<script>
    import paramsFunc from '@lib/params-func';
    import MulTaskProBar from '@ui/multi-task-progress-bar/multi-task-progress-bar';

    export default {
        name: 'charge',
        components: {
            'ui-mult-task-pro-bar': MulTaskProBar,
        },
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
                paramsFunc.judgeEmpty(value) ? callback('请选择时间') : callback();
            };
            const validateType = function validateType(rule, value, callback) {
                paramsFunc.judgeEmpty(value) ? callback('请选择类型') : callback();
            };
            const validateAmount = function validateAmount(rule, value, callback) {
                if (paramsFunc.judgeEmpty(value)) {
                    callback('请输入金额');
                    return;
                }
                if (!/^(([1-9][0-9]{0,9}(\.[0-9]{1,2})?)|(0\.(([0-9][1-9])|[1-9]0?)))$/.test(value.toString())) {
                    callback('请输入有效金额，整数部分最多十位，小数点最多两位');
                    return;
                }
                callback();
            };

            return {
                datePickerOptions,
                list: [
                    {
                        name: '吃饭',
                        number: 135,
                        url: '/eat',
                    },
                    {
                        name: '吃菜',
                        number: 153,
                        url: '/vegetable',
                    },
                    {
                        name: '吃鸡',
                        number: 223,
                        url: '/eat',
                    },
                    {
                        name: '吃鸭',
                        number: 333,
                        url: '/duck',
                    },
                    {
                        name: '吃鹅',
                        number: 203,
                        url: '/goose',
                    },
                ],
                totalNum: 1000,
                chargeModel: {
                    chargeTime: '',
                    firstType: '',
                    secondeType: '',
                    remark: '',
                    amount: 0,
                },
                chargeModelRule: {
                    chargeTime: [
                        { required: true, validator: validateTime },
                    ],
                    firstType: [
                        { required: true, validator: validateType },
                    ],
                    secondeType: [
                        { required: true, validator: validateType },
                    ],
                    amount: [
                        { required: true, validator: validateAmount, trigger: 'input' },
                    ]
                },
                saveDisabled: false,
            };
        },
        methods: {
            addChargeRecord() {
                // prevent double click
                this.saveDisabled = true;
                this.$store.commit('status/triggerBodyLoading');
                this.$refs.chargeModel.validate(valid => {
                    if (valid) {
                        this.$store.dispatch('charge/addChargeRecord', {
                            chargeRecord: this.chargeModel,
                            fn: () => {
                                this.$notify({
                                    title: '保存成功',
                                    message: '保存成功',
                                    type: 'success',
                                });
                                this.$store.commit('status/cancelBodyLoading');
                                this.saveDisabled = false;
                            },
                            fnErr: err => {
                                this.$notify.error({
                                    title: '保存失败',
                                    message: err.msg,
                                });
                                this.$store.commit('status/cancelBodyLoading');
                                this.saveDisabled = false;
                            },
                        });
                    } else {
                        this.$store.commit('status/cancelBodyLoading');
                        this.saveDisabled = false;
                    }
                });
            },
            handleClick({ val, name }) {
                console.log(name);
                console.log(val);
            },
        },
        computed: {
            firstTypeList() {
                return this.$store.state.enumData.chargeFirstType;
            },
            secondTypeList() {
                return this.$store.getters['enumData/getSecondType'](this.chargeModel.firstType);
            },
        },
    };
</script>

<style scoped>
</style>
