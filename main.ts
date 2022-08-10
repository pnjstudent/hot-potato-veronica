let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = randint(5, 15)
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Forever)
    while (timer > 0) {
        timer += -1
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(1000)
    }
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showIcon(IconNames.Skull)
})
basic.forever(function () {
	
})
