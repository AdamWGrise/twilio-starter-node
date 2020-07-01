function calculatePower(arr) {
    let result = arr.reduce((total, current) => total + current * 2, 0);
    return result;
}