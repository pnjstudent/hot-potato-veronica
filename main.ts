let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = randint(5, 15)
    basic.showIcon(IconNames.Chessboard)
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Forever)
    while (timer > 0) {
        timer += -1
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
    }
    music.stopAllSounds()
    basic.showIcon(IconNames.Skull)
})
basic.forever(function () {
	
})
