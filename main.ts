let X = 0
let Y = 0
basic.forever(function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(X, Y)
            basic.pause(100)
            led.unplot(X, Y)
            basic.pause(100)
        }
    }
})
