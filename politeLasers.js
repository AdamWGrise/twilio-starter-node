function getLaserSetting(ask) {
    if (ask == 'please') {
        console.log('off')
        return('OFF')
    } else {
        console.log('on')
        return('ON')
    }
}