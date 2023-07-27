/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    function toBe(comp){
        if (comp !== val)
            throw "Not Equal";
        return true;
    }
    function notToBe(comp){
        if (comp === val) throw "Equal";
        return true;
    }
expect.toBe = toBe;
expect.notToBe = notToBe;
return expect;
};
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */