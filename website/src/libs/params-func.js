
const judgeEmpty = function judgeEmpty(val) {
    return 'undefined' === typeof val || null === val || '' === val;
};

export default {
    judgeEmpty,
};
