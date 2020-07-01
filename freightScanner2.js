function scan(arr) {
    let outputArr = [];
    for (i = 0 ; i < arr.length ; i++) {
        if(arr[i] == 'contraband') {
            outputArr.push(i);
        }
    }
    return outputArr;
}