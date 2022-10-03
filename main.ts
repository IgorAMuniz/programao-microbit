let p2 = 0
let p1 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showString("LET'S PLAY")
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    basic.pause(randint(1000, 10000))
    basic.showLeds(`
        # # . # #
        . # . # .
        . . # . .
        . # . # .
        # # . # #
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    p2 += 1
    basic.showLeds(`
        . . . # #
        . . . # .
        . . # . .
        . . . # .
        . . . # #
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    p1 += 1
    basic.showLeds(`
        # # . . .
        . # . . .
        . . # . .
        . # . . .
        # # . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
basic.forever(function () {
    p1 = 0
    p2 = 0
})
