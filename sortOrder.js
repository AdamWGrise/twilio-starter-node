const item1 = process.argv[2].toLowerCase();
const item2 = process.argv[3].toLowerCase();

if (item1 < item2) {
    console.log('-1');
} else if (item1 == item2) {
    console.log('0');
} else {
    console.log('1');
}