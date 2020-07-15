input.onButtonPressed(Button.A, function () {
    while (true) {
        plenbit.servoWrite(1, 90)
        plenbit.servoWrite(5, 90)
        basic.pause(200)
        plenbit.servoWrite(3, 90)
        plenbit.servoWrite(7, 90)
        basic.pause(200)
        plenbit.servoWrite(0, 90)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        plenbit.servoWrite(1, 180)
        plenbit.servoWrite(5, 180)
        basic.pause(200)
        plenbit.servoWrite(3, 180)
        plenbit.servoWrite(7, 180)
        basic.pause(200)
        plenbit.servoWrite(6, 90)
        basic.pause(200)
    }
})
basic.forever(function () {
	
})
