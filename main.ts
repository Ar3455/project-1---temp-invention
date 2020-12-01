let temp = input.soundLevel()
if (temp >= 70) {
    light.setPixelColor(4, light.rgb(255, 0, 0))
} else if (temp < 70 || temp >= 40) {
    light.setPixelColor(4, light.rgb(0, 255, 0))
} else {
    light.setPixelColor(4, light.rgb(0, 0, 255))
}

