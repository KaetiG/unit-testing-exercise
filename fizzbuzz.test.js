const weirdFizzBuzzButOk= require('./fizzbuzz')

test('taste testing fizz lifting drinks with caffeine!', () => {
    expect(weirdFizzBuzzButOk(15)).toBe('fizzbuzz');
});