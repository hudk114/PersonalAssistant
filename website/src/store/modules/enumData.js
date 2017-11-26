
const state = {
    chargeFirstType: [
        {
            key: 0,
            value: '正常吃饭',
        },
        {
            key: 1,
            value: '应酬娱乐',
        },
        {
            key: 2,
            value: '交通出行',
        },
        {
            key: 3,
            value: '住房',
        },
    ],
    chargeSecondeType: {
        0: [
            {
                key: 0,
                value: '早餐',
            },
            {
                key: 1,
                value: '午餐',
            },
            {
                key: 2,
                value: '晚餐',
            },
            {
                key: 3,
                value: '夜宵',
            },
        ],
        1: [
            {
                key: 0,
                value: '聚餐',
            },
            {
                key: 1,
                value: '约会',
            },
            {
                key: 2,
                value: 'ktv',
            },
            {
                key: 3,
                value: '其他',
            },
            {
                key: 4,
                value: '旅游',
            },
        ],
        2: [
            {
                key: 0,
                value: '公交卡',
            },
            {
                key: 1,
                value: '打车',
            },
        ],
        3: [
            {
                key: 0,
                value: '租房',
            },
        ],
    },
};

const getters = {
    getSecondType(state) {
        return val => {
            if ('undefined' === typeof val || null === val || '' === val) {
                return [];
            }
            return state.chargeSecondeType[val] || [];
        };
    },
};

const mutations = {

};

const actions = {

};

export default  {
    namespaced: true,
    getters,
    state,
    mutations,
    actions,
};
