const weirdFlexButOk= require('./server')

// console.log(weirdFlexButOk(1,2)===3);

// console.log(weirdFlexButOk(4,5)===9);

// console.log(weirdFlexButOk(5,5)===10);

test('explain what test is doing, such as weirdFlexButOk returns sum of 2 numbers', () => {
    expect(weirdFlexButOk(2,1)).toBe(3);
});