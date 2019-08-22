const RPNCalc = require('./index');

describe('RPN calc', function() {
    test('Input is "digit digit plus" operator should show correct result', () => {
        expect(RPNCalc('1 2 +')).toBe(3);
    });

    test('Input is "digit digit minus" operator should show correct result', () => {
        expect(RPNCalc('4 5 -')).toBe(-1);
    });

    test('Input is "digit digit multiply" operator should show correct result', () => {
        expect(RPNCalc('2 3 *')).toBe(6);
    });
    
    test('Input is "digit digit division" operator should show correct result', () => {
        expect(RPNCalc('4 2 /')).toBe(2);
    });
    
    test('Input is "digit digit division" operator should show correct integer result', () => {
        expect(RPNCalc('1 2 /')).toBe(0);
    });

    test('Input is multiple digits and operators and show correct reult', () => {
        expect(RPNCalc('3 4 - 5 +')).toBe(4);
    });

    test('Input is really complicated from wikipedia works', () => {
        expect(RPNCalc('15 7 1 1 + - / 3 * 2 1 1 + + -')).toBe(5);
    });
    
    test('Input is empty then throw', function() {
        expect(function() {
            RPNCalc('');
        }).toThrow();
    });
    
    test('Input is null then throw', function() {
        expect(function() {
            RPNCalc(null);
        }).toThrow();
    });
    
    test('Input is undefined then throw', function() {
        expect(function() {
            RPNCalc();
        }).toThrow();
    });
});