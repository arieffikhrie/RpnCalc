function RPNCalc(s) {
    if (s === '' || s === null || typeof s === 'undefined') {
        throw new Error('Is not possible');
    }
    var ss = s.split(' ');
    var numberStack = [];
    var operatorsList = ['+', '-', '*', '/'];
    for (var i = 0; i < ss.length; i++) {
        if (!operatorsList.includes(ss[i])) {
            numberStack.push(ss[i]);
        } else {
            var sec = parseInt(numberStack.pop());
            var fir = parseInt(numberStack.pop());

            var ans = 0;

            if (ss[i] === '+') {
                ans = fir + sec;
            }
            if (ss[i] === '-') {
                ans = fir - sec;
            }
            if (ss[i] === '*') {
                ans = fir * sec;
            }
            if (ss[i] === '/') {
                ans = parseInt(fir / sec);
            }
            numberStack.push(ans);
        }
    }
    return numberStack[0];
}
module.exports = RPNCalc;