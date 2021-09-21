basic.forever(function () {
    for (let index = 0; index <= 5; index++) {
        basic.pause(100)
        for (let index1 = 0; index1 <= 5; index1++) {
            led.plot(index, index1)
            led.unplot(index - 1, index1 - 1)
            basic.pause(100)
        }
    }
    for (let index1 = 0; index1 <= 5; index1++) {
        basic.pause(100)
        for (let index = 0; index <= 5; index++) {
            led.plot(index, index1)
            led.unplot(index - 1, index1 - 1)
            basic.pause(100)
        }
    }
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
})
