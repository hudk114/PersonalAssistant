<template>
    <div class="bar-outter">
        <label class="bar-label"
            v-if="!judgeEmpty(name)"
            :style="'width:' + labelWidth + ';'">
            {{ name }}
        </label>
        <div class="bar-context-outter"
            :style="'margin-left:' + labelWidth + ';'">
            <div class="bar-item"
                v-for="item in fixedList"
                :key="item.key"
                :title="item.name + ':' + item.number"
                :style="'background-color:' + item.color + ';width:' + item.length + '%'"
                @click="handleClick(item.url)">
            </div>
        </div>
    </div>

</template>

<script>
    import { colorList } from './config';

    export default {
        name: 'multi-task-progress-bar',
        props: {
            list: {
                required: true,
                type: Array,
            },
            total: {
                required: true,
                type: Number,
            },
            name: {
                type: String,
            },
            'label-width': {
                type: String,
                default: '100px',
            },
        },
        computed: {
            fixedList() {
                const a = this.list.map((item, i) => {
                    item.length = item.number / this.fixedtotalCount * 100;
                    item.color = colorList[i % colorList.length];
                    return item;
                });
                return a;
            },
            fixedtotalCount() {
                // if num > totalNum, then add
                return Math.max(this.list.reduce((previous, current) => {
                    return previous + current.number;
                }, 0), this.total);
            },
        },
        methods: {
            judgeEmpty(val) {
                return 'undefined' === typeof val || null === val || '' === val;
            },
            handleClick(val) {
                val && this.$emit('click', {
                    val,
                    name: this.name,
                });
            }
        }
    };
</script>

<style scoped>
    /* TODO */
    .bar-outter {
    }

    .bar-label {
        float: left;
    }

    .bar-context-outter {
        border: none;
        height: 20px;
        background-color: rgb(124, 154, 184);
        border-radius: 10px;
    }

    .bar-item {
        height: 100%;
        display: inline-block;
    }

    .bar-item:first-child {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    .bar-item:last-child {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
</style>
