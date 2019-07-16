const leapFrog = require('./leapyear')

test('its a leap frog, er, I mean year!', () => {
    expect(leapFrog(2000)).toBe(true);
});