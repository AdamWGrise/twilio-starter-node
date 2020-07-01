function addFirstToLast(array) {
    var firstAndLast = '';

    if (array.length > 0) {
        last = array.length - 1;
        firstAndLast = array[0] + array[last];
    }

    return firstAndLast;
};

console.log(addFirstToLast(['super','duper','extra','lalala']));