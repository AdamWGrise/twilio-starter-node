let arr = [];
let num;

function getFirstAmountSorted(arr, num) {
    arr = arr.sort();
    newArr = [];
    for (var i = 0 ; i < num ; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}