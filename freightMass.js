function calculateMass(arr) {
    let result = arr.reduce((total, current) => total + current.length, 0);
    return result;
}