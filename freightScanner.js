let arr = [];

function scan(items) {
    let count = 0;
    items.forEach(check)
    function check(item) {
        if (item == 'contraband') {
            count = count + 1
        }
    };
    return count;
};

